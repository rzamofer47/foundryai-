/** Estrategia A — una sola fuente para la tarjeta de arriba (Services) y la de abajo (Pricing) */

export type EstrategiaATier = {
  title: string
  amount: string
  suffix: string
  /** Texto pequeño bajo el nombre en Services */
  hint: string
  details: string
}

export const estrategiaATiers: EstrategiaATier[] = [
  {
    title: 'Landing page (1 pág)',
    amount: '$697',
    suffix: 'CAD',
    hint: '$697 CAD',
    details: 'Mobile-first, chatbot IA, SEO básico, entrega 5 días',
  },
  {
    title: 'Sitio completo (5 págs)',
    amount: '$1,497',
    suffix: 'CAD',
    hint: '$1,497 CAD',
    details: '+ chatbot + Google Business, 10 días',
  },
  {
    title: 'Mantenimiento',
    amount: '$97',
    suffix: '/mes',
    hint: '$97/mes',
    details: 'Hosting, updates, soporte',
  },
]
