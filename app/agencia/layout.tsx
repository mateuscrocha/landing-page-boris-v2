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
  title: "Bóris White-Label para Agências – Seu branding, nossa IA",
  description: "Entregue dashboards e resumos aos seus clientes com a sua marca.",
  keywords: "white label whatsapp, agência digital, dashboard personalizado, marca própria, automação agência",
  authors: [{ name: "Bóris", url: "https://euboris.com.br" }],
  creator: "Bóris",
  publisher: "Bóris",
  metadataBase: new URL("https://euboris.com.br"),
  alternates: {
    canonical: "/agencia",
  },
  openGraph: {
    title: "Bóris White-Label para Agências – Seu branding, nossa IA",
    description: "Entregue dashboards e resumos aos seus clientes com a sua marca.",
    url: "https://euboris.com.br/agencia",
    siteName: "Bóris",
    images: [
      {
        url: "https://storage.euboris.com.br/site/meta_image_padrao.jpg",
        width: 1200,
        height: 630,
        alt: "Bóris White-Label para Agências",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bóris White-Label para Agências – Seu branding, nossa IA",
    description: "Entregue dashboards e resumos aos seus clientes com a sua marca.",
    images: ["https://storage.euboris.com.br/site/meta_image_padrao.jpg"],
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

export default function AgenciaLayout({
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
