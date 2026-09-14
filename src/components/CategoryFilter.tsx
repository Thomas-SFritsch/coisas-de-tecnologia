"use client";

import { categorias } from "@/data/produtos";

type Props = {
  categoriaAtiva: string;
  aoMudar: (categoria: string) => void;
};

export default function CategoryFilter({ categoriaAtiva, aoMudar }: Props) {
  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtrar por categoria">
      {categorias.map((categoria) => {
        const ativa = categoriaAtiva === categoria;
        return (
          <button
            key={categoria}
            role="tab"
            aria-selected={ativa}
            onClick={() => aoMudar(categoria)}
            className={`tag rounded-full px-4 py-2 transition ${
              ativa
                ? "bg-brand-gradient text-white shadow-lift"
                : "border border-slate-200 bg-white text-slate-600 hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-700 dark:bg-deep dark:text-slate-300 dark:hover:border-indigo-500 dark:hover:text-indigo-300"
            }`}
          >
            {categoria}
          </button>
        );
      })}
    </div>
  );
}