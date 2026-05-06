import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Meridian Accounting — Hamilton Demo | Foundry AI',
  description:
    'Meridian Accounting demo — CPA firm site with consultation assistant (html-originals/meridian-accounting-styles.css).',
}

export default function ContadorLayout({ children }: { children: React.ReactNode }) {
  return children
}
