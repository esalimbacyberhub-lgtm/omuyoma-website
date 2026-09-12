import { Link } from "react-router-dom";
import { practiceAreas } from "../data/practiceAreas";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
        <div>
          <h1 className="font-[var(--font-display)] text-4xl leading-[1.15] text-[var(--color-navy)] md:text-5xl">
            Considered counsel, built on precision and trust.
          </h1>
          <p className="mt-6 max-w-md text-[17px] leading-relaxed text-[var(--color-slate)]">
            Omuyoma & Co. Advocates represents individuals and businesses across Kenya in
            litigation, property, corporate, and family matters — with the diligence a case
            deserves and the clarity a client needs.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <Link
              to="/contact"
              className="rounded-sm bg-[var(--color-navy)] px-6 py-3 text-[15px] text-[var(--color-ivory)] transition-colors hover:bg-[var(--color-royal)]"
            >
              Speak with the firm
            </Link>
            <Link to="/practice-areas" className="text-[15px] text-[var(--color-navy)] underline decoration-[var(--color-gold)] underline-offset-4">
              View practice areas
            </Link>
          </div>
        </div>

        <div className="relative hidden md:block">
          <svg viewBox="0 0 320 360" className="w-full" role="img" aria-label="Illustration of classical courthouse columns">
            <rect x="0" y="0" width="320" height="360" rx="4" fill="var(--color-navy)" />
            <line x1="40" y1="60" x2="280" y2="60" stroke="var(--color-gold)" strokeWidth="1.5" />
            {[60, 110, 160, 210, 260].map((x) => (
              <g key={x}>
                <line x1={x} y1="60" x2={x} y2="280" stroke="var(--color-gold)" strokeWidth="1.5" opacity="0.85" />
              </g>
            ))}
            <line x1="30" y1="280" x2="290" y2="280" stroke="var(--color-gold)" strokeWidth="1.5" />
            <line x1="20" y1="300" x2="300" y2="300" stroke="var(--color-gold)" strokeWidth="2" />
          </svg>
        </div>
      </section>

      {/* Practice areas preview */}
      <section className="border-t border-black/5 bg-white/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-[var(--font-display)] text-2xl text-[var(--color-navy)]">Areas of practice</h2>
          <div className="mt-10 divide-y divide-black/10">
            {practiceAreas.map((area) => (
              <div key={area.slug} className="flex flex-col gap-2 py-6 md:flex-row md:items-baseline md:justify-between md:gap-8">
                <h3 className="font-[var(--font-display)] text-lg text-[var(--color-navy)] md:w-64 md:shrink-0">
                  {area.name}
                </h3>
                <p className="text-[15px] leading-relaxed text-[var(--color-slate)]">{area.summary}</p>
              </div>
            ))}
          </div>
          <Link
            to="/practice-areas"
            className="mt-8 inline-block text-[15px] text-[var(--color-navy)] underline decoration-[var(--color-gold)] underline-offset-4"
          >
            Read more about each practice area
          </Link>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-sm bg-[var(--color-navy)] px-8 py-14 text-center text-[var(--color-ivory)] md:px-16">
          <h2 className="font-[var(--font-display)] text-2xl md:text-3xl">
            Already a client? Access your matter online.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] text-[var(--color-ivory)]/75">
            The client portal gives you secure access to your case documents, deadlines, and
            billing statements.
          </p>
          <a
            href="https://app.omuyomaadvocates.co.ke"
            className="mt-8 inline-block rounded-sm bg-[var(--color-gold)] px-6 py-3 text-[15px] text-[var(--color-navy)] transition-opacity hover:opacity-90"
          >
            Open client portal
          </a>
        </div>
      </section>
    </>
  );
}
