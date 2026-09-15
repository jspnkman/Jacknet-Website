"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";

const NAV_ITEMS = [
  { label: "Beranda", href: "/" },
  { label: "Paket", href: "/paket" },
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "Bantuan", href: "/bantuan" },
];

export function Navbar() {
  const pathname = usePathname();
  const [indicator, setIndicator] = React.useState<{ left: number; width: number } | null>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("jacknet-theme");
    const theme =
      savedTheme === "dark" || savedTheme === "light"
        ? (savedTheme as "light" | "dark")
        : "dark";

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, []);

  const activeIndex = NAV_ITEMS.findIndex(
    (item) => pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
  );

  useEffect(() => {
    if (activeIndex === -1) return;
    const el = linkRefs.current[activeIndex];
    if (!el) return;
    setIndicator({
      left: el.offsetLeft,
      width: el.offsetWidth,
    });
  }, [activeIndex]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[hsl(var(--border))] bg-[hsl(var(--card))]/80 backdrop-blur-md supports-[backdrop-filter]:bg-[hsl(var(--card))]/60 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold tracking-tight text-[hsl(var(--foreground))]">
                JACKNET
              </span>
              <span className="text-xs font-medium text-[hsl(var(--muted-foreground))] -ml-0.5">
                by LJN
              </span>
            </a>
          </div>

          <nav className="hidden md:flex items-center" aria-label="Navigasi utama">
            <div className="relative flex items-center space-x-8">
              {indicator && (
                <span
                  aria-hidden
                  className="absolute bottom-0 h-0.5 rounded-full bg-[hsl(var(--primary))] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{ left: indicator.left, width: indicator.width }}
                />
              )}
              {NAV_ITEMS.map((item, index) => {
                const isActive = index === activeIndex;
                return (
                  <a
                    key={item.href}
                    ref={(el) => {
                      linkRefs.current[index] = el;
                    }}
                    href={item.href}
                    className={`relative text-sm transition-colors duration-300 pb-1 ${
                      isActive
                        ? "font-semibold text-[hsl(var(--foreground))]"
                        : "font-medium text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="primary"
              className="hidden sm:inline-flex"
            >
              <a href="/daftar">Daftar Sekarang</a>
            </Button>

            <button className="md:hidden text-[hsl(var(--foreground))]">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}