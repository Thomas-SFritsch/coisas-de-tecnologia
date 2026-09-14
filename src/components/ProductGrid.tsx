"use client";

import type { Product } from "@/data/produtos";
import ProductCard from "./ProductCard";

type Props = {
  produtos: Product[];
};

export default function ProductGrid({ produtos }: Props) {
  if (produtos.length === 0) {
    return (
      <p className="col-span-full rounded-xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center text-sm text-slate-500 dark:border-slate-700 dark:bg-deep dark:text-slate-400">
        Nenhum produto encontrado para esta busca ou categoria.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {produtos.map((produto) => (
        <ProductCard key={produto.id} produto={produto} />
      ))}
    </div>
  );
}