import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Forzamos a Vite a compilar el proyecto como una aplicación estática tradicional (SPA)
export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  build: {
    outDir: "dist", // La carpeta estándar que Cloudflare Pages sí entiende
  },
});