'use client'
import { useState } from 'react'

const plans = {
  Basic: {
    Price: '$9.99/Month',
    Content:
      'Access to a wide selection of movies and shows, including some new releases.',
    Devices: 'Watch on one device simultaneously',
    'Free Trail': '7 Days',
    'Cancel Anytime': 'Yes',
    HDR: 'No',
    'Dolby Atmos': 'No',
    'Ad - Free': 'No',
    'Offline Viewing': 'No',
    'Family Sharing': 'No',
  },
  Standard: {
    Price: '$12.99/Month',
    Content:
      'Access to a wider selection of movies and shows, including most new releases and exclusive content',
    Devices: 'Watch on Two device simultaneously',
    'Free Trail': '7 Days',
    'Cancel Anytime': 'Yes',
    HDR: 'Yes',
    'Dolby Atmos': 'Yes',
    'Ad - Free': 'Yes',
    'Offline Viewing': 'Yes, for select titles.',
    'Family Sharing': 'Yes, up to 5 family members.',
  },
  Premium: {
    Price: '$14.99/Month',
    Content:
      'Access to a widest selection of movies and shows, including all new releases and Offline Viewing',
    Devices: 'Watch on Four device simultaneously',
    'Free Trail': '7 Days',
    'Cancel Anytime': 'Yes',
    HDR: 'Yes',
    'Dolby Atmos': 'Yes',
    'Ad - Free': 'Yes',
    'Offline Viewing': 'Yes, for all titles.',
    'Family Sharing': 'Yes, up to 6 family members.',
  },
}

const features = Object.keys(plans.Basic)

export default function PlansComparison() {
  const [activePlan, setActivePlan] = useState<
    'Basic' | 'Standard' | 'Premium'
  >('Standard')

  return (
    <div className="px-4 md:px-16 py-12 mt-16">
      <h2 className="text-3xl font-bold text-white mb-4">
        Compare our plans and find the right one for you
      </h2>
      <p className="text-zinc-500 mb-8">
        StreamVibe offers three different plans to fit your needs: Basic,
        Standard, and Premium.
      </p>

      <div className="flex md:hidden border border-zinc-800 rounded-xl mb-4">
        {(['Basic', 'Standard', 'Premium'] as const).map((plan) => (
          <button
            key={plan}
            onClick={() => setActivePlan(plan)}
            className={`flex-1 py-2 text-sm rounded-xl ${activePlan === plan ? 'bg-zinc-800 text-white' : 'text-zinc-400'}`}
          >
            {plan}
          </button>
        ))}
      </div>

      <div className="block md:hidden border border-zinc-800 rounded-xl overflow-hidden">
        <div className="grid grid-cols-2 gap-4 p-6">
          {features.map((feature) => (
            <div key={feature}>
              <p className="text-zinc-500 text-sm mb-1">{feature}</p>
              <p className="text-white">
                {plans[activePlan][feature as keyof typeof plans.Basic]}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:block border border-zinc-800 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left bg-[#0F0F0F] text-white py-4 px-6 border border-zinc-800">
                Features
              </th>
              <th className="text-left bg-[#0F0F0F] text-white py-4 px-6 border border-zinc-800">
                Basic
              </th>
              <th className="text-left bg-[#0F0F0F] text-white py-4 px-6 border border-zinc-800">
                Standard
              </th>
              <th className="text-left bg-[#0F0F0F] text-white py-4 px-6 border border-zinc-800">
                Premium
              </th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature) => (
              <tr key={feature}>
                <td className="text-zinc-500 py-4 px-6 border border-zinc-800">
                  {feature}
                </td>
                <td className="text-zinc-500 py-4 px-6 border border-zinc-800">
                  {plans.Basic[feature as keyof typeof plans.Basic]}
                </td>
                <td className="text-zinc-500 py-4 px-6 border border-zinc-800">
                  {plans.Standard[feature as keyof typeof plans.Basic]}
                </td>
                <td className="text-zinc-500 py-4 px-6 border border-zinc-800">
                  {plans.Premium[feature as keyof typeof plans.Basic]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
