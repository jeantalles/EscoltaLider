import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#14394D] flex items-center justify-center pt-24">
      <div className="text-center px-6">
        <p className="text-[#FF7716] text-[16px] font-normal uppercase tracking-[2.99px] font-[Sora] mb-4">
          erro 404
        </p>
        <h1 className="text-white text-[60px] md:text-[80px] font-semibold font-[Sora] leading-none mb-6">
          Página não encontrada.
        </h1>
        <p className="text-white/70 text-[18px] font-normal font-[Sora] mb-10">
          A página que você procura não existe ou foi movida.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center bg-[#FF7716] text-white font-semibold text-[16px] font-[Sora] px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
        >
          Voltar para o início
        </Link>
      </div>
    </div>
  );
}
