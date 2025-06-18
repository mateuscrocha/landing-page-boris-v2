import { UserPlus, Bot, BarChart3 } from "lucide-react"

export function HowItWorksCondominio() {
  const steps = [
    {
      number: "1",
      icon: UserPlus,
      title: "Síndico convida",
      description: "Bóris entra sem instalar app algum.",
      detail: "Processo simples e rápido, sem complicações técnicas.",
    },
    {
      number: "2",
      icon: Bot,
      title: "Avisos enxutos",
      description: "Um resumo diário (texto + áudio curto) substitui dezenas de recados soltos.",
      detail: "Comunicação organizada e eficiente para todos os moradores.",
    },
    {
      number: "3",
      icon: BarChart3,
      title: "Painel de organização",
      description: "Veja quem recebeu, quem respondeu e o horário exato de maior atenção.",
      detail: "Controle total sobre a comunicação do condomínio.",
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
            Do convite à organização completa: 3 passos simples.
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
