import type { Metadata } from "next";
import { Placeholder } from "@/components/Placeholder";
import { Reveal } from "@/components/Reveal";
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
      <header className="relative z-10 bg-ink text-paper">
        <Container className="pb-20 pt-40 md:pb-24 md:pt-48">
          <Eyebrow className="text-gold">{media.eyebrow}</Eyebrow>
          <h1 className="display-xl mt-6 text-paper-bright">{media.title}</h1>
        </Container>
      </header>

      {/* ---------- FEATURED HIGHLIGHT ---------- */}
      <section className="relative z-10 bg-paper">
        <Container className="py-20 md:py-28">
          <Reveal>
            <Eyebrow className="text-ink/50">{media.highlight.label}</Eyebrow>
          </Reveal>
          <Reveal delay={100} className="group mt-8">
            <a href={media.highlight.href} className="block">
              <div className="relative aspect-video overflow-hidden rounded-sm">
                <Placeholder
                  src={media.highlight.poster}
                  label="Match Highlight"
                  tone="dark"
                  className="h-full w-full transition-transform duration-700 group-hover:scale-105"
                />
                {/* play button */}
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gold text-ink transition-transform duration-300 group-hover:scale-110">
                    <span className="ml-1 text-2xl">▶</span>
                  </span>
                </span>
              </div>
              <p className="mt-6 font-display text-2xl leading-snug text-ink sm:text-3xl">
                {media.highlight.title}
              </p>
            </a>
          </Reveal>
        </Container>
      </section>

      {/* ---------- PRESS ---------- */}
      <section className="relative z-10 bg-paper-bright">
        <Container className="py-20 md:py-28">
          <Reveal>
            <Eyebrow className="text-ink/50">Featured Press</Eyebrow>
          </Reveal>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            {media.press.map((p, i) => (
              <Reveal key={p.title} delay={i * 120} as="article" className="group">
                <a href={p.href} className="block">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
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
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- WATCH / VIDEOS ---------- */}
      <section className="relative z-10 bg-paper">
        <Container className="py-20 md:py-28">
          <Reveal>
            <Eyebrow className="text-ink/50">Watch Latest · Interviews & Videos</Eyebrow>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {media.videos.map((v, i) => (
              <Reveal key={`${v.title}-${i}`} delay={i * 90} as="article" className="group">
                <a href={v.href} className="block">
                  <div className="relative aspect-video overflow-hidden rounded-sm">
                    <Placeholder src={v.image} label={v.title} tone="dark" className="h-full w-full" />
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
                <div className="relative aspect-[16/9] overflow-hidden rounded-sm">
                  <Placeholder src={t.image} label={t.title} tone="dark" className="h-full w-full" />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- PRESS ARTICLES TIMELINE ---------- */}
      <section className="relative z-10 bg-paper-bright">
        <Container className="py-20 md:py-28">
          <Reveal>
            <Eyebrow className="text-ink/50">Press Articles</Eyebrow>
            <p className="mt-4 text-sm text-ink/55">
              Links to news and press coverage. {media.sponsorContentNote}
            </p>
          </Reveal>
          <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-ink/10 bg-ink/10 sm:grid-cols-3">
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
      <section id="partners" className="relative z-10 scroll-mt-24 bg-ink text-paper">
        <Container className="py-24 md:py-32">
          <Reveal>
            <Eyebrow className="text-gold">{sponsors.eyebrow}</Eyebrow>
            <h2 className="display-lg mt-6 max-w-3xl text-paper-bright">
              {sponsors.title}
            </h2>
            <p className="mt-6 max-w-xl text-lg text-paper/70">{sponsors.lede}</p>
          </Reveal>

          {/* current sponsors */}
          <Reveal delay={100} className="mt-14 grid gap-px overflow-hidden rounded-sm border border-paper/10 bg-paper/10 sm:grid-cols-2 lg:grid-cols-4">
            {sponsors.current.map((s) => (
              <div key={s.name} className="bg-ink p-8">
                <p className="font-display text-2xl text-paper">{s.name}</p>
                <p className="eyebrow mt-2 text-gold">{s.note}</p>
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
              className="mt-8 bg-gold text-ink hover:bg-gold-bright"
            >
              Partner With Mackonner
            </CTA>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
