import { notFound } from 'next/navigation'
import DemoHtmlOrPreview from '../_components/DemoHtmlOrPreview'
import { getDemoBySlug } from '../_lib/demos-config'

export const metadata = {
  title: 'Nova Accounting — Demo | Foundry AI',
  description: 'Demo HTML: html-originals/contador.html',
}

export default async function Page() {
  const demo = getDemoBySlug('contador')
  if (!demo) notFound()
  return <DemoHtmlOrPreview slug="contador" demo={demo} iframeTitle="Nova Accounting — demo HTML" />
}
