export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-navy)] text-[var(--color-ivory)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <p className="font-[family-name:var(--font-display)] text-lg">Omuyoma & Co. Advocates</p>
          <p className="mt-3 max-w-xs text-sm text-[var(--color-ivory)]/70">
            Advocates of the High Court of Kenya, providing counsel across litigation, property,
            corporate, and family law.
          </p>
        </div>

        <div>
          <p className="text-sm text-[var(--color-gold)]">Quick links</p>
          <ul className="mt-3 space-y-2 text-sm text-[var(--color-ivory)]/80">
            <li><a href="/about" className="hover:text-[var(--color-gold)]">About the firm</a></li>
            <li><a href="/practice-areas" className="hover:text-[var(--color-gold)]">Practice areas</a></li>
            <li><a href="/contact" className="hover:text-[var(--color-gold)]">Contact</a></li>
            <li><a href="https://app.omuyomaadvocates.co.ke" className="hover:text-[var(--color-gold)]">Client portal</a></li>
          </ul>
        </div>

        <div>
          <p className="text-sm text-[var(--color-gold)]">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-[var(--color-ivory)]/80">
            <li>Nairobi, Kenya</li>
            <li><a href="mailto:info@omuyomaadvocates.co.ke" className="hover:text-[var(--color-gold)]">info@omuyomaadvocates.co.ke</a></li>
            <li>Phone: +254 7XX XXX XXX</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--color-ivory)]/10 px-6 py-5 text-center text-xs text-[var(--color-ivory)]/50">
        © {year} Omuyoma & Co. Advocates. All rights reserved.
      </div>
    </footer>
  );
}
