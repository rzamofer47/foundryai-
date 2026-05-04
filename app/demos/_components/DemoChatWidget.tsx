'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

type Msg = { id: string; role: 'user' | 'assistant'; text: string }

function replyFor(text: string, siteName: string): string {
  const t = text.toLowerCase()
  if (/hola|hi|hello|hey|buenas/.test(t)) {
    return `Hi — I’m the ${siteName} assistant. I can help with bookings, services, or ballpark pricing. What do you need?`
  }
  if (/cita|book|reserva|appointment|schedule|agendar/.test(t)) {
    return 'You can leave your name and phone here and we’ll call to confirm a time, or reach us from the main site. Do you prefer tomorrow or the day after?'
  }
  if (/precio|price|cost|cuánto|how much/.test(t)) {
    return 'Pricing depends on the service (cut, color, treatment). Tell me what you’re after and I’ll give a typical range, or I can loop in reception.'
  }
  if (/horario|hours|open|cerrado|cuándo/.test(t)) {
    return 'We’re usually open Mon–Sat. Want me to confirm this week’s exact hours?'
  }
  if (/ubicación|location|dónde|address|map/.test(t)) {
    return 'We’re in Hamilton, ON. The main site has map and address. Need directions?'
  }
  if (/gracias|thanks|thank you/.test(t)) {
    return 'Happy to help. Want me to flag the team to follow up? Anything else?'
  }
  return `Thanks for writing. At ${siteName} we reply fast — add a bit more detail (service or date) and I’ll steer you better. You can also try “booking” or “price” for shortcuts.`
}

export default function DemoChatWidget({ siteName }: { siteName: string }) {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      id: '0',
      role: 'assistant',
      text: `Hi 👋 I’m the ${siteName} demo chatbot. Ask about bookings, pricing, or hours (simulated replies).`,
    },
  ])
  const listRef = useRef<HTMLDivElement>(null)

  const send = useCallback(() => {
    const trimmed = input.trim()
    if (!trimmed) return
    const userMsg: Msg = { id: crypto.randomUUID(), role: 'user', text: trimmed }
    const bot: Msg = {
      id: crypto.randomUUID(),
      role: 'assistant',
      text: replyFor(trimmed, siteName),
    }
    setMsgs((m) => [...m, userMsg, bot])
    setInput('')
  }, [input, siteName])

  useEffect(() => {
    if (!open) return
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
  }, [msgs, open])

  return (
    <div className="pointer-events-auto fixed bottom-4 right-4 z-[100] flex flex-col items-end sm:bottom-6 sm:right-6">
      {open && (
        <div
          className="mb-3 flex w-[min(100vw-2rem,22rem)] flex-col overflow-hidden rounded-2xl border border-white/15 bg-foundry-section/95 shadow-2xl backdrop-blur-md"
          role="dialog"
          aria-label={`Chat with ${siteName}`}
        >
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <span className="text-sm font-bold text-white">Demo chatbot</span>
            <button
              type="button"
              className="rounded-lg px-2 py-1 text-xs font-semibold text-white/70 hover:bg-white/10 hover:text-white"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
          <div ref={listRef} className="max-h-72 space-y-3 overflow-y-auto px-4 py-3">
            {msgs.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <p
                  className={`max-w-[90%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                    m.role === 'user'
                      ? 'bg-accent text-foundry-base'
                      : 'border border-white/10 bg-foundry-base/80 text-white/90'
                  }`}
                >
                  {m.text}
                </p>
              </div>
            ))}
          </div>
          <div className="flex gap-2 border-t border-white/10 p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), send())}
              placeholder="Type a message…"
              className="min-w-0 flex-1 rounded-xl border border-white/15 bg-foundry-base/60 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-accent focus:outline-none"
            />
            <button
              type="button"
              onClick={send}
              className="shrink-0 rounded-xl bg-accent px-3 py-2 text-sm font-bold text-foundry-base hover:brightness-110"
            >
              Send
            </button>
          </div>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-2xl shadow-glow ring-2 ring-foundry-base transition hover:scale-105 hover:brightness-110 sm:h-16 sm:w-16"
        aria-expanded={open}
        aria-label={open ? 'Close chat' : 'Open chat'}
      >
        {open ? '✕' : '💬'}
      </button>
    </div>
  )
}
