<script setup lang="ts">
import Button from "primevue/button";
import Checkbox from "primevue/checkbox";
import DatePicker from "primevue/datepicker";
import Slider from "primevue/slider";
import Chart from "primevue/chart";
import Drawer from "primevue/drawer";
import Panel from "primevue/panel";
import RadioButton from "primevue/radiobutton";
import Dialog from "primevue/dialog";
import Calendar from "primevue/calendar";
import draggable from "vuedraggable";
import BlockUI from "primevue/blockui";
import ProgressSpinner from "primevue/progressspinner";
import { useToast } from "primevue/usetoast";
import Toast from "primevue/toast";

import dayjs from "dayjs";
import { watch } from "vue";

import type { IngredientsCategories } from "../models/ingredients";
import { useIngredients } from "../services/ingredientsStore";

const { ingredients: ingredientsRef } = useIngredients();
import { ref, onMounted, onUnmounted } from "vue";

import { db } from "../services/firebase";
import { collection, query, getDocs, updateDoc, doc } from "firebase/firestore";
import { QueryDocumentSnapshot } from "firebase/firestore";

import localforage from "localforage";

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
  uploadFiles?: string[];
}

interface ProcessedOption {
  options: string;
  idx: number;
  optionsValue: [string, number];
  counts: number;
  ids: string[];
}

const props = defineProps<{
  selectedMinDate: Date;
  selectedMaxDate: Date;
}>();

const tempData = ref<MyDocumentData[]>([]);

const sortOrder = ref<number[]>([]);
const processedData = ref<ProcessedOption[]>([]);
const selectedOptions = ref<[string, number][]>([]);
const isLoading = ref(true);
const canDraggable = ref(false);
const noCloudData = ref(true);

const toast = useToast();

// 獲取 ingredients-sort 文檔資料
const getIngredientsSort = async () => {
  try {
    const q = query(collection(db, import.meta.env.VITE_5BASE_SORT));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc: QueryDocumentSnapshot) => {
      sortOrder.value = doc.data().sort || [];
    });
  } catch (error) {
    console.error("Error getting ingredients-sort:", error);
  }
};

function processOptions(data: MyDocumentData[]): ProcessedOption[] {
  const result: Map<string, ProcessedOption> = new Map();

  data.forEach((item) => {
    if (item.status === true) {
      for (const category of Object.keys(
        item.options
      ) as IngredientsCategories[]) {
        item.options[category].forEach((value) => {
          const option = ingredientsRef.value[category].find(
            (opt) => opt.value === value
          );
          if (option) {
            const key = `${option.label}-${category}-${value}`;
            if (result.has(key)) {
              result.get(key)!.counts++;
              if (item.id) {
                result.get(key)!.ids.push(item.id);
              }
            } else {
              result.set(key, {
                options: option.label,
                idx: option.idx,
                optionsValue: [category, value],
                counts: 1,
                ids: item.id ? [item.id] : [],
              });
            }
          }
        });
      }
    }
  });

  const processedArray = Array.from(result.values());

  // 根據 sortOrder 重新排序
  if (sortOrder.value && sortOrder.value.length > 0) {
    // 創建一個 Map 來存儲 processedArray 中的項目，以 idx 為 key
    const processedMap = new Map(
      processedArray.map((item) => [item.idx, item])
    );

    // 按照 sortOrder 的順序重新排列，只保留存在的項目
    const sortedArray = sortOrder.value
      .map((idx) => processedMap.get(idx))
      .filter((item) => item !== undefined);

    // 將不在 sortOrder 中的項目添加到末尾
    const remainingItems = processedArray.filter(
      (item) => !sortOrder.value.includes(item.idx)
    );

    // 合併排序後的陣列
    const finalArray = [...sortedArray, ...remainingItems];
    return finalArray;
  }

  return processedArray;
}

const chartData = ref();
const chartOptions = ref();

// 設定預設全選
const toggleSelectAllStatus = ref(true);

