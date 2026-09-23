import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { practiceAreas } from "../data/practiceAreas";

const heroLines = [
  "Where professional excellence meets personal commitment.",
  "Integrity. Excellence. Commitment.",
];

export default function Home() {
  const [lineIndex, setLineIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      const timeout = setTimeout(() => {
        setLineIndex((i) => (i + 1) % heroLines.length);
        setVisible(true);
      }, 300);
      return () => clearTimeout(timeout);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
        <div>
          <p className="text-sm uppercase tracking-wide text-[var(--color-gold)]">
            Omuyoma &amp; Co. Advocates
          </p>
          <h1
            className={`mt-3 min-h-[2.3em] font-[family-name:var(--font-display)] text-4xl leading-[1.15] text-[var(--color-heading)] transition-opacity duration-300 md:text-5xl ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          >
            {heroLines[lineIndex]}
          </h1>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <Link
              to="/contact"
              className="rounded-sm bg-[var(--color-blue)] px-6 py-3 text-[15px] text-white transition-opacity hover:opacity-90"
            >
              Book a Consultation
            </Link>
            <Link to="/team" className="text-[15px] text-[var(--color-heading)] underline decoration-[var(--color-gold)] underline-offset-4">
              Meet the team
            </Link>
          </div>
        </div>

        <div className="relative hidden items-center justify-center rounded-sm bg-[var(--color-bg-alt)] p-10 md:flex">
          <img
            src="/logo-watermark.png"
            alt="Omuyoma & Co. Advocates emblem"
            className="w-full max-w-[280px] opacity-90"
          />
        </div>
      </section>

      {/* Team teaser */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-bg-alt)]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-baseline justify-between">
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-heading)]">Meet the Team</h2>
            <Link to="/team" className="text-[15px] text-[var(--color-heading)] underline decoration-[var(--color-gold)] underline-offset-4">
              View all team members
            </Link>
          </div>
          <div className="mt-10 max-w-xs">
            <img
              src="/omuyoma.jpg"
              alt="Omuyoma Amukhono, Managing Partner"
              className="aspect-[4/5] w-full rounded-sm object-cover"
            />
            <p className="mt-4 text-[15px] text-[var(--color-gold)]">Managing Partner</p>
            <h3 className="font-[family-name:var(--font-display)] text-lg text-[var(--color-heading)]">Omuyoma Amukhono</h3>
          </div>
        </div>
      </section>

      {/* Practice areas grid */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-baseline justify-between">
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-heading)]">Our Practice Areas</h2>
          <Link to="/practice-areas" className="text-[15px] text-[var(--color-heading)] underline decoration-[var(--color-gold)] underline-offset-4">
            View all practice areas
          </Link>
        </div>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((area) => (
            <div key={area.slug} className="border-t border-[var(--color-gold)] pt-4">
              <h3 className="font-[family-name:var(--font-display)] text-lg text-[var(--color-heading)]">
                {area.name}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[var(--color-muted)]">{area.summary}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-sm bg-[var(--color-bg-alt)] px-8 py-14 text-center text-[var(--color-heading)] md:px-16">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl">
            We're ready to serve — book a consultation, or access your matter online.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] text-[var(--color-muted)]">
            Existing clients can access their case documents, deadlines, and billing statements
            through the client portal.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
            <Link
              to="/contact"
              className="inline-block rounded-sm bg-[var(--color-gold)] px-6 py-3 text-[15px] text-[var(--color-bg)] transition-opacity hover:opacity-90"
            >
              Book a Consultation
            </Link>
            <a
              href="https://app.omuyomaadvocates.co.ke"
              className="text-[15px] underline decoration-[var(--color-gold)] underline-offset-4"
            >
              Open client portal
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
