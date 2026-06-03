"use client";

import { useEffect, useRef } from "react";
import { cloudinaryVideoPoster } from "@/lib/util";

type Props = {
  /** Video URL — a Cloudinary delivery URL or a local /media/... path. Empty = backdrop only. */
  src?: string;
  /** Optional poster image. If omitted, derived from a Cloudinary src automatically. */
  poster?: string;
  children: React.ReactNode;
};

/**
 * Ambient horizontal hero. The video is muted, looping, and veiled with a deep
 * gradient so it reads as atmosphere — present, but not "in your face."
 * Respects prefers-reduced-motion (pauses + relies on the styled backdrop).
 *
 * Source can be a Cloudinary URL (recommended) or a local /media path. When `src`
 * is empty the styled court backdrop carries the hero on its own.
 */
export function HeroVideo({ src, poster, children }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const hasVideo = Boolean(src);
  const resolvedPoster = poster || cloudinaryVideoPoster(src);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      v.removeAttribute("autoplay");
      v.pause();
    } else {
      v.play().catch(() => {
        /* autoplay may be blocked — poster/backdrop remains */
      });
    }
  }, []);

  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink text-paper">
      {/* Styled court backdrop (always present, also the video's resting state) */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(130% 100% at 75% 15%, #15211f 0%, #0c0f0e 55%, #050706 100%)",
        }}
      />
      <svg
        className="absolute inset-0 -z-10 h-full w-full opacity-25"
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <g strokeWidth="1.4">
          <rect x="120" y="80" width="960" height="540" stroke="#c6f500" />
          <line x1="120" y1="350" x2="1080" y2="350" stroke="#c6f500" />
          <line x1="450" y1="80" x2="450" y2="620" stroke="#16c8c2" />
          <line x1="750" y1="80" x2="750" y2="620" stroke="#16c8c2" />
        </g>
      </svg>

      {/* The ambient video (only when a source is provided) */}
      {hasVideo && (
        <video
          ref={videoRef}
          className="hero-drift absolute inset-0 -z-10 h-full w-full object-cover opacity-60"
          src={src}
          poster={resolvedPoster}
          muted
          loop
          autoPlay
          playsInline
          preload="metadata"
        />
      )}

      {/* Veils for legibility — top fade for header, bottom for headline */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/70 via-ink/20 to-ink/85" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-ink to-transparent" />

      {children}
    </section>
  );
}
