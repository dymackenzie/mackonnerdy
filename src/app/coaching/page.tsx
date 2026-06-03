import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { Container, CTA, Eyebrow } from "@/components/ui";
import { coaching } from "@/content/coaching";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Coaching / Clinics",
  description:
    "Private coaching, group clinics, and appearances with Canadian pickleball champion Mackonner Dy.",
};

export default function CoachingPage() {
  return (
    <>
      <header className="relative z-10 bg-ink text-paper">
        <Container className="pb-20 pt-40 md:pb-28 md:pt-48">
          <Eyebrow className="text-gold">{coaching.eyebrow}</Eyebrow>
          <h1 className="display-xl mt-6 max-w-4xl text-paper-bright">
            {coaching.title}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper/70">
            {coaching.lede}
          </p>
        </Container>
      </header>

      {/* offerings */}
      <section className="relative z-10 bg-paper">
        <Container className="py-24 md:py-32">
          <div className="grid gap-px overflow-hidden rounded-sm border border-ink/10 bg-ink/10 md:grid-cols-3">
            {coaching.offerings.map((o, i) => (
              <Reveal
                key={o.title}
                delay={i * 100}
                className="flex flex-col gap-6 bg-paper p-8 md:p-10"
              >
                <span className="font-display text-5xl text-gold">0{i + 1}</span>
                <h2 className="font-display text-2xl leading-tight text-ink">
                  {o.title}
                </h2>
                <p className="text-sm leading-relaxed text-ink/70">{o.body}</p>
              </Reveal>
            ))}
          </div>

          {/* audience */}
          <Reveal className="mt-16 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <Eyebrow className="text-ink/50">Who It&apos;s For</Eyebrow>
              <ul className="mt-5 flex flex-wrap gap-2">
                {coaching.audience.map((a) => (
                  <li
                    key={a}
                    className="rounded-full border border-ink/20 px-4 py-2 text-sm text-ink/75"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* CTA band */}
      <section className="relative z-10 bg-ink text-paper">
        <Container className="py-24 text-center md:py-32">
          <Reveal>
            <p className="font-display text-xl italic text-gold-bright">
              {site.tagline}
            </p>
            <h2 className="display-lg mx-auto mt-6 max-w-2xl text-paper-bright">
              Bring a champion&apos;s mindset to your court.
            </h2>
            <div className="mt-10 flex justify-center">
              <CTA
                href="/contact"
                variant="solid"
                className="bg-gold text-ink hover:bg-gold-bright"
              >
                Book a Session
              </CTA>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
