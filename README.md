# Dra. Adriana Melo — Alergista e Imunologista

Landing page de captação para a Dra. Adriana Melo (CRM-GO 20791 · RQE 17955),
alergista e imunologista em Goiânia.

Next.js 16 (App Router) · React 19 · Tailwind CSS 4 · TypeScript.

---

## Rodar localmente

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de produção
npm run start   # servir o build
```

---

## Onde editar o conteúdo

**Praticamente tudo vive em um arquivo só: [`src/lib/site.ts`](src/lib/site.ts).**
Textos, telefones, endereços, áreas de atuação, procedimentos, FAQ e links —
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
| Posts do Instagram exibidos | `site.instagramPosts` |

### Fotos

Coloque os arquivos em `public/images/` com estes nomes exatos:

- `public/images/dra-adriana.jpg` — retrato do hero (proporção **4:5**, ex. 1200×1500)
- `public/images/consultorio.jpg` — foto do consultório na seção "Sobre" (proporção **3:4**)

Enquanto os arquivos não existirem, o site mostra um espaço reservado
elegante com o monograma — nunca uma imagem quebrada. Basta adicionar o
arquivo e recarregar.

### Posts do Instagram

Em `site.instagramPosts` vai a **lista de códigos** dos posts, não a URL inteira.
De `instagram.com/p/DEBWigcPXvW/` o código é `DEBWigcPXvW`:

```ts
instagramPosts: ["DEBWigcPXvW", "OUTRO_CODIGO", "MAIS_UM"],
```

Recomendado deixar 3 posts educativos (urticária, dermatite atópica, alergia
alimentar) em vez do post atual, que é pessoal. Os posts são carregados pelo
embed oficial do Instagram — se o post for apagado ou o perfil ficar privado,
o card some sozinho sem quebrar o layout.

---

## Deploy na Vercel

```bash
npm i -g vercel     # se ainda não tiver
vercel              # preview
vercel --prod       # produção
```

Depois de apontar o domínio, defina a variável de ambiente para que
canonical, sitemap e Open Graph usem a URL certa:

```bash
vercel env add NEXT_PUBLIC_SITE_URL
# ex.: https://draadrianamelo.com.br
```

---

## SEO e conformidade

- Metadata completa (title/description/OG/Twitter), canonical e `robots.ts`.
- `sitemap.xml` gerado automaticamente.
- Dados estruturados JSON-LD: `Physician` (com endereços, procedimentos e
  perfis sociais) e `FAQPage`.
- Imagem de compartilhamento gerada em `src/app/opengraph-image.tsx`.
- Rodapé com CRM, RQE e aviso de que o conteúdo é informativo e não substitui
  consulta médica — alinhado ao Código de Ética Médica e às resoluções do CFM.
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
3. **Horários de atendimento** não foram encontrados publicamente — se quiser
   exibir, dá para acrescentar em `site.locations`.
