import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

const plan = {
  name: "Gratuito",
  price: "R$ 0",
  period: "/grupo/mês",
  description: "Comunidades que só querem enxergar dados básicos",
  features: [
    "Mensagens ilimitadas",
    "Dashboard simplificado (volume, membros mais ativos, horários de pico)",
    '"Powered by Bóris" fixo',
    "Anúncios ocasionais",
    "Suporte via FAQ/comunidade",
  ],
  buttonText: "Adicionar grátis",
  whatsappMessage: "https://typebot.euboris.com.br/quero",
}

export function PricingGratis() {
  return (
    <section id="precos" className="py-20 bg-[#F7F7F7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-poppins font-normal mb-4 text-[#222222] tracking-tight">
            Plano Gratuito
          </h2>
          <p className="text-body-mobile lg:text-body-desktop text-text/70 font-inter">Métricas essenciais sem custo</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-white border border-border shadow-subtle">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-poppins font-medium text-text">{plan.name}</CardTitle>
              <CardDescription className="text-text/70 font-inter text-lg">{plan.description}</CardDescription>
              <div className="mt-6">
                <span className="text-3xl md:text-5xl font-poppins font-bold text-[#222222]">{plan.price}</span>
                <span className="text-[#222222]/70 font-inter text-base md:text-lg">{plan.period}</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#FF6B00] mr-3 flex-shrink-0" />
                    <span className="text-text/70 font-inter text-base">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href={plan.whatsappMessage} target="_blank" rel="noopener noreferrer">
                <Button
                  className="w-full font-poppins font-semibold bg-[#22C55E] hover:bg-[#16A34A] text-white border-0 text-lg py-4"
                  aria-label={plan.buttonText}
                >
                  {plan.buttonText}
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <p className="text-[#666666] font-inter text-sm">
            <a href="/" className="text-[#FF6B00] hover:text-[#FFA552] underline">
              Precisa de resumos? Veja o plano Pró
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