// 監聽 selectedOptions 的變化來更新 toggleSelectAllStatus
watch(
  selectedOptions,
  (newVal) => {
    toggleSelectAllStatus.value = newVal.length === processedData.value.length;
  },
  { deep: true }
);

const setChartData = (data = processedData.value) => {
  const uniqueOptions = [...new Set(data.map((item) => item.options))] as const;

  const colors: string[] = [];
  const borderColors: string[] = [];

  for (let i = 0; i < 100; i++) {
    const hue = i * 3.6;
    colors.push(`hsl(${hue}, 70%, 50%, 0.2)`);
    borderColors.push(`hsl(${hue}, 70%, 50%)`);
  }

  const optionCounts = uniqueOptions.map((option) => {
    return data
      .filter((item) => item.options === option)
      .reduce((sum, item) => sum + item.counts, 0);
  });

  return {
    labels: uniqueOptions,
    datasets: [
      {
        label: "Options",
        data: optionCounts,
        backgroundColor: uniqueOptions.map(
          (_, index) => colors[index % colors.length]
        ),
        borderColor: uniqueOptions.map(
          (_, index) => borderColors[index % borderColors.length]
        ),
        borderWidth: 1,
      },
    ],
  };
};

const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColorSecondary = documentStyle.getPropertyValue(
    "--p-text-muted-color"
  );
  const surfaceBorder = documentStyle.getPropertyValue(
    "--p-content-border-color"
  );

  return {
    indexAxis: "y", // 设置为 'y' 以交换 X 和 Y 轴
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
    },
  };
};

const visible = ref(false);

const isCollapsed = ref(true);

const filteredOutput = ref(processedData.value);

const selectedTimeRange = ref([0, 24]);

const selectedDateRange = ref<Date[]>([
  props.selectedMinDate,
  props.selectedMaxDate,
]);

const dateSelectionMode = ref<"range" | "multiple">("range");
const dateSelectionOptions: {
  label: string;
  value: "range" | "multiple";
}[] = [
  { label: "Multiple", value: "multiple" },
  { label: "Range", value: "range" },
];

const toggleSelectAll = () => {
  if (toggleSelectAllStatus.value) {
    selectedOptions.value = processedData.value.map(
      (item) => item.optionsValue
    );
  } else {
    selectedOptions.value = [];
  }
};

watch(dateSelectionMode, (newMode) => {
  if (newMode === "range") {
    selectedDateRange.value = [props.selectedMinDate, props.selectedMaxDate];
  } else {
    selectedDateRange.value = [props.selectedMaxDate!];
  }
});

const tailwindColors = [
  "bg-blue-200",
  "bg-green-200",
  "bg-yellow-200",
  "bg-purple-200",
  "bg-pink-200",
  "bg-teal-200",
  "bg-indigo-200",
  "bg-gray-200",
  "bg-blue-400",
  "bg-green-400",
  "bg-yellow-400",
  "bg-purple-400",
  "bg-pink-400",
  "bg-teal-400",
  "bg-indigo-400",
  "bg-gray-400",
  "bg-blue-600",
  "bg-green-600",
  "bg-yellow-600",
  "bg-purple-600",
  "bg-pink-600",
  "bg-teal-600",
  "bg-indigo-600",
  "bg-gray-600",
  "bg-blue-800",
  "bg-green-800",
  "bg-yellow-800",
  "bg-orange-200",
  "bg-orange-400",
  "bg-orange-600",
  "bg-orange-800",
  "bg-cyan-200",
  "bg-cyan-400",
  "bg-cyan-600",
  "bg-cyan-800",
  "bg-brown-400",
];

