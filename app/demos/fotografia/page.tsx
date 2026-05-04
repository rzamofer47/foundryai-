import { notFound } from 'next/navigation'
import DemoHtmlOrPreview from '../_components/DemoHtmlOrPreview'
import { getDemoBySlug } from '../_lib/demos-config'

export const metadata = {
  title: 'Marco Lens — Demo | Foundry AI',
  description: 'Demo HTML: html-originals/fotografia.html',
}

export default async function Page() {
  const demo = getDemoBySlug('fotografia')
  if (!demo) notFound()
  return <DemoHtmlOrPreview slug="fotografia" demo={demo} iframeTitle="Marco Lens — demo HTML" />
}
