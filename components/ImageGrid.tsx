"use client";

import Image from "next/image";
import type { Locale } from "@/content/profile";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useState } from "react";

type Item = { src: string; alt: Record<Locale, string>; caption?: Record<Locale, string> };

export function ImageGrid({ items, lang }: { items: Item[]; lang: Locale }) {
  const [active, setActive] = useState<number | null>(null);

  const activeItem = useMemo(() => (active === null ? null : items[active] ?? null), [active, items]);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(() => setActive((i) => (i === null ? null : (i - 1 + items.length) % items.length)), [items.length]);
  const next = useCallback(() => setActive((i) => (i === null ? null : (i + 1) % items.length)), [items.length]);

  useEffect(() => {
    if (active === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active, close, prev, next]);

  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {items.map((it, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActive(idx)}
            className="group text-left rounded-2xl border border-paper-faint overflow-hidden bg-[#0A0A0F] hover:border-paper-dim transition shadow-soft"
            aria-label={lang === "ru" ? "Открыть изображение" : "Open image"}
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={it.src}
                alt={it.alt[lang]}
                fill
                className="object-cover group-hover:scale-[1.01] transition"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            {it.caption?.[lang] ? (
              <div className="px-4 py-3 text-xs font-mono text-paper-dim flex items-center justify-between gap-3">
                <span>{it.caption[lang]}</span>
                <span className="opacity-60">↗</span>
              </div>
            ) : null}
          </button>
        ))}
      </div>

      <AnimatePresence>
        {activeItem ? (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
          >
            <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-10">
              <motion.div
                className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-paper-faint bg-[#0A0A0F] shadow-soft"
                initial={{ y: 12, opacity: 0, scale: 0.98 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 12, opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative aspect-[16/10]">
                  <Image src={activeItem.src} alt={activeItem.alt[lang]} fill className="object-contain" sizes="100vw" priority />
                </div>

                <div className="flex items-center justify-between gap-3 border-t border-paper-faint px-4 py-3">
                  <div className="text-xs font-mono text-paper-dim truncate">
                    {activeItem.caption?.[lang] ?? (lang === "ru" ? "Просмотр" : "Preview")}
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={prev}
                      className="rounded-full border border-paper-faint px-3 py-1 text-xs font-mono text-paper-dim hover:text-paper-ink hover:border-paper-dim transition"
                    >
                      ←
                    </button>
                    <button
                      type="button"
                      onClick={next}
                      className="rounded-full border border-paper-faint px-3 py-1 text-xs font-mono text-paper-dim hover:text-paper-ink hover:border-paper-dim transition"
                    >
                      →
                    </button>
                    <button
                      type="button"
                      onClick={close}
                      className="rounded-full border border-paper-faint px-3 py-1 text-xs font-mono text-paper-dim hover:text-paper-ink hover:border-paper-dim transition"
                    >
                      {lang === "ru" ? "Закрыть" : "Close"}
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
