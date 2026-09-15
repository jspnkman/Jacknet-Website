"use client";

import React, { useEffect, useRef } from "react";

interface NetworkCanvasProps {
  width?: number;
  height?: number;
  nodeCount?: number;
  lineDistance?: number;
}

export function NetworkCanvas({
  width = 500,
  height = 500,
  nodeCount = 40,
  lineDistance = 150,
}: NetworkCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const dpr = window.devicePixelRatio || 1;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let W = width;
    let H = height;

    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = W + "px";
    canvas.style.height = H + "px";

    const NODE_COUNT = nodeCount;
    const CONN_DIST = lineDistance;

    const nodes = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.5 + 0.6,
    }));

    const particles: {
      from: number;
      to: number;
      progress: number;
      speed: number;
    }[] = [];

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);

      for (const n of nodes) {
        if (!prefersReducedMotion) {
          n.x += n.vx; n.y += n.vy;
          if (n.x < 0 || n.x > W) n.vx *= -1;
          if (n.y < 0 || n.y > H) n.vy *= -1;
          n.x = Math.max(0, Math.min(W, n.x));
          n.y = Math.max(0, Math.min(H, n.y));
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONN_DIST) {
            const alpha = (1 - dist / CONN_DIST) * 0.18;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(37, 99, 235, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(37, 99, 235, ${0.3 + Math.random() * 0.2})`;
        ctx.fill();
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.progress += p.speed;
        if (p.progress >= 1) { particles.splice(i, 1); continue; }
        const a = nodes[p.from], b = nodes[p.to];
        const x = a.x + (b.x - a.x) * p.progress;
        const y = a.y + (b.y - a.y) * p.progress;
        const alpha = Math.sin(p.progress * Math.PI);
        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(37, 99, 235, ${alpha * 0.9})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = `rgba(37, 99, 235, ${alpha * 0.6})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      if (!prefersReducedMotion && Math.random() < 0.06) {
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

      animId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [width, height, nodeCount, lineDistance]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full pointer-events-none"
    />
  );
}