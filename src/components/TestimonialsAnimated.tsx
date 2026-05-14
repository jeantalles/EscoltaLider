"use client";

import { useEffect, useRef } from "react";

const testimonials = [
  {
    text: "Toda vez que fui atendido pela Escolta Líder, tive uma experiência muito positiva. A equipe é bem instruída, educada e ágil, com veículos novos e ótimo suporte nas viagens.",
    name: "Pedro",
    company: "Fagundes Mineração",
  },
  {
    text: "A Escolta Líder presta um ótimo serviço de escolta com segurança, profissionalismo e eficiência. Agradecemos à equipe pela qualidade e agilidade dos serviços prestados.",
    name: "Narzelio",
    company: "Consórcio Mina Fábrica",
  },
  {
    text: "Em nome da empresa Nova Luz, expresso a satisfação com o excelente trabalho realizado pela Escolta Líder na assessoria ao transporte de cargas e máquinas de grande porte, essencial para o sucesso das operações e garantindo a integridade das cargas.\n\nDestaco o profissionalismo, a responsabilidade e a eficiência em todas as operações, assegurando segurança e organização nos trajetos para diversas cidades e estados, e parabenizo toda a equipe da Escolta Lider pelo comprometimento e excelência nos serviços prestados.",
    name: "Kadu",
    company: "Nova Luz - NLZ",
  },
];

export function TestimonialsAnimated() {
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
    <div ref={ref} className="testimonial-grid">
      {testimonials.map((testimonial, index) => (
        <article
          className={`testimonial-card testimonial-card-${index + 1}`}
          key={testimonial.name}
        >
          <img
            className="quote-icon"
            src="/images/escolta-lider/icone-de-aspas.svg"
            alt=""
          />
          <p>{testimonial.text}</p>
          <footer>
            <strong>{testimonial.name}</strong>
            <span>{testimonial.company}</span>
          </footer>
        </article>
      ))}
    </div>
  );
}
