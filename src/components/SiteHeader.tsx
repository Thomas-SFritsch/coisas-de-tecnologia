"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import SearchForm from "./SearchForm";
import { IconClose, IconMenu } from "./Icons";
import { siteConfig } from "@/config/site";

const ativo = "text-indigo-600 dark:text-indigo-300";

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuAberto, setMenuAberto] = useState(false);

  const ehAtivo = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-navy/90">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3">
        <Link
          href="/"
          className="shrink-0"
          aria-label="Coisas de Tecnologia — Início"
          onClick={() => setMenuAberto(false)}
        >
          <Logo markClassName="h-8 w-8" />
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex" aria-label="Navegação principal">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-lg px-3 py-2 font-heading text-sm font-semibold transition hover:bg-slate-100 hover:text-indigo-600 dark:hover:bg-slate-800 dark:hover:text-indigo-300 ${
                ehAtivo(item.href) ? ativo : "text-slate-700 dark:text-slate-200"
              }`}
            >
              {item.rotulo}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <SearchForm className="hidden w-56 md:block lg:w-64" />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuAberto((v) => !v)}
            aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuAberto}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 transition hover:bg-slate-100 hover:text-indigo-600 lg:hidden dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-indigo-300"
          >
            {menuAberto ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuAberto && (
        <div className="border-t border-slate-200 bg-white px-4 pb-5 pt-4 lg:hidden dark:border-slate-800 dark:bg-navy">
          <SearchForm className="mb-4 w-full md:hidden" />
          <nav className="flex flex-col gap-1" aria-label="Menu mobile">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuAberto(false)}
                className={`rounded-lg px-3 py-2.5 font-heading text-sm font-semibold transition hover:bg-slate-100 dark:hover:bg-slate-800 ${
                  ehAtivo(item.href) ? ativo : "text-slate-700 dark:text-slate-200"
                }`}
              >
                {item.rotulo}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}