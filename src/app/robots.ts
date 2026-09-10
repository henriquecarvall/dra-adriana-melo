import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://draadrianamelo.com.br";

/**
 * NEXT_PUBLIC_NOINDEX=1 no build de preview (GitHub Pages): a URL do
 * github.io não deve entrar no Google enquanto os dados de contato não
 * forem confirmados, e depois ela concorreria com o domínio próprio.
 */
const noindex = process.env.NEXT_PUBLIC_NOINDEX === "1";

/** Necessário com `output: "export"`: a rota é gerada uma vez, no build. */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  if (noindex) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
