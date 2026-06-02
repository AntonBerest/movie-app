'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Navbar() {
  const pathname = usePathname()
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-16 py-2 bg-transparent backdrop-blur-sm">
      <div className="text-white font-bold text-xl"> StreamVibe</div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3">
        <ul className="flex gap-2 text-white text-sm list-none">
          <Link
            href="/"
            className={`cursor-pointer px-4 py-2 rounded-lg ${pathname === '/' ? 'bg-zinc-800' : 'hover:bg-zinc-800'}`}
          >
            Home
          </Link>
          <Link
            href="/movies/123"
            className={`cursor-pointer px-4 py-2 rounded-lg ${pathname.startsWith('/movies') ? 'bg-zinc-800' : 'hover:bg-zinc-800'}`}
          >
            Movies & Shows
          </Link>
          <li
            className={`cursor-pointer px-4 py-2 rounded-lg ${pathname === '/support' ? 'bg-zinc-800' : 'hover:bg-zinc-800'}`}
          >
            Support
          </li>
          <li
            className={`cursor-pointer px-4 py-2 rounded-lg ${pathname === '/subscriptions' ? 'bg-zinc-800' : 'hover:bg-zinc-800'}`}
          >
            Subscriptions
          </li>
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
