import Link from "next/link";
import { nav, site } from "@/content/site";
import { Container } from "./ui";

export function Footer() {
  return (
    <footer className="relative z-10 mt-auto bg-ink text-paper">
      <Container className="py-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl leading-none">{site.name}</p>
            <p className="mt-4 max-w-xs font-display text-xl italic text-gold-bright">
              {site.tagline}
            </p>
            <p className="mt-6 text-sm text-paper/50">{site.location}</p>
          </div>

          <div>
            <p className="eyebrow text-paper/40">Explore</p>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-underline text-sm text-paper/75 hover:text-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-paper/40">Connect</p>
            <ul className="mt-5 space-y-3">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline text-sm text-paper/75 hover:text-paper"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${site.sponsorshipEmail}`}
                  className="link-underline text-sm text-gold-bright"
                >
                  Sponsorship Inquiries
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-paper/10 pt-8 text-xs text-paper/40 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>
            Sponsorship & media · {site.sponsorshipContactName} ·{" "}
            <a
              href={`mailto:${site.sponsorshipEmail}`}
              className="text-paper/60 hover:text-paper"
            >
              {site.sponsorshipEmail}
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
