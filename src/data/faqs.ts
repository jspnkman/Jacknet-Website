export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "umum" | "pendaftaran" | "teknis";
}

export const faqsData: FAQItem[] = [
  {
    id: "faq-1",
    question: "Bagaimana cara berlangganan JackNet?",
    answer: "Anda dapat memilih paket di halaman Paket, kemudian klik 'Daftar Sekarang' dan ikuti formulir pendaftaran online. Tim kami akan menghubungi Anda untuk verifikasi lokasi.",
    category: "pendaftaran"
  },
  {
    id: "faq-2",
    question: "Apakah JackNet menggunakan kuota (FUP)?",
    answer: "Tidak. Seluruh paket JackNet bersifat True Unlimited tanpa batasan kuota maupun penurunan kecepatan (FUP).",
    category: "umum"
  },
  {
    id: "faq-3",
    question: "Berapa biaya pemasangan awal?",
    answer: "Saat ini seluruh pendaftaran baru mendapatkan promo Gratis Biaya Instalasi dan Gratis Sewa Modem/ONT.",
    category: "pendaftaran"
  },
  {
    id: "faq-4",
    question: "Bagaimana jika internet mengalami gangguan?",
    answer: "Anda dapat mengisi formulir di halaman 'Lapor Gangguan' atau langsung menghubungi Customer Support kami via WhatsApp 24/7.",
    category: "teknis"
  }
];
