import { notFound } from 'next/navigation'
import DemoHtmlOrPreview from '../_components/DemoHtmlOrPreview'
import { getDemoBySlug } from '../_lib/demos-config'

export const metadata = {
  title: 'BrightSmile Dental — Demo | Foundry AI',
  description: 'Demo HTML: html-originals/clinica-dental.html',
}

export default async function Page() {
  const demo = getDemoBySlug('clinica-dental')
  if (!demo) notFound()
  return <DemoHtmlOrPreview slug="clinica-dental" demo={demo} iframeTitle="BrightSmile Dental — demo HTML" />
}
