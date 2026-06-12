<script setup lang="ts">
import { ref, watch, computed } from "vue";
import DatePicker from "primevue/datepicker";
import Checkbox from "primevue/checkbox";
import Textarea from "primevue/textarea";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Chip from "primevue/chip";
import Accordion from "primevue/accordion";
import AccordionPanel from "primevue/accordionpanel";
import AccordionHeader from "primevue/accordionheader";
import AccordionContent from "primevue/accordioncontent";
import { useIngredients } from "../services/ingredientsStore";
import { db } from "../services/firebase";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import dayjs from "dayjs";
import axios from "axios";
import { useToast } from "primevue/usetoast";

const props = defineProps({
  visible: Boolean,
  editData: Object, // 可選，若有編輯需求
});
const emit = defineEmits(["update:visible", "save", "cancel"]);

const toast = useToast();

const { ingredients, sortedIngredients, favoriteItems } = useIngredients();

const currentDate = ref(new Date());
const currentTime = ref(new Date());
const options = ref<any[]>([]);
const remark = ref("");
const currentUpdateRefDocId = ref("");
const isLoading = ref(false);

const searchTerm = ref("");
const activePanels = ref<string[]>([]);

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

// 已勾選項目對應成可移除的 chips
const selectedChips = computed(() =>
  options.value.map(([category, value]: [string, number]) => ({
    category,
    value,
    label:
      ingredients.value[
        category as keyof typeof ingredients.value
      ]?.find((item) => item.value === value)?.label || "",
  }))
);

function removeOption(chip: { category: string; value: number }) {
  options.value = options.value.filter(
    ([category, value]: [string, number]) =>
      !(category === chip.category && value === chip.value)
  );
}

function categoryCount(category: string): number {
  return options.value.filter(([c]: [string, number]) => c === category)
    .length;
}

const activeFavorites = computed(() =>
  favoriteItems.value.filter((entry) => entry.item.active)
);

const favoriteSelectedCount = computed(
  () =>
    options.value.filter(([c, v]: [string, number]) =>
      activeFavorites.value.some(
        (entry) => entry.category === c && entry.item.value === v
      )
    ).length
);

// 搜尋時攤平所有分類即時過濾
const searchResults = computed(() => {
  const term = searchTerm.value.trim().toLowerCase();
  const result: { category: string; item: any }[] = [];
  if (!term) return result;
  Object.entries(sortedIngredients.value).forEach(([category, items]) => {
    items
      .filter(
        (item) => item.active && item.label.toLowerCase().includes(term)
      )
      .forEach((item) => result.push({ category, item }));
  });
  return result;
});

function buildFormattedOptions(): Record<string, number[]> {
  const formattedOptions: Record<string, number[]> = {
    daily: [],
    behavior: [],
    hospital: [],
    medicine: [],
    vaccine: [],
    food: [],
  };
  if (options.value && options.value.length) {
    options.value.forEach(([category, value]: [string, number]) => {
      if (Object.prototype.hasOwnProperty.call(formattedOptions, category)) {
        (formattedOptions[category] as number[]).push(value);
      }
    });
  }
  return formattedOptions;
}

// 先存檔立即關閉，定位與天氣在背景補寫，不讓使用者等 GPS / API
async function onSave() {
  isLoading.value = true;
  try {
    const currentDateTime = `${dayjs(currentDate.value).format("YYYY-MM-DD")} ${dayjs(currentTime.value).format("HH:mm:ss")}`;
    const payloadData: any = {
      remark: remark.value || "",
      isCurrentDate: dayjs(currentDate.value).format("YYYY-MM-DD"),
      isCurrentTime: dayjs(currentTime.value).format("HH:mm:ss"),
      options: buildFormattedOptions(),
      status: true,
      timestampCurrentDateTime: dayjs(currentDateTime).valueOf(),
    };
    if (currentUpdateRefDocId.value) {
      const docRef = doc(
        db,
        import.meta.env.VITE_5BASE_DC,
        currentUpdateRefDocId.value
      );
      payloadData.updateDate = dayjs().format("YYYY-MM-DD HH:mm:ss");
      payloadData.modifyBy = "Cathy";
      await updateDoc(docRef, payloadData);
    } else {
      payloadData.createDate = dayjs().format("YYYY-MM-DD HH:mm:ss");
      payloadData.forSearchDate = new Date();
      payloadData.weather = { ...initialWeather };
      payloadData.location = { latitude: 0, longitude: 0, display_name: "" };
      payloadData.createBy = "Cathy";
      const newDoc = await addDoc(
        collection(db, import.meta.env.VITE_5BASE_DC),
        payloadData
      );
      patchLocationWeather(newDoc.id);
    }
    emit("update:visible", false);
    resetForm();
  } catch (error) {
    toast.add({
      severity: "error",
      summary: "Error",
      detail: `發生不可預期的錯誤，請先截圖。${error}`,
      life: 5000,
    });
  } finally {
    isLoading.value = false;
  }
}

