const TEL = 'tel:+19055550122'

const CREDENTIALS = [
  { icon: '✦', text: 'CPA Certified · Ontario' },
  { icon: '✦', text: 'English & Spanish' },
  { icon: '✦', text: 'Fixed Monthly Pricing' },
  { icon: '✦', text: 'Same-Week Onboarding' },
] as const

const SERVICES = [
  {
    icon: '📒',
    name: 'Bookkeeping',
    desc: 'Monthly reconciliation, expense categorization and financial reporting. You always know exactly where your money goes.',
    price: 'From $150 / month',
  },
  {
    icon: '🧾',
    name: 'Tax Preparation',
    desc: 'Personal and corporate returns. We maximize your legal deductions and file accurately and on time, every year.',
    price: 'From $299 / return',
  },
  {
    icon: '🏛️',
    name: 'HST / GST Filing',
    desc: 'Quarterly and annual returns for Ontario businesses. Never miss a CRA deadline or pay an avoidable penalty again.',
    price: 'From $120 / quarter',
  },
  {
    icon: '🚀',
    name: 'Business Setup',
    desc: 'CRA account, HST registration, business number and first-year financial structure for new businesses.',
    price: '$499 one-time',
  },
  {
    icon: '💼',
    name: 'Payroll Services',
    desc: 'Process payroll, source deductions and T4 slips for your team. Fully compliant with all CRA requirements.',
    price: 'From $80 / month',
  },
  {
    icon: '📊',
    name: 'Financial Planning',
    desc: 'Cash flow forecasting, budget planning and strategic advice. Know your numbers and make informed decisions.',
    price: 'From $200 / session',
  },
] as const

const STEPS = [
  {
    num: '01',
    title: 'Free Consultation',
    desc: 'A 15-minute call to understand your business and financial situation. No obligation, no charge.',
  },
  {
    num: '02',
    title: 'Onboarding',
    desc: 'We connect your accounts, set up your books and establish a reporting structure. Done the same week.',
  },
  {
    num: '03',
    title: 'We Handle It',
    desc: 'Monthly reports, deadline reminders and filings — all managed by us. You receive a clear monthly summary.',
  },
  {
    num: '04',
    title: 'You Grow',
    desc: 'With clean books and full financial clarity, you can make smarter business decisions with confidence.',
  },
] as const

const QUICK = [
  { label: 'Pricing', q: 'How much does bookkeeping cost?' },
  { label: 'HST', q: 'Do I need to register for HST?' },
  { label: 'Consult', q: 'How do I book a consultation?' },
  { label: 'Español', q: '¿Hablan español?' },
] as const

