import DemoPreview from './DemoPreview'
import DemoStickyHeader from './DemoStickyHeader'
import { readDemoHtml } from '../_lib/read-demo-html'
import { demoHeaderIndustryLine, type DemoConfig } from '../_lib/demos-config'

type Props = {
  slug: string
  demo: DemoConfig
  iframeTitle: string
}

/** `html-originals/*.html` stubs we added say "Placeholder: reemplaza…" — use React preview until real HTML ships. */
function isStubHtml(html: string): boolean {
  return /\bPlaceholder:\s*reemplaz/i.test(html) || /reemplaz[áa]\s+`?html-originals/i.test(html)
}

export default async function DemoHtmlOrPreview({ slug, demo, iframeTitle }: Props) {
  const html = await readDemoHtml(slug)
  if (!html || isStubHtml(html)) {
    return <DemoPreview demo={demo} />
  }
  return (
    <div className="flex h-[100dvh] flex-col overflow-hidden bg-foundry-base">
      <div id="menu" className="sr-only" tabIndex={-1} aria-hidden />
      <DemoStickyHeader
        brandTitle={demo.name}
        industryLine={demoHeaderIndustryLine(demo.industry)}
        menuHref="#menu"
        bookHref="/#contact"
      />
      <iframe
        title={iframeTitle}
        className="min-h-0 w-full flex-1 border-0 bg-foundry-base"
        srcDoc={html}
        sandbox="allow-scripts allow-same-origin allow-top-navigation-by-user-activation"
      />
    </div>
  )
}
