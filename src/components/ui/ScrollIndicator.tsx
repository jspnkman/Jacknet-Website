"use client";

import React from "react";

export function ScrollIndicator() {
  return (
    <div className="relative flex justify-center py-6 md:py-8">
      <div className="relative flex flex-col items-center gap-2 opacity-60">
        <svg
          className="w-5 h-5 md:w-6 md:h-6 text-[hsl(var(--muted-foreground))]/70"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          style={{ animation: "bounce 2s infinite" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
        <span className="text-xs text-[hsl(var(--muted-foreground))] hidden md:block">
          Scroll untuk menjelajah
        </span>
        <span className="text-xs text-[hsl(var(--muted-foreground))] md:hidden">
          Scroll
        </span>
        <style jsx>{`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-4px); }
            60% { transform: translateY(-2px); }
          }
        `}</style>
      </div>
    </div>
  );
}