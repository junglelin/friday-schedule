import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import compression from "vite-plugin-compression";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/friday-schedule/",
  plugins: [vue(), tailwindcss(), compression()],
});
