import { Header } from "@/components/header"
import { HeroAgencia } from "@/components/agencia/hero-agencia"
import { ProofAgencia } from "@/components/agencia/proof-agencia"
import { HowItWorksAgencia } from "@/components/agencia/how-it-works-agencia"
import { Benefits } from "@/components/benefits"
import { BenefitsAgenciaValue } from "@/components/agencia/benefits-agencia-value"
import { BenefitsAgencia } from "@/components/agencia/benefits-agencia"
import { PricingAgencia } from "@/components/agencia/pricing-agencia"
import { ClientTestimonials } from "@/components/client-testimonials"
import { FAQAgencia } from "@/components/agencia/faq-agencia"
import { CTAAgencia } from "@/components/agencia/cta-agencia"
import { Footer } from "@/components/footer"

export default function AgenciaPage() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      <main>
        <HeroAgencia />
        <ProofAgencia />
        <HowItWorksAgencia />
        <Benefits />
        <BenefitsAgenciaValue />
        <BenefitsAgencia />
        <PricingAgencia />
        <ClientTestimonials />
        <FAQAgencia />
        <CTAAgencia />
      </main>
      <Footer />
    </div>
  )
}
