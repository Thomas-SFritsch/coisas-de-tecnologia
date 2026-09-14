"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Tema = "light" | "dark";

const TemaContexto = createContext<{ tema: Tema; alternar: () => void }>({
  tema: "light",
  alternar: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [tema, setTema] = useState<Tema>("light");

  useEffect(() => {
    const ativo = document.documentElement.classList.contains("dark") ? "dark" : "light";
    setTema(ativo);
  }, []);

  const alternar = () => {
    const novo = document.documentElement.classList.toggle("dark") ? "dark" : "light";
    setTema(novo);
    try {
      localStorage.setItem("tema", novo);
    } catch {
      /* noop */
    }
  };

  return <TemaContexto.Provider value={{ tema, alternar }}>{children}</TemaContexto.Provider>;
}

export function useTema() {
  return useContext(TemaContexto);
}