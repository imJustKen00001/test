import { defineConfig } from "vite";
import path from "path";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  base: "/test",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/styles/mixins" as *;
        `,
      },
    },
  },
});
