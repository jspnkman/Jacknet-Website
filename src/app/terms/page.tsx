"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  FileText,
  Users,
  MapPin,
  Wrench,
  Wifi,
  Globe,
  CreditCard,
  Calendar,
  RefreshCw,
  Headphones,
  Shield,
  BookOpen,
  AlertTriangle,
  Scale,
  Zap,
  Lock,
  Settings,
  Mail,
  ChevronRight,
  Clock,
  Link2,
} from "lucide-react";

const SECTIONS = [
  {
    num: "01",
    icon: FileText,
    title: "Definisi",
    body: (
      <dl className="space-y-3">
        {[
          ["JackNet", "Pihak yang menawarkan, menjual, dan memberikan layanan internet serta pelayanan pelanggan kepada pengguna melalui skema kemitraan dengan Lintas Jaringan Nusantara."],
          ["Lintas Jaringan Nusantara (LJN)", "Mitra penyedia jaringan yang mendukung penyediaan layanan internet JackNet."],
          ["Pelanggan", "Individu atau badan usaha yang mendaftar, membeli, atau menggunakan layanan JackNet."],
          ["Layanan", "Layanan akses internet dan layanan terkait yang ditawarkan oleh JackNet."],
          ["Paket", "Pilihan layanan internet dengan spesifikasi, kecepatan, harga, dan ketentuan tertentu."],
          ["Website", "Situs resmi JackNet beserta halaman dan fitur yang tersedia di dalamnya."],
        ].map(([term, def]) => (
          <div key={term} className="flex gap-3">
            <ChevronRight className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 shrink-0" />
            <div>
              <dt className="font-semibold text-[hsl(var(--foreground))]">{term}</dt>
              <dd className="text-[hsl(var(--muted-foreground))]">{def}</dd>
            </div>
          </div>
        ))}
      </dl>
    ),
  },
  {
    num: "02",
    icon: Users,
    title: "Kedudukan JackNet sebagai Mitra LJN",
    body: (
      <>
        <p>JackNet merupakan <strong>mitra Lintas Jaringan Nusantara</strong> dalam penyediaan layanan internet. JackNet bertanggung jawab atas pelayanan pelanggan, proses pendaftaran, komunikasi, administrasi, serta koordinasi kebutuhan pelanggan.</p>
        <p>Penyediaan konektivitas, infrastruktur jaringan, sistem upstream, maupun aspek teknis tertentu dapat bergantung pada Lintas Jaringan Nusantara. Oleh karena itu, beberapa gangguan atau kondisi teknis yang berada di luar kendali operasional langsung JackNet dapat memerlukan koordinasi dengan pihak penyedia jaringan.</p>
        <p>JackNet akan berupaya memberikan informasi dan penanganan kepada pelanggan secara wajar dan secepat mungkin.</p>
      </>
    ),
  },
  {
    num: "03",
    icon: Users,
    title: "Pendaftaran Layanan",
    body: (
      <p>Pelanggan dapat diminta memberikan informasi yang diperlukan untuk berlangganan, termasuk nama lengkap, nomor telepon, alamat pemasangan, alamat email, dan informasi identitas tertentu. Pelanggan bertanggung jawab memastikan seluruh informasi yang diberikan adalah <strong>benar, lengkap, dan dapat dipertanggungjawabkan</strong>.</p>
    ),
  },
  {
    num: "04",
    icon: MapPin,
    title: "Survey dan Kelayakan Lokasi",
    body: (
      <p>Pendaftaran tidak menjamin layanan dapat dipasang di lokasi pelanggan. Pemasangan bergantung pada ketersediaan jaringan, jangkauan layanan, kondisi infrastruktur, kelayakan teknis, ketersediaan port atau perangkat, izin akses, dan faktor teknis lainnya. JackNet dapat melakukan survey lokasi sebelum pemasangan. Apabila lokasi tidak memenuhi persyaratan, pemasangan dapat ditolak atau ditunda.</p>
    ),
  },
  {
    num: "05",
    icon: Wrench,
    title: "Instalasi Layanan",
    body: (
      <p>Instalasi dilakukan berdasarkan jadwal yang disepakati. Pelanggan wajib memberikan akses yang aman dan wajar kepada teknisi. Instalasi tambahan di luar standar dapat dikenakan biaya tambahan dengan persetujuan pelanggan. Pelanggan tidak diperkenankan mengubah, memindahkan, atau memodifikasi perangkat instalasi tanpa persetujuan JackNet.</p>
    ),
  },
  {
    num: "06",
    icon: Wifi,
    title: "Perangkat dan Infrastruktur",
    body: (
      <p>Perangkat dalam layanan dapat berupa milik pelanggan, disediakan JackNet, atau oleh pihak penyedia jaringan. Status kepemilikan mengikuti informasi yang diberikan saat pemasangan. Pelanggan bertanggung jawab menjaga perangkat dari kerusakan yang disebabkan kelalaian atau penggunaan tidak semestinya.</p>
    ),
  },
  {
    num: "07",
    icon: Globe,
    title: "Penggunaan Layanan",
    body: (
      <p>Pelanggan wajib menggunakan layanan secara <strong>wajar, sah, dan sesuai peraturan perundang-undangan</strong>. Layanan tidak boleh digunakan untuk tindakan ilegal, serangan jaringan, DDoS, malware, phishing, penipuan, akses tanpa izin, konten ilegal, atau aktivitas yang mengganggu keamanan jaringan. Pelanggan bertanggung jawab atas seluruh aktivitas pada koneksi atau akun miliknya.</p>
    ),
  },
  {
    num: "08",
    icon: Zap,
    title: "Kecepatan dan Kualitas Layanan",
    body: (
      <>
        <p>Kecepatan yang tercantum pada paket merupakan <strong>kecepatan yang ditawarkan berdasarkan spesifikasi paket</strong>. Kinerja internet dalam praktik dapat dipengaruhi kondisi jaringan, kapasitas, infrastruktur lokal, server tujuan, kondisi perangkat pelanggan, Wi-Fi, jumlah perangkat terhubung, dan faktor teknis lainnya.</p>
        <p>Hasil pengukuran kecepatan pada perangkat pelanggan dapat berbeda dari kecepatan paket yang ditawarkan.</p>
      </>
    ),
  },
  {
    num: "09",
    icon: AlertTriangle,
    title: "Gangguan Layanan",
    body: (
      <p>JackNet berupaya menjaga layanan tetap tersedia. Gangguan dapat terjadi karena gangguan jaringan, pemeliharaan, kerusakan perangkat, gangguan listrik, infrastruktur pihak ketiga, bencana alam, serangan siber, atau keadaan lain di luar kendali. Pelanggan dapat menghubungi tim bantuan melalui kanal layanan yang tersedia.</p>
    ),
  },
  {
    num: "10",
    icon: Settings,
    title: "Pemeliharaan dan Perawatan Jaringan",
    body: (
      <p>JackNet dan/atau mitra penyedia jaringan dapat melakukan pemeliharaan berkala maupun darurat. Pemeliharaan dapat menyebabkan gangguan atau penghentian layanan sementara. JackNet akan memberikan informasi jika memungkinkan. Pemeliharaan darurat dapat dilakukan tanpa pemberitahuan sebelumnya.</p>
    ),
  },
  {
    num: "11",
    icon: CreditCard,
    title: "Pembayaran",
    body: (
      <p>Pelanggan wajib membayar biaya layanan sesuai harga dan periode yang telah ditentukan. Informasi mengenai harga paket, biaya pemasangan, biaya tambahan, periode tagihan, jatuh tempo, dan metode pembayaran akan diinformasikan melalui kanal resmi JackNet. Pelanggan bertanggung jawab memastikan pembayaran dilakukan melalui metode resmi.</p>
    ),
  },
  {
    num: "12",
    icon: Calendar,
    title: "Jatuh Tempo dan Keterlambatan Pembayaran",
    body: (
      <p>Pelanggan wajib melakukan pembayaran sebelum atau pada tanggal jatuh tempo. Apabila pembayaran tidak diterima hingga melewati jatuh tempo, layanan dapat diberikan pemberitahuan, mengalami pembatasan sementara, isolasi atau penghentian sementara, dan/atau mengikuti prosedur lain sesuai ketentuan paket. Pengaktifan kembali setelah pembayaran dapat memerlukan waktu sesuai proses sistem.</p>
    ),
  },
  {
    num: "13",
    icon: RefreshCw,
    title: "Perubahan Paket",
    body: (
      <p>Pelanggan dapat mengajukan perubahan paket sesuai pilihan layanan yang tersedia. Perubahan bergantung pada ketersediaan, kelayakan teknis, infrastruktur, periode tagihan, biaya perubahan, dan ketentuan lain yang berlaku. Perubahan akan berlaku setelah proses administrasi dan teknis selesai.</p>
    ),
  },
  {
    num: "14",
    icon: AlertTriangle,
    title: "Berhenti Berlangganan",
    body: (
      <p>Pelanggan dapat mengajukan penghentian layanan melalui kanal resmi JackNet. Pelanggan tetap bertanggung jawab atas kewajiban pembayaran yang telah jatuh tempo. Apabila terdapat perangkat milik JackNet yang harus dikembalikan, pelanggan wajib memberikan akses untuk pengambilan perangkat sesuai ketentuan yang berlaku.</p>
    ),
  },
  {
    num: "15",
    icon: CreditCard,
    title: "Refund dan Pembayaran di Muka",
    body: (
      <p>Ketentuan pengembalian dana bergantung pada jenis transaksi, kondisi layanan, dan alasan pengajuan. Pengembalian dana tidak secara otomatis diberikan untuk setiap permintaan pembatalan. Biaya yang telah digunakan untuk layanan, instalasi, perangkat, atau pekerjaan yang telah dilakukan dapat diperlakukan sesuai ketentuan transaksi yang berlaku.</p>
    ),
  },
  {
    num: "16",
    icon: Zap,
    title: "Promosi dan Penawaran",
    body: (
      <p>JackNet dapat menawarkan promosi, diskon, bonus, atau program khusus dari waktu ke waktu. Setiap promosi memiliki syarat dan periode berlaku tersendiri. JackNet berhak mengakhiri atau mengubah program promosi sesuai ketentuan yang berlaku. Informasi promosi yang resmi hanya berasal dari kanal komunikasi JackNet yang sah.</p>
    ),
  },
  {
    num: "17",
    icon: Headphones,
    title: "Dukungan Pelanggan",
    body: (
      <p>JackNet menyediakan dukungan pelanggan melalui WhatsApp, telepon, email, website, dan/atau kanal resmi lainnya. Waktu respons dapat berbeda berdasarkan jenis permintaan, tingkat gangguan, jam layanan, kondisi teknis, jumlah laporan, dan kebutuhan koordinasi. JackNet berupaya memberikan respons dan penanganan secepat mungkin.</p>
    ),
  },
  {
    num: "18",
    icon: Wrench,
    title: "Teknisi dan Akses ke Lokasi",
    body: (
      <p>Teknisi JackNet dapat mengunjungi lokasi pelanggan untuk instalasi, pemeriksaan gangguan, pemeliharaan, perbaikan, atau pekerjaan teknis lainnya. Pelanggan wajib memberikan akses yang diperlukan dan memastikan kondisi lokasi aman. JackNet berhak menunda pekerjaan jika kondisi lokasi tidak aman atau tidak memungkinkan.</p>
    ),
  },
  {
    num: "19",
    icon: Lock,
    title: "Data Pribadi",
    body: (
      <>
        <p>JackNet memproses data pribadi sesuai kebijakan privasi yang berlaku untuk kebutuhan pendaftaran, verifikasi, penyediaan layanan, instalasi, pembayaran, dukungan pelanggan, penanganan gangguan, keamanan sistem, dan pemenuhan kewajiban hukum. Pemrosesan data pribadi dilakukan sesuai dengan <strong>Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi</strong>.</p>
        <p>Untuk informasi lebih lengkap, silakan membaca <a href="/privacy-policy" className="text-[hsl(var(--primary))] hover:underline">Kebijakan Privasi JackNet</a>.</p>
      </>
    ),
  },
  {
    num: "20",
    icon: Globe,
    title: "Website dan Konten Digital",
    body: (
      <p>Konten yang tersedia di website JackNet, termasuk logo, nama merek, desain, teks, gambar, informasi paket, dan materi promosi, dapat merupakan milik JackNet atau digunakan berdasarkan hak dan izin yang sesuai. Penggunaan, penyalinan, distribusi, atau modifikasi konten tanpa izin dapat dilarang.</p>
    ),
  },
  {
    num: "21",
    icon: Globe,
    title: "Ketersediaan Informasi Website",
    body: (
      <p>Informasi pada website mengenai harga, paket, promosi, ketersediaan layanan, coverage, jadwal pemasangan, dan informasi teknis dapat berubah sewaktu-waktu. Informasi yang bersifat final untuk transaksi pelanggan adalah informasi yang telah dikonfirmasi oleh JackNet pada saat proses pendaftaran atau transaksi.</p>
    ),
  },
  {
    num: "22",
    icon: Link2,
    title: "Tautan dan Layanan Pihak Ketiga",
    body: (
      <p>Website atau layanan JackNet dapat menyediakan tautan atau integrasi dengan pihak ketiga. Pihak ketiga memiliki syarat dan ketentuan serta kebijakan privasi masing-masing. JackNet tidak bertanggung jawab atas kebijakan atau operasional pihak ketiga di luar kendali JackNet.</p>
    ),
  },
  {
    num: "23",
    icon: Shield,
    title: "Keadaan Kahar (Force Majeure)",
    body: (
      <>
        <p>JackNet tidak dianggap melanggar kewajibannya apabila kegagalan atau keterlambatan layanan disebabkan oleh keadaan di luar kendali wajar, termasuk bencana alam, gempa bumi, banjir, kebakaran, petir, gangguan listrik, gangguan jaringan, infrastruktur pihak ketiga, perang, kerusuhan, kebijakan pemerintah, serangan siber, atau gangguan sistem besar.</p>
        <p>JackNet akan berupaya melakukan tindakan yang wajar untuk memulihkan layanan setelah kondisi memungkinkan.</p>
      </>
    ),
  },
  {
    num: "24",
    icon: AlertTriangle,
    title: "Penangguhan atau Penghentian Layanan",
    body: (
      <p>JackNet dapat menangguhkan atau menghentikan layanan apabila pelanggan tidak memenuhi kewajiban pembayaran, terjadi pelanggaran terhadap Syarat & Ketentuan, layanan digunakan untuk aktivitas ilegal, terjadi penyalahgunaan jaringan, terdapat risiko keamanan, atau permintaan berdasarkan hukum.</p>
    ),
  },
  {
    num: "25",
    icon: Shield,
    title: "Larangan Penyalahgunaan Layanan",
    body: (
      <p>Pelanggan dilarang menggunakan layanan JackNet untuk menyerang jaringan, melakukan DDoS, port scanning tanpa izin, brute-force, phishing, malware, botnet, spam, penipuan, eksploitasi sistem tanpa izin, distribusi konten ilegal, pelanggaran hak kekayaan intelektual, atau aktivitas lain yang bertentangan dengan hukum.</p>
    ),
  },
  {
    num: "26",
    icon: Users,
    title: "Tanggung Jawab Pelanggan",
    body: (
      <p>Pelanggan bertanggung jawab untuk memberikan informasi yang benar, menjaga keamanan akun dan perangkat, menggunakan layanan secara wajar, membayar tagihan tepat waktu, mematuhi peraturan perundang-undangan, memberikan akses kepada teknisi ketika diperlukan, segera melaporkan gangguan, dan menjaga kerahasiaan informasi akun.</p>
    ),
  },
  {
    num: "27",
    icon: Shield,
    title: "Tanggung Jawab JackNet",
    body: (
      <p>JackNet berkomitmen memberikan informasi layanan secara jelas, menyediakan layanan sesuai paket yang dipilih, memberikan dukungan pelanggan, menangani laporan gangguan secara wajar, menjaga keamanan informasi pelanggan, memberikan informasi mengenai perubahan layanan yang relevan, dan menjalankan layanan secara profesional dan bertanggung jawab.</p>
    ),
  },
  {
    num: "28",
    icon: Scale,
    title: "Batasan Tanggung Jawab",
    body: (
      <>
        <p>JackNet berupaya memberikan layanan dengan standar yang wajar. Namun, JackNet tidak bertanggung jawab atas gangguan yang disebabkan oleh gangguan jaringan pihak ketiga, Lintas Jaringan Nusantara, gangguan listrik, kerusakan perangkat pelanggan, kesalahan konfigurasi pelanggan, gangguan Wi-Fi internal, gangguan server tujuan, bencana alam, atau keadaan kahar.</p>
        <p>Ketentuan ini tidak dimaksudkan untuk menghilangkan atau mengurangi hak konsumen yang tidak dapat dikesampingkan berdasarkan peraturan perundang-undangan yang berlaku.</p>
      </>
    ),
  },
  {
    num: "29",
    icon: Headphones,
    title: "Penyelesaian Keluhan",
    body: (
      <p>JackNet mengutamakan penyelesaian keluhan secara langsung dan baik melalui layanan pelanggan. Pelanggan dapat menyampaikan keluhan melalui kanal resmi dengan memberikan informasi yang diperlukan. JackNet akan melakukan pemeriksaan dan memberikan tanggapan sesuai sifat dan tingkat permasalahan.</p>
    ),
  },
  {
    num: "30",
    icon: Scale,
    title: "Kepatuhan terhadap Peraturan",
    body: (
      <>
        <p>Penggunaan layanan JackNet harus mematuhi seluruh peraturan perundang-undangan yang berlaku di Indonesia. Syarat & Ketentuan ini disusun dengan memperhatikan:</p>
        <ul className="mt-2">
          <li><strong>Undang-Undang Nomor 8 Tahun 1999</strong> tentang Perlindungan Konsumen;</li>
          <li><strong>Undang-Undang Nomor 27 Tahun 2022</strong> tentang Pelindungan Data Pribadi;</li>
          <li><strong>Peraturan Pemerintah Nomor 71 Tahun 2019</strong> tentang Penyelenggaraan Sistem dan Transaksi Elektronik.</li>
        </ul>
      </>
    ),
  },
  {
    num: "31",
    icon: RefreshCw,
    title: "Perubahan Syarat & Ketentuan",
    body: (
      <p>JackNet dapat memperbarui Syarat & Ketentuan ini untuk menyesuaikan dengan perubahan layanan, sistem, teknologi, kerja sama mitra, kebijakan operasional, atau peraturan perundang-undangan. Tanggal pembaruan terakhir akan ditampilkan pada bagian atas halaman.</p>
    ),
  },
  {
    num: "32",
    icon: Shield,
    title: "Keberlakuan Ketentuan",
    body: (
      <p>Apabila salah satu ketentuan dinyatakan tidak berlaku atau tidak dapat diberlakukan berdasarkan hukum yang berlaku, ketentuan lainnya tetap berlaku sepanjang tidak bertentangan dengan hukum.</p>
    ),
  },
  {
    num: "33",
    icon: FileText,
    title: "Keseluruhan Ketentuan",
    body: (
      <p>Syarat & Ketentuan ini, bersama dengan formulir pendaftaran, detail paket, informasi harga, Kebijakan Privasi, ketentuan promosi, dan ketentuan khusus lainnya, merupakan bagian dari ketentuan penggunaan layanan JackNet.</p>
    ),
  },
  {
    num: "34",
    icon: Mail,
    title: "Hubungi Kami",
    body: (
      <>
        <p>Jika Anda memiliki pertanyaan mengenai Syarat & Ketentuan ini, layanan JackNet, atau keluhan layanan, silakan menghubungi kami melalui kanal resmi.</p>
        <div className="mt-4 rounded-xl border border-[hsl(var(--primary))]/20 bg-[hsl(var(--primary))]/5 p-4">
          <p className="font-semibold text-[hsl(var(--foreground))]">JackNet</p>
          <p className="text-sm text-[hsl(var(--muted-foreground))]">Mitra Lintas Jaringan Nusantara</p>
          <p className="mt-2 text-sm text-[hsl(var(--muted-foreground))]">
            WhatsApp: 0851-3625-8050
          </p>
        </div>
      </>
    ),
  },
  {
    num: "",
    icon: ChevronRight,
    title: "Persetujuan Pelanggan",
    body: (
      <p>
        Dengan melakukan pendaftaran, pembelian, atau menggunakan layanan JackNet, pelanggan menyatakan telah membaca, memahami, dan menyetujui seluruh ketentuan dalam Syarat & Ketentuan ini, serta bersedia mematuhi ketentuan penggunaan layanan.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[hsl(var(--background))] transition-colors duration-300">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-40 right-1/4 w-[500px] h-[500px] rounded-full bg-[hsl(var(--primary))]/10 blur-[130px]" />
        <div className="absolute top-1/4 -left-40 w-[400px] h-[400px] rounded-full bg-[hsl(var(--primary))]/5 blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-[hsl(var(--primary))]/8 blur-[120px]" />
      </div>

      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-3 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card))]/60 backdrop-blur-xl px-6 py-2 shadow-sm">
              <FileText className="w-4 h-4 text-[hsl(var(--primary))]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--primary))]">
                Syarat & Ketentuan
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-8 text-4xl sm:text-5xl font-bold tracking-tight text-[hsl(var(--foreground))] leading-[1.15]">
              Ketentuan yang{" "}
              <span className="text-[hsl(var(--primary))]">adil dan jelas.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 text-base text-[hsl(var(--muted-foreground))] leading-relaxed">
              Syarat & Ketentuan ini mengatur penggunaan website, pendaftaran,
              layanan internet, pembayaran, dukungan pelanggan, serta hubungan
              antara JackNet dan pelanggan.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-6 inline-flex items-center gap-2 text-xs text-[hsl(var(--muted-foreground))]">
              <Clock className="w-3.5 h-3.5" />
              Terakhir diperbarui: 15 September 2026
            </div>
          </Reveal>
        </div>
      </section>

      {/* Sections */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-10 pb-20">
        <div className="mx-auto max-w-3xl space-y-6">
          {SECTIONS.map((section, index) => (
            <Reveal key={section.title} delay={index * 30}>
              <div className="group relative overflow-hidden rounded-3xl border border-[hsl(var(--border))] bg-[hsl(var(--card))]/60 backdrop-blur-xl p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-500 hover:border-[hsl(var(--primary))]/30 hover:shadow-xl hover:shadow-[hsl(var(--primary))]/5">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-14 rounded-t-3xl bg-gradient-to-b from-white/30 to-transparent dark:from-white/[0.05] dark:to-transparent" />

                <div className="relative mb-5 flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] transition-colors duration-300 group-hover:bg-[hsl(var(--primary))] group-hover:text-white">
                    <section.icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    {section.num && (
                      <span className="text-xs font-semibold text-[hsl(var(--muted-foreground))]">
                        {section.num}
                      </span>
                    )}
                    <h2 className="text-lg font-semibold text-[hsl(var(--foreground))] leading-snug">
                      {section.title}
                    </h2>
                  </div>
                </div>

                <div className="relative space-y-3 text-sm leading-relaxed text-[hsl(var(--muted-foreground))] [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1.5 [&_strong]:font-semibold [&_strong]:text-[hsl(var(--foreground))]">
                  {section.body}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}