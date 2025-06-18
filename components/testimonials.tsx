import { Card, CardContent } from "@/components/ui/card"
import { Star, TrendingUp, Clock, Users } from "lucide-react"

const testimonials = [
  {
    name: "Camila Santos",
    role: "Gestora de Comunidade",
    company: "TechHub Brasil",
    content: "Economizei horas de rolagem. Bóris virou meu braço direito.",
    rating: 5,
    avatar: "/images/engagement.jpg",
    result: "37h economizadas/mês",
    icon: Clock,
  },
  {
    name: "Rogério Silva",
    role: "CEO",
    company: "Agência XYZ",
    content: "Os relatórios saem sozinhos. Meu cliente adora.",
    rating: 5,
    avatar: "/images/engagement.jpg",
    result: "5x mais relatórios",
    icon: TrendingUp,
  },
  {
    name: "Léo Martins",
    role: "Community Manager",
    company: "Projeto Araguaia",
    content: "Acabou a bagunça! As infos chegam mastigadas.",
    rating: 5,
    avatar: "/images/engagement.jpg",
    result: "90% menos confusão",
    icon: Users,
  },
]

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-poppins font-semibold mb-4 text-[#222222] tracking-tight">
            Casos de Sucesso Reais
          </h2>
          <p className="text-body-mobile lg:text-body-desktop text-[#222222]/70 font-inter">
            Veja os resultados que nossos clientes alcançaram
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-[#E5E5E5] shadow-subtle bg-white">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#FF6B00] text-[#FF6B00]" />
                  ))}
                </div>

                <div className="flex items-center gap-3 mb-4 p-3 bg-[#FFF4CC] rounded-lg">
                  <testimonial.icon className="h-5 w-5 text-[#FF6B00]" />
                  <span className="font-poppins font-semibold text-[#222222] text-sm">{testimonial.result}</span>
                </div>

                <p className="text-[#222222]/70 mb-6 italic font-inter">"{testimonial.content}"</p>

                <div className="flex items-center">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt="Avatar do cliente"
                    className="w-12 h-12 rounded-full mr-4 border border-[#E5E5E5] object-cover"
                    width={48}
                    height={48}
                  />
                  <div>
                    <p className="font-poppins font-medium text-[#222222]">{testimonial.name}</p>
                    <p className="text-sm text-[#222222]/60 font-inter">{testimonial.role}</p>
                    <p className="text-xs text-[#FF6B00] font-inter font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
