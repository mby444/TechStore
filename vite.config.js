import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        produk: resolve(__dirname, "produk/index.html"),
        "produk/detail": resolve(__dirname, "produk/detail/index.html"),
        kontak: resolve(__dirname, "kontak/index.html"),
      },
    },
  },
});
