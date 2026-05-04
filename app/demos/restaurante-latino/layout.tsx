import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'La Brasa — Latin Kitchen Hamilton',
  description: 'La Brasa Latin Kitchen — Hamilton, Ontario.',
}

export default function RestauranteLatinoLayout({ children }: { children: React.ReactNode }) {
  return children
}
