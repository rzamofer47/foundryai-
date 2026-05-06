/** Converted from html-originals/salon-bella.html — layout, sections, and styling hooks preserved; copy in English. */
export default function SalonBellaMarkup() {
  return (
    <>
      <nav>
        <a href="#" className="nav-logo">
          Bella <span>&</span> Co.
        </a>
        <div className="nav-mid">
          <a href="/demos">View All Demos</a>
          <a href="/">Foundryai.live</a>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#servicios">Services</a>
          </li>
          <li>
            <a href="#nosotros">About</a>
          </li>
          <li>
            <a href="#reservar">Book</a>
          </li>
          <li>
            <a href="#reservar" className="nav-cta">
              Book Online
            </a>
          </li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-left">
          <div className="hero-eyebrow">Beauty Salon · Hamilton, Ontario</div>
          <h1>
            Your beauty,
            <br />
            <em>redefined</em>
            <br />
            with art
          </h1>
          <p className="hero-desc">
            Experts in colour, cuts, and hair treatments. We serve clients in English and Spanish. Over 200 happy guests
            in Hamilton.
          </p>
          <div className="hero-btns">
            <a href="#reservar" className="btn-primary">
              Book appointment →
            </a>
            <a href="#servicios" className="btn-outline">
              View services
            </a>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-img-bg" />
          <div className="hero-salon-b" aria-hidden="true">
            B
          </div>
          <div className="hero-visual">
            <div className="hero-circle-outer">
              <div className="hero-dot" />
              <div className="hero-dot" />
              <div className="hero-dot" />
              <div className="hero-dot" />
              <div className="hero-circle-inner">
                <div className="hero-circle-text">
                  B&amp;C
                  <span>Since 2019</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-badges">
            <div className="badge">✦ Premium colour</div>
            <div className="badge">✦ English · Spanish</div>
            <div className="badge">✦ Mon–Sat 9am–7pm</div>
          </div>
        </div>
      </section>

      <div className="strip">
        <div className="strip-inner">
          <span>Colour</span>
          <span className="strip-dot">✦</span>
          <span>Cut &amp; style</span>
          <span className="strip-dot">✦</span>
          <span>Hair treatments</span>
          <span className="strip-dot">✦</span>
          <span>Nails</span>
          <span className="strip-dot">✦</span>
          <span>Waxing</span>
          <span className="strip-dot">✦</span>
          <span>Makeup</span>
          <span className="strip-dot">✦</span>
          <span>Hamilton Ontario</span>
          <span className="strip-dot">✦</span>
          <span>Colour</span>
          <span className="strip-dot">✦</span>
          <span>Cut &amp; style</span>
          <span className="strip-dot">✦</span>
          <span>Hair treatments</span>
          <span className="strip-dot">✦</span>
          <span>Nails</span>
          <span className="strip-dot">✦</span>
          <span>Waxing</span>
          <span className="strip-dot">✦</span>
          <span>Makeup</span>
          <span className="strip-dot">✦</span>
          <span>Hamilton Ontario</span>
          <span className="strip-dot">✦</span>
        </div>
      </div>

      <section className="services" id="servicios">
        <div className="section-header">
          <div>
            <div className="section-eyebrow">What we offer</div>
            <div className="section-title">
              Services that
              <br />
              <em>transform</em>
            </div>
          </div>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-num">I</div>
            <div className="service-name">Colour &amp; balayage</div>
            <div className="service-desc">
              Modern colour techniques: balayage, highlights, ombré, and full colour. We use Wella and Schwarzkopf
              products.
            </div>
            <div className="service-price">From $85 CAD</div>
          </div>
          <div className="service-card">
            <div className="service-num">II</div>
            <div className="service-name">Cut &amp; style</div>
            <div className="service-desc">
              Personalized cuts for your face shape and hair type. Includes wash, deep conditioner, and professional
              blow-dry.
            </div>
            <div className="service-price">From $55 CAD</div>
          </div>
          <div className="service-card">
            <div className="service-num">III</div>
            <div className="service-name">Treatments</div>
            <div className="service-desc">
              Brazilian keratin, deep hydration, and hair reconstruction. Visible results from the first session.
            </div>
            <div className="service-price">From $120 CAD</div>
          </div>
          <div className="service-card">
            <div className="service-num">IV</div>
            <div className="service-name">Nails</div>
            <div className="service-desc">
              Manicure, pedicure, gel, acrylics, and nail art. Bridal and group bookings by appointment.
            </div>
            <div className="service-price">From $35 CAD</div>
          </div>
          <div className="service-card">
            <div className="service-num">V</div>
            <div className="service-name">Waxing</div>
            <div className="service-desc">
              Face and body waxing. Long-lasting results in a comfortable, private setting.
            </div>
            <div className="service-price">From $15 CAD</div>
          </div>
          <div className="service-card">
            <div className="service-num">VI</div>
            <div className="service-name">Makeup</div>
            <div className="service-desc">
              Makeup for special occasions: weddings, quinceañeras, graduations, and corporate events.
            </div>
            <div className="service-price">From $75 CAD</div>
          </div>
        </div>
      </section>

      <section className="about" id="nosotros">
        <div className="about-left">
          <div className="section-eyebrow">Our story</div>
          <div className="section-title" style={{ color: 'var(--cream)' }}>
            Over 5 years
            <br />
            <em style={{ color: 'var(--rose)' }}>elevating</em>
            <br />
            Hamilton
          </div>
          <div className="about-desc">
            We are a passionate team serving guests in English and Spanish. We believe every guest deserves to feel
            extraordinary, whatever the budget. Your satisfaction is our priority — if you are not happy, we make it
            right.
          </div>
          <div className="stats">
            <div>
              <div className="stat-num">500+</div>
              <div className="stat-label">Happy guests</div>
            </div>
            <div>
              <div className="stat-num">5★</div>
              <div className="stat-label">On Google</div>
            </div>
            <div>
              <div className="stat-num">2</div>
              <div className="stat-label">Languages</div>
            </div>
          </div>
        </div>
        <div className="about-right">
          <div className="about-pattern" />
          <div className="about-quote">
            <div className="quote-mark">&quot;</div>
            <div className="quote-text">
              Beauty is not a privilege; it is an art that should be accessible to everyone.
            </div>
            <div className="quote-author">— María López, Founder</div>
          </div>
        </div>
      </section>

      <section className="booking" id="reservar">
        <div className="section-eyebrow">Schedule your visit</div>
        <div className="section-title">
          Ready for your
          <br />
          <em>transformation</em>?
        </div>
        <p className="booking-desc">
          Select a service to get started. You can also chat with our AI assistant below →
        </p>
        <div className="booking-grid">
          <div
            className="book-item"
            data-chat-prompt="I would like to book a colour appointment"
            role="button"
            tabIndex={0}
          >
            <div className="book-item-name">Colour &amp; balayage</div>
            <div className="book-item-time">2–3 hours · From $85</div>
          </div>
          <div
            className="book-item"
            data-chat-prompt="I would like to book a cut and style"
            role="button"
            tabIndex={0}
          >
            <div className="book-item-name">Cut &amp; style</div>
            <div className="book-item-time">1 hour · From $55</div>
          </div>
          <div
            className="book-item"
            data-chat-prompt="I would like information about keratin treatments"
            role="button"
            tabIndex={0}
          >
            <div className="book-item-name">Treatments</div>
            <div className="book-item-time">2–4 hours · From $120</div>
          </div>
          <div className="book-item" data-chat-prompt="I would like to book a nail appointment" role="button" tabIndex={0}>
            <div className="book-item-name">Nails</div>
            <div className="book-item-time">45 min · From $35</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="tel:+19055550123" className="btn-primary">
            📞 (905) 555-0123
          </a>
          <a href="https://wa.me/19055550123" className="btn-outline">
            WhatsApp
          </a>
        </div>
      </section>

      <footer>
        <div>
          <div className="footer-logo">Bella &amp; Co.</div>
          <div className="footer-info" style={{ marginTop: '0.5rem' }}>
            123 King St W, Hamilton ON · <a href="tel:+19055550123">(905) 555-0123</a>
            <br />
            Mon–Fri 9am–7pm · Sat 9am–5pm
          </div>
        </div>
        <div className="footer-credit">
          Website by{' '}
          <a href="https://foundryai.live" style={{ color: 'var(--rose)', textDecoration: 'none' }}>
            Foundry AI
          </a>
        </div>
      </footer>

      <button id="chat-toggle" type="button" aria-label="Open chat">
        <svg className="icon-chat" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
        </svg>
        <svg className="icon-close" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
            fill="currentColor"
          />
        </svg>
      </button>

      <div id="chat-window" role="dialog" aria-label="Bella &amp; Co. assistant">
        <div className="chat-header">
          <div className="chat-avatar">B</div>
          <div className="chat-header-info">
            <div className="chat-header-name">Bella — Virtual assistant</div>
            <div className="chat-header-status">
              <span className="status-dot" />
              Online now
            </div>
          </div>
        </div>

        <div id="chat-messages" />

        <div className="chat-quick" id="quick-replies">
          <button type="button" className="quick-btn" data-q="What services do you offer?">
            Services
          </button>
          <button type="button" className="quick-btn" data-q="How much does balayage cost?">
            Pricing
          </button>
          <button type="button" className="quick-btn" data-q="How do I book an appointment?">
            Book
          </button>
          <button type="button" className="quick-btn" data-q="Do you speak Spanish?">
            Spanish
          </button>
        </div>

        <div className="chat-input-row">
          <input id="chat-input" type="text" placeholder="Type your question..." autoComplete="off" />
          <button id="chat-send" type="button" aria-label="Send">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}
