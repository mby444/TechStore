import { products } from "../data.js";
import { showPopup } from "../lib/popup.js";
import {
  formatRupiah,
  createProductContentHTML,
  createDetailTabsHTML,
} from "../utils.js";
import "./components/navbar.js";

// Konstanta global
const searchParams = new URLSearchParams(window.location.search);
const idParam = searchParams.get("id") ?? "";
const product = products.find((product) => product.id === Number(idParam));

// State global
let activeTabIndex = 0;
let qty = 1;

// Menampilkan konten produk
const showProductContent = () => {
  const container = document.querySelector(".product-content-container");
  const contentElement = createProductContentHTML(product);
  container.innerHTML = contentElement;
};

// Dipanggil ketika produk tidak ditemukan
const showProductNotFound = () => {
  const container = document.querySelector(".product-main-container");
  container.innerHTML = `<h2 class="text-center">Produk tidak ditemukan</h2>`;
};

// === Tombol Qty Produk ===
const showProductQty = (elements, qty) => {
  elements.qtyMinusButton.disabled = qty <= 1;
  elements.qtyPlusButton.disabled = qty >= product.stock;
  elements.productQty.textContent = qty;
  elements.productSubtotal.textContent = formatRupiah(
    product.price * (1 - product.discount) * qty
  );
};

const initProductQty = () => {
  const qtyMinusButton = document.querySelector(".qty-minus-button");
  const qtyPlusButton = document.querySelector(".qty-plus-button");
  const productQty = document.querySelector(".product-qty");
  const productSubtotal = document.querySelector(".product-subtotal");
  const elements = {
    qtyMinusButton,
    qtyPlusButton,
    productQty,
    productSubtotal,
  };

  showProductQty(elements, qty);

  qtyMinusButton.addEventListener("click", () => {
    if (qty > 1) {
      showProductQty(elements, --qty);
    }
  });

  qtyPlusButton.addEventListener("click", () => {
    if (qty < product.stock) {
      showProductQty(elements, ++qty);
    }
  });
};

// === Detail Produk Bawah ===
const detailTabButtons = document.querySelectorAll(".detail-tab-button");
const tabContainers = document.querySelectorAll(".detail-tab-container");

const toggleTab = (index, prevIndex) => {
  // Toggle tombol tab
  detailTabButtons[prevIndex].dataset.state = "inactive";
  detailTabButtons[index].dataset.state = "active";

  // Toggle elemen tab
  tabContainers[prevIndex].classList.add("hidden");
  tabContainers[index].classList.remove("hidden");
};

const initDetailTabs = () => {
  detailTabButtons.forEach((button, i) => {
    button.addEventListener("click", () => {
      toggleTab(i, activeTabIndex);
      activeTabIndex = i;
    });
  });

  const detailTabElements = createDetailTabsHTML(product);

  tabContainers.forEach((container, i) => {
    container.innerHTML = detailTabElements[i];
  });
};

// === Inisialisasi Tombol Beli ===
const initBuyButton = () => {
  const button = document.querySelector(".product-buy-button");

  button.addEventListener("click", () => {
    showPopup("Sukses!", "Berhasil menambahkan ke keranjang.", "info");
  });
};

// === Inisialisasi ===
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
