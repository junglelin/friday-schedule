<script setup lang="ts">
import Button from "primevue/button";
import Tag from "primevue/tag";
import DatePicker from "primevue/datepicker";
import Checkbox from "primevue/checkbox";
import Textarea from "primevue/textarea";
import Select from "primevue/select";
import ConfirmDialog from "primevue/confirmdialog";
import { useConfirm } from "primevue/useconfirm";

import dayjs from "dayjs";

import { db } from "./services/firebase";
import {
  collection,
  addDoc,
  query,
  orderBy,
  getDocs,
  where,
  onSnapshot,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { QueryDocumentSnapshot } from "firebase/firestore";

import { ref, watch, onMounted, watchEffect } from "vue";

interface MyDocumentData {
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
  weather: number;
  status: boolean;
  createBy: string;
}

interface WeatherOption {
  name: string;
  value: number;
}

const optionsWeather: WeatherOption[] = [
  { name: "晴天", value: 0 },
  { name: "陰天", value: 1 },
  { name: "雨天", value: 2 },
];

const mappingWeather: Record<number, string> = {
  0: "晴天",
  1: "陰天",
  2: "雨天",
};

const currentDate = ref<Date | null>();
const currentTime = ref<Date | null>();
const todayStartDateTime = ref<Date | null>(dayjs().startOf("day").toDate());
const todayEndDateTime = ref<Date | null>(
  dayjs().endOf("day").subtract(1, "second").toDate()
);
const currentFetchDateTime = ref<Date | null>();
const querySnapshotData = ref<MyDocumentData[]>([]);
const remark = ref("");
const options = ref<[string, number][]>([]);
const weather = ref(0);
const currentUpdateRefDocId = ref("");

const calendatStatus = ref(false);
const formStatus = ref(false);

const confirm = useConfirm();

type IngredientOption = { label: string; value: number };

type IngredientsCategories =
  | "daily"
  | "behavior"
  | "hospital"
  | "medicine"
  | "vaccine"
  | "food";

const ingredients = ref<{
  [key in IngredientsCategories]: IngredientOption[];
}>({
  daily: [
    { label: "家裡大便", value: 1 },
    { label: "散步大便", value: 2 },
    { label: "刷牙", value: 3 },
    { label: "家裡洗澡", value: 4 },
    { label: "美容洗澡", value: 5 },
    { label: "剪指甲", value: 6 },
    { label: "穿鞋", value: 7 },
  ],
  behavior: [
    { label: "舔空氣", value: 1 },
    { label: "看屁股", value: 2 },
    { label: "聞屁股", value: 3 },
    { label: "吐", value: 4 },
    { label: "咬腳", value: 5 },
    { label: "抓左耳", value: 6 },
    { label: "抓右耳", value: 7 },
    { label: "抓癢", value: 8 },
    { label: "抓右臉", value: 9 },
    { label: "抓左臉", value: 10 },
    { label: "抓左下巴", value: 11 },
    { label: "抓右下巴", value: 12 },
    { label: "抓下巴", value: 13 },
    { label: "抓身體", value: 14 },
    { label: "抓左側身體", value: 15 },
    { label: "抓右側身體", value: 16 },
  ],
  hospital: [
    { label: "猩猩狐狸動物醫院(皮膚科)", value: 1 },
    { label: "星宇", value: 2 },
  ],
  medicine: [
    { label: "情緒藥", value: 1 },
    { label: "安癢快", value: 2 },
    { label: "止瀉", value: 3 },
    { label: "全能狗s", value: 4 },
    { label: "胃乳", value: 5 },
    { label: "制酸劑", value: 6 },
    { label: "噴下巴(神經醯胺)", value: 7 },
    { label: "噴耳朵(神經醯胺)", value: 8 },
    { label: "身體兩側(神經醯胺)", value: 9 },
    { label: "四腳(神經醯胺)", value: 10 },
    { label: "噴下巴(類固醇)", value: 11 },
    { label: "噴耳朵(類固醇)", value: 12 },
    { label: "身體兩側(類固醇)", value: 13 },
    { label: "四腳(類固醇)", value: 14 },
    { label: "心疥爽", value: 15 },
    { label: "益百分", value: 16 },
  ],
  vaccine: [
    { label: "十合一，狂犬", value: 1 },
    { label: "萊姆疫苗", value: 2 },
  ],
  food: [
    { label: "ans20 1/2 + 法米納雞肉石榴1/2", value: 1 },
    { label: "ans20 + 法米納雞肉石榴 (2 :1)", value: 2 },
    { label: "ans20 + 法米納雞肉石榴 (3 :1)", value: 3 },
    { label: "ans20", value: 4 },
    { label: "地瓜", value: 5 },
  ],
});

function getIcon(optionName: string): string {
  const iconMap: {
    [key in
      | "daily"
      | "behavior"
      | "hospital"
      | "medicine"
      | "vaccine"
      | "food"]: string;
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
    status: data.status,
    createBy: data.createBy,
  };
};

const fetch = async () => {
  try {
    const latestQuery = query(
      collection(db, import.meta.env.VITE_5BASE_DC),
      where("forSearchDate", ">=", todayStartDateTime.value),
      where("forSearchDate", "<=", todayEndDateTime.value),
      orderBy("forSearchDate", "desc")
    );

    const querySnapshot = await getDocs(latestQuery);

    querySnapshotData.value = querySnapshot.docs.map(mapDocToData);

    if (querySnapshot.docs.length > 0) {
      const [lastDoc] = querySnapshot.docs.slice(-1);
      const lastForSearchDate = lastDoc.data().forSearchDate;
      currentFetchDateTime.value = lastForSearchDate;
    }
  } catch (e) {
    console.error("Error fetching documents: ", e);
  }
};

const listenForChanges = () => {
  const latestQuery = query(
    collection(db, import.meta.env.VITE_5BASE_DC),
    where("forSearchDate", ">=", todayStartDateTime.value),
    where("forSearchDate", "<=", todayEndDateTime.value),
    orderBy("isCurrentTime", "desc")
  );

  onSnapshot(latestQuery, (querySnapshot) => {
    querySnapshotData.value = querySnapshot.docs.map(mapDocToData);
  });
};

const create = async () => {
  const formattedOptions: MyDocumentData["options"] = {
    daily: [],
    behavior: [],
    hospital: [],
    medicine: [],
    vaccine: [],
    food: [],
  };

  if (options.value && options.value.length) {
    options.value.forEach(([category, value]) => {
      if (formattedOptions[category as keyof MyDocumentData["options"]]) {
        formattedOptions[category as keyof MyDocumentData["options"]].push(
          value
        );
      }
    });
  }

  currentFetchDateTime.value = dayjs().toDate();

  const payloadData = {
    remark: remark.value || "",
    createDate: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    forSearchDate: currentFetchDateTime.value,
    isCurrentDate: dayjs(currentDate.value).format("YYYY-MM-DD"),
    isCurrentTime: dayjs(currentTime.value).format("HH:mm:ss"),
    options: formattedOptions,
    weather: weather.value,
    status: false,
    createBy: "Cathy",
  };

  try {
    if (currentUpdateRefDocId.value) {
      const docRef = doc(
        db,
        import.meta.env.VITE_5BASE_DC,
        currentUpdateRefDocId.value
      );
      try {
        await updateDoc(docRef, payloadData);
        console.log("Document successfully updated!");
      } catch (error) {
        console.error("Error updating document: ", error);
      }
    } else {
      const docRef = await addDoc(
        collection(db, import.meta.env.VITE_5BASE_DC),
        payloadData
      );
      console.log("Document written with ID: ", docRef.id);
    }
  } catch (e) {
    console.error("Error adding document: ", e);
  } finally {
    formStatus.value = false;
    remark.value = "";
    options.value = [];
  }
};

onMounted(async () => {
  fetch();
});

watch(formStatus, (newVal) => {
  if (newVal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});

watchEffect(() => {
  if (currentFetchDateTime.value) {
    listenForChanges();
  }
});

function getIngredientLabel(optionName: string, value: number): string {
  const category = optionName as keyof typeof ingredients.value;
  const foundIngredient = ingredients.value[category]?.find(
    (ingredient) => ingredient.value === value
  );
  return foundIngredient?.label || "";
}

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
      formStatus.value = true;
      currentDate.value = new Date(data.isCurrentDate);
      currentTime.value = new Date(
        data.isCurrentDate + " " + data.isCurrentTime
      );
      remark.value = data.remark;
      weather.value = data.weather;

      options.value = [];
      Object.keys(data.options).forEach((category) => {
        data.options[category as keyof MyDocumentData["options"]].forEach(
          (value) => {
            options.value.push([category, value]);
          }
        );
      });
      const formattedOptions: MyDocumentData["options"] = {
        daily: [],
        behavior: [],
        hospital: [],
        medicine: [],
        vaccine: [],
        food: [],
      };

      options.value.forEach(([category, value]) => {
        if (formattedOptions[category as keyof MyDocumentData["options"]]) {
          formattedOptions[category as keyof MyDocumentData["options"]].push(
            value
          );
        }
      });

      currentUpdateRefDocId.value = data?.id ?? "";
    },
    reject: () => {
      formStatus.value = false;
      currentDate.value = null;
      currentTime.value = null;
      remark.value = "";
      weather.value = 0;
      options.value = [];
      currentUpdateRefDocId.value = "";
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
          await deleteDoc(
            doc(collection(db, import.meta.env.VITE_5BASE_DC), refDocId)
          );
          console.log("Document successfully deleted!");
        } catch (error) {
          console.error("Error deleting document: ", error);
        }
      } else {
        console.error("Document ID is undefined.");
      }
    },
  });
};
</script>

