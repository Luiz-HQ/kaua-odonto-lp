const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Procedimentos", href: "#procedimentos" },
  { label: "Contato", href: "#contato" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-navy pt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 pb-14 sm:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <a href="#inicio" className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-gold-light to-gold font-display text-base font-bold text-navy">
                KO
              </span>
              <span className="leading-tight">
                <span className="block font-display text-lg font-semibold text-cream">
                  Dr. Kauã Oliveira
                </span>
                <span className="block text-[11px] tracking-[0.18em] text-gold-light/80">
                  ODONTOLOGIA
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/45">
              Transformando sorrisos com excelência, tecnologia e cuidado
              genuíno por cada paciente.
            </p>
            <div className="mt-6 flex gap-3">
              <SocialIcon href="https://instagram.com" label="Instagram">
                <InstagramIcon className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href="https://facebook.com" label="Facebook">
                <FacebookIcon className="h-4 w-4" />
              </SocialIcon>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold tracking-[0.15em] text-cream/70">
              NAVEGAÇÃO
            </p>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/50 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold tracking-[0.15em] text-cream/70">
              CONTATO
            </p>
            <ul className="mt-5 space-y-3 text-sm text-cream/50">
              <li className="flex items-center gap-2">
                <PinIcon className="h-4 w-4 text-gold-light" />
                São Paulo, SP
              </li>
              <li className="flex items-center gap-2">
                <PhoneIcon className="h-4 w-4 text-gold-light" />
                (11) 94300-7556
              </li>
              <li className="flex items-center gap-2">
                <MailIcon className="h-4 w-4 text-gold-light" />
                kaua@odontologia.com.br
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/5 py-7 text-xs text-cream/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Dr. Kauã Oliveira — Todos os direitos reservados
          </p>
          <p>CRO-SP 12345 · CNPJ 00.000.000/0001-00</p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-cream/60 transition-colors hover:border-gold/40 hover:text-gold-light"
    >
      {children}
    </a>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path d="M14 21v-7h2.4l.4-3H14V9c0-.9.3-1.5 1.7-1.5H17V5c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2V11H8v3h2.5v7H14Z" strokeLinejoin="round" />
    </svg>
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
