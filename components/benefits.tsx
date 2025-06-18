import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, MessageSquare, Users, Clock, Target, BarChart3 } from "lucide-react"

const benefits = [
  {
    icon: TrendingUp,
    title: "Picos de Conversa WhatsApp",
    description: "Veja picos de conversa e poste na hora certa para máximo engajamento.",
    metric: "85% mais engajamento",
  },
  {
    icon: MessageSquare,
    title: "Resumo Automático Mensagens",
    description: "Descubra perguntas frequentes sem ler milhares de mensagens WhatsApp.",
    metric: "90% menos tempo lendo",
  },
  {
    icon: Users,
    title: "Membros Influentes Grupos",
    description: "Identifique membros influentes para premiar quem move a comunidade WhatsApp.",
    metric: "3x mais participação",
  },
  {
    icon: Clock,
    title: "Resumos Diários Bóris",
    description: "Receba resumos automáticos diários em texto e áudio de 60 segundos.",
    metric: "37h economizadas/mês",
  },
  {
    icon: Target,
    title: "Insights Acionáveis Dashboard",
    description: "Dados que realmente importam para tomar decisões rápidas sobre grupos.",
    metric: "70% decisões mais rápidas",
  },
  {
    icon: BarChart3,
    title: "Dashboard Completo WhatsApp",
    description: "Visualize métricas importantes de grupos WhatsApp em tempo real.",
    metric: "100% visibilidade",
  },
]

export function Benefits() {
  return (
    <section id="beneficios" className="py-16 sm:py-20 bg-[#F7F7F7]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-poppins font-normal mb-4 sm:mb-6 text-[#222222] tracking-tight">
            Resultados Comprovados do Bóris
          </h2>
          <p className="text-base sm:text-lg text-[#222222]/70 max-w-3xl mx-auto font-inter leading-relaxed">
            Veja como o Bóris já transformou milhares de comunidades WhatsApp
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="border border-[#E5E5E5] shadow-subtle hover:shadow-card transition-all duration-300 bg-white hover:-translate-y-1"
            >
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-[#FF6B00] rounded-lg flex items-center justify-center mb-4 shadow-md">
                  <benefit.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <CardTitle className="text-base sm:text-lg font-poppins font-medium text-[#222222] leading-tight mb-2">
                  {benefit.title}
                </CardTitle>
                <div className="text-sm font-poppins font-semibold text-[#FF6B00] font-bold">{benefit.metric}</div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#222222]/70 text-base font-inter leading-relaxed">
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
