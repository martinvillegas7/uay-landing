"use client"

import { useEffect, useState } from "react"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const whatsappNumbers = [
  { label: "+57 310 504 6813", phone: "573105046813" },
  { label: "+57 311 321 8772", phone: "573113218772" },
]

export function WhatsAppModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [customMessage, setCustomMessage] = useState("")

  useEffect(() => {
    const handleOpen = (event: CustomEvent<{ productName?: string; message?: string }>) => {
      const { productName, message } = event.detail || {}

      if (message) {
        setCustomMessage(message)
      } else if (productName) {
        setCustomMessage(`Hola UAY, quiero comprar ${productName}`)
      } else {
        setCustomMessage("Hola UAY, quiero asesoría para mi piel")
      }

      setIsOpen(true)
    }

    window.addEventListener("openWhatsAppModal", handleOpen as EventListener)
    return () => window.removeEventListener("openWhatsAppModal", handleOpen as EventListener)
  }, [])

  const handleWhatsAppClick = (phone: string) => {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(customMessage)}`
    window.open(url, "_blank")
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md bg-blanco-marfil border-beige-almendra">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-marron-tierra text-center">
            Escríbenos por WhatsApp
          </DialogTitle>
        </DialogHeader>

        <div className="py-6">
          <p className="text-center text-muted-foreground mb-6">Elige un número para iniciar tu conversación</p>

          <div className="space-y-3">
            {whatsappNumbers.map((item) => (
              <Button
                key={item.phone}
                variant="outline"
                className="w-full h-14 border-verde-salvia text-verde-salvia hover:bg-verde-salvia hover:text-blanco-marfil transition-all duration-300 bg-transparent"
                onClick={() => handleWhatsAppClick(item.phone)}
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                {item.label}
              </Button>
            ))}
          </div>

          <p className="text-xs text-center text-muted-foreground mt-6">Te responderemos lo más pronto posible</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
