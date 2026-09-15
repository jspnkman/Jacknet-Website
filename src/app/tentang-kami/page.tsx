"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[hsl(var(--background))] transition-colors duration-300">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[hsl(var(--primary))]/10 blur-[120px]" />
        <div className="absolute top-1/3 -left-40 w-[400px] h-[400px] rounded-full bg-[hsl(var(--primary))]/5 blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[hsl(var(--primary))]/8 blur-[130px]" />
      </div>

      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-3 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card))]/60 backdrop-blur-xl px-6 py-2 shadow-sm">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-[hsl(var(--primary))]">
                Tentang Kami
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[hsl(var(--foreground))] leading-[1.15]">
              Koneksi yang baik menghubungkan Anda
              <br />
              dengan <span className="text-[hsl(var(--primary))]">dunia.</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mx-auto mt-8 max-w-2xl text-lg sm:text-xl text-[hsl(var(--muted-foreground))] leading-relaxed">
              Pelayanan yang baik memastikan Anda tidak pernah merasa sendirian
              ketika membutuhkannya.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Glass story cards */}
      <section className="relative px-4 sm:px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-4xl space-y-8">
          <Reveal delay={150}>
            <div className="group relative overflow-hidden rounded-[2rem] border border-[hsl(var(--border))] bg-[hsl(var(--card))]/60 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[hsl(var(--primary))]/10">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-16 rounded-t-[2rem] bg-gradient-to-b from-white/30 to-transparent dark:from-white/[0.05] dark:to-transparent" />
              <div className="p-10">
                <span className="text-xs font-semibold uppercase tracking-widest text-[hsl(var(--primary))]">
                  Perjalanan Kami
                </span>
                <p className="mt-4 text-lg leading-relaxed text-[hsl(var(--foreground))]">
                  JackNet hadir sebagai mitra{" "}
                  <span className="font-semibold">Lintas Jaringan Nusantara</span>,
                  membawa konektivitas berkualitas lebih dekat kepada pelanggan
                  melalui dukungan jaringan yang andal dan tim teknisi lokal yang
                  profesional.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                title: "Kedekatan",
                desc: "Kami menempatkan kedekatan sebagai bagian utama dari setiap layanan yang kami berikan.",
              },
              {
                title: "Kecepatan Respons",
                desc: "Respons yang cepat dan tepat adalah standar dalam melayani setiap kebutuhan Anda.",
              },
              {
                title: "Kualitas Pelayanan",
                desc: "Kualitas bukan hanya tentang teknologi, tetapi juga cara kami hadir untuk Anda.",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={200 + index * 75}>
                <div className="group relative overflow-hidden rounded-3xl border border-[hsl(var(--border))] bg-[hsl(var(--card))]/60 backdrop-blur-xl p-8 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-500 hover:-translate-y-1 hover:border-[hsl(var(--primary))]/30 hover:shadow-2xl hover:shadow-[hsl(var(--primary))]/10">
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-12 rounded-t-3xl bg-gradient-to-b from-white/30 to-transparent dark:from-white/[0.05] dark:to-transparent" />
                  <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))]">
                    <span className="text-lg font-bold">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[hsl(var(--foreground))]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150}>
            <div className="group relative overflow-hidden rounded-[2rem] border border-[hsl(var(--border))] bg-[hsl(var(--card))]/60 backdrop-blur-xl p-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-500 hover:shadow-2xl hover:shadow-[hsl(var(--primary))]/10">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-16 rounded-t-[2rem] bg-gradient-to-b from-white/30 to-transparent dark:from-white/[0.05] dark:to-transparent" />
              <p className="text-lg leading-relaxed text-[hsl(var(--foreground))]">
                Karena bagi kami, sebuah layanan tidak berhenti ketika koneksi
                berhasil terhubung.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-[hsl(var(--muted-foreground))]">
                Layanan terbaik adalah ketika teknologi bekerja dengan baik, dan
                manusia tetap hadir ketika Anda membutuhkannya.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Closing brand CTA */}
      <section className="relative px-4 sm:px-6 lg:px-8 pb-28">
        <Reveal delay={100}>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-[hsl(var(--primary))]/30 bg-[hsl(var(--card))]/60 backdrop-blur-xl px-8 py-4 shadow-lg shadow-[hsl(var(--primary))]/10">
              <span className="text-2xl font-bold tracking-tight text-[hsl(var(--foreground))]">
                JackNet
              </span>
            </div>
            <p className="mt-6 text-lg font-medium text-[hsl(var(--muted-foreground))]">
              Closer Connections. Better Service.
            </p>
            <div className="mt-10 flex justify-center">
              <Button size="lg" onClick={() => router.push("/paket")}>
                Lihat Paket Kami
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}