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
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Stabil",
    description: "Tetap terhubung untuk hal-hal yang penting.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Responsif",
    description: "Kami siap ketika Anda membutuhkan bantuan.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Transparan",
    description: "Harga yang jelas. Tanpa biaya tersembunyi.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <ScrollIndicator />
      <Reveal>
        <FeatureGrid
          heading={{
            label: "Semuanya, berjalan dengan baik.",
            title: "Koneksi yang dapat diandalkan, layanan yang sederhana, dan semuanya dibuat untuk Anda.",
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