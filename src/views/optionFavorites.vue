<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import Button from "primevue/button";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";
import type { IngredientsCategories } from "../models/ingredients";
import {
  useIngredients,
  saveIngredientsCategory,
  categoryDisplayNames,
  type IngredientItem,
} from "../services/ingredientsStore";

const router = useRouter();
const toast = useToast();
const { ingredients, favoriteItems, isCloudData, isReady } = useIngredients();

const isSaving = ref(false);

function showError(error: unknown) {
  toast.add({
    severity: "error",
    summary: "Error",
    detail: `發生不可預期的錯誤，請先截圖。${error}`,
    life: 5000,
  });
}

async function removeFavorite(
  category: IngredientsCategories,
  item: IngredientItem
) {
  const nextItems = ingredients.value[category].map((i) =>
    i.value === item.value ? { ...i, favorite: false } : i
  );
  isSaving.value = true;
  try {
    await saveIngredientsCategory(category, nextItems);
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
    <h1 class="!text-lg font-extrabold">
      常用
      <span class="opacity-50 text-sm uppercase">favorites</span>
    </h1>
  </header>
  <main class="p-2 pb-[calc(80px+var(--footer-gap))] text-sm">
    <div v-if="!isReady" class="p-4 text-center">載入中...</div>

    <div v-else-if="!isCloudData" class="p-2">
      選項尚未匯入雲端，請先回「選項管理」執行匯入。
    </div>

    <div v-else>
      <p class="opacity-60 text-xs my-2">
        到各分類點 ☆ 即可加入常用；在這裡點 ★ 可移除。常用會顯示在新增表單的最上面。
      </p>

      <p v-if="!favoriteItems.length" class="p-4 text-center opacity-60">
        還沒有常用選項，到分類裡點 ☆ 加入。
      </p>

      <ul
        v-else
        class="border border-[var(--line-color)] rounded-lg shadow-sm overflow-hidden"
      >
        <li
          v-for="entry in favoriteItems"
          :key="entry.category + '-' + entry.item.value"
          class="flex items-center gap-1 px-1 min-h-[48px] border-b border-[var(--line-color)] last:border-b-0"
        >
          <span
            class="w-full pl-2"
            :class="{ 'opacity-40 line-through': !entry.item.active }"
          >
            {{ entry.item.label }}
            <span class="opacity-50 text-xs ml-1">
              {{ categoryDisplayNames[entry.category] }}
            </span>
          </span>
          <Button
            icon="pi pi-star-fill"
            variant="text"
            class="w-[40px] h-[40px] shrink-0 [&_.p-button-icon]:text-yellow-500"
            :disabled="isSaving"
            @click="removeFavorite(entry.category, entry.item)"
          ></Button>
        </li>
      </ul>
    </div>
  </main>
</template>

<style scoped></style>
