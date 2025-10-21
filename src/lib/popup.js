/**
 * ============================================
 *  Popup Utility
 *  --------------------------------------------
 *  Menampilkan popup notifikasi sederhana
 *  dengan berbagai tipe: success, error,
 *  warning, dan info.
 * ============================================
 */

/**
 * Menampilkan popup dengan judul, pesan, dan tipe tertentu.
 * @param {string} title - Judul popup.
 * @param {string} message - Pesan utama popup.
 * @param {"success" | "error" | "warning" | "info"} [type="info"] - Jenis popup.
 */
export const showPopup = (title, message, type = "info") => {
  const overlay = document.getElementById("popupOverlay");
  const icon = document.getElementById("popupIcon");
  const titleEl = document.getElementById("popupTitle");
  const msgEl = document.getElementById("popupMessage");

  if (!overlay || !icon || !titleEl || !msgEl) {
    console.warn("Popup elements not found in DOM.");
    return;
  }

  // Daftar ikon berdasarkan tipe popup
  const icons = {
    success: "✔️",
    error: "❌",
    warning: "⚠️",
    info: "ℹ️",
  };

  // Atur tampilan popup
  icon.textContent = icons[type] || icons.info;
  icon.className = `popup-icon ${type}`;
  titleEl.textContent = title;
  msgEl.textContent = message;

  // Tampilkan overlay
  overlay.style.display = "flex";
};

/**
 * Menutup popup notifikasi.
 */
const closePopup = () => {
  const overlay = document.getElementById("popupOverlay");
  if (overlay) overlay.style.display = "none";
};

/**
 * Event listener untuk menutup popup saat:
 * - Klik di luar konten popup
 * - Klik tombol close
 */
document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("popupOverlay");

  if (overlay) {
    overlay.addEventListener("click", (e) => {
      const isOutside = e.target.id === "popupOverlay";
      const isCloseButton = e.target.id === "popupCloseButton";
      if (isOutside || isCloseButton) closePopup();
    });
  }
});
