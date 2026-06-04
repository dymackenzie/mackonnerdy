import type { Metadata } from "next";
import { MediaThumb } from "@/components/MediaThumb";
import { PageHeader } from "@/components/PageHeader";
import { Placeholder } from "@/components/Placeholder";
import { Reveal } from "@/components/Reveal";
import { SponsorLogo } from "@/components/SponsorLogo";
import { Container, CTA, Eyebrow } from "@/components/ui";
import { media } from "@/content/media";
import { sponsors } from "@/content/sponsors";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Media & Partners",
  description:
    "Press coverage, match highlights, interviews, and partnership opportunities with Mackonner Dy.",
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

      {/* ---------- FEATURED VIDEO ---------- */}
      <section className="relative z-10 bg-paper tex-warm">
        <Container className="py-12 md:py-16">
          <Reveal className="mb-5 flex items-end justify-between gap-4">
            <Eyebrow className="text-ink/50">Featured Video</Eyebrow>
            <span className="eyebrow text-volt">01 / Watch</span>
          </Reveal>
          <Reveal>
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
                <span className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center bg-volt text-ink transition-transform duration-300 group-hover:scale-110">
                  <span className="ml-0.5 text-xl">▶</span>
                </span>
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
                  <p className="eyebrow text-volt">{media.highlight.label}</p>
                  <p className="mt-2 max-w-3xl font-display text-lg uppercase leading-tight text-paper-bright sm:text-2xl">
                    {media.highlight.title}
                  </p>
                </div>
              </div>
            </a>
          </Reveal>
        </Container>
      </section>

      {/* ---------- FEATURED PRESS ---------- */}
      <section className="relative z-10 bg-paper-bright tex-warm">
        <Container className="py-12 md:py-16">
          <Reveal className="mb-5 flex items-end justify-between gap-4">
            <Eyebrow className="text-ink/50">Featured Press</Eyebrow>
            <span className="eyebrow text-volt">02 / Read</span>
          </Reveal>
          <Reveal>
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
              <div className="flex flex-col justify-between gap-8 bg-paper-bright p-6 md:p-10">
                <p className="eyebrow text-gold">Press · Feature</p>
                <h2 className="font-display text-2xl uppercase leading-[1.05] text-ink sm:text-3xl">
                  {featuredPress.title}
                </h2>
                <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-ink transition-colors group-hover:text-gold">
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

      {/* ---------- VIDEO RAIL (vertical cards, horizontal scroll) ---------- */}
      <section className="relative z-10 bg-ink tex-dark text-paper">
        <Container className="py-12 md:py-16">
          <Reveal className="mb-6 flex items-end justify-between gap-4">
            <div>
              <Eyebrow className="text-volt">Watch</Eyebrow>
              <h2 className="mt-3 font-display text-2xl uppercase text-paper-bright sm:text-3xl">
                Latest Videos
              </h2>
            </div>
            <span className="hidden text-xs uppercase tracking-widest text-paper/40 sm:block">
              Drag / Scroll →
            </span>
          </Reveal>
        </Container>

        {/* full-bleed rail */}
        <div className="scroll-x gap-3 px-6 pb-12 sm:px-8">
          {media.videos.map((v, i) => (
            <a
              key={`${v.title}-${i}`}
              href={v.href}
              target="_blank"
              rel="noreferrer"
              className="group relative block w-[64vw] max-w-[280px] sm:w-[250px]"
            >
              <div className="relative aspect-[9/16] overflow-hidden border border-paper/10 bg-ink">
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
                  <p className="mt-1 font-display text-base uppercase leading-tight text-paper-bright">
                    {v.title}
                  </p>
                </div>
                {/* resting label (fades out on hover) */}
                <p className="absolute inset-x-0 bottom-0 p-4 font-display text-base uppercase leading-tight text-paper-bright transition-opacity duration-300 group-hover:opacity-0">
                  {v.title}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ---------- PRESS RAIL (horizontal scroll + see all) ---------- */}
      <section className="relative z-10 bg-paper tex-warm">
        <Container className="py-12 md:py-16">
          <Reveal className="mb-6 flex items-end justify-between gap-4">
            <div>
              <Eyebrow className="text-gold">Press</Eyebrow>
              <h2 className="mt-3 font-display text-2xl uppercase text-ink sm:text-3xl">
                In The News
              </h2>
            </div>
            <a
              href={ALL_PRESS_HREF}
              target="_blank"
              rel="noreferrer"
              className="border border-ink px-5 py-3 text-xs font-bold uppercase tracking-widest text-ink transition-colors hover:bg-ink hover:text-paper-bright"
            >
              See All Press →
            </a>
          </Reveal>
        </Container>

        <div className="scroll-x gap-4 px-6 pb-12 sm:px-8">
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
              <p className="mt-1 font-display text-base uppercase leading-tight text-ink transition-colors group-hover:text-gold">
                {c.title}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* ---------- PARTNERS ---------- */}
      <section
        id="partners"
        className="panel-soft relative z-10 scroll-mt-24 bg-ink tex-dark text-paper"
      >
        <Container className="py-14 md:py-20">
          <Reveal>
            <Eyebrow className="text-volt">{sponsors.eyebrow}</Eyebrow>
            <h2 className="display-lg mt-5 max-w-3xl text-paper-bright">
              {sponsors.title}
            </h2>
            <p className="mt-5 max-w-xl text-lg text-paper/70">{sponsors.lede}</p>
          </Reveal>

          {/* current sponsors */}
          <Reveal
            delay={100}
            className="mt-10 grid gap-px overflow-hidden border border-paper/10 bg-paper/10 sm:grid-cols-2 lg:grid-cols-4"
          >
            {sponsors.current.map((s) => (
              <div key={s.name} className="flex flex-col items-start gap-2 bg-ink p-7">
                <SponsorLogo
                  name={s.name}
                  logo={s.logo}
                  imgClassName="h-9 w-auto max-w-[11rem] object-contain"
                  textClassName="font-display text-xl uppercase text-paper"
                />
                <p className="eyebrow text-gold">{s.note}</p>
              </div>
            ))}
          </Reveal>

          {/* categories + opportunities */}
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <Reveal>
              <h3 className="font-display text-xl uppercase text-paper-bright">
                Seeking Partners In
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {sponsors.categories.map((c) => (
                  <li
                    key={c}
                    className="border border-paper/20 px-4 py-2 text-sm text-paper/75"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <h3 className="font-display text-xl uppercase text-paper-bright">
                Sponsorship Opportunities
              </h3>
              <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                {sponsors.opportunities.map((o) => (
                  <li key={o} className="flex items-center gap-3 text-sm text-paper/75">
                    <span className="h-1.5 w-1.5 shrink-0 bg-volt" />
                    {o}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={160} className="mt-12 border-t border-paper/15 pt-8">
            <p className="text-paper/70">
              For sponsorship opportunities please contact{" "}
              <span className="text-paper">{site.sponsorshipContactName}</span> at{" "}
              <a
                href={`mailto:${site.sponsorshipEmail}`}
                className="link-underline text-gold-bright"
              >
                {site.sponsorshipEmail}
              </a>
              .
            </p>
            <CTA
              href={`mailto:${site.sponsorshipEmail}`}
              external
              variant="solid"
              className="mt-7 bg-volt text-ink hover:bg-volt-bright"
            >
              Partner With Mackonner
            </CTA>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
