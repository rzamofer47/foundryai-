const TEL = 'tel:+19055550166'

const SERVICES = [
  {
    icon: '💧',
    tag: 'emerg' as const,
    tagText: '24/7 Emergency',
    name: 'Emergency Leak Repair',
    desc: 'Burst pipes, leaking fixtures and water damage. We respond within 60 minutes anywhere in Hamilton — guaranteed.',
    price: 'From $150 call fee',
  },
  {
    icon: '🚽',
    tag: 'same' as const,
    tagText: 'Same Day',
    name: 'Drain & Toilet Service',
    desc: 'Clogged drains, running toilets and sewer backups. Camera inspection available for stubborn blockages.',
    price: 'From $95 call fee',
  },
  {
    icon: '🌡️',
    tag: 'emerg' as const,
    tagText: 'Emergency Available',
    name: 'Water Heater',
    desc: 'Repair or replace tank and tankless water heaters. All brands serviced. Emergency installs available same day.',
    price: 'From $250 labour',
  },
  {
    icon: '🚿',
    tag: 'same' as const,
    tagText: 'Book Ahead',
    name: 'Bathroom Renovation',
    desc: 'Full plumbing rough-in and finishing for bathroom renovations. Tubs, showers, vanities and more.',
    price: 'From $800 rough-in',
  },
  {
    icon: '🍳',
    tag: 'same' as const,
    tagText: 'Same Day Available',
    name: 'Kitchen Plumbing',
    desc: 'Sink installation, dishwasher hookup, garbage disposal and full kitchen renovation rough-in work.',
    price: 'From $350',
  },
  {
    icon: '🔍',
    tag: 'same' as const,
    tagText: 'By Appointment',
    name: 'Camera Inspection',
    desc: 'Video inspection of drain lines to diagnose blockages, cracks and root intrusion — without digging.',
    price: 'From $199',
  },
] as const

const STATUS_ROWS = [
  {
    icon: '💧',
    name: 'Emergency Repairs',
    sub: 'Burst pipes · leaks · flooding',
    badge: 'badge-avail',
    badgeText: 'Available',
  },
  {
    icon: '🚽',
    name: 'Drain & Toilet',
    sub: 'Clogs · backups · camera inspection',
    badge: 'badge-avail',
    badgeText: 'Available',
  },
  {
    icon: '🌡️',
    name: 'Water Heater',
    sub: 'Repair & installation · all brands',
    badge: 'badge-busy',
    badgeText: '1–2hr wait',
  },
  {
    icon: '🏠',
    name: 'Renovations',
    sub: 'Bathrooms · kitchens · full rough-in',
    badge: 'badge-book',
    badgeText: 'Book ahead',
  },
] as const

const WHY = [
  {
    icon: '⚡',
    title: '60-Min Response',
    desc: 'For emergencies in Hamilton we guarantee arrival within 60 minutes — or we discount the job.',
  },
  {
    icon: '📋',
    title: 'Free Written Estimates',
    desc: 'Written quote before any work starts. No hidden charges. No surprises on your bill. Ever.',
  },
  {
    icon: '🗣️',
    title: 'English & Spanish',
    desc: "Bilingual team. Explain your plumbing problem in whichever language you're comfortable with.",
  },
  {
    icon: '🏆',
    title: 'Licensed & Insured',
    desc: 'Fully licensed master plumbers. $2M liability insurance. Your home is always protected.',
  },
] as const

const QUICK = [
  { label: 'Emergency', q: 'I have a plumbing emergency' },
  { label: 'Pricing', q: 'How much does a service call cost?' },
  { label: 'Drain', q: 'My drain is clogged' },
  { label: 'Español', q: '¿Hablan español?' },
] as const

