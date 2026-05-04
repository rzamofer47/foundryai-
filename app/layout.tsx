import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Foundry AI — Web Design for Hamilton Small Businesses',
  description:
    'Custom, fast, mobile-first websites for small businesses in Hamilton, Ontario. No templates. No fluff. Bilingual English & Spanish.',
  openGraph: {
    title: 'Foundry AI — Hamilton Web Design',
    description:
      'Beautiful websites that get you more customers. AI chatbot included. 7–14 day delivery.',
    url: 'https://foundryai.live',
    siteName: 'Foundry AI',
    locale: 'en_CA',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body
        className={`${plusJakarta.className} min-h-screen font-sans`}
        style={{ backgroundColor: '#1A0533', color: '#ffffff' }}
      >
        {children}
      </body>
    </html>
  )
}
