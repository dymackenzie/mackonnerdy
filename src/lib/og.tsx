import { ImageResponse } from "next/og";
import data from "@data";

const { site } = data;

// Design tokens mirrored from globals.css (kept literal — satori can't read CSS vars).
const INK = "#0c0f0e";
const INK_SOFT = "#161b1b";
const PAPER = "#f8faf2";
const PAPER_DIM = "#c0c7bb";
const VOLT = "#c6f500";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";
export const OG_ALT = `${site.name} — ${site.role}`;

/**
 * Brutalist-sportswear social card matching the site's dark hero:
 * ink field, lime volt accent tick, mono-style stacked wordmark.
 * Shared by app/opengraph-image.tsx and app/twitter-image.tsx.
 */
export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: INK,
          backgroundImage: `radial-gradient(900px 600px at 105% -10%, ${INK_SOFT} 0%, transparent 60%)`,
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* top row — eyebrow + volt tick */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 56, height: 12, background: VOLT }} />
          <div
            style={{
              color: PAPER_DIM,
              fontSize: 26,
              letterSpacing: 6,
              textTransform: "uppercase",
            }}
          >
            Professional Pickleball · Canada
          </div>
        </div>

        {/* wordmark */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              color: PAPER,
              fontSize: 132,
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: -2,
              textTransform: "uppercase",
            }}
          >
            Mackonner Dy
          </div>
          <div style={{ display: "flex", marginTop: 28 }}>
            <div style={{ width: 220, height: 10, background: VOLT }} />
          </div>
          <div
            style={{
              display: "flex",
              color: PAPER_DIM,
              fontSize: 30,
              marginTop: 28,
            }}
          >
            Canadian Singles National Champion · PPA Tour · CNPL
          </div>
        </div>

        {/* bottom row — domain */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: PAPER_DIM,
            fontSize: 26,
            letterSpacing: 2,
          }}
        >
          <div style={{ display: "flex" }}>Play With Purpose. Compete With Faith.</div>
          <div style={{ display: "flex", color: VOLT }}>
            {site.url.replace("https://", "")}
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE },
  );
}
