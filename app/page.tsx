import Link from "next/link";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { PortfolioPoster } from "@/components/PortfolioPoster";
import { profile } from "@/content/profile";

export default function Home({ searchParams }: { searchParams?: { lang?: string } }) {
  const lang = searchParams?.lang === "en" ? "en" : "ru";
  const langQ = lang === "en" ? "?lang=en" : "";

  const t = {
    ru: {
      lead:
        "Тестирую продукт так, чтобы баги не доходили до пользователей. Web, API и данные — от smoke до регресса и релиза.",
      cta1: "Смотреть кейсы",
      cta2: "Скачать CV (PDF)",
      meta: "QA / Web · API · Data · Scrum",
    },
    en: {
      lead:
        "I test products so bugs don't reach users. Web, API and data — from smoke to regression and release.",
      cta1: "View work",
      cta2: "Download CV (PDF)",
      meta: "QA / Web · API · Data · Scrum",
    },
  }[lang];

  return (
    <main>
      <section className="relative py-14 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="grid gap-10">
              <Reveal>
                <p className="text-xs font-mono text-paper-dim">{t.meta}</p>
                <h1 className="mt-4 text-4xl sm:text-6xl font-semibold tracking-tightish leading-[1.05]">
                  {profile.name}
                  <span className="block text-paper-dim font-normal">{profile.role[lang]}</span>
                </h1>
              </Reveal>

              <Reveal delay={0.08}>
                <p className="max-w-2xl text-lg sm:text-xl text-paper-dim prose-like">{t.lead}</p>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link
                    href={`/work${langQ}`}
                    className="inline-flex items-center justify-center rounded-2xl border border-paper-dim bg-[#0A0A0F] px-6 py-3 text-sm hover:bg-[#0E0E16] transition shadow-soft"
                  >
                    {t.cta1}
                  </Link>
                  <a
                    href="/cv.pdf"
                    className="inline-flex items-center justify-center rounded-2xl border border-paper-faint px-6 py-3 text-sm text-paper-dim hover:text-paper-ink hover:border-paper-dim transition"
                  >
                    {t.cta2}
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="grid gap-8 sm:grid-cols-3 border-t border-paper-faint pt-8">
                  <div>
                    <p className="text-xs font-mono text-paper-dim">Location</p>
                    <p className="mt-2">{profile.location[lang]}</p>
                  </div>
                  <div>
                    <p className="text-xs font-mono text-paper-dim">Email</p>
                    <a className="mt-2 inline-block hover:underline underline-offset-4" href={`mailto:${profile.contacts.email}`}>
                      {profile.contacts.email}
                    </a>
                  </div>
                  <div>
                    <p className="text-xs font-mono text-paper-dim">Phone</p>
                    <a className="mt-2 inline-block hover:underline underline-offset-4" href={`tel:${profile.contacts.phone.replace(/\s/g, "")}`}>
                      {profile.contacts.phone}
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.06}>
              <div className="lg:pt-2">
                <PortfolioPoster year="2026" />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </main>
  );
}
