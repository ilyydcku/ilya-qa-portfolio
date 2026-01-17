import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { profile } from "@/content/profile";

export default function Contact({ searchParams }: { searchParams?: { lang?: string } }) {
  const lang = searchParams?.lang === "en" ? "en" : "ru";
  const t = {
    ru: {
      h: "Contact",
      sub: "Открыт к предложениям на полную занятость. Быстрее всего отвечаю по телефону или почте.",
      labels: { email: "Email", phone: "Телефон", note: "Заметка" },
      note: "Если пришлёте ссылку на вакансию — отвечу с коротким фидбеком по релевантности и срокам.",
    },
    en: {
      h: "Contact",
      sub: "Open to full‑time roles. Fastest via phone or email.",
      labels: { email: "Email", phone: "Phone", note: "Note" },
      note: "Send a job link — I’ll reply with quick feedback on fit and timelines.",
    },
  }[lang];

  return (
    <main>
      <section className="py-14 sm:py-20">
        <Container>
          <Reveal>
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tightish">{t.h}</h1>
            <p className="mt-4 max-w-2xl text-paper-dim text-lg">{t.sub}</p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            <Reveal>
              <div className="rounded-2xl border border-paper-faint p-7 bg-[#0A0A0F]">
                <p className="text-xs font-mono text-paper-dim">{t.labels.email}</p>
                <a className="mt-3 inline-block hover:underline underline-offset-4" href={`mailto:${profile.contacts.email}`}>
                  {profile.contacts.email}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="rounded-2xl border border-paper-faint p-7 bg-[#0A0A0F]">
                <p className="text-xs font-mono text-paper-dim">{t.labels.phone}</p>
                <a className="mt-3 inline-block hover:underline underline-offset-4" href={`tel:${profile.contacts.phone.replace(/\s/g, "")}`}>
                  {profile.contacts.phone}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-paper-faint p-7 bg-[#0A0A0F]">
                <p className="text-xs font-mono text-paper-dim">{t.labels.note}</p>
                <p className="mt-3 text-paper-dim">{t.note}</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </main>
  );
}
