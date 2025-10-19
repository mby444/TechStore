import { products } from "../data.js";
import { createProductCardHTML } from "../utils.js";

// Menampilkan listing produk
const showProducts = () => {
  const container = document.querySelector(".products-container");
  const productElements = products
    .map((product) => createProductCardHTML(product))
    .join("");

  container.innerHTML = productElements;
};

showProducts();
