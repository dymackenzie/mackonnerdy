import type { Metadata } from "next";
import Image from "next/image";
import { MediaThumb } from "@/components/MediaThumb";
import { PageHeader } from "@/components/PageHeader";
import { Placeholder } from "@/components/Placeholder";
import { Rail } from "@/components/Rail";
import { Reveal } from "@/components/Reveal";
import { SponsorLogo } from "@/components/SponsorLogo";
import { Chapter, Container, CTA } from "@/components/ui";
import { media } from "@/content/media";
import { sponsors } from "@/content/sponsors";
import { team } from "@/content/team";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Media & Partners",
  description:
    "Press coverage, match highlights, interviews, and partnership opportunities with Mackonner Dy.",
  alternates: { canonical: "/media" },
};

// Featured = first item; the rest feed the horizontal rails.
const featuredPress = media.press[0];
const pressRail = [
  ...media.press.slice(1).map((p) => ({
    title: p.title,
    meta: "Press",
    href: p.href,
    image: p.image as string | undefined,
  })),
  ...media.articles.map((a) => ({
    title: a.source,
    meta: a.date,
    href: a.href,
    image: undefined as string | undefined,
  })),
];

const ALL_PRESS_HREF =
  "https://www.google.com/search?q=Mackonner+Dy+pickleball&tbm=nws";

