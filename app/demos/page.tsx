'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { DEMOS, FILTERS, type DemoFilter } from './_lib/demos-config'

/** Portfolio index: all demos as cards, same dark purple palette as the marketing site. */
export default function DemosPage() {
  const [activeFilter, setActiveFilter] = useState<DemoFilter>('All')

  const filtered = useMemo(() => {
    if (activeFilter === 'All') return [...DEMOS]
    return DEMOS.filter((d) => d.tag === activeFilter)
  }, [activeFilter])

  return (
    <div className="relative min-h-screen overflow-hidden bg-foundry-base text-white">
      {/* Background glows — match main site hero feel */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-blob absolute -left-32 top-20 h-96 w-96 rounded-full bg-purple-600/30 blur-3xl" />
        <div className="animate-blob-slow absolute right-[-120px] top-40 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="animate-blob absolute bottom-1/4 left-1/3 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
        <div className="animate-blob-slow absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-violet-600/25 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-10 sm:px-6 sm:pb-28 sm:pt-14 lg:px-8">
        <header className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-accent"
          >
            <span aria-hidden>←</span> Back to Foundry AI
          </Link>
          <h1 className="mt-8 text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Demo portfolio
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/75 sm:text-xl">
            {DEMOS.length} industry sites — same dark purple system as foundryai.live. Each card opens a full demo
            route.
          </p>
        </header>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:mt-12 sm:gap-3">
          {FILTERS.map((f) => {
            const isActive = activeFilter === f
            return (
              <button
                key={f}
                type="button"
                onClick={() => setActiveFilter(f)}
                className={`rounded-full px-3.5 py-2 text-xs font-bold transition sm:px-4 sm:text-sm ${
                  isActive
                    ? 'bg-accent text-foundry-base shadow-glow'
                    : 'border border-white/15 bg-foundry-section/50 text-white/80 hover:border-violet-400/40 hover:text-white'
                }`}
              >
                {f}
              </button>
            )
          })}
        </div>

        <ul
          className="mt-14 grid list-none grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {filtered.map((demo) => (
            <li key={demo.slug}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-foundry-section/50 shadow-card backdrop-blur-sm transition hover:border-violet-400/35 hover:shadow-glow hover:ring-1 hover:ring-violet-500/25">
                <div
                  className={`relative flex h-36 items-center justify-center bg-gradient-to-br sm:h-40 ${demo.color}`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.12),transparent_55%)]" />
                  <span className="relative text-5xl drop-shadow-lg sm:text-6xl" aria-hidden>
                    {demo.emoji}
                  </span>
                </div>
                <div className="flex flex-1 flex-col border-t border-white/10 bg-foundry-base/40 p-5 sm:p-6">
                  <h2 className="text-lg font-bold text-white sm:text-xl">{demo.name}</h2>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-violet-300/90">
                    {demo.industry}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-md border border-white/15 bg-white/5 px-2 py-0.5 text-xs font-semibold text-white/85">
                      {demo.tag}
                    </span>
                    <span className="rounded-md border border-accent/40 bg-accent/10 px-2 py-0.5 text-xs font-bold text-accent">
                      AI chatbot
                    </span>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65">{demo.desc}</p>
                  <div className="mt-6">
                    <Link
                      href={`/demos/${demo.slug}`}
                      className="inline-flex w-full items-center justify-center rounded-full border-2 border-accent bg-accent/10 py-3 text-sm font-bold text-accent transition hover:bg-accent hover:text-foundry-base"
                    >
                      View Demo
                    </Link>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <section className="relative mt-20 overflow-hidden rounded-3xl border border-violet-500/25 bg-foundry-section/70 px-6 py-12 text-center shadow-card backdrop-blur-md sm:mt-24 sm:px-10 sm:py-16">
          <div className="pointer-events-none absolute inset-0 opacity-90">
            <div className="absolute -right-20 top-0 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
            <div className="absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-purple-600/30 blur-3xl" />
          </div>
          <div className="relative">
            <p className="text-lg font-semibold text-white sm:text-xl">
              Don&apos;t see your industry? We build for any business.
            </p>
            <Link
              href="/#contact"
              className="mt-8 inline-flex justify-center rounded-full bg-accent px-8 py-4 text-base font-bold text-foundry-base shadow-glow transition hover:scale-[1.02] hover:brightness-110"
            >
              Get a Custom Quote
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
