<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import ToggleSwitch from "primevue/toggleswitch";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";
import draggable from "vuedraggable";
import type { IngredientsCategories } from "../models/ingredients";
import {
  useIngredients,
  saveIngredientsCategory,
  saveSortOrder,
  nextValue,
  nextGlobalNumbers,
  ingredientsCategories,
  categoryDisplayNames,
  type IngredientItem,
} from "../services/ingredientsStore";

const route = useRoute();
const router = useRouter();
const toast = useToast();
const { ingredients, sortedIngredients, isCloudData, isReady } =
  useIngredients();

const category = computed(
  () => route.params.category as IngredientsCategories
);
const isValidCategory = computed(() =>
  (ingredientsCategories as string[]).includes(category.value)
);

const items = computed(() => sortedIngredients.value[category.value] || []);

const isSaving = ref(false);
const newLabel = ref("");
const editingValue = ref<number | null>(null);
const editingLabel = ref("");

function showError(error: unknown) {
  toast.add({
    severity: "error",
    summary: "Error",
    detail: `發生不可預期的錯誤，請先截圖。${error}`,
    life: 5000,
  });
}

async function persist(nextItems: IngredientItem[]) {
  isSaving.value = true;
  try {
    await saveIngredientsCategory(category.value, nextItems);
    return true;
  } catch (error) {
    showError(error);
    return false;
  } finally {
    isSaving.value = false;
  }
}

async function addItem() {
  const label = newLabel.value.trim();
  if (!label) return;

  const current = ingredients.value[category.value];
  if (current.some((item) => item.label === label)) {
    toast.add({
      severity: "warn",
      summary: "重複",
      detail: `「${label}」已存在`,
      life: 3000,
    });
    return;
  }

  const { sort, idx } = nextGlobalNumbers(ingredients.value);
  const newItem: IngredientItem = {
    label,
    value: nextValue(current),
    active: true,
    sort,
    idx,
  };
  const ok = await persist([...current, newItem]);
  if (ok) {
    newLabel.value = "";
  }
}

function startEdit(item: IngredientItem) {
  editingValue.value = item.value;
  editingLabel.value = item.label;
}

async function saveEdit(item: IngredientItem) {
  const label = editingLabel.value.trim();
  if (!label) return;

  const nextItems = ingredients.value[category.value].map((i) =>
    i.value === item.value ? { ...i, label } : i
  );
  const ok = await persist(nextItems);
  if (ok) {
    editingValue.value = null;
  }
}

async function toggleActive(item: IngredientItem, active: boolean) {
  const nextItems = ingredients.value[category.value].map((i) =>
    i.value === item.value ? { ...i, active } : i
  );
  await persist(nextItems);
}

async function toggleFavorite(item: IngredientItem) {
  const nextItems = ingredients.value[category.value].map((i) =>
    i.value === item.value ? { ...i, favorite: !i.favorite } : i
  );
  await persist(nextItems);
}

// 拖曳後把所有分類的 idx 依目前顯示順序重組成完整的 sort 陣列寫回
async function onReorder(newItems: IngredientItem[]) {
  const newSort: number[] = [];
  ingredientsCategories.forEach((c) => {
    const list = c === category.value ? newItems : sortedIngredients.value[c];
    list.forEach((item) => newSort.push(item.idx));
  });
  isSaving.value = true;
  try {
    await saveSortOrder(newSort);
  } catch (error) {
    showError(error);
  } finally {
    isSaving.value = false;
  }
}
</script>

<template>
  <Toast position="center" />
  <header
    class="p-2 min-h-[56px] flex items-center gap-1 border-b border-[var(--line-color)]"
  >
    <Button
      icon="pi pi-arrow-left"
      variant="text"
      severity="secondary"
      class="w-[40px] h-[40px] shrink-0"
      @click="router.push('/options')"
    ></Button>
    <h1 v-if="isValidCategory" class="!text-lg font-extrabold">
      {{ categoryDisplayNames[category] }}
      <span class="opacity-50 text-sm uppercase">{{ category }}</span>
    </h1>
  </header>
  <main class="p-2 pb-[calc(80px+var(--footer-gap))] text-sm">
    <div v-if="!isReady" class="p-4 text-center">載入中...</div>

    <div v-else-if="!isValidCategory" class="p-2">
      找不到這個分類，請回「選項管理」重新選擇。
    </div>

    <div v-else-if="!isCloudData" class="p-2">
      選項尚未匯入雲端，請先回「選項管理」執行匯入。
    </div>

    <div v-else>
      <p class="opacity-60 text-xs my-2">
        按住 ☰ 拖曳排序；選項只能停用不能刪除，停用後不再出現於新增表單，歷史紀錄仍正常顯示。
      </p>
      <div class="flex gap-1 py-2">
        <InputText
          v-model="newLabel"
          class="w-full"
          placeholder="新增選項名稱"
          @keyup.enter="addItem"
        />
        <Button
          icon="pi pi-plus"
          class="w-[46px] shrink-0"
          :disabled="isSaving || !newLabel.trim()"
          @click="addItem"
        ></Button>
      </div>
      <draggable
        :model-value="items"
        item-key="value"
        tag="ul"
        handle=".drag-handle"
        :disabled="isSaving"
        class="border border-[var(--line-color)] rounded-lg shadow-sm overflow-hidden"
        @update:model-value="(value: IngredientItem[]) => onReorder(value)"
      >
        <template #item="{ element: item }">
          <li
            class="flex items-center gap-1 px-1 min-h-[48px] border-b border-[var(--line-color)] last:border-b-0"
          >
            <i
              class="pi pi-bars drag-handle opacity-40 p-2 shrink-0 touch-none"
            ></i>
            <template v-if="editingValue === item.value">
              <InputText
                v-model="editingLabel"
                class="w-full"
                @keyup.enter="saveEdit(item)"
              />
              <Button
                icon="pi pi-check"
                class="w-[40px] h-[40px] shrink-0"
                :disabled="isSaving || !editingLabel.trim()"
                @click="saveEdit(item)"
              ></Button>
              <Button
                icon="pi pi-times"
                severity="secondary"
                variant="outlined"
                class="w-[40px] h-[40px] shrink-0"
                @click="editingValue = null"
              ></Button>
            </template>
            <template v-else>
              <span
                class="w-full"
                :class="{ 'opacity-40 line-through': !item.active }"
              >
                {{ item.label }}
              </span>
              <Button
                :icon="item.favorite ? 'pi pi-star-fill' : 'pi pi-star'"
                variant="text"
                class="w-[40px] h-[40px] shrink-0"
                :class="item.favorite ? '[&_.p-button-icon]:text-yellow-500' : ''"
                :disabled="isSaving"
                @click="toggleFavorite(item)"
              ></Button>
              <Button
                icon="pi pi-pencil"
                variant="text"
                class="w-[40px] h-[40px] shrink-0"
                :disabled="isSaving"
                @click="startEdit(item)"
              ></Button>
              <ToggleSwitch
                :modelValue="item.active"
                :disabled="isSaving"
                class="shrink-0"
                @update:modelValue="(val: boolean) => toggleActive(item, val)"
              />
            </template>
          </li>
        </template>
      </draggable>
    </div>
  </main>
</template>

<style scoped></style>
