"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";

type Block = {
  ch: string;
  x: number; // px
  y: number; // px
  r: number; // deg
  s?: number; // scale
  fromX: number;
  fromY: number;
  fromR: number;
};

// Cover-style animation: letters fall and stack into the bottom-right corner.
export function PortfolioPoster({ year = "2026" }: { year?: string }) {
  const [cycle, setCycle] = useState(0);

  const blocks = useMemo<Block[]>(
    () => [
      // Final stack (for a ~520px square).
      { ch: "P", x: 270, y: 238, r: -28, s: 1.04, fromX: 320, fromY: -560, fromR: -120 },
      { ch: "O", x: 322, y: 182, r: -10, s: 1.0, fromX: 420, fromY: -720, fromR: 70 },
      { ch: "R", x: 372, y: 150, r: 10, s: 1.0, fromX: 360, fromY: -840, fromR: 140 },
      { ch: "T", x: 296, y: 312, r: -18, s: 1.02, fromX: 300, fromY: -680, fromR: -160 },
      { ch: "F", x: 350, y: 258, r: -2, s: 1.0, fromX: 260, fromY: -760, fromR: 110 },
      { ch: "O", x: 394, y: 222, r: 14, s: 1.0, fromX: 460, fromY: -650, fromR: 180 },
      { ch: "L", x: 338, y: 360, r: -8, s: 1.02, fromX: 340, fromY: -900, fromR: -130 },
      { ch: "I", x: 408, y: 318, r: 12, s: 1.0, fromX: 395, fromY: -620, fromR: 95 },
      { ch: "O", x: 426, y: 356, r: 20, s: 1.0, fromX: 520, fromY: -780, fromR: 160 },
    ],
    []
  );

  // Timing tuned to match the reference: letters settle first, then year and bar reveal.
  const letterStagger = 0.12;
  const letterDuration = 1.55;

  return (
    <div className="relative">
      <div
        className="relative aspect-square w-full max-w-[520px] overflow-hidden rounded-[28px] border border-paper-faint shadow-soft"
        onClick={() => setCycle((c) => c + 1)}
        role="button"
        tabIndex={0}
        aria-label="Replay cover animation"
      >
        {/* Blue cover */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_15%,#2b63ff_0%,#0a2bff_35%,#0617a8_72%,#040a52_100%)]" />

        {/* Subtle grain */}
        <div className="absolute inset-0 opacity-[0.14] mix-blend-overlay [background-image:repeating-linear-gradient(90deg,rgba(255,255,255,0.12)_0px,rgba(255,255,255,0.12)_1px,transparent_1px,transparent_3px)]" />

        {/* White base bar (reveals left-to-right and then stays) */}
        <motion.div
          className="absolute bottom-5 left-[150px] h-[18px] w-[260px] rounded-[6px] bg-white/95"
          style={{ originX: 0 }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 2.8,
            delay: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        {/* Year (reveals as a wipe, no pulsing) */}
        <div className="absolute bottom-5 left-5 overflow-hidden">
          <motion.div
            className="select-none font-mono text-[42px] font-semibold tracking-tightish text-white/95"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{
              duration: 0.9,
              delay: 2.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {year}
          </motion.div>
        </div>

        {/* Falling letters */}
        <div className="absolute inset-0">
          {blocks.map((b, i) => (
            <motion.div
              key={`${cycle}-${i}`}
              className="absolute select-none font-sans font-black leading-none text-white"
              style={{
                left: 0,
                top: 0,
                fontSize: 120,
                filter: "drop-shadow(0 22px 40px rgba(0,0,0,0.45))",
              }}
              initial={{
                x: b.fromX,
                y: b.fromY,
                rotate: b.fromR,
                opacity: 1,
                scale: 0.99,
              }}
              animate={{
                x: [b.fromX, b.x + 10, b.x],
                y: [b.fromY, b.y - 14, b.y + 10, b.y],
                rotate: [b.fromR, b.r + 8, b.r - 3, b.r],
                scale: b.s ?? 1,
              }}
              transition={{
                duration: letterDuration,
                delay: i * letterStagger,
                times: [0, 0.78, 0.9, 1],
                ease: [0.16, 0.92, 0.2, 1],
              }}
            >
              {b.ch}
            </motion.div>
          ))}
        </div>

        {/* White inner border */}
        <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/20" />
      </div>
    </div>
  );
}
