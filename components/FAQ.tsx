"use client";

import { useState } from "react";

const QUESTIONS = [
  {
    question: "Qual é o tempo médio de um procedimento de clareamento?",
    answer:
      "O clareamento a laser é feito em consultório e dura cerca de uma hora por sessão, com resultados visíveis já na primeira aplicação. Já o clareamento caseiro, com moldeiras personalizadas, costuma levar de 1 a 3 semanas de uso noturno.",
  },
  {
    question: "Como funciona uma cirurgia odontológica?",
    answer:
      "A cirurgia é planejada de acordo com a necessidade de cada paciente. O procedimento é realizado com técnicas adequadas e anestesia local, sempre priorizando a segurança, o conforto e uma recuperação tranquila.",
  },
  {
    question: "O que fazer em caso de emergência odontológica?",
    answer:
      "Em casos de dor intensa, trauma, inchaço ou outros desconfortos repentinos, é importante buscar atendimento o quanto antes. A avaliação profissional ajuda a identificar a causa e definir o tratamento mais adequado.",
  },
  {
    question: "Com que frequência devo fazer uma limpeza dental?",
    answer:
      "A frequência ideal depende da saúde bucal e das necessidades de cada paciente. De forma geral, avaliações e limpezas periódicas ajudam a prevenir o acúmulo de placa e tártaro e a manter dentes e gengivas saudáveis.",
  },
  {
    question: "Como posso agendar uma consulta?",
    answer:
      "Basta clicar no botão de WhatsApp no topo da página ou preencher o formulário na seção de contato — nossa equipe responde em até um dia útil para confirmar o melhor horário.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-navy py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="text-center">
          <span className="mx-auto block h-[3px] w-14 bg-gold" />
          <h2 className="mt-6 font-display text-4xl font-bold text-cream sm:text-5xl">
            Perguntas Frequentes
          </h2>
          <p className="mt-3 text-[15px] text-cream/50">
            Tire suas dúvidas sobre nossos procedimentos
          </p>
        </div>

        <div className="mt-12 divide-y divide-white/10 border-t border-white/10">
          {QUESTIONS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="text-[15px] font-semibold text-cream">
                    {item.question}
                  </span>
                  <svg
                    viewBox="0 0 16 16"
                    className={`h-4 w-4 shrink-0 text-gold-light transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 6l4 4 4-4" />
                  </svg>
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                  }`}
                >
                  <p className="min-h-0 text-sm leading-relaxed text-cream/55">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
