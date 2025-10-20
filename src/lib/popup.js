export const showPopup = (title, message, type = "info") => {
  const overlay = document.getElementById("popupOverlay");
  const icon = document.getElementById("popupIcon");
  const titleEl = document.getElementById("popupTitle");
  const msgEl = document.getElementById("popupMessage");

  const icons = {
    success: "✔️",
    error: "❌",
    warning: "⚠️",
    info: "ℹ️",
  };

  icon.textContent = icons[type] || "ℹ️";
  icon.className = "popup-icon " + type;
  titleEl.textContent = title;
  msgEl.textContent = message;

  overlay.style.display = "flex";
};

const closePopup = () => {
  document.getElementById("popupOverlay").style.display = "none";
};

document.getElementById("popupOverlay").addEventListener("click", (e) => {
  if (e.target.id === "popupOverlay" || e.target.id === "popupCloseButton")
    closePopup();
});
