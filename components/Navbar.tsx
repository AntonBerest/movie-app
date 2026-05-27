export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-16 py-5 bg-black/80 backdrop-blur-sm">
      <div className="text-red-500 font-bold text-xl"> StreamVibe</div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-xl px-2 py-1">
        <ul className="hidden md:flex gap-8 text-white text-sm list-none">
          <li className="cursor-pointer hover:text-red-500">Home</li>
          <li className="cursor-pointer hover:text-red-500">Movies & Shows</li>
          <li className="cursor-pointer hover:text-red-500">Support</li>
          <li className="cursor-pointer hover:text-red-500">Subscriptions</li>
        </ul>
      </div>

      <div className="hidden md:flex gap-4">
        <button className="text-white hover:text-red-500">
          <img src="/search.svg" className="w-5 h-5" />
        </button>
        <button className="text-white hover:text-red-500">
          <img src="/bell.svg" className="w-5 h-5" />
        </button>
      </div>
    </nav>
  )
}
