"use client";

import { useState, useEffect } from "react";
import { Phone, CalendarCheck, Menu, X } from "lucide-react";
import { palette } from "@/lib/palette";

const navLinks = [
  ["Leistungen",   "#leistungen"],
  ["Praxis",       "#praxis"],
  ["Sprechzeiten", "#sprechzeiten"],
  ["Aktuelles",    "#aktuelles"],
  ["Kontakt",      "#kontakt"],
] as const;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/85 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[70px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <span
              className="w-9 h-9 rounded-xl grid place-items-center font-serif italic text-lg text-white shrink-0"
              style={{
                background: `linear-gradient(135deg, ${palette.primary}, ${palette.accent})`,
              }}
            >
              K
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-semibold text-slate-900 text-[15px] tracking-tight">
                Dr. Klaus Fink
              </span>
              <span className="text-[11px] text-slate-500 tracking-wide">
                Orthopädische Praxis · Mölln
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-9" aria-label="Hauptnavigation">
            {navLinks.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-[14.5px] text-slate-600 hover:text-slate-900 transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="tel:+4945426026"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-[13.5px] font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition"
            >
              <Phone className="w-4 h-4" />
              04542 6026
            </a>
            <a
              href="https://www.doctolib.de/orthopadie/moelln/klaus-fink"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-[13.5px] font-semibold text-white shadow-sm hover:-translate-y-px transition-all"
              style={{ background: palette.primary }}
            >
              <CalendarCheck className="w-4 h-4" />
              Termin buchen
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menü"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-100 px-6 py-5 flex flex-col gap-4">
          {navLinks.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-[15px] text-slate-700 hover:text-slate-900"
            >
              {label}
            </a>
          ))}
          <hr className="border-slate-100" />
          <a
            href="tel:+4945426026"
            className="inline-flex items-center gap-2 text-[14px] text-slate-700"
          >
            <Phone className="w-4 h-4" />
            04542 6026
          </a>
          <a
            href="https://www.doctolib.de/orthopadie/moelln/klaus-fink"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-[14px] font-semibold text-white"
            style={{ background: palette.primary }}
          >
            <CalendarCheck className="w-4 h-4" />
            Termin buchen
          </a>
        </div>
      )}
    </header>
  );
}
