import Link from "next/link";
import type { Product } from "@/data/produtos";
import AffiliateLink from "./AffiliateLink";
import ProductGrid from "./ProductGrid";
import {
  IconArrowRight,
  IconCasa,
  IconAcessorios,
  IconEletronicos,
} from "./Icons";
import { formatarPreco, calcularDesconto } from "@/lib/format";
import { slugCategoria } from "@/lib/categorias";

export const iconesCategoria = {
  Eletrônicos: IconEletronicos,
  "Casa & Cozinha": IconCasa,
  Acessórios: IconAcessorios,
} as const;

export function HeroChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="tag rounded bg-white/10 px-2 py-1 text-white ring-1 ring-white/20 backdrop-blur">
      {children}
    </span>
  );
}

export function CardSecundario({ produto }: { produto: Product }) {
  const desconto = produto.precoOriginal
    ? calcularDesconto(produto.precoAtual, produto.precoOriginal)
    : null;

  return (
    <article className="group card relative flex overflow-hidden p-0 transition duration-200 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lift dark:hover:border-indigo-500/60">
      <div className="relative w-32 shrink-0 overflow-hidden bg-slate-100 sm:w-44 dark:bg-slate-800">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={produto.imagem}
          alt={produto.nome}
          loading="lazy"
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
        {desconto && (
          <span className="tag absolute left-2 top-2 rounded bg-brand-gradient px-1.5 py-0.5 text-white">
            {desconto}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col justify-center gap-1 p-4">
        <span className="tag text-indigo-500 dark:text-indigo-400">
          {produto.loja}
        </span>
        <h3 className="line-clamp-2 font-heading text-sm font-bold leading-snug text-slate-900 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-300">
          {produto.nome}
        </h3>
        <div className="mt-1 flex flex-wrap items-baseline gap-x-2">
          {produto.precoOriginal && (
            <span className="text-xs text-slate-400 line-through">
              {formatarPreco(produto.precoOriginal)}
            </span>
          )}
          <span className="font-heading text-base font-extrabold text-slate-900 dark:text-white">
            {formatarPreco(produto.precoAtual)}
          </span>
        </div>
        <AffiliateLink
          produto={produto}
          className="mt-2 inline-flex w-max items-center gap-1.5 text-sm font-bold text-indigo-600 group-hover:gap-2.5 dark:text-indigo-300"
        >
          Ver oferta
          <IconArrowRight className="h-4 w-4 transition-all" />
        </AffiliateLink>
      </div>
    </article>
  );
}

export function SecaoHero({ destaque, secundarios }: { destaque: Product; secundarios: Product[] }) {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      <article className="group relative min-h-[22rem] overflow-hidden rounded-2xl lg:col-span-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={destaque.imagem}
          alt={`${destaque.nome} — oferta em destaque`}
          className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/10"
        />
        <div className="relative flex h-full flex-col justify-end p-6 md:p-8">
          <div className="flex flex-wrap gap-2">
            <HeroChip>{destaque.loja}</HeroChip>
            <HeroChip>{destaque.categoria}</HeroChip>
          </div>
          <h2 className="mt-4 max-w-2xl font-heading text-2xl font-extrabold leading-tight text-white md:text-4xl">
            {destaque.nome}
          </h2>
          <div className="mt-3 flex flex-wrap items-baseline gap-x-3">
            {destaque.precoOriginal && (
              <span className="text-sm text-white/60 line-through">
                {formatarPreco(destaque.precoOriginal)}
              </span>
            )}
            <span className="text-3xl font-extrabold text-white md:text-4xl">
              {formatarPreco(destaque.precoAtual)}
            </span>
          </div>
          <AffiliateLink
            produto={destaque}
            className="btn-brand mt-5 w-max"
            aria-label={`Ver oferta de ${destaque.nome}`}
          >
            Ver oferta
            <IconArrowRight className="h-4 w-4" />
          </AffiliateLink>
        </div>
      </article>

      <div className="flex flex-col gap-5">
        {secundarios.map((produto) => (
          <CardSecundario key={produto.id} produto={produto} />
        ))}
      </div>
    </div>
  );
}

export function SecaoCategorias({ produtos }: { produtos: Product[] }) {
  const categoriasComContagem = (Object.keys(iconesCategoria) as Array<keyof typeof iconesCategoria>)
    .map((nome) => ({
      nome,
      href: `/categoria/${slugCategoria(nome)}`,
      total: produtos.filter((p) => p.categoria === nome).length,
      Icon: iconesCategoria[nome],
    }))
    .filter((c) => c.total > 0);

  return (
    <section className="mx-auto max-w-7xl px-4 py-10" aria-label="Categorias">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {categoriasComContagem.map(({ nome, href, total, Icon }) => (
          <Link
            key={href}
            href={href}
            className="group card flex items-center gap-4 p-5 transition duration-200 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lift dark:hover:border-indigo-500/60"
          >
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-soft">
              <Icon className="h-6 w-6" />
            </span>
            <span className="flex-1">
              <span className="block font-heading text-base font-bold text-slate-900 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-300">
                {nome}
              </span>
              <span className="tag text-slate-400 dark:text-slate-500">
                {total} oferta(s)
              </span>
            </span>
            <IconArrowRight className="h-5 w-5 text-slate-300 transition group-hover:translate-x-1 group-hover:text-indigo-500" />
          </Link>
        ))}
      </div>
    </section>
  );
}

export function SecaoListaOfertas({
  titulo,
  subtitulo,
  produtos,
  controle,
}: {
  titulo: string;
  subtitulo: React.ReactNode;
  produtos: Product[];
  controle?: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="title text-2xl">{titulo}</h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{subtitulo}</p>
        </div>
        {controle}
      </div>
      <ProductGrid produtos={produtos} />
    </section>
  );
}