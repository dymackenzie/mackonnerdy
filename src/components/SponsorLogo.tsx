"use client";

import { useState } from "react";

type Props = {
  name: string;
  logo?: string;
  url?: string;
  /** classes for the <img> logo when a real file is present */
  imgClassName?: string;
  /** classes for the text fallback (the sponsor name) */
  textClassName?: string;
};

export function SponsorLogo({ name, logo, url, imgClassName = "", textClassName = "" }: Props) {
  const [failed, setFailed] = useState(false);

  const inner = logo && !failed ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={logo}
      alt={name}
      loading="lazy"
      onError={() => setFailed(true)}
      className={imgClassName}
    />
  ) : (
    <span className={textClassName}>{name}</span>
  );

  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" aria-label={name}>
        {inner}
      </a>
    );
  }

  return inner;
}
