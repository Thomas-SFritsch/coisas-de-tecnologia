import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { BrandSymbol } from "@/components/Logo";
import { IconCheck, IconGlobe, IconInstagram, IconLinkedin, IconX, IconYouTube } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Saiba como funciona o Coisas de Tecnologia, como selecionamos as ofertas e como o site ganha comissão através de links de afiliado.",
};

export default function SobrePage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-10">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-deep via-navy to-deep p-10 shadow-lift ring-1 ring-indigo-900/60">
        <div
          aria-hidden="true"
          className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-violet-600/20 blur-3xl"
        />
        <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="chip text-indigo-300">Sobre a marca</span>
            <h1 className="title mt-3 text-3xl font-extrabold md:text-4xl">{siteConfig.nome}</h1>
            <p className="mt-2 max-w-xl text-sm text-slate-400">
              {siteConfig.tagline}
            </p>
          </div>
          <BrandSymbol className="h-20 w-20 shrink-0 opacity-40 md:h-28 md:w-28" />
        </div>
      </div>

      <div className="mt-12 grid gap-12 lg:grid-cols-5">
        <article className="space-y-6 text-sm leading-relaxed text-slate-600 dark:text-slate-300 lg:col-span-3">
          <h2 className="title text-xl font-bold">O que é o {siteConfig.nome}?</h2>
          <p>
            O <strong>{siteConfig.nome}</strong> é um site independente que reúne
            produtos em promoção de tecnologia, casa e acessórios. Nosso trabalho
            é pesquisar e selecionar as melhores ofertas do dia nas maiores lojas
            online do país — principalmente <strong>Amazon</strong> e{" "}
            <strong>Mercado Livre</strong> — para que você economize tempo
            comparando preços.
          </p>
          <p>
            O site <strong>não é mantido por nenhuma loja ou fabricante</strong>.
            Somos um projeto independente, e as avaliações e indicações são feitas
            com base na nossa própria análise dos produtos.
          </p>

          <h2 className="title text-xl font-bold">Como escolhemos as ofertas</h2>
          <p>
            Buscamos produtos com desconto real em relação ao preço praticado,
            bom custo-benefício e avaliação positiva dos usuários. Sempre
            priorizamos lojas oficiais dentro da Amazon e do Mercado Livre.
          </p>

          <h2 className="title text-xl font-bold">Contato</h2>
          <p>
            Dúvidas ou sugestões de ofertas? Envie um e-mail para{" "}
            <a
              href="mailto:contato@coisasdetechnologia.com.br"
              className="font-semibold text-indigo-600 transition hover:underline dark:text-indigo-300"
            >
              {siteConfig.email}
            </a>
            .
          </p>
        </article>

        <aside className="space-y-6 lg:col-span-2">
          <div className="card p-6">
            <h3 className="tag text-indigo-600 dark:text-indigo-400">Links</h3>
            <ul className="mt-3 space-y-2.5 text-sm text-slate-600 dark:text-slate-300">
              {siteConfig.nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-300">
                    <IconGlobe className="h-4 w-4 text-slate-400 dark:text-slate-500" />
                    {n.rotulo}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="tag text-indigo-600 dark:text-indigo-400">Redes sociais</h3>
            <div className="mt-3 flex gap-2">
              {[
                { rotulo: "YouTube", href: siteConfig.social.youtube, Icon: IconYouTube },
                { rotulo: "Instagram", href: siteConfig.social.instagram, Icon: IconInstagram },
                { rotulo: "LinkedIn", href: siteConfig.social.linkedin, Icon: IconLinkedin },
                { rotulo: "X", href: siteConfig.social.x, Icon: IconX },
              ].map(({ rotulo, href, Icon }) => (
                <a
                  key={rotulo}
                  href={href}
                  aria-label={rotulo}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition hover:bg-brand-gradient hover:text-white dark:bg-slate-800 dark:text-slate-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="card relative overflow-hidden border-indigo-100 bg-gradient-to-br from-indigo-50 to-white p-6 dark:border-indigo-900/40 dark:from-indigo-950/30 dark:to-transparent">
            <h3 className="tag text-indigo-600 dark:text-indigo-400">
              Aviso de transparência
            </h3>
            <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              {siteConfig.avisoAfiliado}
            </p>
            <div className="mt-4 space-y-2">
              {["Preço idêntico ao da loja", "Apenas comissão paga pela loja", "Sem custo adicional para você"].map((i) => (
                <span key={i} className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <IconCheck className="h-3.5 w-3.5 text-emerald-500" />
                  {i}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}