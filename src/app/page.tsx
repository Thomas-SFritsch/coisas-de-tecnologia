import { Suspense } from "react";
import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";
import HomeFallback from "@/components/HomeFallback";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.nome} — Promoções e Ofertas de Tecnologia`,
  description:
    "As melhores ofertas em tecnologia, casa e acessórios com descontos reais verificados na Amazon e Mercado Livre. Compare antes de comprar.",
};

export default function HomePage() {
  return (
    <Suspense fallback={<HomeFallback />}>
      <HomeContent />
    </Suspense>
  );
}