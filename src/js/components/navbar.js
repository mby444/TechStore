const navbarMobileBtn = document.getElementById("mobile-menu-btn");
const navbarMobileMenu = document.getElementById("mobile-menu");

navbarMobileBtn.addEventListener("click", () => {
  navbarMobileMenu.style.display =
    navbarMobileMenu.style.display === "flex" ? "none" : "flex";
});
