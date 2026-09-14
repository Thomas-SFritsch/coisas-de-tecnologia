import Link from "next/link";
import { BrandSymbol } from "@/components/Logo";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center px-4 py-32 text-center">
      <BrandSymbol className="h-24 w-24 opacity-30" />
      <h1 className="mt-6 text-7xl font-heading font-black text-indigo-600 dark:text-indigo-400">
        404
      </h1>
      <p className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
        Página não encontrada
      </p>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
        O conteúdo que você procurava foi movido ou não existe mais.
      </p>
      <Link href="/" className="btn-brand mt-8">
        Ver ofertas disponíveis
      </Link>
    </section>
  );
}