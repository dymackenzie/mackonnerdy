/** Infinite scrolling ticker. Duplicates items so the loop is seamless. */
export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="panel-dark-bottom relative overflow-hidden border-t border-paper/15 bg-ink tex-dark py-5 text-paper">
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />
      <div className="marquee-track">
        {row.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="px-8 font-display text-2xl font-bold uppercase tracking-tight text-paper/90">
              {item}
            </span>
            <span className="text-volt">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
