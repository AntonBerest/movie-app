'use client'
import { useState } from 'react'

export default function MovieInfo() {
  const cast = [
    'https://media.themoviedb.org/t/p/w138_and_h175_face/lCySuYjhXix3FzQdS4oceDDrXKI.jpg',
    'https://media.themoviedb.org/t/p/w138_and_h175_face/s6tflSD20MGz04ZR2R1lZvhmC4Y.jpg',
    'https://media.themoviedb.org/t/p/w138_and_h175_face/bVZRMlpjTAO2pJK6v90buFgVbSW.jpg',
    'https://media.themoviedb.org/t/p/w138_and_h175_face/lodMzLKSdrPcBry6TdoDsMN3Vge.jpg',
    'https://media.themoviedb.org/t/p/w138_and_h175_face/304ilSygaCRWykoBWAL67TOw8g9.jpg',
    'https://media.themoviedb.org/t/p/w138_and_h175_face/voD93lzFZrr9xfAggwFcPRBi84i.jpg',
    'https://media.themoviedb.org/t/p/w138_and_h175_face/oJQxl4DG0KSCtOGrpWNhYz9gUZA.jpg',
    'https://media.themoviedb.org/t/p/w138_and_h175_face/gW9BdiA9eooBWa5bzHWkV7rbTa8.jpg',
    'https://media.themoviedb.org/t/p/w276_and_h350_face/zGihSIVRzwmCqilnA4PmNM4C2RT.jpg',
  ]

  const [castPage, setCastPage] = useState(0)
  const castPerPage = 8
  const visibleCast = cast.slice(
    castPage * castPerPage,
    castPage * castPerPage + castPerPage
  )

  const reviews = [
    { name: 'decovision', rating: 5, text: 'People seem to think...' },
    { name: 'Everett G', rating: 5, text: 'Even though...' },
    { name: 'John D', rating: 4, text: 'Amazing movie...' },
    { name: 'Sarah M', rating: 5, text: 'Masterpiece...' },
  ]

  const [reviewPage, setReviewPage] = useState(0)
  const reviewsPerPage = 2
  const visibleReviews = reviews.slice(
    reviewPage * reviewsPerPage,
    reviewPage * reviewsPerPage + reviewsPerPage
  )

  return (
    <div className="px-16 py-8 grid grid-cols-3 gap-8">
      <div className="col-span-2">
        <div className="bg-[#1A1A1A] text-white px-4 py-2 rounded-lg disabled:opacity-30">
          <p className="text-zinc-400">Description</p>
          <p className="text-white mt-2">
            The adventures of a group of explorers who make use of a newly
            discovered wormhole to surpass the limitations on human space travel
            and conquer the vast distances involved in an interstellar voyage.
          </p>
        </div>
        <div className="bg-[#1A1A1A] text-white px-4 py-2 rounded-lg disabled:opacity-30 mt-5">
          <div className="flex justify-between items-center mt-2">
            <p className="text-zinc-400">Cast</p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCastPage(castPage - 1)}
                disabled={castPage === 0}
                className="bg-[#141414] hover:bg-zinc-700 px-2 md:px-4 py-4 rounded-full border border-zinc-800"
              >
                <img src="/arrow-left.svg" className="w-5 h-5" />
              </button>
              <button
                onClick={() => setCastPage(castPage + 1)}
                disabled={(castPage + 1) * castPerPage >= cast.length}
                className="bg-[#141414] hover:bg-zinc-700 px-2 md:px-4 py-4 rounded-full border border-zinc-800"
              >
                <img src="/arrow-right.svg" className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-8 gap-2 mt-4">
            {visibleCast.map((url, index) => (
              <img
                key={index}
                src={url}
                alt="actor"
                className="rounded-xl w-full object-cover"
              />
            ))}
          </div>
        </div>
        <div className="bg-[#1A1A1A] text-white px-4 py-2 rounded-lg disabled:opacity-30 mt-5 ">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-zinc-400">Reviews</p>
            </div>

            <div className="bg-[#1A1A1A] gap-2 flex items-center rounded-lg">
              <button className="flex items-center gap-2 bg-[#141414] hover:bg-zinc-700 text-white rounded-lg px-1 md:px-4 py-2">
                <img src="/round-plus.svg" className="w-5 h-5" />
                Add your Review
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {visibleReviews.map((review, index) => (
              <div key={index} className="bg-[#0F0F0F] rounded-xl">
                <div className="flex justify-between items-center mt-2">
                  <h1 className="text-white px-4 py-4">{review.name}</h1>
                  <div className="bg-[#141414] hover:bg-zinc-700 md:px-2 py-2 rounded-full border border-zinc-800 grid grid-cols-6 mr-4 gap-1">
                    <img src="/star-rounded-red.svg" className="w-5 h-5" />
                    <img src="/star-rounded-red.svg" className="w-5 h-5" />
                    <img src="/star-rounded-red.svg" className="w-5 h-5" />
                    <img src="/star-rounded-red.svg" className="w-5 h-5" />
                    <img src="/star-rounded-red.svg" className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-zinc-400 px-4 mb-4">{review.text}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-2 mt-4 mb-2">
            <button
              onClick={() => setReviewPage(reviewPage - 1)}
              disabled={reviewPage === 0}
              className="bg-[#141414] hover:bg-zinc-700 px-2 md:px-4 py-4 rounded-full border border-zinc-800"
            >
              <img src="/arrow-left.svg" className="w-5 h-5" />
            </button>
            <div className="flex gap-1 px-2">
              {Array.from({
                length: Math.ceil(reviews.length / reviewsPerPage),
              }).map((_, i) => (
                <div
                  key={i}
                  className={`h-1 w-6 rounded-full ${i === reviewPage ? 'bg-red-600' : 'bg-zinc-700'}`}
                />
              ))}
            </div>
            <button
              onClick={() => setReviewPage(reviewPage + 1)}
              disabled={(reviewPage + 1) * reviewsPerPage >= reviews.length}
              className="bg-[#141414] hover:bg-zinc-700 px-2 md:px-4 py-4 rounded-full border border-zinc-800"
            >
              <img src="/arrow-right.svg" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#1A1A1A] text-white px-8 py-8 rounded-lg disabled:opacity-30">
        <div className="flex gap-2">
          <img src="/calendar.svg" className="w-5 h-5" />
          <p className="text-zinc-400">Released Year</p>
        </div>
        <p className="text-white mt-4">2014</p>
        <div className="flex gap-2 mt-8">
          <img src="/translation.svg" className="w-5 h-5" />
          <p className="text-zinc-400">Available Languages</p>
        </div>
        <div className="grid grid-cols-4 gap-2 mt-4">
          <button className="bg-[#141414] hover:bg-zinc-700 px-2 py-2 rounded-full border border-zinc-800 text-white">
            English
          </button>
          <button className="bg-[#141414] hover:bg-zinc-700 px-2 py-2 rounded-full border border-zinc-800 text-white">
            Ukrainian
          </button>
          <button className="bg-[#141414] hover:bg-zinc-700 px-2 py-2 rounded-full border border-zinc-800 text-white">
            French
          </button>
          <button className="bg-[#141414] hover:bg-zinc-700 px-2 py-2 rounded-full border border-zinc-800 text-white">
            Spanish
          </button>
          <button className="bg-[#141414] hover:bg-zinc-700 px-2 py-2 rounded-full border border-zinc-800 text-white">
            Polish
          </button>
          <button className="bg-[#141414] hover:bg-zinc-700 px-2 py-2 rounded-full border border-zinc-800 text-white">
            German
          </button>
          <button className="bg-[#141414] hover:bg-zinc-700 px-2 py-2 rounded-full border border-zinc-800 text-white">
            Italian
          </button>
        </div>
        <div className="flex gap-2 mt-8">
          <img src="/star-outline-rounded.svg" className="w-7 h-7" />
          <p className="text-zinc-400">Ratings</p>
        </div>
        <div className="flex items-center justify-center gap-4 mt-4">
          <div className="bg-[#141414] hover:bg-zinc-700 px-2 py-2 rounded-xl border border-zinc-800">
            <p className="text-white">IMDb</p>
            <div className="grid grid-cols-6 gap-1">
              <img src="/star-rounded-red.svg" className="w-5 h-5" />
              <img src="/star-rounded-red.svg" className="w-5 h-5" />
              <img src="/star-rounded-red.svg" className="w-5 h-5" />
              <img src="/star-rounded-red.svg" className="w-5 h-5" />
              <img src="/star-rounded-red.svg" className="w-5 h-5" />
              <p className="text-sm">5</p>
            </div>
          </div>
          <div className="bg-[#141414] hover:bg-zinc-700 px-2 py-2 rounded-xl border border-zinc-800">
            <p className="text-white">Streamvibe</p>
            <div className="grid grid-cols-6 gap-1">
              <img src="/star-rounded-red.svg" className="w-5 h-5" />
              <img src="/star-rounded-red.svg" className="w-5 h-5" />
              <img src="/star-rounded-red.svg" className="w-5 h-5" />
              <img src="/star-rounded-red.svg" className="w-5 h-5" />
              <img src="/star-rounded-red.svg" className="w-5 h-5" />
              <p className="text-sm">5</p>
            </div>
          </div>
        </div>
        <div className="flex gap-2 mt-8">
          <img src="/genres.svg" className="w-5 h-5" />
          <p className="text-zinc-400">Genres</p>
        </div>
        <div className="grid grid-cols-4 gap-2 mt-4">
          <button className="bg-[#141414] hover:bg-zinc-700 px-2 py-2 rounded-full border border-zinc-800 text-white">
            Adventure
          </button>
          <button className="bg-[#141414] hover:bg-zinc-700 px-2 py-2 rounded-full border border-zinc-800 text-white">
            Drama
          </button>
          <button className="bg-[#141414] hover:bg-zinc-700 px-2 py-2 rounded-full border border-zinc-800 text-white">
            Science Fiction
          </button>
        </div>
        <p className="text-zinc-400 mt-8">Director</p>
        <div className="bg-[#141414] hover:bg-zinc-700 px-4 py-4 w-80 rounded-xl border border-zinc-800 flex gap-4 mt-4">
          <div>
            <img
              src={
                'https://media.themoviedb.org/t/p/w300_and_h450_face/xuAIuYSmsUzKlUMBFGVZaWsY3DZ.jpg'
              }
              alt="poster"
              className="rounded-xl w-20 h-25"
            />
          </div>
          <div className="col-span-2">
            <p className="text-white text-xl mt-4">Christofer Nolan</p>
            <p className="text-zinc-400 mt-4">from England</p>
          </div>
        </div>
        <p className="text-zinc-400 mt-8">Writer</p>
        <div className="bg-[#141414] hover:bg-zinc-700 px-4 py-4 w-80 rounded-xl border border-zinc-800 flex gap-4 mt-4">
          <div>
            <img
              src={
                'https://media.themoviedb.org/t/p/w300_and_h450_face/qgTOwfg2B4C0ZFGAP4EnRZ7domo.jpg'
              }
              alt="poster"
              className="rounded-xl w-20 h-25"
            />
          </div>
          <div className="col-span-2">
            <p className="text-white text-xl mt-4">Jonathan Nolan</p>
            <p className="text-zinc-400 mt-4">from England</p>
          </div>
        </div>
      </div>
    </div>
  )
}
