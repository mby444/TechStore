/**
 * Elemen tombol untuk membuka/menutup menu navigasi di tampilan mobile.
 * @type {HTMLElement}
 */
const navbarMobileBtn = document.getElementById("mobile-menu-btn");

/**
 * Elemen menu navigasi yang ditampilkan pada mode mobile.
 * @type {HTMLElement}
 */
const navbarMobileMenu = document.getElementById("mobile-menu");

/**
 * Menangani aksi klik pada tombol menu mobile.
 * Saat tombol diklik, menu akan ditampilkan jika sebelumnya tersembunyi,
 * dan disembunyikan jika sedang ditampilkan.
 *
 * @event click
 * @returns {void}
 */
navbarMobileBtn.addEventListener("click", () => {
  const isVisible = navbarMobileMenu.style.display === "flex";
  navbarMobileMenu.style.display = isVisible ? "none" : "flex";
});
