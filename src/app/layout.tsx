import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Escolta Lider",
  description: "Escolta de cargas especiais e AET em todo o Brasil.",
  openGraph: {
    title: "Escolta Lider",
    description: "Escolta de cargas especiais e AET em todo o Brasil.",
    url: "https://escoltalider.com.br",
    siteName: "Escolta Lider",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Escolta Lider – 20 Anos de Estrada",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Escolta Lider",
    description: "Escolta de cargas especiais e AET em todo o Brasil.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${sora.variable} h-full antialiased`}>
      <body className="min-h-full" suppressHydrationWarning>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
