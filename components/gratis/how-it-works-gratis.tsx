import { UserPlus, BarChart3, ArrowUp } from "lucide-react"

export function HowItWorksGratis() {
  const steps = [
    {
      number: "1",
      icon: UserPlus,
      title: "Convite instantâneo",
      description: "Entra em segundos.",
      detail: "Sem apps, sem ajustes técnicos — ele já entra pronto para agir.",
    },
    {
      number: "2",
      icon: BarChart3,
      title: "Painel simplificado",
      description: "Volume, ativos, horários.",
      detail: "Dashboard com métricas essenciais para entender seu grupo.",
    },
    {
      number: "3",
      icon: ArrowUp,
      title: "Atualize quando quiser",
      description: "Migre para Pró com 1 clique.",
      detail: "Upgrade instantâneo quando precisar de mais funcionalidades.",
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
            Do convite ao upgrade: 3 passos, menos de 2 min.
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
