"use client";

import { useState, type FormEvent } from "react";
import { IconCheck, IconMail } from "./Icons";
import { siteConfig } from "@/config/site";

export default function Newsletter({ className = "" }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [inscrito, setInscrito] = useState(false);

  const aoEnviar = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    console.log("[Newsletter] Inscrição:", { email, data: new Date().toISOString() });
    setInscrito(true);
  };

  return (
    <section
      className={`card relative overflow-hidden bg-gradient-to-br from-deep via-navy to-deep p-8 ring-1 ring-indigo-900/50 md:p-10 ${className}`}
      aria-label="Newsletter"
    >
      <div
        aria-hidden="true"
        className="absolute -right-12 -top-12 h-56 w-56 rounded-full bg-violet-600/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-tech-blue/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-xl text-center">
        <span className="chip mx-auto border-indigo-500/30 bg-white/5 text-indigo-300 dark:bg-white/5">
          <IconMail className="h-3.5 w-3.5" />
          Newsletter
        </span>
        <h2 className="title mt-4 text-2xl font-extrabold md:text-3xl">
          {siteConfig.newsletter.titulo}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          {siteConfig.newsletter.texto}
        </p>

        {inscrito ? (
          <div className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white/5 px-4 py-3 text-sm font-semibold text-emerald-300 ring-1 ring-emerald-500/30">
            <IconCheck className="h-4 w-4" />
            Inscrição registrada. Bem-vindo(a)!
          </div>
        ) : (
          <form
            onSubmit={aoEnviar}
            className="mt-6 flex flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={siteConfig.newsletter.placeholder}
              aria-label="Seu e-mail"
              className="w-full rounded-lg border border-slate-700 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
            />
            <button type="submit" className="btn-brand shrink-0">
              {siteConfig.newsletter.botao}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}