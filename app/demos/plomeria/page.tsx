import { notFound } from 'next/navigation'
import DemoHtmlOrPreview from '../_components/DemoHtmlOrPreview'
import { getDemoBySlug } from '../_lib/demos-config'

export const metadata = {
  title: 'FlowPro Plumbing — Demo | Foundry AI',
  description: 'Demo HTML: html-originals/plomeria.html',
}

export default async function Page() {
  const demo = getDemoBySlug('plomeria')
  if (!demo) notFound()
  return <DemoHtmlOrPreview slug="plomeria" demo={demo} iframeTitle="FlowPro Plumbing — demo HTML" />
}
