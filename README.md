# OnTime Tracker — Site Institucional

Site institucional moderno e responsivo para a plataforma de rastreamento veicular **OnTime Tracker**.

## Tecnologias

- **Next.js 15** com App Router
- **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion** (animações)
- **Lucide React** (ícones)

## Como executar

```bash
# Instalar dependências
npm install

# Modo desenvolvimento
npm run dev

# Build de produção
npm run build

# Servidor de produção
npm start
```

Acesse [http://localhost:3000](http://localhost:3000) após iniciar o servidor de desenvolvimento.

## Estrutura

```
src/
├── app/
│   ├── layout.tsx    # Layout raiz + SEO
│   ├── page.tsx      # Página principal
│   └── globals.css   # Estilos globais
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Features.tsx
│   ├── Stats.tsx
│   ├── Benefits.tsx
│   ├── HowItWorks.tsx
│   ├── Differentials.tsx
│   ├── CTA.tsx
│   ├── Footer.tsx
│   └── ui/           # Componentes reutilizáveis
└── lib/
    ├── constants.ts  # Conteúdo e dados
    └── utils.ts
```

## Identidade Visual

| Cor           | Hex       |
|---------------|-----------|
| Azul escuro   | `#0F172A` |
| Azul destaque | `#2563EB` |
| Branco        | `#FFFFFF` |
| Cinza claro   | `#F8FAFC` |

## Links

- Plataforma: [https://ontimetracker.com.br](https://ontimetracker.com.br)
