<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import Button from "primevue/button";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";
import draggable from "vuedraggable";
import type { IngredientsCategories } from "../models/ingredients";
import {
  useIngredients,
  seedIngredientsFromStatic,
  saveCategoryOrder,
  categoryDisplayNames,
} from "../services/ingredientsStore";

const router = useRouter();
const toast = useToast();
const { ingredients, favoriteItems, categoryOrder, isCloudData, isReady } =
  useIngredients();

const isSaving = ref(false);

function showError(error: unknown) {
  toast.add({
    severity: "error",
    summary: "Error",
    detail: `發生不可預期的錯誤，請先截圖。${error}`,
    life: 5000,
  });
}

async function seed() {
  isSaving.value = true;
  try {
    await seedIngredientsFromStatic();
    toast.add({
      severity: "success",
      summary: "完成",
      detail: "選項已匯入雲端，之後可直接在此頁管理",
      life: 3000,
    });
  } catch (error) {
    showError(error);
  } finally {
    isSaving.value = false;
  }
}

async function onReorderCategories(newOrder: IngredientsCategories[]) {
  isSaving.value = true;
  try {
    await saveCategoryOrder(newOrder);
  } catch (error) {
    showError(error);
  } finally {
    isSaving.value = false;
  }
}

function goCategory(category: IngredientsCategories) {
  router.push(`/options/${category}`);
}

function activeCount(category: IngredientsCategories): number {
  return ingredients.value[category].filter((item) => item.active).length;
}

function totalCount(category: IngredientsCategories): number {
  return ingredients.value[category].length;
}
</script>

<template>
  <Toast position="center" />
  <header
    class="p-2 min-h-[56px] flex items-center gap-1 border-b border-[var(--line-color)]"
  >
    <h1 class="!text-lg font-extrabold">
      選項管理
      <span class="opacity-50 text-sm uppercase">options</span>
    </h1>
  </header>
  <main class="p-2 pb-[80px] text-sm">
    <div v-if="!isReady" class="p-4 text-center">載入中...</div>

    <div v-else-if="!isCloudData" class="p-2">
      <p class="mb-4">
        選項目前還在程式碼裡，尚未匯入雲端。匯入一次之後，就可以直接在這個頁面新增、改名、停用選項，不需要再改程式。
      </p>
      <Button
        label="匯入現有選項到雲端"
        icon="pi pi-cloud-upload"
        class="w-full"
        :loading="isSaving"
        @click="seed"
      ></Button>
    </div>

    <div v-else>
      <p class="opacity-60 text-xs my-2">
        按住 ☰ 拖曳調整分類順序；點分類進入管理選項。
      </p>
      <ul
        class="border border-[var(--line-color)] rounded-lg shadow-sm overflow-hidden mb-2"
      >
        <li
          class="flex items-center gap-1 px-1 min-h-[48px]"
          @click="router.push('/options/favorites')"
        >
          <i
            class="pi pi-star-fill text-yellow-500 p-2 shrink-0"
          ></i>
          <span class="w-full">
            常用
            <span class="opacity-50 text-xs uppercase ml-1">favorites</span>
          </span>
          <span class="opacity-60 text-xs mr-1 shrink-0">
            {{ favoriteItems.length }}
          </span>
          <i class="pi pi-chevron-right opacity-40 shrink-0"></i>
        </li>
      </ul>
      <draggable
        :model-value="categoryOrder"
        :item-key="(category: string) => category"
        tag="ul"
        handle=".drag-handle"
        :disabled="isSaving"
        class="border border-[var(--line-color)] rounded-lg shadow-sm overflow-hidden"
        @update:model-value="onReorderCategories"
      >
        <template #item="{ element: category }">
          <li
            class="flex items-center gap-1 px-1 min-h-[48px] border-b border-[var(--line-color)] last:border-b-0"
            @click="goCategory(category)"
          >
            <i
              class="pi pi-bars drag-handle opacity-40 p-2 shrink-0 touch-none"
              @click.stop
            ></i>
            <span class="w-full">
              {{ categoryDisplayNames[category as IngredientsCategories] }}
              <span class="opacity-50 text-xs uppercase ml-1">
                {{ category }}
              </span>
            </span>
            <span class="opacity-60 text-xs mr-1 shrink-0">
              {{ activeCount(category) }}/{{ totalCount(category) }}
            </span>
            <i class="pi pi-chevron-right opacity-40 shrink-0"></i>
          </li>
        </template>
      </draggable>
      <p class="opacity-60 mt-2 text-xs">
        數字為「啟用中/全部」的選項數量。
      </p>
    </div>
  </main>
</template>

<style scoped></style>
