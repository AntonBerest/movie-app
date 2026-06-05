import Navbar from '@/components/Navbar'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'
import FAQ from '@/components/FAQ'
import SupportHero from '@/components/support/SupportHero'

export default function SupportPage() {
  return (
    <main className="bg-zinc-950 min-h-screen">
      <Navbar />
      <SupportHero />
      <FAQ />
      <CTABanner />
      <Footer />
    </main>
  )
}
