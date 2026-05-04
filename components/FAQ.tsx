'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'How long does a website take?',
    a: 'Most Starter and Growth sites go live in 7 to 14 days once we have your content and branding direction. Custom scopes may take longer, but you will always get a dated timeline before we start.',
  },
  {
    q: 'Do I need to provide content and photos?',
    a: 'Yes — you know your business best. We guide you with a simple questionnaire and can recommend local photographers if you need fresh imagery. We polish and structure everything for the web.',
  },
  {
    q: 'Do you offer ongoing maintenance?',
    a: 'Optional care plans cover security updates, small content edits, analytics check-ins, and chatbot tuning so your site stays fast and accurate as your business evolves.',
  },
  {
    q: 'What if I already have a website?',
    a: 'We can redesign on a fresh codebase for speed and clarity, or selectively refresh key pages. We will audit what you have and recommend the leanest path forward.',
  },
  {
    q: 'Do you work with clients outside Hamilton?',
    a: 'Absolutely. We are Hamilton-based but work remotely across Ontario and beyond. Same process: discovery call, fixed quote, and launch support.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="border-b border-white/5 bg-foundry-section py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">FAQ</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">Straight answers before you book a call.</p>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-xl border border-white/10 bg-foundry-base/60"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-white transition hover:bg-white/5"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  {item.q}
                  <span className={`text-accent transition ${isOpen ? 'rotate-180' : ''}`} aria-hidden>
                    ▼
                  </span>
                </button>
                {isOpen && (
                  <div className="border-t border-white/5">
                    <p className="px-5 pb-4 pt-4 text-sm leading-relaxed text-white/70">{item.a}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
