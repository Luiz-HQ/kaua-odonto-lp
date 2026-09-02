# Dr. Kauã Oliveira — Landing Page

Landing page para clínica odontológica, construída com **Next.js 16 (App Router)**, **TypeScript** e **Tailwind CSS v4**.

## Estrutura

```
app/
  layout.tsx        # fontes (Playfair Display + Inter) e metadata
  page.tsx           # monta as seções na ordem final
  globals.css         # tokens de cor/tema (navy, gold, cream)
components/
  Header.tsx          # navbar fixa + menu mobile
  Hero.tsx             # seção inicial com CTA e estatísticas
  Procedimentos.tsx    # cards de serviços com hover
  Sobre.tsx            # seção "sobre" com destaques
  FAQ.tsx               # acordeão de perguntas frequentes
  Contato.tsx            # informações + formulário de contato
  Footer.tsx              # rodapé com navegação e redes sociais
```

## Como rodar

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Build de produção

```bash
npm run build
npm start
```

## Personalização rápida

- **Cores/tema**: edite os tokens em `app/globals.css` (`--color-navy`, `--color-gold`, `--color-cream`, etc.).
- **WhatsApp**: troque o número em `WHATSAPP_URL` (`components/Header.tsx` e `components/Contato.tsx`).
- **Foto do médico / clínica**: os componentes `Hero.tsx` e `Sobre.tsx` usam ilustrações SVG como placeholder — substitua por `next/image` apontando para fotos reais quando disponíveis.
- **Formulário de contato**: `components/Contato.tsx` tem um `handleSubmit` de demonstração — conecte a um endpoint (API route, e-mail, CRM) para receber os envios de verdade.
- **Textos**: conteúdo de procedimentos e FAQ está em arrays no topo de `Procedimentos.tsx` e `FAQ.tsx`.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19
- TypeScript
- Tailwind CSS v4
