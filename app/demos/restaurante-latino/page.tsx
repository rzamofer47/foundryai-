'use client'

import { useEffect } from 'react'
import LaBrasaMarkup from './LaBrasaMarkup'
import { cssString } from './css-string'
import { ROSA_SYSTEM } from './system-prompt'

const FONT_LINK_ID = 'restaurante-latino-demo-fonts'

export default function RestauranteLatinoPage() {
  useEffect(() => {
    const prevBg = document.body.style.backgroundColor
    const prevColor = document.body.style.color
    document.body.style.backgroundColor = '#0D0A08'
    document.body.style.color = '#F5EDD8'

    let link = document.getElementById(FONT_LINK_ID) as HTMLLinkElement | null
    if (!link) {
      link = document.createElement('link')
      link.id = FONT_LINK_ID
      link.rel = 'stylesheet'
      link.href =
        'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Outfit:wght@300;400;500&display=swap'
      document.head.appendChild(link)
    }

    const root = document.getElementById('restaurante-latino-root')
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

    const scrollB = () => {
      const m = root.querySelector('#chat-messages')
      if (m) m.scrollTop = m.scrollHeight
    }

    const addBot = (t: string) => {
      const d = document.createElement('div')
      d.className = 'msg bot'
      d.textContent = t
      root.querySelector('#chat-messages')?.appendChild(d)
      scrollB()
    }

    const addUser = (t: string) => {
      const d = document.createElement('div')
      d.className = 'msg user'
      d.textContent = t
      root.querySelector('#chat-messages')?.appendChild(d)
      scrollB()
    }

    const addTyping = () => {
      const d = document.createElement('div')
      d.className = 'msg typing'
      d.id = 'typ'
      d.innerHTML = '<div class="dots"><span></span><span></span><span></span></div>'
      root.querySelector('#chat-messages')?.appendChild(d)
      scrollB()
    }

    const removeTyping = () => {
      root.querySelector('#typ')?.remove()
    }

    const toggleChat = () => {
      chatOpen = !chatOpen
      root.querySelector('#chat-window')?.classList.toggle('open', chatOpen)
      const iconChat = root.querySelector('.icon-chat-svg') as HTMLElement | null
      const iconClose = root.querySelector('.icon-close-svg') as HTMLElement | null
      if (iconChat) iconChat.style.display = chatOpen ? 'none' : 'block'
      if (iconClose) iconClose.style.display = chatOpen ? 'block' : 'none'
      if (chatOpen && msgs.length === 0) {
        setTimeout(
          () =>
            addBot(
              "Hey! I'm Rosa 🌮 Welcome to La Brasa! Ask me about our menu, daily specials, or how to make a reservation."
            ),
          300
        )
      }
    }

    const sq = (t: string) => {
      const inp = root.querySelector('#chat-input') as HTMLInputElement | null
      if (inp) inp.value = t
      void send()
    }

    const send = async () => {
      const inp = root.querySelector('#chat-input') as HTMLInputElement | null
      if (!inp) return
      const text = inp.value.trim()
      if (!text) return
      const qw = root.querySelector('#quick-wrap') as HTMLElement | null
      if (qw) qw.style.display = 'none'
      addUser(text)
      inp.value = ''
      msgs.push({ role: 'user', content: text })
      addTyping()
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
            max_tokens: 300,
            system: ROSA_SYSTEM,
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
        removeTyping()
        addBot(reply)
      } catch {
        removeTyping()
        addBot("Sorry, I'm having a quick issue. Please call us at (905) 555-0199 📞")
      }
    }

    const filterMenu = (cat: string, btn: Element) => {
      root.querySelectorAll('.menu-tab').forEach((t) => t.classList.remove('active'))
      btn.classList.add('active')
      root.querySelectorAll('.menu-item').forEach((item) => {
        const el = item as HTMLElement
        el.style.display = cat === 'all' || el.dataset.cat === cat ? 'flex' : 'none'
      })
    }

    const chatToggle = root.querySelector('#chat-toggle')
    const onToggle = () => toggleChat()
    chatToggle?.addEventListener('click', onToggle)

    const chatSend = root.querySelector('#chat-send')
    const onSendClick = () => {
      void send()
    }
    chatSend?.addEventListener('click', onSendClick)

    const chatInput = root.querySelector('#chat-input')
    const onKeydown = (e: Event) => {
      const ke = e as KeyboardEvent
      if (ke.key === 'Enter') {
        ke.preventDefault()
        void send()
      }
    }
    chatInput?.addEventListener('keydown', onKeydown)

    const quickWrap = root.querySelector('#quick-wrap')
    const onQuickClick = (e: Event) => {
      const t = (e.target as HTMLElement).closest('.qbtn')
      if (!t) return
      const q = t.getAttribute('data-q')
      if (q) sq(q)
    }
    quickWrap?.addEventListener('click', onQuickClick)

    const menuTabs = root.querySelector('.menu-tabs')
    const onMenuTabsClick = (e: Event) => {
      const btn = (e.target as HTMLElement).closest('.menu-tab')
      if (!btn) return
      const cat = btn.getAttribute('data-cat') || 'all'
      filterMenu(cat, btn)
    }
    menuTabs?.addEventListener('click', onMenuTabsClick)

    return () => {
      chatToggle?.removeEventListener('click', onToggle)
      chatSend?.removeEventListener('click', onSendClick)
      chatInput?.removeEventListener('keydown', onKeydown)
      quickWrap?.removeEventListener('click', onQuickClick)
      menuTabs?.removeEventListener('click', onMenuTabsClick)
      document.body.style.backgroundColor = prevBg
      document.body.style.color = prevColor
      document.getElementById(FONT_LINK_ID)?.remove()
    }
  }, [])

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: cssString }} />
      <div id="restaurante-latino-root" className="min-h-screen w-full bg-[#0D0A08] text-[#F5EDD8]">
        <LaBrasaMarkup />
      </div>
    </>
  )
}
