"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WhatsAppButton } from "@/components/whatsapp-button"

const navLinks = [
  { name: "Inicio", href: "#inicio" },
  { name: "Sobre UAY", href: "#sobre-uay" },
  { name: "Productos", href: "#productos" },
  { name: "Cómo comprar", href: "#como-comprar" },
  { name: "Testimonios", href: "#testimonios" },
  { name: "FAQ", href: "#faq" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-blanco-marfil/95 backdrop-blur-sm border-b border-verde-salvia/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center">
            <img 
              src="/logo-uay.png" 
              alt="UAY Sabiduría Ancestral" 
              className="h-12 lg:h-16 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-marron-tierra/80 hover:text-verde-salvia transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <WhatsAppButton variant="header" />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-verde-salvia"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-verde-salvia/20 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-marron-tierra/80 hover:text-verde-salvia transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <WhatsAppButton variant="header" className="w-full justify-center" />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
