<script setup lang="ts">
import Button from "primevue/button";
import Tag from "primevue/tag";
import DatePicker from "primevue/datepicker";
import Checkbox from "primevue/checkbox";
import Textarea from "primevue/textarea";
import Select from "primevue/select";
import ConfirmDialog from "primevue/confirmdialog";
import { useConfirm } from "primevue/useconfirm";
import BlockUI from "primevue/blockui";
import ProgressSpinner from "primevue/progressspinner";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";
// import { useRoute } from "vue-router";

import dayjs from "dayjs";
import axios from "axios";

import { db } from "../services/firebase";
import {
  collection,
  addDoc,
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
import { ingredients, type IngredientsCategories } from "../models/ingredients";

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
  weather: CurrentWeather;
  locationMode: number;
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

const locationModeOptions = [
  { value: 1, label: "家裡" },
  { value: 2, label: "露營" },
];

const currentDate = ref<Date | null>();
const currentTime = ref<Date | null>();
const todayStartDateTime = ref<Date | null>(dayjs().startOf("day").toDate());
// const todayEndDateTime = ref<Date | null>(
//   dayjs().endOf("day").subtract(1, "second").toDate()
// );

// const todayStartDateTime = ref<Date | null>(
//   dayjs("2025-02-26").startOf("day").toDate()
// );

// const todayEndDateTime = ref<Date | null>(
//   dayjs("2025-02-26").endOf("day").subtract(1, "second").toDate()
// );

const currentFetchDateTime = ref<Date | null>();
const querySnapshotData = ref<MyDocumentData[]>([]);
const remark = ref("");
const locationMode = ref(1);
const options = ref<[string, number][]>([]);
const currentLocation = ref<CurrentLocation>({
  latitude: 0,
  longitude: 0,
  display_name: "",
});
const currentWeather = ref<CurrentWeather>({
  humidity: "",
  pressure: "",
  windSpeed: "",
  windScale: "",
  windDir: "",
  wind360: "",
  text: "",
  feelsLike: "",
  temp: "",
  obsTime: "",
});
const initialWeather = {
  humidity: "",
  pressure: "",
  windSpeed: "",
  windScale: "",
  windDir: "",
  wind360: "",
  text: "",
  feelsLike: "",
  temp: "",
  obsTime: "",
};
const currentUpdateRefDocId = ref("");
const currentUpdateRemarkValue = ref("");

const formStatus = ref(false);

const confirm = useConfirm();
const isLoading = ref(true);
const toast = useToast();

// const route = useRoute();
// const user = ref(
//   typeof route.params.user === "string" ? route.params.user : ""
// );

// const allowedUsers = ["jungle", "cathy"];
// const isValidUser = computed(() => {
//   return typeof user.value === "string" && allowedUsers.includes(user.value);
// });

const ingredientList = ref(ingredients);

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
      orderBy("timestampCurrentDateTime", "desc")
    );

    const querySnapshot = await getDocs(latestQuery);

    querySnapshotData.value = querySnapshot.docs.map(mapDocToData);

    // console.log(JSON.stringify(querySnapshotData.value, null, 2));

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

