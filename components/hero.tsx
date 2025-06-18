import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-6 sm:mb-8">
            <img
              src="/images/logo.png"
              alt="Bóris - Plataforma de Automação WhatsApp com Inteligência Artificial"
              className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-sm"
              width={96}
              height={96}
              loading="eager"
              fetchPriority="high"
            />
          </div>

          <Badge
            variant="secondary"
            className="mb-6 sm:mb-8 bg-[#FFF4CC] text-[#222222] border-0 font-poppins font-semibold px-3 sm:px-4 py-2 text-xs sm:text-sm"
          >
            🚀 Mais de 900 grupos já usam Bóris
          </Badge>

          <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-poppins font-normal mb-6 sm:mb-8 text-[#222222] tracking-tight leading-tight">
            <span className="text-[#FF6B00]">Bóris</span>: coloque ordem no grupo e inteligência nas suas mãos.
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-[#222222]/70 mb-8 sm:mb-10 max-w-4xl mx-auto font-inter leading-[1.6]">
            Junte-se a mais de 900 grupos que já revolucionaram sua gestão.
            <strong className="text-[#222222]"> Teste grátis por 7 dias, sem compromisso.</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 sm:mb-12 px-4">
            <a
              href="https://wa.me/5561981569893?text=Ol%C3%A1!%20Quero%20testar%20o%20B%C3%B3ris%20gr%C3%A1tis%20por%207%20dias."
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#22C55E] hover:bg-[#16A34A] text-white font-poppins font-medium text-sm sm:text-base px-6 py-3 border-0 transition-all duration-200 group-hover:scale-105 shadow-md hover:shadow-lg"
                aria-label="Começar teste grátis de automação WhatsApp por 7 dias"
              >
                Teste grátis por 7 dias
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#video-demo" className="group w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-[#E5E5E5] text-[#222222] hover:bg-[#F7F7F7] font-poppins font-medium text-sm sm:text-base px-6 py-3 transition-all duration-200 group-hover:scale-105"
                aria-label="Ver demonstração da automação WhatsApp"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Ver Demo (2 min)
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-8 text-sm text-[#222222]/60 font-inter px-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#FF6B00] rounded-full animate-pulse"></div>
              <span>Sem cartão de crédito</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#FF6B00] rounded-full animate-pulse"></div>
              <span>Setup em 2 minutos</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#FF6B00] rounded-full animate-pulse"></div>
              <span>Cancele quando quiser</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
