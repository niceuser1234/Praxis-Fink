export type ServiceItem = { title: string; desc: string };

export type Service = {
  id: string;
  label: string;
  blurb: string;
  icon: string;
  items: ServiceItem[];
};

export const SERVICES: Service[] = [
  {
    id: "akut",
    label: "Akute Schmerztherapie",
    blurb: "Schnelle Hilfe bei plötzlichen Beschwerden — meist innerhalb von 24–48 Std.",
    icon: "activity",
    items: [
      { title: "Akutsprechstunde", desc: "Reservierte Slots für neu aufgetretene starke Schmerzen — bitte telefonisch melden." },
      { title: "Rücken- & Wirbelsäulenschmerzen", desc: "Bandscheibe, Ischias, Hexenschuss, Blockaden — konservative Erstbehandlung in einer Sitzung." },
      { title: "Knie- & Schulterschmerzen", desc: "Schmerzdiagnose, Punktion, Infiltration sowie Kortison- oder Hyalurontherapie nach Bedarf." },
      { title: "Sportverletzungen", desc: "Bänder, Sehnen, Muskelfaserrisse. Erstversorgung, Tape, Stoßwelle, Rückkehr-zum-Sport-Plan." },
      { title: "Manuelle Therapie & Chirotherapie", desc: "Sanftes Lösen von Blockaden an Wirbelsäule und Gelenken — ohne Knacken, wenn gewünscht." },
    ],
  },
  {
    id: "diag",
    label: "Diagnostik & Bildgebung",
    blurb: "Klare Antworten direkt vor Ort — digital und schnell.",
    icon: "scan-line",
    items: [
      { title: "Digitales Röntgen", desc: "Strahlungsarme Aufnahmen in der Praxis. Befund noch im selben Termin." },
      { title: "Ganganalyse & Haltungsdiagnostik", desc: "Für Beschwerden an Knie, Hüfte und Rücken — inkl. Einlagen-Empfehlung." },
      { title: "OP-Beratung & Zweitmeinung", desc: "Zweite Meinung vor geplanten orthopädischen Eingriffen. Unabhängig und in Ruhe." },
    ],
  },
  {
    id: "verfahren",
    label: "Spezielle Verfahren",
    blurb: "Moderne konservative Methoden — wenn Standardtherapie nicht reicht.",
    icon: "sparkles",
    items: [
      { title: "Stoßwellentherapie", desc: "Fersensporn, Tennisellbogen, chronische Sehnenreizungen. Meist 3–5 Sitzungen." },
      { title: "Hyaluronsäure-Behandlung", desc: "Bei Arthrose im Knie oder an der Schulter — Schmerzlinderung über Monate." },
      { title: "Akupunktur (Körper & Ohr)", desc: "Anerkannte Schmerzakupunktur bei chronischen Rücken- und Knieschmerzen." },
    ],
  },
];

// [day, hours] — index 0 = Monday
export const HOURS: [string, string][] = [
  ["Montag",     "08:00 – 12:00 · 13:00 – 15:00"],
  ["Dienstag",   "08:00 – 12:00 · 13:00 – 15:00"],
  ["Mittwoch",   "08:00 – 13:00"],
  ["Donnerstag", "08:00 – 13:00 · 14:00 – 17:00"],
  ["Freitag",    "08:00 – 13:00"],
  ["Samstag",    "geschlossen"],
  ["Sonntag",    "geschlossen"],
];

// Vacation override: set to "YYYY-MM-DD" (last day of closure), or null if none
export const VACATION_UNTIL: string | null = "2026-05-25";

export type NewsItem = {
  tag: string;
  tagBg: string;
  tagFg: string;
  date: string;
  title: string;
  body: string;
};

export const NEWS: NewsItem[] = [
  {
    tag: "Urlaub", tagBg: "#FDE68A", tagFg: "#713F12",
    date: "21.05.–25.05.",
    title: "Praxis geschlossen – Urlaub",
    body: "Die Praxis ist vom 21. bis 25. Mai 2026 im Urlaub. Ab dem 26. Mai sind wir wieder für Sie da.",
  },
  {
    tag: "Hinweis", tagBg: "#7DD3FC", tagFg: "#0C4A6E",
    date: "12.05.",
    title: "Online-Terminbuchung über Doctolib",
    body: "Sie können ab sofort alle Termine bequem online buchen — inkl. Akut- und Folgeterminen.",
  },
  {
    tag: "Urlaub", tagBg: "#FDE68A", tagFg: "#713F12",
    date: "14.07.–28.07.",
    title: "Sommerurlaub der Praxis",
    body: "Akutversorgung übernimmt in dieser Zeit die Praxis Dr. Müller, Ratzeburger Allee 12 · Tel. 04541 1234.",
  },
  {
    tag: "Wichtig", tagBg: "#FECACA", tagFg: "#7F1D1D",
    date: "heute",
    title: "FFP2-Maske empfohlen",
    body: "In den Behandlungsräumen empfehlen wir weiterhin das Tragen einer Maske — zum Schutz aller Patient:innen.",
  },
  {
    tag: "Barriere", tagBg: "#E9D5FF", tagFg: "#4C1D95",
    date: "aktuell",
    title: "Eingeschränkte Barrierefreiheit – Baustelle",
    body: "Die Hauptstraße ist derzeit Baustelle. Der Zugang zur Praxis kann zeitweise erschwert sein. Rollstuhlfahrer und Geheingeschränkte empfehlen wir, eine Begleitung mitzubringen.",
  },
];
