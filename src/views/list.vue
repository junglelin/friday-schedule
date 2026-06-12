<script setup lang="ts">
import Button from "primevue/button";
import Tag from "primevue/tag";
import Menu from "primevue/menu";
import ConfirmDialog from "primevue/confirmdialog";
import { useConfirm } from "primevue/useconfirm";
import BlockUI from "primevue/blockui";
import ProgressSpinner from "primevue/progressspinner";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";

import dayjs from "dayjs";

import { db } from "../services/firebase";
import {
  collection,
  query,
  orderBy,
  getDocs,
  where,
  onSnapshot,
  updateDoc,
  doc,
} from "firebase/firestore";
import { QueryDocumentSnapshot } from "firebase/firestore";

import { ref, watch, onMounted, computed } from "vue";
import type { IngredientsCategories } from "../models/ingredients";
import { useIngredients } from "../services/ingredientsStore";
import FormDialog from "../components/FormDialog.vue";

interface CurrentWeather {
  humidity: string;
  pressure: string;
  windSpeed: string;
  windScale: string;
  windDir: string;
  wind360: string;
  text: string;
  feelsLike: string;
  temp: string;
  obsTime: string;
}

interface CurrentLocation {
  latitude?: number;
  longitude?: number;
  display_name?: string;
  // "ISO3166-2-lvl4": string;
  // city: string;
  // country: string;
  // country_code: string;
  // house_number: string;
  // neighbourhood: string;
  // postcode: string;
  // road: string;
  // suburb: string;
  // display_name: string;
}

export interface MyDocumentData {
  id?: string;
  remark: string;
  createDate?: string;
  updateDate?: string;
  forSearchDate?: Date;
  isCurrentDate: string;
  isCurrentTime: string;
  options: {
    daily: number[];
    behavior: number[];
    hospital: number[];
    medicine: number[];
    vaccine: number[];
    food: number[];
  };
  weather: CurrentWeather;
  locationMode?: number;
  location: CurrentLocation;
  status: boolean;
  createBy: string;
  modifyBy: string;
  timestampCurrentDateTime?: number;
}

const mappingWeather: Record<number, string> = {
  0: "晴天",
  1: "陰天",
  2: "雨天",
};

const todayStartDateTime = ref<Date | null>(dayjs().startOf("day").toDate());

// const todayEndDateTime = ref<Date | null>(
//   dayjs().endOf("day").subtract(1, "second").toDate()
// );
// const todayStartDateTime = ref<Date | null>(
//   dayjs("2025-09-01").startOf("day").toDate()
// );

// const todayEndDateTime = ref<Date | null>(
//   dayjs("2025-02-26").endOf("day").subtract(1, "second").toDate()
// );

const currentFetchDateTime = ref<Date | null>();
const querySnapshotData = ref<MyDocumentData[]>([]);
const formStatus = ref(false);

const confirm = useConfirm();
const isLoading = ref(true);
const toast = useToast();

const { ingredients: ingredientList } = useIngredients();

const formDialogVisible = ref(false);
const formDialogEditData = ref<any>(null);

function getIcon(optionName: string): string {
  const iconMap: {
    [key in IngredientsCategories]: string;
  } = {
    daily: "pi-exclamation-circle",
    behavior: "pi-exclamation-triangle",
    hospital: "pi-bolt",
    medicine: "pi-eraser",
    vaccine: "pi-ban",
    food: "pi-apple",
  };

  const iconClass =
    iconMap[optionName as keyof typeof iconMap] || "pi-question";
  return `pi ${iconClass}`;
}

const mapDocToData = (doc: QueryDocumentSnapshot): MyDocumentData => {
  const data = doc.data();
  return {
    id: doc.id,
    remark: data.remark,
    createDate: data.createDate,
    updateDate: data.updateDate,
    forSearchDate: data.forSearchDate,
    isCurrentDate: data.isCurrentDate,
    isCurrentTime: data.isCurrentTime,
    options: {
      daily: data.options.daily || [],
      behavior: data.options.behavior || [],
      hospital: data.options.hospital || [],
      medicine: data.options.medicine || [],
      vaccine: data.options.vaccine || [],
      food: data.options.food || [],
    },
    weather: data.weather,
    locationMode: data.locationMode,
    location: data.location,
    status: data.status,
    createBy: data.createBy,
    modifyBy: data.modifyBy,
    timestampCurrentDateTime: data.timestampCurrentDateTime,
  };
};

const fetch = async () => {
  try {
    const latestQuery = query(
      collection(db, import.meta.env.VITE_5BASE_DC),
      where("forSearchDate", ">=", todayStartDateTime.value),
      // where("forSearchDate", "<=", todayEndDateTime.value),
      orderBy("timestampCurrentDateTime", "desc"),
    );

    const querySnapshot = await getDocs(latestQuery);

    querySnapshotData.value = querySnapshot.docs.map(mapDocToData);

    //console.log(JSON.stringify(querySnapshotData.value, null, 2));

    // patchDocumentsDate(); //如果需要patch 資料時使用

    if (querySnapshot.docs.length > 0) {
      const [lastDoc] = querySnapshot.docs.slice(-1);
      const lastForSearchDate = lastDoc.data().timestampCurrentDateTime;
      currentFetchDateTime.value = lastForSearchDate;
    }
  } catch (e) {
    console.error("Error fetching documents: ", e);
  } finally {
    isLoading.value = false;
  }
};

