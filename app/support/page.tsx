import Navbar from '@/components/Navbar'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'
import FAQ from '@/components/FAQ'
import SupportHero from '@/components/support/SupportHero'

export default async function SupportPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

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