// 背景補寫定位與天氣到剛存的紀錄
async function patchLocationWeather(docId: string) {
  try {
    if (!("geolocation" in navigator)) {
      throw new Error("Geolocation is not supported by this browser.");
    }
    const position = await new Promise<GeolocationPosition>(
      (resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        });
      }
    );
    const realLat = position.coords.latitude;
    const realLon = position.coords.longitude;

    const urlRetrieveWeather = `https://devapi.qweather.com/v7/weather/now?location=${realLon},${realLat}`;
    const apiKey = import.meta.env.VITE_QWEATHER_API_KEY;
    const urlRetrieveAddress = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${realLat}&lon=${realLon}&zoom=19&addressdetails=1`;

    const [weatherResponse, addressResponse] = await Promise.all([
      axios.get(urlRetrieveWeather, {
        headers: {
          "X-QW-Api-Key": apiKey,
        },
        decompress: true,
      }),
      axios.get(urlRetrieveAddress),
    ]);

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
    } = weatherResponse.data.now;

    const docRef = doc(db, import.meta.env.VITE_5BASE_DC, docId);
    await updateDoc(docRef, {
      weather: {
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
      },
      // 歷史資料的 latitude/longitude 是對調儲存的，維持相同寫法保持一致
      location: {
        latitude: realLon,
        longitude: realLat,
        display_name: addressResponse.data.display_name,
      },
    });
  } catch (error) {
    toast.add({
      severity: "warn",
      summary: "提醒",
      detail: `紀錄已儲存，但定位/天氣資料取得失敗。${error}`,
      life: 5000,
    });
  }
}

function resetForm() {
  currentDate.value = new Date();
  currentTime.value = new Date();
  options.value = [];
  remark.value = "";
  currentUpdateRefDocId.value = "";
  searchTerm.value = "";
  activePanels.value = [];
}

// 若有編輯需求，監聽 editData
watch(
  () => props.editData,
  (val) => {
    if (val) {
      currentDate.value = val.currentDate
        ? new Date(val.currentDate)
        : new Date();
      // 修正 time 格式，確保 new Date() 可正確解析
      if (val.currentTime) {
        let t = val.currentTime;
        if (typeof t === "string" && /^\d{2}:\d{2}/.test(t)) {
          // 若只有時間，補上日期
          const d = val.currentDate || dayjs().format("YYYY-MM-DD");
          currentTime.value = new Date(`${d}T${t}`);
        } else {
          currentTime.value = new Date(t);
        }
      } else {
        currentTime.value = new Date();
      }
      options.value = val.options || [];
      remark.value = val.remark || "";
      currentUpdateRefDocId.value = val.currentUpdateRefDocId || "";
      // 編輯時自動展開常用與有勾選的分類
      activePanels.value = [
        "favorites",
        ...new Set(
          (val.options || []).map(([category]: [string, number]) => category)
        ),
      ] as string[];
    } else {
      // 新增時不覆蓋 currentTime，resetForm 已設為 now
    }
  },
  { immediate: true }
);

watch(
  () => props.visible,
  (val) => {
    if (val && !props.editData) {
      currentTime.value = new Date();
      currentDate.value = new Date();
      // 開新表單時自動展開常用分類
      activePanels.value = ["favorites"];
    }
  }
);

function onCancel() {
  emit("update:visible", false);
  emit("cancel");
  resetForm();
}
</script>

<template>
  <!-- 全螢幕蓋住 footer(z-30)，表單開啟時必須 Save 或 Cancel 才能離開 -->
  <div
    v-if="props.visible"
    class="w-full bg-black/50 fixed top-0 flex items-end z-40 h-full"
  >
    <div class="bg-[var(--bg-color)] w-full h-full flex flex-col">
      <header
        class="p-2 min-h-[56px] flex items-center gap-1 border-b border-[var(--line-color)] shrink-0"
      >
        <h1 class="!text-lg font-extrabold">
          {{ currentUpdateRefDocId ? "編輯紀錄" : "新增紀錄" }}
          <span class="opacity-50 text-sm uppercase">
            {{ currentUpdateRefDocId ? "edit" : "add" }}
          </span>
        </h1>
      </header>
      <div class="flex-1 overflow-auto p-2 [&>div]:mb-2">
        <div class="grid grid-cols-2 gap-1">
          <div>
            <label class="opacity-60 text-xs uppercase">Date</label>
            <DatePicker
              v-model="currentDate"
              showIcon
              fluid
              iconDisplay="input"
            ></DatePicker>
          </div>
          <div>
            <label class="opacity-60 text-xs uppercase">Time</label>
            <DatePicker
              v-model="currentTime"
              showIcon
              fluid
              iconDisplay="input"
              timeOnly
            ></DatePicker>
          </div>
        </div>
        <div class="card">
          <label class="opacity-60 text-xs uppercase">Options</label>
          <div class="sticky top-0 z-10 bg-[var(--bg-color)] py-1">
            <InputText
              v-model="searchTerm"
              class="w-full"
              placeholder="搜尋選項..."
            />
            <div
              v-if="selectedChips.length"
              class="flex flex-wrap gap-1 pt-2 max-h-28 overflow-auto"
            >
              <Chip
                v-for="chip in selectedChips"
                :key="chip.category + '-' + chip.value"
                :label="chip.label"
                removable
                @remove="removeOption(chip)"
              />
            </div>
          </div>

          <div
            class="border border-[var(--line-color)] rounded-lg shadow-sm overflow-hidden"
          >
          <!-- 搜尋模式：攤平顯示所有符合的選項 -->
          <ul v-if="searchTerm.trim()" class="px-2">
            <li
              v-for="entry in searchResults"
              :key="entry.category + '-' + entry.item.value"
              class="flex py-1"
            >
              <Checkbox
                :inputId="entry.category + '-' + entry.item.value"
                v-model="options"
                :value="[entry.category, entry.item.value]"
                class="mr-1"
              />
              <label
                :for="entry.category + '-' + entry.item.value"
                class="w-full inline-block"
              >
                {{ entry.item.label }}
                <span class="opacity-50 text-xs uppercase ml-1">
                  {{ entry.category }}
                </span>
              </label>
            </li>
            <li v-if="!searchResults.length" class="py-2 opacity-60">
              沒有符合的選項
            </li>
          </ul>

          <!-- 一般模式：分類收合 -->
          <Accordion v-else v-model:value="activePanels" multiple>
            <AccordionPanel value="favorites">
              <AccordionHeader>
                <span class="font-bold">
                  <i class="pi pi-star-fill text-yellow-500 mr-1"></i>常用
                </span>
                <span
                  v-if="favoriteSelectedCount"
                  class="ml-2 text-xs rounded-full bg-[var(--main-color)] text-black px-2 py-[2px]"
                >
                  {{ favoriteSelectedCount }}
                </span>
              </AccordionHeader>
              <AccordionContent>
                <p
                  v-if="!activeFavorites.length"
                  class="opacity-60 text-xs py-1"
                >
                  還沒有常用選項，到「設定」的分類裡點 ☆ 加入。
                </p>
                <ul v-else>
                  <li
                    v-for="entry in activeFavorites"
                    :key="'fav-' + entry.category + '-' + entry.item.value"
                    class="flex py-1"
                  >
                    <Checkbox
                      :inputId="
                        'fav-' + entry.category + '-' + entry.item.value
                      "
                      v-model="options"
                      :value="[entry.category, entry.item.value]"
                      class="mr-1"
                    />
                    <label
                      :for="'fav-' + entry.category + '-' + entry.item.value"
                      class="w-full inline-block"
                    >
                      {{ entry.item.label }}
                      <span class="opacity-50 text-xs uppercase ml-1">
                        {{ entry.category }}
                      </span>
                    </label>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel
              v-for="(items, category) in sortedIngredients"
              :key="category"
              :value="category"
            >
              <AccordionHeader>
                <span class="uppercase font-bold">{{ category }}</span>
                <span
                  v-if="categoryCount(category as string)"
                  class="ml-2 text-xs rounded-full bg-[var(--main-color)] text-black px-2 py-[2px]"
                >
                  {{ categoryCount(category as string) }}
                </span>
              </AccordionHeader>
              <AccordionContent>
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
              </AccordionContent>
            </AccordionPanel>
          </Accordion>
          </div>
        </div>
        <div>
          <label class="opacity-60 text-xs uppercase">Notice</label>
          <div>
            <Textarea class="w-full" v-model="remark"></Textarea>
          </div>
        </div>
      </div>
      <div
        class="grid grid-cols-2 gap-1 p-2 shrink-0 border-t border-[var(--line-color)]"
      >
        <Button
          label="Cancel"
          severity="secondary"
          variant="outlined"
          @click="onCancel"
        />
        <Button
          label="Save"
          @click="onSave"
          :disabled="isLoading || (!options.length && !remark)"
          :loading="isLoading"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
