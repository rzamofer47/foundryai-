'use client'

import { useEffect } from 'react'
import SalonBellaMarkup from './SalonBellaMarkup'
import { cssString } from './css-string'
import { BELLA_SYSTEM } from './system-prompt'

const FONT_LINK_ID = 'salon-belleza-demo-fonts'

export default function SalonBellezaPage() {
  useEffect(() => {
    const prevBg = document.body.style.backgroundColor
    const prevColor = document.body.style.color
    document.body.style.backgroundColor = '#FAF7F2'
    document.body.style.color = '#1A1612'

    let link = document.getElementById(FONT_LINK_ID) as HTMLLinkElement | null
    if (!link) {
      link = document.createElement('link')
      link.id = FONT_LINK_ID
      link.rel = 'stylesheet'
      link.href =
        'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap'
      document.head.appendChild(link)
    }

    const root = document.getElementById('salon-belleza-root')
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

    const scrollBottom = () => {
      const m = root.querySelector('#chat-messages')
      if (m) m.scrollTop = m.scrollHeight
    }

    const addBot = (text: string) => {
      const d = document.createElement('div')
      d.className = 'msg bot'
      d.textContent = text
      root.querySelector('#chat-messages')?.appendChild(d)
      scrollBottom()
    }

    const addUser = (text: string) => {
      const d = document.createElement('div')
      d.className = 'msg user'
      d.textContent = text
      root.querySelector('#chat-messages')?.appendChild(d)
      scrollBottom()
    }

    const addTyping = () => {
      const d = document.createElement('div')
      d.className = 'msg typing'
      d.id = 'typing-indicator'
      d.innerHTML = '<div class="typing-dots"><span></span><span></span><span></span></div>'
      root.querySelector('#chat-messages')?.appendChild(d)
      scrollBottom()
    }

    const removeTyping = () => {
      root.querySelector('#typing-indicator')?.remove()
    }

    const toggleChat = () => {
      chatOpen = !chatOpen
      root.querySelector('#chat-window')?.classList.toggle('open', chatOpen)
      const iconChat = root.querySelector('#chat-toggle .icon-chat') as HTMLElement | null
      const iconClose = root.querySelector('#chat-toggle .icon-close') as HTMLElement | null
      if (iconChat) iconChat.style.display = chatOpen ? 'none' : 'block'
      if (iconClose) iconClose.style.display = chatOpen ? 'block' : 'none'
      const toggle = root.querySelector('#chat-toggle') as HTMLButtonElement | null
      if (toggle) {
        toggle.setAttribute('aria-expanded', chatOpen ? 'true' : 'false')
        toggle.setAttribute('aria-label', chatOpen ? 'Close chat' : 'Open chat')
      }
      if (chatOpen && !welcomeShown) {
        welcomeShown = true
        setTimeout(() => {
          const wrap = document.createElement('div')
          wrap.className = 'msg bot'
          wrap.innerHTML =
            'Hi! I’m Bella, your salon assistant <span class="hero-emoji-breathe" aria-hidden="true">💇‍♀️</span> How can I help you today?'
          root.querySelector('#chat-messages')?.appendChild(wrap)
          scrollBottom()
        }, 300)
      }
    }

    const sendQuick = (text: string) => {
      const inp = root.querySelector('#chat-input') as HTMLInputElement | null
      if (inp) inp.value = text
      void sendMessage()
    }

    const sendToChat = (text: string) => {
      if (!chatOpen) toggleChat()
      setTimeout(() => {
        const inp = root.querySelector('#chat-input') as HTMLInputElement | null
        if (inp) inp.value = text
        void sendMessage()
      }, 400)
    }

    const sendMessage = async () => {
      const input = root.querySelector('#chat-input') as HTMLInputElement | null
      if (!input) return
      const text = input.value.trim()
      if (!text) return

      const quick = root.querySelector('#quick-replies') as HTMLElement | null
      if (quick) quick.style.display = 'none'

      addUser(text)
      input.value = ''
      msgs.push({ role: 'user', content: text })
      addTyping()

      try {
        const response = await fetch('https://api.anthropic.com/v1/messages', {
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
            system: BELLA_SYSTEM,
            messages: msgs,
          }),
        })
        const data = (await response.json()) as {
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
        addBot('Sorry, I ran into a technical issue. Please call us at (905) 555-0123 📞')
      }
    }

    const onToggle = () => toggleChat()
    const onSendClick = () => {
      void sendMessage()
    }
    const onInputKeydown = (e: Event) => {
      const ke = e as KeyboardEvent
      if (ke.key === 'Enter') {
        ke.preventDefault()
        void sendMessage()
      }
    }

    const onQuickClick = (e: Event) => {
      const btn = (e.target as HTMLElement).closest('.quick-btn')
      if (!btn) return
      const q = btn.getAttribute('data-q')
      if (q) sendQuick(q)
    }

    const onBookClick = (e: Event) => {
      const item = (e.target as HTMLElement).closest('.book-item')
      if (!item) return
      const prompt = item.getAttribute('data-chat-prompt')
      if (prompt) sendToChat(prompt)
    }

    const onBookKeydown = (e: Event) => {
      const ke = e as KeyboardEvent
      if (ke.key !== 'Enter') return
      const item = (ke.target as HTMLElement).closest('.book-item')
      if (!item) return
      const prompt = item.getAttribute('data-chat-prompt')
      if (prompt) {
        ke.preventDefault()
        sendToChat(prompt)
      }
    }

    const chatToggleEl = root.querySelector('#chat-toggle')
    const chatSendEl = root.querySelector('#chat-send')
    const chatInputEl = root.querySelector('#chat-input') as HTMLElement | null
    const quickRepliesEl = root.querySelector('#quick-replies')
    const bookingGridEl = root.querySelector('.booking-grid') as HTMLElement | null

    chatToggleEl?.addEventListener('click', onToggle)
    chatSendEl?.addEventListener('click', onSendClick)
    chatInputEl?.addEventListener('keydown', onInputKeydown)
    quickRepliesEl?.addEventListener('click', onQuickClick)
    bookingGridEl?.addEventListener('click', onBookClick)
    bookingGridEl?.addEventListener('keydown', onBookKeydown)

    return () => {
      chatToggleEl?.removeEventListener('click', onToggle)
      chatSendEl?.removeEventListener('click', onSendClick)
      chatInputEl?.removeEventListener('keydown', onInputKeydown)
      quickRepliesEl?.removeEventListener('click', onQuickClick)
      bookingGridEl?.removeEventListener('click', onBookClick)
      bookingGridEl?.removeEventListener('keydown', onBookKeydown)
      document.body.style.backgroundColor = prevBg
      document.body.style.color = prevColor
      document.getElementById(FONT_LINK_ID)?.remove()
    }
  }, [])

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: cssString }} />
      <div id="salon-belleza-root" className="min-h-screen w-full bg-[#FAF7F2] text-[#1A1612]">
        <SalonBellaMarkup />
      </div>
    </>
  )
}
