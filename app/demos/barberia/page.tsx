import { notFound } from 'next/navigation'
import DemoHtmlOrPreview from '../_components/DemoHtmlOrPreview'
import { getDemoBySlug } from '../_lib/demos-config'

export const metadata = {
  title: 'Cuts & Kings — Demo | Foundry AI',
  description: 'Demo HTML: html-originals/barberia.html',
}

export default async function Page() {
  const demo = getDemoBySlug('barberia')
  if (!demo) notFound()
  return <DemoHtmlOrPreview slug="barberia" demo={demo} iframeTitle="Cuts & Kings — demo HTML" />
}
