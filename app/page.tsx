import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Courses from '@/components/Courses'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Courses />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  )
} 