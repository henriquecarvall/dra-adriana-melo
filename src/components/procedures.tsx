import { site } from "@/lib/site";
import { Reveal } from "./reveal";

export function Procedures() {
  return (
    <section id="procedimentos" className="scroll-mt-24 py-24 lg:py-32">
      <div className="u-container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-2xl">
            <span className="u-eyebrow">Procedimentos</span>
            <h2 className="u-display mt-6 text-[clamp(2rem,4.4vw,3rem)] text-pine-900">
              Exames que transformam
              <br className="hidden sm:block" /> suspeita em diagnóstico
            </h2>
          </Reveal>
          <Reveal delay={80} className="max-w-sm">
            <p className="text-[0.9375rem] leading-relaxed text-ink-soft">
              Em alergia, tratar sem confirmar costuma custar caro: restrições
              alimentares desnecessárias, medicamentos evitados por engano e
              sintomas que nunca cedem.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {site.procedures.map((proc, i) => (
            <Reveal
              key={proc.title}
              delay={i * 70}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-pine-200/70 bg-surface p-8 transition-all duration-500 hover:-translate-y-1 hover:border-pine-300 hover:shadow-xl hover:shadow-pine-900/8 lg:p-10"
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-pine-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden
              />

              <span className="u-display relative text-[0.875rem] tracking-[0.2em] text-clay-500">
                {String(i + 1).padStart(2, "0")}
              </span>

              <h3 className="u-display relative mt-4 text-[1.6rem] leading-tight text-pine-900">
                {proc.title}
              </h3>
              <p className="relative mt-1.5 text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-pine-600">
                {proc.subtitle}
              </p>

              <p className="relative mt-5 flex-1 text-[0.9375rem] leading-relaxed text-ink-soft">
                {proc.body}
              </p>

              <ul className="relative mt-7 flex flex-wrap gap-2">
                {proc.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-pine-200 bg-pine-50/60 px-3 py-1.5 text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-pine-700"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-8 max-w-3xl text-[0.8125rem] leading-relaxed text-ink-muted">
            A indicação de cada exame é individual e definida em consulta.
            Alguns testes exigem suspensão prévia de medicamentos e são
            realizados em ambiente preparado para atendimento de reações.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
