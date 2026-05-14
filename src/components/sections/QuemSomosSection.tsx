import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";

export default function QuemSomosSection() {
  return (
    <section id="quem-somos" className="relative bg-[#14394D] overflow-hidden">
      <div className="max-w-[1346px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="bg-white rounded-[15px] border border-[#14394D] overflow-hidden shadow-2xl">
              <Image
                src="/images/car-bg.jpg"
                alt="Veículo de escolta Escolta Lider"
                width={596}
                height={591}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <SectionLabel color="orange">quem somos</SectionLabel>
            <h2 className="text-white text-[48px] md:text-[60px] font-semibold leading-tight font-[Sora]">
              Sua carga nas mãos certas{" "}
              <span className="text-[#FF7716]">desde 2006.</span>
            </h2>
            <div className="flex flex-col gap-4">
              <p className="text-white text-[20px] font-semibold leading-relaxed font-[Sora]">
                Há mais de 20 anos, a Escolta Lider atua no transporte de cargas especiais com foco em comprometimento, confiança e entrega.
              </p>
              <p className="text-white/80 text-[17px] font-normal leading-relaxed font-[Sora]">
                Nascemos de dentro do setor, e é por isso que sabemos o que o cliente precisa antes mesmo de pedir. Trabalhamos com autorização especial de trânsito e escolta. Os dois serviços que precisam andar juntos para que a operação feche sem falha.
              </p>
              <p className="text-white/80 text-[17px] font-normal leading-relaxed font-[Sora]">
                Mais do que prestar um serviço, a Escolta Líder assume a responsabilidade por cada trajeto, garantindo que a operação aconteça com seriedade, controle e total segurança.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
