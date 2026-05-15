import { MapPin, Phone, Mail, CalendarCheck } from "lucide-react";
import { palette } from "@/lib/palette";

function ContactRow({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-3 items-start text-slate-700">
      <span className="w-[18px] h-[18px] mt-0.5 shrink-0 text-slate-500">{icon}</span>
      <div>{children}</div>
    </li>
  );
}

export default function Contact() {
  return (
    <section id="kontakt" className="py-24 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <div
              className="text-[11.5px] font-semibold tracking-[0.14em] uppercase mb-3"
              style={{ color: palette.primary }}
            >
              Kontakt & Anfahrt
            </div>
            <h2
              className="font-serif font-normal text-slate-900 leading-[1.1] tracking-[-0.01em]"
              style={{ fontSize: "clamp(30px, 3.2vw, 44px)" }}
            >
              So <em className="italic" style={{ color: palette.primary }}>erreichen</em> Sie uns.
            </h2>
          </div>
          <p className="text-slate-600 text-[15.5px] max-w-[40ch]">
            Parkplätze direkt vor der Praxis und am Kurpark. Bushaltestelle „Hauptstraße" 80 m entfernt.
          </p>
        </div>

        <div className="grid lg:grid-cols-[380px_1fr] gap-8 lg:gap-12 items-start">
          {/* Contact details */}
          <div className="bg-white rounded-3xl border border-slate-200 p-7 shadow-sm">
            <div className="mb-5">
              <div className="font-semibold text-slate-900 text-[17px] mb-1">
                Orthopädische Praxis Dr. Klaus Fink
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-amber-500 tracking-[1px] text-[13px]">★★★★☆</span>
                <span className="text-[13px] font-semibold text-slate-800">4,2</span>
                <span className="text-[13px] text-slate-500">· 50 Google-Bewertungen</span>
              </div>
            </div>

            <ul className="flex flex-col gap-3.5 text-[14.5px] mb-7">
              <ContactRow icon={<MapPin className="w-[18px] h-[18px]" />}>
                <strong className="text-slate-900">Hauptstraße 33</strong>
                <br />
                23879 Mölln
              </ContactRow>
              <ContactRow icon={<Phone className="w-[18px] h-[18px]" />}>
                <a
                  href="tel:+4945426026"
                  className="font-semibold hover:underline"
                  style={{ color: palette.primary }}
                >
                  04542 6026
                </a>
              </ContactRow>
              <ContactRow icon={<Mail className="w-[18px] h-[18px]" />}>
                <a
                  href="mailto:praxis@dr-fink-moelln.de"
                  className="hover:underline"
                  style={{ color: palette.primary }}
                >
                  praxis@dr-fink-moelln.de
                </a>
              </ContactRow>
            </ul>

            <a
              href="https://www.doctolib.de/orthopadie/moelln/klaus-fink"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-[15px] font-semibold text-white shadow-lg hover:-translate-y-px transition-all w-full justify-center"
              style={{
                background: `linear-gradient(135deg, ${palette.primary}, ${palette.accent})`,
              }}
            >
              <CalendarCheck className="w-4 h-4" /> Termin buchen
            </a>
          </div>

          {/* Map */}
          <div className="relative min-h-[420px] lg:min-h-0 lg:h-full rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
            <iframe
              loading="lazy"
              src="https://www.google.com/maps?q=Hauptstra%C3%9Fe+33%2C+23879+M%C3%B6lln&output=embed"
              title="Standort Dr. Klaus Fink, Hauptstraße 33, Mölln"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
