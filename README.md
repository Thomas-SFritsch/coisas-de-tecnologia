# Coisas de Tecnologia

Site de ofertas/promoções que exibe produtos em promoção e redireciona os visitantes para lojas externas (Amazon e Mercado Livre) através de links de afiliado.

## Stack

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS 3**
- **TypeScript**


## Estrutura de pastas

```
src/
├── app/
│   ├── icon.svg                    # Favicon (símbolo sobre fundo escuro)
│   ├── layout.tsx                  # Layout com header, footer, aviso, dark mode
│   ├── page.tsx                    # Página inicial (grid + filtro)
│   ├── not-found.tsx
│   ├── categoria/[slug]/           # Página de categoria (SSG)
│   └── sobre/                      # Página "Sobre" com aviso de afiliado
├── components/
│   ├── Logo.tsx                    # Logo + símbolo geométrico C/T
│   ├── ProductCard.tsx             # Card de produto reutilizável
│   ├── AffiliateLink.tsx           # Link com rel sponsored + registro de clique
│   ├── ProductGrid.tsx
│   ├── OfertasUI.tsx               # Seções server-safe (hero, categorias, lista)
│   ├── HomeContent.tsx             # Homepage interativa (busca/filtro)
│   ├── HomeFallback.tsx            # Fallback SSG para SEO na homepage
│   ├── CategoryFilter.tsx
│   ├── Newsletter.tsx
│   ├── Icons.tsx                   # Sistema de ícones (UI, categorias, sociais)
│   ├── SearchForm.tsx
│   ├── ThemeProvider.tsx           # Contexto light/dark
│   ├── ThemeToggle.tsx
│   ├── SiteHeader.tsx
│   └── SiteFooter.tsx
├── data/
│   └── produtos.ts                 # Dados estáticos dos produtos
├── config/
│   └── site.ts                     # Nome, tagline, nav, redes sociais, newsletter
└── lib/
    ├── format.ts                   # Formatação de preço em BRL
    └── categorias.ts               # Geração de slugs de categoria
