import type { NextConfig } from "next";

/**
 * O site é 100% estático, então dá para publicá-lo no GitHub Pages.
 *
 * O Pages serve o projeto em /<nome-do-repo>/, e não na raiz. Por isso o
 * build de publicação roda com estas variáveis:
 *
 *   NEXT_PUBLIC_BASE_PATH=/dra-adriana-melo
 *   NEXT_PUBLIC_SITE_URL=https://henriquecarvall.github.io/dra-adriana-melo
 *   NEXT_PUBLIC_NOINDEX=1
 *   next build   ->   gera ./out
 *
 * Sem essas variáveis (o `npm run dev` do dia a dia, ou um deploy em domínio
 * próprio) o site continua servido na raiz, sem prefixo nenhum.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  // O Pages não tem servidor para reescrever /rota -> /rota.html.
  trailingSlash: true,
  images: {
    // Não existe otimizador de imagem em host estático. O site usa <img>
    // com arquivos já redimensionados, então isso é só uma garantia.
    unoptimized: true,
  },
};

export default nextConfig;
