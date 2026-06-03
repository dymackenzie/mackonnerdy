import { Container, Eyebrow } from "./ui";

type Props = {
  eyebrow: string;
  title: string;
  lede?: string;
  /** big outlined word bleeding off the corner */
  watermark?: string;
  /** small rotated label on the right edge */
  edgeLabel?: string;
};

/** Bold editorial page header — dark, textured, with a grid-breaking watermark. */
export function PageHeader({ eyebrow, title, lede, watermark, edgeLabel }: Props) {
  return (
    <header className="panel-dark-bottom relative z-10 overflow-x-clip bg-ink tex-dark text-paper">
      {watermark && (
        <span
          aria-hidden
          className="pointer-events-none absolute -right-[2vw] bottom-[-3vw] z-0 select-none font-display font-light leading-none text-outline text-gold opacity-[0.16]"
          style={{ fontSize: "clamp(7rem, 22vw, 20rem)" }}
        >
          {watermark}
        </span>
      )}

      {edgeLabel && (
        <span
          aria-hidden
          className="absolute right-5 top-1/2 z-10 hidden origin-center -translate-y-1/2 rotate-90 whitespace-nowrap text-paper/35 lg:block"
        >
          <span className="eyebrow">{edgeLabel}</span>
        </span>
      )}

      <Container className="relative z-10 pb-20 pt-40 md:pb-28 md:pt-48">
        <Eyebrow className="text-gold">{eyebrow}</Eyebrow>
        <h1 className="display-xl mt-6 max-w-4xl text-paper-bright">{title}</h1>
        {lede && (
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper/70">
            {lede}
          </p>
        )}
      </Container>
    </header>
  );
}
