import { notFound } from 'next/navigation'
import DemoHtmlOrPreview from '../_components/DemoHtmlOrPreview'
import { getDemoBySlug } from '../_lib/demos-config'

export const metadata = {
  title: 'Ironclad Auto — Demo | Foundry AI',
  description: 'Demo HTML: html-originals/taller-mecanico.html',
}

export default async function Page() {
  const demo = getDemoBySlug('taller-mecanico')
  if (!demo) notFound()
  return <DemoHtmlOrPreview slug="taller-mecanico" demo={demo} iframeTitle="Ironclad Auto — demo HTML" />
}
