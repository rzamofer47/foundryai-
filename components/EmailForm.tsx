'use client'

import { useState } from 'react'

export default function EmailForm({ variant = 'hero' }: { variant?: 'hero' | 'footer' }) {
  const [email, setEmail]   = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const isHero = variant === 'hero'

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus('loading')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '12px 20px',
        background: '#0F2018',
        border: '0.5px solid #1D9E75',
        borderRadius: 10,
        maxWidth: isHero ? 400 : 360,
        margin: '0 auto',
      }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="7" stroke="#1D9E75" strokeWidth="1"/>
          <path d="M5 8l2 2 4-4" stroke="#1D9E75" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span style={{ fontSize: 13, color: '#1D9E75' }}>You&apos;re in. We&apos;ll be in touch soon.</span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: isHero ? 420 : 380, margin: '0 auto' }}>
      <div style={{ display: 'flex', gap: 8 }}>
        <input
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="your@email.com"
          style={{
            flex: 1,
            background: '#161612',
            border: '0.5px solid #2A2A28',
            borderRadius: 8,
            padding: '11px 16px',
            fontSize: isHero ? 14 : 13,
            color: '#F5F5F3',
            outline: 'none',
            fontFamily: 'inherit',
          }}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          style={{
            background: status === 'loading' ? '#854F0B' : '#E8622A',
            border: 'none',
            borderRadius: 8,
            padding: isHero ? '11px 20px' : '11px 16px',
            fontSize: isHero ? 14 : 13,
            fontWeight: 500,
            color: '#fff',
            cursor: status === 'loading' ? 'wait' : 'pointer',
            whiteSpace: 'nowrap',
            fontFamily: 'inherit',
            transition: 'background 0.2s',
          }}
        >
          {status === 'loading' ? 'Sending…' : 'Get early access'}
        </button>
      </div>
      {status === 'error' && (
        <p style={{ fontSize: 12, color: '#E24B4A', marginTop: 8, textAlign: 'center' }}>
          Something went wrong. Try again or email us directly.
        </p>
      )}
      <p style={{ fontSize: 11, color: '#333331', marginTop: 8, textAlign: 'center' }}>
        No spam. No credit card. Unsubscribe anytime.
      </p>
    </form>
  )
}
