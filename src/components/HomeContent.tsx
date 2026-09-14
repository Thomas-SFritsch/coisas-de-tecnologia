"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { produtos } from "@/data/produtos";
import CategoryFilter from "./CategoryFilter";
import Newsletter from "./Newsletter";
import { SecaoHero, SecaoCategorias, SecaoListaOfertas } from "./OfertasUI";

export default function HomeContent() {
  const searchParams = useSearchParams();
  const busca = (searchParams.get("q") ?? "").trim().toLowerCase();
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");

  const produtosFiltrados = useMemo(() => {
    return produtos.filter((p) => {
      const categoriaOk = categoriaAtiva === "Todos" || p.categoria === categoriaAtiva;
      const buscaOk =
        !busca ||
        p.nome.toLowerCase().includes(busca) ||
        p.loja.toLowerCase().includes(busca) ||
        p.categoria.toLowerCase().includes(busca);
      return categoriaOk && buscaOk;
    });
  }, [categoriaAtiva, busca]);

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pb-4 pt-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="chip">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-marca" aria-hidden="true" />
              Verificado hoje
            </span>
            <h1 className="title mt-3 text-2xl md:text-3xl">
              As melhores ofertas de tecnologia
            </h1>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Preços e disponibilidade verificados nas maiores lojas do país.
            </p>
          </div>
          <div className="tag text-slate-400 dark:text-slate-500">
            {produtos.length} produtos em vitrine
          </div>
        </div>

        <SecaoHero destaque={produtos[0]} secundarios={produtos.slice(1, 3)} />
      </section>

      <SecaoCategorias produtos={produtos} />

      <SecaoListaOfertas
        titulo="Ofertas em destaque"
        subtitulo={
          busca ? (
            <>
              Resultados para{" "}
              <strong className="tag">{"\u201C"}{busca}{"\u201D"}</strong>
            </>
          ) : (
            "Selecione uma categoria ou navegue por todas as ofertas."
          )
        }
        produtos={produtosFiltrados}
        controle={
          <CategoryFilter
            categoriaAtiva={categoriaAtiva}
            aoMudar={setCategoriaAtiva}
          />
        }
      />

      <section className="mx-auto max-w-7xl px-4 py-10">
        <Newsletter />
      </section>
    </>
  );
}