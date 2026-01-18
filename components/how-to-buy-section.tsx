import { MessageCircle, Users, Package, Sparkles } from "lucide-react"
import { WhatsAppButton } from "@/components/whatsapp-button"

const steps = [
  {
    number: 1,
    icon: MessageCircle,
    title: "Nos escribes por WhatsApp",
    description: "Inicia una conversación con nosotros.",
  },
  {
    number: 2,
    icon: Users,
    title: "Te guiamos según tu piel y tu rutina",
    description: "Asesoría personalizada para encontrar lo ideal.",
  },
  {
    number: 3,
    icon: Package,
    title: "Confirmas tu pedido y envío",
    description: "Proceso simple y seguro.",
  },
  {
    number: 4,
    icon: Sparkles,
    title: "Recibes tus productos y comienzas tu ritual",
    description: "Conecta con tu piel y la naturaleza.",
  },
]

export function HowToBuySection() {
  return (
    <section id="como-comprar" className="py-20 lg:py-28 bg-blanco-marfil">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="w-12 h-0.5 bg-dorado-suave mx-auto mb-4" />
          <p className="text-verde-salvia text-sm tracking-[0.3em] uppercase mb-4 font-medium">Simple y personal</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-verde-salvia mb-6 text-balance">
            ¿Cómo comprar?
          </h2>
          <p className="text-lg text-marron-tierra/70 leading-relaxed text-pretty">
            Un proceso cercano y sin complicaciones.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative text-center">
                {/* Connector line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-full h-0.5 bg-verde-salvia/30" />
                )}

                {/* Step Circle */}
                <div className="relative z-10 w-16 h-16 mx-auto mb-4 rounded-full bg-verde-salvia flex items-center justify-center">
                  <step.icon className="w-7 h-7 text-blanco-marfil" />
                </div>

                {/* Number Badge */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-6 h-6 rounded-full bg-dorado-suave flex items-center justify-center">
                  <span className="text-xs font-bold text-blanco-marfil">{step.number}</span>
                </div>

                <h3 className="font-serif text-lg font-medium text-marron-tierra mb-2">{step.title}</h3>
                <p className="text-sm text-marron-tierra/60 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <WhatsAppButton variant="primary" size="lg" />
        </div>
      </div>
    </section>
  )
}