export default function FlowProMarkup() {
  return (
    <>
      <div className="emergency-bar">
        <div className="emerg-text">
          <span className="emerg-dot" />
          🚨 Plumbing emergency? We respond in 60 minutes across Hamilton.
        </div>
        <a href={TEL} className="emerg-num">
          📞 (905) 555-0166 — Call Now
        </a>
      </div>

      <nav>
        <a href="#" className="nav-logo">
          <div className="nav-logo-icon">🔧</div>
          <div className="nav-logo-text">
            <span className="nav-logo-name">FlowPro Plumbing</span>
            <span className="nav-logo-sub">Licensed · Hamilton, Ontario</span>
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
          <a href="#why">Why Us</a>
          <a href="#pricing">Pricing</a>
          <a href={TEL} className="nav-emergency">
            🚨 Emergency
          </a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-pattern" aria-hidden />
        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-badge">
              <span className="emerg-dot" />
              24/7 Emergency Service Available
            </div>
            <h1>
              Hamilton&apos;s
              <br />
              most trusted
              <br />
              <span className="orange">plumbers.</span>
              <br />
              <span className="dim">On call 24/7.</span>
            </h1>
            <p className="hero-desc">
              Licensed master plumbers for emergency repairs, installations and renovations. We show up fast, fix it
              right and charge fair prices. Bilingual — English and Spanish.
            </p>
            <div className="hero-btns">
              <a href={TEL} className="btn-orange">
                🚨 Call Now — (905) 555-0166
              </a>
              <a href="#services" className="btn-navy-out">
                Our Services
              </a>
            </div>
            <div className="hero-trust">
              <div className="trust-item">
                <div className="trust-check">✓</div>
                Licensed & insured — $2M liability
              </div>
              <div className="trust-item">
                <div className="trust-check">✓</div>
                60-minute emergency response guarantee
              </div>
              <div className="trust-item">
                <div className="trust-check">✓</div>
                Free written estimate before any work starts
              </div>
              <div className="trust-item">
                <div className="trust-check">✓</div>
                English & Spanish spoken
              </div>
            </div>
          </div>
          <div className="hero-right">
            <div className="status-header">
              <div className="status-title">Team Status</div>
              <div className="status-live">
                <span className="status-dot" />
                Live
              </div>
            </div>
            {STATUS_ROWS.map((row) => (
              <div key={row.name} className="status-item">
                <div className="status-icon">{row.icon}</div>
                <div className="status-info">
                  <div className="status-name">{row.name}</div>
                  <div className="status-sub">{row.sub}</div>
                </div>
                <div className={`status-badge ${row.badge}`}>{row.badgeText}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="o-strip">
        <div className="o-text">⚡ Guaranteed 60-minute response for emergencies anywhere in Hamilton.</div>
        <a href={TEL} className="o-num">
          (905) 555-0166 →
        </a>
      </div>

      <section className="services" id="services">
        <div className="sec-head">
          <div>
            <div className="sec-label">What we fix</div>
            <div className="sec-title">
              Every plumbing problem, <span className="orange">solved.</span>
            </div>
          </div>
        </div>
        <div className="srv-grid">
          {SERVICES.map((s) => (
            <div key={s.name} className="srv">
              <div className="srv-top">
                <div className="srv-icon">{s.icon}</div>
                <div className={`srv-tag ${s.tag}`}>{s.tagText}</div>
              </div>
              <div className="srv-name">{s.name}</div>
              <div className="srv-desc">{s.desc}</div>
              <div className="srv-price">{s.price}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="why" id="why">
        <div
          className="sec-label"
          style={{ color: 'rgba(248,249,252,.3)' }}
        >
          <span
            style={{
              background: 'rgba(248,249,252,.15)',
              height: '2px',
              width: '1.2rem',
              display: 'inline-block',
              verticalAlign: 'middle',
              marginRight: '.6rem',
            }}
          />
          Why FlowPro
        </div>
        <div className="sec-title" style={{ color: 'var(--white)' }}>
          Hamilton trusts us <span className="orange">every time.</span>
        </div>
        <div className="why-grid">
          {WHY.map((w) => (
            <div key={w.title} className="why-card">
              <span className="why-icon">{w.icon}</span>
              <div className="why-title">{w.title}</div>
              <div className="why-desc">{w.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="pricing" id="pricing">
        <div className="sec-label">Transparent pricing</div>
        <div className="sec-title">
          No surprises. <span className="orange">Ever.</span>
        </div>
        <div className="price-grid">
          <div className="price-card">
            <div className="price-cat">Standard Call</div>
            <div className="price-amount">$95</div>
            <div className="price-period">Service fee · applied to repair cost · Mon–Fri 8am–6pm</div>
            <ul className="price-items">
              <li>Licensed plumber dispatched</li>
              <li>Free written estimate on site</li>
              <li>Parts quoted upfront</li>
              <li>No hidden charges</li>
            </ul>
            <a href={TEL} className="price-cta navy">
              Book Standard Call
            </a>
          </div>
          <div className="price-card featured">
            <div className="price-cat">Emergency Call</div>
            <div className="price-amount">$150</div>
            <div className="price-period">After hours · weekends · holidays · 24/7</div>
            <ul className="price-items">
              <li>60-minute response guarantee</li>
              <li>Available 24 hours, 365 days</li>
              <li>Applied to total repair cost</li>
              <li>Free written estimate included</li>
              <li>No extra night or weekend charge</li>
            </ul>
            <a href={TEL} className="price-cta orange">
              Call Emergency Line
            </a>
          </div>
          <div className="price-card">
            <div className="price-cat">Renovation Quote</div>
            <div className="price-amount">Free</div>
            <div className="price-period">On-site estimate for all renovation work</div>
            <ul className="price-items">
              <li>Bathroom rough-in from $800</li>
              <li>Kitchen hookup from $350</li>
              <li>Water heater install from $250</li>
              <li>Detailed written quote provided</li>
            </ul>
            <a href={TEL} className="price-cta outline">
              Book Free Estimate
            </a>
          </div>
        </div>
      </section>

      <section className="cta">
        <div>
          <h2>
            Pipe burst at 2am?
            <br />
            We answer.
          </h2>
          <p>24/7 emergency plumbing across Hamilton. 60-minute response guaranteed.</p>
        </div>
        <div className="cta-btns">
          <a href={TEL} className="btn-white">
            🚨 (905) 555-0166
          </a>
          <a href="https://wa.me/19055550166" className="btn-white-out" target="_blank" rel="noopener noreferrer">
            WhatsApp Us
          </a>
        </div>
      </section>

      <footer>
        <div className="f-brand">
          <a href="#" className="f-logo">
            <div className="f-logo-icon">🔧</div>
            <div className="f-logo-text">FlowPro Plumbing</div>
          </a>
          <p>Licensed plumbers serving Hamilton and surrounding areas. Available 24/7 for emergencies. English & Spanish.</p>
        </div>
        <div className="f-col">
          <h4>Contact</h4>
          <a href={TEL}>(905) 555-0166 — 24/7</a>
          <p>Hamilton, Ontario</p>
          <p>Mon–Fri 8am–6pm (Standard)</p>
          <p>24/7 Emergency Line always open</p>
        </div>
        <div className="f-col">
          <h4>Services</h4>
          <p>Emergency Repairs · Drains</p>
          <p>Water Heaters · Renovations</p>
          <p>Camera Inspection · Kitchen</p>
          <p style={{ marginTop: '.8rem' }}>
            Website by{' '}
            <a href="https://foundryai.live" style={{ color: 'var(--orange)' }}>
              Foundry AI
            </a>
          </p>
        </div>
        <div className="f-bottom">
          <span>© 2026 FlowPro Plumbing. Hamilton, Ontario. Licensed & Insured.</span>
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
          <div className="c-avatar">🔧</div>
          <div>
            <div className="c-name">FlowPro Assistant</div>
            <div className="c-status">
              <span className="sdot" />
              Online · Emergency line open 24/7
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
          <input
            id="c-input"
            type="text"
            placeholder="Describe your plumbing problem..."
            autoComplete="off"
          />
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
