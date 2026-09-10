import { site, whatsappUrl } from "@/lib/site";
import { ArrowIcon, PinIcon, VideoIcon, WhatsAppIcon } from "./icons";
import { Reveal } from "./reveal";

export function Journey() {
  return (
    <section
      id="atendimento"
      className="scroll-mt-24 border-y border-pine-200/70 bg-bone-deep/50 py-24 lg:py-32"
    >
      <div className="u-container">
        <Reveal className="max-w-2xl">
          <span className="u-eyebrow">Como funciona</span>
          <h2 className="u-display mt-6 text-[clamp(2rem,4.4vw,3rem)] text-pine-900">
            Do primeiro contato
            <br className="hidden sm:block" /> ao plano de tratamento
          </h2>
        </Reveal>

        <ol className="mt-14 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-4 lg:gap-x-8">
          {site.journey.map((item, i) => (
            <Reveal as="li" key={item.step} delay={i * 80} className="relative">
              <div className="flex items-center gap-4">
                <span className="u-display relative z-10 inline-flex size-12 shrink-0 items-center justify-center rounded-full border border-pine-300 bg-bone text-[0.9375rem] text-pine-700">
                  {item.step}
                </span>
                {i < site.journey.length - 1 ? (
                  <span
                    className="hidden h-px flex-1 bg-gradient-to-r from-pine-300 to-transparent lg:block"
                    aria-hidden
                  />
                ) : null}
              </div>
              <h3 className="u-display mt-5 text-[1.375rem] text-pine-900">
                {item.title}
              </h3>
              <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-soft">
                {item.body}
              </p>
            </Reveal>
          ))}
        </ol>

        {/* Modalidades */}
        <div className="mt-20 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,0.9fr)]">
          <Reveal className="rounded-3xl border border-pine-200/70 bg-surface p-8">
            <span className="inline-flex size-11 items-center justify-center rounded-xl bg-pine-100 text-pine-700">
              <PinIcon className="size-5" />
            </span>
            <h3 className="u-display mt-5 text-[1.375rem] text-pine-900">
              Consulta presencial
            </h3>
            <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-soft">
              Em Goiânia, com estrutura para testes cutâneos, testes de contato,
              provocação e imunoterapia realizados na própria clínica.
            </p>
          </Reveal>

          <Reveal delay={80} className="rounded-3xl border border-pine-200/70 bg-surface p-8">
            <span className="inline-flex size-11 items-center justify-center rounded-xl bg-pine-100 text-pine-700">
              <VideoIcon className="size-5" />
            </span>
            <h3 className="u-display mt-5 text-[1.375rem] text-pine-900">
              Teleconsulta
            </h3>
            <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-soft">
              Para quem está fora de Goiânia ou precisa de revisão de exames e
              ajuste de tratamento sem sair de casa. Atendimento por vídeo, com
              prescrição digital.
            </p>
          </Reveal>

          <Reveal
            delay={160}
            className="flex flex-col justify-between rounded-3xl bg-pine-800 p-8 text-bone"
          >
            <div>
              <h3 className="u-display text-[1.375rem] leading-snug">
                Pronto para agendar?
              </h3>
              <p className="mt-2.5 text-[0.875rem] leading-relaxed text-pine-200">
                A secretaria responde pelo WhatsApp com horários disponíveis e
                orientações de preparo.
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-7 inline-flex items-center justify-center gap-2.5 rounded-full bg-bone px-6 py-3.5 text-sm font-semibold text-pine-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              <WhatsAppIcon className="size-4" />
              Falar no WhatsApp
              <ArrowIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
