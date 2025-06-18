import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { VideoDemo } from "@/components/video-demo"
import { Benefits } from "@/components/benefits"
import { DashboardRealtime } from "@/components/dashboard-realtime"
import { ClientTestimonials } from "@/components/client-testimonials"
import { Pricing } from "@/components/pricing"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      <main>
        <Hero /> {/* bg-white */}
        <HowItWorks /> {/* bg-[#F7F7F7] */}
        <VideoDemo /> {/* bg-white */}
        <Benefits /> {/* bg-[#F7F7F7] */}
        <DashboardRealtime /> {/* bg-[#F7F7F7] */}
        <ClientTestimonials /> {/* bg-white */}
        <Pricing /> {/* bg-[#F7F7F7] */}
        <FAQ /> {/* bg-white */}
        <CTA /> {/* bg-[#F7F7F7] */}
      </main>
      <Footer />
    </div>
  )
}
