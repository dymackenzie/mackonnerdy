"use client";

import { useState } from "react";
import { Placeholder } from "./Placeholder";
import { youtubeThumbnail } from "@/lib/util";

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
 * Thumbnail that prefers a real poster, then falls back to the YouTube thumbnail
 * (when `href` is a YouTube link), then to the styled court Placeholder.
 */
export function MediaThumb({ poster, href, label, tone = "dark", className = "" }: Props) {
  const yt = youtubeThumbnail(href);
  const [src, setSrc] = useState<string | undefined>(poster || yt);

  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={label ?? ""}
        loading="lazy"
        // if the poster 404s, try the YouTube thumb next; then give up to Placeholder
        onError={() => setSrc((cur) => (cur !== yt && yt ? yt : undefined))}
        className={`object-cover ${className}`}
      />
    );
  }

  return <Placeholder label={label} tone={tone} className={className} />;
}
