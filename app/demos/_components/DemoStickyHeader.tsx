'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export type DemoStickyHeaderProps = {
  /** Brand line, e.g. "La Brasa" or "Bella & Co." — shown uppercase in gold tone */
  brandTitle: string
  /** Second line, e.g. "LATIN KITCHEN • HAMILTON" */
  industryLine: string
  /** In-page anchor for Menu (default #menu) */
  menuHref?: string
  /** Book CTA — default site contact */
  bookHref?: string
}

/**
 * Shared demo chrome: dark bar, gold brand, white tagline, English nav
 * (View all demos · foundryai.live · Menu · Book).
 */
export default function DemoStickyHeader({
  brandTitle,
  industryLine,
  menuHref = '#menu',
  bookHref = '/#contact',
}: DemoStickyHeaderProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.removeProperty('overflow')
    }
  }, [open])

  const linkClass =
    'text-[13px] font-bold uppercase tracking-wide text-stone-300 transition hover:text-[#e8c4a0] sm:text-sm'

  return (
    <header className="sticky top-0 z-[60] border-b border-white/10 bg-[#0f0c0b]/95 backdrop-blur-md">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <div className="min-w-0 flex-1">
          <p className="truncate font-sans text-xl font-black uppercase leading-tight tracking-tight text-[#c9a66c] sm:text-2xl">
            {brandTitle}
          </p>
          <p className="mt-0.5 truncate font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-stone-200/95 sm:text-[11px] sm:tracking-[0.28em]">
            {industryLine}
          </p>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/15 md:hidden"
          aria-expanded={open}
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-0.5 w-5 bg-stone-200 transition ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-5 bg-stone-200 transition ${open ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-5 bg-stone-200 transition ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>

        <nav
          className={`absolute left-0 right-0 top-full z-50 flex-col gap-1 border-b border-white/10 bg-[#0f0c0b]/98 px-4 py-3 md:relative md:top-auto md:flex md:flex-row md:items-center md:gap-6 md:border-0 md:bg-transparent md:px-0 md:py-0 ${
            open ? 'flex' : 'hidden md:flex'
          }`}
        >
          <Link href="/demos" className={`${linkClass} block py-2 md:py-0`} onClick={() => setOpen(false)}>
            View all demos
          </Link>
          <Link href="/" className={`${linkClass} block py-2 md:py-0`} onClick={() => setOpen(false)}>
            foundryai.live
          </Link>
          <a href={menuHref} className={`${linkClass} block py-2 md:py-0`} onClick={() => setOpen(false)}>
            Menu
          </a>
          <a href={bookHref} className={`${linkClass} block py-2 md:py-0`} onClick={() => setOpen(false)}>
            Book
          </a>
        </nav>
      </div>
    </header>
  )
}