export default function MediaPage() {
  return (
    <>
      {/* ---------- HEADER ---------- */}
      <PageHeader
        eyebrow={media.eyebrow}
        title={media.title}
        watermark="Press"
        edgeLabel="Media & Partners"
      />

      {/* ---------- 01 · FEATURED VIDEO ---------- */}
      <section className="relative z-10 border-t border-ink/10 bg-paper tex-warm">
        <Container className="py-12 md:py-16">
          <Chapter index="01" title="Featured Video" />
          <Reveal className="mt-8">
            <a
              href={media.highlight.href}
              target="_blank"
              rel="noreferrer"
              className="group block"
            >
              <div className="relative aspect-video overflow-hidden border border-ink/15 bg-ink">
                <MediaThumb
                  poster={media.highlight.poster}
                  href={media.highlight.href}
                  label="Match Highlight"
                  tone="dark"
                  className="h-full w-full transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                <span className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center bg-volt text-ink transition-transform duration-300 group-hover:scale-110">
                  <span className="ml-0.5 text-lg">▶</span>
                </span>
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
                  <p className="eyebrow text-volt">{media.highlight.label}</p>
                  <p className="mt-2 max-w-3xl font-display text-base uppercase leading-tight text-paper-bright sm:text-xl">
                    {media.highlight.title}
                  </p>
                </div>
              </div>
            </a>
          </Reveal>
        </Container>
      </section>

      {/* ---------- 02 · FEATURED PRESS ---------- */}
      <section className="relative z-10 border-t border-ink/10 bg-paper tex-warm">
        <Container className="py-12 md:py-16">
          <Chapter index="02" title="Featured Press" />
          <Reveal className="mt-8">
            <a
              href={featuredPress.href}
              target="_blank"
              rel="noreferrer"
              className="group grid items-stretch gap-px border border-ink/15 bg-ink/15 md:grid-cols-2"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-ink md:aspect-auto">
                <MediaThumb
                  poster={featuredPress.image}
                  label="Press"
                  tone="warm"
                  className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-col justify-between gap-6 bg-paper-bright p-6 md:p-9">
                <p className="eyebrow text-gold">Press · Feature</p>
                <h2 className="font-display text-xl uppercase leading-[1.1] text-ink sm:text-2xl">
                  {featuredPress.title}
                </h2>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-ink transition-colors group-hover:text-gold">
                  Read the story
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </a>
          </Reveal>
        </Container>
      </section>

      {/* ---------- 03 · VIDEO RAIL (vertical cards, horizontal scroll) ---------- */}
      <section className="relative z-10 border-t border-ink/10 bg-paper tex-warm">
        <Container className="py-12 md:py-16">
          <Chapter index="03" title="Latest Videos" />
          <Reveal className="mt-8 flex items-end justify-between gap-4">
            <h2 className="font-display text-xl uppercase text-ink sm:text-2xl">
              Watch Mackonner Play
            </h2>
            <span className="hidden text-xs uppercase tracking-[0.18em] text-ink/40 sm:block">
              Drag / Scroll →
            </span>
          </Reveal>
        </Container>

        {/* centered rail */}
        <Rail className="cursor-grab gap-3 px-6 pb-12 select-none sm:px-8">
          {media.videos.map((v, i) => (
            <a
              key={`${v.title}-${i}`}
              href={v.href}
              target="_blank"
              rel="noreferrer"
              className="group relative block w-[64vw] max-w-[280px] sm:w-[250px]"
            >
              <div className="relative aspect-[9/16] overflow-hidden border border-ink/10 bg-ink">
                <MediaThumb
                  poster={v.image}
                  href={v.href}
                  label={v.title}
                  tone="dark"
                  className="h-full w-full transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/15 to-ink/10 opacity-90" />
                <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center bg-volt text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="ml-0.5 text-sm">▶</span>
                </span>
                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="eyebrow text-volt">Watch</p>
                  <p className="mt-1 font-display text-sm uppercase leading-tight text-paper-bright">
                    {v.title}
                  </p>
                </div>
                {/* resting label (fades out on hover) */}
                <p className="absolute inset-x-0 bottom-0 p-4 font-display text-sm uppercase leading-tight text-paper-bright transition-opacity duration-300 group-hover:opacity-0">
                  {v.title}
                </p>
              </div>
            </a>
          ))}
        </Rail>
      </section>

      {/* ---------- 04 · PRESS RAIL (horizontal scroll + see all) ---------- */}
      <section className="relative z-10 border-t border-ink/10 bg-paper tex-warm">
        <Container className="py-12 md:py-16">
          <Chapter index="04" title="In The News" />
          <Reveal className="mt-8 flex items-end justify-between gap-4">
            <h2 className="font-display text-xl uppercase text-ink sm:text-2xl">
              Press &amp; Coverage
            </h2>
            <a
              href={ALL_PRESS_HREF}
              target="_blank"
              rel="noreferrer"
              className="border border-ink px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-ink transition-colors hover:bg-ink hover:text-paper-bright"
            >
              See All Press →
            </a>
          </Reveal>
        </Container>

        <Rail className="cursor-grab gap-4 px-6 pb-12 select-none sm:px-8">
          {pressRail.map((c, i) => (
            <a
              key={`${c.title}-${i}`}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="group block w-[78vw] max-w-[340px] sm:w-[330px]"
            >
              <div className="relative aspect-[16/10] overflow-hidden border border-ink/15 bg-ink">
                {c.image ? (
                  <MediaThumb
                    poster={c.image}
                    label={c.title}
                    tone="warm"
                    className="h-full w-full transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <Placeholder label={c.meta} tone="warm" className="h-full w-full" />
                )}
              </div>
              <p className="eyebrow mt-3 text-gold">{c.meta}</p>
              <p className="mt-1 font-display text-sm uppercase leading-tight text-ink transition-colors group-hover:text-gold">
                {c.title}
              </p>
            </a>
          ))}
        </Rail>
      </section>

      {/* ---------- 05 · THE TEAM ---------- */}
      <section className="relative z-10 overflow-x-clip border-t border-ink/10 bg-paper tex-warm">
        <Container className="py-10 md:py-14">
          <Chapter index="05" title={team.eyebrow} />
          <Reveal className="mt-6">
            <h2 className="font-display text-2xl uppercase leading-tight text-ink sm:text-3xl">
              {team.title}
            </h2>
            <p className="mt-3 max-w-xl text-sm text-ink/70">{team.lede}</p>
          </Reveal>

          <div className="mt-8 grid max-w-2xl gap-x-5 gap-y-6 sm:grid-cols-3">
            {team.members.map((m, i) => (
              <Reveal
                key={m.name}
                delay={i * 100}
                as="article"
                className="group flex flex-col"
              >
                <div className="relative aspect-square overflow-hidden border border-ink/10 bg-ink">
                  {m.image ? (
                    <Image
                      src={m.image}
                      alt={m.name}
                      fill
                      sizes="(min-width: 640px) 220px, 100vw"
                      style={{ objectPosition: m.focus ?? "center" }}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <Placeholder
                      label={m.name}
                      tone="dark"
                      className="h-full w-full transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -bottom-1 left-2 select-none font-display text-4xl leading-none text-outline text-paper/70"
                  >
                    0{i + 1}
                  </span>
                </div>
                <p className="eyebrow mt-3 text-gold">{m.role}</p>
                <h3 className="mt-1 font-display text-base uppercase leading-tight text-ink">
                  {m.name}
                </h3>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- 06 · PARTNERS ---------- */}
      <section
        id="partners"
        className="relative z-10 scroll-mt-24 border-t border-ink/10 bg-paper tex-warm"
      >
        <Container className="py-14 md:py-20">
          <Chapter index="06" title={sponsors.eyebrow} />
          <Reveal className="mt-8">
            <h2 className="display-lg max-w-3xl text-ink">{sponsors.title}</h2>
            <p className="mt-5 max-w-xl text-base text-ink/70">{sponsors.lede}</p>
          </Reveal>

          {/* current sponsors */}
          <Reveal
            delay={100}
            className="mt-10 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4"
          >
            {sponsors.current.map((s) => (
              <div key={s.name} className="flex flex-col items-start gap-2 bg-paper-bright/70 p-6">
                <SponsorLogo
                  name={s.name}
                  logo={s.logo}
                  url={s.url}
                  imgClassName="h-8 w-auto max-w-[11rem] object-contain"
                  textClassName="font-display text-lg uppercase text-ink"
                />
                <p className="eyebrow text-gold">{s.note}</p>
              </div>
            ))}
          </Reveal>

          {/* categories + opportunities */}
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <Reveal>
              <h3 className="font-display text-lg uppercase text-ink">
                Seeking Partners In
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {sponsors.categories.map((c) => (
                  <li
                    key={c}
                    className="border border-ink/20 px-4 py-2 text-sm text-ink/75"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <h3 className="font-display text-lg uppercase text-ink">
                Sponsorship Opportunities
              </h3>
              <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                {sponsors.opportunities.map((o) => (
                  <li key={o} className="flex items-center gap-3 text-sm text-ink/75">
                    <span className="h-1.5 w-1.5 shrink-0 bg-volt" />
                    {o}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={160} className="mt-12 border-t border-ink/15 pt-8">
            <p className="text-ink/70">
              For sponsorship opportunities please contact{" "}
              <span className="text-ink">{site.sponsorshipContactName}</span> at{" "}
              <a
                href={`mailto:${site.sponsorshipEmail}`}
                className="link-underline text-gold"
              >
                {site.sponsorshipEmail}
              </a>
              .
            </p>
            <CTA
              href={`mailto:${site.sponsorshipEmail}`}
              external
              variant="solid"
              className="mt-7"
            >
              Partner With Mackonner
            </CTA>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
