"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import type { Product } from "@/data/produtos";

export function registrarClique(produto: Product) {
  console.log("[Afiliado] Clique registrado:", {
    produtoId: produto.id,
    nome: produto.nome,
    loja: produto.loja,
    link: produto.linkAfiliado,
    data: new Date().toISOString(),
  });
  // Integração futura com Google Analytics:
  // window.dataLayer?.push({ event: "clique_afiliado", produtoId: produto.id, loja: produto.loja });
}

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  produto: Product;
  children: ReactNode;
};

export default function AffiliateLink({ produto, children, ...rest }: Props) {
  return (
    <a
      href={produto.linkAfiliado}
      target="_blank"
      rel="noopener noreferrer sponsored"
      onClick={() => registrarClique(produto)}
      {...rest}
    >
      {children}
    </a>
  );
}