'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '/', label: 'Home' },
    { href: '/movies/123', label: 'Movies & Shows' },
    { href: '/support', label: 'Support' },
    { href: '/subscriptions', label: 'Subscriptions' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-16 py-2 bg-transparent backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <div className="text-white font-bold text-xl">StreamVibe</div>

        <div className="hidden md:block bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3">
          <ul className="flex gap-2 text-white text-sm list-none">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`cursor-pointer px-4 py-2 rounded-lg ${pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href)) ? 'bg-zinc-800' : 'hover:bg-zinc-800'}`}
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:block text-white hover:text-red-500">
            <img src="/search.svg" className="w-5 h-5" />
          </button>
          <button className="hidden md:block text-white hover:text-red-500">
            <img src="/bell.svg" className="w-5 h-5" />
          </button>
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-2 bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex flex-col gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-white px-4 py-3 rounded-lg ${pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href)) ? 'bg-zinc-800' : 'hover:bg-zinc-800'}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
