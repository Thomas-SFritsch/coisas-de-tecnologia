import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { ThemeProvider } from "@/components/ThemeProvider";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.nome} — Promoções e Ofertas de Tecnologia`,
    template: `%s | ${siteConfig.nome}`,
  },
  description: siteConfig.descricao,
  keywords: [
    "promoções",
    "ofertas",
    "tecnologia",
    "amazon",
    "mercado livre",
    "descontos",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: siteConfig.nome,
  },
  icons: {
    icon: "/icon.svg",
  },
};

const scriptAntiFOUC = `(function(){try{var t=localStorage.getItem("tema");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;var e=document.documentElement;e.classList.toggle("dark",d);var m=document.querySelector("meta[name=theme-color]");if(m){m.setAttribute("content",d?"#0B1120":"#FFFFFF");}}catch(err){}})();`;

const metaTema = `(function(){var m=document.createElement("meta");m.name="theme-color";document.head.appendChild(m);var t=localStorage.getItem("tema");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;m.setAttribute("content",d?"#0B1120":"#FFFFFF");})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: metaTema }} />
        <script dangerouslySetInnerHTML={{ __html: scriptAntiFOUC }} />
      </head>
      <body className="flex min-h-screen flex-col">
        <ThemeProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}