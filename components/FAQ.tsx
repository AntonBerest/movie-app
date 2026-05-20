'use client'
import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="px-4 md:px-16 py-12">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-4 text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-zinc-400 mb-8">
            Got questions? We`ve got answers! Check out our FAQ section to find
            answers to the most common questions about StreamVibe.
          </p>
        </div>

        <div className="bg-zinc-900 gap-2 flex items-center rounded-lg">
          <button className="bg-red-700 text-white rounded-lg px-4 py-2">
            Ask a Question
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="border border-zinc-800 rounded-xl p-6 self-start">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggle(1)}
          >
            <div className="flex gap-4">
              <span className="text-zinc-500">01</span>
              <span className="text-white">What is StreamVibe?</span>
            </div>
            <button className="text-white">
              {openIndex === 1 ? '−' : '+'}
            </button>
          </div>

          {openIndex === 1 && (
            <p className="text-zinc-400 mt-4">
              StreamVibe is a streaming service that allows you to watch movies
              and shows on demand.
            </p>
          )}
        </div>

        <div className="border border-zinc-800 rounded-xl p-6 self-start">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggle(2)}
          >
            <div className="flex gap-4">
              <span className="text-zinc-500">02</span>
              <span className="text-white">How much does StreamVibe cost?</span>
            </div>
            <button className="text-white">
              {openIndex === 2 ? '−' : '+'}
            </button>
          </div>

          {openIndex === 2 && (
            <p className="text-zinc-400 mt-4">
              StreamVibe is a streaming service that allows you to watch movies
              and shows on demand.
            </p>
          )}
        </div>

        <div className="border border-zinc-800 rounded-xl p-6 self-start">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggle(3)}
          >
            <div className="flex gap-4">
              <span className="text-zinc-500">03</span>
              <span className="text-white">
                What content is available on StreamVibe?
              </span>
            </div>
            <button className="text-white">
              {openIndex === 3 ? '−' : '+'}
            </button>
          </div>

          {openIndex === 3 && (
            <p className="text-zinc-400 mt-4">
              StreamVibe is a streaming service that allows you to watch movies
              and shows on demand.
            </p>
          )}
        </div>

        <div className="border border-zinc-800 rounded-xl p-6 self-start">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggle(4)}
          >
            <div className="flex gap-4">
              <span className="text-zinc-500">04</span>
              <span className="text-white">How can I watch StreamVibe?</span>
            </div>
            <button className="text-white">
              {openIndex === 4 ? '−' : '+'}
            </button>
          </div>

          {openIndex === 4 && (
            <p className="text-zinc-400 mt-4">
              StreamVibe is a streaming service that allows you to watch movies
              and shows on demand.
            </p>
          )}
        </div>

        <div className="border border-zinc-800 rounded-xl p-6 self-start">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggle(5)}
          >
            <div className="flex gap-4">
              <span className="text-zinc-500">05</span>
              <span className="text-white">
                How do I sign up for StreamVibe?
              </span>
            </div>
            <button className="text-white">
              {openIndex === 5 ? '−' : '+'}
            </button>
          </div>

          {openIndex === 5 && (
            <p className="text-zinc-400 mt-4">
              StreamVibe is a streaming service that allows you to watch movies
              and shows on demand.
            </p>
          )}
        </div>

        <div className="border border-zinc-800 rounded-xl p-6 self-start">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggle(6)}
          >
            <div className="flex gap-4">
              <span className="text-zinc-500">06</span>
              <span className="text-white">
                What is the StreamVibe free trial?
              </span>
            </div>
            <button className="text-white">
              {openIndex === 6 ? '−' : '+'}
            </button>
          </div>

          {openIndex === 6 && (
            <p className="text-zinc-400 mt-4">
              StreamVibe is a streaming service that allows you to watch movies
              and shows on demand.
            </p>
          )}
        </div>

        <div className="border border-zinc-800 rounded-xl p-6 self-start">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggle(7)}
          >
            <div className="flex gap-4">
              <span className="text-zinc-500">07</span>
              <span className="text-white">
                How do I contact StreamVibe customer support?
              </span>
            </div>
            <button className="text-white">
              {openIndex === 7 ? '−' : '+'}
            </button>
          </div>

          {openIndex === 7 && (
            <p className="text-zinc-400 mt-4">
              StreamVibe is a streaming service that allows you to watch movies
              and shows on demand.
            </p>
          )}
        </div>

        <div className="border border-zinc-800 rounded-xl p-6 self-start">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggle(8)}
          >
            <div className="flex gap-4">
              <span className="text-zinc-500">08</span>
              <span className="text-white">
                What are the StreamVibe payment methods?
              </span>
            </div>
            <button className="text-white">
              {openIndex === 8 ? '−' : '+'}
            </button>
          </div>

          {openIndex === 8 && (
            <p className="text-zinc-400 mt-4">
              StreamVibe is a streaming service that allows you to watch movies
              and shows on demand.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