const tailwindColorMap: { [key: string]: string } = {
  "bg-blue-200": "#93C5FD",
  "bg-green-200": "#86EFAC",
  "bg-yellow-200": "#FDE68A",
  "bg-purple-200": "#D8B4FE",
  "bg-pink-200": "#F9A8D4",
  "bg-teal-200": "#99F6E4",
  "bg-indigo-200": "#BFDBFE",
  "bg-gray-200": "#E5E7EB",
  "bg-blue-400": "#60A5FA",
  "bg-green-400": "#4ADE80",
  "bg-yellow-400": "#FACC15",
  "bg-purple-400": "#BE77F1",
  "bg-pink-400": "#F472B6",
  "bg-teal-400": "#4FD1C5",
  "bg-indigo-400": "#818CF8",
  "bg-gray-400": "#9CA3AF",
  "bg-blue-600": "#2563EB",
  "bg-green-600": "#10B981",
  "bg-yellow-600": "#D97706",
  "bg-purple-600": "#7C3AED",
  "bg-pink-600": "#DB2777",
  "bg-teal-600": "#0D9488",
  "bg-indigo-600": "#4F46E5",
  "bg-gray-600": "#4B5563",
  "bg-blue-800": "#1E40AF",
  "bg-green-800": "#065F46",
  "bg-yellow-800": "#92400E",
  "bg-orange-200": "#F7DC6F",
  "bg-orange-400": "#F97316",
  "bg-orange-600": "#EA580C",
  "bg-orange-800": "#A3300B",
  "bg-cyan-200": "#A5F3FC",
  "bg-cyan-400": "#45A0E6",
  "bg-cyan-600": "#0097E6",
  "bg-cyan-800": "#006BA1",
  "bg-brown-400": "#964B00",
};

let colorIndex = 0;

const getColorForDate = () => {
  const color = tailwindColors[colorIndex];
  colorIndex = (colorIndex + 1) % tailwindColors.length;
  return color;
};

const showTime = ref(false);
const canvas = ref<HTMLCanvasElement | null>(null);
const hoveredDate = ref<string | null>(null);
const formattedLabels = ref<string[]>([]);
const axisLeft = ref(210);
const axisRight = ref(0);
const axisBottom = ref(0);
const totalHours = ref(24);
const found = ref(false);

const toggleTimeDisplay = () => {
  showTime.value = !showTime.value;
  drawCanvas();
};

const formatTime = (hour: number) => {
  return `${String(Math.floor(hour)).padStart(2, "0")}:${String(Math.floor((hour % 1) * 60)).padStart(2, "0")}`;
};

const isPointInCircle = (
  x: number,
  y: number,
  centerX: number,
  centerY: number,
  radius: number
) => {
  const distance = Math.sqrt(
    Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
  );
  return distance <= radius;
};

const handleMouseMove = (event: MouseEvent) => {
  if (!canvas.value) return;

  const rect = canvas.value.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  // 檢查是否懸停在任何資料點上
  found.value = false;
  mergedData.value.forEach((group) => {
    group.data.forEach((dataPoint) => {
      const formattedOption = String(dataPoint.options);
      const index = formattedLabels.value.indexOf(formattedOption);
      if (index === -1) return;

      const date = new Date(dataPoint.timestampCurrentDateTime);
      const hours =
        date.getHours() + date.getMinutes() / 60 + date.getSeconds() / 3600;

      if (
        hours >= selectedTimeRange.value[0] &&
        hours <= selectedTimeRange.value[1]
      ) {
        const x =
          axisLeft.value +
          ((hours - selectedTimeRange.value[0]) / totalHours.value) *
            (axisRight.value - axisLeft.value);
        const y =
          axisBottom.value -
          ((index + 1) * (axisBottom.value - 50)) /
            (formattedLabels.value.length + 1);

        if (isPointInCircle(mouseX, mouseY, x, y, 5)) {
          hoveredDate.value = group.date;
          found.value = true;
        }
      }
    });
  });

  if (!found.value) {
    hoveredDate.value = null;
  }

  drawCanvas();
};

