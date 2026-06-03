export default function SupportHero() {
  return (
    <div className="mx-4 md:mx-16 mt-24 grid grid-cols-2 gap-4 ">
      <div>
        <h1 className="text-5xl font-bold mb-4">
          Welcome to our support page!
        </h1>
        <p className="text-zinc-400 max-w-xl mb-8">
          We`re here to help you with any problems you may be having with our
          product.
        </p>
        <div className="grid grid-cols-4 gap-2 mt-6 border-2 border-zinc-800">
          <img
            src="https://image.tmdb.org/t/p/w300/9PFonBhy4cQy7Jz20NpMygczOkv.jpg"
            className="rounded-lg w-full h-20 object-cover"
          />
          <img
            src="https://image.tmdb.org/t/p/w300/49WJfeN0moxb9IPfGn8AIqMGskD.jpg"
            className="rounded-lg w-full h-20 object-cover"
          />
          <img
            src="https://image.tmdb.org/t/p/w300/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg"
            className="rounded-lg w-full h-20 object-cover"
          />
          <img
            src="https://image.tmdb.org/t/p/w300/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg"
            className="rounded-lg w-full h-20 object-cover"
          />
          <img
            src="https://image.tmdb.org/t/p/w300/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg"
            className="rounded-lg w-full h-20 object-cover"
          />
          <img
            src="https://image.tmdb.org/t/p/w300/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg"
            className="rounded-lg w-full h-20 object-cover"
          />
          <img
            src="https://image.tmdb.org/t/p/w300/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg"
            className="rounded-lg w-full h-20 object-cover"
          />
          <img
            src="https://image.tmdb.org/t/p/w300/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
            className="rounded-lg w-full h-20 object-cover"
          />
          <img
            src="https://image.tmdb.org/t/p/w300/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg"
            className="rounded-lg w-full h-20 object-cover"
          />
          <img
            src="https://www.themoviedb.org/t/p/w600_and_h900_face/fWVSwgjpT2D78VUh6X8UBd2rorW.jpg"
            className="rounded-lg w-full h-20 object-cover"
          />
          <img
            src="https://image.tmdb.org/t/p/w300/74xTEgt7R36Fpooo50r9T25onhq.jpg"
            className="rounded-lg w-full h-20 object-cover"
          />
          <img
            src="https://image.tmdb.org/t/p/w300/kuf6dutpsT0vSVehic3EZIqkOBt.jpg"
            className="rounded-lg w-full h-20 object-cover"
          />
        </div>
      </div>
      <div className="px-2 py-2 md:px-8 md:py-8 bg-[#0F0F0F] border border-zinc-800 rounded-xl">
        <div className="grid grid-cols-2 gap-4 ">
          <div>
            <p className="text-white max-w-xl mb-4">First Name</p>
            <input
              placeholder="Enter First Name"
              className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white w-full"
            />
          </div>
          <div>
            <p className="text-white max-w-xl mb-4">Last Name</p>
            <input
              className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white w-full"
              placeholder="Enter Last Name"
            />
          </div>
          <div className="mt-6">
            <p className="text-white max-w-xl mb-4">Email</p>
            <input
              placeholder="Enter your Email"
              className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white w-full"
            />
          </div>
          <div className="mt-6">
            <p className="text-white max-w-xl mb-4">Phone Number</p>
            <div className="grid grid-cols-2 gap-4">
              <input
                placeholder="Country"
                className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white"
              />
              <input
                placeholder="Enter Phone Number"
                className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white w-full"
              />
            </div>
          </div>
        </div>
        <div className="mt-6">
          <label className="text-white text-sm mb-2 block">Message</label>
          <textarea
            placeholder="Enter your Message"
            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white h-32 resize-none"
          />
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2 mt-6">
            <label>
              <input type="checkbox" id="TermsOfUse" className="mr-2" />I agree
              with Terms of Use and Privacy Policy
            </label>
          </div>
          <div className="mt-6">
            <button className="bg-red-700 text-white rounded-lg px-1 md:px-4 py-2 ">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
