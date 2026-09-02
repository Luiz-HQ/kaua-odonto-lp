import Image from "next/image";

const QUALITIES = [
  {
    title: "Atendimento Humanizado",
  },
  {
    title: "Tecnologia Atualizada",
  },
  {
    title: "Cuidado Personalizado",
  },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-navy pb-24 pt-20 lg:pb-32 lg:pt-24"
    >
      {/* soft ambient glow, subject-appropriate accent rather than a generic gradient blob grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-10 h-[26rem] w-[26rem] rounded-full bg-gold/10 blur-[120px]"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-10">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 px-4 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-gold-light">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            ODONTOLOGIA DE EXCELÊNCIA
          </span>

          <h1 className="mt-7 font-display text-5xl leading-[1.08] text-cream sm:text-6xl lg:text-[3.75rem]">
            Seu sorriso
            <br />
            <span className="italic text-gold-light">merece o melhor</span>
            <br />
            cuidado.
          </h1>

          <p className="mt-7 max-w-md text-[15px] leading-relaxed text-cream/65">
            Transforme seu sorriso com o Dr.{" "}
            <span className="font-semibold text-cream">Kauã Oliveira</span>,
            especialista em odontologia estética e reabilitadora — tratamentos
            personalizados, resultados excepcionais.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#procedimentos"
              className="rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy transition-transform hover:scale-[1.03]"
            >
              Ver Procedimentos
            </a>
            <a
              href="#contato"
              className="rounded-full border border-cream/25 px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:border-cream/50"
            >
              Agendar Consulta
            </a>
          </div>

          <ul className="mt-14 grid gap-6 sm:grid-cols-3 sm:gap-8">
            {QUALITIES.map((quality) => (
              <li key={quality.title} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/15">
                  <CheckIcon className="h-4 w-4 text-gold" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-cream">
                    {quality.title}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div
            aria-hidden
            className="absolute -right-4 -top-4 h-full w-full rounded-[1.75rem] border border-gold/20"
          />
          <div className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-b from-cream-dark to-cream shadow-2xl">
            <div className="flex aspect-[4/5] items-center justify-center">
              <Image
                src="/kaua-foto.png"
                alt="Dr. Kauã Oliveira"
                fill
                priority
                sizes="(min-width: 1024px) 28rem, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex items-center justify-between bg-navy-card px-6 py-5">
              <div>
                <p className="font-display text-base font-semibold text-cream">
                  Dr. Kauã Oliveira
                </p>
                <p className="mt-0.5 text-[11px] tracking-wide text-gold-light/80">
                  CIRURGIÃO-DENTISTA · CRO-SP 12345
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 8.5 6.2 12 13 4" />
    </svg>
  );
}
