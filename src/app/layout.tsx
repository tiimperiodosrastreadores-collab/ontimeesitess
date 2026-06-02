import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://ontimetracker.com.br";
const siteName = "OnTime Tracker";
const siteDescription =
  "Plataforma completa de rastreamento veicular GPS. Monitore veículos, motos, caminhões e ativos em tempo real com relatórios inteligentes e geocercas.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "OnTime Tracker | Rastreamento Veicular em Tempo Real",
    template: "%s | OnTime Tracker",
  },
  description: siteDescription,
  keywords: [
    "rastreamento veicular",
    "GPS",
    "monitoramento de frota",
    "rastreador",
    "OnTime Tracker",
    "gestão de frota",
    "geocerca",
    "rastreamento em tempo real",
  ],
  authors: [{ name: "OnTime Tracker" }],
  creator: "OnTime Tracker",
  publisher: "OnTime Tracker",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName,
    title: "OnTime Tracker | Rastreamento Veicular em Tempo Real",
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "OnTime Tracker | Rastreamento Veicular em Tempo Real",
    description: siteDescription,
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
