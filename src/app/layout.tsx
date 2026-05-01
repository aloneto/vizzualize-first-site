import type { Metadata } from "next";
import { Sora, Inter, JetBrains_Mono, DM_Serif_Display, DM_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.esiexata.com.br";

export const metadata: Metadata = {
  title: {
    default: "ESI Exata | Segurança, CFTV e IA para Varejo, Portos e Indústria",
    template: "%s | ESI Exata",
  },
  description:
    "20 anos integrando câmeras, rádios, inteligência artificial e detecção de gás para eliminar perdas. Soluções sob medida para varejo, portos, energia, agronegócio e healthcare.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "ESI Exata",
    title: "ESI Exata | Segurança, CFTV e IA para Varejo, Portos e Indústria",
    description:
      "20 anos integrando câmeras, rádios, inteligência artificial e detecção de gás para eliminar perdas. Soluções sob medida para varejo, portos, energia, agronegócio e healthcare.",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "ESI Exata — Segurança e Inteligência Operacional" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ESI Exata | Segurança, CFTV e IA para Varejo, Portos e Indústria",
    description:
      "20 anos integrando câmeras, rádios, inteligência artificial e detecção de gás para eliminar perdas.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ESI Exata",
  url: siteUrl,
  logo: `${siteUrl}/logos/esi-exata-logo-light.svg`,
  description:
    "20 anos integrando câmeras, rádios, inteligência artificial e detecção de gás para eliminar perdas em varejo, portos, energia, agronegócio e healthcare.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "R. Jorge B. Crocetti, 231",
    addressLocality: "Curitiba",
    addressRegion: "PR",
    postalCode: "82800-080",
    addressCountry: "BR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+55-41-3527-7007",
    email: "contato@esiexata.com.br",
    contactType: "customer service",
    availableLanguage: "Portuguese",
  },
};

const navigation = [
  { label: "Setores", href: "#setores" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Cases", href: "#cases" },
  { label: "P&D", href: "#pd" },
  { label: "Contato", href: "#contato" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${sora.variable} ${inter.variable} ${jetbrainsMono.variable} ${dmSerifDisplay.variable} ${dmSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[var(--color-ink)]">
        <Header siteName="ESI Exata" navigation={navigation} />
        <main className="flex-1">{children}</main>
        <Footer siteName="ESI Exata" />
      </body>
    </html>
  );
}
