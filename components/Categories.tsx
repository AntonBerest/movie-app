'use client'
import { useState } from 'react'

export default function Categories() {
  const categories = [
    {
      name: 'Action',
      posters: [
        'https://www.themoviedb.org/t/p/w600_and_h900_face/iQ5ztdjvteGeboxtmRdXEChJOHh.jpg',
        'https://www.themoviedb.org/t/p/w600_and_h900_face/buPFnHZ3xQy6vZEHxbHgL1Pc6CR.jpg',
        'https://www.themoviedb.org/t/p/w600_and_h900_face/aOIuZAjPaRIE6CMzbazvcHuHXDc.jpg',
        'https://www.themoviedb.org/t/p/w600_and_h900_face/n0YuM4f5lvGAP6MAW2kBIzugXnc.jpg',
      ],
    },
    {
      name: 'Adventure',
      posters: [
        'https://www.themoviedb.org/t/p/w600_and_h900_face/38C91I7Xft0gyY7BITm8i4yvuRb.jpg',
        'https://www.themoviedb.org/t/p/w600_and_h900_face/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg',
        'https://www.themoviedb.org/t/p/w600_and_h900_face/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg',
        'https://www.themoviedb.org/t/p/w600_and_h900_face/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg',
      ],
    },
    {
      name: 'Comedy',
      posters: [
        'https://www.themoviedb.org/t/p/w600_and_h900_face/fnOMP6mjmOmZwmlC1n0K7ivrzt1.jpg',
        'https://www.themoviedb.org/t/p/w600_and_h900_face/7BsvSuDQuoqhWmU2fL7W2GOcZHU.jpg',
        'https://www.themoviedb.org/t/p/w600_and_h900_face/1QU7HKgsQbGpzsJbJK4pAVQV9F5.jpg',
        'https://www.themoviedb.org/t/p/w600_and_h900_face/fVQFPRuw3yWXojYDJvA5EoFjUOY.jpg',
      ],
    },
    {
      name: 'Drama',
      posters: [
        'https://www.themoviedb.org/t/p/w600_and_h900_face/fnOMP6mjmOmZwmlC1n0K7ivrzt1.jpg',
        'https://www.themoviedb.org/t/p/w600_and_h900_face/7BsvSuDQuoqhWmU2fL7W2GOcZHU.jpg',
        'https://www.themoviedb.org/t/p/w600_and_h900_face/tuFaWiqX0TXoWu7DGNcmX3UW7sT.jpg',
        'https://www.themoviedb.org/t/p/w600_and_h900_face/rNaBe4TwbMef71sgscqabpGKsxh.jpg',
      ],
    },
    {
      name: 'Horror',
      posters: [
        'https://www.themoviedb.org/t/p/w600_and_h900_face/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg',
        'https://www.themoviedb.org/t/p/w600_and_h900_face/mjkS2iAgWj3ik1DTjvI15nHZ7yl.jpg',
        'https://www.themoviedb.org/t/p/w600_and_h900_face/kK1BGkG3KAvWB0WMV1DfOx9yTMZ.jpg',
        'https://www.themoviedb.org/t/p/w600_and_h900_face/vNVFt6dtcqnI7hqa6LFBUibuFiw.jpg',
      ],
    },
    {
      name: 'Sci-Fi',
      posters: [
        'https://www.themoviedb.org/t/p/w600_and_h900_face/aOIuZAjPaRIE6CMzbazvcHuHXDc.jpg',
        'https://www.themoviedb.org/t/p/w600_and_h900_face/z2tqCJLsw6uEJ8nJV8BsQXGa3dr.jpg',
        'https://www.themoviedb.org/t/p/w600_and_h900_face/1RICxzeoNCAO5NpcRMIgg1XT6fm.jpg',
        'https://www.themoviedb.org/t/p/w600_and_h900_face/gDzOcq0pfeCeqMBwKIJlSmQpjkZ.jpg',
      ],
    },
    {
      name: 'Romance',
      posters: [
        'https://www.themoviedb.org/t/p/w600_and_h900_face/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg',
        'https://www.themoviedb.org/t/p/w600_and_h900_face/3Gkb6jm6962ADUPaCBqzz9CTbn9.jpg',
        'https://www.themoviedb.org/t/p/w600_and_h900_face/mdRXSE7ho185SZlXj0JSwuecEd3.jpg',
        'https://www.themoviedb.org/t/p/w600_and_h900_face/7iMBZzVZtG0oBug4TfqDb9ZxAOa.jpg',
      ],
    },
  ]

  const [page, setPage] = useState(0)
  const perPage = 5
  const visible = categories.slice(page * perPage, page * perPage + perPage)

  return (
    <div className="px-4 md:px-16 py-12">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-4 text-white">
            Explore our wide variety of categories
          </h1>
          <p className="text-zinc-400 mb-8">
            Whether you`re looking for a comedy to make you laugh, a drama to
            make you think, or a documentary to learn something new
          </p>
        </div>

        <div className="flex items-center gap-2 bg-zinc-900 p-2 rounded-lg">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 0}
            className="bg-zinc-800 text-white px-4 py-2 rounded-lg hover:bg-zinc-700 disabled:opacity-30"
          >
            ←
          </button>

          {/* Индикатор страниц */}
          <div className="flex gap-1 px-2">
            {Array.from({ length: Math.ceil(categories.length / perPage) }).map(
              (_, i) => (
                <div
                  key={i}
                  className={`h-1 w-6 rounded-full ${i === page ? 'bg-red-600' : 'bg-zinc-700'}`}
                />
              )
            )}
          </div>

          <button
            onClick={() => setPage(page + 1)}
            disabled={page * perPage + perPage >= categories.length}
            className="bg-zinc-800 text-white px-4 py-2 rounded-lg hover:bg-zinc-700 disabled:opacity-30"
          >
            →
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-6">
        {visible.map((category, index) => (
          <div key={index} className="bg-zinc-900 rounded-xl p-4">
            <div className="grid grid-cols-2 gap-1 mb-4">
              {category.posters.map((url, i) => (
                <img
                  key={i}
                  src={url}
                  className="rounded-lg w-full h-28 object-cover"
                />
              ))}
            </div>
            <div className="flex justify-between text-white">
              <span>{category.name}</span>
              <span>→</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
