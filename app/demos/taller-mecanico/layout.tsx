import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Steelmark Auto — Hamilton Demo | Foundry AI',
  description:
    'Steelmark Auto demo — certified auto repair site with quote assistant (html-originals/steelmark-auto-styles.css).',
}

export default function TallerMecanicoLayout({ children }: { children: React.ReactNode }) {
  return children
}
