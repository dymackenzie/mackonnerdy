"use client";

import { useState } from "react";

type Props = {
  name: string;
  logo?: string;
  /** classes for the <img> logo when a real file is present */
  imgClassName?: string;
  /** classes for the text fallback (the sponsor name) */
  textClassName?: string;
};

/**
 * Shows a sponsor's logo image when one exists at `logo`, and gracefully falls
 * back to the sponsor's name (styled) if the file is missing or fails to load.
 * Drop real logos into /public/media/sponsors and they appear automatically.
 */
export function SponsorLogo({ name, logo, imgClassName = "", textClassName = "" }: Props) {
  const [failed, setFailed] = useState(false);

  if (logo && !failed) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={logo}
        alt={name}
        loading="lazy"
        onError={() => setFailed(true)}
        className={imgClassName}
      />
    );
  }

  return <span className={textClassName}>{name}</span>;
}
