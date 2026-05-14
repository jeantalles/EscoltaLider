import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: {
    default: "Escolta Lider — Transporte de Cargas Especiais",
    template: "%s | Escolta Lider",
  },
  description:
    "Especialistas em Autorização Especial de Trânsito (AET) e escolta de cargas especiais desde 2006. Atuação nacional com foco em segurança e confiança.",
  keywords: [
    "escolta de cargas especiais",
    "autorização especial de trânsito",
    "AET",
    "transporte de cargas superdimensionadas",
    "escolta",
    "DNIT",
    "DER",
  ],
  openGraph: {
    siteName: "Escolta Lider",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={sora.variable}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
