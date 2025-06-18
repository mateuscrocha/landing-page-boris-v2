import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function VideoDemoCondominio() {
  return (
    <section id="video-demo" className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-poppins font-normal mb-4 text-[#222222] tracking-tight">
            Veja como o síndico resolve dúvidas sem espalhar circulares
          </h2>
          <p className="text-body-mobile lg:text-body-desktop text-[#444444] mb-12 max-w-2xl mx-auto font-inter">
            Descubra como manter todos os moradores informados de forma organizada e eficiente.
          </p>

          <div className="relative w-full mb-8">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/KoHOkmplzQQ"
                title="Demo Bóris para Condomínios"
                loading="lazy"
                frameBorder="0"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg border border-[#E5E5E5]"
              />
            </div>
          </div>

          <p className="text-sm text-[#222222]/60 font-inter mb-8">
            Problemas para ver?{" "}
            <a
              href="https://www.youtube.com/watch?v=KoHOkmplzQQ"
              target="_blank"
              rel="noreferrer noopener"
              className="text-[#FF6B00] hover:text-[#FFA552] underline"
            >
              Abra no YouTube
            </a>
          </p>

          <a
            href="https://wa.me/5561981569893?text=Ol%C3%A1!%20Sou%20s%C3%ADndico%2Fmorador%20e%20quero%20testar%20o%20B%C3%B3ris%20no%20meu%20condom%C3%ADnio."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-[#22C55E] hover:bg-[#16A34A] text-white font-poppins font-semibold text-lg px-8 py-4 border-0 rounded-xl"
              aria-label="Quero testar no meu condomínio"
            >
              Quero testar no meu condomínio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
