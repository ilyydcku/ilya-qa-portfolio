import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { getProject, projects } from "@/content/projects";
import { ImageGrid } from "@/components/ImageGrid";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { lang?: string };
}) {
  const lang = searchParams?.lang === "en" ? "en" : "ru";
  const langQ = lang === "en" ? "?lang=en" : "";
  const p = getProject(params.slug);
  if (!p) return notFound();

  const idx = projects.findIndex((x) => x.slug === p.slug);
  const prev = idx > 0 ? projects[idx - 1] : null;
  const next = idx < projects.length - 1 ? projects[idx + 1] : null;

  const t = {
    ru: { back: "Назад к списку", next: "Следующий", prev: "Предыдущий" },
    en: { back: "Back to list", next: "Next", prev: "Previous" },
  }[lang];

  return (
    <main>
      <section className="py-14 sm:py-20">
        <Container>
          <Reveal>
            <Link href={`/work${langQ}`} className="text-sm text-paper-dim hover:text-paper-ink transition underline-offset-4 hover:underline">
              ← {t.back}
            </Link>

            <div className="mt-6 flex items-start justify-between gap-4">
              <h1 className="text-3xl sm:text-5xl font-semibold tracking-tightish leading-[1.06]">
                {p.title[lang]}
              </h1>
              <span className="text-xs font-mono text-paper-dim mt-2">{p.year}</span>
            </div>

            <p className="mt-4 max-w-3xl text-lg text-paper-dim">{p.intro[lang]}</p>

            <div className="mt-8 grid gap-8 sm:grid-cols-3 border-t border-paper-faint pt-8">
              <div>
                <p className="text-xs font-mono text-paper-dim">Role</p>
                <p className="mt-2">{p.role[lang]}</p>
              </div>
              <div className="sm:col-span-2">
                <p className="text-xs font-mono text-paper-dim">Highlights</p>
                <ul className="mt-2 list-disc pl-5 text-paper-dim">
                  {p.bullets[lang].map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <div className="mt-10">
            <Reveal delay={0.08}>
              <ImageGrid items={p.gallery} lang={lang} />
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="mt-12 flex items-center justify-between border-t border-paper-faint pt-8">
              {prev ? (
                <Link href={`/work/${prev.slug}${langQ}`} className="text-paper-dim hover:text-paper-ink transition underline-offset-4 hover:underline">
                  ← {t.prev}
                </Link>
              ) : <span />}
              {next ? (
                <Link href={`/work/${next.slug}${langQ}`} className="text-paper-dim hover:text-paper-ink transition underline-offset-4 hover:underline">
                  {t.next} →
                </Link>
              ) : <span />}
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
