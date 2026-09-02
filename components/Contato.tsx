"use client";

import { useState } from "react";

const WHATSAPP_URL =
  "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.";

export default function Contato() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Formulário estático de demonstração — conecte a um endpoint (e-mail, CRM, etc.) em produção.
    setStatus("sent");
  }

  return (
    <section id="contato" className="bg-cream py-24 text-ink">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <span className="mx-auto block h-[3px] w-14 bg-gold" />
          <h2 className="mt-6 font-display text-4xl font-bold sm:text-5xl">
            Entre em Contato
          </h2>
          <p className="mt-3 text-[15px] text-ink/55">
            Agende sua consulta e dê o primeiro passo para o sorriso que
            você merece
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div>
            <div className="rounded-2xl bg-navy p-9 text-cream">
              <h3 className="font-display text-xl font-semibold">
                Informações do Consultório
              </h3>

              <ul className="mt-7 space-y-5">
                <InfoRow icon={PinIcon}>
                  Av. das Flores, 1234 — São Paulo, SP
                </InfoRow>
                <InfoRow icon={PhoneIcon}>(11) 9 9999-9999</InfoRow>
                <InfoRow icon={MailIcon}>kaua@odontologia.com.br</InfoRow>
              </ul>

              <div className="mt-7 border-t border-white/10 pt-6">
                <p className="text-[11px] font-semibold tracking-wide text-cream/40">
                  HORÁRIO DE ATENDIMENTO
                </p>
                <p className="mt-2 text-sm text-cream/70">
                  Segunda a Sexta: 8h às 18h
                </p>
                <p className="text-sm text-cream/70">Sábado: 8h às 12h</p>
              </div>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] py-4 text-sm font-semibold text-navy transition-transform hover:scale-[1.01]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Agendar via WhatsApp
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-white p-9 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
          >
            <h3 className="font-display text-xl font-semibold">
              Envie uma Mensagem
            </h3>

            <div className="mt-7 space-y-5">
              <Field label="Nome completo" htmlFor="name">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Seu nome"
                  className="w-full rounded-lg border border-ink/10 bg-cream/60 px-4 py-3 text-sm text-ink placeholder:text-ink/35 focus:border-gold focus:bg-white focus:outline-none"
                />
              </Field>

              <Field label="E-mail" htmlFor="email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="seu@email.com"
                  className="w-full rounded-lg border border-ink/10 bg-cream/60 px-4 py-3 text-sm text-ink placeholder:text-ink/35 focus:border-gold focus:bg-white focus:outline-none"
                />
              </Field>

              <Field label="Telefone" htmlFor="phone">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(11) 9 9999-9999"
                  className="w-full rounded-lg border border-ink/10 bg-cream/60 px-4 py-3 text-sm text-ink placeholder:text-ink/35 focus:border-gold focus:bg-white focus:outline-none"
                />
              </Field>

              <Field label="Mensagem" htmlFor="message">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Qual procedimento te interessa?"
                  className="w-full resize-none rounded-lg border border-ink/10 bg-cream/60 px-4 py-3 text-sm text-ink placeholder:text-ink/35 focus:border-gold focus:bg-white focus:outline-none"
                />
              </Field>
            </div>

            <button
              type="submit"
              className="mt-7 w-full rounded-lg bg-navy py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-navy-light"
            >
              {status === "sent" ? "Mensagem enviada ✓" : "Enviar Mensagem"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-[11px] font-semibold tracking-wide text-ink/50"
      >
        {label.toUpperCase()}
      </label>
      {children}
    </div>
  );
}

function InfoRow({
  icon: Icon,
  children,
}: {
  icon: (props: { className?: string }) => React.JSX.Element;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-center gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5">
        <Icon className="h-4 w-4 text-gold-light" />
      </span>
      <span className="text-sm text-cream/80">{children}</span>
    </li>
  );
}

function PinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path d="M12 21s7-6.2 7-11.6A7 7 0 0 0 5 9.4C5 14.8 12 21 12 21Z" strokeLinejoin="round" />
      <circle cx="12" cy="9.4" r="2.4" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path d="M6.6 10.8a13.6 13.6 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 9 9 0 0 0 3 .48 1 1 0 0 1 1 1V19.6a1 1 0 0 1-1 1A15.6 15.6 0 0 1 4 5.6a1 1 0 0 1 1-1H8.1a1 1 0 0 1 1 1 9 9 0 0 0 .48 3 1 1 0 0 1-.25 1L6.6 10.8Z" strokeLinejoin="round" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4.5 7 7.5 5.5L19.5 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.02 2C6.5 2 2.03 6.46 2.03 11.98c0 1.98.55 3.83 1.5 5.42L2 22l4.72-1.5a9.94 9.94 0 0 0 5.3 1.52h.01c5.52 0 9.98-4.46 9.98-9.98A9.93 9.93 0 0 0 12.02 2Zm5.8 14.24c-.24.68-1.4 1.32-1.93 1.4-.5.08-1.13.11-1.82-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.8-4.16-4.94-4.36-.14-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.57.81 1.98.88 2.12.07.14.12.31.02.5-.1.19-.15.31-.3.48-.14.17-.3.37-.43.5-.14.14-.29.29-.13.57.17.28.75 1.24 1.61 2.01 1.11 1 2.04 1.31 2.32 1.46.28.14.44.12.61-.07.17-.2.71-.83.9-1.11.19-.28.38-.24.63-.14.26.1 1.65.78 1.93.92.28.14.47.21.54.33.07.12.07.68-.17 1.36Z" />
    </svg>
  );
}
