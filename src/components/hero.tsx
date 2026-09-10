import { asset } from "@/lib/base-path";
import { site, whatsappUrl } from "@/lib/site";
import { ArrowIcon, PinIcon, StarIcon, VideoIcon, WhatsAppIcon } from "./icons";
import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden pt-[4.5rem]">
      <Backdrop />

      <div className="u-container relative grid grid-cols-1 items-center gap-14 pb-20 pt-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-20 lg:pb-28 lg:pt-24">
        {/* ---- Coluna de texto ---- */}
        <div className="min-w-0 max-w-xl">
          <Reveal immediate>
            <span className="u-eyebrow">{site.doctor.tagline}</span>
          </Reveal>

          <Reveal immediate delay={80}>
            <h1 className="u-display mt-6 text-[clamp(2.6rem,7vw,4.35rem)] text-pine-900">
              Descobrir a causa
              <br />
              muda o{" "}
              <em className="relative not-italic">
                <span className="relative z-10 text-clay-600">tratamento</span>
                <svg
                  className="absolute -bottom-1 left-0 z-0 w-full"
                  height="12"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M2 8.5C40 3.5 90 2.5 198 6"
                    fill="none"
                    stroke="var(--color-clay-200)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </em>
              .
            </h1>
          </Reveal>

          <Reveal immediate delay={160}>
            <p className="mt-7 text-pretty text-[1.0625rem] leading-relaxed text-ink-soft">
              {site.doctor.summary} Investigação criteriosa com testes
              específicos, conduta individualizada e acompanhamento próximo,
              em Goiânia ou por teleconsulta.
            </p>
          </Reveal>

          <Reveal immediate delay={240}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-pine-800 px-7 py-4 text-sm font-semibold text-bone shadow-lg shadow-pine-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-pine-700 hover:shadow-xl hover:shadow-pine-900/20"
              >
                <WhatsAppIcon className="size-[1.125rem]" />
                Agendar pelo WhatsApp
                <ArrowIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href={site.contact.doctoralia}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full border border-pine-300 bg-surface/60 px-7 py-4 text-sm font-semibold text-pine-800 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-pine-600 hover:bg-surface"
              >
                Agendar pela Doctoralia
              </a>
            </div>
          </Reveal>

          <Reveal immediate delay={320}>
            <dl className="mt-11 grid w-full max-w-md grid-cols-3 gap-px overflow-hidden rounded-2xl border border-pine-200/70 bg-pine-200/70">
              <Metric value="7+" label="anos de experiência" />
              <Metric value="USP" label="especialização" />
              <Metric value="ASBAI" label="título de especialista" />
            </dl>
          </Reveal>
        </div>

        {/* ---- Coluna visual ---- */}
        <Reveal immediate delay={200} className="relative">
          <div className="relative mx-auto w-full max-w-[26rem] lg:max-w-none">
            {/* moldura decorativa */}
            <div
              className="absolute -inset-3 -z-10 rounded-[2.5rem] border border-pine-200/80"
              aria-hidden
            />
            <div
              className="absolute -right-5 -top-5 -z-10 size-32 rounded-full bg-clay-100 blur-2xl"
              aria-hidden
            />

            <div className="relative overflow-hidden rounded-[2rem] bg-pine-800 shadow-2xl shadow-pine-900/20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset("/images/dra-adriana.webp")}
                alt={`Retrato de ${site.doctor.name}, alergista e imunologista em Goiânia`}
                width={675}
                height={844}
                fetchPriority="high"
                decoding="async"
                className="aspect-[4/5] w-full object-cover"
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-pine-950/70 to-transparent"
                aria-hidden
              />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="u-display text-[1.375rem] leading-tight text-bone">
                  {site.doctor.name}
                </p>
                <p className="mt-1 text-[0.75rem] font-medium uppercase tracking-[0.12em] text-pine-200">
                  {site.doctor.crm} · {site.doctor.rqe}
                </p>
              </div>
            </div>

            {/* Cartão flutuante: avaliação */}
            <a
              href={site.contact.doctoralia}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-28 -left-3 flex items-center gap-3 rounded-2xl border border-pine-100 bg-surface px-4 py-3.5 shadow-xl shadow-pine-900/10 transition-transform duration-300 hover:-translate-y-1 sm:-left-8"
            >
              <div className="flex flex-col">
                <span className="flex items-center gap-0.5 text-clay-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="size-3.5" />
                  ))}
                </span>
                <span className="mt-1 text-[0.6875rem] font-medium text-ink-muted">
                  Avaliações no Doctoralia
                </span>
              </div>
            </a>

            {/* Cartão flutuante: modalidades */}
            <div className="absolute -right-2 top-8 hidden flex-col gap-2.5 rounded-2xl border border-pine-100 bg-surface/95 px-4 py-3.5 shadow-xl shadow-pine-900/10 backdrop-blur sm:flex lg:-right-6">
              <span className="flex items-center gap-2 text-[0.75rem] font-medium text-ink-soft">
                <PinIcon className="size-4 text-pine-600" />
                Goiânia, GO
              </span>
              <span className="flex items-center gap-2 text-[0.75rem] font-medium text-ink-soft">
                <VideoIcon className="size-4 text-pine-600" />
                Teleconsulta
              </span>
            </div>
          </div>
        </Reveal>
      </div>

      <CredentialMarquee />
    </section>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="min-w-0 bg-bone px-3 py-5 sm:px-4">
      <dt className="u-display text-2xl text-pine-800">{value}</dt>
      <dd className="mt-1 hyphens-auto break-words text-[0.6875rem] leading-snug text-ink-muted">
        {label}
      </dd>
    </div>
  );
}

function CredentialMarquee() {
  const items = [...site.credentials, ...site.credentials];

  return (
    <div className="relative overflow-hidden border-y border-pine-200/70 bg-bone-deep py-5">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bone-deep to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bone-deep to-transparent"
        aria-hidden
      />
      <ul
        className="flex w-max animate-[marquee_38s_linear_infinite] items-center gap-12 pl-12 motion-reduce:animate-none"
        aria-label="Formação e titulações"
      >
        {items.map((c, i) => (
          <li
            key={`${c.org}-${i}`}
            className="flex shrink-0 items-baseline gap-2.5 whitespace-nowrap"
            aria-hidden={i >= site.credentials.length}
          >
            <span className="text-[0.8125rem] font-medium text-ink-soft">
              {c.label}
            </span>
            <span className="u-display text-[0.9375rem] text-pine-700">{c.org}</span>
            <span className="ml-6 size-1 rounded-full bg-clay-400" />
          </li>
        ))}
      </ul>
    </div>
  );
}

function Backdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute -left-40 -top-40 size-[38rem] rounded-full bg-pine-100/70 blur-3xl" />
      <div className="absolute -right-32 top-24 size-[30rem] rounded-full bg-clay-100/50 blur-3xl" />
      <svg className="absolute inset-0 size-full opacity-[0.5]">
        <defs>
          <pattern id="hero-dots" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="1.2" cy="1.2" r="1.2" fill="var(--color-pine-200)" />
          </pattern>
          <linearGradient id="hero-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0.55" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="hero-mask">
            <rect width="100%" height="100%" fill="url(#hero-fade)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-dots)" mask="url(#hero-mask)" />
      </svg>
    </div>
  );
}
