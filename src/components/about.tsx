import { asset } from "@/lib/base-path";
import { site } from "@/lib/site";
import { CheckIcon } from "./icons";
import { Reveal } from "./reveal";

export function About() {
  return (
    <section id="sobre" className="scroll-mt-24 py-24 lg:py-32">
      <div className="u-container grid grid-cols-1 gap-16 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-24">
        {/* Visual */}
        <Reveal className="order-2 lg:order-1">
          <div className="relative mx-auto max-w-sm lg:sticky lg:top-28 lg:max-w-none">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-pine-200/70 bg-pine-800 shadow-xl shadow-pine-900/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset("/images/dra-adriana-entrevista.webp")}
                alt={`${site.doctor.name} durante entrevista sobre clima seco e saúde respiratória`}
                width={1080}
                height={1440}
                loading="lazy"
                decoding="async"
                className="aspect-[3/4] w-full object-cover"
              />
              <span className="absolute left-4 top-4 rounded-full bg-bone/95 px-3 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.1em] text-pine-800 backdrop-blur">
                Entrevista · Programa Hora da Saúde
              </span>
            </div>

            <figure className="relative -mt-10 ml-6 mr-0 rounded-2xl border border-pine-100 bg-surface p-6 shadow-lg shadow-pine-900/5 sm:ml-10">
              <svg
                className="mb-3 size-7 text-clay-200"
                viewBox="0 0 32 32"
                fill="currentColor"
                aria-hidden
              >
                <path d="M12.5 6C8 8 5 12 5 17.2 5 21.5 7.6 24 11 24c2.9 0 5-2.1 5-5 0-2.8-2-4.8-4.6-4.8-.5 0-1 .1-1.3.2.5-2.6 2.4-5 5-6.3L12.5 6Zm14 0c-4.5 2-7.5 6-7.5 11.2 0 4.3 2.6 6.8 6 6.8 2.9 0 5-2.1 5-5 0-2.8-2-4.8-4.6-4.8-.5 0-1 .1-1.3.2.5-2.6 2.4-5 5-6.3L26.5 6Z" />
              </svg>
              <blockquote className="u-display text-pretty text-[1.3125rem] leading-snug text-pine-900">
                “{site.doctor.quote}”
              </blockquote>
              <figcaption className="mt-4 text-[0.75rem] font-medium uppercase tracking-[0.12em] text-ink-muted">
                {site.doctor.name}
              </figcaption>
            </figure>
          </div>
        </Reveal>

        {/* Texto */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="u-eyebrow">Sobre a médica</span>
            <h2 className="u-display mt-6 text-[clamp(2rem,4.4vw,3rem)] text-pine-900">
              Uma investigação que
              <br className="hidden sm:block" /> vai até o fim da pergunta
            </h2>
          </Reveal>

          <Reveal delay={90}>
            <div className="mt-8 space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft">
              <p>
                A <strong className="font-semibold text-pine-900">{site.doctor.name}</strong> é
                médica formada pela Universidade do Oeste Paulista, em Presidente
                Prudente, com especialização em Alergia e Imunologia pela{" "}
                <strong className="font-semibold text-pine-900">USP</strong> e título de
                especialista pela{" "}
                <strong className="font-semibold text-pine-900">
                  Sociedade Brasileira de Alergia e Imunologia (ASBAI)
                </strong>
                .
              </p>
              <p>
                Atua há mais de sete anos na especialidade, é docente da disciplina
                de Imunologia e Alergia da PUC-GO, na Santa Casa de Misericórdia de
                Goiânia, e segue vinculada ao Hospital das Clínicas da FMUSP.
                Atualmente é mestranda no Programa de Pós-Graduação em Ciências da
                Saúde da Faculdade de Medicina da UFG.
              </p>
              <p>
                No consultório, o atendimento é de adultos e crianças: da rinite que
                nunca melhora à urticária que aparece sem explicação, passando por
                alergia alimentar, reações a medicamentos, anafilaxia e infecções de
                repetição que podem esconder uma imunodeficiência.
              </p>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              {site.credentials.map((c) => (
                <li key={c.label} className="flex gap-3">
                  <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-pine-100 text-pine-700">
                    <CheckIcon className="size-3" strokeWidth={2} />
                  </span>
                  <span className="text-[0.875rem] leading-snug text-ink-soft">
                    {c.label}
                    <span className="mt-0.5 block font-semibold text-pine-800">
                      {c.org}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 rounded-2xl bg-pine-50 px-6 py-4 text-[0.8125rem] text-ink-soft">
              <span className="font-semibold text-pine-800">Registro profissional</span>
              <span className="h-4 w-px bg-pine-200" aria-hidden />
              <span>{site.doctor.crm}</span>
              <span className="h-4 w-px bg-pine-200" aria-hidden />
              <span>{site.doctor.rqe}</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
