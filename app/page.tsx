import Hero from "@/components/hero"
import About from "@/components/about"
import Certifications from "@/components/certifications"
import Services from "@/components/services"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      {/* <Certifications /> */}
      <Services />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
