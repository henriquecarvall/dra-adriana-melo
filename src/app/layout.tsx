import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://draadrianamelo.com.br";

const description =
  "Dra. Adriana Melo — alergista e imunologista em Goiânia. Diagnóstico e tratamento de rinite, asma, urticária, dermatite atópica, alergia alimentar e a medicamentos, anafilaxia e imunodeficiências. Adultos e crianças, presencial e por teleconsulta.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dra. Adriana Melo — Alergista e Imunologista em Goiânia",
    template: "%s · Dra. Adriana Melo",
  },
  description,
  keywords: [
    "alergista Goiânia",
    "imunologista Goiânia",
    "Dra. Adriana Melo",
    "teste de alergia Goiânia",
    "prick test Goiânia",
    "urticária",
    "dermatite atópica",
    "alergia alimentar",
    "imunoterapia",
    "teleconsulta alergista",
  ],
  authors: [{ name: site.doctor.fullName }],
  creator: site.doctor.fullName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: site.doctor.name,
    title: "Dra. Adriana Melo — Alergista e Imunologista em Goiânia",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Adriana Melo — Alergista e Imunologista em Goiânia",
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#103128",
  colorScheme: "light",
};

function StructuredData() {
  const physician = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: site.doctor.name,
    alternateName: site.doctor.fullName,
    medicalSpecialty: ["Allergy", "Immunology"],
    description,
    url: siteUrl,
    telephone: `+${site.contact.whatsappNumber}`,
    areaServed: { "@type": "City", name: "Goiânia" },
    availableService: site.procedures.map((p) => ({
      "@type": "MedicalProcedure",
      name: p.title,
      description: p.body,
    })),
    sameAs: [site.contact.instagram, site.contact.doctoralia],
    address: site.locations.map((loc) => ({
      "@type": "PostalAddress",
      streetAddress: loc.address,
      addressLocality: "Goiânia",
      addressRegion: "GO",
      postalCode: loc.zip,
      addressCountry: "BR",
    })),
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: site.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physician) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // As variáveis de fonte ficam em <html>: os tokens --font-display /
    // --font-sans são computados em :root e precisam enxergá-las ali.
    <html lang="pt-BR" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        {/* Sinaliza que as animações de entrada podem rodar. Sem JS — ou sem
            IntersectionObserver — o conteúdo é renderizado normalmente visível. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `if("IntersectionObserver" in window)document.documentElement.classList.add("has-js")`,
          }}
        />
      </head>
      <body className="antialiased">
        <a
          href="#topo"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-pine-800 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-bone"
        >
          Pular para o conteúdo
        </a>
        {children}
        <StructuredData />
      </body>
    </html>
  );
}
