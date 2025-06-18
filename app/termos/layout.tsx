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
  title: "Termos de Uso - Bóris",
  description: "Termos de Uso do Bóris - Condições para utilização da plataforma.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermosLayout({
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
