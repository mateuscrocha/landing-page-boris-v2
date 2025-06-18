import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      <main className="py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-3xl lg:text-4xl font-poppins font-bold mb-4 text-[#222222]">Política de Privacidade</h1>
          <p className="text-sm text-[#666666] font-inter mb-12">Última atualização: 17 de junho de 2025</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-poppins font-semibold mb-4 text-[#222222]">1. Dados Coletados</h2>
              <p className="text-base text-[#222222] font-inter leading-relaxed mb-4">
                O Bóris coleta e processa as seguintes informações para fornecer nossos serviços:
              </p>
              <ul className="list-disc pl-6 text-base text-[#222222] font-inter leading-relaxed space-y-2">
                <li>Mensagens enviadas nos grupos de WhatsApp onde o Bóris está presente</li>
                <li>Metadados das mensagens (horário, remetente, tipo de conteúdo)</li>
                <li>Dados de uso da plataforma (acessos ao dashboard, configurações)</li>
                <li>Cookies para autenticação e melhoria da experiência do usuário</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-poppins font-semibold mb-4 text-[#222222]">2. Uso dos Dados</h2>
              <p className="text-base text-[#222222] font-inter leading-relaxed mb-4">
                Utilizamos os dados coletados para:
              </p>
              <ul className="list-disc pl-6 text-base text-[#222222] font-inter leading-relaxed space-y-2">
                <li>Gerar resumos automáticos das conversas dos grupos</li>
                <li>Criar métricas e insights sobre engajamento e participação</li>
                <li>Melhorar nossos algoritmos e funcionalidades</li>
                <li>Fornecer suporte técnico quando solicitado</li>
                <li>Cumprir obrigações legais e regulamentares</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-poppins font-semibold mb-4 text-[#222222]">3. Compartilhamento de Dados</h2>
              <p className="text-base text-[#222222] font-inter leading-relaxed mb-4">
                A Catapulta Digital nunca vende seus dados pessoais. Compartilhamos informações apenas com:
              </p>
              <ul className="list-disc pl-6 text-base text-[#222222] font-inter leading-relaxed space-y-2">
                <li>Provedores de infraestrutura necessários para operação do serviço</li>
                <li>Autoridades competentes quando exigido por lei</li>
                <li>Terceiros com seu consentimento explícito</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-poppins font-semibold mb-4 text-[#222222]">4. Segurança</h2>
              <p className="text-base text-[#222222] font-inter leading-relaxed mb-4">
                Implementamos medidas técnicas e organizacionais para proteger seus dados:
              </p>
              <ul className="list-disc pl-6 text-base text-[#222222] font-inter leading-relaxed space-y-2">
                <li>Criptografia em trânsito e em repouso</li>
                <li>Backups seguros e regulares</li>
                <li>Acesso restrito aos dados por funcionários autorizados</li>
                <li>Monitoramento contínuo de segurança</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-poppins font-semibold mb-4 text-[#222222]">5. Direitos do Usuário (LGPD)</h2>
              <p className="text-base text-[#222222] font-inter leading-relaxed mb-4">
                Conforme a Lei Geral de Proteção de Dados, você tem direito a:
              </p>
              <ul className="list-disc pl-6 text-base text-[#222222] font-inter leading-relaxed space-y-2">
                <li>Acessar seus dados pessoais que processamos</li>
                <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                <li>Solicitar a exclusão de seus dados pessoais</li>
                <li>Portabilidade dos dados para outro fornecedor</li>
                <li>Revogar o consentimento a qualquer momento</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-poppins font-semibold mb-4 text-[#222222]">6. Cookies</h2>
              <p className="text-base text-[#222222] font-inter leading-relaxed">
                Utilizamos cookies para autenticação de usuários, análise de uso da plataforma e melhoria da
                experiência. Você pode gerenciar suas preferências de cookies através das configurações do seu
                navegador.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-poppins font-semibold mb-4 text-[#222222]">7. Alterações na Política</h2>
              <p className="text-base text-[#222222] font-inter leading-relaxed">
                Podemos atualizar esta política periodicamente. Notificaremos sobre mudanças significativas através do
                grupo ou por e-mail com pelo menos 15 dias de antecedência.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-poppins font-semibold mb-4 text-[#222222]">8. Contato</h2>
              <p className="text-base text-[#222222] font-inter leading-relaxed">
                Para dúvidas sobre esta política ou exercer seus direitos, entre em contato conosco em:{" "}
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
