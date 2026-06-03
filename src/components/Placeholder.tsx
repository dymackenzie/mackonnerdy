import { extractFileName } from "@/lib/util";

type Props = {
  /** Intended final asset path, e.g. /media/journey/IMG_2448.JPG */
  src?: string;
  /** Short human label shown on the placeholder */
  label?: string;
  className?: string;
  /** tone: warm (paper) or dark (ink) */
  tone?: "dark" | "warm";
};

/**
 * Styled media placeholder. Does NOT request the file (avoids broken-image 404s
 * while real assets are pending). When you drop the real file in /public/media,
 * replace <Placeholder /> with next/image pointing at the same `src`.
 */
export function Placeholder({ src, label, className = "", tone = "dark" }: Props) {
  const file = src ? extractFileName(src) : undefined;
  const isDark = tone === "dark";

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        background: isDark
          ? "radial-gradient(120% 120% at 30% 20%, #1a2422 0%, #0c0f0e 70%)"
          : "radial-gradient(120% 120% at 30% 20%, #f4f7ef 0%, #dde4d6 75%)",
      }}
      aria-hidden="true"
    >
      {/* court-line motif */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <g
          stroke={isDark ? "#c6f500" : "#0c0f0e"}
          strokeOpacity={isDark ? 0.28 : 0.14}
          strokeWidth="1"
        >
          <rect x="40" y="30" width="320" height="240" />
          <line x1="40" y1="150" x2="360" y2="150" />
          <line x1="150" y1="30" x2="150" y2="270" />
          <line x1="250" y1="30" x2="250" y2="270" />
        </g>
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        {label && (
          <span
            className={`font-display text-lg ${
              isDark ? "text-paper/70" : "text-ink/60"
            }`}
          >
            {label}
          </span>
        )}
        {file && (
          <span
            className={`eyebrow mt-3 ${
              isDark ? "text-gold/60" : "text-ink/40"
            }`}
          >
            {file}
          </span>
        )}
      </div>
    </div>
  );
}
