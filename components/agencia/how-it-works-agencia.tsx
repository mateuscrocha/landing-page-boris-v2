import { UserPlus, Activity, FileText } from "lucide-react"

export function HowItWorksAgencia() {
  const steps = [
    {
      number: "1",
      icon: UserPlus,
      title: "Ative o Bóris",
      description: "30 s por grupo, com logo e cores do cliente.",
      detail: "Configuração rápida com sua identidade visual.",
    },
    {
      number: "2",
      icon: Activity,
      title: "Monitoramento ativo",
      description: "Bóris marca dúvidas não respondidas, emoções negativas e elogios.",
      detail: "Acompanhamento em tempo real da satisfação do cliente.",
    },
    {
      number: "3",
      icon: FileText,
      title: "Relatório de satisfação",
      description: "Dashboard mostra NPS, tempo de resposta e lista de demandas resolvidas.",
      detail: "Dados concretos para apresentar ao cliente.",
    },
  ]

  return (
    <section className="py-24 lg:py-32 bg-[#F7F7F7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-poppins font-normal mb-4 text-[#222222] tracking-tight">
            Como funciona na prática
          </h2>
          <p className="text-body-mobile lg:text-body-desktop text-[#222222]/70 font-inter">
            Da ativação ao relatório: 3 passos para satisfação comprovada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center bg-white p-6 lg:p-8 rounded-lg border border-[#E5E5E5] shadow-subtle"
            >
              <div className="relative w-16 h-16 bg-[#FF6B00] rounded-full flex items-center justify-center mx-auto mb-6">
                <step.icon className="h-8 w-8 text-white" aria-hidden="true" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#FF6B00] rounded-full flex items-center justify-center border-2 border-white">
                  <span className="text-xs font-poppins font-bold text-white">{step.number}</span>
                </div>
              </div>
              <h3 className="text-xl font-poppins font-medium text-[#222222] mb-3">{step.title}</h3>
              <p className="text-base font-inter font-medium text-[#222222] mb-4">{step.description}</p>
              <p className="text-sm font-inter text-[#444444]">{step.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
