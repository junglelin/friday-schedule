<script setup lang="ts">
import Button from "primevue/button";
import { useRoute } from "vue-router";

const emit = defineEmits(["add"]);
const route = useRoute();

const handleAdd = () => {
  emit("add");
};
</script>

<template>
  <footer
    class="app-footer fixed bottom-0 left-0 w-full bg-[var(--bg-color)] z-30"
  >
    <nav class="grid grid-cols-4 items-center h-[60px]">
      <router-link
        to="/"
        class="h-full flex flex-col items-center justify-center gap-[2px] text-xs"
        :class="route.path === '/' ? 'font-bold' : 'opacity-50'"
      >
        <i class="pi pi-list text-xl"></i>
        <span>紀錄</span>
      </router-link>
      <router-link
        to="/statistics"
        class="h-full flex flex-col items-center justify-center gap-[2px] text-xs"
        :class="route.path === '/statistics' ? 'font-bold' : 'opacity-50'"
      >
        <i class="pi pi-chart-bar text-xl"></i>
        <span>統計</span>
      </router-link>
      <div class="flex justify-center">
        <Button
          class="!bg-[var(--main-color)] !w-[52px] !h-[52px] !rounded-full shadow-lg"
          icon="pi pi-plus"
          aria-label="新增紀錄"
          @click="handleAdd"
        />
      </div>
      <router-link
        to="/options"
        class="h-full flex flex-col items-center justify-center gap-[2px] text-xs"
        :class="route.path.startsWith('/options') ? 'font-bold' : 'opacity-50'"
      >
        <i class="pi pi-cog text-xl"></i>
        <span>設定</span>
      </router-link>
    </nav>
  </footer>
</template>

<style scoped>
.app-footer {
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.04);
  padding-bottom: var(--footer-gap);
}
</style>
