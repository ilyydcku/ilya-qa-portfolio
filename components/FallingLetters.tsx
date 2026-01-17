"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

type Glyph = {
  ch: string;
  xPct: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
};

// Deterministic pseudo-random (stable between renders) to avoid hydration mismatches.
function prng(n: number) {
  const x = Math.sin(n * 999) * 10000;
  return x - Math.floor(x);
}

export function FallingLetters({ word = "PORTFOLIO" }: { word?: string }) {
  const glyphs = useMemo<Glyph[]>(() => {
    const chars = word.split("");
    const out: Glyph[] = [];
    // 24 glyphs feels “alive” but not noisy.
    for (let i = 0; i < 24; i++) {
      const r1 = prng(i + 1);
      const r2 = prng(i + 11);
      const r3 = prng(i + 101);
      out.push({
        ch: chars[i % chars.length],
        xPct: 5 + r1 * 90,
        delay: r2 * 3.5,
        duration: 7 + r3 * 6,
        size: 26 + prng(i + 77) * 42,
        opacity: 0.08 + prng(i + 177) * 0.12,
      });
    }
    return out;
  }, [word]);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {glyphs.map((g, idx) => (
        <motion.span
          key={idx}
          className="absolute top-[-80px] font-mono tracking-tightish text-paper-ink"
          style={{
            left: `${g.xPct}%`,
            fontSize: `${g.size}px`,
            opacity: g.opacity,
            textShadow: "0 10px 50px rgba(0,0,0,0.55)",
          }}
          initial={{ y: -80, rotate: -6 }}
          animate={{
            y: [ -80, 720 ],
            rotate: [-6, 6],
            opacity: [g.opacity, g.opacity * 0.9, g.opacity],
          }}
          transition={{
            duration: g.duration,
            delay: g.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {g.ch}
        </motion.span>
      ))}

      {/* soft vignette so letters blend into the dark */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.55)_70%,rgba(0,0,0,0.85)_100%)]" />
    </div>
  );
}
