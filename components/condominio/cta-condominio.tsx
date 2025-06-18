import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Clock } from "lucide-react"

export function CTACondominio() {
  return (
    <section className="py-20 bg-[#F7F7F7]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-poppins font-normal mb-4 text-[#222222] tracking-tight">
          Chega de caos: organize seu condomínio hoje.
        </h2>
        <p className="text-body-mobile lg:text-body-desktop text-[#222222]/70 mb-8 max-w-2xl mx-auto font-inter">
          Junte-se a mais de 300 condomínios que já organizaram sua comunicação.
          <strong> Teste grátis por 7 dias, sem compromisso.</strong>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="https://wa.me/5561981569893?text=Ol%C3%A1!%20Sou%20s%C3%ADndico%2Fmorador%20e%20quero%20organizar%20o%20grupo%20do%20condom%C3%ADnio%20com%20o%20B%C3%B3ris."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-[#22C55E] hover:bg-[#16A34A] text-white font-poppins font-semibold text-lg px-8 py-4 border-0"
            >
              Adicionar o Bóris
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
          <a
            href="https://wa.me/5561981569893?text=Ol%C3%A1!%20Sou%20s%C3%ADndico%2Fmorador%20e%20quero%20falar%20com%20um%20especialista%20sobre%20o%20B%C3%B3ris."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-[#E5E5E5] text-[#222222] hover:bg-white font-poppins font-semibold text-lg px-8 py-4"
            >
              Falar com Especialista
            </Button>
          </a>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-[#222222]/60 font-inter">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-[#FF6B00]" />
            Garantia de 30 dias
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-[#FF6B00]" />
            Setup em 2 minutos
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#FF6B00] rounded-full"></div>
            Sem cartão de crédito
          </div>
        </div>
      </div>
    </section>
  )
}
