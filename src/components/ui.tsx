import Link from "next/link";

/* ---- Layout container ---- */
export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

/* ---- Eyebrow / kicker ---- */
export function Eyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`eyebrow inline-flex items-center gap-3 ${className}`}>
      <span className="h-px w-8 bg-current opacity-50" />
      {children}
    </span>
  );
}

/* ---- Chapter marker ----
   Wayfinding for each section: a chapter number + title + rule. This is what
   differentiates sections now that every band shares one background color. */
export function Chapter({
  index,
  title,
  className = "",
}: {
  index: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="font-display text-sm font-semibold leading-none tracking-[0.1em] text-gold">
        {index}
      </span>
      <span className="eyebrow text-ink/55">{title}</span>
      <span className="h-px flex-1 bg-ink/10" />
    </div>
  );
}

/* ---- Button / CTA ---- */
type BtnProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "ghost";
  className?: string;
  external?: boolean;
};

export function CTA({
  href,
  children,
  variant = "solid",
  className = "",
  external = false,
}: BtnProps) {
  const base =
    "group inline-flex items-center gap-2.5 px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] transition-all duration-300";
  const styles = {
    // Always-legible fill: dark ink + bright paper. Lime is reserved for the
    // little accent tick so button text never sits on a low-contrast color.
    solid:
      "bg-ink text-paper-bright hover:bg-ink-soft hover:gap-3.5",
    outline:
      "border border-ink/25 text-ink hover:border-ink/60 hover:gap-3.5",
    ghost: "text-ink/70 hover:text-ink hover:gap-3.5",
  }[variant];

  const inner = (
    <>
      {variant === "solid" && (
        <span className="h-1.5 w-1.5 shrink-0 bg-volt" aria-hidden />
      )}
      {children}
      <span className="transition-transform duration-300 group-hover:translate-x-0.5">
        →
      </span>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        className={`${base} ${styles} ${className}`}
        target="_blank"
        rel="noreferrer"
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {inner}
    </Link>
  );
}
