import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Demo Websites — Foundry AI',
  description:
    'Explore industry demo websites with unique designs and an AI chatbot on every site. Food, health, beauty, fitness, and more.',
}

export default function DemosLayout({ children }: { children: React.ReactNode }) {
  return children
}
