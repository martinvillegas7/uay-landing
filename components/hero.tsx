"use client"

import { Leaf, Recycle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WhatsAppButton } from "@/components/whatsapp-button"

const benefits = [
  { icon: Leaf, text: "Ingredientes limpios" },
  { icon: Recycle, text: "Biodegradables" },
  { icon: Sparkles, text: "Fórmulas artesanales" },
]

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 lg:pt-24">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/tropical-botanical-leaves-soft-green-foliage-jungl.png"
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blanco-marfil/40 via-blanco-marfil/60 to-blanco-marfil/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center">
          {/* Tagline */}
          <div className="w-12 h-0.5 bg-dorado-suave mx-auto mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700" />
          <p className="text-verde-salvia text-sm tracking-[0.3em] uppercase mb-6 font-medium animate-in fade-in slide-in-from-bottom-4 duration-700">
            Rituales de autocuidado
          </p>

          {/* Main Title */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium text-marron-tierra leading-tight mb-6 text-balance animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Cosmética natural para una piel consciente
          </h1>

          {/* Subtitle */}
          <p className="text-lg lg:text-xl text-marron-tierra/70 leading-relaxed mb-10 max-w-2xl mx-auto text-pretty animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            Rituales de autocuidado con ingredientes botánicos, formulados artesanalmente y con respeto profundo por la
            naturaleza.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <WhatsAppButton variant="primary" size="lg" />
            <Button
              variant="outline"
              size="lg"
              className="border-verde-salvia text-verde-salvia bg-transparent transition-all duration-300 ease-out hover:bg-verde-salvia hover:text-blanco-marfil hover:scale-[1.02] hover:shadow-lg hover:shadow-verde-salvia/25 hover:cursor-pointer active:scale-[0.98]"
              onClick={() => document.getElementById("productos")?.scrollIntoView({ behavior: "smooth" })}
            >
              Ver productos
            </Button>
          </div>

          {/* Mini Benefits */}
          <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
            {benefits.map((benefit) => (
              <div
                key={benefit.text}
                className="flex items-center gap-2 px-4 py-2 bg-verde-salvia/15 rounded-full border border-verde-salvia/20"
              >
                <benefit.icon className="w-4 h-4 text-verde-salvia" />
                <span className="text-sm text-marron-tierra/80">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-verde-salvia/40 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-verde-salvia/60 rounded-full mt-2" />
        </div>
      </div>
    </section>
  )
}
