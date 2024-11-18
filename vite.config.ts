import { defineConfig } from "vite";
import plugin from "@vitejs/plugin-vue";
import path from "path";

import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()], // when tailwind() removed, zoom works
    },
  },
  plugins: [plugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5173,
  },
});
