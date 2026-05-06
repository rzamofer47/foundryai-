'use client'

import { useEffect, useMemo } from 'react'
import Image from 'next/image'
import { manicureConfig } from '@/lib/chatbot-configs'
import DemoStickyHeader from '../_components/DemoStickyHeader'
import { demoHeaderIndustryLine } from '../_lib/demos-config'

const STYLE_ID = 'manicure-demo-inline-css'
const FONT_LINK_ID = 'manicure-demo-fonts'
const HERO_IMAGE = '/demos/manicure/nails-0.png'
const GALLERY_IMAGES = Array.from({ length: 9 }, (_, i) => `/demos/manicure/nails-${i + 1}.png`)

function buildManicureCss(accent: string) {
  return `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Syne:wght@400;500;600;700;800&display=swap');

#manicure-demo-root,
#manicure-demo-root *,
#manicure-demo-root *::before,
#manicure-demo-root *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#manicure-demo-root {
  --accent: ${accent};
  --ink: #070607;
  --ink-soft: #121014;
  --nude: #e8d5cf;
  --nude-deep: #c9a99a;
  --fog: rgba(232, 213, 207, 0.62);
  --line: rgba(155, 123, 140, 0.35);
  --font-display: "Cormorant Garamond", Georgia, "Times New Roman", serif;
  --font-ui: "Syne", ui-sans-serif, system-ui, sans-serif;
  scroll-behavior: smooth;
  font-family: var(--font-ui);
  background: var(--ink);
  color: var(--nude);
  min-height: 100vh;
  line-height: 1.55;
  position: relative;
  isolation: isolate;
  overflow-x: hidden;
}

#manicure-demo-root .grain {
  pointer-events: none;
  position: fixed;
  inset: 0;
  z-index: 0;
  opacity: 0.07;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

#manicure-demo-root .wash {
  pointer-events: none;
  position: fixed;
  inset: 0;
  z-index: 0;
  background:
    radial-gradient(ellipse 55% 45% at 88% 12%, rgba(155, 123, 140, 0.22), transparent 58%),
    radial-gradient(ellipse 40% 50% at 8% 70%, rgba(200, 169, 154, 0.08), transparent 50%),
    linear-gradient(165deg, #0a090a 0%, #100c10 40%, #070607 100%);
}

#manicure-demo-root .wrap {
  position: relative;
  z-index: 1;
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 1.35rem;
}

#manicure-demo-root .hero {
  padding: 3.5rem 0 2rem;
}

#manicure-demo-root .hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.28fr) minmax(0, 1fr);
  gap: clamp(1.25rem, 4vw, 3.5rem);
  align-items: end;
}

@media (max-width: 900px) {
  #manicure-demo-root .hero-grid {
    grid-template-columns: 1fr;
  }
}

#manicure-demo-root .hero-rail {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-family: var(--font-ui);
  font-size: 0.65rem;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--accent);
  opacity: 0.9;
  padding-bottom: 0.5rem;
  border-right: 1px solid var(--line);
  padding-right: 1rem;
  min-height: 11rem;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}

@media (max-width: 900px) {
  #manicure-demo-root .hero-rail {
    writing-mode: horizontal-tb;
    transform: none;
    border-right: none;
    border-bottom: 1px solid var(--line);
    padding: 0 0 1rem;
    min-height: 0;
    justify-content: flex-start;
  }
}

#manicure-demo-root .hero-main {
  position: relative;
}

#manicure-demo-root .hero-kicker {
  font-family: var(--font-ui);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--fog);
  margin-bottom: 1rem;
}

#manicure-demo-root .hero h1 {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: clamp(2.85rem, 7.5vw, 4.75rem);
  line-height: 0.98;
  letter-spacing: -0.02em;
  color: var(--nude);
  max-width: 14ch;
}

#manicure-demo-root .hero h1 em {
  font-style: italic;
  color: var(--accent);
  font-weight: 500;
}

#manicure-demo-root .hero-lead {
  margin-top: 1.5rem;
  max-width: 28rem;
  font-size: 1rem;
  color: var(--fog);
  font-weight: 400;
}

#manicure-demo-root .hero-aside {
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 1.25rem;
  align-items: stretch;
}

@media (max-width: 720px) {
  #manicure-demo-root .hero-aside {
    grid-template-columns: 1fr;
  }
}

#manicure-demo-root .hero-panel {
  border: 1px solid var(--line);
  background: linear-gradient(145deg, rgba(155, 123, 140, 0.12), rgba(0, 0, 0, 0.35));
  padding: 1.35rem 1.5rem;
  transform: translateX(clamp(0px, 4vw, 48px));
}

@media (max-width: 900px) {
  #manicure-demo-root .hero-panel { transform: none; }
}

#manicure-demo-root .hero-panel p {
  font-size: 0.82rem;
  letter-spacing: 0.04em;
  color: var(--fog);
  line-height: 1.65;
}

#manicure-demo-root .hero-visual {
  min-height: 220px;
  position: relative;
  border: 1px solid var(--line);
  overflow: hidden;
}

#manicure-demo-root .hero-photo {
  position: absolute;
  inset: 0;
  z-index: 2;
  border-radius: 2px;
  overflow: hidden;
  box-shadow:
    inset 0 0 0 1px rgba(255, 212, 105, 0.42),
    0 0 24px rgba(255, 198, 84, 0.28),
    0 0 58px rgba(255, 213, 122, 0.2);
  animation: heroDrift 6.8s ease-in-out infinite;
}

#manicure-demo-root .hero-photo img {
  object-fit: cover;
  object-position: center;
}

#manicure-demo-root .hero-visual .sw {
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  opacity: 0.55;
}
#manicure-demo-root .hero-visual .sw:nth-child(1) {
  width: 140px;
  height: 140px;
  background: var(--accent);
  top: -20%;
  right: 10%;
}
#manicure-demo-root .hero-visual .sw:nth-child(2) {
  width: 100px;
  height: 100px;
  background: var(--nude-deep);
  bottom: -10%;
  left: 15%;
}

#manicure-demo-root .hero-visual .arch {
  position: absolute;
  inset: 18% 12% 12%;
  border: 1px solid rgba(232, 213, 207, 0.35);
  border-radius: 120px 120px 0 0;
  background: linear-gradient(180deg, rgba(232, 213, 207, 0.12), transparent);
}

#manicure-demo-root .hero-visual .caption {
  position: absolute;
  bottom: 0.85rem;
  left: 0.85rem;
  right: 0.85rem;
  font-size: 0.62rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--fog);
  text-align: right;
  z-index: 3;
}

@keyframes heroDrift {
  0%, 100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  50% {
    transform: translate3d(0, -6px, 0) scale(1.015);
  }
}

#manicure-demo-root .split {
  padding: 4rem 0 3rem;
  display: grid;
  grid-template-columns: 1fr 0.55fr;
  gap: clamp(2rem, 6vw, 5rem);
  align-items: start;
}

@media (max-width: 900px) {
  #manicure-demo-root .split {
    grid-template-columns: 1fr;
  }
}

#manicure-demo-root .split h2 {
  font-family: var(--font-display);
  font-size: clamp(2.1rem, 4vw, 3rem);
  font-weight: 500;
  line-height: 1.08;
  color: var(--nude);
}

#manicure-demo-root .split h2 span {
  display: block;
  margin-top: 0.35rem;
  font-style: italic;
  color: var(--accent);
}

#manicure-demo-root .split-body {
  font-size: 0.95rem;
  color: var(--fog);
  border-left: 1px solid var(--line);
  padding-left: 1.75rem;
}

@media (max-width: 900px) {
  #manicure-demo-root .split-body {
    border-left: none;
    padding-left: 0;
    border-top: 1px solid var(--line);
    padding-top: 1.5rem;
  }
}

#manicure-demo-root .split-body p + p {
  margin-top: 1rem;
}

#manicure-demo-root .gallery-section {
  padding: 1rem 0 4rem;
}

#manicure-demo-root .gallery-section .label {
  font-family: var(--font-ui);
  font-size: 0.65rem;
  letter-spacing: 0.38em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 1.25rem;
}

#manicure-demo-root .nail-gallery {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: 72px;
  gap: 10px;
}

@media (max-width: 720px) {
  #manicure-demo-root .nail-gallery {
    grid-auto-rows: 64px;
  }
}

#manicure-demo-root .nail {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 200, 96, 0.42);
  border-radius: 4px;
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.25s, box-shadow 0.25s;
  box-shadow:
    0 0 0 1px rgba(255, 215, 130, 0.15),
    0 0 20px rgba(255, 200, 96, 0.2),
    0 0 44px rgba(255, 215, 140, 0.1);
}

#manicure-demo-root .nail::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.06), transparent 45%);
  mix-blend-mode: screen;
  pointer-events: none;
}

#manicure-demo-root .nail:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 218, 142, 0.92);
  box-shadow:
    0 0 0 1px rgba(255, 232, 170, 0.24),
    0 0 26px rgba(255, 212, 112, 0.34),
    0 0 58px rgba(255, 224, 148, 0.2);
}

#manicure-demo-root .nail .shine {
  position: absolute;
  top: 10%;
  left: 15%;
  width: 45%;
  height: 18%;
  border-radius: 999px;
  background: linear-gradient(90deg, rgba(255,255,255,0.45), transparent);
  opacity: 0.35;
  transform: rotate(-18deg);
  z-index: 2;
}

#manicure-demo-root .nail-image {
  position: absolute;
  inset: 0;
  z-index: 1;
}

#manicure-demo-root .nail-image img {
  object-fit: cover;
  object-position: center;
}

#manicure-demo-root .n1 { grid-column: span 5; grid-row: span 3; background: linear-gradient(160deg, #2a1f24, ${accent}); }
#manicure-demo-root .n2 { grid-column: span 4; grid-row: span 2; background: linear-gradient(200deg, #1a1418, #4a3a42); }
#manicure-demo-root .n3 { grid-column: span 3; grid-row: span 2; background: linear-gradient(180deg, #e8d5cf33, #0a090a); }
#manicure-demo-root .n4 { grid-column: span 3; grid-row: span 3; background: linear-gradient(145deg, #120e11, ${accent}88); }
#manicure-demo-root .n5 { grid-column: span 4; grid-row: span 2; background: linear-gradient(120deg, #3b2f35, #1a1418); }
#manicure-demo-root .n6 { grid-column: span 5; grid-row: span 2; background: linear-gradient(210deg, #c9a99d55, #070607); }
#manicure-demo-root .n7 { grid-column: span 4; grid-row: span 2; background: linear-gradient(165deg, #221a1f, ${accent}44); }
#manicure-demo-root .n8 { grid-column: span 4; grid-row: span 2; background: linear-gradient(190deg, ${accent}66, #0a090a); }
#manicure-demo-root .n9 { grid-column: span 4; grid-row: span 2; background: linear-gradient(175deg, #2d2428, #e8d5cf22); }

#manicure-demo-root .cta-band {
  padding: 3rem 0 6rem;
  text-align: center;
}

#manicure-demo-root .cta-band .rule {
  width: min(420px, 100%);
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--line), transparent);
  margin: 0 auto 2rem;
}

#manicure-demo-root .cta-band blockquote {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 1.35rem;
  color: var(--fog);
  max-width: 32rem;
  margin: 0 auto 1.5rem;
}

#manicure-demo-root .btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.95rem 1.85rem;
  font-family: var(--font-ui);
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  text-decoration: none;
  border: 1px solid var(--accent);
  color: var(--ink);
  background: var(--accent);
  transition: filter 0.2s, transform 0.2s;
}

#manicure-demo-root .btn:hover {
  filter: brightness(1.08);
  transform: translateY(-2px);
}

#manicure-demo-root .btn-ghost {
  margin-left: 0.75rem;
  background: transparent;
  color: var(--nude);
  border-color: var(--line);
}

#manicure-demo-root .chat-fab {
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  z-index: 100;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  border: 1px solid var(--line);
  background: var(--accent);
  color: var(--ink);
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 12px 40px rgba(155, 123, 140, 0.35);
  transition: transform 0.2s;
}

#manicure-demo-root .chat-fab:hover {
  transform: scale(1.06);
}

#manicure-demo-root .chat-panel {
  display: none;
  position: fixed;
  bottom: 5.5rem;
  right: 1.25rem;
  z-index: 100;
  width: min(100vw - 2rem, 22rem);
  max-height: 24rem;
  flex-direction: column;
  border-radius: 2px;
  overflow: hidden;
  border: 1px solid var(--line);
  background: rgba(10, 9, 10, 0.96);
  backdrop-filter: blur(12px);
}

#manicure-demo-root .chat-panel.is-open {
  display: flex;
}

#manicure-demo-root .chat-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--line);
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

#manicure-demo-root .chat-head button {
  background: transparent;
  border: none;
  color: var(--fog);
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  cursor: pointer;
  font-family: var(--font-ui);
}

#manicure-demo-root .chat-head button:hover {
  color: var(--accent);
}

#manicure-demo-root .chat-msgs {
  flex: 1;
  overflow-y: auto;
  padding: 0.75rem 1rem;
  min-height: 10rem;
  max-height: 14rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

#manicure-demo-root .msg { display: flex; }
#manicure-demo-root .msg.user { justify-content: flex-end; }

#manicure-demo-root .msg .bubble {
  max-width: 88%;
  padding: 0.55rem 0.8rem;
  border-radius: 2px;
  font-size: 0.8rem;
  line-height: 1.45;
}

#manicure-demo-root .msg.assistant .bubble {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--line);
  color: var(--fog);
}

#manicure-demo-root .msg.user .bubble {
  background: var(--accent);
  color: var(--ink);
  font-weight: 600;
}

#manicure-demo-root .chat-input-row {
  display: flex;
  gap: 0.5rem;
  padding: 0.75rem;
  border-top: 1px solid var(--line);
}

#manicure-demo-root .chat-input-row input {
  flex: 1;
  min-width: 0;
  border-radius: 2px;
  border: 1px solid var(--line);
  background: rgba(0, 0, 0, 0.35);
  color: var(--nude);
  padding: 0.5rem 0.65rem;
  font-size: 0.8rem;
  font-family: var(--font-ui);
}

#manicure-demo-root .chat-input-row input::placeholder {
  color: rgba(232, 213, 207, 0.35);
}

#manicure-demo-root .chat-input-row input:focus {
  outline: none;
  border-color: var(--accent);
}

#manicure-demo-root .chat-input-row button.send {
  border-radius: 2px;
  border: none;
  padding: 0.5rem 0.75rem;
  font-weight: 800;
  font-size: 0.62rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  background: var(--accent);
  color: var(--ink);
  cursor: pointer;
  font-family: var(--font-ui);
}
`
}

