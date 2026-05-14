"use client";

import { useEffect, useRef } from "react";

const states = [
  "Minas Gerais — sede",
  "Goiás",
  "São Paulo",
  "Rio de Janeiro",
  "Espírito Santo",
  "Mato Grosso do Sul",
  "Bahia",
];

export function StateListAnimated() {
  const ref = useRef<HTMLUListElement>(null);

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
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <ul ref={ref} className="state-list">
      {states.map((state) => (
        <li key={state}>{state}</li>
      ))}
    </ul>
  );
}
