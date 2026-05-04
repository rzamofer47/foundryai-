import { notFound } from 'next/navigation'
import DemoHtmlOrPreview from '../_components/DemoHtmlOrPreview'
import { getDemoBySlug } from '../_lib/demos-config'

export const metadata = {
  title: 'IronYard Gym — Demo | Foundry AI',
  description: 'Demo HTML: html-originals/gym-fitness.html',
}

export default async function Page() {
  const demo = getDemoBySlug('gym-fitness')
  if (!demo) notFound()
  return <DemoHtmlOrPreview slug="gym-fitness" demo={demo} iframeTitle="IronYard Gym — demo HTML" />
}
