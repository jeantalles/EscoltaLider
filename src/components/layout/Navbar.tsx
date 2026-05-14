"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import LogoBranco from "@/components/icons/LogoBranco";
import OrangeButton from "@/components/ui/OrangeButton";

const links = [
  { href: "/#quem-somos", label: "Sobre" },
  { href: "/#servicos", label: "Serviços" },
  { href: "/#processo", label: "Como trabalhamos" },
  { href: "/#cobertura", label: "Área de atuação" },
  { href: "/blog", label: "Blog" },
  { href: "/#contato", label: "Contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5500000000000";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#14394D] shadow-lg" : "bg-[#14394D]"
      }`}
    >
      <div className="max-w-[1346px] mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">
        <Link href="/" aria-label="Escolta Lider">
          <LogoBranco width={160} height={16} />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-white text-[16px] font-normal font-[Sora] hover:text-[#FF7716] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <OrangeButton href={`https://wa.me/${whatsapp}`} target="_blank">
            Solicitar orçamento
          </OrangeButton>
        </div>

        <button
          className="lg:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {open ? (
              <path d="M6 18L18 6M6 6l12 12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#14394D] border-t border-white/10 px-6 pb-6 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white text-[16px] font-normal font-[Sora] hover:text-[#FF7716] transition-colors py-2"
            >
              {l.label}
            </Link>
          ))}
          <OrangeButton href={`https://wa.me/${whatsapp}`} target="_blank" className="mt-2 w-full justify-center">
            Solicitar orçamento
          </OrangeButton>
        </div>
      )}
    </header>
  );
}
