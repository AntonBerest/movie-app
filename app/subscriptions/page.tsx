import Navbar from '@/components/Navbar'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'
import Plans from '@/components/Plans'
import PlansComparison from '@/components/subscriptions/PlansComparison'

export default function SubscriptionsPage() {
  return (
    <main className="bg-zinc-950 min-h-screen">
      <PlansComparison />
      <Navbar />
      <Plans />
      <CTABanner />
      <Footer />
    </main>
  )
}
