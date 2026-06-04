"use client";

import { useState } from "react";
import { Placeholder } from "./Placeholder";
import { youtubeId } from "@/lib/util";

type Props = {
  /** Preferred poster image (a /media path or any URL). */
  poster?: string;
  /** Link the thumb points at — used to derive a YouTube thumbnail if no poster. */
  href?: string;
  label?: string;
  tone?: "dark" | "warm";
  className?: string;
};

/**
 * Thumbnail with a graceful source chain:
 *   explicit poster → YouTube maxres (1280×720) → YouTube hq → styled Placeholder.
 * Handles YouTube's quirk where a missing maxres returns a tiny 120px gray frame
 * (a valid image, so onError never fires) by advancing when naturalWidth is tiny.
 */
export function MediaThumb({ poster, href, label, tone = "dark", className = "" }: Props) {
  const id = youtubeId(href);
  const candidates = [
    poster || undefined,
    id ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg` : undefined,
    id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : undefined,
  ].filter(Boolean) as string[];

  const [idx, setIdx] = useState(0);
  const src = candidates[idx];

  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={label ?? ""}
        loading="lazy"
        onError={() => setIdx((i) => i + 1)}
        onLoad={(e) => {
          // YouTube returns a 120×90 gray frame when a resolution is unavailable
          if (e.currentTarget.naturalWidth <= 120) setIdx((i) => i + 1);
        }}
        className={`object-cover ${className}`}
      />
    );
  }

  return <Placeholder label={label} tone={tone} className={className} />;
}