// async function patchDocumentsDate() {
//   for (const item of querySnapshotData.value) {
//     const currentDateTime = `${item.isCurrentDate} ${item.isCurrentTime}`;

//     console.log({
//       id: item.id,
//       // status: item.status,
//       // locationMode: item.locationMode,
//       isCurrentDate: item.isCurrentDate,
//       isCurrentTime: item.isCurrentTime,

//       timestampCurrentDateTime: dayjs(item.timestampCurrentDateTime).valueOf(),
//       updateTimestampCurrentDateTime: dayjs(currentDateTime).valueOf(),
//     });

//     // const docRef = doc(db, import.meta.env.VITE_5BASE_DC, item.id!);
//     // try {
//     //   await updateDoc(docRef, {
//     //     locationMode: 2,
//     //   });
//     //   console.log("Document successfully updated!");
//     // } catch (error) {
//     //   console.error("Error updating document: ", error);
//     // }
//   }
// }

// AppFooter add logic removed; now handled in dashboard.vue

const listenForChanges = () => {
  const latestQuery = query(
    collection(db, import.meta.env.VITE_5BASE_DC),
    where("forSearchDate", ">=", todayStartDateTime.value),
    // where("forSearchDate", "<=", todayEndDateTime.value),
    orderBy("timestampCurrentDateTime", "desc"),
  );

  onSnapshot(latestQuery, (querySnapshot) => {
    querySnapshotData.value = querySnapshot.docs.map(mapDocToData);
  });
};

const confirmUpdate = (data: MyDocumentData) => {
  confirm.require({
    message: "Are you sure you want to proceed?",
    header: "Update data",
    icon: "pi pi-exclamation-triangle",
    rejectProps: {
      label: "Cancel",
      severity: "secondary",
      outlined: true,
    },
    acceptProps: {
      label: "Keep",
    },
    accept: async () => {
      formDialogEditData.value = {
        ...data,
        currentUpdateRefDocId: data.id,
        currentDate: data.isCurrentDate,
        currentTime: data.isCurrentTime,
        options: Object.entries(data.options).flatMap(([category, arr]) =>
          arr.map((v) => [category, v]),
        ),
      };
      formDialogVisible.value = true;
    },
    reject: () => {
      formDialogVisible.value = false;
    },
  });
};

const confirmDelete = (refDocId: string | undefined) => {
  confirm.require({
    message: "Are you sure you want to proceed?",
    header: "Delete data",
    icon: "pi pi-exclamation-triangle",
    rejectProps: {
      label: "Cancel",
      severity: "secondary",
      outlined: true,
    },
    acceptProps: {
      severity: "danger",
      label: "Delete",
    },
    accept: async () => {
      if (refDocId) {
        try {
          const docRef = doc(db, import.meta.env.VITE_5BASE_DC, refDocId);

          await updateDoc(docRef, {
            status: false,
          });
          console.log(`Document(${refDocId}) successfully deleted!`);
        } catch (error) {
          toast.add({
            severity: "error",
            summary: "Error",
            detail: `發生不可預期的錯誤，請先截圖。${error}`,
            life: 5000,
          });
        }
      } else {
        toast.add({
          severity: "error",
          summary: "Error",
          detail: `發生不可預期的錯誤，請先截圖。Document ID (${refDocId}) is undefined.`,
          life: 5000,
        });
      }
    },
  });
};

// 每筆紀錄共用一個 popup 選單，避免誤觸編輯/刪除
const itemMenu = ref();
const menuTargetItem = ref<MyDocumentData | null>(null);
const itemMenuItems = [
  {
    label: "編輯",
    icon: "pi pi-pen-to-square",
    command: () => {
      if (menuTargetItem.value) confirmUpdate(menuTargetItem.value);
    },
  },
  {
    label: "刪除",
    icon: "pi pi-trash",
    command: () => {
      if (menuTargetItem.value) confirmDelete(menuTargetItem.value.id);
    },
  },
];
const openItemMenu = (event: Event, item: MyDocumentData) => {
  menuTargetItem.value = item;
  itemMenu.value.toggle(event);
};

const expandedIndices = ref<string[]>([]);
const toggleWeather = (index: string) => {
  if (expandedIndices.value.includes(index)) {
    expandedIndices.value = expandedIndices.value.filter((i) => i !== index);
  } else {
    expandedIndices.value.push(index);
  }
};

// 定義 FormDialog 事件處理
// FormDialog handlers removed; now handled in dashboard.vue

// watch(options, (newVal: [string, number][]) => {
//   let hasMedicine20 = false;
//   let hasMedicine19 = false;

//   newVal.forEach((item) => {
//     const [type, value] = item;

