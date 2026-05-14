import Link from "next/link";
import LogoBranco from "@/components/icons/LogoBranco";

const links = [
  { href: "/#inicio", label: "Início" },
  { href: "/#quem-somos", label: "Quem Somos" },
  { href: "/#servicos", label: "Serviços" },
  { href: "/blog", label: "Blog" },
  { href: "/#contato", label: "Contato" },
];

export default function Footer() {
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5500000000000";
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contato@escoltalider.com.br";

  return (
    <footer className="bg-[#14394D] text-white">
      <div className="max-w-[1346px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-6">
            <LogoBranco width={160} height={16} />
            <p className="text-white/70 text-[15px] font-normal leading-relaxed font-[Sora] max-w-[280px]">
              Especialistas em transporte de cargas especiais desde 2006.
            </p>
          </div>

          <div>
            <p className="text-[#FF7716] text-[14px] font-semibold uppercase tracking-widest mb-6 font-[Sora]">
              Navegação
            </p>
            <ul className="flex flex-col gap-3">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/70 text-[15px] font-normal font-[Sora] hover:text-[#FF7716] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[#FF7716] text-[14px] font-semibold uppercase tracking-widest mb-6 font-[Sora]">
              Contato
            </p>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href={`https://wa.me/${whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 text-[15px] font-normal font-[Sora] hover:text-[#FF7716] transition-colors flex items-center gap-2"
                >
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${email}`}
                  className="text-white/70 text-[15px] font-normal font-[Sora] hover:text-[#FF7716] transition-colors"
                >
                  {email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-[14px] font-normal font-[Sora]">
            © {new Date().getFullYear()} Escolta Lider. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
