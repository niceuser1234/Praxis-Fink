import Image from "next/image";
import { palette } from "@/lib/palette";

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div
        className="text-[11px] font-semibold tracking-[0.12em] uppercase mb-1.5"
        style={{ color: palette.primary }}
      >
        {label}
      </div>
      <div className="text-[14.5px] font-semibold text-slate-800 leading-snug">{value}</div>
    </div>
  );
}

export default function About() {
  return (
    <section
      id="praxis"
      className="py-24 lg:py-28"
      style={{ background: palette.primarySofter }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
          {/* Left: Portrait */}
          <div className="relative">
            <div className="rounded-[28px] overflow-hidden" style={{ aspectRatio: "1408 / 3052" }}>
              <Image
                src="/portrait-dr-fink.png"
                alt="Portrait Dr. Klaus Fink"
                width={1408}
                height={3052}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            {/* Caption card */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl px-5 py-4 shadow-lg border border-slate-100 max-w-[64%]">
              <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-slate-500 mb-1">
                In der Praxis seit
              </div>
              <div
                className="font-serif italic leading-none"
                style={{ fontSize: "28px", color: palette.primary }}
              >
                2008
              </div>
              <div className="text-[12.5px] text-slate-500 mt-1">über 17 Jahre für Mölln</div>
            </div>
          </div>

          {/* Right: Text */}
          <div>
            <div
              className="text-[11.5px] font-semibold tracking-[0.14em] uppercase mb-3"
              style={{ color: palette.primary }}
            >
              Über die Praxis
            </div>
            <h2
              className="font-serif font-normal text-slate-900 leading-[1.1] tracking-[-0.01em] mb-6"
              style={{ fontSize: "clamp(30px, 3.2vw, 44px)" }}
            >
              Ein Arzt, der{" "}
              <em className="italic" style={{ color: palette.primary }}>
                zuhört
              </em>{" "}
              — bevor er behandelt.
            </h2>

            <p className="text-[17px] leading-[1.7] text-slate-700 mb-5 max-w-[56ch]">
              „Liebe Patientin, lieber Patient, ich freue mich, Sie in meiner Praxis in Mölln zu sehen.
              Bei akuten Schmerzen and
              chronischen Beschwerden nehme ich mir die Zeit, die Sie brauchen — für eine gründliche
              Untersuchung und eine Behandlung, die wirklich passt."
            </p>
            <p className="text-[16px] leading-[1.65] text-slate-600 mb-8 max-w-[56ch]">
              Mein Schwerpunkt liegt auf konservativer Orthopädie: Schmerzen lindern, Beweglichkeit
              erhalten, Operationen vermeiden, wo möglich. Chirotherapie, Stoßwelle und
              Akupunktur ergänzen das klassische Spektrum — für Erwachsene und Kinder. Operationen sind
              selten der erste Schritt — und nie der einzige Weg, den wir Ihnen anbieten.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-5 pt-6 border-t border-slate-200/70">
              <Stat label="Fachgebiet" value="Orthopädie & Chirotherapie" />
              <Stat label="Sprachen" value="Deutsch · Englisch" />
              <Stat label="Abrechnung" value="GKV · Privat · Selbstzahler" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
