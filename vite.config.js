import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        produk: "produk/index.html",
        "produk/detail": "produk/detail/index.html",
        kontak: "kontak/index.html",
      },
    },
  },
  server: {
    port: 3000,
  },
});