const listenForChanges = () => {
  const latestQuery = query(
    collection(db, import.meta.env.VITE_5BASE_DC),
    where("forSearchDate", ">=", todayStartDateTime.value),
    orderBy("timestampCurrentDateTime", "desc")
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

  const currentDateTime = `${dayjs(currentDate.value).format("YYYY-MM-DD")} ${dayjs(currentTime.value).format("HH:mm:ss")}`;

  const payloadData: Partial<MyDocumentData> = {
    remark: remark.value || "",
    isCurrentDate: dayjs(currentDate.value).format("YYYY-MM-DD"),
    isCurrentTime: dayjs(currentTime.value).format("HH:mm:ss"),
    options: formattedOptions,
    status: true,
    timestampCurrentDateTime: dayjs(currentDateTime).valueOf(),
    locationMode: locationMode.value,
  };

  try {
    if (currentUpdateRefDocId.value) {
      const docRef = doc(
        db,
        import.meta.env.VITE_5BASE_DC,
        currentUpdateRefDocId.value
      );
      try {
        payloadData.updateDate = dayjs().format("YYYY-MM-DD HH:mm:ss");
        payloadData.modifyBy = "Cathy";

        await updateDoc(docRef, payloadData);

        isLoading.value = false;
        formStatus.value = false;
        remark.value = "";
        options.value = [];
        currentUpdateRefDocId.value = "";
      } catch (error) {
        toast.add({
          severity: "error",
          summary: "Error",
          detail: `發生不可預期的錯誤，請先截圖。${error}`,
          life: 5000,
        });
      }
    } else {
      currentFetchDateTime.value = dayjs().toDate();

      payloadData.createDate = dayjs().format("YYYY-MM-DD HH:mm:ss");
      payloadData.forSearchDate = currentFetchDateTime.value;
      payloadData.weather = currentWeather.value;

      payloadData.location = currentLocation.value;
      payloadData.locationMode = locationMode.value;

      payloadData.createBy = "Cathy";

      const docRef = await addDoc(
        collection(db, import.meta.env.VITE_5BASE_DC),
        payloadData
      );
      console.log("Document written with ID: ", docRef.id);

      if (docRef.id) {
        isLoading.value = false;
        formStatus.value = false;
        remark.value = "";
        options.value = [];
      } else {
        toast.add({
          severity: "error",
          summary: "Error",
          detail: "建立資料發生錯誤，請先截圖。",
          life: 5000,
        });

        isLoading.value = false;
      }
    }
  } catch (error) {
    toast.add({
      severity: "error",
      summary: "Error",
      detail: `發生不可預期的錯誤，請先截圖。${error}`,
      life: 5000,
    });
  }
};

onMounted(async () => {
  fetch();
  listenForChanges();
});

const filteredData = computed(() =>
  querySnapshotData.value.filter((item) => item.status)
);

watch(formStatus, (newVal) => {
  if (newVal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});

watch(options, (newVal: [string, number][]) => {
  let hasMedicine20 = false;
  let hasMedicine19 = false;

  newVal.forEach((item) => {
    const [type, value] = item;

    if (type === "medicine" && value === 20) {
      hasMedicine20 = true;
    } else if (type === "medicine" && value === 19) {
      hasMedicine19 = true;
    }
  });

  if (hasMedicine20 && hasMedicine19) {
    remark.value = "擠 5 下泡 5 分鐘、泡 5 分鐘";
  } else if (hasMedicine20) {
    remark.value = "泡 5 分鐘";
  } else if (hasMedicine19) {
    remark.value = "擠 5 下泡 5 分鐘";
  } else {
    remark.value = currentUpdateRemarkValue.value || "";
  }
});

function getIngredientLabel(optionName: string, value: number): string {
  const category = optionName as keyof typeof ingredientList.value;
  const foundIngredient = ingredientList.value[category]?.find(
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
      currentUpdateRemarkValue.value = data.remark;

      locationMode.value = data.locationMode || 1;

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

      currentWeather.value = { ...initialWeather };
      options.value = [];
      currentUpdateRefDocId.value = "";
      currentUpdateRemarkValue.value = "";
      currentLocation.value = {
        longitude: 0,
        latitude: 0,
      };
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

const getPosition = async () => {
  isLoading.value = true;
  if ("geolocation" in navigator) {
    try {
      const position = await new Promise<GeolocationPosition>(
        (resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
          });
        }
      );

      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      currentLocation.value = {
        latitude,
        longitude,
      };

      getRealtimeWeatherAndPlace(latitude, longitude);
    } catch (error) {
      toast.add({
        severity: "error",
        summary: "Error",
        detail: `發生不可預期的錯誤，請先截圖。Error getting location. ${error}`,
        life: 5000,
      });
      isLoading.value = false;
    }
  } else {
    toast.add({
      severity: "error",
      summary: "Error",
      detail:
        "發生不可預期的錯誤，請先截圖。Geolocation is not supported by this browser.",
      life: 5000,
    });
    isLoading.value = false;
  }
};

async function getRealtimeWeatherAndPlace(longitude: number, latitude: number) {
  const urlRetrieveWeather = `https://devapi.qweather.com/v7/weather/now?location=${latitude},${longitude}`;
  const apiKey = "442073d57d51407e93ea812a3021d8e3";
  const urlRetrieveAddress = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${longitude}&lon=${latitude}&zoom=18&addressdetails=1`;

  try {
    const [weatherResponse, addressResponse] = await Promise.all([
      axios.get(urlRetrieveWeather, {
        headers: {
          "X-QW-Api-Key": apiKey,
        },
        decompress: true, // Ensure the response is decompressed
      }),
      axios.get(urlRetrieveAddress),
    ]);

    const weatherData = weatherResponse.data;
    const addressData = addressResponse.data;

    const {
      humidity,
      pressure,
      windSpeed,
      windScale,
      windDir,
      wind360,
      text,
      feelsLike,
      temp,
      obsTime,
    } = weatherData.now;

    currentWeather.value = {
      humidity: humidity.toString(),
      pressure: pressure.toString(),
      windSpeed: windSpeed.toString(),
      windScale: windScale.toString(),
      windDir,
      wind360: wind360.toString(),
      text,
      feelsLike: feelsLike.toString(),
      temp: temp.toString(),
      obsTime,
    };

    currentLocation.value = {
      latitude,
      longitude,
      display_name: addressData.display_name,
    };

    create();
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error fetching data:", error.message);

      toast.add({
        severity: "error",
        summary: "Error",
        detail: `發生不可預期的錯誤，請先截圖2。${error.message}`,
        life: 5000,
      });
    } else {
      toast.add({
        severity: "error",
        summary: "Error",
        detail: `發生不可預期的錯誤，請先截圖3。${error}`,
        life: 5000,
      });
    }
  }
}

const expandedIndices = ref<string[]>([]);
const toggleWeather = (index: string) => {
  if (expandedIndices.value.includes(index)) {
    expandedIndices.value = expandedIndices.value.filter((i) => i !== index);
  } else {
    expandedIndices.value.push(index);
  }
};
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
  <header class="p-2 sticky top-0 z-20 bg-[var(--bg-color)]">
    <div class="grid grid-cols-[3fr_1fr]">
      <h1 class="!text-lg font-extrabold flex items-center">
        <img src="/192x192.png" class="w-[50px] mr-2" />
        Friday Daily Schedule
      </h1>

      <div class="text-right opacity-0">
        <Button
          class="!bg-[var(--main-color)]"
          icon="pi pi-chart-bar"
          @click="$router.push('/chart')"
        ></Button>
      </div>
    </div>
  </header>
  <main>
    <section class="p-2 [&>div]:mb-1 text-sm">
      <div
        v-for="(item, index) in filteredData"
        :key="index"
        class="border-[var(--line-color)] border-b pb-1"
      >
        <div class="grid grid-cols-2 gap-1 items-center">
          <h2 class="!text-sm">
            {{ item.isCurrentDate }} {{ item.isCurrentTime }}
          </h2>
          <div class="text-right">
            <template v-if="typeof item.weather === 'number'">
              {{ mappingWeather[item.weather] }}
            </template>
            <template v-else>
              <Button
                icon="pi pi-globe"
                :class="[
                  'w-[40px] h-[40px] bg-[var(--main-color)]',
                  item.locationMode === 1
                    ? '[&_span.p-button-icon]:!text-black'
                    : item.locationMode === 2
                      ? '[&_span.p-button-icon]:!text-[var(--main-color)]'
                      : '[&_span.p-button-icon]:text-black',
                ]"
                size="small"
                variant="text"
                @click="toggleWeather(item.id!)"
              >
              </Button>
            </template>
          </div>
        </div>
        <div
          v-if="expandedIndices.includes(item.id!)"
          class="transition duration-300 ease-in-out grid grid-cols-3 [&_div]:p-[2px] [&_div]:m-[2px] [&_div]:bg-[var(--line-color)] [&_div]:rounded-md"
        >
          <div
            class="col-span-3"
            v-if="item.locationMode && item.location?.longitude"
          >
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
          remark = '';
          currentDate = dayjs().toDate();
          currentTime = dayjs().toDate();
        "
      ></Button>
    </div>
  </main>

  <div
    v-if="formStatus"
    class="min-h-screen w-full bg-black/50 fixed top-0 flex items-end z-30"
  >
    <div class="bg-[var(--bg-color)] w-full py-8 px-2">
      <div>
        <label>所在區</label>
        <div>
          <Select
            v-model="locationMode"
            :options="locationModeOptions"
            optionLabel="label"
            optionValue="value"
            class="w-full"
          ></Select>
        </div>
      </div>

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

      <div class="card">
        <label>Options</label>
        <div class="overflow-auto max-h-96">
          <div v-for="(items, category) in ingredients" :key="category">
            <h3 class="sticky top-0 z-10 p-2 bg-[var(--line-color)] uppercase">
              {{ category }}
            </h3>
            <ul>
              <li
                v-for="item in items.filter((i) => i.active)"
                :key="item.value"
                class="flex py-1"
              >
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
          @click="currentUpdateRefDocId ? create() : getPosition()"
          :disabled="!options.length && !remark"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
