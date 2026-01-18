"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface WhatsAppButtonProps {
  variant?: "primary" | "header" | "product" | "cta" | "footer"
  size?: "default" | "lg"
  productName?: string
  message?: string
  phone?: string
  label?: string
  className?: string
}

export function WhatsAppButton({
  variant = "primary",
  size = "default",
  productName,
  message,
  phone,
  label,
  className,
}: WhatsAppButtonProps) {
  const handleClick = () => {
    const event = new CustomEvent("openWhatsAppModal", {
      detail: { productName, message },
    })
    window.dispatchEvent(event)
  }

  const handleDirectClick = (phoneNumber: string) => {
    const defaultMessage =
      message || (productName ? `Hola UAY, quiero comprar ${productName}` : "Hola UAY, quiero asesoría para mi piel")
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`
    window.open(url, "_blank")
  }

  // Direct link for footer buttons
  if (variant === "footer" && phone) {
    return (
      <Button
        variant="outline"
        className={cn(
          "border-blanco-marfil/30 text-blanco-marfil bg-transparent",
          "transition-all duration-300 ease-out",
          "hover:bg-blanco-marfil/10 hover:text-blanco-marfil hover:scale-[1.02] hover:shadow-lg hover:shadow-blanco-marfil/10 hover:cursor-pointer",
          "active:scale-[0.98]",
          className,
        )}
        onClick={() => handleDirectClick(phone)}
      >
        <MessageCircle className="w-4 h-4 mr-2" />
        {label || "WhatsApp"}
      </Button>
    )
  }

  const variants = {
    primary: cn(
      "bg-verde-salvia text-blanco-marfil",
      "transition-all duration-300 ease-out",
      "hover:bg-verde-salvia/90 hover:scale-[1.02] hover:shadow-lg hover:shadow-verde-salvia/25 hover:cursor-pointer",
      "active:scale-[0.98]",
    ),
    header: cn(
      "bg-verde-salvia text-blanco-marfil",
      "transition-all duration-300 ease-out",
      "hover:bg-verde-salvia/90 hover:scale-[1.02] hover:shadow-md hover:shadow-verde-salvia/20 hover:cursor-pointer",
      "active:scale-[0.98]",
    ),
    product: cn(
      "bg-verde-salvia text-blanco-marfil",
      "transition-all duration-300 ease-out",
      "hover:bg-verde-salvia/90 hover:scale-[1.02] hover:shadow-lg hover:shadow-verde-salvia/25 hover:cursor-pointer",
      "active:scale-[0.98]",
    ),
    cta: cn(
      "bg-marron-tierra text-blanco-marfil",
      "transition-all duration-300 ease-out",
      "hover:bg-marron-tierra/90 hover:scale-[1.02] hover:shadow-lg hover:shadow-marron-tierra/25 hover:cursor-pointer",
      "active:scale-[0.98]",
    ),
    footer: "",
  }

  const labels = {
    primary: "Escríbenos por WhatsApp",
    header: "Escríbenos",
    product: "Comprar por WhatsApp",
    cta: "Quiero asesoría por WhatsApp",
    footer: "WhatsApp",
  }

  return (
    <Button size={size} className={cn(variants[variant], className)} onClick={handleClick}>
      <MessageCircle className="w-4 h-4 mr-2" />
      {labels[variant]}
    </Button>
  )
}
