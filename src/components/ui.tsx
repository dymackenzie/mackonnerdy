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
    "group inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300";
  const styles = {
    solid:
      "bg-ink text-paper-bright hover:bg-ink-soft hover:gap-3.5 shadow-[0_8px_30px_-12px_rgba(20,18,13,0.6)]",
    outline:
      "border border-ink/25 text-ink hover:border-ink/60 hover:gap-3.5",
    ghost: "text-ink/70 hover:text-ink hover:gap-3.5",
  }[variant];

  const inner = (
    <>
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
