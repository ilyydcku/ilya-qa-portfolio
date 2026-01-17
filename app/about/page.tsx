import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { profile } from "@/content/profile";

export default function About({ searchParams }: { searchParams?: { lang?: string } }) {
  const lang = searchParams?.lang === "en" ? "en" : "ru";
  const t = {
    ru: {
      h: "About",
      sub: "Коротко и по делу: как работаю, чем силён, какой стек.",
      blocks: { summary: "Профиль", tools: "Инструменты", skills: "Навыки", edu: "Образование" },
      cv: "Скачать CV (PDF)",
    },
    en: {
      h: "About",
      sub: "Straight to the point: how I work, strengths, and toolkit.",
      blocks: { summary: "Profile", tools: "Tools", skills: "Skills", edu: "Education" },
      cv: "Download CV (PDF)",
    },
  }[lang];

  return (
    <main>
      <section className="py-14 sm:py-20">
        <Container>
          <Reveal>
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tightish">{t.h}</h1>
            <p className="mt-4 max-w-2xl text-paper-dim text-lg">{t.sub}</p>
            <a href="/cv.pdf" className="mt-6 inline-flex rounded-2xl border border-paper-faint px-5 py-3 text-sm text-paper-dim hover:text-paper-ink hover:border-paper-dim transition">
              {t.cv}
            </a>
          </Reveal>

          <div className="mt-12 grid gap-10">
            <Reveal>
              <div className="rounded-2xl border border-paper-faint p-7 bg-[#0A0A0F]">
                <p className="text-xs font-mono text-paper-dim">{t.blocks.summary}</p>
                <div className="mt-3 prose-like text-paper-dim">
                  {profile.summary[lang].map((s) => (
                    <p key={s}>{s}</p>
                  ))}
                </div>
              </div>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2">
              <Reveal>
                <div className="rounded-2xl border border-paper-faint p-7 bg-[#0A0A0F] h-full">
                  <p className="text-xs font-mono text-paper-dim">{t.blocks.tools}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {profile.tools.map((tool) => (
                      <span key={tool} className="rounded-full border border-paper-faint px-3 py-1 text-xs font-mono text-paper-dim">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <div className="rounded-2xl border border-paper-faint p-7 bg-[#0A0A0F] h-full">
                  <p className="text-xs font-mono text-paper-dim">{t.blocks.edu}</p>
                  <p className="mt-4 text-paper-dim">{profile.education[lang]}</p>
                  <p className="mt-3 text-xs font-mono text-paper-dim">{profile.languages[lang]}</p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.08}>
              <div className="rounded-2xl border border-paper-faint p-7 bg-[#0A0A0F]">
                <p className="text-xs font-mono text-paper-dim">{t.blocks.skills}</p>
                <div className="mt-5 grid gap-6 sm:grid-cols-2">
                  {profile.skills.map((s) => (
                    <div key={s.label[lang]}>
                      <p className="font-semibold">{s.label[lang]}</p>
                      <ul className="mt-2 list-disc pl-5 text-paper-dim">
                        {s.items.map((it) => (
                          <li key={it}>{it}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </main>
  );
}
