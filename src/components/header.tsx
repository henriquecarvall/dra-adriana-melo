"use client";

import { useEffect, useState } from "react";
import { site, whatsappUrl } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-pine-100 bg-bone/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="u-container flex h-[4.5rem] items-center justify-between gap-6">
        <a href="#topo" className="group flex items-center gap-3" aria-label="Início">
          <Monogram />
          <span className="flex flex-col leading-none">
            <span className="u-display text-[1.0625rem] text-pine-900">
              Dra. Adriana Melo
            </span>
            <span className="mt-1 text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-ink-muted">
              Alergia e Imunologia
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Seções do site">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-[0.8125rem] font-medium text-ink-soft transition-colors hover:text-pine-700 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-clay-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-pine-800 px-5 py-2.5 text-[0.8125rem] font-semibold text-bone shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-pine-700 hover:shadow-lg hover:shadow-pine-900/15 sm:inline-flex"
          >
            <WhatsAppIcon className="size-4" />
            Agendar consulta
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-11 items-center justify-center rounded-full border border-pine-200 text-pine-800 lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 h-px w-full bg-current transition-all duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-px w-full bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-px w-full bg-current transition-all duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={`overflow-hidden border-t border-pine-100 bg-bone/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="u-container flex flex-col gap-1 py-5" aria-label="Menu">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="u-display border-b border-pine-100/70 py-3 text-2xl text-pine-900"
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-pine-800 px-6 py-3.5 text-sm font-semibold text-bone"
          >
            <WhatsAppIcon className="size-4" />
            Agendar pelo WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}

function Monogram() {
  return (
    <span className="relative inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-pine-800 text-bone transition-transform duration-500 group-hover:scale-105">
      <svg viewBox="0 0 40 40" className="absolute inset-0 size-full" aria-hidden>
        <circle
          cx="20"
          cy="20"
          r="18.5"
          fill="none"
          stroke="var(--color-clay-400)"
          strokeWidth="0.75"
          strokeDasharray="2 4"
          opacity="0.6"
        />
      </svg>
      <span className="u-display text-[0.9375rem] tracking-tight">AM</span>
    </span>
  );
}
