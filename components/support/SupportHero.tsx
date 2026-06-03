export default function SupportHero() {
  return (
    <div className="mx-4 md:mx-16 mt-24 grid grid-cols-2 gap-4">
      <div>
        <h1 className="text-5xl font-bold mb-4">
          Welcome to our support page!
        </h1>
        <p className="text-zinc-400 max-w-xl mb-8">
          We`re here to help you with any problems you may be having with our
          product.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <input
          placeholder="Enter First Name"
          className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white"
        />
        <input placeholder="Enter Last Name" className="..." />
      </div>
    </div>
  )
}
