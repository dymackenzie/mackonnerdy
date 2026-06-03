import Link from "next/link";
import { HeroVideo } from "@/components/HeroVideo";
import { Highlighted } from "@/components/Highlighted";
import { Marquee } from "@/components/Marquee";
import { Placeholder } from "@/components/Placeholder";
import { Reveal } from "@/components/Reveal";
import { SponsorLogo } from "@/components/SponsorLogo";
import { Container, CTA, Eyebrow } from "@/components/ui";
import { home } from "@/content/home";
import { sponsors } from "@/content/sponsors";
import { site } from "@/content/site";

export default function HomePage() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <HeroVideo src={home.heroVideoSrc} poster={home.heroVideoPoster}>
        {/* Oversized outlined monogram — grid-breaking watermark */}
        <span
          aria-hidden
          className="pointer-events-none absolute -right-[3vw] bottom-[-4vw] z-0 select-none font-display font-light leading-none text-outline text-volt opacity-30"
          style={{ fontSize: "clamp(11rem, 36vw, 34rem)" }}
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
            <h1 className="mt-7">
              <span
                className="display-xl rise block text-paper-bright"
                style={{ animationDelay: "0.25s" }}
              >
                Mackonner
              </span>
              <span
                className="rise mt-1 flex items-center gap-6 sm:mt-3"
                style={{ animationDelay: "0.4s" }}
              >
                <span className="display-xl text-volt">Dy</span>
                <span className="hidden h-px max-w-[14rem] flex-1 bg-paper/25 sm:block" />
                <span className="hidden whitespace-nowrap font-display text-base not-italic text-paper/55 sm:block">
                  {site.role}
                </span>
              </span>
            </h1>

            <p
              className="rise mt-8 max-w-xl font-display text-2xl leading-snug text-paper/85 sm:text-3xl"
              style={{ animationDelay: "0.55s" }}
            >
              {home.heroTagline}
            </p>
            <div
              className="rise mt-10 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "0.7s" }}
            >
              <a
                href={`mailto:${site.sponsorshipEmail}`}
                className="group inline-flex items-center gap-2.5 rounded-full bg-volt px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-ink transition-all duration-300 hover:gap-3.5 hover:bg-volt-bright"
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

          {/* Bottom info strip — editorial baseline */}
          <div className="rise mt-16 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-paper/15 pt-6 text-paper/50" style={{ animationDelay: "0.85s" }}>
            <span className="eyebrow">{site.location}</span>
            <span className="text-gold">/</span>
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

      {/* ---------- INTRO + PORTRAIT + CREDENTIALS ---------- */}
      <section className="relative z-10 overflow-x-clip bg-paper tex-warm">
        <Container className="py-24 md:py-32">
          {/* Decorative oversized index */}
          <span
            aria-hidden
            className="pointer-events-none absolute -left-6 -top-10 z-0 select-none font-display text-outline text-ink opacity-[0.07]"
            style={{ fontSize: "clamp(8rem, 22vw, 20rem)" }}
          >
            01
          </span>

          <div className="grid items-start gap-x-8 gap-y-12 md:grid-cols-3">
            {/* Portrait — beside the intro copy */}
            <Reveal className="relative z-10">
              <figure className="relative">
                <div className="card-sheen relative aspect-[4/5] overflow-hidden rounded-3xl border border-ink/10">
                  <Placeholder
                    src={home.portrait.image}
                    label="Mackonner Dy"
                    tone="dark"
                    className="h-full w-full"
                  />
                </div>
                <figcaption className="eyebrow absolute bottom-4 left-4 rounded-full bg-ink/75 px-4 py-2 text-paper/85 backdrop-blur-sm">
                  {home.portrait.caption}
                </figcaption>
              </figure>
            </Reveal>

            {/* Intro copy */}
            <Reveal delay={80} className="relative z-10">
              <Eyebrow className="text-ink/50">{home.heroEyebrow}</Eyebrow>
              <p className="mt-7 font-display text-2xl leading-[1.2] text-ink sm:text-[1.7rem]">
                <Highlighted text={home.intro} />
              </p>
              <p className="mt-6 text-sm text-ink/55">
                Based in {site.location} · Contact for Sponsorship, Coaching,
                Clinics, and Media.
              </p>
            </Reveal>

            {/* Career highlights — straddles the marquee band above */}
            <Reveal
              delay={140}
              as="ul"
              className="card-sheen relative z-10 flex flex-col gap-1 rounded-3xl border border-ink/10 bg-paper-bright/90 p-7 backdrop-blur-sm md:-mt-32 lg:-mt-44"
            >
              <li className="eyebrow pb-3 text-ink/40">Career Highlights</li>
              {home.credentials.map((c) => (
                <li
                  key={c.label}
                  className="flex flex-col gap-1.5 border-t border-ink/10 py-4"
                >
                  <span className="font-display text-lg leading-tight text-ink">
                    {c.label}
                  </span>
                  <span className="eyebrow text-gold">{c.meta}</span>
                </li>
              ))}
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ---------- STATS BAND ---------- */}
      <section className="panel-soft relative z-10 bg-ink tex-dark text-paper">
        <Container className="py-20">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {home.stats.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 90}
                className="card-sheen rounded-3xl border border-paper/10 bg-paper/[0.04] p-7 transition-colors hover:border-gold/40"
              >
                <p className="font-display text-5xl font-extrabold text-volt sm:text-6xl">
                  {s.value}
                </p>
                <p className="mt-3 text-sm text-paper/55">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- BIO ---------- */}
      <section className="relative z-10 bg-paper tex-warm">
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

      {/* ---------- SPONSOR STRIP ---------- */}
      <section className="relative z-10 bg-paper-bright tex-warm">
        <Container className="py-16">
          <Reveal className="flex flex-col items-center gap-10">
            <Eyebrow className="text-ink/40">Proudly Partnered With</Eyebrow>
            <ul className="flex flex-wrap items-center justify-center gap-4">
              {sponsors.current.map((s) => (
                <li
                  key={s.name}
                  className="flex flex-col items-center gap-1 rounded-full border border-ink/15 bg-paper/60 px-7 py-4 text-center transition-colors hover:border-gold/50"
                >
                  <SponsorLogo
                    name={s.name}
                    logo={s.logo}
                    imgClassName="h-8 w-auto max-w-[10rem] object-contain"
                    textClassName="font-display text-2xl text-ink/85"
                  />
                  <p className="eyebrow text-ink/35">{s.note}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* ---------- CLOSING CTA ---------- */}
      <section className="panel-soft relative z-10 overflow-hidden bg-ink tex-dark text-paper">
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
              <CTA href="/media" variant="solid" className="bg-volt text-ink hover:bg-volt-bright">
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
