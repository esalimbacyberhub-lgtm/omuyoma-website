export default function Team() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-heading)] md:text-4xl">
        Our Team
      </h1>
      <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[var(--color-muted)]">
        The firm is led by its founding managing partner, with the practice built to grow
        alongside the clients it serves.
      </p>

      <div className="mt-14 max-w-sm">
        <img
          src="/omuyoma.jpg"
          alt="Omuyoma Amukhono, Managing Partner"
          className="aspect-[4/5] w-full rounded-sm object-cover"
        />
        <p className="mt-5 text-[15px] text-[var(--color-gold)]">Managing Partner</p>
        <h2 className="font-[family-name:var(--font-display)] text-xl text-[var(--color-heading)]">
          Omuyoma Amukhono
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-muted)]">
          Admitted to the Roll of Advocates in 2022. Practices across Corporate and Commercial
          Law, Intellectual Property, Banking, Conveyancing, Business Law, and Civil Litigation.
        </p>
        <a
          href="/about"
          className="mt-3 inline-block text-[15px] text-[var(--color-heading)] underline decoration-[var(--color-gold)] underline-offset-4"
        >
          Read full bio
        </a>
      </div>
    </section>
  );
}
