import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "../globals.css"

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
  title: "Bóris Grátis – Métricas instantâneas para grupos de WhatsApp",
  description: "Veja quem participa, quando postar e o volume diário, sem pagar nada.",
  keywords: "whatsapp grátis, métricas whatsapp, dashboard gratuito, grupos whatsapp, análise gratuita",
  authors: [{ name: "Bóris", url: "https://euboris.com.br" }],
  creator: "Bóris",
  publisher: "Bóris",
  metadataBase: new URL("https://euboris.com.br"),
  alternates: {
    canonical: "/gratis",
  },
  openGraph: {
    title: "Bóris Grátis – Métricas instantâneas para grupos de WhatsApp",
    description: "Veja quem participa, quando postar e o volume diário, sem pagar nada.",
    url: "https://euboris.com.br/gratis",
    siteName: "Bóris",
    images: [
      {
        url: "https://storage.euboris.com.br/site/meta_image_agencia.jpg",
        width: 1200,
        height: 630,
        alt: "Bóris Grátis - Métricas WhatsApp",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bóris Grátis – Métricas instantâneas para grupos de WhatsApp",
    description: "Veja quem participa, quando postar e o volume diário, sem pagar nada.",
    images: ["https://storage.euboris.com.br/site/meta_image_agencia.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/images/logo.png",
  },
}

export default function GratisLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
