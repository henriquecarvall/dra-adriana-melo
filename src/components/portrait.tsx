"use client";

import { useEffect, useState } from "react";

type PortraitProps = {
  src: string;
  alt: string;
  className?: string;
  /** Texto exibido no espaço reservado enquanto não houver foto. */
  hint?: string;
};

/**
 * Renderiza o espaço reservado por padrão e só troca pela foto depois de
 * confirmar que o arquivo existe em /public. Assim nunca aparece o ícone
 * de imagem quebrada enquanto as fotos definitivas não forem adicionadas.
 */
export function Portrait({ src, alt, className = "", hint }: PortraitProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let active = true;
    const img = new Image();
    img.onload = () => {
      if (active) setLoaded(true);
    };
    img.src = src;
    return () => {
      active = false;
    };
  }, [src]);

  if (loaded) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={alt} className={`object-cover ${className}`} decoding="async" />
    );
  }

  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-5 overflow-hidden bg-pine-800 text-center ${className}`}
      role="img"
      aria-label={alt}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 28% 18%, color-mix(in oklab, var(--color-pine-400) 55%, transparent) 0, transparent 52%), radial-gradient(circle at 78% 82%, color-mix(in oklab, var(--color-clay-500) 45%, transparent) 0, transparent 48%)",
        }}
        aria-hidden
      />
      <svg
        viewBox="0 0 200 260"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 size-full opacity-20"
        aria-hidden
      >
        <defs>
          <pattern id={`pt-${src}`} width="14" height="14" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.7" fill="var(--color-pine-200)" />
          </pattern>
        </defs>
        <rect width="200" height="260" fill={`url(#pt-${src})`} />
      </svg>

      <span
        className="relative inline-flex size-24 items-center justify-center rounded-full border border-dashed border-pine-300/50"
        aria-hidden
      >
        <span className="u-display text-4xl text-bone/90">AM</span>
      </span>

      {hint ? (
        <span className="relative max-w-[15rem] px-6 text-[0.6875rem] font-medium uppercase leading-relaxed tracking-[0.14em] text-pine-200/80">
          {hint}
        </span>
      ) : null}
    </div>
  );
}
