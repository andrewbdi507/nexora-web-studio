# NEXORA WEB STUDIO

## Sobre o projeto

Site institucional e de portfólio do Nexora Web Studio, demonstrando habilidades em desenvolvimento frontend com Next.js, TypeScript e Tailwind CSS. Este é um projeto de demonstração/portfólio com conteúdo fictício, criado para apresentar skills de desenvolvimento web moderno.

O site apresenta uma landing page institucional com animações, sections interativas e componentes reutilizáveis para demonstração de habilidades técnicas.

## Principais características

- **Landing page institucional**: Página principal com hero section, sobre, serviços e contato
- **Componentes reutilizáveis**: QuizModal, MaskedHeading, CoverflowCarousel e HeroSection
- **Animações fluidas**: Framer Motion para animações de interação e GSAP para efeitos avançados
- **Design responsivo**: Mobile-first com Tailwind CSS, adapting a todas as telas
- **SEO estruturado**: Meta tags, JSON-LD e metadados otimizados para buscadores
- **Acessibilidade**: Implementação de heading masked e componentes com considerações de accessibility

## Stack

- **Framework**: Next.js 14.0.0
- **Linguagem**: TypeScript 5.3.0
- **Estilização**: Tailwind CSS com core utilities
- **Animações**: Framer Motion 11.0.0, GSAP (where implemented)
- **Tipografia**: class-variance-authority e clsx para variantes de classe
- **Projeto privado**: Configurado como `private: true` no package.json

## Estrutura

```
src/
├── app/
│   └── (next-rtl)/page.tsx
├── components/
│   ├── coverflow-carousel.tsx
│   ├── HeroSection.tsx
│   ├── MaskedHeading.tsx
│   └── QuizModal.tsx
├── lib/
│   └── content.ts  ← Conteúdo demonstrativo (siteTitle, demoCases, brandInfo, whatsappCTA)
├── sections/
│   └── HeroSection.tsx
├── lib/
│   └── content.ts
├── types/
├── package.json
├── next.config.ts
└── tsconfig.json
```

## Interface

- **Responsividade**: Layout construído com abordagem mobile-first utilizando Tailwind CSS
- **Componentes**: QuizModal (modal interativo), MaskedHeading (heading com máscara progressiva), CoverflowCarousel (carousel 3D com efeito coverflow), HeroSection (seção hero principal)
- **Experiência visual**: Animações com Framer Motion ao interagir com modais e transições de página

## Animações

- **Framer Motion**: Utilizado em QuizModal para animações de entrada/saída, MaskedHeading para efeitos de máscara transitória e HeroSection para transições suaves
- **GSAP**: Implementado em componentes específicos para efeitos de timeline e animações mais complexas (ver componentQuizzModal e coverflow-carousel)
- As animações são projetadas para melhorar a experiência sem comprometer o performance

## SEO

- **Metadado**: siteTitle, siteDescription, siteUrl definidos em `lib/content.ts`
- **JSON-LD**: Estrutura de metadados para melhor indexação em buscadores
- **Open Graph**: Configurações para compartilhamento em redes sociais
- **Domínios de imagens**: Configurado para images.unsplash.com e picsum.photos no next.config.ts

## Acessibilidade

- Componentes com headingMasked implementation em MaskedHeading.tsx
- Atributos aria onde aplicável
- Contraste de cores adequado na paleta brandInfo
- Estrutura semântica de heading levels

## Conteúdo

- **Conteúdo demonstrativo**: Centralizado em `lib/content.ts` com siteTitle, siteDescription, demoCases, brandInfo e whatsappCTA
- Cases de demonstração com valores fictícios (em BRL)
- Informações de contato via WhatsApp CTA fixo: 5531991374376

## Como executar

### Instalação

```bash
npm install
# ou
pnpm install
```

### Desenvolvimento

```bash
npm run dev
# Inicia o servidor de desenvolvimento em https://site-nexora-oficial.vercel.app/ com Turbopack
```

### Build de produção

```bash
npm run build
# Gera os arquivos otimizados na pasta .next/
```

```bash
npm start
# Inicia o servidor de produção
```

### Lint

```bash
npm run lint
# Executa o linter Next.js para verificar código
```

## Variáveis de ambiente

As variáveis de ambiente são configuradas no arquivo `.env.example`:

```env
# Exemplos de variáveis (ver .env.example para detalhes)
NEXT_PUBLIC_APP_URL=https://site-nexora-oficial.vercel.app/
```

- Nenhuma credencial real ou API key é necessária para a DEMO
- Configurações de imagens no next.config.ts para domínios externos
- Variáveis de ambiente são opcionais para o modo demonstração

## Estrutura resumida do projeto

```
nexora-web-studio/
├── .gitignore
├── next.config.ts
├── package.json
├── package-lock.json
├── tsconfig.json
├── lib/
│   └── content.ts
├── components/
│   ├── coverflow-carousel.tsx
│   ├── MaskedHeading.tsx
│   ├── QuizModal.tsx
│   └── HeroSection.tsx
├── sections/
│   └── HeroSection.tsx
├── public/
│   └── brand/
│       └── favicon.svg (ou assets similares)
├── src/
│   ├── app/
│   │   └── page.tsx
│   └── lib/
│       └── content.ts
└── README.md
```

## Observações técnicas

- Projeto configurado como Next.js 14 app router regime
- TypeScript estrito com `strict: true` em tsconfig.json
- ESLint configurado para ignorar durante builds (`ignoreDuringBuilds: true`)
- Image optimization configurado com domínios externos no next.config.ts
- O projeto demonstra habilidades de integração entre design e code, com foco em experiência do usuário e implementação técnica limpa

---

Desenvolvido como projeto de demonstração de skills em Next.js, TypeScript e desenvolvimento frontend moderno. Todo o conteúdo exibido é fictício e destinado exclusivamente à apresentação de portfólio.
