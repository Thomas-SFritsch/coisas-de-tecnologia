import { produtos } from "@/data/produtos";
import Newsletter from "./Newsletter";
import { SecaoHero, SecaoCategorias, SecaoListaOfertas } from "./OfertasUI";

export default function HomeFallback() {
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
        subtitulo="Selecione uma categoria ou navegue por todas as ofertas."
        produtos={produtos}
      />

      <section className="mx-auto max-w-7xl px-4 py-10">
        <Newsletter />
      </section>
    </>
  );
}