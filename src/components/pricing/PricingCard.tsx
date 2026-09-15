"use client";

import React, { useState, useCallback } from "react";
import { Button } from "@/components/ui/Button";
import { packagesData } from "@/data/packages";
import { Check, ArrowRight } from "lucide-react";

const WHATSAPP_NUMBER = "6285136258050";

function getWhatsAppMessage(name: string, formattedPrice: string): string {
  return `Halo JackNet, saya tertarik dengan paket ${name} seharga ${formattedPrice}/bulan. Mohon informasi lebih lanjut mengenai pendaftaran dan ketersediaan jaringan di area saya.`;
}

interface PricingCardProps {
  name: string;
  downloadSpeed: string;
  formattedPrice: string;
  popular?: boolean;
  slug: string;
}

export function PricingCard({
  name,
  downloadSpeed,
  formattedPrice,
  popular = false,
  slug,
}: PricingCardProps) {
  const pkg = packagesData.find((p) => p.name === name) || packagesData[0];
  const [launching, setLaunching] = useState(false);

  const handleLaunch = useCallback(() => {
    if (launching) return;
    setLaunching(true);
    const message = getWhatsAppMessage(name, formattedPrice);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
      setLaunching(false);
    }, 700);
  }, [launching, name, formattedPrice]);

  return (
    <div
      className={`group relative flex flex-col p-8 rounded-[1.75rem] border backdrop-blur-xl transition-all duration-500 will-change-transform ${
        popular
          ? "border-[hsl(var(--primary))]/40 bg-[hsl(var(--card))]/80 shadow-[0_4px_30px_rgba(37,99,235,0.12)] hover:shadow-[0_10px_40px_rgba(37,99,235,0.18)] hover:-translate-y-2"
          : "border-[hsl(var(--border))] bg-[hsl(var(--card))]/60 hover:border-[hsl(var(--primary))]/40 hover:bg-[hsl(var(--card))]/90 hover:shadow-[0_10px_40px_rgba(37,99,235,0.12)] hover:-translate-y-2"
      }`}
    >
      {/* Liquid glass top highlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-24 rounded-t-[1.75rem] bg-gradient-to-b from-white/40 to-transparent dark:from-white/[0.06] dark:to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500"
      />

      {/* Subtle inner glow on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[1.75rem] shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
      />

      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-[hsl(var(--primary))] text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg shadow-[hsl(var(--primary))]/30">
            Paling Populer
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-bold text-[hsl(var(--foreground))]">
          {name}
        </h3>
        <p className="text-sm text-[hsl(var(--primary))] font-medium mt-1">
          {downloadSpeed}
        </p>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          <span className="text-sm text-[hsl(var(--muted-foreground))]">
            Mulai dari
          </span>
        </div>
        <div className="flex items-baseline gap-1 mt-1">
          <span className="text-4xl font-bold text-[hsl(var(--foreground))]">
            {formattedPrice}
          </span>
          <span className="text-sm text-[hsl(var(--muted-foreground))]">
            /bulan
          </span>
        </div>
      </div>

      <div className="space-y-3 mb-8 flex-1">
        {pkg.features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <span className="w-5 h-5 flex items-center justify-center rounded-full bg-[hsl(var(--primary))]/10 mt-0.5">
              <Check className="w-3 h-3 text-[hsl(var(--primary))]" strokeWidth={3} />
            </span>
            <span className="text-sm text-[hsl(var(--muted-foreground))]">
              {feature}
            </span>
          </div>
        ))}
      </div>

      <Button
        variant="primary"
        onClick={handleLaunch}
        disabled={launching}
        className={`group/btn relative w-full overflow-hidden transition-all duration-300 ${
          launching
            ? "scale-[0.98] opacity-90"
            : "hover:shadow-[0_6px_24px_rgba(37,99,235,0.35)]"
        }`}
      >
        {/* Liquid glass sheen sweeping on hover */}
        <span
          aria-hidden
          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover/btn:translate-x-full transition-transform duration-700 ease-out"
        />

        <span className="relative inline-flex items-center justify-center w-full gap-2">
          <span
            className={`backdrop-blur-sm transition-all duration-300 ${
              launching ? "opacity-40 translate-x-1" : "group-hover/btn:tracking-wide"
            }`}
          >
            Pilih Paket
          </span>
          {/* Arrow flies across full button then exits right edge */}
          <span className="relative flex items-center">
            <ArrowRight
              className={`w-5 h-5 transition-all duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                launching
                  ? "translate-x-40 opacity-0 scale-75 -translate-y-0.5"
                  : "group-hover/btn:translate-x-1"
              }`}
            />
          </span>
        </span>
      </Button>
    </div>
  );
}