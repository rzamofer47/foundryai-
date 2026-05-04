import Link from 'next/link'

const projects = [
  {
    name: 'Bella & Co.',
    tag: 'Beauty Salon',
    gradient: 'from-fuchsia-600/40 via-purple-600/30 to-accent/20',
    href: '/demos/salon-belleza',
  },
  {
    name: 'La Brasa',
    tag: 'Latin Restaurant',
    gradient: 'from-orange-600/35 via-rose-600/25 to-foundry-section',
    href: '/demos/restaurante-latino',
  },
  {
    name: 'BrightSmile',
    tag: 'Dental Clinic',
    gradient: 'from-cyan-500/30 via-blue-600/25 to-indigo-900/40',
    href: '/demos/clinica-dental',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="border-b border-white/5 bg-foundry-section py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">Recent Work</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
            Demo experiences tailored to Hamilton-style small businesses — same quality we ship for paying clients.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-foundry-base/40 shadow-card transition hover:border-accent/40"
            >
              <div className={`relative h-48 bg-gradient-to-br ${p.gradient}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_50%)]" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-white">{p.name}</h3>
                <p className="mt-1 text-sm font-medium text-accent/90">{p.tag}</p>
                <Link
                  href={p.href}
                  className="mt-6 inline-flex justify-center rounded-full border border-white/20 py-3 text-sm font-bold text-white transition group-hover:border-accent group-hover:bg-accent/10 group-hover:text-accent"
                >
                  View Demo
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/demos"
            className="inline-flex items-center gap-2 text-sm font-bold text-accent transition hover:gap-3"
          >
            View all demos <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
