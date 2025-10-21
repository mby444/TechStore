// Data produk
export const products = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1706300896423-7d08346e8dbb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=435",
    name: "Samsung Galaxy S24 Ultra",
    category: "Smartphone",
    rating: {
      average: 4.8,
      count: 256,
      details: [
        {
          username: "techlover01",
          starCount: 5,
          message:
            "Kamera luar biasa, performa kencang, dan baterai tahan lama!",
          date: "2025-10-02",
        },
        {
          username: "gadgetguru",
          starCount: 5,
          message: "Layar sangat jernih dan stylus sangat responsif.",
          date: "2025-10-06",
        },
        {
          username: "bima_user",
          starCount: 4,
          message: "Harga cukup tinggi, tapi kualitasnya sepadan.",
          date: "2025-10-10",
        },
      ],
    },
    discount: 0.14,
    price: 21999000,
    stock: 15,
    description:
      "Smartphone flagship dengan kamera 200MP, layar Dynamic AMOLED 2X, dan performa terbaik di kelasnya.",
    specifications: [
      "Processor: Snapdragon 8 Gen 3",
      "RAM: 12GB",
      "Storage: 256GB",
      "Display: 6.8 inch Dynamic AMOLED 2X",
      "Camera: 200MP + 50MP + 12MP + 10MP",
      "Battery: 5000mAh dengan fast charging 45W",
    ],
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1511385348-a52b4a160dc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlcnxlbnwxfHx8fDE3NjA0OTI2Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    name: "MacBook Pro 14 M3 Pro",
    category: "Laptop",
    rating: {
      average: 4.9,
      count: 189,
      details: [
        {
          username: "designerlife",
          starCount: 5,
          message:
            "Performa luar biasa, render cepat, dan build quality premium.",
          date: "2025-10-03",
        },
        {
          username: "codewizard",
          starCount: 5,
          message: "Sangat cocok untuk development dan editing video.",
          date: "2025-10-07",
        },
        {
          username: "appleenthusiast",
          starCount: 4,
          message: "Harga tinggi tapi performa tidak mengecewakan.",
          date: "2025-10-09",
        },
      ],
    },
    discount: 0.083,
    price: 35999000,
    stock: 8,
    description:
      "Laptop profesional dengan chip M3 Pro, layar Liquid Retina XDR, dan performa luar biasa untuk kreator konten.",
    specifications: [
      "Processor: Apple M3 Pro 11-core",
      "RAM: 18GB Unified Memory",
      "Storage: 512GB SSD",
      "Display: 14.2 inch Liquid Retina XDR",
      "Graphics: 14-core GPU",
      "Battery: Up to 18 hours",
    ],
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGhlYWRwaG9uZXN8ZW58MXx8fHwxNzYwNDQ2MDI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    name: "Sony WH-1000XM5",
    category: "Audio",
    rating: {
      average: 4.7,
      count: 342,
      details: [
        {
          username: "musiclover",
          starCount: 5,
          message: "Noise cancelling sangat efektif dan suara jernih.",
          date: "2025-10-05",
        },
        {
          username: "traveler01",
          starCount: 5,
          message: "Nyaman dipakai lama saat perjalanan jauh.",
          date: "2025-10-08",
        },
        {
          username: "audiophile",
          starCount: 4,
          message: "Bass sedikit berlebihan tapi masih bagus.",
          date: "2025-10-11",
        },
      ],
    },
    discount: 0.117,
    price: 5999000,
    stock: 25,
    description:
      "Headphone premium dengan noise cancellation terbaik di kelasnya dan kualitas audio superior.",
    specifications: [
      "Driver: 30mm",
      "Noise Cancellation: Industry-leading ANC",
      "Battery: Up to 30 hours",
      "Connectivity: Bluetooth 5.2, Multipoint",
      "Features: LDAC, DSEE Extreme",
      "Controls: Touch sensor",
    ],
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHdhdGNofGVufDF8fHx8MTc2MDUwNjg0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    name: "Apple Watch Series 9",
    category: "Wearable",
    rating: {
      average: 4.6,
      count: 198,
      details: [
        {
          username: "fittrack",
          starCount: 5,
          message: "Fitur kesehatan lengkap dan tampilan sangat cerah.",
          date: "2025-10-02",
        },
        {
          username: "applefan",
          starCount: 4,
          message: "Performa bagus tapi baterai cepat habis.",
          date: "2025-10-07",
        },
        {
          username: "runnerlife",
          starCount: 5,
          message: "GPS sangat akurat dan mudah dipakai saat olahraga.",
          date: "2025-10-09",
        },
      ],
    },
    discount: 0.125,
    price: 7999000,
    stock: 20,
    description:
      "Smartwatch dengan fitur kesehatan lengkap, layar always-on yang lebih terang, dan chip S9 yang powerful.",
    specifications: [
      "Processor: Apple S9 SiP",
      "Display: Always-On Retina LTPO OLED",
      "Health: ECG, Blood Oxygen, Temperature",
      "Battery: Up to 18 hours",
      "Connectivity: GPS, Cellular optional",
      "Resistance: Water resistant 50m",
    ],
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1672239069328-dd1535c0d78a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXQlMjBkZXZpY2V8ZW58MXx8fHwxNzYwNDI5MTc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    name: "iPad Pro 12.9 M2",
    category: "Tablet",
    rating: {
      average: 4.8,
      count: 167,
      details: [
        {
          username: "applefan_01",
          starCount: 5,
          message:
            "Layar sangat jernih dan performa M2 luar biasa cepat. Sangat cocok untuk desainer!",
          date: "2025-10-03",
        },
        {
          username: "creative_guru",
          starCount: 5,
          message:
            "Apple Pencil generasi kedua terasa lebih responsif. Worth it untuk produktivitas.",
          date: "2025-10-06",
        },
        {
          username: "techenthusiast",
          starCount: 4,
          message:
            "Harga tinggi tapi sebanding dengan performa. Multitasking sangat lancar.",
          date: "2025-10-10",
        },
      ],
    },
    discount: 0.11,
    price: 15999000,
    stock: 12,
    description:
      "Tablet premium dengan layar Liquid Retina XDR, chip M2, dan dukungan Apple Pencil generasi kedua.",
    specifications: [
      "Processor: Apple M2",
      "RAM: 8GB",
      "Storage: 256GB",
      "Display: 12.9 inch Liquid Retina XDR",
      "Camera: 12MP Wide + 10MP Ultra Wide",
      "Features: Face ID, Apple Pencil support",
    ],
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1579535984712-92fffbbaa266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NjA1MjU5Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    name: "Canon EOS R6 Mark II",
    category: "Kamera",
    rating: {
      average: 4.9,
      count: 94,
      details: [
        {
          username: "photomaster",
          starCount: 5,
          message:
            "Autofokus sangat cepat dan akurat, cocok untuk foto olahraga dan wildlife.",
          date: "2025-10-02",
        },
        {
          username: "cinematix",
          starCount: 5,
          message:
            "Video 4K 60fps sangat tajam. Warna khas Canon tetap menawan.",
          date: "2025-10-05",
        },
        {
          username: "dslr_lover",
          starCount: 4,
          message:
            "Performa luar biasa, tapi harga masih agak tinggi untuk pemula.",
          date: "2025-10-08",
        },
      ],
    },
    discount: 0.11,
    price: 39999000,
    stock: 5,
    description:
      "Kamera mirrorless full-frame dengan sensor 24MP, video 4K 60fps, dan autofokus yang sangat cepat.",
    specifications: [
      "Sensor: 24.2MP Full-Frame CMOS",
      "Processor: DIGIC X",
      "Video: 4K 60fps, Full HD 180fps",
      "ISO: 100-102400 (expandable)",
      "AF: Dual Pixel CMOS AF II",
      "Viewfinder: 3.69M-dot OLED EVF",
    ],
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1580234797602-22c37b2a6230?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjb25zb2xlfGVufDF8fHx8MTc2MDQ4MjQyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    name: "PlayStation 5 Digital Edition",
    category: "Gaming",
    rating: {
      average: 4.7,
      count: 412,
      details: [
        {
          username: "gamerpro",
          starCount: 5,
          message:
            "Performa luar biasa, loading game sangat cepat berkat SSD-nya!",
          date: "2025-10-01",
        },
        {
          username: "consoleking",
          starCount: 4,
          message:
            "Grafik 4K memukau, tapi storage 825GB cepat habis untuk game besar.",
          date: "2025-10-06",
        },
        {
          username: "nextgenlover",
          starCount: 5,
          message:
            "DualSense controller bikin pengalaman bermain jadi immersive banget.",
          date: "2025-10-11",
        },
      ],
    },
    discount: 0.11,
    price: 6499000,
    stock: 10,
    description:
      "Konsol gaming next-gen dengan performa 4K, SSD ultra-cepat, dan pengalaman gaming yang immersive.",
    specifications: [
      "CPU: AMD Zen 2, 8 cores",
      "GPU: 10.28 TFLOPs, AMD RDNA 2",
      "RAM: 16GB GDDR6",
      "Storage: 825GB SSD",
      "Resolution: Up to 4K 120Hz",
      "Features: Ray Tracing, 3D Audio",
    ],
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1511385348-a52b4a160dc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlcnxlbnwxfHx8fDE3NjA0OTI2Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    name: "Dell XPS 15 9530",
    category: "Laptop",
    rating: {
      average: 4.6,
      count: 156,
      details: [
        {
          username: "designerpro",
          starCount: 5,
          message:
            "Layar OLED sangat tajam dan warna akurat, ideal untuk desain grafis.",
          date: "2025-10-02",
        },
        {
          username: "coderlife",
          starCount: 5,
          message:
            "Performa Intel i7 dan RTX 4050 bikin ngoding dan rendering lancar.",
          date: "2025-10-07",
        },
        {
          username: "techgeek",
          starCount: 4,
          message:
            "Baterai agak cepat habis di mode performa tinggi, tapi build quality premium banget.",
          date: "2025-10-12",
        },
      ],
    },
    discount: 0.0,
    price: 28999000,
    stock: 7,
    description:
      "Laptop premium dengan layar OLED 3.5K, performa powerful untuk profesional dan kreator.",
    specifications: [
      "Processor: Intel Core i7-13700H",
      "RAM: 16GB DDR5",
      "Storage: 512GB NVMe SSD",
      "Display: 15.6 inch 3.5K OLED",
      "Graphics: NVIDIA RTX 4050 6GB",
      "Battery: 86Wh",
    ],
  },
];
