import { showPopup } from "../lib/popup.js";
import "./components/navbar.js";

/**
 * Menangani pengiriman formulir kontak, memvalidasi input pengguna,
 * menampilkan pesan error jika tidak valid, dan popup konfirmasi jika sukses.
 *
 * @param {Event} e - Event submit dari elemen form.
 * @returns {void}
 */
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();

  // --- Ambil semua input form ---
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");

  // --- Ambil elemen pesan error ---
  const errors = {
    name: document.getElementById("error-name"),
    email: document.getElementById("error-email"),
    phone: document.getElementById("error-phone"),
    subject: document.getElementById("error-subject"),
    message: document.getElementById("error-message"),
  };

  let valid = true;

  // --- Reset semua pesan error sebelum validasi ---
  Object.values(errors).forEach((el) => {
    el.textContent = "";
    el.classList.add("hidden");
  });

  // --- Validasi Nama ---
  if (name.value.trim() === "") {
    errors.name.textContent = "Nama tidak boleh kosong.";
    errors.name.classList.remove("hidden");
    valid = false;
  }

  // --- Validasi Email ---
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === "") {
    errors.email.textContent = "Email tidak boleh kosong.";
    errors.email.classList.remove("hidden");
    valid = false;
  } else if (!emailRegex.test(email.value.trim())) {
    errors.email.textContent = "Format email tidak valid.";
    errors.email.classList.remove("hidden");
    valid = false;
  }

  // --- Validasi Nomor Telepon ---
  const phoneRegex = /^\+?\d{8,15}$/;
  if (phone.value.trim() === "") {
    errors.phone.textContent = "Nomor telepon wajib diisi.";
    errors.phone.classList.remove("hidden");
    valid = false;
  } else if (!phoneRegex.test(phone.value.trim())) {
    errors.phone.textContent = "Nomor telepon tidak valid.";
    errors.phone.classList.remove("hidden");
    valid = false;
  }

  // --- Validasi Subjek ---
  if (subject.value.trim() === "") {
    errors.subject.textContent = "Subjek tidak boleh kosong.";
    errors.subject.classList.remove("hidden");
    valid = false;
  }

  // --- Validasi Pesan ---
  if (message.value.trim() === "") {
    errors.message.textContent = "Pesan tidak boleh kosong.";
    errors.message.classList.remove("hidden");
    valid = false;
  }

  // --- Jika semua input valid ---
  if (valid) {
    showPopup("Sukses!", "Pesan berhasil dikirim!", "info");
    e.target.reset();
  }
});
