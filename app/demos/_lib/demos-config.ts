export const FILTERS = [
  'All',
  'Food & Drink',
  'Health',
  'Beauty',
  'Fitness',
  'Auto',
  'Fashion',
  'Finance',
  'Creative',
  'Home Services',
] as const

export type DemoFilter = (typeof FILTERS)[number]

export type DemoConfig = {
  slug: string
  name: string
  industry: string
  emoji: string
  color: string
  tag: Exclude<DemoFilter, 'All'>
  desc: string
}

export const DEMOS: readonly DemoConfig[] = [
  {
    slug: 'salon-belleza',
    name: 'Bella & Co.',
    industry: 'Beauty Salon',
    emoji: '💇‍♀️',
    color: 'from-rose-900 to-pink-700',
    tag: 'Beauty',
    desc: 'Elegant booking site with AI styling assistant',
  },
  {
    slug: 'restaurante-latino',
    name: 'La Brasa',
    industry: 'Latin Restaurant',
    emoji: '🌮',
    color: 'from-red-900 to-orange-700',
    tag: 'Food & Drink',
    desc: 'Bold restaurant site with bilingual AI menu assistant',
  },
  {
    slug: 'barberia',
    name: 'Cuts & Kings',
    industry: 'Barbershop',
    emoji: '✂️',
    color: 'from-zinc-900 to-yellow-800',
    tag: 'Beauty',
    desc: 'Industrial barbershop site with booking chatbot',
  },
  {
    slug: 'clinica-dental',
    name: 'BrightSmile Dental',
    industry: 'Dental Clinic',
    emoji: '🦷',
    color: 'from-blue-900 to-cyan-700',
    tag: 'Health',
    desc: 'Clean clinical site with bilingual patient assistant',
  },
  {
    slug: 'gym-fitness',
    name: 'IronYard Gym',
    industry: 'Fitness Center',
    emoji: '🏋️',
    color: 'from-zinc-900 to-orange-600',
    tag: 'Fitness',
    desc: 'High-energy gym site with membership chatbot',
  },
  {
    slug: 'taller-mecanico',
    name: 'Steelmark Auto',
    industry: 'Auto Repair',
    emoji: '🔧',
    color: 'from-zinc-900 to-red-800',
    tag: 'Auto',
    desc: 'Steel & red technical shop with free quote assistant',
  },
  {
    slug: 'boutique-ropa',
    name: 'VERA NOIR',
    industry: 'Fashion Boutique',
    emoji: '👗',
    color: 'from-stone-900 to-amber-800',
    tag: 'Fashion',
    desc: 'Editorial boutique site with personal style assistant',
  },
  {
    slug: 'contador',
    name: 'Meridian Accounting',
    industry: 'Accounting Firm',
    emoji: '📊',
    color: 'from-slate-900 to-amber-800/70',
    tag: 'Finance',
    desc: 'Navy & gold CPA firm site with consultation assistant',
  },
  {
    slug: 'fotografia',
    name: 'Julian Cross',
    industry: 'Photography',
    emoji: '📷',
    color: 'from-zinc-900 to-zinc-700',
    tag: 'Creative',
    desc: 'Minimal portfolio site with booking assistant',
  },
  {
    slug: 'plomeria',
    name: 'FlowPro Plumbing',
    industry: 'Plumbing',
    emoji: '🔩',
    color: 'from-blue-900 to-orange-700',
    tag: 'Home Services',
    desc: 'Trust-first plumbing site with emergency chatbot',
  },
  {
    slug: 'manicure',
    name: 'Ligne Nude',
    industry: 'Manicure Studio',
    emoji: '💅',
    color: 'from-stone-900 to-fuchsia-900/60',
    tag: 'Beauty',
    desc: 'Editorial studio site with mauve/nude nail gallery + AI booking',
  },
]

export function getDemoBySlug(slug: string): DemoConfig | undefined {
  return DEMOS.find((d) => d.slug === slug)
}

/** Second line for DemoStickyHeader, e.g. "LATIN KITCHEN • HAMILTON" */
export function demoHeaderIndustryLine(industry: string): string {
  return `${industry.toUpperCase()} • HAMILTON`
}

export function demoHref(slug: string): string {
  return `/demos/${slug}`
}
