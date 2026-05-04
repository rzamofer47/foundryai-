'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

type NavItem =
  | { kind: 'route'; href: string; label: string }
  | { kind: 'hash'; href: string; label: string }

const links: NavItem[] = [
  { kind: 'hash', href: '#about', label: 'About' },
  { kind: 'route', href: '/demos', label: 'Ver Portfolio' },
  { kind: 'hash', href: '#services', label: 'Services' },
  { kind: 'hash', href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.removeProperty('overflow')
    }
    return () => {
      document.body.style.removeProperty('overflow')
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-foundry-base/80 backdrop-blur-xl shadow-lg'
          : 'border-b border-transparent bg-foundry-base/40 backdrop-blur-md'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-extrabold tracking-tight text-white sm:text-xl">
          Foundry <span className="text-accent">AI</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href + l.label}>
              {l.kind === 'route' ? (
                <Link
                  href={l.href}
                  className="text-sm font-medium text-white/80 transition-colors hover:text-accent"
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  href={l.href}
                  className="text-sm font-medium text-white/80 transition-colors hover:text-accent"
                >
                  {l.label}
                </a>
              )}
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-foundry-base shadow-glow transition-transform hover:scale-[1.02] hover:brightness-110"
            >
              Get a Free Quote
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/15 md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-0.5 w-5 bg-white transition ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-5 bg-white transition ${open ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-5 bg-white transition ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-foundry-base/95 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-1 px-4 py-4">
            {links.map((l) => (
              <li key={l.href + l.label + 'm'}>
                {l.kind === 'route' ? (
                  <Link
                    href={l.href}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-white/90 hover:bg-white/5 hover:text-accent"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                ) : (
                  <a
                    href={l.href}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-white/90 hover:bg-white/5 hover:text-accent"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                )}
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                className="block rounded-full bg-accent py-3 text-center text-base font-bold text-foundry-base"
                onClick={() => setOpen(false)}
              >
                Get a Free Quote
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