const drawCanvas = () => {
  if (!canvas.value) return;

  // 設定畫布大小
  canvas.value.width = window.innerWidth - 40;
  canvas.value.height = window.innerHeight - 140;

  const ctx = canvas.value.getContext("2d");
  if (!ctx) return;

  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);

  // 取得所有 Y 軸 labels
  const labels = [
    ...new Set(
      mergedData.value.flatMap((item) => item.data.map((data) => data.options))
    ),
  ];

  formattedLabels.value = labels.map(String);
  const maxLabelHeight =
    Math.max(...formattedLabels.value.map((label) => label.length)) * 18;

  // 重新設定高度包含 Y 軸 label 空間
  canvas.value.height = window.innerHeight - 140 + maxLabelHeight;

  axisBottom.value = canvas.value.height - 50 - maxLabelHeight;
  axisLeft.value = 210;
  axisRight.value = canvas.value.width - 50;
  totalHours.value = selectedTimeRange.value[1] - selectedTimeRange.value[0];

  // 畫 X/Y 軸
  ctx.beginPath();
  ctx.moveTo(axisLeft.value, axisBottom.value);
  ctx.lineTo(axisRight.value, axisBottom.value);
  ctx.moveTo(axisLeft.value, 50);
  ctx.lineTo(axisLeft.value, axisBottom.value);
  ctx.strokeStyle = "#ddd";
  ctx.stroke();

  // 畫 Y 軸 labels
  formattedLabels.value.forEach((label, index) => {
    const x = axisLeft.value - 10;
    const y =
      axisBottom.value -
      ((index + 1) * (axisBottom.value - 50)) /
        (formattedLabels.value.length + 1);

    ctx.font = "14px Helvetica Neue, Helvetica, Arial, sans-serif";
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#333";

    ctx.fillText(label, x, y);
  });

  // 畫 X 軸每小時刻度與線
  for (let i = 0; i <= totalHours.value; i++) {
    const currentHour = selectedTimeRange.value[0] + i;
    const hourLabel = formatTime(currentHour);
    const x =
      axisLeft.value +
      (i / totalHours.value) * (axisRight.value - axisLeft.value);

    // 畫線
    ctx.beginPath();
    ctx.moveTo(x, axisBottom.value);
    ctx.lineTo(x, 50);
    ctx.strokeStyle = "#f0f0f0";
    ctx.stroke();

    // 畫文字
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillStyle = "#333";
    ctx.fillText(hourLabel, x, axisBottom.value + 8);
  }

  // 畫資料點
  mergedData.value.forEach((item) => {
    const isHovered = hoveredDate.value === item.date;
    const baseColor = tailwindColorMap[item.useColor];

    item.data.forEach((dataPoint) => {
      const formattedOption = String(dataPoint.options);
      const index = formattedLabels.value.indexOf(formattedOption);
      if (index === -1) return;

      const date = new Date(dataPoint.timestampCurrentDateTime);
      const hours =
        date.getHours() + date.getMinutes() / 60 + date.getSeconds() / 3600;

      // 只顯示在選定時間範圍內的資料點
      if (
        hours >= selectedTimeRange.value[0] &&
        hours <= selectedTimeRange.value[1]
      ) {
        const x =
          axisLeft.value +
          ((hours - selectedTimeRange.value[0]) / totalHours.value) *
            (axisRight.value - axisLeft.value);
        const y =
          axisBottom.value -
          ((index + 1) * (axisBottom.value - 50)) /
            (formattedLabels.value.length + 1);

        if (found.value) ctx.globalAlpha = isHovered ? 1 : 0.05;

        ctx.fillStyle = baseColor;
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fill();

        if (showTime.value) {
          ctx.textAlign = "left";
          ctx.textBaseline = "bottom";
          ctx.fillStyle = "black";
          const formattedTime = date.toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          });
          ctx.fillText(formattedTime, x + 10, y + 7);
        }
      }
    });
  });
};

