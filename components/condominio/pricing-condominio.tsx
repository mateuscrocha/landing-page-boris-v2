import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

const plans = [
  {
    name: "Pró",
    price: "R$ 247",
    period: "/grupo/mês",
    description: "Síndicos que precisam de comunicação eficiente",
    features: [
      "Mensagens ilimitadas",
      "Resumos diários (texto + áudio 60 s)",
      "Dashboard completo (picos, influenciadores, temas quentes)",
      "Suporte humano 8×5",
      "Cancelamento livre",
    ],
    popular: true,
    buttonText: "Quero o Pró",
    whatsappMessage:
      "Ol%C3%A1!%20Sou%20s%C3%ADndico%2Fmorador%20e%20quero%20contratar%20o%20plano%20Pr%C3%B3%20do%20B%C3%B3ris.",
  },
  {
    name: "White-Label",
    price: "A partir de R$ 500",
    period: "/grupo/mês",
    description: "Administradoras com branding próprio",
    features: [
      "Mensagens ilimitadas",
      "Personalização total de marca (logo, cores, favicon)",
      "Dashboards avançados + export CSV/API",
      "Suporte técnico para integrações complexas",
      "Acesso prioritário ao roadmap",
    ],
    popular: false,
    buttonText: "Falar sobre White-Label",
    whatsappMessage:
      "Ol%C3%A1!%20Sou%20de%20uma%20administradora%20e%20quero%20saber%20sobre%20o%20White-Label%20para%20condom%C3%ADnios.",
  },
]

export function PricingCondominio() {
  return (
    <section id="precos" className="py-20 bg-[#F7F7F7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-poppins font-normal mb-4 text-[#222222] tracking-tight">
            Planos Para Condomínios
          </h2>
          <p className="text-body-mobile lg:text-body-desktop text-text/70 font-inter">Preço por grupo de moradores</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative bg-white ${
                plan.popular ? "border-2 border-primary shadow-card" : "border border-border shadow-subtle"
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#FF6B00] text-white font-poppins font-semibold border-0">
                  Mais Popular
                </Badge>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-poppins font-medium text-text">{plan.name}</CardTitle>
                <CardDescription className="text-text/70 font-inter">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span
                    className={`text-2xl md:text-4xl font-poppins font-bold ${plan.popular ? "text-[#FF6B00]" : "text-[#222222]"}`}
                  >
                    {plan.price}
                  </span>
                  <span className="text-[#222222]/70 font-inter text-sm md:text-base">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[#FF6B00] mr-3 flex-shrink-0" />
                      <span className="text-text/70 font-inter">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/5561981569893?text=${plan.whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className={`w-full font-poppins font-semibold ${
                      plan.popular
                        ? "bg-[#22C55E] hover:bg-[#16A34A] text-white border-0"
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

        <div className="mt-8 text-center">
          <p className="text-[#666666] font-inter text-sm">
            <a href="/gratis" className="text-[#FF6B00] hover:text-[#FFA552] underline">
              Quer só métricas? Veja o plano Grátis
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
