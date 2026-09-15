"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PricingCard } from "@/components/pricing/PricingCard";
import { packagesData } from "@/data/packages";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Zap, Users, Gamepad2, ChevronRight, Check } from "lucide-react";

const SEGMENTATION = [
  { label: "Penggunaan Ringan", color: "emerald", icon: Zap },
  { label: "Keluarga", color: "blue", icon: Users },
  { label: "Gaming", color: "purple", icon: Gamepad2 },
];

export default function PaketPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[hsl(var(--background))] transition-colors duration-300">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[hsl(var(--primary))]/10 blur-[130px]" />
        <div className="absolute top-1/3 -left-40 w-[400px] h-[400px] rounded-full bg-[hsl(var(--primary))]/5 blur-[100px]" />
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8 py-24">
        <SectionHeading
          label="Katalog Paket"
          title="Internet yang sesuai dengan gaya hidup Anda."
          description="Pilih dari berbagai pilihan kecepatan yang dirancang untuk kebutuhan digital Anda."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packagesData.map((pkg) => (
            <PricingCard key={pkg.id} {...pkg} />
          ))}
        </div>

        <div className="mt-24 max-w-5xl mx-auto">
          <Reveal>
            <h3 className="text-center text-sm font-semibold uppercase tracking-widest text-[hsl(var(--muted-foreground))] mb-8">
              Bandingkan Paket
            </h3>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packagesData.map((pkg, index) => {
              const seg = SEGMENTATION[index];
              const SegIcon = seg.icon;
              return (
                <Reveal key={pkg.id} delay={index * 80}>
                  <div className="group relative overflow-hidden rounded-3xl border border-[hsl(var(--border))] bg-[hsl(var(--card))]/60 backdrop-blur-xl p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-500 hover:shadow-xl hover:shadow-[hsl(var(--primary))]/10 hover:-translate-y-1">
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-12 rounded-t-3xl bg-gradient-to-b from-white/30 to-transparent dark:from-white/[0.05] dark:to-transparent" />

                    <div className="relative">
                      <div className="flex items-center justify-between mb-5">
                        <h4 className="text-lg font-bold text-[hsl(var(--foreground))]">
                          {pkg.name}
                        </h4>
                        {pkg.popular && (
                          <span className="text-[10px] font-semibold uppercase tracking-wider bg-[hsl(var(--primary))] text-white px-2 py-1 rounded-full">
                            Populer
                          </span>
                        )}
                      </div>

                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between items-center">
                          <span className="text-[hsl(var(--muted-foreground))]">Kecepatan</span>
                          <span className="font-semibold text-[hsl(var(--foreground))]">{pkg.downloadSpeed}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-[hsl(var(--muted-foreground))]">Harga</span>
                          <span className="font-bold text-[hsl(var(--primary))]">{pkg.formattedPrice}/bln</span>
                        </div>
                        <div className="pt-3 mt-3 border-t border-[hsl(var(--border))]">
                          <div className="flex items-center gap-2 mb-1">
                            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))]">
                              <SegIcon className="w-4 h-4" />
                            </div>
                            <span className="text-xs font-semibold uppercase tracking-wider text-[hsl(var(--primary))]">
                              Segmentasi
                            </span>
                          </div>
                          <p className="text-xs text-[hsl(var(--muted-foreground))] leading-relaxed">
                            {pkg.segment}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}