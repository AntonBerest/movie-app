export default function SupportHero() {
  return (
    <div className="mx-4 md:mx-16 mt-24 px-4 py-4 grid grid-cols-2 gap-4">
      <div>
        <h1 className="text-5xl font-bold mb-4">
          Welcome to our support page!
        </h1>
        <p className="text-zinc-400 max-w-xl mb-8">
          We`re here to help you with any problems you may be having with our
          product.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 bg-[#0F0F0F] border border-zinc-800">
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
        <div>
          <p className="text-white max-w-xl mb-4">Email</p>
          <input
            placeholder="Enter your Email"
            className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white w-full"
          />
        </div>
        <div>
          <p className="text-white max-w-xl mb-4">Phone Number</p>
          <div className="grid grid-cols-2 gap-4">
            <input
              placeholder="Country"
              className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white"
            />
            <input
              placeholder="Enter Last Name"
              className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
