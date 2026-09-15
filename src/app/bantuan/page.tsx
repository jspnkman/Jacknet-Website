"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { useRouter } from "next/navigation";
import {
  Search,
  Wifi,
  Package,
  Wrench,
  CreditCard,
  Users,
  Headphones,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  MessageCircle,
  Phone,
} from "lucide-react";

const HELP_TOPICS = [
  {
    icon: Wifi,
    title: "Koneksi & Gangguan",
    desc: "Solusi untuk masalah koneksi, putus, atau lambat.",
    href: "https://wa.me/6285136258050?text=Halo%20JackNet%2C%20saya%20mengalami%20gangguan%20koneksi.",
  },
  {
    icon: Package,
    title: "Paket & Layanan",
    desc: "Informasi paket internet dan upgrade layanan.",
    href: "https://wa.me/6285136258050?text=Halo%20JackNet%2C%20saya%20ingin%20bertanya%20tentang%20paket.",
  },
  {
    icon: Wrench,
    title: "Pemasangan Baru",
    desc: "Proses pemasangan dan jadwal teknisi.",
    href: "https://wa.me/6285136258050?text=Halo%20JackNet%2C%20saya%20ingin%20menanyakan%20pemasangan.",
  },
  {
    icon: CreditCard,
    title: "Pembayaran",
    desc: "Cara pembayaran, tagihan, dan invoice.",
    href: "https://wa.me/6285136258050?text=Halo%20JackNet%2C%20saya%20ingin%20bertanya%20tentang%20pembayaran.",
  },
  {
    icon: Users,
    title: "Akun & Pelanggan",
    desc: "Pengelolaan akun dan informasi pelanggan.",
    href: "https://wa.me/6285136258050?text=Halo%20JackNet%2C%20saya%20ingin%20bertanya%20tentang%20akun.",
  },
  {
    icon: Headphones,
    title: "Bantuan Teknis",
    desc: "Troubleshooting perangkat dan pengaturan jaringan.",
    href: "https://wa.me/6285136258050?text=Halo%20JackNet%2C%20saya%20butuh%20bantuan%20teknis.",
  },
];

const FAQ_LIST = [
  {
    q: "Bagaimana cara berlangganan JackNet?",
    a: "Anda dapat memilih paket di halaman Paket, lalu klik 'Pilih Paket'. Animasi akan mengarahkan Anda ke WhatsApp dengan pesan otomatis. Tim kami akan memandu proses pendaftaran selanjutnya.",
  },
  {
    q: "Apakah JackNet menggunakan kuota (FUP)?",
    a: "Tidak. Seluruh paket JackNet bersifat True Unlimited tanpa batasan kuota maupun penurunan kecepatan.",
  },
  {
    q: "Berapa biaya pemasangan awal?",
    a: "Saat ini seluruh pendaftaran baru mendapatkan promo Gratis Biaya Instalasi dan Gratis Sewa Modem/ONT.",
  },
  {
    q: "Bagaimana jika internet mengalami gangguan?",
    a: "Hubungi kami via WhatsApp 24/7. Tim teknisi akan merespons dan menangani gangguan secepat mungkin.",
  },
  {
    q: "Bagaimana cara menghubungi customer support?",
    a: "Anda dapat menghubungi kami via WhatsApp di nomor 0851-3625-8050 atau melalui tombol Chat dengan Kami di halaman ini.",
  },
  {
    q: "Apakah tersedia di area saya?",
    a: "Silakan hubungi kami via WhatsApp untuk mengecek ketersediaan jaringan di area Anda.",
  },
];

