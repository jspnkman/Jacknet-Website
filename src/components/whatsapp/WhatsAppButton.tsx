"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";

const topics = [
  { label: "Informasi Paket", message: "Halo JackNet, saya ingin mendapatkan informasi mengenai paket internet yang tersedia." },
  { label: "Pendaftaran Baru", message: "Halo JackNet, saya ingin mendaftar layanan internet baru." },
  { label: "Cek Area Layanan", message: "Halo JackNet, saya ingin mengecek ketersediaan jaringan di area saya." },
  { label: "Pembayaran", message: "Halo JackNet, saya ingin bertanya mengenai pembayaran." },
  { label: "Gangguan Internet", message: "Halo JackNet, saya ingin melaporkan gangguan pada layanan internet saya." },
  { label: "Pertanyaan Lainnya", message: "Halo JackNet, saya ingin bertanya sesuatu." },
];

export function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  function handleSend() {
    const topic = topics.find((t) => t.label === selectedTopic);
    if (!topic) return;
    const url = `https://wa.me/6285136258050?text=${encodeURIComponent(topic.message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setOpen(false);
    setSelectedTopic(null);
  }

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[300px] bg-[hsl(var(--card))] rounded-2xl shadow-2xl border border-[hsl(var(--border))] overflow-hidden animate-in slide-in-from-bottom-5 duration-200 dark:border-[hsl(var(--primary))]/20">
          <div className="bg-[hsl(var(--primary))] text-white p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Chat WhatsApp</h3>
              <button
                onClick={() => {
                  setOpen(false);
                  setSelectedTopic(null);
                }}
                className="text-white/80 hover:text-white"
                aria-label="Tutup"
              >
                ✕
              </button>
            </div>
            <p className="text-sm text-white/80 mt-1">
              Bagaimana kami dapat membantu?
            </p>
          </div>

          <div className="p-4 space-y-2 max-h-[300px] overflow-y-auto">
            {topics.map((topic) => (
              <button
                key={topic.label}
                onClick={() => setSelectedTopic(topic.label)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all border ${
                  selectedTopic === topic.label
                    ? "bg-[hsl(var(--primary))]/10 border-[hsl(var(--primary))] text-[hsl(var(--primary))]"
                    : "bg-[hsl(var(--muted))]/30 border-[hsl(var(--border))] text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))]/50"
                }`}
              >
                {topic.label}
              </button>
            ))}
          </div>

          <div className="p-4 border-t border-[hsl(var(--border))]">
            <Button
              className="w-full"
              disabled={!selectedTopic}
              onClick={handleSend}
            >
              Buka WhatsApp
            </Button>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className={`fixed bottom-6 right-4 sm:right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center ${
          open ? "rotate-90" : ""
        }`}
        aria-label="Chat WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </button>
    </>
  );
}
