import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Como sei que o cliente está feliz?",
    answer: "Bóris calcula NPS do grupo e entrega alertas se cair. Você tem dados concretos de satisfação.",
  },
  {
    question: "Meu time demora para responder; recebo aviso?",
    answer: "Sim, você escolhe o tempo limite e o Bóris notifica quando uma dúvida fica pendente.",
  },
  {
    question: "O cliente vê que é o Bóris?",
    answer: "Não, é 100% white-label. Aparece apenas sua marca, logo e cores. Zero menção ao Bóris.",
  },
  {
    question: "Quanto tempo para implementar?",
    answer: "Menos de 24 horas. Configuramos sua marca e você já pode ativar nos grupos dos clientes.",
  },
  {
    question: "Posso exportar os dados?",
    answer: "Sim, API completa e relatórios em PDF com sua marca. Integre com suas ferramentas de BI.",
  },
  {
    question: "Como funciona o suporte técnico?",
    answer: "Suporte dedicado para agências, com SLA diferenciado e acesso prioritário ao roadmap.",
  },
]

export function FAQAgencia() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-poppins font-normal mb-4 text-[#222222] tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-body-mobile lg:text-body-desktop text-[#222222]/70 font-inter">
            Dúvidas comuns sobre Bóris White-Label
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-[#E5E5E5] rounded-lg px-6 bg-white shadow-subtle"
              >
                <AccordionTrigger className="text-left font-poppins font-medium text-[#222222] hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#222222]/70 pb-4 font-inter">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
