import { Header } from "@/components/header"
import { HeroGratis } from "@/components/gratis/hero-gratis"
import { ProofGratis } from "@/components/gratis/proof-gratis"
import { HowItWorksGratis } from "@/components/gratis/how-it-works-gratis"
import { Benefits } from "@/components/benefits"
import { NoResumos } from "@/components/gratis/no-resumos"
import { PricingGratis } from "@/components/gratis/pricing-gratis"
import { ClientTestimonials } from "@/components/client-testimonials"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function GratisPage() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      <main>
        <HeroGratis />
        <ProofGratis />
        <HowItWorksGratis />
        <Benefits />
        <NoResumos />
        <PricingGratis />
        <ClientTestimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
