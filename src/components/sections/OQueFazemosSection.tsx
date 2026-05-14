import SectionLabel from "@/components/ui/SectionLabel";
import ServiceCard from "@/components/ui/ServiceCard";

const services = [
  {
    title: "Autorização Especial de Trânsito (AET)",
    description:
      "Atuamos na emissão de autorizações junto ao DNIT, DER-MG, DER-SP e demais estados a nível Brasil.",
  },
  {
    title: "Escolta de Cargas Especiais",
    description:
      "Equipe experiente, frota conservada e protocolo definido. Do início da rota até a entrega no destino.",
  },
  {
    title: "Análise e Viabilidade de Rota",
    description:
      "Viabilizamos o transporte de qualquer tipo de carga superdimensionada por meio de Estudos de Viabilidade Geométrica, realizados junto às concessionárias e órgãos públicos, em âmbito nacional.",
  },
  {
    title: "Assessoria Operacional",
    description:
      "Oferecemos assessoria completa no transporte de cargas superdimensionadas, abrangendo desde a documentação até a escolta credenciada.",
  },
];

export default function OQueFazemosSection() {
  return (
    <section id="servicos" className="bg-[#BFD6DE] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1346px] mx-auto px-6 lg:px-10">
        <div className="mb-12">
          <SectionLabel color="dark">o que fazemos</SectionLabel>
          <h2 className="text-[#14394D] text-[40px] md:text-[48px] font-semibold leading-tight font-[Sora] mt-3 max-w-[800px]">
            Da autorização à estrada, um único parceiro.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.title} title={s.title} description={s.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
