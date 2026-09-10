import { site, whatsappUrl } from "@/lib/site";
import { InstagramIcon, WhatsAppIcon } from "./icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-pine-950 text-pine-200">
      <div
        className="pointer-events-none absolute -left-40 -top-40 size-[34rem] rounded-full bg-pine-800/40 blur-3xl"
        aria-hidden
      />

      <div className="u-container relative py-16 lg:py-20">
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
            <p>© {year} — Todos os direitos reservados.</p>
          </div>

          <p className="mt-6 max-w-3xl text-[0.6875rem] leading-relaxed text-pine-300/75">
            O conteúdo deste site tem caráter exclusivamente informativo e não
            substitui a consulta médica, o diagnóstico ou o tratamento
            individualizado. Resultados variam de paciente para paciente.
            Publicidade médica em conformidade com o Código de Ética Médica e as
            resoluções do Conselho Federal de Medicina.
          </p>
        </div>
      </div>
    </footer>
  );
}
