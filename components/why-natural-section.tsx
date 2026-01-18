import { Flower2, ShieldCheck, TreeDeciduous, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { WhatsAppButton } from "@/components/whatsapp-button"

const reasons = [
  {
    icon: Flower2,
    title: "Ingredientes botánicos de alto poder antioxidante",
    description: "Extractos naturales que nutren y protegen tu piel.",
  },
  {
    icon: ShieldCheck,
    title: "Libre de químicos y aditivos sintéticos",
    description: "Fórmulas puras que respetan la sensibilidad de tu piel.",
  },
  {
    icon: TreeDeciduous,
    title: "Respeto por la naturaleza y procesos éticos",
    description: "Cultivados con consciencia y gratitud hacia la tierra.",
  },
  {
    icon: Heart,
    title: "Ritual de bienestar integral",
    description: "Cuidado para piel, mente y espíritu.",
  },
]

export function WhyNaturalSection() {
  return (
    <section className="py-20 lg:py-28 bg-verde-salvia/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="w-12 h-0.5 bg-dorado-suave mx-auto mb-4" />
          <p className="text-verde-salvia text-sm tracking-[0.3em] uppercase mb-4 font-medium">Belleza consciente</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-verde-salvia mb-6 text-balance">
            ¿Por qué elegir cosmética natural?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {reasons.map((reason) => (
            <Card
              key={reason.title}
              className="bg-blanco-marfil border-verde-salvia/20 hover:shadow-lg hover:shadow-verde-salvia/10 transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 mb-4 rounded-full bg-verde-salvia/20 flex items-center justify-center">
                  <reason.icon className="w-7 h-7 text-verde-salvia" />
                </div>
                <h3 className="font-serif text-lg font-medium text-marron-tierra mb-2 leading-snug">{reason.title}</h3>
                <p className="text-sm text-marron-tierra/60 leading-relaxed">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <WhatsAppButton variant="cta" message="Hola UAY, quiero asesoría para mi piel" />
        </div>
      </div>
    </section>
  )
}
