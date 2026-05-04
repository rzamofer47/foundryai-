import { estrategiaATiers } from '@/lib/estrategia-a-pricing'

const tiers = [
  {
    icon: '🚀',
    name: 'Starter Website',
    priceHint: estrategiaATiers[0].hint,
    desc: 'Perfect if you need a sharp one-page presence: hero, services, testimonials, map, and contact — built to convert local searches into calls.',
  },
  {
    icon: '📈',
    name: 'Growth Website',
    priceHint: estrategiaATiers[1].hint,
    desc: 'Up to 5 pages with structured content, SEO-friendly layout, and an AI chatbot trained on your business so visitors get answers even when you are closed.',
  },
  {
    icon: '✨',
    name: 'Monthly maintenance',
    priceHint: estrategiaATiers[2].hint,
    desc: 'Hosting, updates, and support — same add-on as in our pricing card below. Need something bigger? Ask us for a custom scope.',
  },
]

export default function Services() {
  return (
    <section id="services" className="border-b border-white/5 bg-foundry-section py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">What We Do</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
            One core service: custom web design and development for Hamilton-area businesses that want to look
            credible online and win more customers.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className="group flex flex-col rounded-2xl border border-white/10 bg-foundry-base/60 p-6 shadow-card backdrop-blur-sm transition hover:border-accent/40 hover:shadow-glow"
            >
              <div className="text-3xl">{tier.icon}</div>
              <h3 className="mt-4 text-xl font-bold text-white">{tier.name}</h3>
              <p className="mt-1.5 text-xs font-semibold tracking-wide text-violet-300 sm:text-sm">{tier.priceHint}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-white/70">{tier.desc}</p>
              <a
                href="#contact"
                className="mt-6 inline-flex justify-center rounded-full border border-accent/50 bg-accent/10 py-3 text-sm font-bold text-accent transition group-hover:bg-accent group-hover:text-foundry-base"
              >
                Get a Quote
              </a>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-white/55">
          All websites are custom designed — no WordPress, no templates.
        </p>
      </div>
    </section>
  )
}
