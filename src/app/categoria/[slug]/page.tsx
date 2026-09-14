import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { produtos, categorias } from "@/data/produtos";
import ProductGrid from "@/components/ProductGrid";
import { slugCategoria, slugParaNome } from "@/lib/categorias";
import { siteConfig } from "@/config/site";
import { BrandSymbol } from "@/components/Logo";

export const dynamicParams = false;

export function generateStaticParams() {
  return categorias
    .filter((c) => c !== "Todos")
    .map((c) => ({ slug: slugCategoria(c) }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const nome = slugParaNome(params.slug);
  if (!nome) return {};
  return {
    title: `Ofertas de ${nome}`,
    description: `As melhores promoções de ${nome} com preços verificados na Amazon e Mercado Livre. ${siteConfig.nome}`,
  };
}

export default async function CategoriaPage({ params }: { params: { slug: string } }) {
  const nomeCategoria = slugParaNome(params.slug);
  if (!nomeCategoria) notFound();

  const produtosFiltrados = produtos.filter((p) => p.categoria === nomeCategoria);

  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <nav aria-label="breadcrumb" className="mb-4 font-mono text-xs tracking-wide text-slate-400 dark:text-slate-500">
        <Link href="/" className="transition hover:text-indigo-500">
          Início
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-600 dark:text-slate-300">{nomeCategoria}</span>
      </nav>

      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-500 to-purple-500 p-8 text-white shadow-lift md:p-10">
        <div
          aria-hidden="true"
          className="absolute -right-8 -top-8 h-40 w-40 rotate-12 rounded-xl bg-white/10"
        />
        <div
          aria-hidden="true"
          className="absolute -left-6 bottom-0 h-32 w-32 -rotate-12 rounded-xl bg-white/10"
        />
        <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="font-heading text-3xl font-extrabold md:text-4xl">
              Ofertas de {nomeCategoria}
            </h1>
            <p className="mt-1 text-sm text-white/80">
              {produtosFiltrados.length} produto(s) em promoção verificados hoje.
            </p>
          </div>
          <BrandSymbol className="h-14 w-14 opacity-30 md:h-20 md:w-20" />
        </div>
      </div>

      <div className="mt-8">
        <ProductGrid produtos={produtosFiltrados} />
      </div>
    </section>
  );
}