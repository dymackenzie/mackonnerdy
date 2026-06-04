import data from "@data";

const { site, home } = data;

/** Absolute URL helper — JSON-LD requires fully-qualified URLs. */
export const absolute = (path: string) =>
  path.startsWith("http") ? path : `${site.url}${path}`;

/**
 * schema.org Person graph for Mackonner. Powers rich results and
 * knowledge-panel eligibility. Built from content/data.json so it stays
 * in sync with the visible copy. (schema.org has no "Athlete" type — the
 * canonical type for a person is Person.)
 */
export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    jobTitle: site.role,
    description: site.description,
    nationality: "Canadian",
    image: absolute(home.portrait.image),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vancouver",
      addressRegion: "BC",
      addressCountry: "CA",
    },
    knowsAbout: ["Pickleball", "PPA Tour", "CNPL"],
    memberOf: {
      "@type": "SportsTeam",
      name: "Vancouver Owls",
      sport: "Pickleball",
    },
    award: home.credentials.map((c) => c.label),
    sameAs: site.socials.map((s) => s.href),
  };
}
