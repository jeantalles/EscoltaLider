import SectionLabel from "@/components/ui/SectionLabel";

const steps = [
  {
    number: "1",
    title: "Entendimento da operação",
    description: "Tipo de carga, dimensões, trajeto e prazo.",
  },
  {
    number: "2",
    title: "Viabilidade e rota",
    description: "Verificamos cada restrição do trecho antes de emitir qualquer autorização.",
  },
  {
    number: "3",
    title: "Autorização e documentação",
    description: "Tramitamos junto ao DNIT e órgãos estaduais. Documento pronto para rodar.",
  },
  {
    number: "4",
    title: "Execução e acompanhamento",
    description: "Equipe disponível 24h, com linha direta ao motorista durante toda a viagem.",
  },
];

export default function NossoProtocoloSection() {
  return (
    <section id="processo" className="relative bg-[#FFFEFB] py-24 lg:py-32 overflow-hidden">
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.04]"
        aria-hidden="true"
      >
        <span className="text-[#14394D] font-semibold font-[Sora] select-none"
          style={{ fontSize: "600px", lineHeight: 1 }}>
          A
        </span>
      </div>

      <div className="relative z-10 max-w-[1346px] mx-auto px-6 lg:px-10">
        <div className="mb-16">
          <SectionLabel color="dark">processo</SectionLabel>
          <h2 className="text-[#14394D] text-[40px] md:text-[48px] font-semibold leading-tight font-[Sora] mt-3 max-w-[600px]">
            Nosso protocolo para cada operação.
          </h2>
          <p className="text-[#14394D]/70 text-[17px] font-normal leading-relaxed font-[Sora] mt-4 max-w-[500px]">
            Antes de iniciar qualquer operação, a gente entende o que você realmente precisa.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
          <div className="hidden md:block absolute top-8 left-[calc(12.5%+32px)] right-[calc(12.5%+32px)] h-[2px] border-t-2 border-dashed border-[#FF7716]" />

          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center px-2">
              <div className="w-16 h-16 rounded-full bg-[#FF7716] flex items-center justify-center text-white text-[22px] font-semibold font-[Sora] z-10 relative shadow-md">
                {step.number}
              </div>
              <p className="mt-5 text-[#14394D] text-[15px] font-semibold font-[Sora] leading-tight">
                {step.title}
              </p>
              <p className="mt-2 text-[#14394D]/60 text-[14px] font-normal font-[Sora] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
