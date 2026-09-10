import { site, whatsappUrl } from "@/lib/site";
import { ChevronIcon, WhatsAppIcon } from "./icons";
import { Reveal } from "./reveal";

export function Faq() {
  return (
    <section
      id="duvidas"
      className="scroll-mt-24 border-t border-pine-200/70 bg-bone-deep/50 py-24 lg:py-32"
    >
      <div className="u-container grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <span className="u-eyebrow">Dúvidas frequentes</span>
            <h2 className="u-display mt-6 text-[clamp(2rem,4.4vw,3rem)] text-pine-900">
              Antes de
              <br className="hidden sm:block" /> marcar
            </h2>
            <p className="mt-6 max-w-sm text-[0.9375rem] leading-relaxed text-ink-soft">
              As perguntas que mais aparecem no consultório e nas mensagens.
              Ficou alguma de fora?
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2.5 rounded-full bg-pine-800 px-6 py-3.5 text-sm font-semibold text-bone transition-all duration-300 hover:-translate-y-0.5 hover:bg-pine-700"
            >
              <WhatsAppIcon className="size-4" />
              Perguntar no WhatsApp
            </a>
          </div>
        </Reveal>

        <div>
          {site.faq.map((item, i) => (
            <Reveal key={item.q} delay={i * 55}>
              <details className="group border-b border-pine-200/80 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-left">
                  <h3 className="u-display text-[1.1875rem] leading-snug text-pine-900 transition-colors duration-300 group-hover:text-pine-600 sm:text-[1.3125rem]">
                    {item.q}
                  </h3>
                  <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-pine-300 text-pine-700 transition-all duration-300 group-hover:border-pine-600 group-open:rotate-180 group-open:bg-pine-800 group-open:text-bone">
                    <ChevronIcon className="size-4" />
                  </span>
                </summary>
                <p className="max-w-2xl pb-7 pr-14 text-[0.9375rem] leading-relaxed text-ink-soft">
                  {item.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
