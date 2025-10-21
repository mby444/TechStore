/**
 * ============================================
 *  Halaman Detail Produk - TechStore
 *  --------------------------------------------
 *  Menampilkan detail produk, mengatur kuantitas,
 *  tab detail produk, dan tombol beli.
 * ============================================
 */

import { products } from "../data.js";
import { showPopup } from "../lib/popup.js";
import {
  formatRupiah,
  createProductContentHTML,
  createDetailTabsHTML,
} from "../utils.js";
import "./components/navbar.js";

/* -------------------------------------------------
 * KONSTANTA & STATE GLOBAL
 * ------------------------------------------------- */

// Ambil parameter `id` dari URL
const searchParams = new URLSearchParams(window.location.search);
const idParam = searchParams.get("id") ?? "";

// Cari produk berdasarkan ID
const product = products.find((p) => p.id === Number(idParam));

// State untuk tab aktif dan jumlah produk
let activeTabIndex = 0;
let qty = 1;

/* -------------------------------------------------
 * FUNGSI: Menampilkan konten utama produk
 * ------------------------------------------------- */
const showProductContent = () => {
  const container = document.querySelector(".product-content-container");
  const contentHTML = createProductContentHTML(product);
  container.innerHTML = contentHTML;
};

/* -------------------------------------------------
 * FUNGSI: Jika produk tidak ditemukan
 * ------------------------------------------------- */
const showProductNotFound = () => {
  const container = document.querySelector(".product-main-container");
  container.innerHTML = `<h2 class="text-center">Produk tidak ditemukan</h2>`;
};

/* -------------------------------------------------
 * BAGIAN: Tombol Kuantitas Produk
 * ------------------------------------------------- */

/**
 * Menampilkan nilai kuantitas, subtotal, dan status tombol
 * @param {Object} elements - Elemen DOM tombol dan teks qty
 * @param {number} qty - Jumlah produk saat ini
 */
const showProductQty = (elements, qty) => {
  elements.qtyMinusButton.disabled = qty <= 1;
  elements.qtyPlusButton.disabled = qty >= product.stock;
  elements.productQty.textContent = qty;

  // Hitung subtotal dengan diskon (jika ada)
  const subtotal = product.price * (1 - product.discount) * qty;
  elements.productSubtotal.textContent = formatRupiah(subtotal);
};

/**
 * Inisialisasi tombol + dan - kuantitas
 */
const initProductQty = () => {
  const elements = {
    qtyMinusButton: document.querySelector(".qty-minus-button"),
    qtyPlusButton: document.querySelector(".qty-plus-button"),
    productQty: document.querySelector(".product-qty"),
    productSubtotal: document.querySelector(".product-subtotal"),
  };

  showProductQty(elements, qty);

  elements.qtyMinusButton.addEventListener("click", () => {
    if (qty > 1) showProductQty(elements, --qty);
  });

  elements.qtyPlusButton.addEventListener("click", () => {
    if (qty < product.stock) showProductQty(elements, ++qty);
  });
};

/* -------------------------------------------------
 * BAGIAN: Tab Detail Produk (Deskripsi, Spesifikasi, dll)
 * ------------------------------------------------- */

const detailTabButtons = document.querySelectorAll(".detail-tab-button");
const tabContainers = document.querySelectorAll(".detail-tab-container");

/**
 * Mengubah tab aktif berdasarkan index
 * @param {number} index - Tab baru yang diklik
 * @param {number} prevIndex - Tab sebelumnya
 */
const toggleTab = (index, prevIndex) => {
  // Ganti status tombol tab
  detailTabButtons[prevIndex].dataset.state = "inactive";
  detailTabButtons[index].dataset.state = "active";

  // Ganti tampilan konten tab
  tabContainers[prevIndex].classList.add("hidden");
  tabContainers[index].classList.remove("hidden");
};

/**
 * Inisialisasi tab detail produk
 */
const initDetailTabs = () => {
  // Event klik untuk tombol tab
  detailTabButtons.forEach((button, i) => {
    button.addEventListener("click", () => {
      toggleTab(i, activeTabIndex);
      activeTabIndex = i;
    });
  });

  // Isi konten tiap tab dari template HTML
  const detailTabElements = createDetailTabsHTML(product);
  tabContainers.forEach((container, i) => {
    container.innerHTML = detailTabElements[i];
  });
};

/* -------------------------------------------------
 * BAGIAN: Tombol Beli Produk
 * ------------------------------------------------- */

/**
 * Inisialisasi tombol "Beli Sekarang"
 */
const initBuyButton = () => {
  const button = document.querySelector(".product-buy-button");
  button.addEventListener("click", () => {
    showPopup("Sukses!", "Berhasil menambahkan ke keranjang.", "info");
  });
};

/* -------------------------------------------------
 * INISIALISASI SAAT HALAMAN DIMUAT
 * ------------------------------------------------- */

window.addEventListener("load", () => {
  if (product) {
    showProductContent();
    initProductQty();
    initBuyButton();
    initDetailTabs();
  } else {
    showProductNotFound();
  }
});
