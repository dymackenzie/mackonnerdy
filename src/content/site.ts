export const site = {
  name: "Mackonner Dy",
  tagline: "Play With Purpose. Compete With Faith.",
  role: "Professional Pickleball Player",
  location: "Vancouver, Canada",
  description:
    "Mackonner Dy is one of Canada's top junior and emerging professional pickleball players, competing on the PPA Tour, PPA Canada, CNPL, and international events across North America and Asia.",

  // Sponsorship / media point of contact (from notes)
  sponsorshipContactName: "Dr. Sean Graham",
  sponsorshipEmail: "satoripickleball@gmail.com",

  socials: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "TikTok", href: "https://tiktok.com/" },
    { label: "YouTube", href: "https://youtube.com/" },
  ],
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Media & Partners", href: "/media" },
  { label: "Coaching / Clinics", href: "/coaching" },
  { label: "Contact", href: "/contact" },
] as const;
