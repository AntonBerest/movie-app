export default function SupportHero() {
  return (
    <div className="mx-4 md:mx-16 mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Welcome to our support page!
        </h1>

        <p className="text-zinc-400 max-w-xl mb-10 text-base md:text-lg">
          We’re here to help you with any problems you may be having with our
          product.
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 border border-zinc-800 rounded-2xl p-3 overflow-hidden">
          {[
            '9PFonBhy4cQy7Jz20NpMygczOkv.jpg',
            '49WJfeN0moxb9IPfGn8AIqMGskD.jpg',
            'uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg',
            'pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
            't6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
            '8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
            'qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg',
            '1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
            'vZloFAK7NmvMGKE7VkF5UHaz0I.jpg',
            '74xTEgt7R36Fpooo50r9T25onhq.jpg',
            'kuf6dutpsT0vSVehic3EZIqkOBt.jpg',
            'gPbM0MK8CP8A174rmUwGsADNYKD.jpg',
          ].map((img) => (
            <img
              key={img}
              src={`https://image.tmdb.org/t/p/w300/${img}`}
              className="
                rounded-xl
                h-30
                w-full
                aspect-[2/3]
                object-cover
              "
            />
          ))}
        </div>
      </div>

      <div className="bg-[#0F0F0F] border border-zinc-800 rounded-2xl p-6 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-3">First Name</label>

            <input
              placeholder="Enter First Name"
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4"
            />
          </div>

          <div>
            <label className="block mb-3">Last Name</label>

            <input
              placeholder="Enter Last Name"
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4"
            />
          </div>

          <div>
            <label className="block mb-3">Email</label>

            <input
              placeholder="Enter your Email"
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4"
            />
          </div>

          <div className="grid grid-cols-[90px_1fr] gap-3">
            <input
              placeholder="En"
              className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-4"
            />

            <input
              placeholder="Enter Phone Number"
              className="bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4 w-full"
            />
          </div>
        </div>

        <div className="mt-8">
          <label className="block mb-3">Message</label>

          <textarea
            placeholder="Enter your Message"
            className="
              w-full
              h-40
              resize-none
              bg-zinc-900
              border
              border-zinc-800
              rounded-xl
              px-5
              py-4
            "
          />
        </div>

        {/* checkbox */}

        <label className="flex items-start gap-3 mt-8 cursor-pointer">
          <input
            type="checkbox"
            className="
              w-5
              h-5
              mt-1
              accent-red-600
            "
          />

          <span className="text-zinc-300">
            I agree with Terms of Use and Privacy Policy
          </span>
        </label>

        <button
          className="
            mt-8
            w-full
            bg-red-600
            hover:bg-red-700
            transition
            rounded-xl
            py-4
            font-semibold
          "
        >
          Send Message
        </button>
      </div>
    </div>
  )
}
