export default function MovieHero() {
  return (
    <section className="relative h-200 mx-16 mt-24 overflow-hidden rounded-xl">
      <div className=" h-full">
        <img
          src={
            'https://image.tmdb.org/t/p/original/2ssWTSVklAEc98frZUQhgtGHx7s.jpg'
          }
          alt="poster"
          className="w-full h-full object-cover "
        />
      </div>

      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.3))',
        }}
      />

      <div className="absolute inset-0 bg-black-60" />

      <div className="absolute inset-0 flex flex-col items-center justify-end pb-24 text-white text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Interstellar</h1>
        <p className="text-zinc-400 mb-8">
          Mankind was born on Earth. It was never meant to die here.
        </p>

        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-2 md:px-4 py-3 rounded-lg text-sm font-semibold">
            <img src="/play-filled.svg" className="w-5 h-5" /> Play Now
          </button>
          <button className="bg-zinc-800 text-white px-3 py-3 rounded-lg hover:bg-zinc-700">
            <img src="/round-plus.svg" className="w-5 h-5" />
          </button>
          <button className="bg-zinc-800 text-white px-3 py-3 rounded-lg hover:bg-zinc-700">
            <img src="/like-outline.svg" className="w-5 h-5" />
          </button>
          <button className="bg-zinc-800 text-white px-3 py-3 rounded-lg hover:bg-zinc-700">
            <img src="/sound-on.svg" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
