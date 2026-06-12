<script setup lang="ts">
import { ref } from "vue";
import AppFooter from "./components/AppFooter.vue";
import FormDialog from "./components/FormDialog.vue";

const formDialogVisible = ref(false);
</script>

<template>
  <router-view />
  <FormDialog
    :visible="formDialogVisible"
    :editData="undefined"
    @update:visible="formDialogVisible = $event"
  />
  <AppFooter @add="formDialogVisible = true" />
</template>
