import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";

export default function Work({ searchParams }: { searchParams?: { lang?: string } }) {
  const lang = searchParams?.lang === "en" ? "en" : "ru";
  const langQ = lang === "en" ? "?lang=en" : "";
  const t = {
    ru: { h: "Work", sub: "4 кейса из коммерческого опыта: web, API, data, релизный регресс." },
    en: { h: "Work", sub: "4 case studies from commercial experience: web, API, data, release regression." },
  }[lang];

  return (
    <main>
      <section className="py-14 sm:py-20">
        <Container>
          <Reveal>
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tightish">{t.h}</h1>
            <p className="mt-4 max-w-2xl text-paper-dim text-lg">{t.sub}</p>
          </Reveal>

          <div className="mt-10 grid gap-5">
            {projects.map((p, idx) => (
              <Reveal key={p.slug} delay={0.05 * idx}>
                <ProjectCard p={p} lang={lang} langQ={langQ} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
