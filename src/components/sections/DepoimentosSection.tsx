import SectionLabel from "@/components/ui/SectionLabel";
import IconeAspas from "@/components/icons/IconeAspas";

const testimonials = [
  {
    name: "Pedro",
    company: "Fagundes Mineração",
    text: "Toda vez que fui atendido pela Escolta Líder, tive uma experiência muito positiva. A equipe é bem instruída, educada e ágil, com veículos novos e ótimo suporte nas viagens.",
  },
  {
    name: "Narzelio",
    company: "Consórcio Mina Fábrica",
    text: "A Escolta Líder presta um ótimo serviço de escolta com segurança, profissionalismo e eficiência. Agradecemos à equipe pela qualidade e agilidade dos serviços prestados.",
  },
  {
    name: "Kadu",
    company: "Nova Luz — NLZ",
    text: "Expresso a satisfação com o excelente trabalho realizado pela Escolta Líder na assessoria ao transporte de cargas e máquinas de grande porte. Destaco o profissionalismo, a responsabilidade e a eficiência em todas as operações, assegurando segurança e organização nos trajetos para diversas cidades e estados.",
  },
];

export default function DepoimentosSection() {
  return (
    <section className="relative bg-[#FF7716] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1346px] mx-auto px-6 lg:px-10">
        <div className="mb-12">
          <SectionLabel color="dark" className="text-[#14394D]/70">
            O que dizem sobre nós
          </SectionLabel>
          <h2 className="text-[#14394D] text-[40px] md:text-[48px] font-semibold leading-tight font-[Sora] mt-3">
            Uma reputação que se constrói viagem a viagem.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-[15px] p-8 flex flex-col gap-5"
            >
              <IconeAspas width={28} height={24} />
              <p className="text-[#14394D] text-[15px] font-normal leading-relaxed font-[Sora] flex-1">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="border-t border-[#14394D]/10 pt-4">
                <p className="text-[#14394D] text-[16px] font-semibold font-[Sora]">{t.name}</p>
                <p className="text-[#14394D]/50 text-[14px] font-normal font-[Sora]">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
