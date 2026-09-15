"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { packagesData } from "@/data/packages";

function RegistrationForm() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
    province: "",
    city: "",
    district: "",
    subdistrict: "",
    zip: "",
    address: "",
    benchmark: "",
    packageId: "",
  });

  useEffect(() => {
    const pkgParam = searchParams.get("paket");
    if (!pkgParam) return;
    const matched = packagesData.find((p) => p.slug === pkgParam);
    if (matched) {
      setFormData((prev) => ({ ...prev, packageId: matched.id }));
      setStep(3);
    }
  }, [searchParams]);

  function handleNext() { setStep(step + 1); }
  function handlePrev() { setStep(step - 1); }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStep(5);
  }

  if (step === 5) {
    return (
      <div className="py-24">
        <div className="container mx-auto px-4 max-w-md text-center">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">✓</div>
          <h1 className="text-3xl font-bold mb-4">Pendaftaran Berhasil</h1>
          <p className="text-[hsl(var(--muted-foreground))] mb-8">
            Nomor registrasi: <span className="font-mono font-bold">JACK-{Math.floor(100000 + Math.random() * 900000)}</span>
          </p>
          <p className="text-[hsl(var(--muted-foreground))] mb-8 leading-relaxed">
            Tim JackNet akan menghubungi Anda untuk proses selanjutnya.
          </p>
          <div className="space-y-4">
            <Button className="w-full">
              <a href="https://wa.me/6285136258050" target="_blank" rel="noopener noreferrer">Chat WhatsApp</a>
            </Button>
            <Button variant="secondary" className="w-full">
              <a href="/">Kembali ke Beranda</a>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-24">
      <div className="container mx-auto px-4 max-w-2xl">
        <SectionHeading
          label={`Langkah ${step} dari 4`}
          title="Daftar JackNet"
          description="Lengkapi data Anda untuk memulai berlangganan."
        />

        <div className="mb-12 flex justify-between">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className={`h-1 flex-1 mx-1 rounded-full ${step >= i ? "bg-[hsl(var(--primary))]" : "bg-[hsl(var(--border))]"}`} />
          ))}
        </div>

        <form onSubmit={handleSubmit} className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] p-8 rounded-2xl shadow-sm">
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="font-bold text-lg mb-4">Data Diri</h3>
              <div>
                <label className="block text-sm font-medium mb-1">Nama Lengkap</label>
                <input required type="text" className="w-full px-4 py-2 border rounded-lg border-[hsl(var(--border))]" placeholder="Masukkan nama Anda" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Nomor WhatsApp</label>
                <input required type="tel" className="w-full px-4 py-2 border rounded-lg border-[hsl(var(--border))]" placeholder="0812..." />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input required type="email" className="w-full px-4 py-2 border rounded-lg border-[hsl(var(--border))]" placeholder="email@contoh.com" />
              </div>
              <Button type="button" className="w-full mt-4" onClick={handleNext}>Lanjut</Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h3 className="font-bold text-lg mb-4">Alamat Pemasangan</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Provinsi</label>
                  <input required type="text" className="w-full px-4 py-2 border rounded-lg border-[hsl(var(--border))]" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Kota/Kabupaten</label>
                  <input required type="text" className="w-full px-4 py-2 border rounded-lg border-[hsl(var(--border))]" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Alamat Lengkap</label>
                <textarea required className="w-full px-4 py-2 border rounded-lg border-[hsl(var(--border))] h-24" placeholder="Nama jalan, nomor rumah, RT/RW..." />
              </div>
              <div className="flex gap-4">
                <Button variant="secondary" className="flex-1" onClick={handlePrev}>Kembali</Button>
                <Button className="flex-1" onClick={handleNext}>Lanjut</Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h3 className="font-bold text-lg mb-4">Pilih Paket</h3>
              <div className="space-y-3">
                {packagesData.map((pkg) => (
                  <label key={pkg.id} className={`block p-4 border rounded-xl cursor-pointer transition-all ${formData.packageId === pkg.id ? "border-[hsl(var(--primary))] bg-[hsl(var(--primary))]/5 shadow-sm" : "border-[hsl(var(--border))]"}`}>
                    <div className="flex items-center">
                      <input required type="radio" name="package" className="w-4 h-4 text-[hsl(var(--primary))]" checked={formData.packageId === pkg.id} onChange={() => setFormData({...formData, packageId: pkg.id})} />
                      <div className="ml-3">
                        <span className="font-bold block">{pkg.name}</span>
                        <span className="text-sm text-[hsl(var(--muted-foreground))]">{pkg.downloadSpeed} • {pkg.formattedPrice}/bln</span>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
              <div className="flex gap-4">
                <Button variant="secondary" className="flex-1" onClick={handlePrev}>Kembali</Button>
                <Button className="flex-1" onClick={handleNext}>Review</Button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <h3 className="font-bold text-lg mb-4">Review Pendaftaran</h3>
              <div className="p-4 bg-[hsl(var(--muted))]/50 rounded-xl space-y-3 text-sm">
                <div className="flex justify-between border-b pb-2"><span className="text-[hsl(var(--muted-foreground))]">Nama</span><span className="font-medium">Customer</span></div>
                <div className="flex justify-between border-b pb-2"><span className="text-[hsl(var(--muted-foreground))]">WhatsApp</span><span className="font-medium">0812...</span></div>
                <div className="flex justify-between border-b pb-2"><span className="text-[hsl(var(--muted-foreground))]">Paket</span><span className="font-medium">{packagesData.find(p => p.id === formData.packageId)?.name || "Pilih Paket"}</span></div>
              </div>
              <div className="flex gap-4">
                <Button variant="secondary" className="flex-1" onClick={handlePrev}>Kembali</Button>
                <Button type="submit" className="flex-1">Kirim Pendaftaran</Button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default function RegistrationPage() {
  return (
    <Suspense
      fallback={
        <div className="py-24 text-center text-[hsl(var(--muted-foreground))]">
          Memuat...
        </div>
      }
    >
      <RegistrationForm />
    </Suspense>
  );
}
