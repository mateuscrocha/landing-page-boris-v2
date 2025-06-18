import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermosPage() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      <main className="py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-3xl lg:text-4xl font-poppins font-bold mb-4 text-[#222222]">Termos de Uso</h1>
          <p className="text-sm text-[#666666] font-inter mb-12">Última atualização: 17 de junho de 2025</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-poppins font-semibold mb-4 text-[#222222]">1. Aceitação dos Termos</h2>
              <p className="text-base text-[#222222] font-inter leading-relaxed">
                Ao utilizar os serviços do Bóris, você concorda com estes Termos de Uso. Se não concordar com qualquer
                parte destes termos, não utilize nossos serviços.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-poppins font-semibold mb-4 text-[#222222]">2. Descrição do Serviço</h2>
              <p className="text-base text-[#222222] font-inter leading-relaxed mb-4">
                O Bóris é uma plataforma de automação para grupos de WhatsApp que oferece:
              </p>
              <ul className="list-disc pl-6 text-base text-[#222222] font-inter leading-relaxed space-y-2">
                <li>Resumos automáticos de conversas</li>
                <li>Dashboard com métricas de engajamento</li>
                <li>Insights sobre horários de pico e membros ativos</li>
                <li>Planos Gratuito, Pró e White-Label</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-poppins font-semibold mb-4 text-[#222222]">3. Elegibilidade</h2>
              <p className="text-base text-[#222222] font-inter leading-relaxed">
                Para usar nossos serviços, você deve ser maior de 18 anos e ter autoridade para representar o grupo de
                WhatsApp onde o Bóris será adicionado.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-poppins font-semibold mb-4 text-[#222222]">4. Pagamento e Cobrança</h2>
              <p className="text-base text-[#222222] font-inter leading-relaxed mb-4">
                Nossos planos funcionam da seguinte forma:
              </p>
              <ul className="list-disc pl-6 text-base text-[#222222] font-inter leading-relaxed space-y-2">
                <li>Valores são cobrados por grupo, mensalmente</li>
                <li>Cobrança ocorre no mesmo dia de cada mês</li>
                <li>Cancelamento pode ser feito a qualquer momento sem multas</li>
                <li>Não há reembolso proporcional para cancelamentos</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-poppins font-semibold mb-4 text-[#222222]">5. Uso Aceitável</h2>
              <p className="text-base text-[#222222] font-inter leading-relaxed mb-4">É proibido usar o Bóris para:</p>
              <ul className="list-disc pl-6 text-base text-[#222222] font-inter leading-relaxed space-y-2">
                <li>Enviar spam ou conteúdo não solicitado</li>
                <li>Compartilhar conteúdo ilícito, ofensivo ou prejudicial</li>
                <li>Violar direitos de terceiros</li>
                <li>Tentar comprometer a segurança da plataforma</li>
                <li>Usar o serviço para fins ilegais</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-poppins font-semibold mb-4 text-[#222222]">6. Propriedade Intelectual</h2>
              <p className="text-base text-[#222222] font-inter leading-relaxed">
                A marca Bóris, código-fonte, design e todos os assets da plataforma são propriedade da Catapulta
                Digital. Você não pode copiar, modificar ou distribuir nosso conteúdo sem autorização.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-poppins font-semibold mb-4 text-[#222222]">
                7. Limitação de Responsabilidade
              </h2>
              <p className="text-base text-[#222222] font-inter leading-relaxed">
                O Bóris fornece insights e dados, mas não nos responsabilizamos por decisões tomadas com base nessas
                informações. Use nossos serviços por sua conta e risco.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-poppins font-semibold mb-4 text-[#222222]">8. Modificações dos Termos</h2>
              <p className="text-base text-[#222222] font-inter leading-relaxed">
                Podemos atualizar estes termos periodicamente. Notificaremos sobre mudanças significativas com pelo
                menos 15 dias de antecedência.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-poppins font-semibold mb-4 text-[#222222]">9. Lei Aplicável</h2>
              <p className="text-base text-[#222222] font-inter leading-relaxed">
                Estes termos são regidos pelas leis do Brasil. Qualquer disputa será resolvida no foro da cidade de
                Brasília-DF.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-poppins font-semibold mb-4 text-[#222222]">10. Contato</h2>
              <p className="text-base text-[#222222] font-inter leading-relaxed">
                Para dúvidas sobre estes termos, entre em contato conosco em:{" "}
                <a
                  href="mailto:eu@rochamateus.com.br"
                  className="text-[#FF6B00] hover:underline"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  eu@rochamateus.com.br
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
