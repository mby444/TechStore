/**
 * ============================================
 *  Halaman Listing Produk - TechStore
 *  --------------------------------------------
 *  Fungsionalitas:
 *  - Menampilkan daftar produk
 *  - Filter berdasarkan kategori
 *  - Sortir berdasarkan harga/rating
 *  - Kontrol tampilan filter & dropdown
 * ============================================
 */

import { products } from "../data.js";
import { createProductCardHTML } from "../utils.js";
import "./components/navbar.js";

/* -------------------------------------------------
 * SELEKTOR DOM
 * ------------------------------------------------- */

// Filter kategori
const categoryCheckboxes = document.querySelectorAll(".category-checkbox");
const resetFilterBtn = document.querySelector(".reset-filter-button");

// Dropdown sortir
const dropdownButton = document.getElementById("sort-dropdown-button");
const dropdownMenu = document.getElementById("sort-dropdown-menu");
const dropdownValue = document.getElementById("sort-dropdown-value");
const dropdownIcon = document.getElementById("sort-dropdown-icon");

// Filter tampilan mobile
const filterToggleBtn = document.querySelector(
  "button:has(svg.lucide-sliders-horizontal)"
);
const mobileFilter = document.getElementById("mobile-filter");
const closeFilterBtn = document.getElementById("close-filter");

/* -------------------------------------------------
 * KONSTANTA & STATE GLOBAL
 * ------------------------------------------------- */

const searchParams = new URLSearchParams(window.location.search);

let selectedCategories = []; // daftar kategori terpilih
let sortBy = "default"; // opsi urutan produk

/* -------------------------------------------------
 * FUNGSI: Menghapus search parameter dari URL
 * ------------------------------------------------- */

/**
 * Menghapus parameter query string dari URL
 * @param {string} name - Nama parameter yang ingin dihapus
 */
const deleteSearchParam = (name) => {
  searchParams.delete(name);
  window.history.pushState({}, "", `?${searchParams.toString()}`);
};

/* -------------------------------------------------
 * FUNGSI: Menampilkan daftar produk
 * ------------------------------------------------- */

/**
 * Menampilkan produk pada halaman dengan filter dan urutan aktif
 */
const showProducts = () => {
  const container = document.querySelector(".products-container");
  const count = document.querySelector(".products-count");
  const availableCount = document.querySelector(".available-products-count");

  // Filter produk berdasarkan kategori
  const filteredProducts = products.filter(
    (product) =>
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category.toLowerCase())
  );

  // Sortir produk sesuai pilihan
  const sortedProducts = filteredProducts.sort((a, b) => {
    const priceA = a.price * (1 - a.discount);
    const priceB = b.price * (1 - b.discount);

    switch (sortBy) {
      case "price_low":
        return priceA - priceB;
      case "price_high":
        return priceB - priceA;
      case "rating":
        return b.rating.average - a.rating.average;
      default:
        return a.id - b.id;
    }
  });

  // Render HTML kartu produk
  const productElements = sortedProducts
    .map((product) => createProductCardHTML(product))
    .join("");

  // Tampilkan hasil
  count.textContent = filteredProducts.length;
  availableCount.textContent = products.length;
  container.innerHTML = productElements;
};

/* -------------------------------------------------
 * BAGIAN: Filter Kategori Produk
 * ------------------------------------------------- */

/**
 * Event listener untuk checkbox kategori
 */
categoryCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", (event) => {
    const { checked, value } = event.target;

    // Tambah/hapus kategori ke daftar terpilih
    if (checked) {
      selectedCategories = Array.from(new Set([...selectedCategories, value]));
    } else {
      selectedCategories = selectedCategories.filter(
        (selected) => selected !== value
      );
    }

    showProducts();
  });
});

/**
 * Tombol reset filter kategori
 */
resetFilterBtn.addEventListener("click", () => {
  selectedCategories = [];
  deleteSearchParam("default_category");

  categoryCheckboxes.forEach((checkbox) => (checkbox.checked = false));

  showProducts();
});

/* -------------------------------------------------
 * BAGIAN: Toggle Menu Filter (Mobile)
 * ------------------------------------------------- */

/**
 * Membuka / menutup menu filter pada tampilan mobile
 */
filterToggleBtn?.addEventListener("click", () => {
  mobileFilter.classList.toggle("hidden");
  mobileFilter.classList.toggle("flex"); // agar posisi konten tetap terpusat
});

/**
 * Tombol "X" untuk menutup menu filter
 */
closeFilterBtn?.addEventListener("click", () => {
  mobileFilter.classList.add("hidden");
  mobileFilter.classList.remove("flex");
});

/**
 * Tutup filter jika klik di luar area filter
 */
mobileFilter?.addEventListener("click", (e) => {
  if (e.target === mobileFilter) {
    mobileFilter.classList.add("hidden");
    mobileFilter.classList.remove("flex");
  }
});

/* -------------------------------------------------
 * BAGIAN: Dropdown Sortir Produk
 * ------------------------------------------------- */

/**
 * Toggle buka/tutup dropdown saat tombol diklik
 */
dropdownButton.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdownMenu.classList.toggle("hidden");
  dropdownIcon.classList.toggle("rotate-180"); // animasi ikon panah
});

/**
 * Pilih opsi sortir dari daftar dropdown
 */
dropdownMenu.querySelectorAll("li").forEach((item) => {
  item.addEventListener("click", () => {
    dropdownValue.textContent = item.textContent; // ubah teks pada tombol
    dropdownMenu.classList.add("hidden");
    dropdownIcon.classList.remove("rotate-180");

    sortBy = item.dataset.value;
    showProducts();
  });
});

/**
 * Tutup dropdown jika klik di luar area menu
 */
document.addEventListener("click", (e) => {
  if (!dropdownButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.classList.add("hidden");
    dropdownIcon.classList.remove("rotate-180");
  }
});

/* -------------------------------------------------
 * INISIALISASI: Saat Halaman Dimuat
 * ------------------------------------------------- */

/**
 * Menginisialisasi daftar produk dan kategori default
 */
const initShowProducts = () => {
  // Ambil semua kategori unik dari produk
  const categories = Array.from(
    new Set(products.map((product) => product.category.toLowerCase()))
  );

  // Baca kategori default dari query string (?default_category=)
  const defaultCategory = (
    searchParams.get("default_category") ?? ""
  ).toLowerCase();

  // Jika kategori valid, terapkan ke filter
  if (categories.includes(defaultCategory)) {
    selectedCategories = [defaultCategory];
  }

  // Tandai checkbox kategori default
  categoryCheckboxes.forEach((checkbox) => {
    if (defaultCategory === checkbox.value) checkbox.checked = true;
  });

  showProducts();
};

/**
 * Event utama saat halaman selesai dimuat
 */
window.addEventListener("load", () => {
  initShowProducts();
});
