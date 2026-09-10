/**
 * Prefixo de caminho quando o site não é servido na raiz do domínio.
 *
 * O `basePath` do next.config.ts prefixa sozinho as rotas e os arquivos do
 * próprio Next, mas NÃO prefixa `<img src="/...">` escrito na mão. Tudo que
 * aponta para /public precisa passar por `asset()`.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** asset("/images/foo.webp") -> "/dra-adriana-melo/images/foo.webp" */
export const asset = (path: string) => `${basePath}${path}`;
