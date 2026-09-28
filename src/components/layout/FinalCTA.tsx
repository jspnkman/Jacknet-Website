"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTA() {
  return (
    <section className="relative py-40 bg-[hsl(var(--background))] text-[hsl(var(--foreground))] transition-colors duration-300">
      {/* Blue ambient glow — centered, blur fades naturally within bounds */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-[hsl(var(--primary))]/20 blur-[140px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <Reveal>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6">
            Siap terhubung dengan JackNet?
          </h2>
          <p className="text-xl text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto mb-10 leading-relaxed">
            Pilih paket yang sesuai kebutuhan Anda dan mulai perjalanan internet
            yang lebih nyaman dan stabil sekarang juga.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="min-w-[200px]">
              <a href="/paket">Lihat Rincian Paket</a>
            </Button>
            <Button variant="secondary" size="lg" className="min-w-[200px]">
              <a href="/daftar">Daftar Sekarang</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}