function mountManicureDemoScript(siteName: string) {
  function replyFor(text: string) {
    const t = text.toLowerCase()
    if (/hola|hi|hello|hey|buenas/.test(t)) {
      return `Hi — ${siteName} assistant. I can help with appointments, gel, nail art, or nail care. What are you looking for?`
    }
    if (/cita|book|reserva|appointment|agendar|turno/.test(t)) {
      return 'To book: share day and rough time slot. This is a demo — live we’d link calendar or the studio WhatsApp.'
    }
    if (/gel|acrylic|acrilico|semi|esmalt|manicure|pedicure|nail|uñas|unas/.test(t)) {
      return 'We do builder gel, soft gel, spa manicures, and editorial nail art. Prefer minimal or more artistic?'
    }
    if (/precio|price|cuánto|cost/.test(t)) {
      return 'Pricing depends on service and design. In this demo I steer by category; the live site publishes a clear menu.'
    }
    if (/horario|hours|abierto|cerrado/.test(t)) {
      return 'Demo hours: Tue–Sun. Exact hours are on the main Foundry AI site.'
    }
    if (/donde|ubicación|dirección|map|hamilton/.test(t)) {
      return 'Demo studio in Hamilton, ON. Map and contact at foundryai.live.'
    }
    if (/gracias|thanks/.test(t)) {
      return 'Anytime. Anything else — booking, gel, or nail art?'
    }
    return `Message ${siteName}: try “booking”, “gel”, or “nail art” and I’ll guide you.`
  }

  function el(id: string) {
    return document.getElementById(id)
  }

  const panel = el('mnChatPanel')
  const fab = el('mnChatFab')
  const closeBtn = el('mnChatClose')
  const msgs = el('mnChatMsgs')
  const input = el('mnChatInput') as HTMLInputElement | null
  const sendBtn = el('mnChatSend')

  function addMsg(role: 'user' | 'assistant', text: string) {
    if (!msgs) return
    const row = document.createElement('div')
    row.className = 'msg ' + (role === 'user' ? 'user' : 'assistant')
    const bubble = document.createElement('div')
    bubble.className = 'bubble'
    bubble.textContent = text
    row.appendChild(bubble)
    msgs.appendChild(row)
    msgs.scrollTop = msgs.scrollHeight
  }

  function openChat(open: boolean) {
    if (!panel || !fab || !input) return
    panel.classList.toggle('is-open', open)
    fab.setAttribute('aria-expanded', open ? 'true' : 'false')
    fab.textContent = open ? '✕' : '💬'
    fab.setAttribute('aria-label', open ? 'Close chat' : 'Open chat')
    if (open) setTimeout(() => input.focus(), 50)
  }

  const onFabClick = () => {
    if (!panel) return
    openChat(!panel.classList.contains('is-open'))
  }
  const onCloseClick = () => openChat(false)

  fab?.addEventListener('click', onFabClick)
  closeBtn?.addEventListener('click', onCloseClick)

  if (msgs) msgs.innerHTML = ''
  addMsg('assistant', `Hi — ${siteName} demo chat. Ask about bookings, gel, or nail art.`)

  function send() {
    if (!input) return
    const t = (input.value || '').trim()
    if (!t) return
    addMsg('user', t)
    input.value = ''
    addMsg('assistant', replyFor(t))
  }

  const onSendClick = () => send()
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      send()
    }
  }

  sendBtn?.addEventListener('click', onSendClick)
  input?.addEventListener('keydown', onKeyDown)

  return () => {
    fab?.removeEventListener('click', onFabClick)
    closeBtn?.removeEventListener('click', onCloseClick)
    sendBtn?.removeEventListener('click', onSendClick)
    input?.removeEventListener('keydown', onKeyDown)
  }
}

