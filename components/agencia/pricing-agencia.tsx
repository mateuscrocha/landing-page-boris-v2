import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

const plan = {
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
    "Treinamento da equipe incluído",
    "SLA de 99.9% de uptime",
  ],
  buttonText: "Falar com consultor",
  whatsappMessage:
    "Ol%C3%A1!%20Sou%20de%20uma%20ag%C3%AAncia%20e%20quero%20falar%20com%20um%20consultor%20sobre%20o%20White-Label.",
}

export function PricingAgencia() {
  return (
    <section id="precos" className="py-20 bg-[#F7F7F7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-poppins font-normal mb-4 text-[#222222] tracking-tight">
            Plano White-Label
          </h2>
          <p className="text-body-mobile lg:text-body-desktop text-text/70 font-inter">Sua marca, nossa tecnologia</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="relative bg-white border-2 border-primary shadow-card">
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#FF6B00] text-white font-poppins font-semibold border-0">
              Mais Procurado
            </Badge>
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-poppins font-medium text-text">{plan.name}</CardTitle>
              <CardDescription className="text-text/70 font-inter text-lg">{plan.description}</CardDescription>
              <div className="mt-6">
                <span className="text-3xl md:text-5xl font-poppins font-bold text-[#FF6B00]">{plan.price}</span>
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
              <a
                href={`https://wa.me/5561981569893?text=${plan.whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
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
              Precisa só de 1 a 3 grupos? Conheça o Pró
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
