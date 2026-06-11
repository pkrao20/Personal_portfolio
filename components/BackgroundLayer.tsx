"use client";

import { useEffect, useRef } from "react";

/* Animated canvas dot grid — client only */
function DotCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const SPACING = 28;
    const BASE_RADIUS = 0.9;
    let frame = 0;
    let raf: number;

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = document.documentElement.scrollHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cols = Math.ceil(canvas.width / SPACING);
      const rows = Math.ceil(canvas.height / SPACING);

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * SPACING + SPACING / 2;
          const y = r * SPACING + SPACING / 2;
          // gentle ripple: each dot's brightness shifts over time
          const wave = Math.sin(frame * 0.012 + c * 0.4 + r * 0.3) * 0.5 + 0.5;
          const alpha = 0.04 + wave * 0.08;
          const radius = BASE_RADIUS + wave * 0.5;
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255,${alpha.toFixed(3)})`;
          ctx.fill();
        }
      }
      frame++;
      raf = requestAnimationFrame(draw);
    }

    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}

/* Static glow orbs — no JS needed */
function GlowOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
      {/* Top-left indigo blob */}
      <div
        className="glow-orb absolute rounded-full"
        style={{
          width: 600,
          height: 600,
          top: -200,
          left: -150,
          background:
            "radial-gradient(circle at center, rgba(99,102,241,0.18) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      {/* Center-right violet blob */}
      <div
        className="glow-orb-slow absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          top: "30%",
          right: -100,
          background:
            "radial-gradient(circle at center, rgba(139,92,246,0.14) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />
      {/* Bottom-left teal accent */}
      <div
        className="glow-orb absolute rounded-full"
        style={{
          width: 420,
          height: 420,
          bottom: "10%",
          left: "10%",
          background:
            "radial-gradient(circle at center, rgba(20,184,166,0.10) 0%, transparent 70%)",
          filter: "blur(60px)",
          animationDelay: "4s",
        }}
      />
    </div>
  );
}

export default function BackgroundLayer() {
  return (
    <>
      <DotCanvas />
      <GlowOrbs />
    </>
  );
}
