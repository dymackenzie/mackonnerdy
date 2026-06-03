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

      {/* ---------- FEATURED HIGHLIGHT (asymmetric) ---------- */}
      <section className="relative z-10 bg-paper tex-warm">
        <Container className="py-20 md:py-28">
          <Reveal className="group grid items-center gap-8 md:grid-cols-12">
            <a
              href={media.highlight.href}
              className="block md:col-span-8 md:order-2"
            >
              <div className="relative aspect-video overflow-hidden rounded-3xl">
                <MediaThumb
                  poster={media.highlight.poster}
                  href={media.highlight.href}
                  label="Match Highlight"
                  tone="dark"
                  className="h-full w-full transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-20 w-20 items-center justify-center rounded-full bg-volt text-ink transition-transform duration-300 group-hover:scale-110">
                    <span className="ml-1 text-2xl">▶</span>
                  </span>
                </span>
              </div>
            </a>
            <div className="md:col-span-4 md:order-1">
              <Eyebrow className="text-ink/50">{media.highlight.label}</Eyebrow>
              <p className="mt-5 font-display text-2xl leading-snug text-ink sm:text-3xl">
                {media.highlight.title}
              </p>
              <a
                href={media.highlight.href}
                className="link-underline mt-6 inline-block text-sm font-semibold text-gold"
              >
                Watch the highlight →
              </a>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ---------- PRESS ---------- */}
      <section className="relative z-10 bg-paper-bright tex-warm">
        <Container className="py-20 md:py-28">
          <Reveal>
            <Eyebrow className="text-ink/50">Featured Press</Eyebrow>
          </Reveal>
          <div className="mt-10 grid gap-x-10 gap-y-12 md:grid-cols-12">
            {media.press.map((p, i) => {
              // first item runs wider; second is narrower and dropped down
              const layout =
                i === 0
                  ? "md:col-span-7"
                  : "md:col-span-5 md:mt-24";
              const ratio = i === 0 ? "aspect-[16/10]" : "aspect-[4/5]";
              return (
                <Reveal
                  key={p.title}
                  delay={i * 120}
                  as="article"
                  className={`group ${layout}`}
                >
                  <a href={p.href} className="block">
                    <div className={`relative ${ratio} overflow-hidden rounded-3xl`}>
                      <Placeholder
                        src={p.image}
                        label="Press"
                        tone="warm"
                        className="h-full w-full transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <h2 className="mt-5 font-display text-2xl leading-tight text-ink group-hover:text-ink/70">
                      {p.title}
                    </h2>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ---------- WATCH / VIDEOS ---------- */}
      <section className="relative z-10 bg-paper tex-warm">
        <Container className="py-20 md:py-28">
          <Reveal>
            <Eyebrow className="text-ink/50">Watch Latest · Interviews & Videos</Eyebrow>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {media.videos.map((v, i) => (
              <Reveal key={`${v.title}-${i}`} delay={i * 90} as="article" className="group">
                <a href={v.href} className="block">
                  <div className="relative aspect-video overflow-hidden rounded-3xl">
                    <MediaThumb poster={v.image} href={v.href} label={v.title} tone="dark" className="h-full w-full" />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-paper/90 text-ink transition-transform duration-300 group-hover:scale-110">
                        <span className="ml-0.5">▶</span>
                      </span>
                    </span>
                  </div>
                  <p className="mt-3 text-sm font-medium text-ink/70">View Video</p>
                </a>
              </Reveal>
            ))}
          </div>

          {/* training */}
          <Reveal className="mt-16">
            <Eyebrow className="text-ink/50">Training Videos</Eyebrow>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {media.training.map((t, i) => (
              <Reveal key={t.title} delay={i * 90} as="article">
                <div className="relative aspect-[16/9] overflow-hidden rounded-3xl">
                  <Placeholder src={t.image} label={t.title} tone="dark" className="h-full w-full" />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- PRESS ARTICLES TIMELINE ---------- */}
      <section className="relative z-10 bg-paper-bright tex-warm">
        <Container className="py-20 md:py-28">
          <Reveal>
            <Eyebrow className="text-ink/50">Press Articles</Eyebrow>
            <p className="mt-4 text-sm text-ink/55">
              Links to news and press coverage. {media.sponsorContentNote}
            </p>
          </Reveal>
          <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 sm:grid-cols-3">
            {media.articles.map((a) => (
              <a
                key={a.date}
                href={a.href}
                className="group flex flex-col justify-between gap-12 bg-paper-bright p-8 transition-colors hover:bg-paper"
              >
                <p className="eyebrow text-gold">
                  {a.date} / {a.source}
                </p>
                <p className="flex items-center justify-between font-display text-xl text-ink">
                  Read coverage
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </p>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- PARTNERS ---------- */}
      <section id="partners" className="panel-soft relative z-10 scroll-mt-24 bg-ink tex-dark text-paper">
        <Container className="py-24 md:py-32">
          <Reveal>
            <Eyebrow className="text-gold">{sponsors.eyebrow}</Eyebrow>
            <h2 className="display-lg mt-6 max-w-3xl text-paper-bright">
              {sponsors.title}
            </h2>
            <p className="mt-6 max-w-xl text-lg text-paper/70">{sponsors.lede}</p>
          </Reveal>

          {/* current sponsors */}
          <Reveal delay={100} className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-paper/10 bg-paper/10 sm:grid-cols-2 lg:grid-cols-4">
            {sponsors.current.map((s) => (
              <div key={s.name} className="flex flex-col items-start gap-2 bg-ink p-8">
                <SponsorLogo
                  name={s.name}
                  logo={s.logo}
                  imgClassName="h-9 w-auto max-w-[11rem] object-contain"
                  textClassName="font-display text-2xl text-paper"
                />
                <p className="eyebrow text-gold">{s.note}</p>
              </div>
            ))}
          </Reveal>

          {/* categories + opportunities */}
          <div className="mt-16 grid gap-12 md:grid-cols-2">
            <Reveal>
              <h3 className="font-display text-2xl text-paper-bright">
                Seeking Partners In
              </h3>
              <ul className="mt-6 flex flex-wrap gap-2">
                {sponsors.categories.map((c) => (
                  <li
                    key={c}
                    className="rounded-full border border-paper/20 px-4 py-2 text-sm text-paper/75"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <h3 className="font-display text-2xl text-paper-bright">
                Sponsorship Opportunities
              </h3>
              <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                {sponsors.opportunities.map((o) => (
                  <li
                    key={o}
                    className="flex items-center gap-3 text-sm text-paper/75"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {o}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={160} className="mt-16 border-t border-paper/15 pt-10">
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
              className="mt-8 bg-volt text-ink hover:bg-volt-bright"
            >
              Partner With Mackonner
            </CTA>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
