import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "",
  css: {
    preprocessorOptions: {
      scss: { additionalData: `@use 'src/styles/main' as *;`, api: "modern" },
    },
  },
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      src: "/src",
    },
  },
});
