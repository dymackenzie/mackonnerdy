import type { Metadata } from "next";
import { Placeholder } from "@/components/Placeholder";
import { Reveal } from "@/components/Reveal";
import { Container, CTA, Eyebrow } from "@/components/ui";
import { journey } from "@/content/journey";
import { results } from "@/content/results";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mackonner Dy's journey from the community courts of British Columbia to the professional pickleball world stage — plus results and rankings.",
};

export default function AboutPage() {
  return (
    <>
      {/* ---------- PAGE HEADER ---------- */}
      <header className="relative z-10 overflow-hidden bg-ink text-paper">
        <Container className="pb-20 pt-40 md:pb-28 md:pt-48">
          <Eyebrow className="text-gold">{journey.eyebrow}</Eyebrow>
          <h1 className="display-xl mt-6 max-w-4xl text-paper-bright">
            {journey.title}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper/70">
            {journey.lede}
          </p>
        </Container>
      </header>

      {/* ---------- PHASE CARDS ---------- */}
      <section className="relative z-10 bg-paper">
        <Container className="py-24 md:py-32">
          <div className="grid gap-10 md:grid-cols-3">
            {journey.phases.map((phase, i) => (
              <Reveal
                key={phase.tag}
                delay={i * 120}
                as="article"
                className="group flex flex-col"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                  <Placeholder
                    src={phase.image}
                    label={phase.tag}
                    tone="dark"
                    className="h-full w-full transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-ink">
                    0{i + 1}
                  </span>
                </div>
                <Eyebrow className="mt-6 text-gold">{phase.tag}</Eyebrow>
                <h2 className="mt-4 font-display text-2xl leading-tight text-ink">
                  {phase.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-ink/70">
                  {phase.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- PULL QUOTE ---------- */}
      <section className="relative z-10 bg-paper-bright">
        <Container className="py-20 md:py-28">
          <Reveal className="mx-auto max-w-4xl text-center">
            <span className="font-display text-6xl leading-none text-gold">“</span>
            <p className="display-lg -mt-6 text-ink">{journey.pullQuote}</p>
          </Reveal>
        </Container>
      </section>

      {/* ---------- NARRATIVE CHAPTERS ---------- */}
      <section className="relative z-10 bg-paper">
        <Container className="py-24 md:py-32">
          <div className="mx-auto max-w-3xl">
            {journey.chapters.map((c, i) => (
              <Reveal
                key={c.heading}
                delay={i * 80}
                className="border-t border-ink/10 py-12 first:border-t-0 first:pt-0"
              >
                <h3 className="display-lg text-ink">{c.heading}</h3>
                <p className="mt-6 text-lg leading-relaxed text-ink/75">
                  {c.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- RESULTS & RANKINGS ---------- */}
      <section
        id="results"
        className="relative z-10 scroll-mt-24 bg-ink text-paper"
      >
        <Container className="py-24 md:py-32">
          <Reveal>
            <Eyebrow className="text-gold">{results.eyebrow}</Eyebrow>
            <h2 className="display-lg mt-6 text-paper-bright">{results.title}</h2>
          </Reveal>

          {/* Ranking highlights */}
          <Reveal delay={100} className="mt-14 grid gap-px overflow-hidden rounded-sm border border-paper/10 bg-paper/10 sm:grid-cols-3">
            {results.rankings.map((r) => (
              <div key={r.label} className="bg-ink p-8">
                <p className="font-display text-4xl text-gold-bright">{r.value}</p>
                <p className="mt-3 text-sm text-paper/60">{r.label}</p>
              </div>
            ))}
          </Reveal>

          {/* Tournament table */}
          <Reveal delay={160} className="mt-14">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-paper/20">
                    {["Event", "Discipline", "Location", "Date", "Result"].map(
                      (h) => (
                        <th
                          key={h}
                          className="eyebrow whitespace-nowrap py-4 pr-6 text-paper/45"
                        >
                          {h}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {results.tournaments.map((t) => (
                    <tr
                      key={`${t.event}-${t.surface}`}
                      className="border-b border-paper/10 transition-colors hover:bg-paper/[0.03]"
                    >
                      <td className="py-5 pr-6 font-display text-xl text-paper">
                        {t.event}
                      </td>
                      <td className="py-5 pr-6 text-sm text-paper/60">
                        {t.surface}
                      </td>
                      <td className="py-5 pr-6 text-sm text-paper/60">
                        {t.location}
                      </td>
                      <td className="py-5 pr-6 text-sm text-paper/60">{t.date}</td>
                      <td className="py-5 pr-6">
                        <span className="rounded-full bg-gold/15 px-3 py-1 text-sm font-semibold text-gold-bright">
                          {t.result}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-xs italic text-paper/35">{results.note}</p>
          </Reveal>

          <Reveal delay={220} className="mt-14">
            <CTA
              href="/contact"
              variant="solid"
              className="bg-gold text-ink hover:bg-gold-bright"
            >
              Work With Mackonner
            </CTA>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
