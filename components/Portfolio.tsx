import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    name: 'Bella & Co.',
    tag: 'Beauty salon',
    href: '/demos/salon-belleza',
    imageSrc: '/demos/salon-belleza/hero-salon.png',
    imageAlt: 'Bella & Co. beauty salon demo preview',
  },
  {
    name: 'La Brasa',
    tag: 'Latin restaurant',
    href: '/demos/restaurante-latino',
    imageSrc: '/demos/restaurante-latino/hero-menu.png',
    imageAlt: 'La Brasa restaurant demo preview',
  },
  {
    name: 'Bright Smile',
    tag: 'Dental clinic',
    href: '/demos/clinica-dental',
    imageSrc: '/demos/clinica-dental/hero-dental.png',
    imageAlt: 'Bright Smile dental clinic demo preview',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="border-b border-white/5 bg-foundry-section py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Design your own website
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">We build it for you.</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <Link
              key={p.name}
              href={p.href}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-foundry-base/40 shadow-card transition hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-foundry-section"
            >
              <article className="flex h-full flex-col">
                <div className="relative h-48 w-full overflow-hidden bg-foundry-section">
                  <Image
                    src={p.imageSrc}
                    alt={p.imageAlt}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    unoptimized
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foundry-base/80 via-transparent to-black/15" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-white">{p.name}</h3>
                  <p className="mt-1 text-sm font-medium text-accent/90 capitalize">{p.tag}</p>
                  <span className="mt-6 inline-flex justify-center rounded-full border border-white/20 py-3 text-sm font-bold text-white transition group-hover:border-accent group-hover:bg-accent/10 group-hover:text-accent">
                    View Demo
                  </span>
                </div>
              </article>
            </Link>
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
