import { ProductCard } from "@/components/product-card"

export const products = [
  {
    id: 1,
    name: "Aceite de Cacay",
    price: 85000,
    description:
      "Sérum regenerador anti-edad. Reduce visiblemente manchas, cicatrices y estrías. Combate el acné y mejora la textura. Estimula colágeno y elastina.",
    benefits: ["Anti-edad", "Regeneración", "Hidratación y luminosidad", "No comedogénico"],
    image: "/natural-cacay-oil-dropper-bottle-botanical-elegant.png",
  },
  {
    id: 2,
    name: "Protector Solar Mineral SPF 70",
    price: 75000,
    description:
      "Protector solar 100% mineral con textura suave y tono uniforme. Ideal para pieles sensibles o reactivas.",
    benefits: ["100% mineral", "Eco-amigable", "UVA+UVB", "Toque seco"],
    image: "/natural-mineral-sunscreen-tube-botanical-elegant-m.png",
  },
]

export function ProductsSection() {
  return (
    <section id="productos" className="py-20 lg:py-28 bg-beige-almendra/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="w-12 h-0.5 bg-dorado-suave mx-auto mb-4" />
          <p className="text-verde-salvia text-sm tracking-[0.3em] uppercase mb-4 font-medium">Nuestros rituales</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-verde-salvia mb-6 text-balance">
            Productos Destacados
          </h2>
          <p className="text-lg text-marron-tierra/70 leading-relaxed text-pretty">
            Cada fórmula es un ritual de conexión con tu piel y la naturaleza.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
