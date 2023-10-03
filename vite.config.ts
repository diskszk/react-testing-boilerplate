/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    include: ["src/**/*.{test,spec}.{js,ts,jsx,tsx}"],
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
  },
});
