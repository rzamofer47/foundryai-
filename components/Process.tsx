const steps = [
  {
    n: '01',
    title: 'Discovery Call',
    desc: '15 minutes, free. We learn your goals, audience, and timeline so we can recommend the right package.',
    icon: '📞',
  },
  {
    n: '02',
    title: 'Design & Build',
    desc: 'You approve layouts and copy at each milestone. No surprises — you always know what ships next.',
    icon: '🎨',
  },
  {
    n: '03',
    title: 'Launch',
    desc: 'We handle hosting setup, SSL, performance checks, and go-live so your site is fast from day one.',
    icon: '🚀',
  },
  {
    n: '04',
    title: 'Support',
    desc: 'Optional maintenance: updates, analytics reviews, and chatbot tuning so your site keeps converting.',
    icon: '🛠️',
  },
]

export default function Process() {
  return (
    <section id="process" className="border-b border-white/5 bg-foundry-base py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">How It Works</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
            A simple process built for busy owners — clear milestones from first call to launch.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.n}
              className="relative rounded-2xl border border-white/10 bg-foundry-section/80 p-6 text-center transition hover:border-accent/35 hover:shadow-glow"
            >
              <span className="text-3xl">{step.icon}</span>
              <p className="mt-3 text-xs font-bold uppercase tracking-widest text-accent">{step.n}</p>
              <h3 className="mt-2 text-lg font-bold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
