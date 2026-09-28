import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "JackNet - Internet yang bekerja untuk Anda",
    template: "%s | JackNet",
  },
  description:
    "Internet fiber optic yang stabil dan dapat diandalkan. Koneksi cepat untuk aktivitas tanpa batas.",
  keywords: [
    "internet",
    "fiber optic",
    "jacknet",
    "ISP",
    "internet rumah",
    "internet murah",
    "internet cepat",
    "wifi",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var saved = localStorage.getItem('jacknet-theme');
                var theme = saved || 'dark';
                document.documentElement.classList.add(theme);
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[hsl(var(--background))] text-[hsl(var(--foreground))] transition-colors duration-300">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}