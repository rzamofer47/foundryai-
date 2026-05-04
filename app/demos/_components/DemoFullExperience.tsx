import Link from 'next/link'
import { demoHeaderIndustryLine, type DemoConfig } from '../_lib/demos-config'
import DemoChatWidget from './DemoChatWidget'
import DemoStickyHeader from './DemoStickyHeader'

/** Full demo: sample landing + chatbot (salon-style). */
export default function DemoFullExperience({ demo }: { demo: DemoConfig }) {
  return (
    <div className="relative min-h-screen bg-foundry-base pb-28 text-white">
      <DemoStickyHeader
        brandTitle={demo.name}
        industryLine={demoHeaderIndustryLine(demo.industry)}
        menuHref="#services"
        bookHref="/#contact"
      />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-fuchsia-600/20 blur-3xl" />
        <div className="absolute bottom-20 right-0 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
      </div>

      <section className={`relative px-4 pb-16 pt-12 sm:px-6 sm:pt-16`}>
        <div
          className={`mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br p-10 text-center shadow-card sm:p-14 ${demo.color}`}
        >
          <p className="text-sm font-bold uppercase tracking-widest text-white/90">{demo.industry}</p>
          <h1 className="mt-3 text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Style that makes you feel {demo.emoji}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/90">{demo.desc}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-bold text-white backdrop-blur">
              Book online
            </span>
            <span className="rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-bold text-white backdrop-blur">
              AI in English & Spanish
            </span>
          </div>
        </div>
      </section>

      <section id="services" className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-center text-2xl font-extrabold sm:text-3xl">Services</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {['Cut & styling', 'Color', 'Treatments'].map((title) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-foundry-section/60 p-6 text-center shadow-card backdrop-blur-sm"
            >
              <h3 className="font-bold text-accent">{title}</h3>
              <p className="mt-2 text-sm text-white/65">
                Service card demo — in production we link real pricing and booking.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <blockquote className="rounded-2xl border border-violet-500/30 bg-foundry-section/50 p-8 text-center backdrop-blur-sm">
          <p className="text-lg italic text-white/85">
            &ldquo;The new site brings more bookings via WhatsApp and the chatbot covers the basics 24/7.&rdquo;
          </p>
          <footer className="mt-4 text-sm font-semibold text-accent">— Demo client, Hamilton</footer>
        </blockquote>
      </section>

      <section className="relative mx-auto mt-16 max-w-lg px-4 text-center sm:px-6">
        <Link
          href="/#contact"
          className="inline-flex w-full justify-center rounded-full bg-accent py-4 text-base font-bold text-foundry-base shadow-glow transition hover:brightness-110"
        >
          I want a site like this
        </Link>
        <p className="mt-4 text-xs text-white/45">
          Chatbot uses simulated replies for this demo. In production we connect to your CRM or calendar.
        </p>
      </section>

      <DemoChatWidget siteName={demo.name} />
    </div>
  )
}
