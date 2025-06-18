import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, AlertTriangle, TrendingUp } from "lucide-react"

const benefits = [
  {
    icon: Mail,
    title: "Relatório pronto no e-mail",
    description: "Toda semana, automaticamente.",
    metric: "100% automático",
  },
  {
    icon: AlertTriangle,
    title: "Alerta de dúvidas pendentes",
    description: "Você resolve antes de virar reclamação.",
    metric: "Prevenção ativa",
  },
  {
    icon: TrendingUp,
    title: "Histórico de NPS",
    description: "Prova crescente de satisfação.",
    metric: "ROI tangível",
  },
]

export function BenefitsAgenciaValue() {
  return (
    <section id="beneficios-valor" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-poppins font-normal mb-4 text-[#222222] tracking-tight">
            Por que o cliente percebe valor
          </h2>
          <p className="text-body-mobile lg:text-body-desktop text-[#222222]/70 max-w-2xl mx-auto font-inter">
            Resultados visíveis que justificam seu investimento
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="border border-[#E5E5E5] shadow-subtle hover:shadow-card transition-shadow bg-white"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-[#FF6B00] rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <CardTitle className="text-xl font-poppins font-medium text-[#222222]">{benefit.title}</CardTitle>
                <div className="text-sm font-poppins font-semibold text-[#FF6B00]">{benefit.metric}</div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#222222]/70 text-base font-inter">
                  {benefit.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
