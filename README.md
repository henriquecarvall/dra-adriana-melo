# Dra. Adriana Melo | Alergista e Imunologista

Landing page de captação para a Dra. Adriana Melo (CRM-GO 20791 · RQE 17955),
alergista e imunologista em Goiânia.

Next.js 16 (App Router) · React 19 · Tailwind CSS 4 · TypeScript.

---

## Rodar localmente

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # gera ./out (site estático)
npm run preview   # serve o ./out
```

---

## Onde editar o conteúdo

**Praticamente tudo vive em um arquivo só: [`src/lib/site.ts`](src/lib/site.ts).**
Textos, telefones, endereços, áreas de atuação, procedimentos, FAQ e links:
tudo é lido de lá pelas seções. Não é preciso mexer nos componentes para
atualizar informação.

| O que mudar | Onde |
| --- | --- |
| WhatsApp, Instagram, Doctoralia | `site.contact` |
| Endereços e telefones dos consultórios | `site.locations` |
| Formação e titulações | `site.credentials` |
| Áreas de atuação | `site.areas` |
| Procedimentos (Prick, Patch, provocação, dessensibilização) | `site.procedures` |
| Perguntas frequentes | `site.faq` |
| Publicações do Instagram exibidas | `src/lib/posts.ts` |
| Assinatura da agência no rodapé (Vértice + WhatsApp) | `site.agency` |

### Fotos

Todas em `public/images/`, extraídas do material do Instagram e recortadas:

| Arquivo | Onde aparece | Origem |
| --- | --- | --- |
| `dra-adriana.webp` | Hero, 4:5 (675×844) | Retrato de jaleco do post `DW1BJaujNEK` |
| `dra-adriana-entrevista.webp` | Seção "Sobre", 3:4 (1080×1440) | Frame da entrevista no Programa Hora da Saúde (`DOYYowEjp35`) |

Não existe foto do consultório no material do Instagram. Por isso a seção
"Sobre" usa a foto da entrevista, rotulada como tal. Se aparecer uma foto do
consultório, é só trocar o arquivo e o texto do selo em `about.tsx`.

O retrato do hero é o mais fechado que o material permite: à esquerda dele, na
imagem original, havia uma caixa de texto do post, e abaixo da linha y≈800 o
cabelo dela encosta na borda, então não dava para ampliar o enquadramento sem
recorte artificial. Um retrato profissional em alta resolução melhora essa
seção mais do que qualquer outro ajuste.

### Publicações do Instagram

A seção "Conteúdo" mostra 52 publicações reais do perfil, com filtro por tema.
Os dados vivem em [`src/lib/posts.ts`](src/lib/posts.ts) e as capas em
`public/images/conteudo/<code>.webp` (720×900, WebP, ~36 KB cada).

O texto de cada card é a **legenda original do post**, sem as hashtags, e é o
que dá massa de conteúdo indexável para o Google. Cada card leva para o post
no Instagram.

Para acrescentar um post:

1. Salve a capa como `public/images/conteudo/<code>.webp` em 720×900.
   O `code` é o trecho da URL: de `instagram.com/p/DcwCsKyjNkW/` é `DcwCsKyjNkW`.
2. Acrescente uma entrada em `posts`, escolhendo um `tema` de `postThemes`.

As imagens são **hospedadas no site**, não embutidas via embed do Instagram.
Foi decisão deliberada: o embed é um iframe pesado, o texto não é indexado
pelo Google e o card quebra se o post for apagado ou o perfil ficar privado.
A contrapartida é que o conteúdo não se atualiza sozinho.

> As imagens e legendas são de autoria da Dra. Adriana Melo. Vale ter a
> autorização dela por escrito para o reuso no site.

---

## Publicação

O site é 100% estático (`output: "export"` no next.config.ts), então roda em
qualquer hospedagem de arquivos.

### GitHub Pages (preview atual)

```bash
npm run build:pages          # gera ./out já com o basePath do repositório
```

Depois é só publicar o conteúdo de `out/` na branch `gh-pages`.

O Pages serve o site em `/<nome-do-repo>/`, e não na raiz. Por isso o build de
publicação define `NEXT_PUBLIC_BASE_PATH`, e **todo caminho para /public passa
por `asset()`** (`src/lib/base-path.ts`). O `basePath` do Next prefixa as rotas
dele sozinho, mas não prefixa `<img src="/...">` escrito na mão. Se você
acrescentar uma imagem, use `asset("/images/...")` ou ela quebra no Pages.

O `public/.nojekyll` também é obrigatório: sem ele o Pages roda Jekyll, que
ignora qualquer pasta começando com `_` e derruba a `_next/` inteira.

Esse build sai com **noindex** (`NEXT_PUBLIC_NOINDEX=1`): a URL do github.io é
preview, os dados de contato ainda não foram confirmados pela médica e uma URL
github.io indexada concorreria depois com o domínio próprio.

### Domínio próprio

Aí o site vai na raiz e não precisa de basePath:

```bash
NEXT_PUBLIC_SITE_URL=https://draadrianamelo.com.br npm run build
```

Publique o `out/` onde preferir. Sem `NEXT_PUBLIC_NOINDEX` o site volta a ser
indexável e o sitemap volta a ser anunciado no robots.txt.


---

## SEO e conformidade

- Metadata completa (title/description/OG/Twitter), canonical e `robots.ts`.
- `sitemap.xml` gerado automaticamente.
- Dados estruturados JSON-LD: `Physician` (com endereços, procedimentos e
  perfis sociais) e `FAQPage`.
- Imagem de compartilhamento gerada em `src/app/opengraph-image.tsx`.
- Rodapé com CRM, RQE e aviso de que o conteúdo é informativo e não substitui
  consulta médica, alinhado ao Código de Ética Médica e às resoluções do CFM.
- **Sem depoimentos de pacientes no site** por decisão de conformidade: a
  avaliação aparece como link para o perfil no Doctoralia, que é plataforma de
  terceiros.
- Preços não são divulgados.

---

## Pontos que precisam de confirmação da médica

1. **Endereço de atendimento.** O site lista dois locais, porque as fontes
   públicas divergem: o site pessoal dela indica a **Clínica Allergo**
   (Rua João de Abreu, Setor Oeste) e o perfil do Doctoralia indica o
   **Instituto Imuno-Alergo** (Av. T-4, Setor Bueno). Confirme quais estão
   ativos e remova o que não for, em `site.locations`.
2. **Telefones.** `(62) 3639-3230` e `(62) 99335-4946` vieram do site pessoal;
   `(62) 3256-2030` é o do Instituto Imuno-Alergo. O WhatsApp
   `(62) 98313-3300` veio do link na bio do Instagram.
3. **Horários de atendimento** não foram encontrados publicamente. Se quiser
   exibir, dá para acrescentar em `site.locations`.
