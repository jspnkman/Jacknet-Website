"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Moon, Sun } from "lucide-react";

const NAV_ITEMS = [
  { label: "Beranda", href: "/" },
  { label: "Paket", href: "/paket" },
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "Bantuan", href: "/bantuan" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [indicator, setIndicator] = useState<{ left: number; width: number } | null>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
useEffect(() => {
    const savedTheme = localStorage.getItem("jacknet-theme");
    const mq = window.matchMedia?.("(prefers-color-scheme: dark)");

    // Priority: 1. localStorage (manual override) > 2. System preference
    const initialTheme =
      savedTheme === "dark" || savedTheme === "light"
        ? (savedTheme as "light" | "dark")
        : mq?.matches
          ? "dark"
          : "light";

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(initialTheme);
    setTheme(initialTheme);

    // Listen for system theme changes
    if (mq) {
      const handler = () => {
        // Only follow system if user hasn't manually set a preference
        const manual = localStorage.getItem("jacknet-theme");
        if (!manual) {
          const prefersDark = mq.matches;
          const newTheme = prefersDark ? "dark" : "light";
          document.documentElement.classList.remove("light", "dark");
          document.documentElement.classList.add(newTheme);
          setTheme(newTheme);
        }
      };
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("jacknet-theme", newTheme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        scrolled
          ? "bg-[hsl(var(--card))]/75 backdrop-blur-2xl border-[hsl(var(--border))] shadow-[0_1px_1px_rgba(0,0,0,0.03),0_4px_16px_rgba(0,0,0,0.05)]"
          : "bg-[hsl(var(--card))]/45 backdrop-blur-xl border-[hsl(var(--border))]/60"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            scrolled ? "h-14" : "h-16"
          }`}
        >
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-xl font-semibold tracking-tight text-[hsl(var(--foreground))]">
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
                    className={`relative text-[13px] transition-colors duration-300 pb-1 ${
                      isActive
                        ? "font-medium text-[hsl(var(--foreground))]"
                        : "font-normal text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"
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
              size="sm"
              className="hidden sm:inline-flex"
            >
              <a href="/daftar">Daftar Sekarang</a>
            </Button>

            {/* Theme Switcher */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))] hover:text-[hsl(var(--primary))] transition-colors duration-200"
              aria-label={theme === "dark" ? "Aktifkan light mode" : "Aktifkan dark mode"}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <button
              className="md:hidden text-[hsl(var(--foreground))]"
              aria-label="Menu"
            >
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