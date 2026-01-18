import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { ProductsSection } from "@/components/products-section"
import { WhyNaturalSection } from "@/components/why-natural-section"
import { HowToBuySection } from "@/components/how-to-buy-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { WhatsAppModal } from "@/components/whatsapp-modal"

export default function Home() {
  return (
    <main className="min-h-screen bg-blanco-marfil">
      <Header />
      <Hero />
      <AboutSection />
      <ProductsSection />
      <WhyNaturalSection />
      <HowToBuySection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
      <WhatsAppModal />
    </main>
  )
}
