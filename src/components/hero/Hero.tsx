"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

interface Particle {
  from: number;
  to: number;
  progress: number;
  speed: number;
}

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const dpr = window.devicePixelRatio || 1;
    const parent = canvas.parentElement!;
    let W = parent.clientWidth;
    let H = parent.clientHeight;

    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = W + "px";
    canvas.style.height = H + "px";
    ctx.scale(dpr, dpr);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Nodes scattered across entire canvas
    const NODE_COUNT = 70;
    const CONN_DIST = 150;
    const nodes: Node[] = [];
    const particles: Particle[] = [];

    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.8 + 0.6,
      });
    }

    function spawnParticle() {
      if (prefersReducedMotion) return;
      if (Math.random() > 0.08) return;
      const a = Math.floor(Math.random() * nodes.length);
      let best = -1, bestD = Infinity;
      for (let b = 0; b < nodes.length; b++) {
        if (a === b) continue;
        const dx = nodes[a].x - nodes[b].x;
        const dy = nodes[a].y - nodes[b].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < CONN_DIST && d < bestD) { bestD = d; best = b; }
      }
      if (best >= 0) {
        particles.push({ from: a, to: best, progress: 0, speed: 0.004 + Math.random() * 0.006 });
      }
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);

      const px = prefersReducedMotion ? 0 : (mouseRef.current.x / window.innerWidth - 0.5) * 10;
      const py = prefersReducedMotion ? 0 : (mouseRef.current.y / window.innerHeight - 0.5) * 10;

      for (const n of nodes) {
        if (!prefersReducedMotion) {
          n.x += n.vx; n.y += n.vy;
          if (n.x < 0 || n.x > W) n.vx *= -1;
          if (n.y < 0 || n.y > H) n.vy *= -1;
          n.x = Math.max(0, Math.min(W, n.x));
          n.y = Math.max(0, Math.min(H, n.y));
        }
      }

      // Connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONN_DIST) {
            const alpha = (1 - dist / CONN_DIST) * 0.2;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x + px, nodes[i].y + py);
            ctx.lineTo(nodes[j].x + px, nodes[j].y + py);
            ctx.strokeStyle = `rgba(37, 99, 235, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Nodes
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x + px, n.y + py, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(37, 99, 235, ${0.35 + Math.random() * 0.15})`;
        ctx.fill();
      }

      // Particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.progress += p.speed;
        if (p.progress >= 1) { particles.splice(i, 1); continue; }
        const a = nodes[p.from], b = nodes[p.to];
        const x = a.x + (b.x - a.x) * p.progress + px;
        const y = a.y + (b.y - a.y) * p.progress + py;
        const alpha = Math.sin(p.progress * Math.PI);
        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(37, 99, 235, ${alpha * 0.9})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = `rgba(37, 99, 235, ${alpha * 0.6})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      spawnParticle();
      animId = requestAnimationFrame(draw);
    }

    function onMouseMove(e: MouseEvent) {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    }

    function onResize() {
      if (!canvas || !ctx) return;
      W = parent.clientWidth;
      H = parent.clientHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = W + "px";
      canvas.style.height = H + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", onResize);
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-[hsl(var(--muted))]/30 via-[hsl(var(--muted))]/10 to-[hsl(var(--background))] transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-10 space-y-8">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--primary))] mb-4">
                JACKNET INTERNET
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[hsl(var(--foreground))] leading-[1.1]">
                Internet yang bekerja
                <br />
                <span className="text-[hsl(var(--primary))]">untuk Anda.</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-[hsl(var(--muted-foreground))] max-w-xl leading-relaxed">
                Koneksi fiber optic stabil untuk kebutuhan sehari-hari. Dari
                bekerja, belajar, hingga hiburan tanpa batas.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="min-w-[180px] shadow-lg shadow-[hsl(var(--primary))]/20 hover:shadow-xl hover:shadow-[hsl(var(--primary))]/30">
                <a href="/paket">Lihat Paket</a>
              </Button>
              <Button variant="secondary" size="lg" className="min-w-[180px]">
                <a href="/daftar">Daftar Sekarang</a>
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative aspect-square max-w-[600px] mx-auto">
              {/* Visual Container */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[hsl(var(--primary))]/5 to-[hsl(var(--muted))] dark:from-[hsl(var(--primary))]/10 dark:to-[hsl(var(--card))] border border-[hsl(var(--primary))]/10 shadow-2xl shadow-[hsl(var(--primary))]/5 overflow-hidden transition-colors duration-300">
                <canvas
                  ref={canvasRef}
                  className="absolute inset-0 w-full h-full"
                />

                {/* Floating Info Cards */}
                <div className="absolute top-6 left-6 bg-[hsl(var(--card))]/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-[hsl(var(--border))] shadow-lg transition-colors duration-300">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-xs font-semibold text-[hsl(var(--foreground))]">Network Active</span>
                  </div>
                </div>

                <div className="absolute top-6 right-6 bg-[hsl(var(--card))]/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-[hsl(var(--border))] shadow-lg transition-colors duration-300">
                  <div className="text-xs text-[hsl(var(--muted-foreground))]">Ping</div>
                  <div className="text-sm font-bold text-[hsl(var(--primary))]">19 ms</div>
                </div>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[hsl(var(--card))]/80 backdrop-blur-sm px-6 py-3 rounded-xl border border-[hsl(var(--border))] shadow-lg transition-colors duration-300">
                  <div className="text-xs text-[hsl(var(--muted-foreground))] text-center">Lintas Jaringan Nusantara Network</div>
                  <div className="text-sm font-semibold text-[hsl(var(--foreground))]">Terhubung ke infrastruktur fiber kami</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-bounce">
        <svg className="w-5 h-5 text-[hsl(var(--muted-foreground))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
        <span className="text-xs text-[hsl(var(--muted-foreground))]">Scroll untuk menjelajah</span>
      </div>
    </section>
  );
}