const mergeData = (data: ProcessedOption[]) => {
  const grouped: { [key: string]: any[] } = {};

  data.forEach((item) => {
    item.ids.forEach((id) => {
      const originalData = tempData.value.find((t) => t.id === id);
      if (originalData) {
        const date = originalData.isCurrentDate;
        const time = originalData.isCurrentTime;
        const timestampCurrentDateTime = originalData.timestampCurrentDateTime;
        const useColor = getColorForDate();

        if (!grouped[date]) {
          grouped[date] = [];
        }

        grouped[date].push({
          time,
          options: item.options,
          optionsValue: item.optionsValue,
          useColor,
          timestampCurrentDateTime,
          remark: originalData.remark,
          weather: originalData.weather,
        });
      }
    });
  });

  // 對每個日期的資料進行排序
  Object.keys(grouped).forEach((date) => {
    grouped[date].sort(
      (a, b) => a.timestampCurrentDateTime - b.timestampCurrentDateTime
    );
  });

  return Object.keys(grouped).map((date) => ({
    date,
    useColor: getColorForDate(),
    data: grouped[date],
  }));
};

const mergedData = ref(mergeData(filteredOutput.value));

// 添加新的 ref 來存儲選中的 idx
const selectedIdx = ref<number[]>([]);

const filterProcessedData = async () => {
  isLoading.value = true;
  let filteredByDate = tempData.value;

  if (
    dateSelectionMode.value === "range" &&
    selectedDateRange.value.length === 2
  ) {
    const startDate = dayjs(selectedDateRange.value[0]).format("YYYY-MM-DD");
    const endDate = dayjs(selectedDateRange.value[1]).format("YYYY-MM-DD");
    filteredByDate = filteredByDate.filter((item) => {
      const itemDate = dayjs(item.isCurrentDate).format("YYYY-MM-DD");
      return itemDate >= startDate && itemDate <= endDate;
    });
  } else if (
    dateSelectionMode.value === "multiple" &&
    selectedDateRange.value.length > 0
  ) {
    const selectedDates = selectedDateRange.value.map((date) =>
      dayjs(date).format("YYYY-MM-DD")
    );
    filteredByDate = filteredByDate.filter((item) => {
      const itemDate = dayjs(item.isCurrentDate).format("YYYY-MM-DD");
      return selectedDates.includes(itemDate);
    });
  }

  const processedFilteredData = processOptions(filteredByDate);

  if (selectedOptions.value.length > 0) {
    filteredOutput.value = processedFilteredData.filter((item) => {
      return selectedOptions.value.some((selectedOption) => {
        return (
          selectedOption[0] === item.optionsValue[0] &&
          selectedOption[1] === item.optionsValue[1]
        );
      });
    });
    // 更新選中的 idx
    selectedIdx.value = filteredOutput.value.map((item) => item.idx);

    // 更新 sortOrder 並保存到 Firebase
    sortOrder.value = processedData.value.map((item) => item.idx);
    const docRef = doc(
      db,
      import.meta.env.VITE_5BASE_SORT,
      "QL2a4ypt28fG1pI1WBoU"
    );
    try {
      await updateDoc(docRef, {
        sort: sortOrder.value,
      });
      // 更新當前數據的排序
      processedData.value = processOptions(tempData.value);
      filteredOutput.value = processOptions(filteredByDate).filter((item) => {
        return selectedOptions.value.some((selectedOption) => {
          return (
            selectedOption[0] === item.optionsValue[0] &&
            selectedOption[1] === item.optionsValue[1]
          );
        });
      });
    } catch (error) {
      console.error("Error updating sort order: ", error);
    } finally {
      isLoading.value = false;
    }
  } else {
    filteredOutput.value = processedFilteredData;
    selectedIdx.value = [];
  }

  mergedData.value = mergeData(filteredOutput.value).sort((a, b) => {
    return dayjs(a.date).valueOf() - dayjs(b.date).valueOf();
  });
  drawCanvas();
  chartData.value = setChartData(filteredOutput.value);
  visible.value = false;

  // 重置懸停狀態
  hoveredDate.value = null;
  found.value = false;
};

