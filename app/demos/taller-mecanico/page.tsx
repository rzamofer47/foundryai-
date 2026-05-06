'use client'

import { useEffect } from 'react'
import SteelmarkMarkup from './SteelmarkMarkup'
import { cssString } from './css-string'
import { STEELMARK_SYSTEM } from './system-prompt'

const FONT_LINK_ID = 'steelmark-demo-fonts'

export default function TallerMecanicoPage() {
  useEffect(() => {
    const prevBg = document.body.style.backgroundColor
    const prevColor = document.body.style.color
    document.body.style.backgroundColor = '#E8EBEF'
    document.body.style.color = '#1A1E24'

    let link = document.getElementById(FONT_LINK_ID) as HTMLLinkElement | null
    if (!link) {
      link = document.createElement('link')
      link.id = FONT_LINK_ID
      link.rel = 'stylesheet'
      link.href =
        'https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,300;0,400;0,600;0,700;0,900;1,300&family=Barlow+Condensed:wght@400;600;700;800&display=swap'
      document.head.appendChild(link)
    }

    const root = document.getElementById('steelmark-root')
    if (!root) {
      return () => {
        document.body.style.backgroundColor = prevBg
        document.body.style.color = prevColor
        document.getElementById(FONT_LINK_ID)?.remove()
      }
    }

    type Msg = { role: 'user' | 'assistant'; content: string }
    let msgs: Msg[] = []
    let chatOpen = false
    let welcomeShown = false

    const sc = () => {
      const m = root.querySelector('#c-msgs')
      if (m) m.scrollTop = m.scrollHeight
    }

    const addBot = (t: string) => {
      const d = document.createElement('div')
      d.className = 'msg bot'
      d.textContent = t
      root.querySelector('#c-msgs')?.appendChild(d)
      sc()
    }

    const addUser = (t: string) => {
      const d = document.createElement('div')
      d.className = 'msg user'
      d.textContent = t
      root.querySelector('#c-msgs')?.appendChild(d)
      sc()
    }

    const addTyp = () => {
      const d = document.createElement('div')
      d.className = 'msg typing'
      d.id = 'typ'
      d.innerHTML = '<div class="dots"><span></span><span></span><span></span></div>'
      root.querySelector('#c-msgs')?.appendChild(d)
      sc()
    }

    const remTyp = () => {
      root.querySelector('#typ')?.remove()
    }

    const toggleChat = () => {
      chatOpen = !chatOpen
      root.querySelector('#chat-window')?.classList.toggle('open', chatOpen)
      const iconChat = root.querySelector('.ico-chat') as HTMLElement | null
      const iconClose = root.querySelector('.ico-close') as HTMLElement | null
      if (iconChat) iconChat.style.display = chatOpen ? 'none' : 'block'
      if (iconClose) iconClose.style.display = chatOpen ? 'block' : 'none'
      const btn = root.querySelector('#chat-toggle') as HTMLButtonElement | null
      if (btn) {
        btn.setAttribute('aria-expanded', chatOpen ? 'true' : 'false')
        btn.setAttribute('aria-label', chatOpen ? 'Close chat' : 'Open chat')
      }
      if (chatOpen && !welcomeShown) {
        welcomeShown = true
        setTimeout(
          () =>
            addBot(
              "Hey — Steelmark Auto here 🔧 Tell me what's going on with your car and I'll help you out. Free estimates always."
            ),
          300
        )
      }
    }

    const sendQuick = (t: string) => {
      const inp = root.querySelector('#c-input') as HTMLInputElement | null
      if (inp) inp.value = t
      void send()
    }

    const send = async () => {
      const inp = root.querySelector('#c-input') as HTMLInputElement | null
      if (!inp) return
      const text = inp.value.trim()
      if (!text) return

      const qwrap = root.querySelector('#qwrap') as HTMLElement | null
      if (qwrap) qwrap.style.display = 'none'

      addUser(text)
      inp.value = ''
      msgs.push({ role: 'user', content: text })
      addTyp()

      try {
        const res = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'TU_API_KEY_AQUI',
            'anthropic-version': '2023-06-01',
            'anthropic-dangerous-direct-browser-access': 'true',
          },
          body: JSON.stringify({
            model: 'claude-haiku-4-5-20251001',
            max_tokens: 250,
            system: STEELMARK_SYSTEM,
            messages: msgs,
          }),
        })
        const data = (await res.json()) as {
          error?: { message?: string }
          content?: Array<{ type?: string; text?: string }>
        }
        if (data.error) throw new Error(data.error.message ?? 'API error')
        const first = data.content?.[0]
        const reply =
          first?.type === 'text' && typeof first.text === 'string'
            ? first.text
            : typeof (first as { text?: string })?.text === 'string'
              ? (first as { text: string }).text
              : ''
        if (!reply) throw new Error('Empty reply')
        msgs.push({ role: 'assistant', content: reply })
        remTyp()
        addBot(reply)
      } catch {
        remTyp()
        addBot('Tech issue on my end. Call us at (905) 555-0111 🔧')
      }
    }

    const onToggle = () => toggleChat()
    const onSendClick = () => {
      void send()
    }
    const onInputKeydown = (e: Event) => {
      const ke = e as KeyboardEvent
      if (ke.key === 'Enter') {
        ke.preventDefault()
        void send()
      }
    }
    const onQuickClick = (e: Event) => {
      const b = (e.target as HTMLElement).closest('.qb')
      if (!b) return
      const q = b.getAttribute('data-q')
      if (q) sendQuick(q)
    }

    const chatToggleEl = root.querySelector('#chat-toggle')
    const chatSendEl = root.querySelector('#c-send')
    const chatInputEl = root.querySelector('#c-input') as HTMLElement | null
    const qwrapEl = root.querySelector('#qwrap')

    chatToggleEl?.addEventListener('click', onToggle)
    chatSendEl?.addEventListener('click', onSendClick)
    chatInputEl?.addEventListener('keydown', onInputKeydown)
    qwrapEl?.addEventListener('click', onQuickClick)

    return () => {
      chatToggleEl?.removeEventListener('click', onToggle)
      chatSendEl?.removeEventListener('click', onSendClick)
      chatInputEl?.removeEventListener('keydown', onInputKeydown)
      qwrapEl?.removeEventListener('click', onQuickClick)
      document.body.style.backgroundColor = prevBg
      document.body.style.color = prevColor
      document.getElementById(FONT_LINK_ID)?.remove()
    }
  }, [])

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: cssString }} />
      <div id="steelmark-root" className="min-h-screen w-full bg-[#E8EBEF] text-[#1A1E24]">
        <SteelmarkMarkup />
      </div>
    </>
  )
}
