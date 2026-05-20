'use client'
import { useState } from 'react'

export default function Plans() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <div className="px-4 md:px-16 py-12 ">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-4 text-white">
            Choose the plan that`s right for you
          </h1>
          <p className="text-zinc-400 mb-8">
            Join StreamVibe and select from our flexible subscription options
            tailored to suit your viewing preferences. Get ready for non-stop
            entertainment!
          </p>
        </div>

        <div className="flex bg-neutral-950 rounded-lg p-1">
          <button
            onClick={() => setIsYearly(false)}
            className={`px-4 py-2 rounded-lg text-sm ${!isYearly ? 'bg-zinc-900 text-white' : 'text-zinc-400'}`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsYearly(true)}
            className={`px-4 py-2 rounded-lg text-sm ${isYearly ? 'bg-zinc-900 text-white' : 'text-zinc-400'}`}
          >
            Yearly
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
          <h1 className="text-xl font-bold mb-4 text-white">Basic Plan</h1>
          <p className="text-zinc-400 mb-8">
            Enjoy an extensive library of movies and shows, featuring a range of
            content, including recently released titles.
          </p>

          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-white">
              {isYearly ? '$99.99' : '$9.99'}
            </span>
            <span className="text-zinc-400 text-sm">
              {isYearly ? '/year' : '/month'}
            </span>
          </div>

          <div className="flex justify-between mb-10">
            <button className="bg-neutral-900 text-white font-bold border border-zinc-800 px-4 py-2 rounded-lg">
              Start Free Trial
            </button>
            <button className="bg-red-700 text-white font-bold border border-zinc-800 px-4 py-2 rounded-lg">
              Choose Plan
            </button>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
          <h1 className="text-xl font-bold mb-4 text-white">Standard Plan</h1>
          <p className="text-zinc-400 mb-8">
            Access to a wider selection of movies and shows, including most new
            releases and exclusive content
          </p>

          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-white">
              {isYearly ? '$119.99' : '$12.99'}
            </span>
            <span className="text-zinc-400 text-sm">
              {isYearly ? '/year' : '/month'}
            </span>
          </div>

          <div className="flex justify-between">
            <button className="bg-neutral-900 text-white font-bold border border-zinc-800 px-4 py-2 rounded-lg">
              Start Free Trial
            </button>
            <button className="bg-red-700 text-white font-bold border border-zinc-800 px-4 py-2 rounded-lg">
              Choose Plan
            </button>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
          <h1 className="text-xl font-bold mb-4 text-white">Premium Plan</h1>
          <p className="text-zinc-400 mb-8">
            Access to a widest selection of movies and shows, including all new
            releases and Offline Viewing
          </p>

          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-white">
              {isYearly ? '$149.99' : '$14.99'}
            </span>
            <span className="text-zinc-400 text-sm">
              {isYearly ? '/year' : '/month'}
            </span>
          </div>

          <div className="flex justify-between">
            <button className="bg-neutral-900 text-white font-bold border border-zinc-800 px-4 py-2 rounded-lg">
              Start Free Trial
            </button>
            <button className="bg-red-700 text-white font-bold border border-zinc-800 px-4 py-2 rounded-lg">
              Choose Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