//     if (type === "medicine" && value === 20) {
//       hasMedicine20 = true;
//     } else if (type === "medicine" && value === 19) {
//       hasMedicine19 = true;
//     }
//   });

//   if (hasMedicine20 && hasMedicine19) {
//     remark.value = "擠 5 下泡 5 分鐘、泡 5 分鐘";
//   } else if (hasMedicine20) {
//     remark.value = "泡 5 分鐘";
//   } else if (hasMedicine19) {
//     remark.value = "擠 5 下泡 5 分鐘";
//   } else {
//     remark.value = currentUpdateRemarkValue.value || "";
//   }
// });

function getIngredientLabel(optionName: string, value: number): string {
  const category = optionName as keyof typeof ingredientList.value;
  const foundIngredient = ingredientList.value[category]?.find(
    (ingredient) => ingredient.value === value,
  );
  return foundIngredient?.label || "";
}

const filteredData = computed(() =>
  querySnapshotData.value.filter((item) => item.status),
);

watch(formStatus, (newVal) => {
  if (newVal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});

onMounted(async () => {
  fetch();
  listenForChanges();
});
</script>

<template>
  <ConfirmDialog></ConfirmDialog>
  <Toast position="center" />
  <BlockUI :blocked="isLoading" :fullScreen="true"></BlockUI>
  <ProgressSpinner
    v-if="isLoading"
    class="stroke-[var(--main-color)] w-16 h-16 z-[1200] !fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    strokeWidth="8"
    fill="transparent"
    animationDuration=".5s"
    aria-label="Custom ProgressSpinner"
  />
  <main>
    <Menu ref="itemMenu" :model="itemMenuItems" :popup="true" />
    <section class="p-2 pb-[calc(80px+var(--footer-gap))] text-sm">
      <div
        v-for="(item, index) in filteredData"
        :key="index"
        class="border border-[var(--line-color)] rounded-lg p-2 mb-2 shadow-sm"
      >
        <div class="grid grid-cols-2 gap-1 items-center">
          <h2 class="!text-base font-bold">
            {{ item.isCurrentDate }} {{ item.isCurrentTime }}
          </h2>
          <div class="text-right">
            <template v-if="typeof item.weather === 'number'">
              {{ mappingWeather[item.weather] }}
            </template>
            <template v-else>
              <Button
                icon="pi pi-map-marker"
                class="w-[80px] h-[40px] bg-[var(--main-color)] [&_span.p-button-icon]:text-black dark:[&_span.p-button-icon]:text-white [&_span.p-button-label]:text-black dark:[&_span.p-button-label]:text-white"
                size="small"
                variant="text"
                @click="toggleWeather(item.id!)"
              ></Button>
            </template>
          </div>
        </div>
        <div
          v-if="expandedIndices.includes(item.id!)"
          class="transition duration-300 ease-in-out grid grid-cols-3 [&_div]:p-[2px] [&_div]:m-[2px] [&_div]:bg-[var(--line-color)] [&_div]:rounded-md"
        >
          <div class="col-span-3" v-if="item.location?.longitude">
            ({{ item.location.longitude }},{{ item.location.latitude }})<br />
            {{ item.location.display_name }}
          </div>
          <div>溫度: {{ item.weather.temp }}</div>
          <div>體感溫度: {{ item.weather.feelsLike }}</div>
          <div>相對濕度: {{ item.weather.humidity }}</div>
          <div>天氣狀況: {{ item.weather.text }}</div>
          <div>風向360角度: {{ item.weather.wind360 }}</div>
          <div>風向: {{ item.weather.windDir }}</div>
          <div>風力等級: {{ item.weather.windScale }}</div>
          <div>風速(km/hr): {{ item.weather.windSpeed }}</div>
          <div>大氣壓強: {{ item.weather.pressure }}</div>
          <div class="col-span-3">數據觀測時間: {{ item.weather.obsTime }}</div>
        </div>
        <div class="flex">
          <div class="w-full">
            <div class="[&_span]:m-1">
              <template
                v-for="(option, optionName) in item.options"
                :key="optionName"
              >
                <template v-for="value in option" :key="value">
                  <Tag
                    :icon="getIcon(optionName)"
                    :severity="optionName === 'behavior' ? 'danger' : 'info'"
                    :value="getIngredientLabel(optionName, value)"
                  ></Tag>
                </template>
              </template>
            </div>

            <div
              v-if="item.remark"
              class="bg-[var(--line-color)] opacity-50 p-2 rounded-md"
            >
              Remark: {{ item.remark }}
            </div>
          </div>
          <div class="flex">
            <Button
              icon="pi pi-ellipsis-v"
              severity="secondary"
              class="w-[40px] h-[40px]"
              size="small"
              variant="text"
              @click="openItemMenu($event, item)"
            >
            </Button>
          </div>
        </div>
      </div>
    </section>

    <!-- AppFooter removed; add logic handled in dashboard.vue -->
  </main>

  <FormDialog
    :visible="formDialogVisible"
    :editData="formDialogEditData"
    @update:visible="formDialogVisible = $event"
  />
</template>

<style scoped></style>