<template>
  <ConfirmDialog></ConfirmDialog>
  <header class="p-2 sticky top-0 bg-[var(--bg-color)]">
    <div class="grid grid-cols-[3fr_1fr]">
      <h1 class="!text-lg font-extrabold flex items-center">
        <img src="/192x192.png" class="w-[50px] mr-2" />
        Friday Daily Schedule
      </h1>

      <div class="text-right !hidden">
        <Button
          class="!bg-[var(--main-color)]"
          icon="pi pi-calendar"
          @click="
            calendatStatus = !calendatStatus;
            formStatus = false;
          "
        ></Button>
      </div>
    </div>
    <DatePicker v-if="calendatStatus" inline showWeek class="w-full" />
  </header>
  <main>
    <section class="p-2 [&>div]:mb-1 text-sm">
      <div
        v-for="(item, index) in querySnapshotData"
        :key="index"
        class="border-[var(--line-color)] border-b pb-1"
      >
        <div class="grid grid-cols-2 gap-1">
          <h2 class="!text-sm">
            {{ item.isCurrentDate }} {{ item.isCurrentTime }}
          </h2>
          <div class="text-right">
            {{ mappingWeather[item.weather] }}
          </div>
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
              icon="pi pi-pen-to-square"
              class="mx-1 w-[40px] h-[40px]"
              size="small"
              variant="outlined"
              @click="confirmUpdate(item)"
            >
            </Button>
            <Button
              icon="pi pi-trash"
              severity="danger"
              class="w-[40px] h-[40px]"
              size="small"
              variant="outlined"
              @click="confirmDelete(item.id)"
            >
            </Button>
          </div>
        </div>
      </div>
    </section>

    <div class="fixed bottom-4 right-4">
      <Button
        class="!bg-[var(--main-color)]"
        icon="pi pi-plus"
        @click="
          formStatus = true;
          calendatStatus = false;
          currentDate = dayjs().toDate();
          currentTime = dayjs().toDate();
        "
      ></Button>
    </div>
  </main>

  <div
    v-if="formStatus"
    class="min-h-screen w-full bg-black/50 fixed top-0 flex items-end z-10"
  >
    <div class="bg-[var(--bg-color)] w-full py-8 px-2">
      <div>
        <label>Date</label>
        <DatePicker
          v-model="currentDate"
          showIcon
          fluid
          iconDisplay="input"
        ></DatePicker>
      </div>
      <div>
        <label>Time</label>
        <DatePicker
          v-model="currentTime"
          showIcon
          fluid
          iconDisplay="input"
          timeOnly
        ></DatePicker>
      </div>

      <div>
        <label>Weather</label>
        <Select
          class="w-full"
          v-model="weather"
          :options="optionsWeather"
          optionLabel="name"
          optionValue="value"
        ></Select>
      </div>

      <div class="card">
        <label>Options</label>
        <div class="overflow-auto max-h-96">
          <div v-for="(items, category) in ingredients" :key="category">
            <h3 class="sticky top-0 z-10 p-2 bg-[var(--line-color)] uppercase">
              {{ category }}
            </h3>
            <ul>
              <li v-for="item in items" :key="item.value" class="flex py-1">
                <Checkbox
                  :inputId="category + '-' + item.value"
                  v-model="options"
                  :value="[category, item.value]"
                  class="mr-1"
                />
                <label
                  :for="category + '-' + item.value"
                  class="w-full inline-block"
                >
                  {{ item.label }}
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <label>Notice</label>
        <div>
          <Textarea class="w-full" v-model="remark"></Textarea>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-1">
        <Button label="Cancel" @click="formStatus = false" />
        <Button
          label="Save"
          @click="create()"
          :disabled="!options.length && !remark"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
