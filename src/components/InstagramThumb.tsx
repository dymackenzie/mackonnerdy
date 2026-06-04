type Props = {
  label?: string;
  className?: string;
};

/**
 * Drawn thumbnail for Instagram links. Instagram blocks thumbnail hotlinking
 * (the oEmbed endpoint needs an app access token), so instead of fetching the
 * real frame we render the signature IG gradient + camera glyph. Used by
 * <MediaThumb> when a video's href is an Instagram URL and no poster is set.
 */
export function InstagramThumb({ label, className = "" }: Props) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center overflow-hidden ${className}`}
      style={{
        background:
          "radial-gradient(120% 120% at 25% 110%, #feda75 0%, #fa7e1e 18%, #d62976 42%, #962fbf 72%, #4f5bd5 100%)",
      }}
      aria-hidden="true"
    >
      {/* Instagram camera glyph */}
      <svg
        viewBox="0 0 24 24"
        className="h-12 w-12 text-white/95 drop-shadow-sm sm:h-14 sm:w-14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
      </svg>
      {label && (
        <span className="mt-3 px-5 text-center font-display text-sm uppercase leading-tight text-white/90">
          {label}
        </span>
      )}
    </div>
  );
}
