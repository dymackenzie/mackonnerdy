"use client";

import { useState } from "react";

const inputBase =
  "w-full rounded-none border-0 border-b border-ink/20 bg-transparent px-0 py-3 text-ink placeholder:text-ink/35 focus:border-ink focus:outline-none transition-colors";

/**
 * Netlify-Forms compatible (data-netlify). On Vercel it gracefully falls back
 * to a mailto: submission so the form still works without a backend.
 */
export function ContactForm({ to }: { to: string }) {
  const [topic, setTopic] = useState("Sponsorship");

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      action={`mailto:${to}`}
      className="grid gap-7"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="grid gap-7 sm:grid-cols-2">
        <label className="block">
          <span className="eyebrow text-ink/50">Name</span>
          <input name="name" required className={`${inputBase} mt-2`} placeholder="Your name" />
        </label>
        <label className="block">
          <span className="eyebrow text-ink/50">Email</span>
          <input
            type="email"
            name="email"
            required
            className={`${inputBase} mt-2`}
            placeholder="you@email.com"
          />
        </label>
      </div>

      <label className="block">
        <span className="eyebrow text-ink/50">Inquiry</span>
        <div className="mt-3 flex flex-wrap gap-2">
          {["Sponsorship", "Coaching", "Clinic / Appearance", "Media"].map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTopic(t)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                topic === t
                  ? "border-ink bg-ink text-paper-bright"
                  : "border-ink/20 text-ink/70 hover:border-ink/50"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <input type="hidden" name="topic" value={topic} />
      </label>

      <label className="block">
        <span className="eyebrow text-ink/50">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          className={`${inputBase} mt-2 resize-none`}
          placeholder="Tell Mackonner about your brand, event, or request…"
        />
      </label>

      <button
        type="submit"
        className="group inline-flex w-fit items-center gap-2.5 bg-ink px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-paper-bright transition-all duration-300 hover:gap-3.5"
      >
        <span className="h-1.5 w-1.5 shrink-0 bg-volt" aria-hidden />
        Send Message
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
      </button>
    </form>
  );
}
