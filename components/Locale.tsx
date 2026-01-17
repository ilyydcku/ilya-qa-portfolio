"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function useLocale() {
  const params = useSearchParams();
  const locale = (params.get("lang") === "en" ? "en" : "ru") as "ru" | "en";
  return locale;
}

export function LocaleSwitch() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const current = params.get("lang") === "en" ? "en" : "ru";
  const next = current === "ru" ? "en" : "ru";

  const onToggle = () => {
    const sp = new URLSearchParams(params.toString());
    sp.set("lang", next);
    router.push(`${pathname}?${sp.toString()}`);
  };

  return (
    <button
      onClick={onToggle}
      className="rounded-full border border-paper-faint px-3 py-1 text-xs font-mono tracking-tightish text-paper-dim hover:text-paper-ink hover:border-paper-dim transition"
      aria-label="Switch language"
    >
      {current.toUpperCase()} → {next.toUpperCase()}
    </button>
  );
}
