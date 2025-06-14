import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Testimonials from "@/components/testimonials"
import Pricing from "@/components/pricing"
import FAQ from "@/components/faq"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}
