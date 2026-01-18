"use client"

import { Check } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { WhatsAppButton } from "@/components/whatsapp-button"

interface Product {
  id: number
  name: string
  price: number
  description: string
  benefits: string[]
  image: string
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const formattedPrice = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(product.price)

  return (
    <Card className="bg-blanco-marfil border-verde-salvia/20 overflow-hidden hover:shadow-xl hover:shadow-verde-salvia/10 transition-all duration-300 group">
      <div className="aspect-square overflow-hidden bg-verde-salvia/5">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <CardContent className="p-6 lg:p-8">
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="font-serif text-2xl font-medium text-verde-salvia">{product.name}</h3>
          <span className="text-xl font-semibold text-dorado-suave whitespace-nowrap">{formattedPrice}</span>
        </div>

        <p className="text-marron-tierra/70 leading-relaxed mb-6">{product.description}</p>

        <ul className="grid grid-cols-2 gap-2 mb-6">
          {product.benefits.map((benefit) => (
            <li key={benefit} className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-verde-salvia flex-shrink-0" />
              <span className="text-marron-tierra/80">{benefit}</span>
            </li>
          ))}
        </ul>

        <WhatsAppButton variant="product" productName={product.name} className="w-full justify-center" />
      </CardContent>
    </Card>
  )
}
