"use client";

import type { Product } from "@/data/produtos";
import AffiliateLink from "./AffiliateLink";
import { formatarPreco, calcularDesconto } from "@/lib/format";
import { IconArrowRight } from "./Icons";

type Props = {
  produto: Product;
};

export const seloLoja = {
  Amazon: "bg-indigo-600 text-white",
  "Mercado Livre": "bg-white text-indigo-700 ring-1 ring-indigo-200 dark:text-indigo-300 dark:ring-indigo-500/40",
};

export default function ProductCard({ produto }: Props) {
  const desconto = produto.precoOriginal
    ? calcularDesconto(produto.precoAtual, produto.precoOriginal)
    : null;

  const altText = `${produto.nome} em promoção na ${produto.loja}`;

  return (
    <article className="group card flex flex-col overflow-hidden p-0 transition duration-200 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lift dark:hover:border-indigo-500/60">
      <div className="relative aspect-square overflow-hidden bg-slate-100 dark:bg-slate-800">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={produto.imagem}
          alt={altText}
          loading="lazy"
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent opacity-0 transition group-hover:opacity-100"
        />
        <span className="tag absolute left-2.5 top-2.5 rounded bg-brand-gradient px-2 py-1 text-white shadow-sm">
          {desconto ?? `${produto.loja === "Amazon" ? "Oferta" : "Top"}`}
        </span>
        <span
          className={`tag absolute right-2.5 top-2.5 rounded px-2 py-1 shadow-sm ${
            seloLoja[produto.loja]
          }`}
        >
          {produto.loja}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2.5 p-4">
        <span className="tag text-indigo-500 dark:text-indigo-400">
          {produto.categoria}
        </span>

        <h3 className="line-clamp-2 font-heading text-sm font-bold leading-snug text-slate-900 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-300">
          {produto.nome}
        </h3>

        <div className="mt-auto flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
          {produto.precoOriginal && (
            <span className="text-xs text-slate-400 line-through">
              {formatarPreco(produto.precoOriginal)}
            </span>
          )}
          <span className="bg-gradient-to-r from-tech-blue to-violet-marca bg-clip-text font-heading text-lg font-extrabold text-transparent">
            {formatarPreco(produto.precoAtual)}
          </span>
        </div>

        <AffiliateLink
          produto={produto}
          className="btn-brand mt-2 w-full"
          aria-label={`Ver oferta de ${produto.nome} na ${produto.loja}`}
        >
          Ver oferta
          <IconArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </AffiliateLink>
      </div>
    </article>
  );
}