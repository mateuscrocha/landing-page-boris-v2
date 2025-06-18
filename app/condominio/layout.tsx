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
  title: "Bóris para Condomínios – Comunicação sem ruído no WhatsApp",
  description:
    "Organize grupos de condomínio com Bóris. Resumos automáticos, menos conflitos e comunicação eficiente. Teste grátis 7 dias. +300 condomínios aprovam!",
  keywords: "condomínio whatsapp, comunicação condomínio, síndico whatsapp, gestão condomínio, avisos moradores",
  authors: [{ name: "Bóris", url: "https://euboris.com.br" }],
  creator: "Bóris",
  publisher: "Bóris",
  metadataBase: new URL("https://euboris.com.br"),
  alternates: {
    canonical: "/condominio",
  },
  openGraph: {
    title: "Bóris para Condomínios – Comunicação sem ruído no WhatsApp",
    description: "Reduza conflitos e avise todos os moradores com resumos e métricas automáticas.",
    url: "https://euboris.com.br/condominio",
    siteName: "Bóris",
    images: [
      {
        url: "https://storage.euboris.com.br/site/meta_image_condominio.jpg",
        width: 1200,
        height: 630,
        alt: "Bóris para Condomínios - Comunicação WhatsApp",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bóris para Condomínios – Comunicação sem ruído no WhatsApp",
    description: "Reduza conflitos e avise todos os moradores com resumos e métricas automáticas.",
    images: ["https://storage.euboris.com.br/site/meta_image_condominio.jpg"],
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

export default function CondominioLayout({
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
