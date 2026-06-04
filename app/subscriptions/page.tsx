import Navbar from '@/components/Navbar'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'
import Plans from '@/components/Plans'

export default async function SubscriptionsPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return (
    <main className="bg-zinc-950 min-h-screen">
      <Navbar />
      <Plans />
      <CTABanner />
      <Footer />
    </main>
  )
}
