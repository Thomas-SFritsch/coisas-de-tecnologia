import Link from "next/link";
import Logo from "./Logo";
import { siteConfig } from "@/config/site";
import {
  IconGlobe,
  IconInstagram,
  IconLinkedin,
  IconX,
  IconYouTube,
} from "./Icons";
import { produtos } from "@/data/produtos";

const socials = [
  { rotulo: "YouTube", href: siteConfig.social.youtube, Icon: IconYouTube },
  { rotulo: "Instagram", href: siteConfig.social.instagram, Icon: IconInstagram },
  { rotulo: "LinkedIn", href: siteConfig.social.linkedin, Icon: IconLinkedin },
  { rotulo: "X", href: siteConfig.social.x, Icon: IconX },
  { rotulo: "Website", href: siteConfig.social.site, Icon: IconGlobe },
];

const categoriasFooter = Array.from(new Set(produtos.map((p) => p.categoria))).map(
  (nome) => ({
    rotulo: nome,
    href: `/categoria/${nome
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s*&\s*/g, "-")
      .replace(/\s+/g, "-")}`,
  })
);

export default function SiteFooter() {
  return (
    <footer className="bg-navy text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-950 via-deep to-navy p-8 ring-1 ring-indigo-900/60 md:p-10">
          <div
            aria-hidden="true"
            className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-violet-600/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute right-24 top-0 h-40 w-40 rotate-12 rounded-xl bg-brand-gradient opacity-20 blur-[2px]"
          />
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <Logo mono="current" className="text-white" markClassName="h-10 w-10" />
              <p className="mt-3 font-heading text-lg font-bold text-white">
                {siteConfig.slogan}
              </p>
            </div>
            <p className="tag text-indigo-300">{siteConfig.tagline}</p>
          </div>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <Logo mono="current" className="text-white" markClassName="h-9 w-9" />
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              {siteConfig.tagline} Somos um site independente que seleciona as
              melhores ofertas do mundo tech para você economizar comparando
              preços.
            </p>
            <div className="mt-5 flex gap-2">
              {socials.map(({ rotulo, href, Icon }) => (
                <a
                  key={rotulo}
                  href={href}
                  aria-label={`${rotulo} — Coisas de Tecnologia`}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-slate-300 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="tag text-indigo-300">Navegação</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 transition hover:text-white"
                  >
                    {item.rotulo}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="tag text-indigo-300">Categorias</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {categoriasFooter.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-slate-400 transition hover:text-white"
                  >
                    {c.rotulo}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 rounded-lg bg-white/5 px-4 py-3 text-center text-xs leading-relaxed text-slate-400 ring-1 ring-white/10">
          {siteConfig.avisoAfiliado}
        </p>
      </div>

      <div className="border-t border-white/10 bg-deep">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-slate-500 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-heading font-semibold text-slate-300">
              {siteConfig.nome}
            </span>
            . Todos os direitos reservados.
          </p>
          <p className="font-mono tracking-wide">{siteConfig.tagline}</p>
        </div>
      </div>
    </footer>
  );
}