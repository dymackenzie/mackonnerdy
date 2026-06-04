import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { Placeholder } from "@/components/Placeholder";
import { Reveal } from "@/components/Reveal";
import { Chapter, Container, CTA } from "@/components/ui";
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

      {/* ---------- 01 · PHASE CARDS (staggered) ---------- */}
      <section className="relative z-10 overflow-x-clip border-t border-ink/10 bg-paper tex-warm">
        <Container className="py-14 md:py-20">
          <Chapter index="01" title="Origins" />
          <div className="mt-12 grid gap-x-10 gap-y-14 md:grid-cols-3">
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
                  <div className="relative aspect-[4/5] overflow-hidden">
                    {phase.image ? (
                      <Image
                        src={phase.image}
                        alt={phase.title}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <Placeholder
                        label={phase.tag}
                        tone="dark"
                        className="h-full w-full transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -bottom-2 left-3 select-none font-display text-6xl leading-none text-outline text-paper/70"
                    >
                      0{i + 1}
                    </span>
                  </div>
                  <p className="eyebrow mt-5 text-gold">{phase.tag}</p>
                  <h2 className="mt-3 font-display text-xl leading-tight text-ink">
                    {phase.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">
                    {phase.body}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ---------- 02 · PULL QUOTE ---------- */}
      <section className="relative z-10 border-t border-ink/10 bg-paper tex-warm">
        <Container className="py-14 md:py-16">
          <Chapter index="02" title="In His Words" />
          <Reveal className="mx-auto mt-8 max-w-4xl text-center">
            <span className="font-display text-5xl leading-none text-gold">“</span>
            <p className="display-lg -mt-5 text-ink">{journey.pullQuote}</p>
          </Reveal>
        </Container>
      </section>

      {/* ---------- 03 · NARRATIVE CHAPTERS (alternating) ---------- */}
      <section className="relative z-10 overflow-x-clip border-t border-ink/10 bg-paper tex-warm">
        <Container className="py-14 md:py-20">
          <Chapter index="03" title="The Climb" />
          <div className="mt-12 flex flex-col gap-12 md:gap-16">
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
                      className="select-none font-display text-6xl leading-none text-outline text-gold opacity-60 md:text-7xl"
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
                      className={`mt-5 text-base leading-relaxed text-ink/75 ${
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

      {/* ---------- 04 · RESULTS & RANKINGS ---------- */}
      <section
        id="results"
        className="relative z-10 scroll-mt-24 border-t border-ink/10 bg-paper tex-warm"
      >
        <Container className="py-14 md:py-20">
          <Chapter index="04" title={results.eyebrow} />
          <Reveal>
            <h2 className="display-lg mt-8 text-ink">{results.title}</h2>
          </Reveal>

          {/* Ranking highlights */}
          <Reveal delay={100} className="mt-12 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-3">
            {results.rankings.map((r) => (
              <div key={r.label} className="bg-paper-bright/70 p-7">
                <p className="font-display text-3xl text-ink">{r.value}</p>
                <p className="mt-2 text-sm text-ink/60">{r.label}</p>
              </div>
            ))}
          </Reveal>

          {/* Tournament table */}
          <Reveal delay={160} className="mt-12">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-ink/20">
                    {["Event", "Discipline", "Location", "Date", "Result"].map(
                      (h) => (
                        <th
                          key={h}
                          className="eyebrow whitespace-nowrap py-4 pr-6 text-ink/45"
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
                      className="border-b border-ink/10 transition-colors hover:bg-ink/[0.03]"
                    >
                      <td className="py-4 pr-6 font-display text-lg text-ink">
                        {t.event}
                      </td>
                      <td className="py-4 pr-6 text-sm text-ink/60">
                        {t.surface}
                      </td>
                      <td className="py-4 pr-6 text-sm text-ink/60">
                        {t.location}
                      </td>
                      <td className="py-4 pr-6 text-sm text-ink/60">{t.date}</td>
                      <td className="py-4 pr-6">
                        <span className="bg-gold/15 px-3 py-1 text-sm font-semibold text-gold">
                          {t.result}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-xs italic text-ink/40">{results.note}</p>
          </Reveal>

          <Reveal delay={220} className="mt-12">
            <CTA href="/contact" variant="solid">
              Work With Mackonner
            </CTA>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
