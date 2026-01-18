import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Camila Rodríguez",
    skinType: "Piel mixta",
    comment:
      "El aceite de cacay transformó mi piel. Después de un mes de uso, las manchas se redujeron notablemente y mi rostro tiene una luminosidad natural que antes no tenía.",
    rating: 5,
  },
  {
    name: "Valentina Mejía",
    skinType: "Piel sensible",
    comment:
      "Por fin encontré un protector solar que no irrita mi piel. La textura es suave, no deja residuo blanco y me protege todo el día. ¡Lo amo!",
    rating: 5,
  },
  {
    name: "María José Gutiérrez",
    skinType: "Piel seca",
    comment:
      "UAY no solo cuida mi piel, cuida mi alma. Cada aplicación es un ritual que me conecta conmigo misma. Productos honestos y de verdad.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-20 lg:py-28 bg-beige-almendra/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="w-12 h-0.5 bg-dorado-suave mx-auto mb-4" />
          <p className="text-verde-salvia text-sm tracking-[0.3em] uppercase mb-4 font-medium">Experiencias reales</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-verde-salvia mb-6 text-balance">
            Lo que dicen nuestras clientas
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="bg-blanco-marfil border-verde-salvia/20 hover:shadow-lg hover:shadow-verde-salvia/10 transition-all duration-300"
            >
              <CardContent className="p-6 lg:p-8">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-dorado-suave text-dorado-suave" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-marron-tierra/80 leading-relaxed mb-6 italic">"{testimonial.comment}"</p>

                {/* Author */}
                <div className="pt-4 border-t border-verde-salvia/20">
                  <p className="font-serif font-medium text-verde-salvia">{testimonial.name}</p>
                  <p className="text-sm text-marron-tierra/60">{testimonial.skinType}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
