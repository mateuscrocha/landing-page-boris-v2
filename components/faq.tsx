import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Preciso instalar algo?",
    answer: "Nada. Basta adicionar o Bóris ao grupo com um clique. Ele funciona 100% dentro do WhatsApp.",
  },
  {
    question: "Ele lê mensagens privadas?",
    answer: "Não. O Bóris só acessa conteúdo dos grupos que você autorizar. Suas mensagens privadas são 100% seguras.",
  },
  {
    question: "Posso cancelar quando quiser?",
    answer: "Sim, sem multas nem letras miúdas. Cancele a qualquer momento direto no painel.",
  },
  {
    question: "Quantos grupos o Pró suporta?",
    answer: "O plano Pró suporta até 3 grupos. Para mais grupos, temos o White-Label com capacidade ilimitada.",
  },
  {
    question: "Quanto tempo até ver resultado?",
    answer: "Em menos de 24h você recebe o primeiro resumo. A maioria dos clientes vê resultados na primeira semana.",
  },
  {
    question: "Os dados ficam seguros?",
    answer: "Sim. Usamos criptografia de ponta e seguimos LGPD. Seus dados nunca são compartilhados com terceiros.",
  },
  {
    question: "Qual o ROI esperado?",
    answer: "Clientes economizam em média 37h/mês, o que representa R$ 1.850+ em tempo de gestão recuperado.",
  },
  {
    question: "Funciona em grupos grandes?",
    answer: "Sim! Já processamos grupos com mais de 10.000 membros. Quanto maior, mais útil fica o Bóris.",
  },
]

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

export function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-20 bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-poppins font-normal mb-4 sm:mb-6 text-[#222222] tracking-tight">
            Perguntas Frequentes sobre o Bóris
          </h2>
          <p className="text-base sm:text-lg text-[#222222]/70 font-inter max-w-3xl mx-auto leading-relaxed">
            Tire suas dúvidas sobre como usar o Bóris em grupos WhatsApp
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-[#E5E5E5] rounded-lg sm:rounded-xl px-6 bg-white shadow-subtle hover:shadow-card transition-shadow"
              >
                <AccordionTrigger className="text-left font-poppins font-medium text-[#222222] hover:no-underline text-base py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#222222]/70 pb-5 font-inter text-base leading-[1.6]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
