import { products } from "../data.js";
import { createProductCardHTML } from "../utils.js";
import "./components/navbar.js";

// Selector kategori
const categoryCheckboxes = document.querySelectorAll(".category-checkbox");
const resetFilterBtn = document.querySelector(".reset-filter-button");
// Selector sortir
const dropdownButton = document.getElementById("sort-dropdown-button");
const dropdownMenu = document.getElementById("sort-dropdown-menu");
const dropdownValue = document.getElementById("sort-dropdown-value");
const dropdownIcon = document.getElementById("sort-dropdown-icon");

// Konstanta global
const searchParams = new URLSearchParams(window.location.search);

// State global
let selectedCategories = [];
let sortBy = "default";

// Menghapus sebuah search param
const deleteSearchParam = (name) => {
  searchParams.delete(name);
  window.history.pushState({}, "", `?${searchParams.toString()}`); // Ubah URL sesuai search params
};

// Menampilkan listing produk
const showProducts = () => {
  const container = document.querySelector(".products-container");
  const count = document.querySelector(".products-count");
  const availableCount = document.querySelector(".available-products-count");

  // Filter produk
  const filteredProducts = products.filter((product) => {
    return (
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category.toLowerCase())
    );
  });

  // Sortir urutan produk
  const sortedProducts = filteredProducts.sort((a, b) => {
    const priceA = a.price * (1 - a.discount);
    const priceB = b.price * (1 - b.discount);
    if (sortBy === "price_low") return priceA - priceB; // Harga terendah
    if (sortBy === "price_high") return priceB - priceA; // Harga tertinggi
    if (sortBy === "rating") return b.rating.average - a.rating.average; // Rating tertinggi
    return a.id - b.id; // Default
  });

  const productElements = sortedProducts
    .map((product) => createProductCardHTML(product))
    .join("");

  count.textContent = filteredProducts.length;
  availableCount.textContent = products.length;
  container.innerHTML = productElements;
};

// === Filter Kategori ===
categoryCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", (event) => {
    const { checked, value } = event.target;
    if (checked) {
      selectedCategories = Array.from(new Set([...selectedCategories, value]));
    } else {
      selectedCategories = selectedCategories.filter(
        (selected) => selected !== value
      );
    }

    showProducts();
    console.log("selectedCategories", selectedCategories);
  });
});

resetFilterBtn.addEventListener("click", () => {
  selectedCategories = [];
  deleteSearchParam("default_category");
  categoryCheckboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });

  showProducts();
  console.log("selectedCategories", selectedCategories);
});

// === Toggle Menu Filter ===
const filterToggleBtn = document.querySelector(
  "button:has(svg.lucide-sliders-horizontal)"
);
const mobileFilter = document.getElementById("mobile-filter");
const closeFilterBtn = document.getElementById("close-filter");

// Toggle buka/tutup filter
filterToggleBtn?.addEventListener("click", () => {
  mobileFilter.classList.toggle("hidden");
  mobileFilter.classList.toggle("flex"); // untuk flex centering
});

closeFilterBtn?.addEventListener("click", () => {
  mobileFilter.classList.add("hidden");
  mobileFilter.classList.remove("flex");
});

// Tutup jika klik di luar kotak filter
mobileFilter?.addEventListener("click", (e) => {
  if (e.target === mobileFilter) {
    mobileFilter.classList.add("hidden");
    mobileFilter.classList.remove("flex");
  }
});

// === Dropdown Sortir ===
// Toggle buka/tutup menu
dropdownButton.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdownMenu.classList.toggle("hidden");
  dropdownIcon.classList.toggle("rotate-180"); // rotasi ikon panah
});

// Klik item = pilih opsi
dropdownMenu.querySelectorAll("li").forEach((item) => {
  item.addEventListener("click", () => {
    dropdownValue.textContent = item.textContent; // ubah teks di tombol
    dropdownMenu.classList.add("hidden");
    dropdownIcon.classList.remove("rotate-180");

    sortBy = item.dataset.value;
    showProducts();
  });
});

// Klik di luar dropdown = tutup menu
document.addEventListener("click", (e) => {
  if (!dropdownButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.classList.add("hidden");
    dropdownIcon.classList.remove("rotate-180");
  }
});

// === Inisialisasi ===
// Inisialisasi showProducts
const initShowProducts = () => {
  const categories = Array.from(
    new Set(products.map((product) => product.category.toLowerCase()))
  );
  const defaultCategory = (
    searchParams.get("default_category") ?? ""
  ).toLowerCase();

  if (categories.includes(defaultCategory)) {
    selectedCategories = [defaultCategory];
  }

  categoryCheckboxes.forEach((checkbox) => {
    if (defaultCategory === checkbox.value) {
      checkbox.checked = true;
    }
  });

  showProducts();
};

// Inisialisasi seluruh fungsi
window.addEventListener("load", () => {
  initShowProducts();
});
