import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Categories from '@/components/Categories'
import Devices from '@/components/Devices'
import FAQ from '@/components/FAQ'
import Plans from '@/components/Plans'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-[#141414]">
      <Navbar />
      <Hero />
      <Categories />
      <Devices />
      <FAQ />
      <Plans />
      <CTABanner />
      <Footer />
    </main>
  )
}