export default function ManicurePage() {
  const manicureCss = useMemo(() => buildManicureCss(manicureConfig.primaryColor), [manicureConfig.primaryColor])

  useEffect(() => {
    let link = document.getElementById(FONT_LINK_ID) as HTMLLinkElement | null
    if (!link) {
      link = document.createElement('link')
      link.id = FONT_LINK_ID
      link.rel = 'stylesheet'
      link.href =
        'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Syne:wght@400;500;600;700;800&display=swap'
      document.head.appendChild(link)
    }

    const teardown = mountManicureDemoScript(manicureConfig.siteName)

    return () => {
      teardown()
      document.getElementById(FONT_LINK_ID)?.remove()
    }
  }, [])

  return (
    <>
      <DemoStickyHeader
        brandTitle={manicureConfig.siteName}
        industryLine={demoHeaderIndustryLine('Manicure Studio')}
        menuHref="#galeria"
        bookHref="/#contact"
      />
      <div id="manicure-demo-root">
        <style id={STYLE_ID} dangerouslySetInnerHTML={{ __html: manicureCss }} />
        <div className="wash" aria-hidden />
        <div className="grain" aria-hidden />

        <main>
          <section className="hero wrap">
          <div className="hero-grid">
            <div className="hero-rail" aria-hidden>
              Editorial · manicure · Hamilton
            </div>
            <div className="hero-main">
              <p className="hero-kicker">Studio manicure — Foundry AI demo</p>
              <h1>
                Nails like a <em>runway</em> line
              </h1>
              <p className="hero-lead">
                Editorial black, muted mauve, and warm nude: asymmetric layout and a nail-art grid for brands that want
                magazine energy, not a template.
              </p>
              <div className="hero-aside">
                <div className="hero-panel">
                  <p>
                    Matte textures, glass shine, and micro-detail. This demo includes a chat with simulated replies using
                    the primary color from config.
                  </p>
                </div>
                <div className="hero-visual" aria-hidden>
                  <div className="hero-photo">
                    <Image src={HERO_IMAGE} alt="Editorial manicure close-up" fill unoptimized priority />
                  </div>
                  <span className="sw" />
                  <span className="sw" />
                  <div className="arch" />
                  <div className="caption">Nude / mauve / ink</div>
                </div>
              </div>
            </div>
          </div>
          </section>

          <section className="split wrap">
            <div>
              <h2>
                The edit
                <span>asymmetric</span>
              </h2>
            </div>
            <div className="split-body">
              <p>
                Full-bleed column and display type against UI sans: the “editorial” content lives in an offset block, like
                the reference manicure layout.
              </p>
              <p>
                In production: lookbook, pricing, booking policies, and a gallery synced with Instagram or a CDN.
              </p>
            </div>
          </section>

          <section id="galeria" className="gallery-section wrap">
            <p className="label">Nail gallery · grid</p>
            <div className="nail-gallery" aria-label="Demo nail gallery">
              {GALLERY_IMAGES.map((src, idx) => {
                const i = idx + 1
                return (
                <div key={i} className={`nail n${i}`}>
                  <div className="nail-image">
                    <Image src={src} alt={`Nail gallery design ${i}`} fill unoptimized />
                  </div>
                  <span className="shine" />
                </div>
                )
              })}
            </div>
          </section>

          <section className="cta-band wrap">
            <div className="rule" />
            <blockquote>“Less visual noise, more brand silhouette — the site breathes like the studio.”</blockquote>
            <div>
              <a className="btn" href="/#contact">
                I want this site
              </a>
              <a className="btn btn-ghost" href="/demos">
                View demos
              </a>
            </div>
          </section>
        </main>

        <div className="chat-panel" id="mnChatPanel" role="dialog" aria-label={`Chat ${manicureConfig.siteName}`}>
          <div className="chat-head">
            <span>Demo chat</span>
            <button type="button" id="mnChatClose">
              Close
            </button>
          </div>
          <div className="chat-msgs" id="mnChatMsgs" />
          <div className="chat-input-row">
            <input type="text" id="mnChatInput" placeholder="Message…" autoComplete="off" />
            <button type="button" className="send" id="mnChatSend">
              Send
            </button>
          </div>
        </div>
        <button type="button" className="chat-fab" id="mnChatFab" aria-expanded="false" aria-label="Open chat">
          💬
        </button>
      </div>
    </>
  )
}
