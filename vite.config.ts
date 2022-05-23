import typescript from "@rollup/plugin-typescript";
import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      ...typescript({ tsconfig: "./tsconfig.json" }),
      apply: "build",
      declaration: true,
      declarationDir: "types/",
      rootDir: "/",
    },
    vue(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
