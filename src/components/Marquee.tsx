/** Infinite scrolling ticker. Duplicates items so the loop is seamless. */
export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-ink/10 bg-paper py-3.5 text-ink">
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-paper to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-paper to-transparent" />
      <div className="marquee-track">
        {row.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="px-7 font-display text-base font-medium uppercase tracking-tight text-ink/75">
              {item}
            </span>
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
