import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-foundry-deep py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center sm:px-6 lg:px-8">
        <Link href="#" className="text-lg font-extrabold text-white">
          Foundry <span className="text-accent">AI</span>
        </Link>
        <p className="max-w-md text-sm text-white/65">Modern websites for Hamilton businesses.</p>
        <p className="text-xs text-white/45">© 2026 Foundry AI. Hamilton, Ontario.</p>
        <p className="text-sm text-white/50">Built with ❤️ in Hamilton</p>
      </div>
    </footer>
  )
}
