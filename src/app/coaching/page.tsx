import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
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
      <PageHeader
        eyebrow={coaching.eyebrow}
        title={coaching.title}
        lede={coaching.lede}
        watermark="Train"
        edgeLabel="Coaching & Clinics"
      />

      {/* offerings */}
      <section className="relative z-10 bg-paper tex-warm">
        <Container className="py-14 md:py-20">
          <div className="grid gap-x-8 gap-y-10 md:grid-cols-3">
            {coaching.offerings.map((o, i) => {
              const offset = ["md:mt-0", "md:mt-12", "md:mt-24"][i] ?? "md:mt-0";
              return (
                <Reveal
                  key={o.title}
                  delay={i * 100}
                  className={`card-sheen flex flex-col gap-5 rounded-3xl border border-ink/10 bg-paper-bright/80 p-8 md:p-10 ${offset}`}
                >
                  <span
                    aria-hidden
                    className="select-none font-display text-6xl leading-none text-outline text-gold opacity-70"
                  >
                    0{i + 1}
                  </span>
                  <h2 className="font-display text-2xl leading-tight text-ink">
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
      <section className="panel-soft relative z-10 bg-ink tex-dark text-paper">
        <Container className="py-14 text-center md:py-20">
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
                className="bg-volt text-ink hover:bg-volt-bright"
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
