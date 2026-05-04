const badges = [
  '⚡ 7-Day Delivery',
  '📱 Mobile-First',
  '🤖 AI-Powered',
  '🇨🇦 Hamilton, ON',
]

export default function Hero() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-white/5 bg-foundry-base pt-28 pb-20 sm:pt-32 sm:pb-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-blob absolute -left-32 top-20 h-96 w-96 rounded-full bg-purple-600/30 blur-3xl" />
        <div className="animate-blob-slow absolute right-[-120px] top-40 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="animate-blob absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Beautiful Websites That Get You More Customers
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/75 sm:text-xl">
            We design modern, fast websites for small businesses in Hamilton. No templates. No fluff. Just results.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/demos"
              className="inline-flex w-full min-w-[200px] items-center justify-center rounded-full bg-accent px-8 py-4 text-base font-bold text-foundry-base shadow-glow transition hover:scale-[1.02] hover:brightness-110 sm:w-auto"
            >
              Ver Portfolio
            </a>
            <a
              href="#contact"
              className="inline-flex w-full min-w-[200px] items-center justify-center rounded-full border-2 border-accent px-8 py-4 text-base font-bold text-white transition hover:bg-accent/10 sm:w-auto"
            >
              Get a Free Quote
            </a>
          </div>
        </div>

        <div className="mx-auto mt-14 flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/70 sm:text-base">
          {badges.map((b) => (
            <span key={b} className="whitespace-nowrap font-medium">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
