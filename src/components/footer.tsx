import { agencyWhatsappUrl, site, whatsappUrl } from "@/lib/site";
import { ArrowIcon, InstagramIcon, WhatsAppIcon } from "./icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-pine-950 text-pine-200">
      <div
        className="pointer-events-none absolute -left-40 -top-40 size-[34rem] rounded-full bg-pine-800/40 blur-3xl"
        aria-hidden
      />

      {/* pb extra no celular para o botão flutuante do WhatsApp não cobrir
          o final do rodapé (assinatura da agência). */}
      <div className="u-container relative pb-28 pt-16 lg:pb-20 lg:pt-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div className="max-w-sm">
            <p className="u-display text-[1.75rem] leading-tight text-bone">
              {site.doctor.name}
            </p>
            <p className="mt-2 text-[0.8125rem] font-medium uppercase tracking-[0.14em] text-pine-400">
              {site.doctor.specialty}
            </p>
            <p className="mt-5 text-[0.875rem] leading-relaxed">
              {site.doctor.summary}
            </p>

            <div className="mt-7 flex gap-2.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="inline-flex size-11 items-center justify-center rounded-full border border-pine-800 transition-colors duration-300 hover:border-pine-500 hover:text-bone"
              >
                <WhatsAppIcon className="size-[1.125rem]" />
              </a>
              <a
                href={site.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex size-11 items-center justify-center rounded-full border border-pine-800 transition-colors duration-300 hover:border-pine-500 hover:text-bone"
              >
                <InstagramIcon className="size-[1.125rem]" />
              </a>
            </div>
          </div>

          <nav aria-label="Rodapé">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-pine-500">
              Navegação
            </p>
            <ul className="mt-5 space-y-3">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[0.875rem] transition-colors duration-300 hover:text-bone"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contato"
                  className="text-[0.875rem] transition-colors duration-300 hover:text-bone"
                >
                  Contato
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-pine-500">
              Atendimento
            </p>
            <ul className="mt-5 space-y-3 text-[0.875rem]">
              {site.locations.map((loc) => (
                <li key={loc.name}>
                  <span className="block font-semibold text-bone">{loc.name}</span>
                  <span className="block leading-relaxed">
                    {loc.district} · {loc.city}
                  </span>
                </li>
              ))}
              <li>
                <span className="block font-semibold text-bone">Teleconsulta</span>
                <span className="block leading-relaxed">Todo o Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-pine-800/70 pt-8">
          <div className="flex flex-col gap-4 text-[0.75rem] leading-relaxed text-pine-400 sm:flex-row sm:items-center sm:justify-between">
            <p>
              {site.doctor.fullName} · {site.doctor.crm} · {site.doctor.rqe}
            </p>
            <p>© {year}. Todos os direitos reservados.</p>
          </div>

          <p className="mt-6 max-w-3xl text-[0.6875rem] leading-relaxed text-pine-300/75">
            O conteúdo deste site tem caráter exclusivamente informativo e não
            substitui a consulta médica, o diagnóstico ou o tratamento
            individualizado. Resultados variam de paciente para paciente.
            Publicidade médica em conformidade com o Código de Ética Médica e as
            resoluções do Conselho Federal de Medicina.
          </p>
        </div>

        <AgencyCredit />
      </div>
    </footer>
  );
}

/**
 * Marca da Vértice: um "V" cujo vértice é o ponto em destaque.
 * O gradiente frio separa a identidade da agência da paleta da médica.
 */
function VerticeMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <defs>
        <linearGradient id="vertice-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5EE9D5" />
          <stop offset="55%" stopColor="#5BA8FF" />
          <stop offset="100%" stopColor="#A78BFA" />
        </linearGradient>
      </defs>
      <path
        d="M6 6 L16 24 L26 6"
        fill="none"
        stroke="url(#vertice-mark)"
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="24.5" r="3" fill="url(#vertice-mark)" />
    </svg>
  );
}

/**
 * Assinatura da agência: bloco de captação com identidade própria.
 * É o único ponto do site que fala da Vértice, então carrega a oferta
 * inteira: marca, promessa, provas e um caminho só (WhatsApp).
 * Todo o texto vem de `site.agency`.
 */
function AgencyCredit() {
  const { agency } = site;

  return (
    <div className="mt-12 lg:mt-16">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#080f18] p-6 sm:p-9 lg:p-11">
        {/* malha de pontos */}
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.13) 1px, transparent 0)",
            backgroundSize: "22px 22px",
            maskImage:
              "radial-gradient(120% 90% at 82% 0%, #000 0%, transparent 68%)",
            WebkitMaskImage:
              "radial-gradient(120% 90% at 82% 0%, #000 0%, transparent 68%)",
          }}
          aria-hidden
        />
        {/* brilho de acento */}
        <div
          className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-[#5BA8FF]/20 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-28 -left-20 size-64 rounded-full bg-[#A78BFA]/15 blur-3xl"
          aria-hidden
        />

        <div className="relative grid gap-9 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:items-center lg:gap-14">
          <div>
            <p className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-white/40">
              {agency.eyebrow}
            </p>

            <div className="mt-4 flex items-center gap-3">
              <VerticeMark className="size-8 shrink-0 sm:size-9" />
              <span className="text-[1.375rem] font-bold uppercase leading-none tracking-[0.22em] text-white sm:text-[1.5rem]">
                {agency.name}
              </span>
            </div>

            <p className="mt-7 text-pretty text-[1.375rem] font-semibold leading-tight text-white sm:text-[1.75rem]">
              {agency.headline}
            </p>
            <p className="mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-white/60">
              {agency.pitch}
            </p>

            <ul className="mt-7 grid gap-2.5">
              {agency.perks.map((perk) => (
                <li key={perk} className="flex items-start gap-3">
                  <span
                    className="mt-[0.3rem] size-1.5 shrink-0 rotate-45 bg-gradient-to-br from-[#5EE9D5] to-[#A78BFA]"
                    aria-hidden
                  />
                  <span className="text-[0.875rem] leading-snug text-white/75">
                    {perk}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:justify-self-end">
            <a
              href={agencyWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-white px-7 py-4 text-[0.9375rem] font-bold text-[#080f18] shadow-lg shadow-[#5BA8FF]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#5BA8FF]/30 lg:w-auto"
            >
              <WhatsAppIcon className="size-[1.125rem]" />
              {agency.cta}
              <ArrowIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <p className="mt-4 text-center text-[0.75rem] leading-relaxed text-white/40 lg:text-right">
              {agency.note}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
