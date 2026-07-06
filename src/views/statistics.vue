<script setup lang="ts">
import { ref } from "vue";
import Button from "primevue/button";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";
import AppHeader from "../components/AppHeader.vue";
import ChartView from "./chart.vue";
import dayjs from "dayjs";
import localforage from "localforage";

import { db } from "../services/firebase";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { QueryDocumentSnapshot } from "firebase/firestore";

const selectedMinDate = dayjs().subtract(30, "day").toDate();
const selectedMaxDate = dayjs().toDate();

const toast = useToast();
const isSyncing = ref(false);
const chartKey = ref(0);

const mapDocToData = (doc: QueryDocumentSnapshot) => {
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

const syncCloudData = async () => {
  isSyncing.value = true;
  try {
    const q = query(
      collection(db, import.meta.env.VITE_5BASE_DC),
      orderBy("timestampCurrentDateTime", "desc"),
    );
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map(mapDocToData);

    await localforage.setItem("friday-schedule-filedata", data);
    chartKey.value++;

    toast.add({
      severity: "success",
      summary: "同步完成",
      detail: `已同步 ${data.length} 筆資料`,
      life: 3000,
    });
  } catch (error) {
    console.error("Error syncing cloud data:", error);
    toast.add({
      severity: "error",
      summary: "Error",
      detail: `同步失敗：${error}`,
      life: 5000,
    });
  } finally {
    isSyncing.value = false;
  }
};
</script>

<template>
  <Toast position="center" />
  <AppHeader />
  <div class="flex justify-end px-2 pt-2 print:hidden">
    <Button
      icon="pi pi-cloud-download"
      label="同步雲端資料"
      :loading="isSyncing"
      class="!bg-[var(--main-color)]"
      @click="syncCloudData"
    />
  </div>
  <ChartView
    :key="chartKey"
    :selectedMinDate="selectedMinDate"
    :selectedMaxDate="selectedMaxDate"
  />
</template>
