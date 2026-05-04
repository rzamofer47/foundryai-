const PHONE_DISPLAY = '+1 (289) 925-2013'
const PHONE_TEL = '+12899252013'
const WA_LINK =
  'https://wa.me/12899252013?text=Hi%20Foundry%20AI%2C%20I%27d%20like%20to%20book%20a%20free%2015-minute%20discovery%20call%20about%20my%20website.'
const EMAIL = 'hello@foundryai.live'
const SITE = 'https://foundryai.live'

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-foundry-base py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
          Ready to get your website built?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/75">
          Free 15-minute discovery call. No pressure, no commitment — just a clear plan for your business online.
        </p>

        <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex justify-center rounded-full bg-accent px-8 py-4 text-base font-bold text-foundry-base shadow-glow transition hover:scale-[1.02] hover:brightness-110"
          >
            Book a Free Call
          </a>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center rounded-full border-2 border-accent px-8 py-4 text-base font-bold text-white transition hover:bg-accent/10"
          >
            WhatsApp Us
          </a>
        </div>

        <div className="mt-10 flex flex-col gap-2 text-sm text-white/70 sm:text-base">
          <p>
            <a href={SITE} className="font-semibold text-accent hover:underline" target="_blank" rel="noopener noreferrer">
              foundryai.live
            </a>
            <span className="mx-2 text-white/30">·</span>
            <a href={`mailto:${EMAIL}`} className="text-white/85 hover:text-accent hover:underline">
              {EMAIL}
            </a>
          </p>
          <p>
            <a href={`tel:${PHONE_TEL}`} className="text-white/85 hover:text-accent hover:underline">
              {PHONE_DISPLAY}
            </a>
            <span className="mx-2 text-white/30">·</span>
            English &amp; Spanish
          </p>
        </div>
      </div>
    </section>
  )
}
