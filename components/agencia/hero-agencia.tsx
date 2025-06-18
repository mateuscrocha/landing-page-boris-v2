import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageCircle } from "lucide-react"

export function HeroAgencia() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <img
              src="/images/logo.png"
              alt="Bóris White-Label para Agências"
              className="w-24 h-24"
              width={96}
              height={96}
            />
          </div>
          <Badge variant="secondary" className="mb-6 bg-[#FFF4CC] text-[#222222] border-0 font-inter">
            🚀 Mais de 150 agências já usam Bóris White-Label
          </Badge>

          <h1 className="text-3xl lg:text-4xl font-poppins font-normal mb-6 text-[#222222] tracking-tight">
            Mostre ao cliente que o grupo dele está em boas mãos.
          </h1>

          <p className="text-body-mobile lg:text-body-desktop text-[#222222]/70 mb-8 max-w-2xl mx-auto font-inter">
            Bóris white-label monitora demandas, mede satisfação e entrega relatórios com sua marca.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://wa.me/5561981569893?text=Ol%C3%A1!%20Sou%20de%20uma%20ag%C3%AAncia%20e%20quero%20rastrear%20a%20satisfa%C3%A7%C3%A3o%20dos%20meus%20clientes."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-[#22C55E] hover:bg-[#16A34A] text-white font-poppins font-semibold text-lg px-8 py-4 border-0"
                aria-label="Quero rastrear a satisfação dos meus clientes"
              >
                Quero rastrear a satisfação dos meus clientes
                <MessageCircle className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-[#222222]/60 font-inter">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#FF6B00] rounded-full"></div>
              Sua marca, nossa tecnologia
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#FF6B00] rounded-full"></div>
              Implantação {"<"} 24h
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#FF6B00] rounded-full"></div>
              Suporte técnico dedicado
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
