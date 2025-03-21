<script setup lang="ts">
import Button from "primevue/button";
import DatePicker from "primevue/datepicker";
import Checkbox from "primevue/checkbox";

import { ingredients } from "../models/ingredients";
import type { IngredientsCategories } from "../models/ingredients";
import { tempData } from "../models/tempData";

import dayjs from "dayjs";

import { ref, onMounted, onUnmounted } from "vue";

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
  forSearchDate?: {
    seconds: number;
    nanoseconds: number;
  };
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
  weather: CurrentWeather | number;
  locationMode?: number;
  location?: CurrentLocation;
  status: boolean;
  createBy: string;
  modifyBy?: string;
  timestampCurrentDateTime?: number;
}

const tailwindColors = [
  "bg-blue-200",
  "bg-green-200",
  "bg-yellow-200",
  "bg-red-200",
  "bg-purple-200",
  "bg-pink-200",
  "bg-teal-200",
  "bg-indigo-200",
  "bg-gray-200",
  "bg-blue-400",
  "bg-green-400",
  "bg-yellow-400",
  "bg-red-400",
  "bg-purple-400",
  "bg-pink-400",
  "bg-teal-400",
  "bg-indigo-400",
  "bg-gray-400",
  "bg-blue-600",
  "bg-green-600",
  "bg-yellow-600",
  "bg-red-600",
  "bg-purple-600",
  "bg-pink-600",
  "bg-teal-600",
  "bg-indigo-600",
  "bg-gray-600",
  "bg-blue-800",
  "bg-green-800",
  "bg-yellow-800",
];

const tailwindColorMap: { [key: string]: string } = {
  "bg-blue-200": "#93C5FD",
  "bg-green-200": "#86EFAC",
  "bg-yellow-200": "#FDE68A",
  "bg-red-200": "#FCA5A5",
  "bg-purple-200": "#D8B4FE",
  "bg-pink-200": "#F9A8D4",
  "bg-teal-200": "#99F6E4",
  "bg-indigo-200": "#BFDBFE",
  "bg-gray-200": "#E5E7EB",
  "bg-blue-400": "#60A5FA",
  "bg-green-400": "#4ADE80",
  "bg-yellow-400": "#FACC15",
  "bg-red-400": "#F87171",
  "bg-purple-400": "#BE77F1",
  "bg-pink-400": "#F472B6",
  "bg-teal-400": "#4FD1C5",
  "bg-indigo-400": "#818CF8",
  "bg-gray-400": "#9CA3AF",
  "bg-blue-600": "#2563EB",
  "bg-green-600": "#10B981",
  "bg-yellow-600": "#D97706",
  "bg-red-600": "#DC2626",
  "bg-purple-600": "#7C3AED",
  "bg-pink-600": "#DB2777",
  "bg-teal-600": "#0D9488",
  "bg-indigo-600": "#4F46E5",
  "bg-gray-600": "#4B5563",
  "bg-blue-800": "#1E40AF",
  "bg-green-800": "#065F46",
  "bg-yellow-800": "#92400E",
};

let colorIndex = 0; // Initialize the counter

const getColorForDate = () => {
  const color = tailwindColors[colorIndex];
  colorIndex = (colorIndex + 1) % tailwindColors.length; // Increment and wrap around
  return color;
};

type Options = {
  daily: number[];
  behavior: number[];
  hospital: number[];
  medicine: number[];
  vaccine: number[];
  food: number[];
};

const getMappedOptions = (
  options: Options
): { label: string; category: IngredientsCategories; value: number }[] => {
  const mappedOptions: {
    label: string;
    category: IngredientsCategories;
    value: number;
  }[] = [];
  const categories: IngredientsCategories[] = [
    "daily",
    "behavior",
    "hospital",
    "medicine",
    "vaccine",
    "food",
  ];

  categories.forEach((category) => {
    options[category].forEach((value) => {
      const categoryLabel = ingredients[category].find(
        (item) => item.value === value
      )?.label;
      if (categoryLabel) {
        mappedOptions.push({ label: categoryLabel, category, value });
      }
    });
  });

  return mappedOptions;
};

