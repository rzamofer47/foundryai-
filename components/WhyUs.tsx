const features = [
  {
    emoji: '🤖',
    title: 'AI-Integrated',
    body: 'Every site includes an AI chatbot tuned to your services, hours, and FAQs — so visitors get answers instantly.',
  },
  {
    emoji: '⚡',
    title: 'Fast Delivery',
    body: 'Most projects launch in 7 to 14 days — not the three-month timelines you get from bloated agencies.',
  },
  {
    emoji: '🗣️',
    title: 'Bilingual',
    body: 'We work with Hamilton businesses in English and Spanish, including copy and chatbot responses.',
  },
  {
    emoji: '💰',
    title: 'Transparent Pricing',
    body: 'Fixed packages and clear quotes upfront. You always know what you are paying before we write a line of code.',
  },
]

export default function WhyUs() {
  return (
    <section id="why" className="border-b border-white/5 bg-foundry-base py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">Why Foundry AI</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
            Built for owners who want a premium web presence without enterprise budgets or endless meetings.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-white/10 bg-foundry-section/60 p-6 transition hover:border-accent/35 hover:shadow-glow"
            >
              <span className="text-3xl">{f.emoji}</span>
              <h3 className="mt-4 text-lg font-bold text-white">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
