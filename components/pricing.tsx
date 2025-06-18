import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

const plans = [
  {
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
    popular: false,
    buttonText: "Adicionar grátis",
    whatsappMessage: "https://typebot.euboris.com.br/quero",
  },
  {
    name: "Pró",
    price: "R$ 247",
    period: "/grupo/mês",
    description: "Admins que precisam de automação diária",
    features: [
      "Mensagens ilimitadas",
      "Resumos diários (texto + áudio 60 s)",
      "Dashboard completo (picos, influenciadores, temas quentes)",
      "Suporte humano 8×5",
      "Cancelamento livre",
    ],
    popular: true,
    buttonText: "Quero o Pró",
    whatsappMessage: "Ol%C3%A1!%20Quero%20contratar%20o%20plano%20Pr%C3%B3%20do%20B%C3%B3ris.",
  },
  {
    name: "White-Label",
    price: "A partir de R$ 500",
    period: "/grupo/mês",
    description: "Agências, marcas e redes com branding próprio",
    features: [
      "Mensagens ilimitadas",
      "Personalização total de marca (logo, cores, favicon)",
      "Dashboards avançados + export CSV/API",
      "Suporte técnico para integrações complexas",
      "Acesso prioritário ao roadmap",
    ],
    popular: false,
    buttonText: "Falar sobre White-Label",
    whatsappMessage: "Ol%C3%A1!%20Sou%20de%20uma%20ag%C3%AAncia%20e%20quero%20saber%20sobre%20o%20White-Label.",
  },
]

export function Pricing() {
  return (
    <section id="planos" className="py-16 sm:py-20 bg-[#F7F7F7]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-poppins font-normal mb-4 sm:mb-6 text-[#222222] tracking-tight">
            Planos Que Cabem No Seu Orçamento
          </h2>
          <p className="text-base sm:text-lg text-[#222222]/70 font-inter max-w-3xl mx-auto leading-relaxed">
            Comece grátis e escale conforme cresce
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative bg-white transition-all duration-300 hover:-translate-y-1 ${
                plan.popular
                  ? "border-2 border-[#FF6B00] shadow-card scale-105 lg:scale-110"
                  : "border border-[#E5E5E5] shadow-subtle"
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#FF6B00] text-white font-poppins font-semibold border-0 shadow-md">
                  Mais Popular
                </Badge>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-lg sm:text-xl font-poppins font-medium text-[#222222]">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-[#222222]/70 font-inter text-base">{plan.description}</CardDescription>
                <div className="mt-6">
                  <span
                    className={`text-xl sm:text-2xl lg:text-3xl font-poppins font-bold ${plan.popular ? "text-[#FF6B00]" : "text-[#222222]"}`}
                  >
                    {plan.price}
                  </span>
                  <span className="text-[#222222]/70 font-inter text-base">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#FF6B00] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-[#222222]/70 font-inter text-base leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href={plan.whatsappMessage} target="_blank" rel="noopener noreferrer">
                  <Button
                    className={`w-full font-poppins font-semibold text-base py-4 transition-all duration-200 hover:scale-105 ${
                      plan.popular
                        ? "bg-[#22C55E] hover:bg-[#16A34A] text-white border-0 shadow-lg"
                        : "border-[#E5E5E5] text-[#222222] hover:bg-[#F7F7F7]"
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                    aria-label={plan.buttonText}
                  >
                    {plan.buttonText}
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-[#666666] font-inter text-sm">
            Valores por grupo. Todos os planos incluem mensagens ilimitadas.
          </p>
        </div>
      </div>
    </section>
  )
}
