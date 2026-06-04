import { Chapter, Container } from "./ui";

type Props = {
  eyebrow: string;
  title: string;
  lede?: string;
  /** big outlined word bleeding off the corner */
  watermark?: string;
  /** small rotated label on the right edge */
  edgeLabel?: string;
};

/** Editorial page header — light, textured, with a grid-breaking watermark. */
export function PageHeader({ eyebrow, title, lede, watermark, edgeLabel }: Props) {
  return (
    <header className="relative z-10 overflow-x-clip bg-paper tex-warm text-ink">
      {watermark && (
        <span
          aria-hidden
          className="pointer-events-none absolute -right-[2vw] bottom-[-3vw] z-0 select-none font-display font-light leading-none text-outline text-ink opacity-[0.06]"
          style={{ fontSize: "clamp(6rem, 18vw, 16rem)" }}
        >
          {watermark}
        </span>
      )}

      {edgeLabel && (
        <span
          aria-hidden
          className="absolute right-5 top-1/2 z-10 hidden origin-center -translate-y-1/2 rotate-90 whitespace-nowrap text-ink/30 lg:block"
        >
          <span className="eyebrow">{edgeLabel}</span>
        </span>
      )}

      <Container className="relative z-10 pb-12 pt-28 md:pb-14 md:pt-32">
        <Chapter index="00" title={eyebrow} className="max-w-xl" />
        <h1 className="display-xl mt-7 max-w-3xl text-ink">{title}</h1>
        {lede && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/65">
            {lede}
          </p>
        )}
      </Container>
    </header>
  );
}
