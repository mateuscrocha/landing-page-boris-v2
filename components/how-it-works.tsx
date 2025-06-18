import { UserPlus, Bot, BarChart3 } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      number: "1",
      icon: UserPlus,
      title: "Convide o Bóris",
      description: "Convite em 1 clique.",
      detail: "Sem apps, sem ajustes técnicos — ele já entra pronto para agir.",
    },
    {
      number: "2",
      icon: Bot,
      title: "Bóris entra em ação",
      description: "Bóris analisa o fluxo e envia resumo diário (texto + áudio de 60 s).",
      detail: "Você recebe tudo mastigado, antes de abrir o grupo.",
    },
    {
      number: "3",
      icon: BarChart3,
      title: "Decida com dados",
      description: "Dashboard ao vivo exibe picos, influenciadores e tópicos quentes.",
      detail: "Ajuste sua estratégia em segundos, com insights acionáveis.",
    },
  ]

  return (
    <section id="como-funciona" className="py-16 sm:py-20 lg:py-32 bg-[#F7F7F7]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-poppins font-normal mb-4 sm:mb-6 text-[#222222] tracking-tight">
            Como funciona na prática
          </h2>
          <p className="text-base sm:text-lg text-[#222222]/70 font-inter max-w-3xl mx-auto leading-relaxed">
            Do convite à tomada de decisão: 3 passos, menos de 2 min.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center bg-white p-6 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl border border-[#E5E5E5] shadow-subtle hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-[#FF6B00] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <step.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" aria-hidden="true" />
                <div className="absolute -top-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 bg-[#FF6B00] rounded-full flex items-center justify-center border-2 border-white shadow-md">
                  <span className="text-xs font-poppins font-bold text-white">{step.number}</span>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-poppins font-medium text-[#222222] mb-3">{step.title}</h3>
              <p className="text-sm sm:text-base font-inter font-medium text-[#222222] mb-4 leading-relaxed">
                {step.description}
              </p>
              <p className="text-sm font-inter text-[#444444] leading-relaxed">{step.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
