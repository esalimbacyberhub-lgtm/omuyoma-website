import { practiceAreas } from "../data/practiceAreas";

export default function PracticeAreas() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-heading)] md:text-4xl">
        Practice areas
      </h1>
      <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-[var(--color-muted)]">
        The firm advises across the following areas. Reach out if your matter spans more than one.
      </p>

      <div className="mt-14 divide-y divide-[var(--color-border)] border-t border-[var(--color-border)]">
        {practiceAreas.map((area) => (
          <article key={area.slug} className="grid gap-3 py-10 md:grid-cols-[0.7fr_1.3fr] md:gap-10">
            <h2 className="font-[family-name:var(--font-display)] text-xl text-[var(--color-heading)]">{area.name}</h2>
            <p className="text-[15px] leading-relaxed text-[var(--color-muted)]">{area.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
