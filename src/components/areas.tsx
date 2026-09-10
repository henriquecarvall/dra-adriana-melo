import { site } from "@/lib/site";
import { areaIcons, type AreaIconName } from "./icons";
import { Reveal } from "./reveal";

export function Areas() {
  return (
    <section
      id="areas"
      className="relative scroll-mt-24 overflow-hidden bg-pine-900 py-24 text-bone lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-0" aria-hidden>
        <div className="absolute -left-24 top-1/4 size-[32rem] rounded-full bg-pine-700/40 blur-3xl" />
        <div className="absolute -right-32 bottom-0 size-[28rem] rounded-full bg-clay-600/15 blur-3xl" />
      </div>

      <div className="u-container relative">
        <div className="max-w-2xl">
          <Reveal>
            <span className="u-eyebrow !text-pine-300 before:!bg-clay-400">
              Áreas de atuação
            </span>
            <h2 className="u-display mt-6 text-[clamp(2rem,4.4vw,3rem)] text-bone">
              Alergia e imunologia,
              <br className="hidden sm:block" /> do lactente ao adulto
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-pine-200">
              Cada quadro pede uma investigação diferente. Abaixo, as condições
              acompanhadas no consultório. Se a sua não estiver na lista, vale
              conversar mesmo assim.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-pine-700/60 bg-pine-700/40 sm:grid-cols-2 lg:grid-cols-3">
          {site.areas.map((area, i) => {
            const Icon = areaIcons[area.icon as AreaIconName];
            return (
              <Reveal
                as="li"
                key={area.title}
                delay={i * 45}
                className="group relative bg-pine-900 p-7 transition-colors duration-500 hover:bg-pine-800"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-xl border border-pine-700 bg-pine-800/70 text-pine-300 transition-all duration-500 group-hover:border-clay-400/60 group-hover:text-clay-400">
                  <Icon className="size-5" />
                </span>
                <h3 className="u-display mt-5 text-[1.3125rem] text-bone">
                  {area.title}
                </h3>
                <p className="mt-2.5 text-[0.875rem] leading-relaxed text-pine-200/85">
                  {area.detail}
                </p>
                <span
                  className="absolute inset-x-7 bottom-0 h-px scale-x-0 bg-clay-400/70 transition-transform duration-500 group-hover:scale-x-100"
                  aria-hidden
                />
              </Reveal>
            );
          })}

          {/* Célula de fechamento */}
          <Reveal
            as="li"
            delay={site.areas.length * 45}
            className="flex flex-col justify-center bg-pine-800/60 p-7"
          >
            <p className="u-display text-[1.25rem] leading-snug text-bone">
              Não sabe se o seu caso é de alergista?
            </p>
            <p className="mt-2.5 text-[0.875rem] leading-relaxed text-pine-200/85">
              Sintomas que se repetem sem explicação costumam ter um gatilho
              identificável. A avaliação começa por aí.
            </p>
          </Reveal>
        </ul>
      </div>
    </section>
  );
}
