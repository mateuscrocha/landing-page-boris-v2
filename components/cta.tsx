import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Clock } from "lucide-react"

export function CTA() {
  return (
    <section className="py-16 sm:py-20 bg-[#F7F7F7]">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-poppins font-normal mb-6 text-[#222222] tracking-tight">
          Teste hoje. Sinta a diferença amanhã.
        </h2>
        <p className="text-base sm:text-lg text-[#222222]/70 mb-8 max-w-3xl mx-auto font-inter leading-relaxed">
          Junte-se a mais de 900 grupos que já revolucionaram sua gestão.
          <strong className="text-[#222222]"> Teste grátis por 7 dias, sem compromisso.</strong>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="https://typebot.euboris.com.br/quero"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto bg-[#22C55E] hover:bg-[#16A34A] text-white font-poppins font-semibold text-base sm:text-lg px-8 py-4 border-0 transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Começar teste grátis agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
          <a
            href="https://wa.me/5561981569893?text=Ol%C3%A1!%20Quero%20falar%20com%20um%20especialista%20sobre%20o%20B%C3%B3ris."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-[#E5E5E5] text-[#222222] hover:bg-white font-poppins font-semibold text-base sm:text-lg px-8 py-4 transition-all duration-200 hover:scale-105"
            >
              Falar com Especialista
            </Button>
          </a>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-[#222222]/60 font-inter">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-[#FF6B00]" />
            <span>Garantia de 30 dias</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-[#FF6B00]" />
            <span>Setup em 2 minutos</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#FF6B00] rounded-full"></div>
            <span>Sem cartão de crédito</span>
          </div>
        </div>
      </div>
    </section>
  )
}
