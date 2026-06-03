export const results = {
  eyebrow: "Results & Rankings",
  title: "On the Board",
  note: "Placeholder results — swap in verified tournament data as the season progresses.",

  rankings: [
    { label: "PPA Global Ranking", value: "214" },
    { label: "Canada · Men's Doubles (PPA Canada)", value: "Top 5" },
    { label: "Canada · Men's Singles", value: "National Champion" },
  ],

  // Replace with real tournament rows. event / location / date / result.
  tournaments: [
    {
      event: "PPA Texas Open",
      location: "Texas, USA",
      date: "2026",
      result: "Round of 16",
      surface: "Singles",
    },
    {
      event: "Canadian National Championships",
      location: "Canada",
      date: "2025",
      result: "Champion",
      surface: "Men's Singles",
    },
    {
      event: "PPA Canada",
      location: "Canada",
      date: "2025",
      result: "Top 5",
      surface: "Men's Doubles",
    },
    {
      event: "CNPL — Vancouver Owls",
      location: "Canada",
      date: "2025–26",
      result: "Roster",
      surface: "Team",
    },
  ],
} as const;
