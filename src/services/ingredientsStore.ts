import { ref, computed } from "vue";
import {
  collection,
  doc,
  addDoc,
  onSnapshot,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";
import {
  ingredients as staticIngredients,
  type IngredientsCategories,
} from "../models/ingredients";

export interface IngredientItem {
  label: string;
  value: number;
  active: boolean;
  sort: number;
  idx: number;
  favorite?: boolean;
}

export interface FavoriteEntry {
  category: IngredientsCategories;
  item: IngredientItem;
}

export type IngredientsMap = Record<IngredientsCategories, IngredientItem[]>;

export const ingredientsCategories: IngredientsCategories[] = [
  "behavior",
  "daily",
  "food",
  "medicine",
  "vaccine",
  "hospital",
];

export const categoryDisplayNames: Record<IngredientsCategories, string> = {
  behavior: "行為",
  daily: "日常",
  food: "食物",
  medicine: "藥物",
  vaccine: "疫苗",
  hospital: "醫院",
};

const INGREDIENTS_DOC_ID = "master";

const cloneStatic = (): IngredientsMap =>
  JSON.parse(JSON.stringify(staticIngredients));

// 雲端資料載入前先用程式碼內建的選項，確保畫面不會空白
const ingredientsData = ref<IngredientsMap>(cloneStatic());
const isCloudData = ref(false);
const isReady = ref(false);

// 顯示順序存在 sort 文件（idx 陣列，位置即順序），與 chart 頁拖曳排序共用同一份
const sortOrderArray = ref<number[]>([]);
const sortDocId = ref("");

// 大分類顯示順序，存在 ingredients 文件的 categoryOrder 欄位
const categoryOrder = ref<IngredientsCategories[]>([...ingredientsCategories]);

// 過濾無效值並補上缺漏的分類，確保資料異常時每個分類仍會顯示
const normalizeCategoryOrder = (raw: unknown): IngredientsCategories[] => {
  const fromDoc = (Array.isArray(raw) ? raw : []).filter(
    (c): c is IngredientsCategories =>
      (ingredientsCategories as string[]).includes(c)
  );
  const missing = ingredientsCategories.filter((c) => !fromDoc.includes(c));
  return [...fromDoc, ...missing];
};

let started = false;

const ingredientsDocRef = () =>
  doc(db, import.meta.env.VITE_5BASE_INGREDIENTS, INGREDIENTS_DOC_ID);

function startListening() {
  if (started) return;
  started = true;
  onSnapshot(
    ingredientsDocRef(),
    (snap) => {
      if (snap.exists()) {
        const data = snap.data();
        const next = {} as IngredientsMap;
        ingredientsCategories.forEach((category) => {
          next[category] = (data[category] || []) as IngredientItem[];
        });
        ingredientsData.value = next;
        categoryOrder.value = normalizeCategoryOrder(data.categoryOrder);
        isCloudData.value = true;
      }
      isReady.value = true;
    },
    (error) => {
      console.error("Error listening ingredients:", error);
      isReady.value = true;
    }
  );

  onSnapshot(
    collection(db, import.meta.env.VITE_5BASE_SORT),
    (querySnapshot) => {
      querySnapshot.forEach((sortDoc) => {
        sortDocId.value = sortDoc.id;
        sortOrderArray.value = sortDoc.data().sort || [];
      });
    },
    (error) => {
      console.error("Error listening ingredients-sort:", error);
    }
  );
}

// 依 sort 文件排序後的選項（表單與管理頁共用）
const sortedIngredients = computed(() => {
  const result = {} as IngredientsMap;
  const idxToPosition: Record<number, number> = {};
  sortOrderArray.value.forEach((idx, position) => {
    idxToPosition[idx] = position;
  });
  categoryOrder.value.forEach((category) => {
    const items = ingredientsData.value[category];
    if (sortOrderArray.value.length > 0) {
      result[category] = [...items].sort((a, b) => {
        const aSort = idxToPosition[a.idx] ?? 9999;
        const bSort = idxToPosition[b.idx] ?? 9999;
        return aSort - bSort;
      });
    } else {
      result[category] = items;
    }
  });
  return result;
});

// 常用：被標記 favorite 的選項，依分類與選項目前的顯示順序彙整
const favoriteItems = computed(() => {
  const result: FavoriteEntry[] = [];
  categoryOrder.value.forEach((category) => {
    sortedIngredients.value[category].forEach((item) => {
      if (item.favorite) {
        result.push({ category, item });
      }
    });
  });
  return result;
});

export function useIngredients() {
  startListening();
  return {
    ingredients: ingredientsData,
    sortedIngredients,
    favoriteItems,
    categoryOrder,
    isCloudData,
    isReady,
  };
}

// 一次性：把程式碼內建選項匯入 Firestore
export async function seedIngredientsFromStatic() {
  await setDoc(ingredientsDocRef(), cloneStatic());
}

export async function saveIngredientsCategory(
  category: IngredientsCategories,
  items: IngredientItem[]
) {
  await updateDoc(ingredientsDocRef(), { [category]: items });
}

// 大分類順序；先樂觀更新讓 UI 立即反應，失敗再還原
export async function saveCategoryOrder(order: IngredientsCategories[]) {
  const previous = categoryOrder.value;
  categoryOrder.value = order;
  try {
    await updateDoc(ingredientsDocRef(), { categoryOrder: order });
  } catch (error) {
    categoryOrder.value = previous;
    throw error;
  }
}

// 寫回完整的 idx 順序陣列；先樂觀更新讓 UI 立即反應，失敗再還原
export async function saveSortOrder(idxArray: number[]) {
  const previous = sortOrderArray.value;
  sortOrderArray.value = idxArray;
  try {
    if (sortDocId.value) {
      await updateDoc(
        doc(db, import.meta.env.VITE_5BASE_SORT, sortDocId.value),
        { sort: idxArray }
      );
    } else {
      const newDoc = await addDoc(
        collection(db, import.meta.env.VITE_5BASE_SORT),
        { sort: idxArray }
      );
      sortDocId.value = newDoc.id;
    }
  } catch (error) {
    sortOrderArray.value = previous;
    throw error;
  }
}

// value 為類別內唯一且只增不減，歷史紀錄靠它對回標籤
export function nextValue(items: IngredientItem[]): number {
  return items.reduce((max, item) => Math.max(max, item.value), 0) + 1;
}

// idx 為全域唯一，sort 文件以 idx 為 key
export function nextGlobalNumbers(all: IngredientsMap): {
  sort: number;
  idx: number;
} {
  let maxSort = 0;
  let maxIdx = 0;
  ingredientsCategories.forEach((category) => {
    all[category].forEach((item) => {
      maxSort = Math.max(maxSort, item.sort);
      maxIdx = Math.max(maxIdx, item.idx);
    });
  });
  return { sort: maxSort + 1, idx: maxIdx + 1 };
}
