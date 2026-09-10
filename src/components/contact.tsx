import { site, whatsappUrl } from "@/lib/site";
import { ArrowIcon, InstagramIcon, PinIcon, VideoIcon, WhatsAppIcon } from "./icons";
import { Reveal } from "./reveal";

export function Contact() {
  return (
    <section id="contato" className="scroll-mt-24 py-24 lg:py-32">
      <div className="u-container">
        <Reveal className="max-w-2xl">
          <span className="u-eyebrow">Onde encontrar</span>
          <h2 className="u-display mt-6 text-[clamp(2rem,4.4vw,3rem)] text-pine-900">
            Consultórios em Goiânia
          </h2>
          <p className="mt-6 text-[1.0625rem] leading-relaxed text-ink-soft">
            O agendamento e a confirmação de qual endereço atende o seu caso são
            feitos pelo WhatsApp.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {site.locations.map((loc, i) => (
            <Reveal
              key={loc.name}
              delay={i * 80}
              className="group flex flex-col rounded-3xl border border-pine-200/70 bg-surface p-8 transition-all duration-500 hover:-translate-y-1 hover:border-pine-300 hover:shadow-xl hover:shadow-pine-900/8"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-pine-100 text-pine-700">
                <PinIcon className="size-5" />
              </span>

              <h3 className="u-display mt-5 text-[1.375rem] text-pine-900">
                {loc.name}
              </h3>

              <address className="mt-3 flex-1 not-italic text-[0.9375rem] leading-relaxed text-ink-soft">
                {loc.address}
                <br />
                {loc.district} · {loc.city}
                <br />
                CEP {loc.zip}
              </address>

              <ul className="mt-5 space-y-1.5">
                {loc.phones.map((phone) => (
                  <li key={phone}>
                    <a
                      href={`tel:+55${phone.replace(/\D/g, "")}`}
                      className="text-[0.875rem] font-medium text-pine-700 transition-colors hover:text-clay-600"
                    >
                      {phone}
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href={loc.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex w-fit items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-pine-800 transition-colors hover:text-clay-600"
              >
                Ver no mapa
                <ArrowIcon className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Reveal>
          ))}

          {/* Teleconsulta */}
          <Reveal
            delay={160}
            className="flex flex-col rounded-3xl bg-pine-800 p-8 text-bone"
          >
            <span className="inline-flex size-11 items-center justify-center rounded-xl bg-pine-700/70 text-pine-200">
              <VideoIcon className="size-5" />
            </span>
            <h3 className="u-display mt-5 text-[1.375rem]">Teleconsulta</h3>
            <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-pine-200">
              Atendimento por vídeo para qualquer lugar do Brasil, com
              prescrição e solicitação de exames digitais.
            </p>

            <div className="mt-7 flex flex-col gap-2.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-bone px-5 py-3 text-[0.8125rem] font-semibold text-pine-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                <WhatsAppIcon className="size-4" />
                {site.contact.whatsappDisplay}
              </a>
              <a
                href={site.contact.doctoralia}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-pine-600 px-5 py-3 text-[0.8125rem] font-semibold text-bone transition-colors duration-300 hover:bg-pine-700"
              >
                Agendar online
              </a>
              <a
                href={site.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-pine-600 px-5 py-3 text-[0.8125rem] font-semibold text-bone transition-colors duration-300 hover:bg-pine-700"
              >
                <InstagramIcon className="size-4" />
                Instagram
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
