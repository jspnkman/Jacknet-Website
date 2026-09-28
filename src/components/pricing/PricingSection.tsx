"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PricingCard } from "./PricingCard";
import { Button } from "@/components/ui/Button";
import { packagesData } from "@/data/packages";

export function PricingSection() {
  return (
    <section className="relative py-24 bg-[hsl(var(--background))]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Paket Internet"
          title="Pilih koneksi yang sesuai kebutuhan Anda."
          description="Semua paket unlimited tanpa FUP. Harga transparan, tidak ada biaya tersembunyi."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {packagesData.map((pkg) => (
            <PricingCard key={pkg.id} {...pkg} />
          ))}
        </div>

        {/* Speed comparison visual */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-center text-sm font-semibold text-[hsl(var(--muted-foreground))] mb-6 uppercase tracking-wider">
            Perbandingan Kecepatan
          </h3>
          <div className="space-y-4">
            {packagesData.map((pkg) => (
              <div key={pkg.id} className="flex items-center gap-4">
                <div className="w-32 text-sm font-medium text-[hsl(var(--foreground))]">
                  {pkg.name}
                </div>
                <div className="flex-1 bg-[hsl(var(--muted))] rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[hsl(var(--primary))]/60 to-[hsl(var(--primary))] transition-all duration-1000 ease-out"
                    style={{
                      width: `${(pkg.price / 249000) * 100}%`,
                    }}
                  />
                </div>
                <div className="w-20 text-sm font-semibold text-[hsl(var(--primary))]">
                  {pkg.downloadSpeed}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center space-y-4">
          <p className="text-[hsl(var(--muted-foreground))]">
            Belum yakin paket mana yang cocok? Kami siap membantu.
          </p>
          <div className="flex justify-center">
            <Button variant="ghost" className="min-w-[200px]">
              <a href="https://wa.me/6285136258050" target="_blank" rel="noopener noreferrer">
                Chat dengan Kami
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
