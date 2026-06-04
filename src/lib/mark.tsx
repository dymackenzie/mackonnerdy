import { ImageResponse } from "next/og";

const INK = "#0c0f0e";
const VOLT = "#c6f500";

/** Square "MD" monogram mark — ink field, volt wordmark. Shared by icon + apple-icon. */
export function renderMark(size: number) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: INK,
          color: VOLT,
          fontSize: Math.round(size * 0.5),
          fontWeight: 700,
          fontFamily: "sans-serif",
          letterSpacing: -1,
        }}
      >
        MD
      </div>
    ),
    { width: size, height: size },
  );
}
