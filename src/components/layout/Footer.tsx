import React from "react";
import { siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[hsl(var(--border))] bg-[hsl(var(--background))] transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <span className="block text-2xl font-bold tracking-tight text-[hsl(var(--foreground))]">
              JACKNET
            </span>
            <span className="text-xs font-medium text-[hsl(var(--muted-foreground))] -ml-0.5 mt-0.5">
              by LJN
            </span>
            <p className="text-sm text-[hsl(var(--muted-foreground))]">
              Internet yang bekerja untuk Anda. Koneksi stabil. Aktivitas tanpa
              batas.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[hsl(var(--foreground))] mb-4">
              Layanan
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/paket"
                  className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
                >
                  Paket Internet
                </a>
              </li>
              <li>
                <a
                  href="/daftar"
                  className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
                >
                  Pendaftaran
                </a>
              </li>
<li>
                <a
                  href="https://wa.me/6285136258050?text=Halo%20JackNet%2C%20saya%20ingin%20melaporkan%20gangguan%20pada%20layanan%20internet%20saya."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
                >
                  Lapor Gangguan
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[hsl(var(--foreground))] mb-4">
              Perusahaan
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/tentang-kami"
                  className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="/#faq"
                  className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6285136258050?text=Halo%20JackNet%2C%20saya%20ingin%20menghubungi%20admin."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
                >
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[hsl(var(--foreground))] mb-4">
              Bantuan
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://wa.me/6285136258050"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <span className="text-sm text-[hsl(var(--muted-foreground))]">
                  Deli Serdang, Indonesia
                </span>
              </li>
              <li>
                <span className="text-sm text-[hsl(var(--muted-foreground))]">
                  {siteConfig.contact.workingHours}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[hsl(var(--border))] mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-[hsl(var(--muted-foreground))]">
              © {currentYear} JackNet. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="/privacy-policy"
                className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
