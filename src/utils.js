/**
 * ============================================
 * UTILITAS: formatRupiah
 * --------------------------------------------
 * Mengonversi angka menjadi format mata uang Rupiah.
 * Contoh:
 *   formatRupiah(1250000) -> "Rp 1.250.000"
 *   formatRupiah(99999.5) -> "Rp 99.999,5"
 * ============================================
 */
export const formatRupiah = (angka) => {
  // Pastikan input berupa string angka (hapus karakter non-numerik kecuali koma)
  const numberString = angka.toString().replace(/[^,\d]/g, "");

  // Pisahkan nilai desimal (jika ada)
  const split = numberString.split(",");
  const sisa = split[0].length % 3;

  // Ambil bagian awal sebelum ribuan
  let rupiah = split[0].substr(0, sisa);
  const ribuan = split[0].substr(sisa).match(/\d{3}/g);

  // Tambahkan titik pemisah ribuan
  if (ribuan) {
    const separator = sisa ? "." : "";
    rupiah += separator + ribuan.join(".");
  }

  // Tambahkan desimal jika ada
  rupiah = split[1] !== undefined ? rupiah + "," + split[1] : rupiah;

  return "Rp " + rupiah;
};

/**
 * ============================================
 * TEMPLATE: createProductCardHTML
 * --------------------------------------------
 * Menghasilkan HTML card produk untuk halaman daftar produk.
 * Termasuk:
 * - Gambar produk
 * - Nama, kategori, rating
 * - Harga asli, diskon, harga final
 * - Tombol "Beli Sekarang"
 * ============================================
 */

export const createProductCardHTML = (product) => {
  return `
    <div class="prod-card">
      <div class="prod-card-content">
        <a href="/produk/detail/?id=${product.id}" class="prod-image-wrapper">
          <img src="${product.image}" alt="${
    product.name
  }" class="prod-image" />
          <div class="prod-discount ${product.discount ? "" : "prod-hidden"}">
            -${Math.round(product.discount * 100)}%
          </div>
        </a>
        <div class="prod-info">
          <p class="prod-category">${product.category}</p>
          <a href="/produk/detail/?id=${product.id}" class="prod-name">
            ${product.name}
          </a>
          <div class="prod-rating">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="prod-star">
              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
            </svg>
            <span class="prod-rating-value">${product.rating.average}</span>
            <span class="prod-rating-count">(${product.rating.count})</span>
          </div>
          <div class="prod-price">
            <span class="prod-price-current">${formatRupiah(
              product.price * (1 - product.discount)
            )}</span>
            <span class="prod-price-original ${
              product.discount ? "" : "prod-hidden"
            }">${formatRupiah(product.price)}</span>
          </div>
          <a href="/produk/detail/?id=${product.id}" class="prod-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="prod-btn-icon">
              <circle cx="8" cy="21" r="1"></circle>
              <circle cx="19" cy="21" r="1"></circle>
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
            </svg>
            Beli Sekarang
          </a>
        </div>
      </div>
    </div>
  `;
};

/**
 * ============================================
 * TEMPLATE: createProductContentHTML
 * --------------------------------------------
 * Menghasilkan HTML detail konten produk untuk halaman produk tunggal.
 * Termasuk:
 * - Gambar besar produk
 * - Harga dan diskon
 * - Jumlah dan subtotal (dapat diperbarui via JS)
 * - Tombol aksi (keranjang, wishlist, share)
 * - Informasi pengiriman dan garansi
 * ============================================
 */
