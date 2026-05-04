import { estrategiaATiers } from '@/lib/estrategia-a-pricing'

export default function Pricing() {
  return (
    <section id="pricing" className="border-b border-white/5 bg-foundry-base py-20 sm:py-24">
      <div className="mx-auto max-w-lg px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-zinc-900/90 p-6 shadow-card sm:p-8">
          <div className="flex justify-center">
            <span className="rounded-full bg-gradient-to-r from-violet-600 to-purple-600 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wide text-white">
              Estrategia A
            </span>
          </div>

          <h2 className="mt-5 text-center text-2xl font-extrabold text-white sm:text-3xl">El competitivo</h2>
          <p className="mt-4 text-center text-sm leading-relaxed text-white/75 sm:text-base">
            Entras por debajo del mercado para ganar clientes rápido. Ideal para mes 1–3 cuando necesitas los primeros
            3 testimoniales.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            {estrategiaATiers.map((t) => (
              <div key={t.title} className="rounded-xl border border-white/10 bg-black/30 px-5 py-5">
                <p className="text-sm font-semibold text-white/90">{t.title}</p>
                <p className="mt-3 flex flex-wrap items-baseline gap-1 font-extrabold tracking-tight text-violet-400">
                  <span className="text-4xl sm:text-5xl lg:text-6xl">{t.amount}</span>
                  <span className="text-2xl font-bold text-violet-300 sm:text-3xl">{t.suffix}</span>
                </p>
                <p className="mt-3 text-xs leading-relaxed text-white/65 sm:text-sm">{t.details}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 border-t border-white/10 pt-6 text-center text-xs leading-relaxed text-white/55 sm:text-sm">
            Ventaja: cierras más fácil. Riesgo: clientes de bajo presupuesto, difíciles de manejar. Sube precios en mes
            4.
          </p>

          <a
            href="#contact"
            className="mt-6 block w-full rounded-full bg-accent py-3.5 text-center text-sm font-bold text-foundry-base transition hover:brightness-110"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  )
}
