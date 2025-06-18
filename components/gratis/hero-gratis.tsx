import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export function HeroGratis() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <img
              src="/images/logo.png"
              alt="Bóris Grátis - Métricas WhatsApp"
              className="w-24 h-24"
              width={96}
              height={96}
            />
          </div>
          <Badge variant="secondary" className="mb-6 bg-[#FFF4CC] text-[#222222] border-0 font-inter">
            🎉 Mais de 450 grupos usam o plano gratuito
          </Badge>

          <h1 className="text-3xl lg:text-4xl font-poppins font-normal mb-6 text-[#222222] tracking-tight">
            Coloque o Bóris no grupo grátis.
          </h1>

          <p className="text-body-mobile lg:text-body-desktop text-[#222222]/70 mb-8 max-w-2xl mx-auto font-inter">
            Dados essenciais de engajamento e volume sem custo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="https://typebot.euboris.com.br/quero" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-[#22C55E] hover:bg-[#16A34A] text-white font-poppins font-semibold text-lg px-8 py-4 border-0"
                aria-label="Adicionar Bóris grátis agora"
              >
                Adicionar grátis agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-[#222222]/60 font-inter">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#FF6B00] rounded-full"></div>0 custo, 0 risco
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#FF6B00] rounded-full"></div>5 cliques para instalar
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#FF6B00] rounded-full"></div>
              Upgrade quando quiser
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
