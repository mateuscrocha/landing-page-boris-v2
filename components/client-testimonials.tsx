import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Verified } from "lucide-react"

const clients = [
  {
    name: "ANDRÉ CIA",
    bio: 'Especialista em copywriting, fundador da "CopyU".',
    benefit: "Automatiza campanhas e analisa engajamento para otimizar conversões.",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKmDq8PG5Ig24b9I4-yjpdsHv78PyF_OP6_g&s",
    category: "Marketing Digital",
  },
  {
    name: "LEANDRO FERRARI",
    bio: "Especialista em lançamentos digitais.",
    benefit: "Monitora interações e extrai insights para potencializar lançamentos.",
    avatar: "https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2023/02/27/img_4217-1h7qwqb9qyzqa.jpg",
    category: "Lançamentos",
  },
  {
    name: "ECONOLÍVIA",
    bio: "Economista e criadora de conteúdo digital.",
    benefit: "Mantém grupos atualizados com resumos de notícias e organiza debates sobre economia.",
    avatar:
      "https://yt3.googleusercontent.com/el98HV3uTsvmSPRFgtIGcncdvvsrDFlh-3ZG23POqw1ZqusOo5FuDm28NDVqFh6aDWfUZzAs=s900-c-k-c0x00ffffff-no-rj",
    category: "Educação",
  },
  {
    name: "OCTADESK",
    bio: "Plataforma de atendimento ao cliente.",
    benefit: "Automatiza suporte, categoriza dúvidas e otimiza comunicação.",
    avatar:
      "https://play-lh.googleusercontent.com/X61t-IPKm7_tyQqfOVi3d4J0wFBvbd4E4sfBqHQQbi7y62-mCoepKud4MzIcdCtvV8HZ",
    category: "SaaS",
  },
]

export function ClientTestimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00]/5 via-transparent to-[#FF6B00]/5"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#FF6B00]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#FF6B00]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FFF4CC] px-4 py-2 rounded-full mb-6">
            <Star className="h-4 w-4 text-[#FF6B00] fill-current" />
            <span className="text-sm font-poppins font-semibold text-[#222222]">Casos de Sucesso</span>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-poppins font-normal mb-4 sm:mb-6 text-[#222222] tracking-tight leading-tight">
            Clientes reais, <span className="text-[#FF6B00]">resultados reais</span>
          </h2>
          <p className="text-base sm:text-lg text-[#444444] font-inter max-w-3xl mx-auto leading-relaxed">
            De criadores a plataformas, veja como o Bóris faz diferença na prática.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto mb-12 sm:mb-16">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-subtle hover:shadow-2xl transition-all duration-500 border border-[#E5E5E5] hover:border-[#FF6B00]/20 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Background gradient sutil no hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00]/0 to-[#FF6B00]/0 group-hover:from-[#FF6B00]/5 group-hover:to-transparent transition-all duration-500 rounded-2xl"></div>

              <div className="relative z-10">
                {/* Header do card */}
                <div className="flex items-start justify-between mb-4 sm:mb-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="relative">
                      <img
                        src={client.avatar || "/placeholder.svg"}
                        alt={`Foto de ${client.name}`}
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl border-2 border-[#FF6B00] shadow-lg object-cover group-hover:scale-110 transition-transform duration-300"
                        width={64}
                        height={64}
                        loading="lazy"
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-[#FF6B00] rounded-full flex items-center justify-center shadow-md">
                        <Verified className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-poppins font-bold text-[#222222] mb-1 group-hover:text-[#FF6B00] transition-colors">
                        {client.name}
                      </h3>
                      <span className="inline-block bg-[#FF6B00]/10 text-[#FF6B00] px-3 py-1 rounded-full text-xs font-poppins font-semibold">
                        {client.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-sm text-[#666666] font-inter mb-4 leading-relaxed">{client.bio}</p>

                {/* Benefício principal */}
                <div className="bg-[#F7F7F7] rounded-lg sm:rounded-xl p-4 border-l-4 border-[#FF6B00]">
                  <p className="text-[#222222] font-inter font-medium leading-[1.5] text-base">"{client.benefit}"</p>
                </div>

                {/* Rating visual */}
                <div className="flex items-center gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-[#FF6B00] fill-current" />
                  ))}
                  <span className="text-sm text-[#666666] font-inter ml-2">5.0</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-[#F7F7F7] to-[#FFF4CC] rounded-xl sm:rounded-2xl p-8 lg:p-12 border border-[#E5E5E5]">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-poppins font-medium text-[#222222] mb-4">
            Pronto para ser o próximo caso de sucesso?
          </h3>
          <p className="text-lg text-[#444444] font-inter mb-8 max-w-2xl mx-auto leading-relaxed">
            Junte-se a mais de 900 grupos que já transformaram sua gestão com o Bóris.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5561981569893?text=Ol%C3%A1!%20Quero%20adicionar%20o%20B%C3%B3ris%20no%20meu%20grupo."
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#22C55E] hover:bg-[#16A34A] text-white font-poppins font-semibold text-lg px-8 py-4 border-0 transition-all duration-200 group-hover:scale-105 shadow-lg hover:shadow-xl"
                aria-label="Adicionar meu grupo"
              >
                Adicionar meu grupo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>

            <a href="#video-demo" className="group w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-[#E5E5E5] text-[#222222] hover:bg-[#F7F7F7] font-poppins font-semibold text-lg px-8 py-4 transition-all duration-200 group-hover:scale-105"
              >
                Ver demonstração
              </Button>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 mt-8 text-sm text-[#666666] font-inter">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse"></div>
              <span>900+ grupos ativos</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#FF6B00] rounded-full animate-pulse"></div>
              <span>37h economizadas/mês</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#3B82F6] rounded-full animate-pulse"></div>
              <span>Setup em 2 minutos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
