"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTA() {
  return (
    <section className="py-32 bg-[hsl(var(--background))] text-[hsl(var(--foreground))] relative overflow-hidden transition-colors duration-300">
       {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none" aria-hidden>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[hsl(var(--primary))] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[hsl(var(--primary))] rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <Reveal>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Siap terhubung dengan JackNet?
          </h2>
          <p className="text-xl text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto mb-10 leading-relaxed">
            Pilih paket yang sesuai kebutuhan Anda dan mulai perjalanan internet
            yang lebih nyaman dan stabil sekarang juga.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary))]/90 min-w-[200px]">
              <a href="/paket">Lihat Paket</a>
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