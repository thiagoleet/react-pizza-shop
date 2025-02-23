import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import type { UserConfig } from "vite";
import type { InlineConfig } from "vitest/node";

export default defineConfig({
  plugins: [react()],

  server: {
    port: 8080,
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  test: {
    globals: true,
    setupFiles: ["./test/setup.ts"],
  },
} as UserConfig & {
  test: InlineConfig;
});
