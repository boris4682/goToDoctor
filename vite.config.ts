import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path"; // Заменяем require на import

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // Используем import для resolve
      "@components": "/src/components/",
      "@pages": "/src/pages/",
      "@shared": "/src/components/shared/",
      "@assets": "/src/assets/",
    },
  },
});
