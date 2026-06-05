import MovieHero from '@/components/movie/MovieHero'
import Navbar from '@/components/Navbar'
import MovieInfo from '@/components/movie/MovieInfo'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'

export default function MoviePage() {
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
