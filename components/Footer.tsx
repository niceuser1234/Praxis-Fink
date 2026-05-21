import { palette } from "@/lib/palette";

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: [string, string][];
}) {
  return (
    <div>
      <div className="text-[11.5px] font-semibold tracking-[0.14em] uppercase mb-3 text-white">
        {title}
      </div>
      <div className="flex flex-col gap-1.5">
        {links.map(([label, href]) => (
          <a key={label} href={href} className="text-[14px] text-white/65 hover:text-white">
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="text-white" style={{ background: palette.primaryInk }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 lg:gap-12 mb-12">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span
                className="w-10 h-10 rounded-2xl grid place-items-center font-serif italic text-xl text-white"
                style={{
                  background: `linear-gradient(135deg, ${palette.primary}, ${palette.accent})`,
                }}
              >
                K
              </span>
              <div className="flex flex-col leading-tight">
                <span className="font-semibold text-[15px]">Dr. Klaus Fink</span>
                <span className="text-[11.5px] text-white/55 tracking-wide">
                  Orthopädische Praxis · Mölln
                </span>
              </div>
            </div>
            <p className="text-[14px] text-white/65 leading-[1.65] max-w-[34ch]">
              Konservative Orthopädie, Chirotherapie und moderne Diagnostik — für Erwachsene und Kinder
              in Mölln und Umgebung.
            </p>
          </div>

          <FooterCol
            title="Praxis"
            links={[
              ["Leistungen", "#leistungen"],
              ["Über die Praxis", "#praxis"],
              ["Aktuelles", "#aktuelles"],
            ]}
          />
          <FooterCol
            title="Termine"
            links={[
              ["Doctolib", "https://www.doctolib.de/orthopadie/moelln/klaus-fink"],
              ["Sprechzeiten", "#sprechzeiten"],
              ["04542 6026", "tel:+4945426026"],
            ]}
          />
          <FooterCol
            title="Kontakt"
            links={[
              ["Hauptstraße 33, Mölln", "#kontakt"],
              ["praxis@dr-fink-moelln.de", "mailto:praxis@dr-fink-moelln.de"],
            ]}
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10 text-[12.5px] text-white/55">
          <div>© 2026 Orthopädische Praxis Dr. Klaus Fink</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Impressum</a>
            <a href="#" className="hover:text-white">Datenschutz</a>
            <a href="#" className="hover:text-white">Barrierefreiheit</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
