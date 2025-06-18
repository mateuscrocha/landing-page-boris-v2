import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Vai lotar meu celular de alertas?",
    answer: "Pelo contrário: você recebe apenas um resumo diário. Muito menos notificações que antes.",
  },
  {
    question: "Mesmo quem não lê muito WhatsApp vai ficar informado?",
    answer: "Sim, o áudio de 60 s facilita para quem está ocupado. Pode ouvir no carro, caminhando, etc.",
  },
  {
    question: "O Bóris lê conversas de síndico para morador privado?",
    answer: "Não, só o que for publicado no grupo oficial. Conversas privadas são 100% seguras e não acessadas.",
  },
  {
    question: "Preciso instalar algo?",
    answer: "Nada. Basta adicionar o Bóris ao grupo com um clique. Ele funciona 100% dentro do WhatsApp.",
  },
  {
    question: "Como funciona o controle do síndico?",
    answer:
      "O síndico e moderadores mantêm total controle. Podem configurar horários, tipos de resumo e quem recebe notificações.",
  },
  {
    question: "Posso cancelar quando quiser?",
    answer: "Sim, sem multas nem letras miúdas. Cancele a qualquer momento direto no painel.",
  },
]

export function FAQCondominio() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-poppins font-normal mb-4 text-[#222222] tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-body-mobile lg:text-body-desktop text-[#222222]/70 font-inter">
            Dúvidas comuns sobre Bóris para condomínios
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
