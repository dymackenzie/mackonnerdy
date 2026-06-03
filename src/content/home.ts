export const home = {
  heroEyebrow: "Next Generation of Professional Pickleball",
  heroName: "Mackonner Dy",
  heroTagline: "Play With Purpose. Compete With Faith.",

  // Real footage goes here later — see public/media/README.md
  heroVideoSrc: "/media/hero/hero.mp4",
  heroPosterAlt: "Mackonner Dy competing on a pickleball court",

  intro:
    "Mackonner Dy is one of Canada's top junior and emerging professional pickleball players, competing on the PPA Tour, PPA Canada, CNPL, and international events across North America and Asia.",

  credentials: [
    { label: "Canadian Singles National Champion", meta: "Men's Singles" },
    { label: "PPA Tour Competitor", meta: "North America & Asia" },
    { label: "Vancouver Owls", meta: "CNPL" },
  ],

  bio: {
    heading: "Grounded. Creative. Relentless.",
    body: [
      "National Champion in Men's Singles and ranked Top 5 in Canada in Men's Doubles (PPA Canada), with a global PPA ranking of 214.",
      "Known for his athleticism, creativity, and quick hands, he plays a dynamic, unpredictable style. He recently reached the Round of 16 at the 2026 PPA Texas Open, showing he can compete at the highest level, and continues to develop as a member of the Vancouver Owls (CNPL).",
      "Off the court, Mackonner is grounded and marketable, proudly representing his Filipino heritage while helping grow pickleball in Canada and across Asia.",
    ],
  },

  stats: [
    { value: "214", label: "Global PPA Ranking" },
    { value: "Top 5", label: "Canada · Men's Doubles" },
    { value: "R16", label: "2026 PPA Texas Open" },
    { value: "#1", label: "Canadian Singles Champion" },
  ],
} as const;
