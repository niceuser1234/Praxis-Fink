"use client";

import { useState } from "react";
import { Activity, ScanLine, Sparkles, Phone } from "lucide-react";
import { palette } from "@/lib/palette";
import { SERVICES, Service, ServiceItem } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  activity:  <Activity className="w-5 h-5" />,
  "scan-line": <ScanLine className="w-5 h-5" />,
  sparkles:  <Sparkles className="w-5 h-5" />,
};

function ServiceLine({ item }: { item: ServiceItem }) {
  return (
    <div className="py-3.5 flex gap-3.5">
      <div
        className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
        style={{ background: palette.primary }}
      />
      <div>
        <div className="text-[15.5px] font-semibold text-slate-900 leading-snug">{item.title}</div>
        <div className="text-[14px] text-slate-600 leading-[1.55] mt-1">{item.desc}</div>
      </div>
    </div>
  );
}

function Tabs({ active, setActive }: { active: string; setActive: (id: string) => void }) {
  const current = SERVICES.find((s) => s.id === active)!;
  return (
    <div>
      {/* Tab bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
        {SERVICES.map((s) => {
          const isActive = s.id === active;
          return (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`group text-left p-5 rounded-2xl border transition-all ${
                isActive
                  ? "border-transparent shadow-md"
                  : "border-slate-200 bg-white hover:border-slate-300 hover:-translate-y-px"
              }`}
              style={
                isActive
                  ? {
                      background: `linear-gradient(135deg, ${palette.primary}, ${palette.accent})`,
                      color: "#fff",
                    }
                  : {}
              }
            >
              <div className="flex items-start gap-3.5">
                <div
                  className="w-10 h-10 rounded-xl grid place-items-center shrink-0"
                  style={
                    isActive
                      ? { background: "rgba(255,255,255,.18)", color: "#fff" }
                      : { background: palette.primarySofter, color: palette.primary }
                  }
                >
                  {iconMap[s.icon]}
                </div>
                <div>
                  <div
                    className={`text-[15.5px] font-semibold leading-tight mb-1 ${
                      isActive ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {s.label}
                  </div>
                  <div
                    className={`text-[13px] leading-snug ${
                      isActive ? "text-white/80" : "text-slate-500"
                    }`}
                  >
                    {s.blurb}
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Panel */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 lg:p-10 shadow-sm">
        <div className="grid lg:grid-cols-2 gap-x-12 gap-y-2">
          {current.items.map((it) => (
            <ServiceLine key={it.title} item={it} />
          ))}
        </div>
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <div className="text-[13.5px] text-slate-500">
            Unsicher, was zu Ihnen passt?{" "}
            <span className="text-slate-700">Wir beraten Sie persönlich.</span>
          </div>
          <a
            href="tel:+4945426026"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13.5px] font-medium hover:underline"
            style={{ color: palette.primary }}
          >
            <Phone className="w-4 h-4" /> Anruf zur Klärung
          </a>
        </div>
      </div>
    </div>
  );
}

function Accordion({ active, setActive }: { active: string; setActive: (id: string) => void }) {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm divide-y divide-slate-100">
      {SERVICES.map((s) => {
        const isOpen = s.id === active;
        return (
          <div key={s.id}>
            <button
              onClick={() => setActive(isOpen ? "" : s.id)}
              className="w-full flex items-center gap-5 p-6 lg:p-7 text-left hover:bg-slate-50/60 transition-colors"
            >
              <div
                className="w-11 h-11 rounded-xl grid place-items-center shrink-0"
                style={{ background: palette.primarySofter, color: palette.primary }}
              >
                {iconMap[s.icon]}
              </div>
              <div className="flex-1">
                <div className="text-[18px] font-semibold text-slate-900 leading-tight">{s.label}</div>
                <div className="text-[14px] text-slate-500 leading-snug mt-0.5">{s.blurb}</div>
              </div>
              <span className="text-slate-400 text-xl font-light">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && (
              <div className="px-6 lg:px-7 pb-7 pt-1 grid md:grid-cols-2 gap-x-10 gap-y-1">
                {s.items.map((it) => (
                  <ServiceLine key={it.title} item={it} />
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function Services({ mode = "tabs" }: { mode?: "tabs" | "accordion" }) {
  const [active, setActive] = useState(SERVICES[0].id);

  return (
    <section id="leistungen" className="py-24 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <div
              className="text-[11.5px] font-semibold tracking-[0.14em] uppercase mb-3"
              style={{ color: palette.primary }}
            >
              Leistungsspektrum
            </div>
            <h2
              className="font-serif font-normal text-slate-900 leading-[1.08] tracking-[-0.01em] max-w-[18ch]"
              style={{ fontSize: "clamp(34px, 3.6vw, 50px)" }}
            >
              Was bei Schmerzen{" "}
              <em className="italic" style={{ color: palette.primary }}>
                als&nbsp;Nächstes
              </em>{" "}
              hilft.
            </h2>
          </div>
          <p className="text-slate-600 text-[16px] leading-[1.65] max-w-[44ch]">
            Drei Schwerpunkte — von akuter Hilfe über klare Diagnostik bis zu modernen, schonenden Verfahren.
            Wählen Sie einen Bereich, um zu sehen, was wir konkret anbieten.
          </p>
        </div>

        {mode === "tabs" ? (
          <Tabs active={active} setActive={setActive} />
        ) : (
          <Accordion active={active} setActive={setActive} />
        )}
      </div>
    </section>
  );
}
