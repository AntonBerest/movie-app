const posters = [
  'https://image.tmdb.org/t/p/w300/9PFonBhy4cQy7Jz20NpMygczOkv.jpg',
  'https://image.tmdb.org/t/p/w300/49WJfeN0moxb9IPfGn8AIqMGskD.jpg',
  'https://image.tmdb.org/t/p/w300/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg',
  'https://image.tmdb.org/t/p/w300/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
  'https://image.tmdb.org/t/p/w300/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
  'https://image.tmdb.org/t/p/w300/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
  'https://image.tmdb.org/t/p/w300/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg',
  'https://image.tmdb.org/t/p/w300/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
  'https://image.tmdb.org/t/p/w300/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg',
  'https://www.themoviedb.org/t/p/w600_and_h900_face/fWVSwgjpT2D78VUh6X8UBd2rorW.jpg',
  'https://image.tmdb.org/t/p/w300/74xTEgt7R36Fpooo50r9T25onhq.jpg',
  'https://image.tmdb.org/t/p/w300/kuf6dutpsT0vSVehic3EZIqkOBt.jpg',
  'https://image.tmdb.org/t/p/w300/gPbM0MK8CP8A174rmUwGsADNYKD.jpg',
  'https://image.tmdb.org/t/p/w300/fiVW06jE7z9YnO4trhaMEdclSiC.jpg',
  'https://image.tmdb.org/t/p/w300/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg',
  'https://image.tmdb.org/t/p/w300/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
  'https://www.themoviedb.org/t/p/w600_and_h900_face/buPFnHZ3xQy6vZEHxbHgL1Pc6CR.jpg',
  'https://www.themoviedb.org/t/p/w600_and_h900_face/xFpBNcG3Dlr8mYF5Kz9Tizs3Pxn.jpg',
]

export default function CTABanner() {
  return (
    <div className="relative mx-16 my-12 rounded-xl overflow-hidden h-150">
      <div className="grid grid-cols-9 grid-rows-2 gap-2 h-full">
        {posters.map((url, index) => (
          <img
            key={index}
            src={url}
            alt="poster"
            className="w-full h-full object-cover rounded-xl"
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

      <div className="absolute inset-0 flex justify-between items-center px-16">
        <div>
          <h1 className="text-4xl font-bold mb-4 text-white">
            Start your free trial today!
          </h1>
          <p className="text-zinc-400 mb-8">
            This is a clear and concise call to action that encourages users to
            sign up for a free trial of StreamVibe.
          </p>
        </div>

        <div>
          <button className="bg-red-700 text-white rounded-lg px-4 py-2">
            Start a Free Trail
          </button>
        </div>
      </div>
    </div>
  )
}
