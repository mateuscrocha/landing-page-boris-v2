import { Header } from "@/components/header"
import { HeroCondominio } from "@/components/condominio/hero-condominio"
import { ProofCondominio } from "@/components/condominio/proof-condominio"
import { HowItWorksCondominio } from "@/components/condominio/how-it-works-condominio"
import { VideoDemoCondominio } from "@/components/condominio/video-demo-condominio"
import { Benefits } from "@/components/benefits"
import { BenefitsCondominio } from "@/components/condominio/benefits-condominio"
import { PricingCondominio } from "@/components/condominio/pricing-condominio"
import { ClientTestimonials } from "@/components/client-testimonials"
import { FAQCondominio } from "@/components/condominio/faq-condominio"
import { CTACondominio } from "@/components/condominio/cta-condominio"
import { Footer } from "@/components/footer"

export default function CondominioPage() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      <main>
        <HeroCondominio />
        <ProofCondominio />
        <HowItWorksCondominio />
        <VideoDemoCondominio />
        <Benefits />
        <BenefitsCondominio />
        <PricingCondominio />
        <ClientTestimonials />
        <FAQCondominio />
        <CTACondominio />
      </main>
      <Footer />
    </div>
  )
}
