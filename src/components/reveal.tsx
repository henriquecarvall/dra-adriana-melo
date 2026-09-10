"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
  id?: string;
  /**
   * Já nasce visível, sem esperar entrar no viewport nem o React hidratar.
   * Use em tudo que aparece acima da dobra: senão o visitante encara uma tela
   * em branco até o bundle carregar, o que no celular é justamente o pior
   * momento. Ver a rede de segurança de `.reveal` em globals.css.
   */
  immediate?: boolean;
};

/**
 * Fade + slide na entrada em viewport. Sem JS o conteúdo já aparece
 * (a classe `has-js` só é aplicada quando há IntersectionObserver).
 */
export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
  id,
  immediate = false,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(immediate);

  useEffect(() => {
    if (immediate) return;

    const el = ref.current;
    // Sem IntersectionObserver o <html> não recebe `has-js`, então o CSS
    // já mantém tudo visível e não há nada a observar.
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [immediate]);

  return (
    <Tag
      ref={ref}
      id={id}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
