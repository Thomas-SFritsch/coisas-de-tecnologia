"use client";

import { useTema } from "./ThemeProvider";
import { IconMoon, IconSun } from "./Icons";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { tema, alternar } = useTema();

  return (
    <button
      type="button"
      onClick={alternar}
      aria-label={tema === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
      title={tema === "dark" ? "Modo claro" : "Modo escuro"}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 transition hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-violet-marca ${className}`}
    >
      {tema === "dark" ? <IconSun className="h-5 w-5" /> : <IconMoon className="h-5 w-5" />}
    </button>
  );
}