/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="brand-link" aria-label="Escolta Lider">
        <img
          className="brand-logo"
          src="/images/escolta-lider/logo-branco.svg"
          alt="Escolta Lider"
        />
      </Link>
      <nav className="main-nav" aria-label="Principal">
        <Link href="/#sobre">Sobre</Link>
        <Link href="/#servicos">Serviços</Link>
        <Link href="/#processo">Como trabalhamos</Link>
        <Link href="/#area">Área de atuação</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/#contato">Contato</Link>
      </nav>
      <Link href="/#contato" className="header-cta">
        Solicitar orçamento
      </Link>
    </header>
  );
}
