import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Chapter, Container, CTA, Eyebrow } from "@/components/ui";
import { coaching } from "@/content/coaching";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Coaching / Clinics",
  description:
    "Private coaching, group clinics, and appearances with Canadian pickleball champion Mackonner Dy.",
  alternates: { canonical: "/coaching" },
};

export default function CoachingPage() {
  return (
    <>
      <PageHeader
        eyebrow={coaching.eyebrow}
        title={coaching.title}
        lede={coaching.lede}
        watermark="Train"
        edgeLabel="Coaching & Clinics"
      />

      {/* ---------- 01 · OFFERINGS ---------- */}
      <section className="relative z-10 border-t border-ink/10 bg-paper tex-warm">
        <Container className="py-14 md:py-20">
          <Chapter index="01" title="What's On Offer" />
          <div className="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-3">
            {coaching.offerings.map((o, i) => {
              const offset = ["md:mt-0", "md:mt-12", "md:mt-24"][i] ?? "md:mt-0";
              return (
                <Reveal
                  key={o.title}
                  delay={i * 100}
                  className={`card-sheen flex flex-col gap-4 border border-ink/10 bg-paper-bright/70 p-7 md:p-8 ${offset}`}
                >
                  <span
                    aria-hidden
                    className="select-none font-display text-5xl leading-none text-outline text-gold opacity-70"
                  >
                    0{i + 1}
                  </span>
                  <h2 className="font-display text-xl leading-tight text-ink">
                    {o.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-ink/70">{o.body}</p>
                </Reveal>
              );
            })}
          </div>

          {/* audience */}
          <Reveal className="mt-16 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <Eyebrow className="text-ink/50">Who It&apos;s For</Eyebrow>
              <ul className="mt-5 flex flex-wrap gap-2">
                {coaching.audience.map((a) => (
                  <li
                    key={a}
                    className="border border-ink/20 px-4 py-2 text-sm text-ink/75"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ---------- 02 · CTA BAND ---------- */}
      <section className="relative z-10 border-t border-ink/10 bg-paper tex-warm">
        <Container className="py-16 md:py-20">
          <Chapter index="02" title="Book Mackonner" />
          <Reveal className="mt-10 text-center">
            <p className="font-display text-base italic text-gold">
              {site.tagline}
            </p>
            <h2 className="display-lg mx-auto mt-5 max-w-2xl text-ink">
              Bring a champion&apos;s mindset to your court.
            </h2>
            <div className="mt-9 flex justify-center">
              <CTA href="/contact" variant="solid">
                Book a Session
              </CTA>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
