import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/NeuroStrategia/",
  plugins: [tailwindcss()],
  build: {
    outDir: "build/client",
    emptyOutDir: true,
  },
});