const loadData = async () => {
  const data = await localforage.getItem("friday-schedule-filedata");
  if (data) {
    tempData.value = data as MyDocumentData[];

    await getIngredientsSort(); // 確保先獲取排序數據

    processedData.value = processOptions(tempData.value); // 在獲取排序數據後再初始化 processedData
    selectedOptions.value = processedData.value.map(
      (item) => item.optionsValue
    ); // 初始化全選狀態
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
    drawCanvas();
    isLoading.value = false;
    noCloudData.value = false;

    if (canvas.value) {
      canvas.value.addEventListener("mousemove", handleMouseMove);
    }
  } else {
    toast.add({
      severity: "warn",
      summary: "Warn",
      detail: "暫無資料，請先同步雲端資料",
      life: 5000,
    });
    isLoading.value = false;
  }
};

onMounted(async () => {
  loadData();
});

// 在組件卸載時移除事件監聽器
onUnmounted(() => {
  if (canvas.value) {
    canvas.value.removeEventListener("mousemove", handleMouseMove);
  }
});

// 新增狀態
const showDialog = ref(false);
const dialogSelectedDateRange = ref<Date[]>([]);
const isAddButtonEnabled = ref(false);
const additionalColumns = ref<
  {
    dateRange: Date[];
    filteredData: { [key: string]: number };
    id: number;
  }[]
>([]);

let columnId = 0;

// 監聽日期選擇
watch(dialogSelectedDateRange, (newVal) => {
  isAddButtonEnabled.value = newVal.length === 2;
});

// 處理取消按鈕
const handleCancel = () => {
  showDialog.value = false;
  dialogSelectedDateRange.value = [];
  isAddButtonEnabled.value = false;
};

// 處理添加按鈕
const handleAdd = () => {
  if (dialogSelectedDateRange.value.length === 2) {
    const startDate = dayjs(dialogSelectedDateRange.value[0]).format(
      "YYYY-MM-DD"
    );
    const endDate = dayjs(dialogSelectedDateRange.value[1]).format(
      "YYYY-MM-DD"
    );

    // 過濾數據
    const filteredData = processOptions(
      tempData.value.filter((item) => {
        const itemDate = dayjs(item.isCurrentDate).format("YYYY-MM-DD");
        return itemDate >= startDate && itemDate <= endDate;
      })
    );

    // 創建數據映射
    const dataMap: { [key: string]: number } = {};
    filteredData.forEach((item) => {
      dataMap[item.options] = item.counts;
    });

    additionalColumns.value.push({
      dateRange: [...dialogSelectedDateRange.value],
      filteredData: dataMap,
      id: columnId++,
    });

    showDialog.value = false;
    dialogSelectedDateRange.value = [];
    isAddButtonEnabled.value = false;
  }
};

// 添加刪除函數
const handleDeleteColumn = (id: number) => {
  additionalColumns.value = additionalColumns.value.filter(
    (column) => column.id !== id
  );
};

// 添加複製數據的函數
const copyDataToClipboard = () => {
  if (!chartData.value) return;

  let textToCopy = "";

  // 添加總計數據
  textToCopy += `圖表數據 ${dayjs(props.selectedMinDate).format("YYYY-MM-DD")} ~ ${dayjs(props.selectedMaxDate).format("YYYY-MM-DD")}\n`;
  chartData.value.labels.forEach((label: string, index: number) => {
    textToCopy += `${label}: ${chartData.value.datasets[0].data[index]}\n`;
  });
  textToCopy += "\n";

  // 添加每個日期範圍的數據
  additionalColumns.value.forEach((column) => {
    const startDate = dayjs(column.dateRange[0]).format("YYYY-MM-DD");
    const endDate = dayjs(column.dateRange[1]).format("YYYY-MM-DD");
    textToCopy += `${startDate} ~ ${endDate}\n`;

    chartData.value.labels.forEach((label: string) => {
      textToCopy += `${label}: ${column.filteredData[label] || 0}\n`;
    });
    textToCopy += "\n";
  });

  // 複製到剪貼板
  navigator.clipboard
    .writeText(textToCopy.trim())
    .then(() => {
      // 可以添加一個提示訊息
      console.log("數據已複製到剪貼板");
    })
    .catch((err) => {
      console.error("複製失敗:", err);
    });
};

