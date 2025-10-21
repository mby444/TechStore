/**
 * ============================================
 *  Halaman Beranda - Produk Unggulan
 *  --------------------------------------------
 *  Menampilkan 4 produk teratas (unggulan)
 *  pada bagian beranda website.
 * ============================================
 */

import { products } from "../data.js";
import { createProductCardHTML } from "../utils.js";
import "./components/navbar.js";

/**
 * Menampilkan 4 produk unggulan di beranda.
 * Produk diambil dari data `products` dan
 * ditampilkan menggunakan fungsi `createProductCardHTML`.
 */
const showTopProducts = () => {
  const topProductsParent = document.querySelector(".top-products");

  if (!topProductsParent) {
    console.warn("Elemen .top-products tidak ditemukan di DOM.");
    return;
  }

  // Ambil 4 produk dengan rating tertinggi dari daftar produk
  const topProductsHTML = products
    .sort((a, b) => b.rating.average - a.rating.average)
    .slice(0, 4)
    .map((product) => createProductCardHTML(product))
    .join("");

  // Render ke dalam elemen container
  topProductsParent.innerHTML = topProductsHTML;
};

// Jalankan fungsi setelah halaman dimuat
document.addEventListener("DOMContentLoaded", showTopProducts);
