import { Instagram } from "lucide-react"
import { WhatsAppButton } from "@/components/whatsapp-button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 lg:py-16 bg-verde-salvia text-blanco-marfil">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-6">
            <img 
              src="/logo-uay.png" 
              alt="UAY Sabiduría Ancestral" 
              className="h-24 w-auto mx-auto brightness-0 invert"
            />
          </div>

          {/* Tagline */}
          <p className="text-blanco-marfil/90 mb-8 max-w-md">
            Cosmética natural para una piel consciente. Rituales de autocuidado con respeto por la naturaleza.
          </p>

          {/* Social & Contact */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
            <a
              href="https://instagram.com/uay_sabiduria_ancestral"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-blanco-marfil/10 hover:bg-dorado-suave/30 transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span className="text-sm">@uay_sabiduria_ancestral</span>
            </a>
          </div>

          {/* WhatsApp Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 mb-8">
            <WhatsAppButton variant="footer" phone="573105046813" label="WhatsApp 1: +57 310 504 6813" />
            <WhatsAppButton variant="footer" phone="573113218772" label="WhatsApp 2: +57 311 321 8772" />
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-blanco-marfil/30 w-full">
            <p className="text-sm text-blanco-marfil/70">© {currentYear} UAY. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