// 添加拖拽結束的處理函數
const handleDragEnd = () => {
  // 更新 selectedOptions 以匹配新的順序
  selectedOptions.value = processedData.value
    .filter((item) =>
      selectedOptions.value.some(
        (selected) =>
          selected[0] === item.optionsValue[0] &&
          selected[1] === item.optionsValue[1]
      )
    )
    .map((item) => item.optionsValue);
};

const mappingWeather: Record<number, string> = {
  0: "晴天",
  1: "陰天",
  2: "雨天",
};
</script>

<template>
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
  <div class="p-2 m-2 print:hidden">
    <div
      class="grid"
      :style="{
        gridTemplateColumns: `repeat(${2 + additionalColumns.length}, minmax(0, 1fr))`,
      }"
    >
      <div class="p-2 border border-gray-300 font-bold">
        項目
        <Button
          icon="pi pi-clipboard"
          :disabled="noCloudData"
          @click="copyDataToClipboard"
        />
      </div>
      <div class="p-2 border border-gray-300 font-bold">
        圖表數據 {{ dayjs(props.selectedMinDate).format("YYYY-MM-DD") }} ~
        {{ dayjs(props.selectedMaxDate).format("YYYY-MM-DD") }}
        <Button
          icon="pi pi-calendar"
          @click="showDialog = true"
          :disabled="noCloudData"
        />
      </div>

      <template v-for="column in additionalColumns" :key="column.id">
        <div
          class="p-2 border border-gray-300 font-bold flex justify-between items-center"
        >
          <span>
            {{ dayjs(column.dateRange[0]).format("YYYY-MM-DD") }} ~
            {{ dayjs(column.dateRange[1]).format("YYYY-MM-DD") }}
          </span>
          <Button
            icon="pi pi-times"
            class="p-button-text p-button-sm"
            @click="handleDeleteColumn(column.id)"
          />
        </div>
      </template>

      <template v-if="chartData">
        <template v-for="(label, index) in chartData.labels" :key="label">
          <div class="p-2 border border-gray-300">{{ label }}</div>
          <div class="p-2 border border-gray-300">
            {{ chartData.datasets[0].data[index] }}
          </div>
          <template v-for="column in additionalColumns" :key="column.id">
            <div class="p-2 border border-gray-300">
              {{ column.filteredData[label] || 0 }}
            </div>
          </template>
        </template>
      </template>
    </div>
  </div>

  <!-- 新增對話框 -->
  <Dialog
    v-model:visible="showDialog"
    modal
    header="選擇日期範圍"
    class="!w-full sm:!w-1/5"
  >
    <div class="flex flex-column gap-3">
      <Calendar
        v-model="dialogSelectedDateRange"
        selectionMode="range"
        :manualInput="false"
        dateFormat="yy-mm-dd"
        class="w-full"
      />
    </div>
    <template #footer>
      <div class="flex justify-content-end gap-2">
        <Button
          label="Cancel"
          icon="pi pi-times"
          @click="handleCancel"
          class="p-button-text"
        />
        <Button
          label="Add"
          icon="pi pi-check"
          @click="handleAdd"
          :disabled="!isAddButtonEnabled"
        />
      </div>
    </template>
  </Dialog>

  <div class="card print:hidden">
    <Chart
      type="bar"
      :data="chartData"
      :options="chartOptions"
      class="h-screen"
    />
  </div>
  <Drawer
    v-model:visible="visible"
    header="Filter"
    position="right"
    class="!w-full sm:!w-1/4"
  >
    <div>
      <div class="grid grid-cols-2 gap-2 my-2">
        <div
          v-for="option in dateSelectionOptions"
          :key="option.value"
          class="flex items-center"
        >
          <RadioButton
            v-model="dateSelectionMode"
            :value="option.value"
            :inputId="option.value"
          />
          <label :for="option.value" class="ml-2">{{ option.label }}</label>
        </div>
      </div>
      <DatePicker
        v-model="selectedDateRange"
        :selectionMode="dateSelectionMode"
        :minDate="
          dateSelectionMode === 'range' ? props.selectedMinDate : undefined
        "
        :maxDate="
          dateSelectionMode === 'range' ? props.selectedMaxDate : undefined
        "
        placeholder="選擇日期範圍"
        class="p-inputtext w-full"
        showButtonBar
      />

      <Slider
        v-model="selectedTimeRange"
        range
        class="my-8 mx-2 w-full"
        :min="0"
        :max="24"
        :step="1"
      />
      <div class="flex justify-between text-sm text-gray-600">
        <span>{{ formatTime(selectedTimeRange[0]) }}</span>
        <span>{{ formatTime(selectedTimeRange[1]) }}</span>
      </div>
    </div>
    <div class="card">
      <div
        class="grid grid-cols-2 gap-2 py-2 border-b border-[var(--line-color)]"
      >
        <div class="flex items-center">
          <Checkbox
            :inputId="'select-all'"
            v-model="toggleSelectAllStatus"
            @change="toggleSelectAll"
            class="mr-1"
            :binary="true"
          />
          <label :for="'select-all'" class="w-full inline-block font-bold">
            全選/取消全選
          </label>
        </div>
        <div>
          <Checkbox
            v-model="canDraggable"
            inputId="canDraggable"
            name="canDraggable"
            value="false"
            :binary="true"
          />
          <label for="canDraggable" class="ml-2">是否開啟拖拉排序</label>
        </div>
      </div>

      <draggable
        v-model="processedData"
        item-key="options"
        @end="handleDragEnd"
        class="list-group min-h-[20px]"
        :disabled="!canDraggable"
      >
        <template #item="{ element }">
          <div>
            <ul>
              <li
                class="flex py-1 transition-colors duration-200 hover:bg-gray-100 sortable-chosen:bg-gray-200"
              >
                <Checkbox
                  :inputId="element.options"
                  :value="element.optionsValue"
                  v-model="selectedOptions"
                  class="mr-1"
                />
                <label :for="element.options" class="w-full inline-block">
                  {{ element.options }}
                </label>
              </li>
            </ul>
          </div>
        </template>
      </draggable>
    </div>

    <template #footer>
      <div class="grid grid-cols-2 gap-1">
        <Button label="Cancel" @click="visible = false" />
        <Button label="Filter" @click="filterProcessedData()" />
      </div>
    </template>
  </Drawer>

  <div class="fixed bottom-4 right-4 z-10 print:hidden">
    <Button
      class="!bg-[var(--main-color)]"
      icon="pi pi-filter"
      @click="visible = true"
      :disabled="noCloudData"
    ></Button>
    <Button
      @click="toggleTimeDisplay"
      :label="showTime ? '隱藏時間' : '顯示時間'"
      class="p-button-secondary ml-2"
      :disabled="noCloudData"
    />
  </div>

  <main>
    <Panel
      header="Detail Information"
      toggleable
      :collapsed="isCollapsed"
      class="p-2 m-2 [&>div]:mb-1 text-sm print:text-xs"
      v-if="mergedData.length"
    >
      <div class="grid grid-cols-2 gap-2">
        <div v-for="group in mergedData" :key="group.date" class="mb-4">
          <div class="font-bold" :style="{ color: group.useColor }">
            {{ group.date }}
          </div>
          <div>
            <div v-for="(item, index) in group.data" :key="index">
              {{ item.time }} - {{ item.options }}
              <span
                v-if="typeof item.weather === 'object'"
                class="text-gray-500"
              >
                (溫度: {{ item.weather.temp }}, 濕度:
                {{ item.weather.humidity }}%, 天氣: {{ item.weather.text }})
              </span>
              <span
                v-else-if="typeof item.weather === 'number'"
                class="text-gray-500"
              >
                (天氣: {{ mappingWeather[item.weather] }})
              </span>
              <span v-if="item.remark" class="text-gray-500">
                ({{ item.remark }})
              </span>
            </div>
          </div>
        </div>
      </div>
    </Panel>

    <div class="flex w-full justify-center print:hidden">
      <canvas ref="canvas"></canvas>
    </div>
  </main>
</template>
