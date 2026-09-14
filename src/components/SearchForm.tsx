"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { IconSearch } from "./Icons";

export default function SearchForm({ className = "" }: { className?: string }) {
  const router = useRouter();
  const [busca, setBusca] = useState("");

  const aoEnviar = (e: FormEvent) => {
    e.preventDefault();
    const q = busca.trim();
    router.push(q ? `/?q=${encodeURIComponent(q)}` : "/");
  };

  return (
    <form onSubmit={aoEnviar} role="search" className={`relative ${className}`}>
      <IconSearch className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
      <input
        type="search"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        placeholder="Buscar ofertas..."
        aria-label="Buscar produtos"
        className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-9 text-sm text-slate-800 placeholder:text-slate-400 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:border-slate-700 dark:bg-deep dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-indigo-500 dark:focus:ring-indigo-500/30"
      />
      {busca && (
        <button
          type="button"
          aria-label="Limpar busca"
          onClick={() => setBusca("")}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
        >
          ✕
        </button>
      )}
    </form>
  );
}