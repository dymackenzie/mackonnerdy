import Image from "next/image";
import Link from "next/link";
import { HeroVideo } from "@/components/HeroVideo";
import { Highlighted } from "@/components/Highlighted";
import { Marquee } from "@/components/Marquee";
import { Placeholder } from "@/components/Placeholder";
import { Reveal } from "@/components/Reveal";
import { SponsorLogo } from "@/components/SponsorLogo";
import { Chapter, Container, CTA, Eyebrow } from "@/components/ui";
import { home } from "@/content/home";
import { sponsors } from "@/content/sponsors";
import { site } from "@/content/site";

export default function HomePage() {
  return (
    <>
      {/* ---------- HERO (the one dark "cover" — it's a video) ---------- */}
      <HeroVideo src={home.heroVideoSrc} poster={home.heroVideoPoster}>
        {/* Oversized outlined monogram — grid-breaking watermark */}
        <span
          aria-hidden
          className="pointer-events-none absolute -right-[3vw] bottom-[-4vw] z-0 select-none font-display font-light leading-none text-outline text-volt opacity-30"
          style={{ fontSize: "clamp(9rem, 30vw, 28rem)" }}
        >
          MD
        </span>

        {/* Vertical edge label */}
        <span
          aria-hidden
          className="absolute right-5 top-1/2 z-10 hidden origin-center -translate-y-1/2 rotate-90 whitespace-nowrap text-paper/40 lg:block"
        >
          <span className="eyebrow">Pro Pickleball — Est. Vancouver</span>
        </span>

        <Container className="relative z-10 w-full pb-16 pt-40 sm:pb-20">
          <div className="max-w-4xl">
            <p
              className="eyebrow rise flex items-center gap-3 text-gold-bright"
              style={{ animationDelay: "0.1s" }}
            >
              {home.heroEyebrow}
            </p>

            {/* Asymmetric name lockup */}
            <h1 className="mt-6">
              <span
                className="display-xl rise block text-paper-bright"
                style={{ animationDelay: "0.25s" }}
              >
                Mackonner
              </span>
              <span
                className="rise mt-1 flex items-center gap-6 sm:mt-2"
                style={{ animationDelay: "0.4s" }}
              >
                <span className="display-xl text-volt">Dy</span>
                <span className="hidden h-px max-w-[14rem] flex-1 bg-paper/25 sm:block" />
                <span className="hidden whitespace-nowrap font-display text-sm not-italic text-paper/55 sm:block">
                  {site.role}
                </span>
              </span>
            </h1>

            <p
              className="rise mt-7 max-w-xl font-display text-lg leading-snug text-paper/85 sm:text-xl"
              style={{ animationDelay: "0.55s" }}
            >
              {home.heroTagline}
            </p>
            <div
              className="rise mt-9 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "0.7s" }}
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 bg-paper-bright px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-ink transition-all duration-300 hover:gap-3.5 hover:bg-paper"
              >
                <span className="h-1.5 w-1.5 shrink-0 bg-volt" aria-hidden />
                Sponsor Mackonner
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
              <Link
                href="/about"
                className="link-underline text-sm font-medium text-paper/80 hover:text-paper"
              >
                Read his story
              </Link>
            </div>
          </div>

          {/* Bottom info strip — editorial baseline */}
          <div className="rise mt-14 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-paper/15 pt-6 text-paper/50" style={{ animationDelay: "0.85s" }}>
            <span className="eyebrow">{site.location}</span>
            <span className="text-gold-bright">/</span>
            <span className="eyebrow">Singles · Doubles · CNPL</span>
            <span className="ml-auto hidden items-center gap-2 text-paper/40 sm:flex">
              <span className="eyebrow">Scroll</span>
              <span className="h-8 w-px bg-paper/30" />
            </span>
          </div>
        </Container>
      </HeroVideo>

      {/* ---------- MARQUEE TICKER ---------- */}
      <Marquee items={home.marquee} />

      {/* ---------- 01 · INTRO + PORTRAIT + CREDENTIALS ---------- */}
      <section className="relative z-10 overflow-x-clip bg-paper tex-warm">
        <Container className="py-14 md:py-20">
          <Chapter index="01" title="Introduction" />

          <div className="mt-12 grid items-start gap-x-8 gap-y-12 md:grid-cols-3">
            {/* Portrait — beside the intro copy */}
            <Reveal className="relative z-10">
              <figure className="relative">
                <div className="card-sheen relative aspect-[4/5] overflow-hidden border border-ink/10">
                  {home.portrait.image ? (
                    <Image
                      src={home.portrait.image}
                      alt={home.portrait.alt}
                      fill
                      sizes="(min-width: 768px) 384px, 100vw"
                      className="object-cover"
                      priority
                    />
                  ) : (
                    <Placeholder
                      label="Mackonner Dy"
                      tone="dark"
                      className="h-full w-full"
                    />
                  )}
                </div>
                <figcaption className="eyebrow absolute bottom-4 left-4 bg-ink/75 px-4 py-2 text-paper/85 backdrop-blur-sm">
                  {home.portrait.caption}
                </figcaption>
              </figure>
            </Reveal>

            {/* Intro copy */}
            <Reveal delay={80} className="relative z-10">
              <Eyebrow className="text-ink/50">{home.heroEyebrow}</Eyebrow>
              <p className="mt-6 font-display text-lg leading-[1.3] text-ink sm:text-xl">
                <Highlighted text={home.intro} />
              </p>
              <p className="mt-5 text-sm text-ink/55">
                Based in {site.location} · Contact for Sponsorship, Coaching,
                Clinics, and Media.
              </p>
            </Reveal>

            {/* Career highlights */}
            <Reveal
              delay={140}
              as="ul"
              className="card-sheen relative z-10 flex flex-col gap-1 border border-ink/10 bg-paper-bright/70 p-6 backdrop-blur-sm md:mt-8"
            >
              <li className="eyebrow pb-3 text-ink/40">Career Highlights</li>
              {home.credentials.map((c) => (
                <li
                  key={c.label}
                  className="flex flex-col gap-1 border-t border-ink/10 py-3.5"
                >
                  <span className="font-display text-base leading-tight text-ink">
                    {c.label}
                  </span>
                  <span className="eyebrow text-gold">{c.meta}</span>
                </li>
              ))}
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ---------- 02 · STATS ---------- */}
      <section className="relative z-10 border-t border-ink/10 bg-paper tex-warm">
        <Container className="py-14 md:py-18">
          <Chapter index="02" title="By The Numbers" />
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {home.stats.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 90}
                className="border border-ink/10 bg-paper-bright/60 p-6 transition-colors hover:border-gold/40"
              >
                <p className="flex items-baseline gap-2 font-display text-3xl font-semibold text-ink sm:text-4xl">
                  <span className="h-1.5 w-1.5 shrink-0 self-center bg-volt" aria-hidden />
                  {s.value}
                </p>
                <p className="mt-2 text-xs text-ink/55">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- 03 · BIO ---------- */}
      <section className="relative z-10 border-t border-ink/10 bg-paper tex-warm">
        <Container className="py-14 md:py-20">
          <Chapter index="03" title="The Athlete" />
          <div className="mt-12 grid gap-12 md:grid-cols-[1fr_1.5fr]">
            <Reveal>
              <h2 className="display-lg text-ink">{home.bio.heading}</h2>
            </Reveal>
            <Reveal delay={120} className="space-y-5">
              {home.bio.body.map((p, i) => (
                <p
                  key={i}
                  className={`leading-relaxed text-ink/75 ${
                    i === 0 ? "text-base text-ink" : "text-sm"
                  }`}
                >
                  <Highlighted text={p} />
                </p>
              ))}
              <CTA href="/about" variant="outline" className="mt-2">
                Mackonner&apos;s Journey
              </CTA>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ---------- 04 · SPONSORS ---------- */}
      <section className="relative z-10 border-t border-ink/10 bg-paper tex-warm">
        <Container className="py-14 md:py-18">
          <Chapter index="04" title="Partners" />
          <Reveal className="mt-10 flex flex-col items-center gap-8">
            <Eyebrow className="text-ink/40">Proudly Partnered With</Eyebrow>
            <ul className="flex flex-wrap items-center justify-center gap-5">
              {sponsors.current.map((s) => (
                <li
                  key={s.name}
                  className="flex flex-col items-center gap-1.5 border border-ink/15 bg-paper-bright/60 px-9 py-5 text-center transition-colors hover:border-gold/50"
                >
                  <SponsorLogo
                    name={s.name}
                    logo={s.logo}
                    imgClassName="h-11 w-auto max-w-[13rem] object-contain"
                    textClassName="font-display text-2xl text-ink/85"
                  />
                  <p className="eyebrow text-ink/35">{s.note}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* ---------- 05 · CLOSING CTA ---------- */}
      <section className="relative z-10 overflow-hidden border-t border-ink/10 bg-paper tex-warm">
        <Container className="py-16 md:py-20">
          <Chapter index="05" title="Get Involved" />
          <Reveal className="mt-10 text-center">
            <p className="font-display text-base italic text-gold">
              {site.tagline}
            </p>
            <h2 className="display-lg mx-auto mt-5 max-w-3xl text-ink">
              Building a brand around purpose, faith, and the next era of
              pickleball.
            </h2>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <CTA href="/media" variant="solid">
                Media &amp; Partners
              </CTA>
              <CTA href="/contact" variant="outline">
                Get in Touch
              </CTA>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
