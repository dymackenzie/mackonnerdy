import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { Container, Eyebrow } from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Mackonner Dy for sponsorship, coaching, clinics, appearances, and media.",
};

export default function ContactPage() {
  return (
    <section className="relative z-10 bg-paper tex-warm">
      <Container className="grid gap-12 pb-16 pt-28 md:grid-cols-[1fr_1.2fr] md:pt-36">
        {/* left — info */}
        <Reveal>
          <Eyebrow className="text-ink/50">Contact</Eyebrow>
          <h1 className="display-lg mt-6 text-ink">Let&apos;s build something together.</h1>
          <p className="mt-6 max-w-md leading-relaxed text-ink/70">
            For sponsorship, coaching, clinics, appearances, and media —
            reach out and the team will get back to you.
          </p>

          <div className="mt-12 space-y-8">
            <div>
              <p className="eyebrow text-ink/40">Sponsorship & Media</p>
              <p className="mt-2 font-display text-xl text-ink">
                {site.sponsorshipContactName}
              </p>
              <a
                href={`mailto:${site.sponsorshipEmail}`}
                className="link-underline text-gold"
              >
                {site.sponsorshipEmail}
              </a>
            </div>
            <div>
              <p className="eyebrow text-ink/40">Based In</p>
              <p className="mt-2 font-display text-xl text-ink">{site.location}</p>
            </div>
            <div>
              <p className="eyebrow text-ink/40">Follow</p>
              <ul className="mt-3 flex gap-5">
                {site.socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="link-underline text-ink/70 hover:text-ink"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* right — form */}
        <Reveal delay={120} className="card-sheen rounded-3xl border border-ink/10 bg-paper-bright p-8 md:p-10">
          <ContactForm to={site.sponsorshipEmail} />
        </Reveal>
      </Container>
    </section>
  );
}
