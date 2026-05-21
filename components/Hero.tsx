import { Phone, CalendarCheck, ShieldCheck, MapPin } from "lucide-react";
import { palette } from "@/lib/palette";

function Trust({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="inline-flex items-center gap-2 text-[13.5px] text-white/85">
      {icon}
      <span>{label}</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative pt-6 lg:pt-10 pb-10 lg:pb-14">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div
          className="relative overflow-hidden rounded-[36px] px-7 py-14 lg:px-20 lg:py-24"
          style={{
            background: `linear-gradient(135deg, ${palette.primaryInk} 0%, ${palette.primary} 60%, ${palette.accent} 120%)`,
          }}
        >
          {/* Decorative oversized "F" */}
          <div
            className="absolute -right-8 -top-12 font-serif italic select-none pointer-events-none leading-none"
            style={{ fontSize: "clamp(280px, 32vw, 460px)", color: "rgba(255,255,255,0.06)" }}
          >
            F
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-10 lg:gap-12 items-center">
            {/* Left: Headline + CTAs */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11.5px] font-medium tracking-[0.14em] uppercase mb-7"
                style={{ background: "rgba(255,255,255,0.14)", color: "#fff", backdropFilter: "blur(8px)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                Orthopädie · Mölln seit 2008
              </div>

              <h1
                className="font-serif font-normal text-white leading-[1.04] tracking-[-0.015em] mb-7"
                style={{ fontSize: "clamp(42px, 5.6vw, 76px)" }}
              >
                Bewegung,<br />
                die{" "}
                <em className="italic" style={{ color: palette.primarySoft }}>
                  zurückkommt.
                </em>
              </h1>

              <p className="text-[17px] leading-[1.65] text-white/85 max-w-[48ch] mb-9">
                Akute Schmerzen an Gelenken, Wirbelsäule oder Muskulatur — wir diagnostizieren schnell
                und behandeln Sie mit konservativer Orthopädie, Chirotherapie und modernen Verfahren.
                Persönlich. In Ruhe. Direkt in Mölln.
              </p>

              <div className="flex flex-wrap items-center gap-3 mb-9">
                <a
                  href="https://www.doctolib.de/orthopadie/moelln/klaus-fink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-[15px] font-semibold shadow-lg hover:-translate-y-px transition-all"
                  style={{ background: "#fff", color: palette.primaryInk }}
                >
                  <CalendarCheck className="w-[18px] h-[18px]" />
                  Termin online buchen
                </a>
                <a
                  href="tel:+4945426026"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-[15px] font-medium text-white border border-white/30 hover:bg-white/10 transition-all"
                >
                  <Phone className="w-[18px] h-[18px]" />
                  04542 6026
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-x-7 gap-y-3 pt-6 border-t border-white/15">
                <Trust icon={<ShieldCheck className="w-4 h-4" />} label="Gesetzlich · Privat · Selbstzahler" />
                <Trust icon={<MapPin className="w-4 h-4" />} label="Hauptstraße 33, Mölln" />
              </div>
            </div>

            {/* Right: Doctor identity card */}
            <div
              className="relative rounded-3xl bg-white/95 backdrop-blur p-6 lg:p-7"
              style={{ boxShadow: "0 30px 80px -20px rgba(0,0,0,0.35)" }}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="text-[10.5px] font-semibold tracking-[0.12em] uppercase text-slate-500">
                  Ihr Arzt
                </div>
                <span
                  className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[10.5px] font-semibold tracking-[0.04em]"
                  style={{ background: palette.primarySofter, color: palette.primaryInk }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: palette.primary }} />
                  IN DER PRAXIS
                </span>
              </div>

              <div
                className="font-serif font-normal text-slate-900 leading-[1.08] mb-2"
                style={{ fontSize: "30px" }}
              >
                Dr. med. Klaus Fink
              </div>

              <div className="text-[14px] text-slate-600 leading-[1.55] mb-5">
                Facharzt für{" "}
                <span className="text-slate-800 font-medium">Orthopädie, Akupunktur und Chirotherapie</span>.<br />
                Über 17 Jahre Erfahrung in Mölln.
              </div>

              <div className="flex items-center gap-1.5 mb-5">
                <span className="text-amber-500 tracking-[1px] text-[13px]">★★★★☆</span>
                <span className="text-[13px] font-semibold text-slate-800">4,2</span>
                <span className="text-[12.5px] text-slate-500">· 50 Google-Bewertungen</span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-5 border-t border-slate-200/70">
                <div>
                  <div className="text-[10.5px] font-semibold tracking-[0.12em] uppercase text-slate-500 mb-1">
                    Fachgebiet
                  </div>
                  <div className="text-[13.5px] font-semibold text-slate-800 leading-snug">
                    Orthopädie · Chirotherapie
                  </div>
                </div>
                <div>
                  <div className="text-[10.5px] font-semibold tracking-[0.12em] uppercase text-slate-500 mb-1">
                    In Mölln seit
                  </div>
                  <div className="text-[13.5px] font-semibold text-slate-800 leading-snug">
                    2008 · 17 Jahre
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
