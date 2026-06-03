"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setOpen(false), [pathname]);

  const solid = scrolled || open;
  // Over the dark hero/page header (not yet scrolled) the bar is transparent, so
  // its content must be light to stay visible; once solid (paper) it goes dark.
  const bar = solid ? "bg-ink" : "bg-paper";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid
          ? "border-b border-ink/10 bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <Link
          href="/"
          className={`font-display text-xl leading-none tracking-tight transition-colors duration-500 ${
            solid ? "text-ink" : "text-paper-bright"
          }`}
        >
          Mackonner&nbsp;Dy
          <span
            className={`block text-[0.6rem] font-sans font-semibold uppercase tracking-[0.3em] transition-colors duration-500 ${
              solid ? "text-ink/45" : "text-paper/55"
            }`}
          >
            Pro Pickleball
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            const tone = solid
              ? active
                ? "text-ink"
                : "text-ink/60 hover:text-ink"
              : active
                ? "text-paper-bright"
                : "text-paper/70 hover:text-paper";
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`link-underline text-sm font-medium transition-colors ${tone}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className="relative block h-3.5 w-6">
            <span
              className={`absolute left-0 h-px w-full transition-all duration-300 ${bar} ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-px w-full transition-all duration-300 ${bar} ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-px w-full transition-all duration-300 ${bar} ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-ink/10 bg-paper/95 backdrop-blur-md transition-[max-height] duration-500 md:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b border-ink/5 py-4 font-display text-2xl text-ink"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`mailto:${site.sponsorshipEmail}`}
            className="py-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold"
          >
            Sponsor Mackonner
          </a>
        </nav>
      </div>
    </header>
  );
}
