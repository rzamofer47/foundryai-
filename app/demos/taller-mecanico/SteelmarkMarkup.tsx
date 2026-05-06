import Image from 'next/image'

const TEL = 'tel:+19055550111'

const SERVICE_ROWS = [
  {
    icon: '🛢️',
    name: 'Oil Change & Filter',
    desc: 'Conventional, synthetic blend or full synthetic. In and out in 30 minutes.',
    time: '30 min',
    tag: 'fast' as const,
    tagText: 'Same Day',
    price: '$59',
  },
  {
    icon: '🛑',
    name: 'Brake Service',
    desc: 'Pads, rotors, calipers and brake fluid flush. Free brake inspection with any service.',
    time: '1–2 hrs',
    tag: 'fast',
    tagText: 'Same Day',
    price: '$149',
  },
  {
    icon: '🔍',
    name: 'Engine Diagnostics',
    desc: 'Full computer scan and written report. Free if we do the repair.',
    time: '1 hr',
    tag: 'free' as const,
    tagText: 'Free w/ repair',
    price: '$89',
  },
  {
    icon: '❄️',
    name: 'AC Service & Recharge',
    desc: 'Full AC inspection, recharge and leak test. Ready before summer.',
    time: '1–2 hrs',
    tag: 'fast',
    tagText: 'Same Day',
    price: '$129',
  },
  {
    icon: '⚙️',
    name: 'Transmission Service',
    desc: 'Fluid change, filter replacement and pan gasket. Prevent $3,000 repairs with a $199 service.',
    time: '2 hrs',
    tag: 'fast',
    tagText: 'Same Day',
    price: '$199',
  },
  {
    icon: '🔩',
    name: 'Tire Change & Balancing',
    desc: 'Mount, balance and install. Winter/summer swap with storage available.',
    time: '1 hr',
    tag: 'fast',
    tagText: 'Same Day',
    price: '$80/set',
  },
] as const

const WHY = [
  {
    icon: '📋',
    title: 'Written Estimates Always',
    text: 'You get a written quote before we touch your car. No verbal agreements. No surprise charges on pickup.',
  },
  {
    icon: '⚡',
    title: 'Same-Day Service',
    text: "Most repairs completed the same day you drop off. We know you can't be without your car for long.",
  },
  {
    icon: '🗣️',
    title: 'English & Spanish',
    text: "Bilingual mechanics. Explain your car problem in whichever language you're most comfortable with.",
  },
  {
    icon: '🏆',
    title: 'ASE Certified',
    text: 'All mechanics are ASE-certified with 10+ years experience on domestic and import vehicles.',
  },
] as const

const QUICK = [
  { label: 'Oil Change', q: 'How much is an oil change?' },
  { label: 'Check Engine', q: 'My check engine light is on' },
  { label: 'Hours', q: 'What are your hours?' },
  { label: 'Español', q: '¿Hablan español?' },
] as const

