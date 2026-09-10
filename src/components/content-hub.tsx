import { site } from "@/lib/site";
import { ArrowIcon, InstagramIcon } from "./icons";
import { Reveal } from "./reveal";

export function ContentHub() {
  return (
    <section id="conteudo" className="scroll-mt-24 py-24 lg:py-32">
      <div className="u-container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-2xl">
            <span className="u-eyebrow">Conteúdo educativo</span>
            <h2 className="u-display mt-6 text-[clamp(2rem,4.4vw,3rem)] text-pine-900">
              Informação de alergia
              <br className="hidden sm:block" /> sem achismo
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <a
              href={site.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full border border-pine-300 px-6 py-3.5 text-sm font-semibold text-pine-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-pine-600 hover:bg-surface"
            >
              <InstagramIcon className="size-[1.125rem]" />
              {site.contact.instagramHandle}
              <ArrowIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          {/* Card do perfil */}
          <Reveal className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-pine-900 p-8 text-bone lg:p-10">
            <div
              className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-clay-600/20 blur-3xl"
              aria-hidden
            />
            <div className="relative">
              <InstagramIcon className="size-8 text-clay-400" />
              <p className="u-display mt-6 text-pretty text-[1.75rem] leading-snug lg:text-[2rem]">
                Urticária, dermatite atópica, casos clínicos e as dúvidas que mais
                chegam no consultório.
              </p>
              <p className="mt-5 max-w-md text-[0.9375rem] leading-relaxed text-pine-200">
                No Instagram, a Dra. Adriana traduz o que a literatura de alergia e
                imunologia já sabe para a linguagem de quem convive com a doença
                todos os dias.
              </p>
            </div>

            <a
              href={site.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative mt-10 inline-flex w-fit items-center gap-2.5 rounded-full bg-bone px-6 py-3.5 text-sm font-semibold text-pine-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              Seguir no Instagram
              <ArrowIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Reveal>

          {/* Destaques */}
          <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-pine-200/70 bg-pine-200/70 sm:grid-cols-2">
            {site.highlights.map((h, i) => (
              <Reveal
                as="li"
                key={h.label}
                delay={i * 55}
                className="group bg-surface p-6 transition-colors duration-400 hover:bg-pine-50"
              >
                <a
                  href={site.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full flex-col"
                >
                  <span className="inline-flex size-9 items-center justify-center rounded-full border border-dashed border-clay-400/70 text-[0.625rem] font-bold uppercase tracking-wider text-clay-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="u-display mt-4 text-[1.1875rem] text-pine-900">
                    {h.label}
                  </h3>
                  <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-ink-muted">
                    {h.note}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-pine-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Ver no Instagram
                    <ArrowIcon className="size-3" />
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* Publicações incorporadas */}
        {site.instagramPosts.length > 0 ? (
          <Reveal delay={100} className="mt-14">
            <div className="mb-6 flex items-center gap-4">
              <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                Do perfil
              </span>
              <span className="u-rule flex-1" aria-hidden />
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {site.instagramPosts.map((code) => (
                <div
                  key={code}
                  className="w-full max-w-[22rem] flex-1 overflow-hidden rounded-2xl border border-pine-200/70 bg-surface shadow-sm sm:min-w-[19rem]"
                >
                  <iframe
                    src={`https://www.instagram.com/p/${code}/embed/captioned/`}
                    title={`Publicação de ${site.contact.instagramHandle}`}
                    className="h-[34rem] w-full"
                    loading="lazy"
                    scrolling="no"
                    allowFullScreen
                  />
                </div>
              ))}
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
