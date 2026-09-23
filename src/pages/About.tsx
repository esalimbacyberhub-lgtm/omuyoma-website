export default function About() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-heading)] md:text-4xl">
          A firm built on excellence and commitment
        </h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[var(--color-muted)]">
          Where professional excellence meets personal commitment.
        </p>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="text-sm text-[var(--color-gold)]">Our Firm</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-[var(--color-muted)]">
              Established on 9th August 2023, Omuyoma & Co. Advocates was founded to bridge the
              gap between rigorous legal expertise and genuine human connection — serving
              individuals and corporate bodies across Kenya.
            </p>
          </div>
          <div>
            <h2 className="text-sm text-[var(--color-gold)]">Our Approach</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-[var(--color-muted)]">
              To provide personalized, integrity-driven legal services at every client's hour of
              need, with timeliness and care — ensuring every matter receives the attention it
              deserves.
            </p>
          </div>
          <div>
            <h2 className="text-sm text-[var(--color-gold)]">Our Vision</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-[var(--color-muted)]">
              To be a distinguished legal practice renowned for setting the standard where
              professional excellence meets personal commitment, delivering legal services with
              integrity, timeliness, and genuine care.
            </p>
          </div>
        </div>

        <div className="mt-16 max-w-3xl">
          <h2 className="font-[family-name:var(--font-display)] text-xl text-[var(--color-heading)]">Our story</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-muted)]">
            The firm was founded with a clear vision: to offer legal services that are not only
            technically sound but also deeply personalized. The firm's establishment was informed
            by the guiding principle that professional excellence and personal commitment go hand
            in hand — a principle it has remained steadfast to since its founding.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-muted)]">
            Omuyoma & Co. Advocates takes pride in serving a diverse and distinguished clientele,
            ranging from individuals to corporate bodies, spanning various sectors of the economy.
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] bg-[var(--color-bg-alt)]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-14 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <img
                src="/omuyoma.jpg"
                alt="Omuyoma Amukhono, Managing Partner"
                className="aspect-[4/5] w-full max-w-xs rounded-sm object-cover"
              />
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-heading)]">
                Omuyoma Amukhono
              </h2>
              <p className="text-[15px] text-[var(--color-gold)]">Managing Partner</p>

              <p className="mt-6 text-[15px] leading-relaxed text-[var(--color-muted)]">
                Omuyoma graduated in law in 2017 from Kenyatta University School of Law and
                joined the Kenya School of Law for his Post Graduate Diploma in Law between
                2019 and 2020. He joined the firm of Kounah &amp; Company Advocates in 2020,
                undertaking his Articles of Pupillage and, after being admitted to the Roll of
                Advocates on 12th May 2022, continuing on as an associate advocate until July
                2023.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-muted)]">
                During his time at Kounah &amp; Company Advocates, he gained considerable
                experience in conveyancing, civil litigation, debt collection, company formation,
                probate and administration, and the preparation and perfection of securities for
                financial institutions.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-muted)]">
                On 9th August 2023, he established Omuyoma &amp; Co. Advocates, where he has
                since practiced across Corporate and Commercial Law, Intellectual Property Law,
                Banking, Conveyancing, Business Law, and Civil Litigation. He currently serves
                as the firm's managing partner.
              </p>
              <a
                href="/team"
                className="mt-4 inline-block text-[15px] text-[var(--color-heading)] underline decoration-[var(--color-gold)] underline-offset-4"
              >
                View the full team
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
