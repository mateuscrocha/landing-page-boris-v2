import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bell, FileCheck, MessageSquareOff, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const benefits = [
  {
    icon: Bell,
    title: "Menos notificações",
    description: "Só o essencial chega até você.",
    metric: "70% menos ruído",
  },
  {
    icon: FileCheck,
    title: "Tudo registrado",
    description: "Quem leu, quem não leu, tudo documentado.",
    metric: "100% rastreável",
  },
  {
    icon: MessageSquareOff,
    title: "Sem discussões duplicadas",
    description: "Tópicos similares agrupados automaticamente.",
    metric: "Organização total",
  },
]

export function BenefitsCondominio() {
  return (
    <section id="beneficios-condominio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-poppins font-normal mb-4 text-[#222222] tracking-tight">
            Por que melhora a convivência
          </h2>
          <p className="text-body-mobile lg:text-body-desktop text-[#222222]/70 max-w-2xl mx-auto font-inter">
            Comunicação organizada significa moradores mais satisfeitos
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

        <div className="text-center mt-12">
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
        </div>
      </div>
    </section>
  )
}
