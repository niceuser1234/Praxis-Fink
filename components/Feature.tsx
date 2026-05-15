import { ScanLine, Shield, UserCheck, FileText } from "lucide-react";
import { palette } from "@/lib/palette";

function Bullet({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-3.5">
      <div
        className="w-10 h-10 rounded-xl grid place-items-center shrink-0"
        style={{ background: palette.primarySoft, color: palette.primary }}
      >
        {icon}
      </div>
      <div>
        <div className="text-[15px] font-semibold text-slate-900">{title}</div>
        <div className="text-[13.5px] text-slate-600 leading-snug">{desc}</div>
      </div>
    </div>
  );
}

export default function Feature() {
  return (
    <section className="py-20 lg:py-24" style={{ background: "#FAFAF7" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-14 items-center">
          {/* Left: image placeholder */}
          <div className="relative rounded-3xl overflow-hidden aspect-[5/4] shadow-md bg-slate-100">
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, ${palette.primarySofter} 0%, ${palette.primarySoft} 100%)`,
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <ScanLine className="w-24 h-24 opacity-20" style={{ color: palette.primary }} />
            </div>
            <div
              className="absolute left-4 top-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-[11.5px] font-semibold tracking-[0.1em] uppercase shadow-sm"
              style={{ color: palette.primaryInk }}
            >
              <ScanLine className="w-3.5 h-3.5" />
              Diagnostik vor Ort
            </div>
          </div>

          {/* Right: text + bullets */}
          <div>
            <div
              className="text-[11.5px] font-semibold tracking-[0.14em] uppercase mb-3"
              style={{ color: palette.primary }}
            >
              Diagnose im selben Termin
            </div>
            <h2
              className="font-serif font-normal text-slate-900 leading-[1.1] tracking-[-0.01em] mb-5"
              style={{ fontSize: "clamp(28px, 3vw, 40px)" }}
            >
              Digitales Röntgen & Ultraschall —{" "}
              <em className="italic" style={{ color: palette.primary }}>
                direkt in der Praxis.
              </em>
            </h2>
            <p className="text-[16px] leading-[1.7] text-slate-600 mb-6 max-w-[52ch]">
              Bei akuten Beschwerden wollen Sie nicht erst zum Radiologen geschickt werden. Wir
              röntgen, schallen und besprechen den Befund im selben Termin — strahlungsarm und
              für GKV-, PKV- und Selbstzahler abrechenbar.
            </p>
            <div className="flex flex-col gap-4">
              <Bullet
                icon={<ScanLine className="w-[18px] h-[18px]" />}
                title="Sofortbefund"
                desc="Digitales Röntgen & Ultraschall im selben Termin."
              />
              <Bullet
                icon={<Shield className="w-[18px] h-[18px]" />}
                title="Strahlungsarm"
                desc="Modernes digitales Röntgensystem."
              />
              <Bullet
                icon={<UserCheck className="w-[18px] h-[18px]" />}
                title="Persönlich"
                desc="Befundbesprechung mit dem Arzt."
              />
              <Bullet
                icon={<FileText className="w-[18px] h-[18px]" />}
                title="Ohne Zusatztermin"
                desc="Keine zweite Anfahrt nötig."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
