export interface PackageItem {
  id: string;
  name: string;
  slug: string;
  downloadSpeed: string;
  price: number;
  formattedPrice: string;
  popular?: boolean;
  description: string;
  features: string[];
  segment: string;
}

export const packagesData: PackageItem[] = [
  {
    id: "paket-hemat",
    name: "Paket Hemat",
    slug: "paket-hemat",
    downloadSpeed: "20 Mbps",
    price: 149000,
    formattedPrice: "Rp149.000",
    description: "Koneksi terjangkau dan stabil untuk kebutuhan dasar harian Anda.",
    features: [
      "Kecepatan up to 20Mbps",
      "Unlimited Kuota",
      "Modem Wifi Gratis",
      "Instalasi Gratis",
      "Support 24 Jam",
    ],
    segment: "Cocok untuk penggunaan ringan",
  },
  {
    id: "paket-mantap",
    name: "Paket Mantap",
    slug: "paket-mantap",
    downloadSpeed: "30 Mbps",
    price: 199000,
    formattedPrice: "Rp199.000",
    popular: true,
    description: "Untuk kebutuhan yang lebih nyaman dan fleksibel bagi seluruh keluarga.",
    features: [
      "Kecepatan up to 30Mbps",
      "Unlimited Kuota",
      "Modem Wifi Gratis",
      "Instalasi Gratis",
      "Support 24 Jam",
    ],
    segment: "Cocok untuk keperluan internet keluarga",
  },
  {
    id: "paket-puas",
    name: "Paket Puas",
    slug: "paket-puas",
    downloadSpeed: "50 Mbps",
    price: 249000,
    formattedPrice: "Rp249.000",
    description: "Performa maksimal tanpa kompromi untuk aktivitas berat bersamaan.",
    features: [
      "Kecepatan up to 50Mbps",
      "Unlimited Kuota",
      "Modem Wifi 5Ghz (Dual Band) Gratis",
      "Instalasi Gratis",
      "Support Prioritas 24/7",
      "Prioritas Traffic Gaming",
    ],
    segment: "Cocok untuk kebutuhan gaming",
  },
];