export default function SteelmarkMarkup() {
  return (
    <>
      <nav>
        <a href="#" className="nav-logo">
          <div className="nav-logo-mark">⚙️</div>
          <div>
            <div className="nav-logo-name">Steelmark Auto</div>
            <div className="nav-logo-sub">Certified Auto Repair · Hamilton</div>
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
          <a href={TEL} className="nav-quote">
            Get a Quote
          </a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-left">
          <div className="hero-year">Certified Auto Repair · Hamilton, ON</div>
          <h1>
            WE FIX
            <br />
            <span className="red">CARS.</span>
            <br />
            <span className="outline">NO</span>
            <br />
            BS.
          </h1>
          <p className="hero-desc">
            Honest diagnostics, fair prices, fast turnaround. ASE-certified mechanics serving Hamilton for over 10
            years. We tell you what&apos;s wrong — and only fix what needs fixing.
          </p>
          <div className="hero-btns">
            <a href={TEL} className="btn-red">
              Get a Free Quote →
            </a>
            <a href="#services" className="btn-ghost">
              Our Services
            </a>
          </div>
          <div className="hero-badges">
            <span className="hbadge">Same-Day Service</span>
            <span className="hbadge">Free Diagnostics</span>
            <span className="hbadge">English · Spanish</span>
            <span className="hbadge">10+ Years Hamilton</span>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-visual">
            <div className="hero-mechanic-wrap">
              <Image
                className="hero-mechanic-img"
                src="/demos/taller-mecanico/hero-mechanic.png"
                alt="Mechanic inspecting a vehicle under a lift"
                fill
                sizes="(max-width: 900px) 72vw, min(360px, 26vw)"
                priority
              />
            </div>
          </div>
          <div className="spec-grid">
            <div className="spec-box">
              <div className="spec-val">
                10<span className="unit">yr</span>
              </div>
              <div className="spec-label">In Hamilton</div>
            </div>
            <div className="spec-box">
              <div className="spec-val">
                5<span className="unit">★</span>
              </div>
              <div className="spec-label">Google rating</div>
            </div>
            <div className="spec-box">
              <div className="spec-val">ASE</div>
              <div className="spec-label">Certified</div>
            </div>
            <div className="spec-box">
              <div className="spec-val">
                EN<span className="unit">·</span>ES
              </div>
              <div className="spec-label">Languages</div>
            </div>
          </div>
        </div>
      </section>

      <div className="red-banner">
        <div className="rb-text">⚡ Same-day service available for most repairs · Free written estimate always provided</div>
        <a href={TEL} className="rb-num">
          (905) 555-0111 →
        </a>
      </div>

      <section className="services" id="services">
        <div className="sec-head">
          <div>
            <div className="sec-tag">What we do</div>
            <div className="sec-title">
              Our <span className="red">Services</span>
            </div>
          </div>
          <p
            style={{
              fontSize: '.78rem',
              color: 'var(--muted)',
              maxWidth: '240px',
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            Free written estimate before we touch your car. No surprise charges. Ever.
          </p>
        </div>
        <table className="srv-table">
          <thead>
            <tr>
              <th />
              <th>Service</th>
              <th>Description</th>
              <th>Time</th>
              <th />
              <th style={{ textAlign: 'right' }}>From</th>
            </tr>
          </thead>
          <tbody>
            {SERVICE_ROWS.map((row) => (
              <tr key={row.name} className="srv-row">
                <td className="srv-icon-cell">{row.icon}</td>
                <td className="srv-name-cell">{row.name}</td>
                <td className="srv-desc-cell">{row.desc}</td>
                <td className="srv-time-cell">{row.time}</td>
                <td className="srv-tag-cell">
                  <span className={`stag ${row.tag}`}>{row.tagText}</span>
                </td>
                <td className="srv-price-cell">{row.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="why" id="why">
        <div className="why-left">
          <div className="sec-tag">Why Steelmark</div>
          <div className="sec-title">
            Honest.
            <br />
            <span className="red">Fast.</span>
            <br />
            Certified.
          </div>
          <p className="why-desc">
            We&apos;ve been fixing cars in Hamilton since 2014. No upselling, no pressure. You get a written estimate,
            we wait for your approval, and we only charge for what we did.
          </p>
        </div>
        <div className="why-right">
          {WHY.map((w) => (
            <div key={w.title} className="why-card">
              <span className="why-icon">{w.icon}</span>
              <div className="why-title">{w.title}</div>
              <div className="why-text">{w.text}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <div>
          <h2>
            Car trouble?
            <br />
            We&apos;ve got you.
          </h2>
          <p>Call now or chat below. Free quote in minutes. No pressure.</p>
        </div>
        <div className="cta-btns">
          <a href={TEL} className="btn-white">
            📞 (905) 555-0111
          </a>
          <a href="https://wa.me/19055550111" className="btn-wout" target="_blank" rel="noopener noreferrer">
            WhatsApp Us
          </a>
        </div>
      </section>

      <footer>
        <div className="f-brand">
          <a href="#" className="f-logo">
            <div className="f-logo-mark">⚙️</div>
            <div className="f-logo-text">Steelmark Auto</div>
          </a>
          <p>ASE-certified auto repair serving Hamilton and surrounding areas since 2014. English & Spanish.</p>
        </div>
        <div className="f-col">
          <h4>Contact</h4>
          <a href={TEL}>(905) 555-0111</a>
          <p>88 Kenilworth Ave N, Hamilton ON</p>
          <p>Mon–Fri 8am–6pm · Sat 9am–4pm</p>
        </div>
        <div className="f-col">
          <h4>Services</h4>
          <p>Oil Change · Brakes · Diagnostics</p>
          <p>AC Service · Transmission · Tires</p>
          <p style={{ marginTop: '.8rem' }}>
            Website by{' '}
            <a href="https://foundryai.live" style={{ color: 'var(--red)' }}>
              Foundry AI
            </a>
          </p>
        </div>
        <div className="f-bot">
          <span>© 2026 Steelmark Auto. Hamilton, Ontario. ASE Certified.</span>
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
            <div className="c-name">Steelmark Assistant</div>
            <div className="c-status">
              <span className="sdot" />
              Online · Free quotes available
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
          <input id="c-input" type="text" placeholder="Describe your car problem..." autoComplete="off" />
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
