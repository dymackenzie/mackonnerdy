import type { Metadata, Viewport } from "next";
import { Space_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { site } from "@/content/site";

// Blocky, technical mono for headlines; clean mono for body — sportswear/brutalist.
const displayMono = Space_Mono({
  variable: "--font-display-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const bodyMono = JetBrains_Mono({
  variable: "--font-body-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#14120d",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mackonnerdy.com"),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Mackonner Dy",
    "pickleball",
    "PPA Tour",
    "PPA Canada",
    "CNPL",
    "Vancouver Owls",
    "Canadian pickleball champion",
  ],
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.description,
    type: "website",
    locale: "en_CA",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${displayMono.variable} ${bodyMono.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col">
        <CustomCursor />
        <Header />
        <main className="relative z-10 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
