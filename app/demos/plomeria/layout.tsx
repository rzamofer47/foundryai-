import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FlowPro Plumbing — Hamilton Demo | Foundry AI',
  description:
    'FlowPro Plumbing demo — emergency-first plumbing site with chat assistant (html-originals/flowpro-plumbing-styles.css).',
}

export default function PlomeriaLayout({ children }: { children: React.ReactNode }) {
  return children
}
