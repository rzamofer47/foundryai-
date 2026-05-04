import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bella & Co. — Demo | Foundry AI',
  description: 'Bella & Co. beauty salon demo — converted from html-originals/salon-bella.html',
}

export default function SalonBellezaLayout({ children }: { children: React.ReactNode }) {
  return children
}
