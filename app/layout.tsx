import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Bóris - Automação WhatsApp para Grupos | Resumos Automáticos e Dashboard",
  description:
    "Automatize grupos WhatsApp com IA. Resumos diários, dashboard completo e 37h economizadas/mês. Teste grátis 7 dias, sem cartão. +900 grupos já usam!",
  keywords:
    "automação whatsapp, resumo mensagens whatsapp, dashboard grupos whatsapp, insights comunidades online, gestão grupos whatsapp, bot whatsapp, automação comunidades",
  authors: [{ name: "Bóris", url: "https://euboris.com.br" }],
  creator: "Bóris",
  publisher: "Bóris",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://euboris.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bóris - Automação WhatsApp para Grupos | Resumos Automáticos e Dashboard",
    description:
      "Automatize grupos WhatsApp com Bóris. Resumos diários, dashboard completo e insights acionáveis. Economize 37h/mês. Teste grátis 7 dias.",
    url: "https://euboris.com.br",
    siteName: "Bóris",
    images: [
      {
        url: "/images/boris_meta_condominio.jpg",
        width: 1200,
        height: 630,
        alt: "Bóris - Plataforma de Automação WhatsApp com IA",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bóris - Automação WhatsApp para Grupos | Resumos IA e Dashboard",
    description: "Automatize grupos WhatsApp com Bóris. Economize 37h/mês. Teste grátis 7 dias.",
    images: ["/images/boris_meta_condominio.jpg"],
    creator: "@euboris",
  },
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/images/logo.png",
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://euboris.com.br/#organization",
      name: "Bóris",
      url: "https://euboris.com.br",
      logo: {
        "@type": "ImageObject",
        url: "https://euboris.com.br/images/logo.png",
        width: 200,
        height: 200,
      },
      sameAs: ["https://www.youtube.com/watch?v=blZqKpZwn3g"],
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://euboris.com.br/#software",
      name: "Bóris",
      description: "Plataforma de automação para grupos WhatsApp com inteligência artificial",
      url: "https://euboris.com.br",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: [
        {
          "@type": "Offer",
          name: "Plano Gratuito",
          price: "0",
          priceCurrency: "BRL",
          description: "Dashboard simplificado e mensagens ilimitadas",
        },
        {
          "@type": "Offer",
          name: "Plano Pró",
          price: "247",
          priceCurrency: "BRL",
          description: "Resumos diários, dashboard completo e suporte humano",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "900",
        bestRating: "5",
        worstRating: "1",
      },
      author: {
        "@type": "Organization",
        name: "Catapulta Digital",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://euboris.com.br/#website",
      url: "https://euboris.com.br",
      name: "Bóris - Automação WhatsApp",
      description: "Automatize grupos WhatsApp com IA. Resumos diários e insights acionáveis.",
      publisher: {
        "@id": "https://euboris.com.br/#organization",
      },
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://euboris.com.br/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://encrypted-tbn0.gstatic.com" />

        {/* Plausible Analytics */}
        <script defer data-domain="plausible.euboris.com.br" src="https://boris-tools-plausible.valwa8.easypanel.host/js/script.js" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
