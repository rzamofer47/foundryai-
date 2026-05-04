const reviews = [
  {
    quote:
      'Our old site looked dated. Foundry AI rebuilt everything in under two weeks — we are already getting more booking requests from Google.',
    name: 'Jennifer Walsh',
    biz: 'Walsh Family Dental',
    stars: 5,
  },
  {
    quote:
      'Clear pricing, bilingual copy, and the chatbot answers questions we used to get hammered with on the phone. Worth every dollar.',
    name: 'Marcus Chen',
    biz: 'East End Auto Detailing',
    stars: 5,
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-accent" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-lg">
          ★
        </span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="border-b border-white/5 bg-foundry-section py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            What Hamilton Owners Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
            Real feedback from local businesses we have partnered with on web projects.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {reviews.map((r) => (
            <blockquote
              key={r.name}
              className="rounded-2xl border border-white/10 bg-foundry-base/50 p-8 shadow-card transition hover:border-accent/30"
            >
              <Stars count={r.stars} />
              <p className="mt-4 text-lg leading-relaxed text-white/90">&ldquo;{r.quote}&rdquo;</p>
              <footer className="mt-6 border-t border-white/10 pt-6">
                <cite className="not-italic">
                  <span className="block font-bold text-white">{r.name}</span>
                  <span className="text-sm text-accent/90">{r.biz}</span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
