import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Los productos son 100% naturales?",
    answer:
      "Sí, todos nuestros productos están formulados con ingredientes 100% naturales, libres de químicos, conservantes y aditivos sintéticos. Utilizamos ingredientes botánicos de alto poder antioxidante, cultivados y recolectados con respeto profundo por la naturaleza.",
  },
  {
    question: "¿Son aptos para piel sensible?",
    answer:
      "Absolutamente. Nuestras fórmulas están diseñadas pensando en todo tipo de pieles, incluyendo las más sensibles. El Protector Solar Mineral SPF 70 es especialmente ideal para pieles sensibles o reactivas, ya que utiliza filtros 100% minerales que no irritan.",
  },
  {
    question: "¿Hacen envíos a todo Colombia?",
    answer:
      "Sí, realizamos envíos a todo Colombia. Una vez confirmes tu pedido por WhatsApp, te indicamos los costos de envío según tu ubicación y el tiempo estimado de entrega.",
  },
  {
    question: "¿Cómo elijo mi rutina ideal?",
    answer:
      "Te guiamos personalmente por WhatsApp. Cuéntanos sobre tu tipo de piel, tus necesidades y objetivos, y te recomendaremos la rutina perfecta para ti. No te vendemos, te acompañamos.",
  },
  {
    question: "¿Cómo puedo pagar?",
    answer:
      "Aceptamos transferencias bancarias, Nequi, Daviplata y pagos contra entrega en algunas ciudades. Te damos todas las opciones al momento de confirmar tu pedido por WhatsApp.",
  },
  {
    question: "¿Cómo usar el Aceite de Cacay y el Protector Solar?",
    answer:
      "El Aceite de Cacay se aplica en las noches sobre el rostro limpio, con suaves movimientos circulares. Unas gotas son suficientes. El Protector Solar Mineral se aplica como último paso de tu rutina matutina, después de hidratar, y se reaplicara cada 2-3 horas si estás expuesto al sol.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-verde-salvia/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-12 h-0.5 bg-dorado-suave mx-auto mb-4" />
          <p className="text-verde-salvia text-sm tracking-[0.3em] uppercase mb-4 font-medium">Resolvemos tus dudas</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-verde-salvia mb-6 text-balance">
            Preguntas Frecuentes
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-blanco-marfil border border-verde-salvia/20 rounded-lg px-6 data-[state=open]:bg-verde-salvia/10 data-[state=open]:border-verde-salvia/30"
            >
              <AccordionTrigger className="hover:no-underline py-5">
                <span className="font-serif text-left text-lg font-medium text-marron-tierra">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-marron-tierra/70 leading-relaxed pb-5">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
