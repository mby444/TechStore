export const formatRupiah = (angka) => {
  const numberString = angka.toString().replace(/[^,\d]/g, "");
  const split = numberString.split(",");
  let sisa = split[0].length % 3;
  let rupiah = split[0].substr(0, sisa);
  const ribuan = split[0].substr(sisa).match(/\d{3}/g);

  if (ribuan) {
    const separator = sisa ? "." : "";
    rupiah += separator + ribuan.join(".");
  }

  rupiah = split[1] !== undefined ? rupiah + "," + split[1] : rupiah;
  return "Rp " + rupiah;
};

export const createProductCardHTML = (product) => {
  return `<div 
      data-slot="card"
      class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border group cursor-pointer hover:shadow-lg transition-shadow">
      <div data-slot="card-content" class="[&:last-child]:pb-6 p-0">
        <div
          class="relative overflow-hidden aspect-square rounded-t-xl">
          <img
            src="${product.image}"
            alt="${product.name}"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-t-xl" />
          <div
            class="${
              product.discount ? "" : "hidden"
            } absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm">
            -${Math.round(product.discount * 100)}%
          </div>
        </div>
        <div class="p-4">
          <p class="text-sm text-gray-500 mb-1">${product.category}</p>
          <h3 class="mb-2 line-clamp-2 hover:text-blue-600">
            ${product.name}
          </h3>
          <div class="flex items-center gap-1 mb-3">
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
            ><span class="text-sm">${product.rating.average}</span
            ><span class="text-sm text-gray-500">(${
              product.rating.count
            })</span>
          </div>
          <div class="flex items-end gap-2 mb-3">
            <span class="text-blue-600">${formatRupiah(
              product.price * (1 - product.discount)
            )}</span
            ><span class="${
              product.discount ? "" : "hidden"
            } text-sm text-gray-400 line-through"
              >${formatRupiah(product.price)}</span
            >
          </div>
          <button
            data-slot="button"
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3 w-full">
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
              class="lucide lucide-shopping-cart w-4 h-4 mr-2">
              <circle cx="8" cy="21" r="1"></circle>
              <circle cx="19" cy="21" r="1"></circle>
              <path
                d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg
            >Beli Sekarang
          </button>
        </div>
      </div>
    </div>`;
};