const mergeData = (data: MyDocumentData[]) => {
  const grouped: { [key: string]: any[] } = {};

  data.forEach((item) => {
    const date = item.isCurrentDate;
    const time = item.isCurrentTime;
    const timestampCurrentDateTime = item.timestampCurrentDateTime;
    const options = getMappedOptions(item.options);
    const useColor = getColorForDate(); // Dynamically assign color based on date

    if (!grouped[date]) {
      grouped[date] = [];
    }

    options.forEach((option) => {
      grouped[date].push({
        time,
        options: option.label,
        optionsValue: [option.category, option.value],
        useColor,
        timestampCurrentDateTime,
      });
    });
  });

  return Object.keys(grouped).map((date) => ({
    date,
    useColor: getColorForDate(),
    data: grouped[date],
  }));
};

const originalOutput = ref(mergeData(tempData.value));
const selectedDateRange = ref<Date[]>([]); // 選擇的日期範圍
const selectedOptions = ref([]);
const filteredOutput = ref(originalOutput.value);
const showTime = ref(false);
const canvas = ref<HTMLCanvasElement | null>(null);
let lastOrientation =
  window.innerWidth > window.innerHeight ? "landscape" : "portrait";

const toggleTimeDisplay = () => {
  showTime.value = !showTime.value;
  drawCanvas(); // 重新繪製畫布
};

const applyFilter = () => {
  let filteredByDate = originalOutput.value;

  // 過濾日期範圍
  if (selectedDateRange.value.length === 1) {
    const selectedDate = dayjs(selectedDateRange.value[0]).format("YYYY-MM-DD");
    filteredByDate = filteredByDate.filter((item) => {
      const itemDate = dayjs(item.date).format("YYYY-MM-DD");
      return itemDate === selectedDate;
    });
  } else if (selectedDateRange.value.length === 2) {
    const startDate = dayjs(selectedDateRange.value[0]).format("YYYY-MM-DD");
    const endDate = dayjs(selectedDateRange.value[1]).format("YYYY-MM-DD");
    filteredByDate = filteredByDate.filter((item) => {
      const itemDate = dayjs(item.date).format("YYYY-MM-DD");
      return itemDate >= startDate && itemDate <= endDate;
    });
  }

  // 過濾 Checkbox 選項
  if (selectedOptions.value.length > 0) {
    filteredOutput.value = filteredByDate
      .map((item) => {
        // 只保留符合 selectedOptions 的 data
        const filteredData = item.data.filter((dataItem) => {
          return selectedOptions.value.some((selectedOption) => {
            // 比較兩個元組是否完全相等
            return (
              selectedOption[0] === dataItem.optionsValue[0] &&
              selectedOption[1] === dataItem.optionsValue[1]
            );
          });
        });

        // 返回新的物件，只包含過濾後的 data
        return {
          ...item,
          data: filteredData,
        };
      })
      .filter((item) => item.data.length > 0); // 只保留有資料的項目
  } else {
    filteredOutput.value = filteredByDate;
  }

  drawCanvas();
};

let minTime = Infinity;
let maxTime = -Infinity;

originalOutput.value.forEach((item) => {
  item.data.forEach((dataPoint) => {
    const timestamp = dayjs(dataPoint.timestampCurrentDateTime).valueOf();
    if (timestamp < minTime) minTime = timestamp;
    if (timestamp > maxTime) maxTime = timestamp;
  });
});

minTime -= 600000; // Subtract 5 minutes (5 * 60 * 1000 ms)
maxTime += 600000; // Add 5 minutes (5 * 60 * 1000 ms)

