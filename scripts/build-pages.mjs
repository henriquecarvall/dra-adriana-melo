/**
 * Build estático para o GitHub Pages.
 *
 *   npm run build:pages
 *
 * O Pages serve o site em /<repo>/, então o build precisa do basePath. Este
 * script existe para não depender de lembrar as três variáveis na mão (e
 * porque definir variável inline no npm script não funciona no Windows).
 *
 * Dá para sobrescrever:
 *   PAGES_OWNER=outrousuario PAGES_REPO=outro-repo npm run build:pages
 */
import { spawnSync } from "node:child_process";

const owner = process.env.PAGES_OWNER ?? "henriquecarvall";
const repo = process.env.PAGES_REPO ?? "dra-adriana-melo";

const env = {
  ...process.env,
  NEXT_PUBLIC_BASE_PATH: `/${repo}`,
  NEXT_PUBLIC_SITE_URL: `https://${owner}.github.io/${repo}`,
  // A URL do github.io é preview: não deve ser indexada enquanto os dados
  // de contato não forem confirmados. Ver robots.ts.
  NEXT_PUBLIC_NOINDEX: "1",
};

console.log(`Gerando ./out para ${env.NEXT_PUBLIC_SITE_URL}`);

const build = spawnSync("npx", ["next", "build"], {
  stdio: "inherit",
  env,
  shell: true,
});

process.exit(build.status ?? 1);
