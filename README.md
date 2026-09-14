# Coisas de Tecnologia

Site de ofertas/promoções que exibe produtos em promoção e redireciona os visitantes para lojas externas (Amazon e Mercado Livre) através de links de afiliado.

## Stack

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS 3**
- **TypeScript**

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse http://localhost:3000

Build de produção:

```bash
npm run build
npm run start
```

## Como adicionar/editar produtos

Edite o arquivo `src/data/produtos.ts`. Cada produto segue esta estrutura:

```ts
{
  id: "7",
  nome: "Nome do produto",
  imagem: "https://url-da-imagem",
  precoAtual: 199.99,
  precoOriginal: 299.99, // opcional — deixe sem o campo se não houver desconto
  loja: "Amazon", // ou "Mercado Livre"
  categoria: "Eletrônicos", // use uma das categorias do array `categorias`
  linkAfiliado: "https://amazon.com.br/dp/CODIGO?tag=SEU-AFILIADO-20",
}
```

### Trocando pelo seu link de afiliado

1. Substitua `SEU-AFILIADO-20` pelo seu código da Amazon Associates.
2. Substitua `SEU-AFILIADO-ML` pelo seu link oficial do programa de afiliados do Mercado Livre.
3. Use a URL real do produto em vez de `mercadolivre.com/produto`.

> Dica: categorias novas exigem a adição no array `categorias` no mesmo arquivo. O slug da página é gerado automaticamente a partir do nome.

## Evento de clique

O componente `src/components/ProductCard.tsx` já registra cada clique no botão "Ver oferta" via `console.log`. Para integrar Google Analytics, basta substituir o comentário `// Integração futura` dentro do `handleClick`.

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
```

## Identidade visual

- **Logotipo**: "COISAS DE / TECNOLOGIA" em Montserrat, com símbolo geométrico C/T azul/violeta.
- **Favicon**: `src/app/icon.svg` — símbolo sobre quadrado #0B1120 arredondado.
- **Paleta**: Azul técnico `#2563EB`, índigo `#4F46E5`, violeta `#8B5CF6`, azul-marinho `#0F172A`, grafite `#0B1120`, cinzas `#334155/#64748B/#E2E8F0`, branco.
- **Dark Mode**: ativado por switch (persistido em `localStorage`), sem flash inicial via script no `<head>`.