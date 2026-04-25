import type { Metadata } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: {
    default: "ESI Exata | Segurança, CFTV e IA para Varejo, Portos e Indústria",
    template: "%s | ESI Exata",
  },
  description:
    "20 anos integrando câmeras, rádios, inteligência artificial e detecção de gás para eliminar perdas. Soluções sob medida para varejo, portos, energia, agronegócio e healthcare.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
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
      className={`${sora.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[var(--color-ink)]">
        <Header siteName="ESI Exata" navigation={navigation} />
        <main className="flex-1">{children}</main>
        <Footer siteName="ESI Exata" />
      </body>
    </html>
  );
}
