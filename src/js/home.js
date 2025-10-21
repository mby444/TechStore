import { products } from "../data.js";
import { createProductCardHTML } from "../utils.js";
import "./components/navbar.js";

// Menampilkan 4 produk unggulan
const showTopProducts = () => {
  const topProductsParent = document.querySelector(".top-products");
  const topProductsChildren = products
    .slice(0, 4)
    .map((product) => createProductCardHTML(product))
    .join("");

  topProductsParent.innerHTML = topProductsChildren;
};

showTopProducts();
