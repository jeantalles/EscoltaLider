"use client";

import { useEffect, useRef } from "react";

const services = [
  {
    title: "Autorização especial de trânsito (AET)",
    text: "Atuamos na emissão de autorizações junto ao DNIT, DER-MG, DER-SP e demais estados a nível Brasil.",
  },
  {
    title: "Escolta de cargas especiais",
    text: "Equipe experiente, frota conservada e protocolo definido. Do início da rota até a entrega no destino.",
  },
  {
    title: "Análise e viabilidade de rota",
    text: "Viabilizamos o transporte de qualquer tipo de carga superdimensionada por meio de Estudos de Viabilidade Geométrica, realizados junto às concessionárias e órgãos públicos, em âmbito nacional, para cargas de todas as dimensões.",
  },
  {
    title: "Assessoria operacional",
    text: "Oferecemos assessoria completa no transporte de cargas superdimensionadas, abrangendo desde a documentação até a escolta credenciada.",
  },
];

export function ServiceGridAnimated() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="service-grid">
      {services.map((service) => (
        <article className="service-card" key={service.title}>
          <h3>{service.title}</h3>
          <p>{service.text}</p>
        </article>
      ))}
    </div>
  );
}
