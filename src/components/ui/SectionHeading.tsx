"use client";

import React from "react";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-2xl mb-12 ${
        align === "center" ? "text-center mx-auto" : "text-left"
      }`}
    >
      {label && (
        <span className="text-xs font-semibold uppercase tracking-widest text-[hsl(var(--primary))] mb-3 block">
          {label}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-semibold text-[hsl(var(--foreground))]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-[hsl(var(--muted-foreground))]">
          {description}
        </p>
      )}
    </div>
  );
}
