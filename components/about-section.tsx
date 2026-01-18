import { Heart, Leaf, Sparkles, Eye, Sun } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const values = [
  {
    icon: Sparkles,
    title: "Sabiduría Ancestral",
    description: "Honramos el conocimiento transmitido por nuestras comunidades originarias.",
  },
  {
    icon: Leaf,
    title: "Respeto por la Naturaleza",
    description: "Ingredientes orgánicos y ecológicos, cultivados con ética.",
  },
  {
    icon: Heart,
    title: "Belleza Consciente",
    description: "Estética natural, real y sin filtros, desde el amor propio.",
  },
  {
    icon: Eye,
    title: "Transparencia y Autenticidad",
    description: "Honestos con cada ingrediente, origen y proceso.",
  },
  {
    icon: Sun,
    title: "Bienestar Integral",
    description: "Cuidamos cuerpo, mente y espíritu con fórmulas holísticas.",
  },
]

export function AboutSection() {
  return (
    <section id="sobre-uay" className="py-20 lg:py-28 bg-verde-salvia/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="w-12 h-0.5 bg-dorado-suave mx-auto mb-4" />
          <p className="text-verde-salvia text-sm tracking-[0.3em] uppercase mb-4 font-medium">Nuestra esencia</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-verde-salvia mb-6 text-balance">
            Sobre UAY
          </h2>
          <p className="text-lg text-marron-tierra/70 leading-relaxed text-pretty">
            UAY nace del deseo de reconectar con la sabiduría de la tierra y las culturas originarias. Somos una marca
            de cosmética natural enfocada en el bienestar integral, que ofrece productos para el cuidado de la piel{" "}
            <strong className="text-marron-tierra">libres de químicos, conservantes y aditivos sintéticos</strong>.
          </p>
          <p className="text-lg text-marron-tierra/70 leading-relaxed mt-4 text-pretty">
            Cada producto está formulado artesanalmente con ingredientes botánicos de alto poder antioxidante,
            cultivados y recolectados con respeto profundo por la naturaleza.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
          {values.map((value, index) => (
            <Card
              key={value.title}
              className="bg-blanco-marfil border-verde-salvia/20 hover:shadow-lg hover:shadow-verde-salvia/10 transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-verde-salvia/20 flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-verde-salvia" />
                </div>
                <h3 className="font-serif text-lg font-medium text-marron-tierra mb-2">{value.title}</h3>
                <p className="text-sm text-marron-tierra/60 leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
