/**
 * Publica o site no GitHub Pages.
 *
 *   npm run deploy
 *
 * Faz o build estático e envia o conteúdo de ./out para a branch gh-pages.
 *
 * O ./out é um repositório git separado e descartável: o `next build` apaga
 * a pasta inteira a cada build, então não adianta manter histórico ali. Por
 * isso o push é sempre forçado. O histórico do projeto vive na `main`.
 */
import { spawnSync } from "node:child_process";
import { existsSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const raiz = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(raiz, "out");

const owner = process.env.PAGES_OWNER ?? "henriquecarvall";
const repo = process.env.PAGES_REPO ?? "dra-adriana-melo";
const remote = `https://github.com/${owner}/${repo}.git`;

const autor = [
  "-c",
  "user.name=Henrique Carvalho",
  "-c",
  "user.email=127215641+henriquecarvall@users.noreply.github.com",
];

function rodar(cmd, args, cwd) {
  const r = spawnSync(cmd, args, { stdio: "inherit", cwd, shell: true });
  if (r.status !== 0) {
    console.error(`\nFalhou: ${cmd} ${args.join(" ")}`);
    process.exit(r.status ?? 1);
  }
}

rodar("npm", ["run", "build:pages"], raiz);

if (!existsSync(join(out, "index.html"))) {
  console.error("O build não gerou out/index.html.");
  process.exit(1);
}

// O .nojekyll vem de public/, mas se faltar o Pages ignora a pasta _next/
// inteira e o site sai sem CSS nem JS.
if (!existsSync(join(out, ".nojekyll"))) {
  console.error("Faltou out/.nojekyll. Confira se public/.nojekyll existe.");
  process.exit(1);
}

rmSync(join(out, ".git"), { recursive: true, force: true });
rodar("git", ["init", "-q"], out);
rodar("git", ["checkout", "-q", "-b", "gh-pages"], out);
rodar("git", ["add", "-A"], out);
rodar("git", [...autor, "commit", "-q", "-m", "Build estatico do site"], out);
rodar("git", ["remote", "add", "origin", remote], out);
rodar("git", ["push", "-q", "-f", "origin", "gh-pages"], out);

console.log(`\nPublicado em https://${owner}.github.io/${repo}/`);
