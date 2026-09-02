const HIGHLIGHTS = [
  "Equipamentos digitais de última geração",
  "Planejamento personalizado para cada paciente",
  "Ambiente acolhedor e biossegurança rigorosa",
];

export default function Sobre() {
  return (
    <section className="bg-navy py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <div className="order-2 overflow-hidden rounded-2xl border border-white/5 lg:order-1">
          <div className="aspect-[4/3] w-full">
            <ClinicIllustration />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="block h-[3px] w-14 bg-gold" />
          <h2 className="mt-6 font-display text-4xl font-bold text-cream sm:text-5xl">
            Cuidado guiado por tecnologia
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-cream/60">
            Cada consulta começa com um diagnóstico digital detalhado, para
            que o tratamento seja desenhado especificamente para a sua boca
            — sem soluções genéricas.
          </p>

          <ul className="mt-8 space-y-4">
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15">
                  <svg viewBox="0 0 16 16" className="h-3 w-3 text-gold" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 8.5 6.2 12 13 4" />
                  </svg>
                </span>
                <span className="text-[15px] text-cream/75">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ClinicIllustration() {
  return (
    <svg viewBox="0 0 480 360" className="h-full w-full" role="img" aria-label="Consultório odontológico">
      <rect width="480" height="360" fill="#e3e1d9" />
      <rect x="0" y="0" width="480" height="360" fill="#12141f" opacity="0.03" />
      <rect x="40" y="60" width="200" height="140" rx="8" fill="#ffffff" opacity="0.7" />
      <rect x="55" y="75" width="170" height="95" rx="4" fill="#0d0f1a" opacity="0.85" />
      <rect x="65" y="85" width="150" height="70" rx="2" fill="#c9a15c" opacity="0.35" />
      <circle cx="330" cy="120" r="46" fill="#0d0f1a" opacity="0.85" />
      <path d="M270 260c14-46 46-72 84-72s70 26 84 72" fill="#0d0f1a" opacity="0.85" />
      <rect x="30" y="230" width="420" height="10" rx="5" fill="#c9a15c" opacity="0.25" />
    </svg>
  );
}