export default function MeridianAccountingMarkup() {
  return (
    <>
      <nav>
        <a href="#" className="nav-logo">
          <div className="nav-logo-emblem" aria-hidden />
          <div className="nav-logo-text">
            <span className="nav-logo-name">Meridian Accounting</span>
            <span className="nav-logo-sub">CPA · Hamilton, Ontario</span>
          </div>
        </a>
        <div className="nav-center">
          <a href="/demos" className="nav-demo-link">
            View All Demos
          </a>
          <a href="/" className="nav-demo-link">
            Foundryai.live
          </a>
        </div>
        <div className="nav-right">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#process">How It Works</a>
          <a href={TEL} className="nav-cta">
            Free Consultation
          </a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-left">
          <div className="hero-eyebrow">Certified Public Accountants · Hamilton, Ontario</div>
          <h1>
            Financial clarity
            <br />
            for <em>growing</em>
            <br />
            businesses.
          </h1>
          <div className="hero-rule" />
          <p className="hero-desc">
            We provide accounting, bookkeeping and tax services for small businesses and sole proprietors across Hamilton.
            Precise, proactive and always available — in English and Spanish.
          </p>
          <div className="hero-btns">
            <a href={TEL} className="btn-gold">
              Schedule a Free Consultation
            </a>
            <a href="#services" className="btn-ghost">
              Our Services
            </a>
          </div>
          <div className="hero-credentials">
            {CREDENTIALS.map((c) => (
              <div key={c.text} className="cred">
                <span className="cred-icon">{c.icon}</span>
                {c.text}
              </div>
            ))}
          </div>
        </div>
        <div className="hero-right">
          <div className="card-stack">
            <div className="card-back" aria-hidden />
            <div className="card-main">
              <div className="card-header">
                <div className="card-title">Annual Overview · FY 2025</div>
                <div className="card-badge">On Track</div>
              </div>
              <div className="card-metric">
                <div className="metric-label">Net Revenue</div>
                <div className="metric-value">$84,320</div>
                <div className="metric-change">↑ 23% vs prior year</div>
              </div>
              <hr className="card-divider" />
              <div className="card-row">
                <span className="card-row-label">Tax savings identified</span>
                <span className="card-row-val green">$6,240</span>
              </div>
              <div className="card-row">
                <span className="card-row-label">HST filed</span>
                <span className="card-row-val">On time</span>
              </div>
              <div className="card-row">
                <span className="card-row-label">Next filing deadline</span>
                <span className="card-row-val gold">Apr 30, 2026</span>
              </div>
              <div className="card-row">
                <span className="card-row-label">Books status</span>
                <span className="card-row-val green">Reconciled ✓</span>
              </div>
              <div className="card-footer">
                <span>✦</span>
                Meridian Accounting · Monthly Report
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="sec-rule" />
        <div className="sec-eyebrow">What we offer</div>
        <div className="sec-title">
          Services built for
          <br />
          <em>small business.</em>
        </div>
        <div className="srv-grid">
          {SERVICES.map((s) => (
            <div key={s.name} className="srv">
              <div className="srv-icon">{s.icon}</div>
              <div className="srv-name">{s.name}</div>
              <div className="srv-desc">{s.desc}</div>
              <div className="srv-price">{s.price}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-left">
          <div className="sec-eyebrow">Who we are</div>
          <div className="sec-title">
            Trusted by Hamilton
            <br />
            businesses <em>since 2012.</em>
          </div>
          <p className="about-desc">
            Meridian Accounting is an independent CPA practice based in Hamilton, Ontario. We work exclusively with
            small businesses and sole proprietors — we understand your challenges because we&apos;ve helped hundreds of
            businesses like yours navigate them. We serve our clients in English and Spanish.
          </p>
          <div className="about-stats">
            <div>
              <div className="astat-n">
                300<span>+</span>
              </div>
              <div className="astat-l">Clients served</div>
            </div>
            <div>
              <div className="astat-n">
                12<span>yr</span>
              </div>
              <div className="astat-l">In Hamilton</div>
            </div>
            <div>
              <div className="astat-n">
                5<span>★</span>
              </div>
              <div className="astat-l">Google</div>
            </div>
          </div>
        </div>
        <div className="about-right">
          <div className="sec-eyebrow">Get in touch</div>
          <div className="sec-title">
            We are <em>here for you.</em>
          </div>
          <div className="contact-block">
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <div className="contact-label">Phone</div>
                <div className="contact-val">
                  <a href={TEL}>(905) 555-0122</a> · Mon–Fri 9am–5pm
                </div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <div className="contact-label">Office</div>
                <div className="contact-val">
                  500 King St W, Suite 201
                  <br />
                  Hamilton, Ontario
                </div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">🌐</div>
              <div>
                <div className="contact-label">Languages</div>
                <div className="contact-val">English & Spanish — atendemos en español</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📅</div>
              <div>
                <div className="contact-label">Free Consultation</div>
                <div className="contact-val">15-minute call · No commitment · No charge</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="process" id="process">
        <div className="sec-rule" />
        <div className="sec-eyebrow">How it works</div>
        <div className="sec-title">
          Start in <em>four steps.</em>
        </div>
        <div className="steps">
          {STEPS.map((s) => (
            <div key={s.num} className="step">
              <div className="step-num">{s.num}</div>
              <div className="step-title">{s.title}</div>
              <div className="step-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <div>
          <h2>
            Stop worrying about
            <br />
            your <em>taxes.</em>
          </h2>
          <p>Schedule a free 15-minute consultation today. English and Spanish. Hamilton, Ontario.</p>
        </div>
        <div className="cta-btns">
          <a href={TEL} className="btn-white">
            📞 (905) 555-0122
          </a>
          <a href="https://wa.me/19055550122" className="btn-ghost2" target="_blank" rel="noopener noreferrer">
            WhatsApp Us
          </a>
        </div>
      </section>

      <footer>
        <div className="f-brand">
          <a href="#" className="f-logo-wrap">
            <div className="f-emblem">M</div>
            <div className="f-name">Meridian Accounting</div>
          </a>
          <p className="f-tagline">CPA-certified accounting for small businesses in Hamilton, Ontario. English & Spanish.</p>
        </div>
        <div className="f-col">
          <h4>Contact</h4>
          <p>
            500 King St W, Suite 201
            <br />
            Hamilton, Ontario
          </p>
          <a href={TEL}>(905) 555-0122</a>
          <p>Mon–Fri · 9:00am – 5:00pm</p>
        </div>
        <div className="f-col">
          <h4>Services</h4>
          <p>Bookkeeping · Tax Returns</p>
          <p>HST / GST Filing · Payroll</p>
          <p>Business Setup · Planning</p>
          <p style={{ marginTop: '.8rem' }}>
            Website by{' '}
            <a href="https://foundryai.live" style={{ color: 'var(--gold2)' }}>
              Foundry AI
            </a>
          </p>
        </div>
        <div className="f-bottom">
          <span>© 2026 Meridian Accounting. Hamilton, Ontario. CPA Licensed.</span>
          <span>
            Built by <a href="https://foundryai.live">Foundry AI</a>
          </span>
        </div>
      </footer>

      <button type="button" id="chat-toggle" aria-label="Open chat" aria-expanded="false">
        <svg className="ico ico-chat" viewBox="0 0 24 24" fill="white" aria-hidden>
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
        </svg>
        <svg className="ico ico-close" viewBox="0 0 24 24" fill="white" aria-hidden>
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </svg>
      </button>
      <div id="chat-window">
        <div className="c-header">
          <div className="c-avatar">M</div>
          <div>
            <div className="c-name">Meridian Assistant</div>
            <div className="c-status">
              <span className="sdot" />
              Online · Free consultation available
            </div>
          </div>
        </div>
        <div id="c-msgs" />
        <div className="c-quick" id="qwrap">
          {QUICK.map((b) => (
            <button key={b.label} type="button" className="qb" data-q={b.q}>
              {b.label}
            </button>
          ))}
        </div>
        <div className="c-bar">
          <input id="c-input" type="text" placeholder="Ask about taxes, bookkeeping, HST..." autoComplete="off" />
          <button type="button" id="c-send" aria-label="Send message">
            <svg viewBox="0 0 24 24" aria-hidden>
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}
