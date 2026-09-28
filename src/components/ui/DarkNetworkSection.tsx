"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { NetworkCanvas } from "@/components/ui/NetworkCanvas";
import { Cable, Zap, Globe } from "lucide-react";

export function DarkNetworkSection() {
  const statsItems = [
    { value: "100%", label: "Fiber Optic" },
    { value: "24/7", label: "Support" },
    { value: "Unlimited", label: "Tanpa FUP" },
  ];

  const benefitItems = [
    { icon: <Cable className="w-5 h-5" />, title: "Koneksi Stabil", desc: "Fiber optic murni untuk kecepatan optimal" },
    { icon: <Zap className="w-5 h-5" />, title: "Zero Latency", desc: "Aktivitas tanpa delay" },
    { icon: <Globe className="w-5 h-5" />, title: "Jaringan Terhubung", desc: "Koneksi multi-device tanpa batas" },
  ];

  return (
    <section className="py-24 bg-[hsl(var(--background))] text-[hsl(var(--foreground))] overflow-hidden relative">
      {/* Layered background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[hsl(var(--primary))] rounded-full blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[hsl(var(--primary))] rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[hsl(var(--primary))] mb-4">
              Koneksi Tanpa Batas
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Internet yang tetap
              <br />
              <span className="text-[hsl(var(--primary))]">bergerak.</span>
            </h2>
            <p className="mt-6 text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto leading-relaxed">
              Infrastruktur kami dirancang untuk lebih dekat dengan pelanggan, didukung teknisi lokal berkualitas yang siap memberikan layanan terbaik dengan respons yang cepat dan tepat.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Text and stats */}
          <Reveal>
            <div className="space-y-8">
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8">
                {statsItems.map((item, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-3xl font-bold text-[hsl(var(--primary))]">{item.value}</div>
                    <div className="text-sm text-[hsl(var(--muted-foreground))] uppercase tracking-wider mt-1">{item.label}</div>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <div className="space-y-4">
                {benefitItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 rounded-xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] hover:border-[hsl(var(--primary))]/30 transition-all"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--foreground))]">{item.title}</h4>
                      <p className="text-sm text-[hsl(var(--muted-foreground))] mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <p className="text-sm text-[hsl(var(--muted-foreground))] inline-flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  Scroll untuk menjelajah
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right side - Network canvas with overlay content */}
          <Reveal delay={150}>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border border-[hsl(var(--border))] bg-[hsl(var(--card))] shadow-lg shadow-[hsl(var(--primary))]/10">
                {/* Network Canvas Container */}
                <div className="relative w-full h-[400px]">
                  <NetworkCanvas width={400} height={400} nodeCount={35} lineDistance={150} />
                  
                  {/* Floating overlay elements */}
                  <div className="absolute top-4 left-4 bg-white/5 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.2)]">
                    <div className="text-xs text-[hsl(var(--muted-foreground))]">Status</div>
                    <div className="text-sm font-bold text-[hsl(var(--foreground))] flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-[blink_2s_ease-in-out_infinite]" />
                      Online
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 bg-white/5 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.2)]">
                    <div className="text-xs text-[hsl(var(--muted-foreground))]">Ping</div>
                    <div className="text-sm font-bold text-green-500">19 ms</div>
                  </div>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.2)]">
                    <div className="text-xs text-[hsl(var(--muted-foreground))] text-center">Lintas Jaringan Nusantara</div>
                    <div className="text-sm font-semibold text-[hsl(var(--foreground))] text-center">Infrastruktur fiber kami</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}