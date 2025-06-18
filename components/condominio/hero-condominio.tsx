import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play } from "lucide-react"

export function HeroCondominio() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <img
              src="/images/logo.png"
              alt="Bóris - Comunicação Condomínio WhatsApp"
              className="w-24 h-24"
              width={96}
              height={96}
            />
          </div>
          <Badge variant="secondary" className="mb-6 bg-[#FFF4CC] text-[#222222] border-0 font-inter">
            🏢 Mais de 300 condomínios já usam Bóris
          </Badge>

          <h1 className="text-3xl lg:text-4xl font-poppins font-normal mb-6 text-[#222222] tracking-tight">
            Organize o grupo do condomínio em um clique.
          </h1>

          <p className="text-body-mobile lg:text-body-desktop text-[#222222]/70 mb-8 max-w-2xl mx-auto font-inter">
            Mensagens resumidas, confirmação de leitura e decisões sem ruído.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://wa.me/5561981569893?text=Ol%C3%A1!%20Sou%20s%C3%ADndico%2Fmorador%20e%20quero%20organizar%20o%20grupo%20do%20condom%C3%ADnio%20com%20o%20B%C3%B3ris."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-[#22C55E] hover:bg-[#16A34A] text-white font-poppins font-semibold text-lg px-8 py-4 border-0"
                aria-label="Quero grupos organizados agora"
              >
                Quero grupos organizados agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="#video-demo">
              <Button
                variant="outline"
                size="lg"
                className="border-[#E5E5E5] text-[#222222] hover:bg-[#F7F7F7] font-poppins font-semibold text-lg px-8 py-4"
              >
                <Play className="mr-2 h-5 w-5" />
                Ver Demo (2 min)
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-[#222222]/60 font-inter">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#FF6B00] rounded-full"></div>
              Sem cartão de crédito
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#FF6B00] rounded-full"></div>
              Setup em 2 minutos
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#FF6B00] rounded-full"></div>
              Cancele quando quiser
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
