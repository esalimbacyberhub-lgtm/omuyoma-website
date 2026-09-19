import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/team", label: "Team" },
  { to: "/practice-areas", label: "Practice Areas" },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
];

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `text-[14px] whitespace-nowrap transition-colors ${
    isActive ? "text-[var(--color-navy)] font-medium" : "text-[var(--color-slate)] hover:text-[var(--color-navy)]"
  }`;

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-black/5">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="flex shrink-0 items-center gap-3" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="Omuyoma & Co. Advocates emblem" className="h-9 w-auto" />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-[family-name:var(--font-display)] text-base text-[var(--color-navy)]">Omuyoma & Co.</span>
            <span className="text-[10px] tracking-wide text-[var(--color-gold)]">Advocates</span>
          </span>
        </NavLink>

        <nav className="hidden items-center gap-5 lg:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={navLinkClass} end={link.to === "/"}>
              {link.label}
            </NavLink>
          ))}
          <a
            href="https://app.omuyomaadvocates.co.ke"
            className="whitespace-nowrap rounded-sm bg-[var(--color-navy)] px-4 py-2 text-[14px] text-[var(--color-ivory)] transition-colors hover:bg-[var(--color-royal)]"
          >
            Client Portal
          </a>
        </nav>

        <button
          className="flex flex-col gap-1.5 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="h-px w-6 bg-[var(--color-navy)]" />
          <span className="h-px w-6 bg-[var(--color-navy)]" />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-4 border-t border-black/5 px-6 py-5 lg:hidden">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={navLinkClass} end={link.to === "/"} onClick={() => setOpen(false)}>
              {link.label}
            </NavLink>
          ))}
          <a
            href="https://app.omuyomaadvocates.co.ke"
            className="w-fit rounded-sm bg-[var(--color-navy)] px-4 py-2 text-[14px] text-[var(--color-ivory)]"
          >
            Client Portal
          </a>
        </nav>
      )}
    </header>
  );
}
