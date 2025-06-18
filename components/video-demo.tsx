import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function VideoDemo() {
  return (
    <section id="video-demo" className="py-16 sm:py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-poppins font-normal mb-4 sm:mb-6 text-[#222222] tracking-tight">
            Assista ao Bóris trabalhando em tempo real
          </h2>
          <p className="text-base sm:text-lg text-[#444444] mb-8 sm:mb-12 max-w-3xl mx-auto font-inter leading-relaxed">
            Descubra, em menos de 2 minutos, como ele resume conversas e gera métricas automaticamente.
          </p>

          {/* Video Container */}
          <div className="relative w-full mb-6 sm:mb-8">
            <div
              className="relative w-full rounded-lg sm:rounded-xl overflow-hidden shadow-2xl"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src="https://www.youtube.com/embed/blZqKpZwn3g"
                title="Demo do Bóris - Automação WhatsApp"
                loading="lazy"
                frameBorder="0"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </div>

          {/* Fallback Link */}
          <p className="text-sm text-[#222222]/60 font-inter mb-6 sm:mb-8">
            Problemas para ver?{" "}
            <a
              href="https://www.youtube.com/watch?v=blZqKpZwn3g"
              target="_blank"
              rel="noreferrer noopener"
              className="text-[#FF6B00] hover:text-[#FFA552] underline focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:ring-offset-2 rounded"
            >
              Abra no YouTube
            </a>
          </p>

          {/* CTA Button */}
          <a
            href="https://wa.me/5561981569893?text=Ol%C3%A1!%20Vi%20o%20v%C3%ADdeo%20e%20quero%20testar%20o%20B%C3%B3ris%20agora."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button
              size="lg"
              className="bg-[#22C55E] hover:bg-[#16A34A] text-white font-poppins font-semibold text-base sm:text-lg px-8 py-4 border-0 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
              aria-label="Quero testar agora"
            >
              Quero testar agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
