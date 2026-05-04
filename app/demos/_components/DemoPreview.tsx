import Link from 'next/link'
import { demoHeaderIndustryLine, type DemoConfig } from '../_lib/demos-config'
import DemoChatWidget from './DemoChatWidget'
import DemoStickyHeader from './DemoStickyHeader'

export default function DemoPreview({ demo }: { demo: DemoConfig }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-foundry-base pb-24 text-white">
      <DemoStickyHeader
        brandTitle={demo.name}
        industryLine={demoHeaderIndustryLine(demo.industry)}
        menuHref="#menu"
        bookHref="/#contact"
      />
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-blob absolute -left-32 top-20 h-96 w-96 rounded-full bg-purple-600/25 blur-3xl" />
        <div className="animate-blob-slow absolute right-[-100px] top-32 h-80 w-80 rounded-full bg-fuchsia-500/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 pb-20 pt-8 sm:px-6 sm:pt-12">
        <header id="menu" className="mt-6 text-center sm:mt-10">
          <div
            className={`mx-auto flex h-28 w-28 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg sm:h-32 sm:w-32 ${demo.color}`}
          >
            <span className="text-5xl drop-shadow-md sm:text-6xl" aria-hidden>
              {demo.emoji}
            </span>
          </div>
          <p className="mt-6 text-sm font-bold uppercase tracking-widest text-accent">{demo.industry}</p>
          <h1 className="mt-2 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            {demo.name}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/75">{demo.desc}</p>
        </header>

        <div className="mt-12 space-y-4 rounded-2xl border border-white/10 bg-foundry-section/50 p-6 text-center backdrop-blur-sm sm:p-8">
          <p className="text-sm font-semibold text-accent">Demo preview</p>
          <p className="text-sm leading-relaxed text-white/70">
            Full page design and AI chatbot integration ship on the real project. This route is a branded placeholder so
            you can wire navigation and content next.
          </p>
          <Link
            href="/#contact"
            className="mt-4 inline-flex justify-center rounded-full bg-accent px-6 py-3 text-sm font-bold text-foundry-base shadow-glow transition hover:brightness-110"
          >
            Get this built for your business
          </Link>
        </div>
      </div>

      <DemoChatWidget siteName={demo.name} />
    </div>
  )
}
