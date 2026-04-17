import Logo from '@/components/Logo'
import EmailForm from '@/components/EmailForm'
import ServiceCard from '@/components/ServiceCard'

const services = [
  {
    title: 'AI phone & chat agents',
    desc: 'Never miss a lead. We build AI assistants that answer calls, book appointments, and reply to messages — 24/7, in your brand voice.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 5a2 2 0 012-2h1.5a1 1 0 011 .8l.7 3.2a1 1 0 01-.3 1L6.6 9.3a11 11 0 004.1 4.1l1.3-1.3a1 1 0 011-.3l3.2.7a1 1 0 01.8 1V15a2 2 0 01-2 2C7.2 17 3 12.8 3 7.5V5z" stroke="#E8622A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Web design & development',
    desc: 'Fast, modern websites and landing pages built to convert. From single-page to full business platforms — delivered in days, not months.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="4" width="16" height="12" rx="2" stroke="#E8622A" strokeWidth="1.2"/>
        <path d="M6 8l-2 2 2 2M14 8l2 2-2 2M11 7l-2 6" stroke="#E8622A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Business automation',
    desc: 'Connect your tools, automate your workflows, and reclaim your time. We integrate AI into the systems you already use.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="3" stroke="#E8622A" strokeWidth="1.2"/>
        <path d="M10 3v2M10 15v2M3 10h2M15 10h2M5.05 5.05l1.41 1.41M13.54 13.54l1.41 1.41M5.05 14.95l1.41-1.41M13.54 6.46l1.41-1.41" stroke="#E8622A" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Apps & web games',
    desc: 'Custom web applications and browser games built from scratch — monetized with ads or subscriptions from day one.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="5" width="16" height="12" rx="2" stroke="#E8622A" strokeWidth="1.2"/>
        <path d="M6 11h2M7 10v2M12 11h2M10 3l2 2H8l2-2z" stroke="#E8622A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

const steps = [
  { n: '01', title: 'Tell us what you need', desc: "Drop your email and we'll reach out for a free 20-minute call. No pressure, no pitch deck." },
  { n: '02', title: 'We build it fast', desc: 'Most projects are live in 1–2 weeks. We handle design, code, and deployment.' },
  { n: '03', title: 'You focus on your business', desc: 'Your site, agent, or app runs on its own. We stay available for updates and growth.' },
]

const audience = [
  { label: 'Sole proprietors', sub: 'who wear every hat' },
  { label: 'Local businesses', sub: 'ready to modernize' },
  { label: 'Startups', sub: 'that need to move fast' },
  { label: 'Service providers', sub: 'clinics, agencies, studios' },
]

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', background: '#0D0D0D' }}>

      <nav style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '18px 32px', borderBottom: '0.5px solid #1E1E1B',
        position: 'sticky', top: 0, background: 'rgba(13,13,13,0.95)',
        backdropFilter: 'blur(8px)', zIndex: 50,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Logo size={28} />
          <span style={{ fontSize: 16, fontWeight: 500, color: '#F5F5F3', letterSpacing: '-0.3px' }}>
            Foundry<span style={{ color: '#E8622A' }}>.ai</span>
          </span>
        </div>
        <a href="#contact" style={{
          fontSize: 13, color: '#E8622A', textDecoration: 'none',
          border: '0.5px solid #3A1F10', padding: '6px 14px',
          borderRadius: 6, background: '#1A0E08',
        }}>
          Get in touch
        </a>
      </nav>

      <section style={{
        padding: '80px 24px 72px', textAlign: 'center',
        borderBottom: '0.5px solid #1E1E1B', maxWidth: 720, margin: '0 auto',
      }}>
        <div className="animate-fade-up delay-1" style={{
          display: 'inline-block', fontSize: 11, color: '#E8622A',
          border: '0.5px solid #3A1F10', background: '#1A0E08',
          padding: '4px 12px', borderRadius: 20,
          letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 24,
        }}>
          Now accepting clients — Hamilton, ON & remote
        </div>
        <h1 className="animate-fade-up delay-2" style={{
          fontSize: 'clamp(32px, 6vw, 52px)', fontWeight: 500, color: '#F5F5F3',
          lineHeight: 1.15, letterSpacing: '-1px', marginBottom: 20,
        }}>
          AI tools that work<br />
          <span style={{ color: '#E8622A' }}>while you sleep.</span>
        </h1>
        <p className="animate-fade-up delay-3" style={{
          fontSize: 16, color: '#555551', lineHeight: 1.7,
          maxWidth: 480, margin: '0 auto 36px',
        }}>
          We build AI phone agents, websites, automations, apps and games
          for startups and sole proprietors who want to modernize —
          without hiring a team.
        </p>
        <div className="animate-fade-up delay-4">
          <EmailForm variant="hero" />
        </div>
      </section>

      <section style={{ padding: '64px 24px', maxWidth: 720, margin: '0 auto', borderBottom: '0.5px solid #1E1E1B' }}>
        <p style={{ fontSize: 11, color: '#2A2A28', textTransform: 'uppercase', letterSpacing: '0.1em', textAlign: 'center', marginBottom: 40 }}>
          What we build
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 12 }}>
          {services.map((s) => (
            <ServiceCard key={s.title} title={s.title} desc={s.desc} icon={s.icon} />
          ))}
        </div>
      </section>

      <section style={{ padding: '64px 24px', maxWidth: 720, margin: '0 auto', borderBottom: '0.5px solid #1E1E1B' }}>
        <p style={{ fontSize: 11, color: '#2A2A28', textTransform: 'uppercase', letterSpacing: '0.1em', textAlign: 'center', marginBottom: 40 }}>
          Built for
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 8 }}>
          {audience.map(item => (
            <div key={item.label} style={{
              background: '#161612', border: '0.5px solid #1E1E1B',
              borderRadius: 10, padding: '18px 20px',
              display: 'flex', alignItems: 'center', gap: 12,
            }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#E8622A', flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: 13, fontWeight: 500, color: '#F5F5F3' }}>{item.label}</div>
                <div style={{ fontSize: 12, color: '#555551' }}>{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '64px 24px', maxWidth: 720, margin: '0 auto', borderBottom: '0.5px solid #1E1E1B' }}>
        <p style={{ fontSize: 11, color: '#2A2A28', textTransform: 'uppercase', letterSpacing: '0.1em', textAlign: 'center', marginBottom: 40 }}>
          How it works
        </p>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {steps.map((step, i) => (
            <div key={step.n} style={{
              display: 'flex', gap: 24, padding: '24px 0', alignItems: 'flex-start',
              borderBottom: i < steps.length - 1 ? '0.5px solid #1E1E1B' : 'none',
            }}>
              <div style={{ fontSize: 11, color: '#E8622A', fontWeight: 500, letterSpacing: '0.05em', minWidth: 24, paddingTop: 2 }}>
                {step.n}
              </div>
              <div>
                <h3 style={{ fontSize: 15, fontWeight: 500, color: '#F5F5F3', marginBottom: 6 }}>{step.title}</h3>
                <p style={{ fontSize: 13, color: '#555551', lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" style={{ padding: '80px 24px', textAlign: 'center', maxWidth: 600, margin: '0 auto' }}>
        <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 500, color: '#F5F5F3', letterSpacing: '-0.5px', marginBottom: 12 }}>
          Ready to modernize?
        </h2>
        <p style={{ fontSize: 15, color: '#555551', marginBottom: 36, lineHeight: 1.6 }}>
          Leave your email and we&apos;ll reach out within 24 hours. First consultation is free.
        </p>
        <EmailForm variant="footer" />
      </section>

      <footer style={{
        borderTop: '0.5px solid #1E1E1B', padding: '24px 32px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: 12,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Logo size={18} />
          <span style={{ fontSize: 13, color: '#444441', fontWeight: 500 }}>
            Foundry<span style={{ color: '#3A1F10' }}>.ai</span>
          </span>
        </div>
        <p style={{ fontSize: 12, color: '#2A2A28' }}>
          © 2025 Foundry AI · Hamilton, Ontario · Canada
        </p>
      </footer>

    </main>
  )
}
