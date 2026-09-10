"use client";

import { useMemo, useState } from "react";
import { site } from "@/lib/site";
import { postImage, postThemes, postUrl, posts, type PostTheme } from "@/lib/posts";
import { ArrowIcon, InstagramIcon } from "./icons";
import { Reveal } from "./reveal";

/** Quantos cards aparecem antes de clicar em "Ver mais". */
const PAGE = 12;

const temaLabel = new Map<PostTheme, string>(
  postThemes.map((t) => [t.id, t.label]),
);

/** "2026-09-08" -> "set 2026" */
function mesAno(data: string) {
  const [ano, mes] = data.split("-");
  const meses = [
    "jan", "fev", "mar", "abr", "mai", "jun",
    "jul", "ago", "set", "out", "nov", "dez",
  ];
  return `${meses[Number(mes) - 1]} ${ano}`;
}

export function ContentHub() {
  const [tema, setTema] = useState<PostTheme | "todos">("todos");
  const [limite, setLimite] = useState(PAGE);

  const filtrados = useMemo(
    () => (tema === "todos" ? posts : posts.filter((p) => p.tema === tema)),
    [tema],
  );

  function trocarTema(novo: PostTheme | "todos") {
    setTema(novo);
    setLimite(PAGE);
  }

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

        {/* Card do perfil */}
        <Reveal className="relative mt-14 overflow-hidden rounded-3xl bg-pine-900 p-8 text-bone lg:p-10">
          <div
            className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-clay-600/20 blur-3xl"
            aria-hidden
          />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end">
            <div>
              <InstagramIcon className="size-8 text-clay-400" />
              <p className="u-display mt-6 text-pretty text-[1.75rem] leading-snug lg:text-[2rem]">
                Urticária, dermatite atópica, rinite, asma e as dúvidas que mais
                chegam no consultório.
              </p>
              <p className="mt-5 max-w-xl text-[0.9375rem] leading-relaxed text-pine-200">
                No Instagram, a Dra. Adriana traduz o que a literatura de alergia
                e imunologia já sabe para a linguagem de quem convive com a
                doença todos os dias. Abaixo, {posts.length} publicações
                organizadas por assunto.
              </p>
            </div>

            <a
              href={site.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-fit items-center gap-2.5 rounded-full bg-bone px-6 py-3.5 text-sm font-semibold text-pine-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white lg:justify-self-end"
            >
              Seguir no Instagram
              <ArrowIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>

        {/* Filtro por tema */}
        <Reveal delay={60} className="mt-12">
          <h3 className="sr-only">Filtrar publicações por assunto</h3>
          {/* No celular vira uma faixa que rola na horizontal, para não
              ocupar cinco linhas de tela só com os filtros. */}
          <ul className="u-scroll-x -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 md:mx-0 md:flex-wrap md:overflow-visible md:px-0">
            <FiltroItem
              label="Todos"
              total={posts.length}
              ativo={tema === "todos"}
              onClick={() => trocarTema("todos")}
            />
            {postThemes.map((t) => {
              const total = posts.filter((p) => p.tema === t.id).length;
              if (total === 0) return null;
              return (
                <FiltroItem
                  key={t.id}
                  label={t.label}
                  total={total}
                  ativo={tema === t.id}
                  onClick={() => trocarTema(t.id)}
                />
              );
            })}
          </ul>
        </Reveal>

        {/* Publicações */}
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
          {filtrados.map((p, i) => (
            <li key={p.code} hidden={i >= limite}>
              <article className="group h-full overflow-hidden rounded-2xl border border-pine-200/70 bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-pine-300 hover:shadow-xl hover:shadow-pine-900/10">
                <a
                  href={postUrl(p.code)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full flex-col"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-pine-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={postImage(p.code)}
                      alt={p.titulo}
                      width={720}
                      height={900}
                      loading="lazy"
                      decoding="async"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <span className="absolute left-2 top-2 max-w-[calc(100%-1rem)] truncate rounded-full bg-bone/95 px-2 py-1 text-[0.5625rem] font-semibold uppercase tracking-[0.08em] text-pine-800 backdrop-blur sm:left-3 sm:top-3 sm:max-w-[calc(100%-1.5rem)] sm:px-3 sm:text-[0.625rem] sm:tracking-[0.1em]">
                      {temaLabel.get(p.tema)}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-3.5 sm:p-5">
                    <h4 className="u-display text-[0.9375rem] leading-snug text-pine-900 sm:text-[1.0625rem]">
                      {p.titulo}
                    </h4>
                    <p className="mt-2 line-clamp-3 text-[0.75rem] leading-relaxed text-ink-muted sm:line-clamp-4 sm:text-[0.8125rem]">
                      {p.texto}
                    </p>
                    <div className="mt-auto flex items-center justify-between gap-2 pt-4 sm:pt-5">
                      <time
                        dateTime={p.data}
                        className="text-[0.625rem] font-medium uppercase tracking-[0.1em] text-ink-muted sm:text-[0.6875rem]"
                      >
                        {mesAno(p.data)}
                      </time>
                      <span className="inline-flex items-center gap-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-pine-600">
                        <span className="hidden sm:inline">Ver no Instagram</span>
                        <ArrowIcon className="size-3 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </a>
              </article>
            </li>
          ))}
        </ul>

        {filtrados.length > limite ? (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setLimite((n) => n + PAGE)}
              className="inline-flex items-center gap-2.5 rounded-full border border-pine-300 px-7 py-3.5 text-sm font-semibold text-pine-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-pine-600 hover:bg-surface"
            >
              Ver mais publicações
              <span className="text-ink-muted">
                ({filtrados.length - limite})
              </span>
            </button>
          </div>
        ) : null}

        <p className="mt-10 text-center text-[0.75rem] leading-relaxed text-ink-muted">
          Publicações do perfil {site.contact.instagramHandle}. O conteúdo é
          informativo e não substitui a consulta médica.
        </p>
      </div>
    </section>
  );
}

function FiltroItem({
  label,
  total,
  ativo,
  onClick,
}: {
  label: string;
  total: number;
  ativo: boolean;
  onClick: () => void;
}) {
  return (
    <li className="shrink-0">
      <button
        type="button"
        onClick={onClick}
        aria-pressed={ativo}
        className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-4 py-2 text-[0.8125rem] font-medium transition-all duration-300 ${
          ativo
            ? "border-pine-800 bg-pine-800 text-bone"
            : "border-pine-200 bg-surface text-ink-soft hover:border-pine-400 hover:text-pine-800"
        }`}
      >
        {label}
        <span
          className={
            ativo ? "text-pine-200" : "text-ink-muted"
          }
        >
          {total}
        </span>
      </button>
    </li>
  );
}
