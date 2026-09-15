"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function CoverageChecker() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<"idle" | "found" | "not-found">("idle");

  function handleCheck(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    setStatus("found");
  }

  return (
    <section className="py-24 bg-[hsl(var(--background))]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Area Layanan"
          title="Apakah JackNet tersedia di area Anda?"
          description="Masukkan lokasi Anda untuk mengecek ketersediaan jaringan."
        />

        <form
          onSubmit={handleCheck}
          className="max-w-md mx-auto space-y-4"
        >
          <div>
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setStatus("idle");
              }}
              placeholder="Masukkan nama area atau alamat..."
              className="w-full px-4 py-3 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))] text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent transition-all"
            />
          </div>
          <Button type="submit" className="w-full">
            Cek Ketersediaan
          </Button>
        </form>

        {status === "found" && (
          <div className="mt-6 max-w-md mx-auto p-4 rounded-lg bg-green-50 border border-green-200 text-center">
            <p className="text-green-800 font-medium">
              Area Anda tercover jaringan JackNet.
            </p>
            <a
              href="/daftar"
              className="mt-2 inline-block text-sm text-[hsl(var(--primary))] underline"
            >
              Daftar sekarang →
            </a>
          </div>
        )}

        {status === "not-found" && (
          <div className="mt-6 max-w-md mx-auto p-4 rounded-lg bg-orange-50 border border-orange-200 text-center">
            <p className="text-orange-800 font-medium">
              Kami belum tersedia di area tersebut.
            </p>
            <p className="text-sm text-orange-700 mt-1">
              Hubungi kami untuk informasi lebih lanjut.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
