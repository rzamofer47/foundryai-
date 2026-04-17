import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Foundry AI — AI tools for modern businesses',
  description:
    'We build AI-powered web experiences, phone agents, chatbots, apps and games for startups and sole proprietors who want to modernize — without the complexity.',
  openGraph: {
    title: 'Foundry AI',
    description: 'AI tools and development for modern businesses.',
    url: 'https://foundryai.com',
    siteName: 'Foundry AI',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Foundry AI',
    description: 'AI tools and development for modern businesses.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>{children}</body>
    </html>
  )
}
