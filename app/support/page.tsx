import Navbar from '@/components/Navbar'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'
import FAQ from '@/components/FAQ'

export default async function SupportPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return (
    <main className="bg-zinc-950 min-h-screen">
      <Navbar />
      <FAQ />
      <CTABanner />
      <Footer />
    </main>
  )
}
