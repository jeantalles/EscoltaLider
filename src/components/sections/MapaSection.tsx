import SectionLabel from "@/components/ui/SectionLabel";

const states = [
  { name: "Minas Gerais", note: "sede" },
  { name: "Goiás", note: "" },
  { name: "São Paulo", note: "" },
  { name: "Rio de Janeiro", note: "" },
  { name: "Espírito Santo", note: "" },
  { name: "Mato Grosso do Sul", note: "" },
  { name: "Bahia", note: "" },
];

export default function MapaSection() {
  return (
    <section id="cobertura" className="bg-[#14394D] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1346px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col gap-6">
            <SectionLabel color="orange">Cobertura</SectionLabel>
            <h2 className="text-white text-[40px] md:text-[48px] font-semibold leading-tight font-[Sora]">
              De Minas ao Brasil. A gente conhece cada rota.
            </h2>
            <p className="text-white/80 text-[17px] font-normal leading-relaxed font-[Sora]">
              Atuamos em todo o território brasileiro. Para garantir agilidade na operação, concentramos nossa estrutura de prontidão nos estados que representam os maiores polos logísticos do país:
            </p>
            <ul className="flex flex-col gap-3 mt-2">
              {states.map((s) => (
                <li key={s.name} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FF7716] flex-shrink-0" />
                  <span className="text-white text-[16px] font-normal font-[Sora]">
                    {s.name}
                    {s.note && (
                      <span className="text-white/50 text-[14px] ml-1">— {s.note}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src="/images/mapa-do-brasil.svg"
              alt="Mapa do Brasil com atuação da Escolta Lider"
              className="w-full max-w-[520px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
