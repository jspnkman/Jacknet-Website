"use client";

import React from "react";
import { Hero } from "@/components/hero/Hero";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { PricingSection } from "@/components/pricing/PricingSection";
import { CoverageChecker } from "@/components/coverage/CoverageChecker";
import { FAQSection } from "@/components/ui/FAQAccordion";
import { FinalCTA } from "@/components/layout/FinalCTA";
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";
import { Reveal } from "@/components/ui/Reveal";
import { DarkNetworkSection } from "@/components/ui/DarkNetworkSection";

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Koneksi Stabil",
    description: "Nikmati koneksi yang dirancang untuk aktivitas sehari-hari tanpa gangguan.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Support Responsif",
    description: "Tim kami siap membantu 24/7 melalui WhatsApp ketika Anda membutuhkan bantuan.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Harga Transparan",
    description: "Informasi paket dan biaya ditampilkan dengan jelas. Tanpa biaya tersembunyi.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <Reveal>
        <FeatureGrid
          heading={{
            label: "Keunggulan Layanan",
            title: "Dibuat untuk koneksi yang dapat diandalkan.",
            description: "Mengapa pelanggan memilih JackNet.",
          }}
          features={features}
        />
      </Reveal>
      <Reveal>
        <PricingSection />
      </Reveal>
      <Reveal>
        <FAQSection />
      </Reveal>
      <FinalCTA />
      <WhatsAppButton />
    </>
  );
}