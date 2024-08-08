import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
//import tailwindcss from "tailwindcss";

import { fileURLToPath } from 'url';

// because __dirname was showing undefined
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  root: "./",
  base: "./",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./@"),
    },
  },
  
  plugins: [react()],
})
