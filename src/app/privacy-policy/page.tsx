"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Shield, Lock, FileText, Clock, UserCheck, Database, Link2, Cookie, Users, Scale, Bell, Mail } from "lucide-react";

const SECTIONS = [
  {
    icon: FileText,
    num: "01",
    title: "Tentang JackNet",
    body: (
      <>
        <p>
          <strong>JackNet merupakan mitra Lintas Jaringan Nusantara</strong> yang
          menyediakan dan menawarkan layanan internet kepada pelanggan.
        </p>
        <p>
          Dalam menjalankan layanan, JackNet dapat bekerja sama dengan pihak
          penyedia jaringan, mitra teknologi, penyedia sistem, serta pihak lain
          yang diperlukan untuk mendukung proses pendaftaran, instalasi,
          administrasi, pembayaran, dukungan teknis, dan penyediaan layanan
          kepada pelanggan.
        </p>
      </>
    ),
  },
  {
    icon: Database,
    num: "02",
    title: "Informasi yang Kami Kumpulkan",
    body: (
      <>
        <h4>Informasi Identitas</h4>
        <ul>
          <li>Nama lengkap</li>
          <li>Nomor telepon</li>
          <li>Alamat email</li>
          <li>Alamat pemasangan</li>
          <li>Alamat penagihan, apabila berbeda</li>
          <li>Informasi lain yang diperlukan untuk proses pendaftaran layanan</li>
        </ul>
        <h4>Informasi Layanan</h4>
        <ul>
          <li>Paket internet yang digunakan</li>
          <li>Status layanan</li>
          <li>Informasi pemasangan</li>
          <li>Data administrasi pelanggan</li>
          <li>Riwayat komunikasi dengan tim JackNet</li>
          <li>Informasi terkait laporan gangguan atau permintaan bantuan</li>
        </ul>
        <h4>Informasi Pembayaran</h4>
        <ul>
          <li>Status pembayaran</li>
          <li>Nomor atau referensi transaksi</li>
          <li>Waktu transaksi</li>
          <li>Metode pembayaran</li>
        </ul>
        <p className="note">
          JackNet tidak bermaksud mengumpulkan informasi keuangan yang tidak
          diperlukan untuk tujuan layanan.
        </p>
      </>
    ),
  },
  {
    icon: Lock,
    num: "03",
    title: "Informasi yang Dikumpulkan Secara Otomatis",
    body: (
      <>
        <p>
          Ketika Anda mengakses website JackNet, beberapa informasi teknis dapat
          dikumpulkan secara otomatis oleh sistem, seperti:
        </p>
        <ul>
          <li>Alamat IP</li>
          <li>Jenis perangkat</li>
          <li>Jenis browser</li>
          <li>Sistem operasi</li>
          <li>Waktu akses</li>
          <li>Halaman yang dikunjungi</li>
          <li>Informasi teknis terkait koneksi</li>
        </ul>
        <p>
          Informasi tersebut dapat digunakan untuk menjaga keamanan,
          meningkatkan performa website, melakukan analisis penggunaan, serta
          membantu mendeteksi aktivitas yang tidak wajar.
        </p>
      </>
    ),
  },
  {
    icon: UserCheck,
    num: "04",
    title: "Bagaimana Kami Menggunakan Data Anda",
    body: (
      <>
        <p>Data pribadi yang dikumpulkan dapat digunakan untuk:</p>
        <ol>
          <li>Memproses pendaftaran layanan JackNet.</li>
          <li>Melakukan verifikasi dan validasi data pelanggan.</li>
          <li>Menyediakan dan mengelola layanan internet.</li>
          <li>Mengatur proses pemasangan dan pemeliharaan layanan.</li>
          <li>Menangani laporan gangguan dan permintaan bantuan.</li>
          <li>Menghubungi pelanggan mengenai layanan.</li>
          <li>Mengelola administrasi dan pembayaran.</li>
          <li>Memberikan informasi mengenai layanan, paket, atau perubahan layanan.</li>
          <li>Meningkatkan kualitas layanan dan pengalaman pelanggan.</li>
          <li>Menjaga keamanan sistem dan mencegah penyalahgunaan layanan.</li>
          <li>Memenuhi kewajiban berdasarkan peraturan perundang-undangan yang berlaku.</li>
        </ol>
        <p>
          Kami berupaya mengumpulkan dan memproses data pribadi secara{" "}
          <strong>terbatas, spesifik, sah, transparan, dan sesuai dengan tujuan
          pemrosesannya</strong>, sebagaimana prinsip pemrosesan dalam UU PDP.
        </p>
      </>
    ),
  },
  {
    icon: Scale,
    num: "05",
    title: "Dasar Pemrosesan Data",
    body: (
      <ul>
        <li>Melaksanakan layanan atau perjanjian dengan pelanggan;</li>
        <li>Memenuhi kewajiban hukum;</li>
        <li>Melindungi kepentingan dan keamanan layanan;</li>
        <li>Memberikan pelayanan yang diminta oleh pelanggan; dan/atau</li>
        <li>Dasar lain yang diperbolehkan berdasarkan ketentuan peraturan perundang-undangan.</li>
      </ul>
    ),
  },
  {
    icon: Link2,
    num: "06",
    title: "Berbagi Data dengan Pihak Ketiga",
    body: (
      <>
        <p>
          JackNet <strong>tidak menjual data pribadi pelanggan kepada pihak
          lain</strong>.
        </p>
        <p>Namun, dalam kondisi tertentu, data dapat dibagikan atau diproses oleh pihak yang diperlukan untuk menjalankan layanan, seperti:</p>
        <ul>
          <li><strong>Lintas Jaringan Nusantara</strong> sebagai mitra penyedia jaringan;</li>
          <li>Penyedia sistem atau platform yang digunakan untuk mendukung operasional layanan;</li>
          <li>Penyedia layanan pembayaran;</li>
          <li>Teknisi atau mitra operasional yang membutuhkan informasi tertentu untuk instalasi atau penanganan gangguan;</li>
          <li>Pihak yang diwajibkan berdasarkan hukum atau permintaan otoritas yang berwenang.</li>
        </ul>
        <p>
          Kami berupaya memastikan bahwa pihak yang menerima atau memproses data
          hanya memperoleh informasi yang diperlukan sesuai dengan tujuan layanan.
        </p>
      </>
    ),
  },
  {
    icon: Shield,
    num: "07",
    title: "Keamanan Data",
    body: (
      <>
        <p>
          JackNet berupaya menerapkan langkah teknis dan organisatoris yang wajar
          untuk melindungi data pribadi dari:
        </p>
        <ul>
          <li>Akses yang tidak sah;</li>
          <li>Penggunaan atau pengungkapan yang tidak semestinya;</li>
          <li>Perubahan yang tidak sah;</li>
          <li>Kehilangan;</li>
          <li>Kerusakan; dan</li>
          <li>Penyalahgunaan data.</li>
        </ul>
        <p>
          Namun, tidak ada sistem elektronik yang dapat dijamin sepenuhnya bebas
          dari risiko keamanan. Karena itu, kami terus melakukan evaluasi dan
          peningkatan terhadap sistem keamanan yang digunakan.
        </p>
      </>
    ),
  },
  {
    icon: Clock,
    num: "08",
    title: "Penyimpanan dan Retensi Data",
    body: (
      <>
        <p>
          JackNet menyimpan data pribadi selama diperlukan untuk:
        </p>
        <ul>
          <li>Menyediakan layanan kepada pelanggan;</li>
          <li>Memenuhi kebutuhan administrasi;</li>
          <li>Menyelesaikan kewajiban kontraktual;</li>
          <li>Menangani sengketa atau permintaan pelanggan; dan/atau</li>
          <li>Memenuhi kewajiban hukum.</li>
        </ul>
        <p>
          Setelah data tidak lagi diperlukan dan tidak terdapat kewajiban hukum
          untuk menyimpannya, data dapat dihapus atau dimusnahkan sesuai dengan
          prosedur yang berlaku.
        </p>
        <p>
          UU PDP juga mengatur bahwa data pribadi dihapus atau dimusnahkan setelah
          masa retensi berakhir atau berdasarkan permintaan subjek data, kecuali
          ditentukan lain oleh peraturan perundang-undangan.
        </p>
      </>
    ),
  },
  {
    icon: UserCheck,
    num: "09",
    title: "Hak Anda atas Data Pribadi",
    body: (
      <>
        <p>Sesuai dengan ketentuan peraturan perundang-undangan yang berlaku, Anda dapat memiliki hak atas data pribadi Anda, termasuk hak untuk:</p>
        <ul>
          <li>Mendapatkan informasi mengenai pemrosesan data pribadi;</li>
          <li>Mengakses data pribadi;</li>
          <li>Memperbaiki atau memperbarui data yang tidak akurat;</li>
          <li>Meminta pembatasan pemrosesan dalam kondisi tertentu;</li>
          <li>Meminta penghapusan data dalam kondisi yang diperbolehkan;</li>
          <li>Menarik persetujuan apabila pemrosesan didasarkan pada persetujuan;</li>
          <li>Mengajukan keberatan terhadap pemrosesan tertentu; dan</li>
          <li>Menggunakan hak lain yang diberikan berdasarkan peraturan perundang-undangan.</li>
        </ul>
        <p>
          UU PDP secara khusus memberikan hak kepada subjek data untuk memperoleh
          informasi mengenai identitas pihak yang memproses data, dasar kepentingan
          hukum, tujuan penggunaan, dan akuntabilitas pemrosesan data.
        </p>
        <p>
          Permintaan terkait hak atas data dapat disampaikan melalui kontak JackNet.
        </p>
      </>
    ),
  },
  {
    icon: Cookie,
    num: "10",
    title: "Cookie dan Teknologi Serupa",
    body: (
      <>
        <p>
          Website JackNet dapat menggunakan cookie atau teknologi serupa untuk
          membantu:
        </p>
        <ul>
          <li>Menjaga fungsi website;</li>
          <li>Mengingat preferensi pengguna;</li>
          <li>Menganalisis penggunaan website;</li>
          <li>Meningkatkan performa dan pengalaman pengguna; dan</li>
          <li>Menjaga keamanan website.</li>
        </ul>
        <p>
          Anda dapat mengatur atau menonaktifkan cookie melalui pengaturan browser
          yang digunakan. Namun, beberapa fungsi website mungkin tidak berjalan
          secara optimal apabila cookie dinonaktifkan.
        </p>
      </>
    ),
  },
  {
    icon: Link2,
    num: "11",
    title: "Tautan ke Situs Pihak Ketiga",
    body: (
      <>
        <p>
          Website JackNet dapat menyediakan tautan menuju website, platform, atau
          layanan pihak ketiga.
        </p>
        <p>
          JackNet tidak bertanggung jawab atas kebijakan privasi, keamanan, maupun
          praktik pengelolaan data pada situs pihak ketiga tersebut.
        </p>
        <p>
          Kami menyarankan Anda membaca kebijakan privasi masing-masing layanan
          sebelum memberikan informasi pribadi.
        </p>
      </>
    ),
  },
  {
    icon: Users,
    num: "12",
    title: "Privasi Anak",
    body: (
      <>
        <p>
          Layanan JackNet tidak secara khusus ditujukan kepada anak-anak.
        </p>
        <p>
          Kami tidak bermaksud mengumpulkan data pribadi anak secara sengaja tanpa
          dasar hukum atau persetujuan yang diperlukan sesuai dengan ketentuan yang
          berlaku.
        </p>
      </>
    ),
  },
  {
    icon: Bell,
    num: "13",
    title: "Perubahan Kebijakan Privasi",
    body: (
      <>
        <p>
          JackNet dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu untuk
          menyesuaikan dengan perubahan layanan, teknologi, maupun ketentuan
          peraturan perundang-undangan.
        </p>
        <p>
          Apabila terdapat perubahan penting, kami dapat memberikan pemberitahuan
          melalui website, komunikasi kepada pelanggan, atau sarana lain yang sesuai.
        </p>
      </>
    ),
  },
  {
    icon: Mail,
    num: "14",
    title: "Hubungi Kami",
    body: (
      <>
        <p>
          Jika Anda memiliki pertanyaan mengenai Kebijakan Privasi ini, ingin
          meminta informasi mengenai data pribadi Anda, atau ingin menggunakan hak
          Anda sebagai subjek data pribadi, silakan menghubungi JackNet melalui
          kanal layanan pelanggan yang tersedia.
        </p>
        <div className="mt-4 rounded-xl border border-[hsl(var(--primary))]/20 bg-[hsl(var(--primary))]/5 p-4">
          <p className="font-semibold text-[hsl(var(--foreground))]">JackNet</p>
          <p className="text-sm text-[hsl(var(--muted-foreground))]">Mitra Lintas Jaringan Nusantara</p>
          <p className="mt-2 text-sm text-[hsl(var(--muted-foreground))]">
            WhatsApp: 0851-3625-8050
          </p>
        </div>
        <p className="mt-4">
          Kami akan berupaya menangani setiap permintaan sesuai dengan ketentuan dan
          prosedur yang berlaku.
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[hsl(var(--background))] transition-colors duration-300">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[hsl(var(--primary))]/10 blur-[130px]" />
        <div className="absolute top-1/3 -left-40 w-[400px] h-[400px] rounded-full bg-[hsl(var(--primary))]/5 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] rounded-full bg-[hsl(var(--primary))]/8 blur-[120px]" />
      </div>

      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-3 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card))]/60 backdrop-blur-xl px-6 py-2 shadow-sm">
              <Shield className="w-4 h-4 text-[hsl(var(--primary))]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--primary))]">
                Kebijakan Privasi
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-8 text-4xl sm:text-5xl font-bold tracking-tight text-[hsl(var(--foreground))] leading-[1.15]">
              Privasi Anda adalah{" "}
              <span className="text-[hsl(var(--primary))]">prioritas kami.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 text-base text-[hsl(var(--muted-foreground))] leading-relaxed">
              JackNet menghargai privasi dan keamanan data pribadi setiap pelanggan,
              calon pelanggan, serta pengunjung situs web kami.
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

      {/* Intro glass card */}
      <section className="relative px-4 sm:px-6 lg:px-8 pb-6">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="group relative overflow-hidden rounded-3xl border border-[hsl(var(--border))] bg-[hsl(var(--card))]/60 backdrop-blur-2xl p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-500 hover:shadow-xl hover:shadow-[hsl(var(--primary))]/10">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-14 rounded-t-3xl bg-gradient-to-b from-white/30 to-transparent dark:from-white/[0.05] dark:to-transparent" />
              <p className="relative text-base leading-relaxed text-[hsl(var(--foreground))]">
                Kebijakan Privasi ini menjelaskan bagaimana{" "}
                <strong>JackNet</strong> mengumpulkan, menggunakan, menyimpan,
                melindungi, dan memproses informasi yang diberikan kepada kami
                ketika Anda mengakses situs web, menghubungi kami, mendaftar
                layanan, atau menggunakan layanan JackNet.
              </p>
              <p className="relative mt-4 text-base leading-relaxed text-[hsl(var(--muted-foreground))]">
                Dengan menggunakan situs web dan layanan JackNet, Anda memahami dan
                menyetujui pemrosesan data pribadi sebagaimana dijelaskan dalam
                Kebijakan Privasi ini.
              </p>
              <div className="relative mt-6 rounded-2xl border border-[hsl(var(--primary))]/20 bg-[hsl(var(--primary))]/5 p-4">
                <p className="text-sm text-[hsl(var(--muted-foreground))]">
                  Kebijakan ini disusun dengan memperhatikan ketentuan{" "}
                  <strong className="text-[hsl(var(--foreground))]">
                    Undang-Undang Republik Indonesia Nomor 27 Tahun 2022 tentang
                    Pelindungan Data Pribadi
                  </strong>
                  .
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Sections */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-10 pb-20">
        <div className="mx-auto max-w-3xl space-y-6">
          {SECTIONS.map((section, index) => (
            <Reveal key={section.title} delay={index * 40}>
              <div className="group relative overflow-hidden rounded-3xl border border-[hsl(var(--border))] bg-[hsl(var(--card))]/60 backdrop-blur-xl p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-500 hover:border-[hsl(var(--primary))]/30 hover:shadow-xl hover:shadow-[hsl(var(--primary))]/5">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-14 rounded-t-3xl bg-gradient-to-b from-white/30 to-transparent dark:from-white/[0.05] dark:to-transparent" />

                <div className="relative mb-5 flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] transition-colors duration-300 group-hover:bg-[hsl(var(--primary))] group-hover:text-white">
                    <section.icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-semibold text-[hsl(var(--muted-foreground))]">
                      {section.num}
                    </span>
                    <h2 className="text-lg font-semibold text-[hsl(var(--foreground))] leading-snug">
                      {section.title}
                    </h2>
                  </div>
                </div>

                <div className="relative space-y-3 text-sm leading-relaxed text-[hsl(var(--muted-foreground))] [&_h4]:mt-4 [&_h4]:mb-2 [&_h4]:text-sm [&_h4]:font-semibold [&_h4]:text-[hsl(var(--foreground))] [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1.5 [&_strong]:font-semibold [&_strong]:text-[hsl(var(--foreground))] [&_.note]:mt-3 [&_.note]:rounded-xl [&_.note]:border [&_.note]:border-[hsl(var(--border))] [&_.note]:bg-[hsl(var(--background))]/50 [&_.note]:p-3 [&_.note]:text-xs">
                  {section.body}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="relative px-4 sm:px-6 lg:px-8 pb-28">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-3 rounded-full border border-[hsl(var(--primary))]/30 bg-[hsl(var(--card))]/60 backdrop-blur-xl px-8 py-4 shadow-lg shadow-[hsl(var(--primary))]/10">
              <Shield className="w-5 h-5 text-[hsl(var(--primary))]" />
              <span className="text-sm font-semibold text-[hsl(var(--foreground))]">
                JackNet — Melindungi Data Anda
              </span>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}