const drawCanvas = () => {
  if (!canvas.value!) return;
  canvas.value!.width = window.innerWidth - 20; // Subtract 10 pixels from width
  canvas.value!.height = window.innerHeight - 120; // Subtract 10 pixels from height
  const ctx = canvas.value!.getContext("2d");
  if (!ctx) return;
  ctx.clearRect(0, 0, canvas.value!.width, canvas.value!.height);

  // **格式化 X 軸標籤**
  const labels = [
    ...new Set(
      filteredOutput.value.flatMap((item) =>
        item.data.map((data) => data.options)
      )
    ),
  ];

  const formattedLabels = labels.map((label) =>
    String(label).replace(/\(/g, "︵").replace(/\)/g, "︶")
  );

  // **最大標籤高度計算**
  const maxLabelHeight =
    Math.max(...formattedLabels.map((label) => label.length)) * 18;

  // **調整 Canvas 尺寸**
  canvas.value!.width = window.innerWidth - 40; // Subtract 10 pixels from width
  canvas.value!.height = window.innerHeight - 140 + maxLabelHeight; // Subtract 10 pixels from height

  ctx.clearRect(0, 0, canvas.value!.width, canvas.value!.height);

  // **繪製座標軸**
  const axisBottom = canvas.value!.height - 50 - maxLabelHeight;
  const axisLeft = 70;
  ctx.beginPath();
  ctx.moveTo(axisLeft, axisBottom);
  ctx.lineTo(canvas.value!.width - 50, axisBottom);
  ctx.moveTo(axisLeft, 50);
  ctx.lineTo(axisLeft, axisBottom);
  ctx.strokeStyle = "#ddd";
  ctx.stroke();

  // **繪製 X 軸標籤**
  formattedLabels.forEach((label, index) => {
    const x =
      axisLeft +
      ((index + 1) * (canvas.value!.width - 100)) /
        (formattedLabels.length + 1);
    const y = axisBottom + 10;

    ctx.font = "14px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";

    label.split("").forEach((char, charIndex) => {
      ctx.fillText(char, x, y + charIndex * 18);
    });
  });

  // **繪製數據點**
  filteredOutput.value.forEach((item) => {
    const color = tailwindColorMap[item.useColor];
    item.data.forEach((dataPoint) => {
      const formattedOption = String(dataPoint.options)
        .replace(/\(/g, "︵")
        .replace(/\)/g, "︶"); // **確保跟 formattedLabels 一致**
      const index = formattedLabels.indexOf(formattedOption);
      if (index === -1) return; // **跳過找不到的數據點**

      const x =
        axisLeft +
        ((index + 1) * (canvas.value!.width - 100)) /
          (formattedLabels.length + 1);
      const y =
        axisBottom -
        ((dataPoint.timestampCurrentDateTime - minTime) / (maxTime - minTime)) *
          (axisBottom - 50);

      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, 2 * Math.PI);
      ctx.fill();

      if (showTime.value) {
        ctx.font = "12px Arial";
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        ctx.fillStyle = "black";
        const formattedTime = new Date(
          dataPoint.timestampCurrentDateTime
        ).toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });
        ctx.fillText(formattedTime, x + 10, y);
      }
    });
  });
};

// **偵測螢幕方向變化**
const handleOrientationChange = () => {
  const newOrientation =
    window.innerWidth > window.innerHeight ? "landscape" : "portrait";
  if (newOrientation !== lastOrientation) {
    lastOrientation = newOrientation;
    drawCanvas(); // **重新繪製 Canvas**
  }
};

// 在 onMounted 內調用 drawCanvas
onMounted(() => {
  drawCanvas();
  window.addEventListener("resize", handleOrientationChange);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleOrientationChange);
});
</script>

<template>
  <div>
    <Button
      class="!bg-[var(--main-color)]"
      icon="pi pi-database"
      @click="$router.push('/')"
    ></Button>
    <!-- 日期範圍選擇 -->
    <DatePicker
      v-model="selectedDateRange"
      selectionMode="range"
      placeholder="選擇日期範圍"
      class="p-inputtext"
    />

    <!-- 篩選按鈕 -->
    <Button @click="applyFilter" label="Filter" class="p-button-primary" />

    <!-- 顯示/隱藏時間按鈕 -->
    <Button
      @click="toggleTimeDisplay"
      :label="showTime ? '隱藏時間' : '顯示時間'"
      class="p-button-secondary"
    />

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
                :value="[category, item.value]"
                v-model="selectedOptions"
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
  </div>
  <div class="flex w-full justify-center">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<style scoped></style>
