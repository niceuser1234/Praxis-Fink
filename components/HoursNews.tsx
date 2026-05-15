"use client";

import { palette } from "@/lib/palette";
import { HOURS, NEWS, NewsItem as NewsItemType } from "@/lib/data";

function NewsCard({ item }: { item: NewsItemType }) {
  return (
    <div
      className="relative rounded-2xl p-5 border border-white/10"
      style={{ background: "rgba(255,255,255,.06)" }}
    >
      <div className="flex items-start justify-between gap-3 mb-2.5">
        <span
          className="text-[10.5px] font-semibold tracking-[0.12em] uppercase px-2 py-[3px] rounded-full"
          style={{ background: item.tagBg, color: item.tagFg }}
        >
          {item.tag}
        </span>
        <span className="text-[12px] text-white/55 tabular-nums">{item.date}</span>
      </div>
      <div className="text-[15.5px] font-semibold leading-snug mb-1">{item.title}</div>
      <div className="text-[14px] text-white/75 leading-[1.55]">{item.body}</div>
    </div>
  );
}

export default function HoursNews() {
  const today = (new Date().getDay() + 6) % 7; // 0 = Monday

  return (
    <section id="sprechzeiten" className="py-24 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-6">

          {/* Hours card */}
          <div className="bg-white rounded-3xl border border-slate-200 p-7 lg:p-9 shadow-sm">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11.5px] font-semibold tracking-[0.04em] mb-5"
              style={{ background: "#DCFCE7", color: "#166534" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Sprechzeiten
            </div>
            <h2
              className="font-serif font-normal text-slate-900 leading-[1.1] tracking-[-0.01em] mb-6"
              style={{ fontSize: "clamp(26px, 2.8vw, 36px)" }}
            >
              Wann wir für Sie <em className="italic" style={{ color: palette.primary }}>da sind.</em>
            </h2>

            <div className="flex flex-col divide-y divide-slate-100">
              {HOURS.map(([day, hours], idx) => (
                <div
                  key={day}
                  className={`flex items-center justify-between py-3 ${
                    idx === today ? "font-semibold" : ""
                  }`}
                >
                  <span
                    className={`text-[14.5px] ${
                      idx === today ? "text-slate-900" : "text-slate-600"
                    }`}
                  >
                    {idx === today && (
                      <span
                        className="inline-block w-1.5 h-1.5 rounded-full mr-2 mb-0.5"
                        style={{ background: palette.primary }}
                      />
                    )}
                    {day}
                  </span>
                  <span
                    className={`text-[14px] tabular-nums ${
                      hours === "geschlossen"
                        ? "text-slate-400"
                        : idx === today
                        ? "text-slate-900"
                        : "text-slate-600"
                    }`}
                  >
                    {hours}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100 text-[13.5px] text-slate-500">
              Parkplätze direkt vor der Praxis und am Kurpark. Bushaltestelle „Hauptstraße" 80 m entfernt.
            </div>
          </div>

          {/* News card */}
          <div
            className="rounded-3xl p-7 lg:p-9 text-white"
            style={{
              background: `linear-gradient(135deg, ${palette.primaryInk} 0%, ${palette.primary} 100%)`,
            }}
          >
            <div
              id="aktuelles"
              className="text-[11.5px] font-semibold tracking-[0.14em] uppercase mb-3 text-white/70"
            >
              Aktuelles
            </div>
            <h2
              className="font-serif font-normal text-white leading-[1.1] tracking-[-0.01em] mb-6"
              style={{ fontSize: "clamp(26px, 2.8vw, 36px)" }}
            >
              Hinweise & <em className="italic">Neuigkeiten.</em>
            </h2>
            <div className="flex flex-col gap-3.5">
              {NEWS.map((item) => (
                <NewsCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
