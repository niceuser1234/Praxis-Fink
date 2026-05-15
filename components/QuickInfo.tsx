"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { palette } from "@/lib/palette";
import { HOURS } from "@/lib/data";

export default function QuickInfo() {
  const todayIdx = (new Date().getDay() + 6) % 7; // 0 = Monday
  const todayHours = HOURS[todayIdx];
  const isOpenToday = todayHours[1] !== "geschlossen";

  return (
    <section className="pb-20 lg:pb-24 -mt-2">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">

          {/* Card 1: Today's hours */}
          <div className="rounded-3xl bg-white border border-slate-200 p-6 lg:p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div
                className="text-[10.5px] font-semibold tracking-[0.14em] uppercase"
                style={{ color: palette.primary }}
              >
                Sprechzeiten
              </div>
              <span
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold ${
                  isOpenToday
                    ? "bg-emerald-50 text-emerald-700"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isOpenToday ? "bg-emerald-500" : "bg-slate-400"
                  }`}
                />
                {isOpenToday ? "Heute geöffnet" : "Heute geschlossen"}
              </span>
            </div>

            <div className="flex-1">
              <div
                className="font-serif font-normal text-slate-900 leading-tight mb-1"
                style={{ fontSize: "clamp(20px, 2.2vw, 26px)" }}
              >
                {todayHours[0]}
              </div>
              <div className="text-[16px] text-slate-600">{todayHours[1]}</div>
            </div>

            <a
              href="#sprechzeiten"
              className="mt-auto pt-4 border-t border-slate-100 inline-flex items-center gap-1 text-[13px] font-semibold hover:underline"
              style={{ color: palette.primary }}
            >
              Alle Sprechzeiten <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 2: Doctolib CTA */}
          <a
            href="https://www.doctolib.de/orthopadie/moelln/klaus-fink"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl p-6 lg:p-7 text-white shadow-md hover:shadow-lg transition-all relative overflow-hidden flex flex-col"
            style={{
              background: `linear-gradient(135deg, ${palette.primaryInk} 0%, ${palette.primary} 100%)`,
            }}
          >
            <div
              className="text-[10.5px] font-semibold tracking-[0.14em] uppercase mb-4 text-white/70"
            >
              Online-Termin
            </div>
            <div
              className="font-serif font-normal text-white leading-tight mb-2"
              style={{ fontSize: "clamp(20px, 2.2vw, 26px)" }}
            >
              Jetzt Termin buchen
            </div>
            <div className="text-[14px] text-white/75 leading-[1.55] mb-5 flex-1">
              Direkt auf Doctolib — Akut- und Folgetermine rund um die Uhr buchbar.
            </div>
            <div className="mt-auto inline-flex items-center gap-1.5 text-[13px] font-semibold text-white/90 group-hover:text-white">
              Jetzt buchen
              <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