export const createProductContentHTML = (product) => {
  return `<div
      class="grid lg:grid-cols-2 gap-8">
      <div>
        <div
          class="aspect-square rounded-lg overflow-hidden bg-gray-100 mb-4">
          <img
            src="${product.image}"
            alt="${product.name}"
            class="product-image w-full h-full object-cover" />
        </div>
      </div>
      <div>
        <div class="mb-2">
          <span class="product-category text-sm text-gray-500"
            >${product.category}</span
          >
        </div>
        <h1 class="product-name mb-4">${product.name}</h1>
        <div class="flex items-center gap-4 mb-4">
          <div class="product-star-icon-container flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-star w-5 h-5 fill-yellow-400 text-yellow-400">
              <path
                d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-star w-5 h-5 fill-yellow-400 text-yellow-400">
              <path
                d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-star w-5 h-5 fill-yellow-400 text-yellow-400">
              <path
                d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-star w-5 h-5 fill-yellow-400 text-yellow-400">
              <path
                d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-star w-5 h-5 text-gray-300">
              <path
                d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
            </svg>
          </div>
          <span class="product-average-rating">${product.rating.average}</span
          ><span class="text-gray-500"
            >(<span class="product-rating-count">${
              product.rating.count
            }</span> ulasan)</span
          >
        </div>
        <div
          data-orientation="horizontal"
          role="none"
          data-slot="separator-root"
          class="bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-4"></div>
        <div class="mb-6">
          <div class="flex items-baseline gap-3 mb-2">
            <span class="product-price text-blue-600">${formatRupiah(
              product.price * (1 - product.discount)
            )}</span
            ><span class="${
              product.discount === 0 ? "hidden" : ""
            } product-original-price text-gray-400 line-through"
              >${formatRupiah(product.price)}</span
            ><span
              class="${
                product.discount === 0 ? "hidden" : ""
              } product-discount bg-red-500 text-white px-2 py-1 rounded text-sm"
              >-${Math.round(product.discount * 100)}%</span
            >
          </div>
          <p class="text-sm text-gray-600">Stok: ${product.stock} unit</p>
        </div>
        <p class="text-gray-700 mb-6">
          ${product.description}
        </p>
        <div class="mb-6">
          <label class="block mb-2">Jumlah</label>
          <div class="flex items-center gap-3">
            <div class="flex items-center border rounded-lg">
              <button
                data-slot="button"
                class="qty-minus-button inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-8 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-minus w-4 h-4">
                  <path d="M5 12h14"></path>
                </svg></button
              ><span class="product-qty px-4">1</span
              ><button
                data-slot="button"
                class="qty-plus-button inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-8 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-plus w-4 h-4">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
              </button>
            </div>
            <span class="text-sm text-gray-600"
              >Subtotal: <span class="product-subtotal">${formatRupiah(
                product.price * (1 - product.discount)
              )}</span></span
            >
          </div>
        </div>
        <div class="flex flex-wrap lg:flex-nowrap gap-4 mb-6">
          <button
            data-slot="button"
            class="product-buy-button inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-10 rounded-md px-6 has-[&gt;svg]:px-4 flex-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-shopping-cart w-5 h-5 mr-2">
              <circle cx="8" cy="21" r="1"></circle>
              <circle cx="19" cy="21" r="1"></circle>
              <path
                d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg
            >Tambah ke Keranjang</button>
            <div class="flex gap-4">
              <button
              data-slot="button"
              class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md px-6 has-[&gt;svg]:px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-heart w-5 h-5">
                <path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              </svg></button>
              <button
              data-slot="button"
              class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md px-6 has-[&gt;svg]:px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-share2 lucide-share-2 w-5 h-5">
                <circle cx="18" cy="5" r="3"></circle>
                <circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="19" r="3"></circle>
                <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
              </svg>
            </button>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
          <div class="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-truck w-5 h-5 text-blue-600">
              <path
                d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
              <path d="M15 18H9"></path>
              <path
                d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
              <circle cx="17" cy="18" r="2"></circle>
              <circle cx="7" cy="18" r="2"></circle>
            </svg>
            <div>
              <p class="text-sm">Gratis Ongkir</p>
              <p class="text-xs text-gray-600">Min. pembelian 1jt</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-shield w-5 h-5 text-blue-600">
              <path
                d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
            </svg>
            <div>
              <p class="text-sm">Garansi Resmi</p>
              <p class="text-xs text-gray-600">1 tahun</p>
            </div>
          </div>
        </div>
      </div>
    </div>`;
};

/**
 * ============================================
 * TEMPLATE: createDetailTabsHTML
 * --------------------------------------------
 * Menghasilkan HTML untuk tab di bawah detail produk.
 * Berisi:
 * - Spesifikasi produk
 * - Deskripsi produk
 * ============================================
 */
export const createDetailTabsHTML = (product) => {
  // Tab pertama: spesifikasi
  const specElements = product.specifications
    .map((spec) => {
      return `<div
        class="flex py-2 border-b last:border-b-0">
        <span class="text-gray-600">${spec}</span>
      </div>`;
    })
    .join("");

  const tab1 = `<div 
      class="bg-white border rounded-lg p-6">
      <h3 class="mb-4">Spesifikasi Produk</h3>
      <div class="space-y-3">${specElements}</div>
    </div>`;

  // Tab kedua: deskripsi
  const tab2 = `<div
      class="bg-white border rounded-lg p-6">
      <h3 class="mb-4">Deskripsi Produk</h3>
      <p class="text-gray-700 leading-relaxed">${product.description}</p>
    </div>`;

  // Tab ketiga: ulasan
  const reviewElements = product.rating.details
    .map((review, i) => {
      return `<div 
        class="border-b pb-6 last:border-b-0">
        <div class="flex items-start gap-4">
          <div
            class="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            U${i + 1}
          </div>
          <div class="flex-1">
            <div class="flex items-center gap-2 mb-2">
              <span>${review.username}</span>
              <div class="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-star w-4 h-4 fill-yellow-400 text-yellow-400">
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-star w-4 h-4 fill-yellow-400 text-yellow-400">
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-star w-4 h-4 fill-yellow-400 text-yellow-400">
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-star w-4 h-4 fill-yellow-400 text-yellow-400">
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-star w-4 h-4 fill-yellow-400 text-yellow-400">
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                </svg>
              </div>
            </div>
            <p class="text-gray-700 text-sm">
              ${review.message}
            </p>
            <p class="text-xs text-gray-500 mt-2">
              ${Math.floor(
                (Date.now() - new Date(review.date)) / 86400000
              )} hari yang lalu
            </p>
          </div>
        </div>
      </div>`;
    })
    .join("");

  const tab3 = `<div
      class="bg-white border rounded-lg p-6">
      <h3 class="mb-6">Ulasan Pelanggan</h3>
      <div class="space-y-6">${reviewElements}</div>
    </div>`;

  return [tab1, tab2, tab3];
};
