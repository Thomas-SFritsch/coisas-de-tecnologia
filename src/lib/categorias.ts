import { categorias } from "@/data/produtos";

export function slugCategoria(nome: string): string {
  return nome
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s*&\s*/g, "-")
    .replace(/\s+/g, "-");
}

export function slugParaNome(slug: string): string | undefined {
  return categorias.find((c) => {
    if (c === "Todos") return false;
    return slugCategoria(c) === slug;
  });
}