import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@components": path.resolve(__dirname, "src/components"),
      "@config": path.resolve(__dirname, "config"),
      "@utils": path.resolve(__dirname, "utils"),
    },
  },
});
