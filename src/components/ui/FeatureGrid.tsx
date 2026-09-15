"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeatureGridProps {
  heading: {
    label?: string;
    title: string;
    description?: string;
  };
  features: FeatureItem[];
}

export function FeatureGrid({ heading, features }: FeatureGridProps) {
  return (
    <section className="py-24 bg-[hsl(var(--background))]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            label={heading.label}
            title={heading.title}
            description={heading.description}
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Reveal key={index} delay={index * 50}>
              <div
                className="group relative p-8 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:shadow-xl transition-all duration-500 hover:scale-[1.02] hover:border-[hsl(var(--primary))]/30 dark:hover:border-[hsl(var(--primary))]/30"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] group-hover:bg-[hsl(var(--primary))] group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-[hsl(var(--foreground))] mb-3 mt-4">
                  {feature.title}
                </h3>
                <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-6 pt-4 border-t border-[hsl(var(--border))]/50 group-hover:border-[hsl(var(--primary))]/30 transition-colors duration-300">
                  <span className="text-sm text-[hsl(var(--primary))] font-medium inline-flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Pelajari lebih lanjut
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
