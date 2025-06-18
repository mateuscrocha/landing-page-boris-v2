"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-all duration-200 ${
        isScrolled ? "border-b border-border shadow-md" : "border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="/images/logo.png"
              alt="Logo do Bóris"
              className="w-8 h-8"
              width={32}
              height={32}
              loading="eager"
            />
            <span className="text-lg sm:text-xl font-poppins font-semibold text-[#222222]">Bóris</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/#como-funciona"
              className="text-[#222222] hover:text-[#FF6B00] transition-colors font-inter text-base hover:underline"
            >
              Como Funciona
            </a>
            <a
              href="/#planos"
              className="text-[#222222] hover:text-[#FF6B00] transition-colors font-inter text-base hover:underline"
            >
              Planos
            </a>
            <a
              href="/#testimonials"
              className="text-[#222222] hover:text-[#FF6B00] transition-colors font-inter text-base hover:underline"
            >
              Depoimentos
            </a>
            <a
              href="https://wa.me/5561981569893?text=Ol%C3%A1!%20Quero%20falar%20sobre%20o%20B%C3%B3ris."
              target="_blank"
              rel="noreferrer noopener"
              className="text-[#222222] hover:text-[#FF6B00] transition-colors font-inter text-base hover:underline"
            >
              Contato
            </a>
          </nav>

          <div className="hidden md:flex items-center">
            <a href="https://typebot.euboris.com.br/quero" target="_blank" rel="noopener noreferrer" className="group">
              <Button className="bg-[#22C55E] hover:bg-[#16A34A] text-white font-poppins font-semibold border-0 transition-all duration-200 group-hover:scale-105">
                Começar Grátis
              </Button>
            </a>
          </div>

          <button
            className="md:hidden text-[#222222] p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-4 mt-4">
              <a
                href="/#como-funciona"
                onClick={closeMenu}
                className="text-[#222222] hover:text-[#FF6B00] font-inter text-base py-3 transition-colors"
              >
                Como Funciona
              </a>
              <a
                href="/#planos"
                onClick={closeMenu}
                className="text-[#222222] hover:text-[#FF6B00] font-inter text-base py-3 transition-colors"
              >
                Planos
              </a>
              <a
                href="/#testimonials"
                onClick={closeMenu}
                className="text-[#222222] hover:text-[#FF6B00] font-inter text-base py-3 transition-colors"
              >
                Depoimentos
              </a>
              <a
                href="https://wa.me/5561981569893?text=Ol%C3%A1!%20Quero%20falar%20sobre%20o%20B%C3%B3ris."
                target="_blank"
                rel="noreferrer noopener"
                className="text-[#222222] hover:text-[#FF6B00] font-inter text-base py-3 transition-colors"
              >
                Contato
              </a>
              <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                <a href="https://typebot.euboris.com.br/quero" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#22C55E] hover:bg-[#16A34A] text-white font-poppins font-semibold border-0 w-full">
                    Começar Grátis
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