export default function BantuanPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const filteredFAQ = FAQ_LIST.filter(
    (faq) =>
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-[hsl(var(--background))] transition-colors duration-300">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[hsl(var(--primary))]/10 blur-[130px]" />
        <div className="absolute top-1/3 -right-32 w-[400px] h-[400px] rounded-full bg-[hsl(var(--primary))]/5 blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] rounded-full bg-[hsl(var(--primary))]/8 blur-[120px]" />
      </div>

      {/* ─── HERO ─── */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-16 pb-14">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card))]/60 backdrop-blur-xl px-5 py-2 shadow-sm mb-8">
              <Headphones className="w-4 h-4 text-[hsl(var(--primary))]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[hsl(var(--foreground))]">
                Pusat Bantuan
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[hsl(var(--foreground))] leading-[1.15]">
              Ada yang bisa kami{" "}
              <span className="text-[hsl(var(--primary))]">bantu?</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-5 text-lg text-[hsl(var(--muted-foreground))]">
              Temukan jawaban cepat atau hubungi tim kami langsung.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 relative">
              <div className="relative rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))]/80 backdrop-blur-2xl shadow-2xl shadow-[hsl(var(--primary))]/5 overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/30 to-transparent dark:from-white/[0.05] dark:to-transparent pointer-events-none rounded-t-2xl" />
                <div className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] rounded-2xl pointer-events-none" />

                <div className="relative flex items-center gap-3 px-6 py-5">
                  <Search className="w-5 h-5 text-[hsl(var(--muted-foreground))] flex-shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari pertanyaan atau topik bantuan..."
                    className="w-full bg-transparent text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus:outline-none text-base"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── TOPIK BANTUAN ─── */}
      <section className="relative px-4 sm:px-6 lg:px-8 pb-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-[hsl(var(--muted-foreground))] mb-8">
              Topik Bantuan
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {HELP_TOPICS.map((topic, index) => (
              <Reveal key={topic.title} delay={index * 60}>
                <a
                  href={topic.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))]/60 backdrop-blur-xl p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-500 hover:-translate-y-1 hover:border-[hsl(var(--primary))]/30 hover:shadow-xl hover:shadow-[hsl(var(--primary))]/10"
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-10 rounded-t-2xl bg-gradient-to-b from-white/25 to-transparent dark:from-white/[0.04] dark:to-transparent" />
                  <div className="relative flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] transition-colors duration-300 group-hover:bg-[hsl(var(--primary))] group-hover:text-white">
                      <topic.icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold text-[hsl(var(--foreground))] leading-snug">
                        {topic.title}
                      </h3>
                      <p className="mt-1 text-xs text-[hsl(var(--muted-foreground))] leading-relaxed">
                        {topic.desc}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[hsl(var(--muted-foreground))] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 group-hover:translate-x-0" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATUS LAYANAN ─── */}
      <section className="relative px-4 sm:px-6 lg:px-8 pb-20">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <div className="group relative overflow-hidden rounded-3xl border border-[hsl(var(--border))] bg-[hsl(var(--card))]/60 backdrop-blur-2xl p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-500 hover:shadow-xl hover:shadow-[hsl(var(--primary))]/10">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-14 rounded-t-3xl bg-gradient-to-b from-white/30 to-transparent dark:from-white/[0.05] dark:to-transparent" />

              <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-[hsl(var(--foreground))]">
                    Status Jaringan JackNet
                  </h3>
                  <p className="text-sm text-[hsl(var(--muted-foreground))] mt-1">
                    Status operasional layanan saat ini.
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2 border border-green-500/20">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium text-green-700 dark:text-green-400">
                    Semua Beroperasi Normal
                  </span>
                </div>
              </div>

              <div className="relative mt-6 grid grid-cols-3 gap-3">
                {[
                  { label: "Jaringan", ok: true },
                  { label: "Portal", ok: true },
                  { label: "Support", ok: true },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))]/50 px-4 py-3 text-center"
                  >
                    <div className="mx-auto mb-1 h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-xs font-medium text-[hsl(var(--foreground))]">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="relative px-4 sm:px-6 lg:px-8 pb-20">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-[hsl(var(--muted-foreground))] mb-8">
              Pertanyaan Umum
            </h2>
          </Reveal>
          <div className="space-y-3">
            {filteredFAQ.map((faq, index) => (
              <Reveal key={index} delay={index * 50}>
                <div className="group overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))]/60 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-300 hover:border-[hsl(var(--primary))]/30">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                    aria-expanded={openFAQ === index}
                  >
                    <span className="text-sm font-medium text-[hsl(var(--foreground))] pr-4">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[hsl(var(--muted-foreground))] shrink-0 transition-transform duration-300 ${
                        openFAQ === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      openFAQ === index ? "max-h-60" : "max-h-0"
                    }`}
                  >
                    <div className="px-5 pb-5 text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BUTUH BANTUAN? ─── */}
      <section className="relative px-4 sm:px-6 lg:px-8 pb-28">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-[hsl(var(--border))] bg-[hsl(var(--card))]/60 backdrop-blur-2xl p-10 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-16 rounded-t-3xl bg-gradient-to-b from-white/30 to-transparent dark:from-white/[0.05] dark:to-transparent" />

              <h2 className="text-2xl font-bold text-[hsl(var(--foreground))]">
                Butuh Bantuan?
              </h2>
              <p className="mt-2 text-sm text-[hsl(var(--muted-foreground))]">
                Tim kami siap membantu Anda kapan saja.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="https://wa.me/6285136258050?text=Halo%20JackNet%2C%20saya%20butuh%20bantuan."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-3 rounded-2xl bg-[hsl(var(--primary))] text-white px-8 py-4 font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-[hsl(var(--primary))]/30 hover:-translate-y-0.5 overflow-hidden"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-out" />
                  <MessageCircle className="w-5 h-5 relative" />
                  <span className="relative">Chat WhatsApp Admin</span>
                </a>

                <a
                  href="tel:+6285136258050"
                  className="group relative inline-flex items-center justify-center gap-3 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))]/70 backdrop-blur-md text-[hsl(var(--foreground))] px-8 py-4 font-medium text-sm transition-all duration-300 hover:border-[hsl(var(--primary))]/40 hover:shadow-lg hover:shadow-[hsl(var(--primary))]/10 hover:-translate-y-0.5 overflow-hidden"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-out dark:via-white/5" />
                  <Phone className="w-5 h-5 relative" />
                  <span className="relative">0851-3625-8050</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}