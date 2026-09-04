import {
  Syringe,
  Sparkles,
  Siren,
  BrushCleaning,
  type LucideIcon,
} from "lucide-react";

const SERVICES = [
{
    title: "Cirurgia Odontológica",
    description:
      "Procedimentos cirúrgicos realizados com segurança e cuidado, sempre buscando o melhor conforto e resultado para cada paciente.",
    icon: Syringe,
  },
  {
    title: "Clareamento Dental",
    description:
      "Técnicas a laser e moldeiras personalizadas para um sorriso visivelmente mais branco em poucas sessões.",
    icon: Sparkles,
  },
  {
    title: "Emergencia",
    description:
      "Atendimento para aliviar dores e tratar problemas odontológicos que precisam de atenção rápida e especializada.",
    icon: Siren,
  },
  {
    title: "Limpeza",
    description:
      "Remoção de placa bacteriana e tártaro para manter seus dentes limpos, saudáveis e seu sorriso sempre bem cuidado.",
    icon: BrushCleaning,
  },
];

export default function Procedimentos() {
  return (
    <section id="procedimentos" className="bg-cream py-24 text-ink">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <span className="mx-auto block h-[3px] w-14 bg-gold" />
          <h2 className="mt-6 font-display text-4xl font-bold sm:text-5xl">
            Procedimentos
          </h2>
          <p className="mt-3 text-[15px] text-ink/55">
            Passe o mouse sobre cada card para conhecer o tratamento
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <div className="group h-72 [perspective:1400px]">
      <div className="relative h-full w-full rounded-2xl border border-[#00000017] shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-transform duration-500 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-hover:shadow-[0_18px_40px_-16px_rgba(12,14,26,0.35)]">
        {/* Front — icon + name only */}
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-white p-9 text-center [backface-visibility:hidden]">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
            <Icon className="h-7 w-7 text-gold" />
          </div>
          <h3 className="mt-6 font-display text-xl font-semibold">{title}</h3>
          <p className="mt-3 text-[11px] font-medium tracking-wide text-ink/35">
            PASSE O MOUSE
          </p>
        </div>

        {/* Back — description, same navy base color as the site */}
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-navy p-9 text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15">
            <Icon className="h-5 w-5 text-gold-light" />
          </div>
          <h3 className="mt-5 font-display text-lg font-semibold text-cream">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-cream/65">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
