import { Link } from "react-router-dom";

export default function NotFound() {
  return <section className="mx-auto max-w-6xl px-6 py-20"><h1 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-heading)] md:text-4xl">Page not found</h1><p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[var(--color-muted)]">The page you are looking for may have moved. Explore our legal services or contact our Nairobi office.</p><div className="mt-8 flex gap-6"><Link to="/" className="underline decoration-[var(--color-gold)] underline-offset-4">Home</Link><Link to="/contact" className="underline decoration-[var(--color-gold)] underline-offset-4">Contact</Link></div></section>;
}
