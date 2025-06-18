import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Palette, DollarSign, Database, Clock } from "lucide-react"

const benefits = [
  {
    icon: Palette,
    title: "Marca própria",
    description: "Zero menção a Bóris - tudo com sua identidade visual.",
    metric: "100% white-label",
  },
  {
    icon: DollarSign,
    title: "Novo fluxo de receita mensal",
    description: "Monetize dados e insights com recorrência garantida.",
    metric: "Receita recorrente",
  },
  {
    icon: Database,
    title: "Dados exportáveis para BI",
    description: "Integre com suas ferramentas de análise e relatórios.",
    metric: "API completa",
  },
  {
    icon: Clock,
    title: "Time-to-market < 1 dia",
    description: "Comece a entregar valor para clientes imediatamente.",
    metric: "Setup instantâneo",
  },
]

export function BenefitsAgencia() {
  return (
    <section id="beneficios-agencia" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-poppins font-normal mb-4 text-[#222222] tracking-tight">
            Benefícios para Agência
          </h2>
          <p className="text-body-mobile lg:text-body-desktop text-[#222222]/70 max-w-2xl mx-auto font-inter">
            Transforme dados em receita com sua marca
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
