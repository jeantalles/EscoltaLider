import Image from "next/image";
import OrangeButton from "@/components/ui/OrangeButton";

export default function HeroSection() {
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5500000000000";

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#0c2530" }}
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="absolute inset-0 z-0 bg-[#14394D]/75" />

      <div className="relative z-10 max-w-[1346px] mx-auto px-6 lg:px-10 pt-24 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-96px)]">
          <div className="flex flex-col gap-6 lg:gap-8">
            <p className="text-[#FF7716] text-[14px] font-normal uppercase tracking-[4px] font-[Sora]">
              Escolta de cargas especiais
            </p>
            <h1 className="text-[#FF7716] text-[54px] md:text-[70px] font-semibold leading-[1.1] font-[Sora]">
              O caminho mais seguro entre sua carga e o destino.
            </h1>
            <p className="text-white text-[18px] font-normal leading-relaxed font-[Sora] max-w-[500px]">
              Especialistas em transporte de cargas excedentes. Cuidamos de tudo, da AET até a chegada ao destino, com comprometimento e agilidade em cada etapa.
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              <OrangeButton href={`https://wa.me/${whatsapp}`} target="_blank">
                Solicitar orçamento
              </OrangeButton>
              <a
                href="#processo"
                className="inline-flex items-center gap-2 text-white text-[16px] font-semibold font-[Sora] hover:text-[#FF7716] transition-colors border border-white/30 px-8 py-4 rounded-full hover:border-[#FF7716]"
              >
                Como trabalhamos
              </a>
            </div>
          </div>

          <div className="hidden lg:flex justify-end items-center">
            <div className="relative w-full max-w-[600px]">
              <Image
                src="/images/car-photo.jpg"
                alt="Escolta de carga especial"
                width={620}
                height={480}
                className="rounded-[20px] object-cover w-full shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
