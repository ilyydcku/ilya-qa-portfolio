import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";
import type { Locale } from "@/content/profile";

export function ProjectCard({
  p,
  lang,
  langQ,
}: {
  p: Project;
  lang: Locale;
  langQ: string;
}) {
  return (
    <Link
      href={`/work/${p.slug}${langQ}`}
      className="group relative grid grid-cols-1 gap-5 rounded-2xl border border-paper-faint bg-[#0A0A0F] p-6 transition hover:border-paper-dim hover:bg-[#0E0E16] focus:outline-none focus-visible:ring-2 focus-visible:ring-paper-dim sm:grid-cols-[220px_1fr]"
    >
      <div className="relative overflow-hidden rounded-xl2 border border-paper-faint bg-[#07070A]">
        <div className="relative aspect-[4/3]">
          <Image
            src={p.cover.src}
            alt={p.cover.alt[lang]}
            fill
            className="object-cover transition duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 640px) 100vw, 220px"
            priority={false}
          />
        </div>
      </div>

      <div className="min-w-0">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tightish group-hover:underline underline-offset-8">
            {p.title[lang]}
          </h3>
          <span className="shrink-0 text-xs font-mono text-paper-dim">{p.year}</span>
        </div>

        <p className="mt-3 text-paper-dim">{p.intro[lang]}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-paper-faint bg-[#07070A] px-3 py-1 text-xs font-mono text-paper-dim"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
