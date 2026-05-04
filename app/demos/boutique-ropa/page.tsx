import { notFound } from 'next/navigation'
import DemoHtmlOrPreview from '../_components/DemoHtmlOrPreview'
import { getDemoBySlug } from '../_lib/demos-config'

export const metadata = {
  title: 'Maison Vera — Demo | Foundry AI',
  description: 'Demo HTML: html-originals/boutique-ropa.html',
}

export default async function Page() {
  const demo = getDemoBySlug('boutique-ropa')
  if (!demo) notFound()
  return <DemoHtmlOrPreview slug="boutique-ropa" demo={demo} iframeTitle="Maison Vera — demo HTML" />
}
