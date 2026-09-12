export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-14 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h1 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-navy)] md:text-4xl">
            About the firm
          </h1>
          <p className="mt-6 text-[15px] leading-relaxed text-[var(--color-slate)]">
            {/* Placeholder — replace with firm history once confirmed */}
            Omuyoma & Co. Advocates was founded to provide dependable, precise legal counsel to
            individuals and businesses across Kenya. The firm's practice spans litigation,
            property, corporate, and family law, built on a commitment to clarity at every stage
            of a matter.
          </p>
        </div>

        <div>
          <div className="aspect-[4/5] w-full max-w-xs rounded-sm bg-[var(--color-navy)]/10" aria-hidden="true" />
          {/* Replace the block above with an actual photo of Omuyoma once received */}
          <h2 className="mt-8 font-[family-name:var(--font-display)] text-2xl text-[var(--color-navy)]">Omuyoma</h2>
          <p className="text-[15px] text-[var(--color-gold)]">Managing Partner</p>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-[var(--color-slate)]">
            {/* Placeholder bio — replace with Omuyoma's confirmed credentials and background */}
            Omuyoma leads the firm's litigation and corporate practice, advising clients with an
            emphasis on thorough preparation and direct communication. Full biography and
            credentials to follow.
          </p>
        </div>
      </div>
    </section>
  );
}
