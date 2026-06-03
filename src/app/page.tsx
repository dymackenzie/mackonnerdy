import Link from "next/link";
import { HeroVideo } from "@/components/HeroVideo";
import { Reveal } from "@/components/Reveal";
import { Container, CTA, Eyebrow } from "@/components/ui";
import { home } from "@/content/home";
import { sponsors } from "@/content/sponsors";
import { site } from "@/content/site";

export default function HomePage() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <HeroVideo src={home.heroVideoSrc}>
        <Container className="relative z-10 pb-20 pt-32 sm:pb-28">
          <div className="max-w-4xl">
            <p className="eyebrow rise text-gold-bright" style={{ animationDelay: "0.1s" }}>
              {home.heroEyebrow}
            </p>
            <h1
              className="display-xl rise mt-6 text-paper-bright"
              style={{ animationDelay: "0.25s" }}
            >
              Mackonner
              <br />
              <span className="italic text-gold-bright">Dy</span>
            </h1>
            <p
              className="rise mt-8 max-w-xl font-display text-2xl leading-snug text-paper/85 sm:text-3xl"
              style={{ animationDelay: "0.45s" }}
            >
              {home.heroTagline}
            </p>
            <div
              className="rise mt-10 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "0.6s" }}
            >
              <a
                href={`mailto:${site.sponsorshipEmail}`}
                className="group inline-flex items-center gap-2.5 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-ink transition-all duration-300 hover:gap-3.5 hover:bg-gold-bright"
              >
                Sponsor Mackonner
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </a>
              <Link
                href="/about"
                className="link-underline text-sm font-medium text-paper/80 hover:text-paper"
              >
                Read his story
              </Link>
            </div>
          </div>
        </Container>

        {/* scroll cue */}
        <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
          <span className="eyebrow text-paper/40">Scroll</span>
        </div>
      </HeroVideo>

      {/* ---------- INTRO + CREDENTIALS ---------- */}
      <section className="relative z-10 bg-paper">
        <Container className="grid gap-14 py-24 md:grid-cols-[1.4fr_1fr] md:py-32">
          <Reveal>
            <Eyebrow className="text-ink/50">{home.heroEyebrow}</Eyebrow>
            <p className="mt-6 font-display text-3xl leading-tight text-ink sm:text-4xl">
              {home.intro}
            </p>
            <p className="mt-8 text-sm text-ink/55">
              Based in {site.location} · Contact for Sponsorship, Coaching,
              Clinics, and Media.
            </p>
          </Reveal>

          <Reveal delay={120} as="ul" className="flex flex-col justify-center gap-5">
            {home.credentials.map((c) => (
              <li
                key={c.label}
                className="flex items-baseline justify-between gap-4 border-b border-ink/10 pb-5"
              >
                <span className="font-display text-xl text-ink">{c.label}</span>
                <span className="eyebrow shrink-0 text-gold">{c.meta}</span>
              </li>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* ---------- STATS BAND ---------- */}
      <section className="relative z-10 bg-ink text-paper">
        <Container className="py-20">
          <div className="grid grid-cols-2 gap-y-12 md:grid-cols-4">
            {home.stats.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 90}
                className="border-l border-paper/15 pl-6"
              >
                <p className="font-display text-5xl text-gold-bright sm:text-6xl">
                  {s.value}
                </p>
                <p className="mt-3 text-sm text-paper/55">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- BIO ---------- */}
      <section className="relative z-10 bg-paper">
        <Container className="py-24 md:py-32">
          <div className="grid gap-14 md:grid-cols-[1fr_1.5fr]">
            <Reveal>
              <Eyebrow className="text-ink/50">The Athlete</Eyebrow>
              <h2 className="display-lg mt-6 text-ink">{home.bio.heading}</h2>
            </Reveal>
            <Reveal delay={120} className="space-y-6">
              {home.bio.body.map((p, i) => (
                <p
                  key={i}
                  className={`leading-relaxed text-ink/75 ${
                    i === 0 ? "text-xl text-ink" : "text-base"
                  }`}
                >
                  {p}
                </p>
              ))}
              <CTA href="/about" variant="outline" className="mt-2">
                Mackonner&apos;s Journey
              </CTA>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ---------- SPONSOR STRIP ---------- */}
      <section className="relative z-10 border-t border-ink/10 bg-paper-bright">
        <Container className="py-16">
          <Reveal className="flex flex-col items-center gap-10">
            <Eyebrow className="text-ink/40">Proudly Partnered With</Eyebrow>
            <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              {sponsors.current.map((s) => (
                <li key={s.name} className="text-center">
                  <p className="font-display text-2xl text-ink/80">{s.name}</p>
                  <p className="eyebrow mt-1 text-ink/35">{s.note}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* ---------- CLOSING CTA ---------- */}
      <section className="relative z-10 overflow-hidden bg-ink text-paper">
        <Container className="py-28 text-center md:py-36">
          <Reveal>
            <p className="font-display text-xl italic text-gold-bright">
              {site.tagline}
            </p>
            <h2 className="display-lg mx-auto mt-6 max-w-3xl text-paper-bright">
              Building a brand around purpose, faith, and the next era of
              pickleball.
            </h2>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <CTA href="/media" variant="solid" className="bg-gold text-ink hover:bg-gold-bright">
                Media &amp; Partners
              </CTA>
              <CTA
                href="/contact"
                variant="outline"
                className="border-paper/30 text-paper hover:border-paper"
              >
                Get in Touch
              </CTA>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
