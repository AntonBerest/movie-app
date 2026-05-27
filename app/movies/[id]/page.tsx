import MovieHero from '@/components/movie/MovieHero'
import Navbar from '@/components/Navbar'
import MovieInfo from '@/components/movie/MovieInfo'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'

export default async function MoviePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return (
    <main className="bg-zinc-950 min-h-screen">
      <Navbar />
      <MovieHero />
      <MovieInfo />
      <CTABanner />
      <Footer />
    </main>
  )
}
