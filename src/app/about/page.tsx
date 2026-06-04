import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
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
      <PageHeader
        eyebrow={journey.eyebrow}
        title={journey.title}
        lede={journey.lede}
        watermark="Journey"
        edgeLabel="The Making of a Champion"
      />

      {/* ---------- PHASE CARDS (staggered) ---------- */}
      <section className="relative z-10 overflow-x-clip bg-paper tex-warm">
        <Container className="py-14 md:py-20">
          <div className="grid gap-x-10 gap-y-14 md:grid-cols-3">
            {journey.phases.map((phase, i) => {
              // descending staircase offset for an editorial, asymmetric feel
              const offset = ["md:mt-0", "md:mt-16", "md:mt-32"][i] ?? "md:mt-0";
              return (
                <Reveal
                  key={phase.tag}
                  delay={i * 120}
                  as="article"
                  className={`group flex flex-col ${offset}`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                    <Placeholder
                      src={phase.image}
                      label={phase.tag}
                      tone="dark"
                      className="h-full w-full transition-transform duration-700 group-hover:scale-105"
                    />
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -bottom-2 left-3 select-none font-display text-7xl leading-none text-outline text-paper/70"
                    >
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
              );
            })}
          </div>
        </Container>
      </section>

      {/* ---------- PULL QUOTE ---------- */}
      <section className="relative z-10 bg-paper-bright tex-warm">
        <Container className="py-12 md:py-16">
          <Reveal className="mx-auto max-w-4xl text-center">
            <span className="font-display text-6xl leading-none text-gold">“</span>
            <p className="display-lg -mt-6 text-ink">{journey.pullQuote}</p>
          </Reveal>
        </Container>
      </section>

      {/* ---------- NARRATIVE CHAPTERS (alternating) ---------- */}
      <section className="relative z-10 overflow-x-clip bg-paper tex-warm">
        <Container className="py-14 md:py-20">
          <div className="flex flex-col gap-12 md:gap-16">
            {journey.chapters.map((c, i) => {
              const flip = i % 2 === 1;
              return (
                <Reveal
                  key={c.heading}
                  delay={i * 80}
                  className="grid items-start gap-6 md:grid-cols-12"
                >
                  {/* oversized outlined index */}
                  <div
                    className={`relative md:col-span-2 ${
                      flip ? "md:order-2 md:col-start-11" : ""
                    }`}
                  >
                    <span
                      aria-hidden
                      className="select-none font-display text-7xl leading-none text-outline text-gold opacity-60 md:text-8xl"
                    >
                      0{i + 1}
                    </span>
                  </div>
                  <div
                    className={`md:col-span-7 ${
                      flip
                        ? "md:order-1 md:col-start-2 md:text-right"
                        : "md:col-start-4"
                    }`}
                  >
                    <h3 className="display-lg text-ink">{c.heading}</h3>
                    <p
                      className={`mt-6 text-lg leading-relaxed text-ink/75 ${
                        flip ? "md:ml-auto" : ""
                      } md:max-w-xl`}
                    >
                      {c.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ---------- RESULTS & RANKINGS ---------- */}
      <section
        id="results"
        className="panel-soft relative z-10 scroll-mt-24 bg-ink tex-dark text-paper"
      >
        <Container className="py-14 md:py-20">
          <Reveal>
            <Eyebrow className="text-gold">{results.eyebrow}</Eyebrow>
            <h2 className="display-lg mt-6 text-paper-bright">{results.title}</h2>
          </Reveal>

          {/* Ranking highlights */}
          <Reveal delay={100} className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-paper/10 bg-paper/10 sm:grid-cols-3">
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
              className="bg-volt text-ink hover:bg-volt-bright"
            >
              Work With Mackonner
            </CTA>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
