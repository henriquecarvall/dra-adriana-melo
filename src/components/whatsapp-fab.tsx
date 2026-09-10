"use client";

import { useEffect, useState } from "react";
import { site, whatsappUrl } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

export function WhatsAppFab() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Agendar consulta pelo WhatsApp ${site.contact.whatsappDisplay}`}
      className={`group fixed bottom-5 right-5 z-40 inline-flex items-center gap-3 rounded-full bg-pine-800 py-4 pl-4 pr-5 text-bone shadow-2xl shadow-pine-950/25 transition-all duration-500 hover:bg-pine-700 sm:bottom-8 sm:right-8 ${
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <span className="relative inline-flex">
        <span
          className="absolute inset-0 animate-ping rounded-full bg-pine-400/40 motion-reduce:hidden"
          aria-hidden
        />
        <WhatsAppIcon className="relative size-6" />
      </span>
      <span className="hidden text-sm font-semibold sm:inline">
        Agendar consulta
      </span>
    </a>
  );
}
