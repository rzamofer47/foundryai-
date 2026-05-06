import { Fragment } from 'react'
import Image from 'next/image'

const STRIP_ITEMS = [
  'Wedding Photography',
  'Portrait Sessions',
  'Commercial',
  'Events',
  'Real Estate',
  'Hamilton & Ontario',
  'English & Español',
]

const PORT_ITEMS = [
  { emoji: '💒', cat: 'Wedding', title: 'Johnson & Park', image: '/demos/fotografia/wedding.png' },
  { emoji: '👤', cat: 'Portrait', title: 'Executive Series', image: '/demos/fotografia/portrait.png' },
  { emoji: '🎊', cat: 'Events', title: 'Gala 2025', image: '/demos/fotografia/gala.png' },
  { emoji: '🌆', cat: 'Commercial', title: 'Downtown Hamilton', image: '/demos/fotografia/commercial.png' },
  { emoji: '🏠', cat: 'Real Estate', title: 'Westdale Listing', image: '/demos/fotografia/westdale-listing.png' },
]

export default function JulianCrossMarkup() {
  return (
    <>
      <nav>
        <a href="#" className="nav-logo">
          <span className="nav-logo-name">Julian Cross</span>
          <span className="nav-logo-sub">Photography · Hamilton, Ontario</span>
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
          <a href="#portfolio">Portfolio</a>
          <a href="#packages">Packages</a>
          <a href="#about">About</a>
          <a href="tel:+19055550144" className="nav-book">
            Book
          </a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-left">
          <div className="hero-line" />
          <div className="hero-index">Photography · Hamilton · Est. 2018</div>
          <h1>
            Every frame
            <br />
            tells a
            <br />
            <em>story.</em>
          </h1>
          <div className="hero-divider" />
          <p className="hero-desc">
            Wedding, portrait and commercial photography across Hamilton and Ontario. Documentary style. Natural light.
            Bilingual photographer — English and Spanish.
          </p>
          <div className="hero-btns">
            <a href="#portfolio" className="btn-black">
              View Portfolio →
            </a>
            <a href="tel:+19055550144" className="btn-text">
              Book a Session
            </a>
          </div>
        </div>
        <div className="hero-right">
          <div className="photo-cell" data-cat="Wedding">
            <Image
              className="photo-fill"
              src="/demos/fotografia/wedding.png"
              alt="Wedding photography session in Paris"
              fill
              unoptimized
              sizes="(max-width: 900px) 50vw, 28vw"
              priority
            />
          </div>
          <div className="photo-cell" data-cat="Portrait">
            <Image
              className="photo-fill"
              src="/demos/fotografia/portrait.png"
              alt="Portrait photography with camera close-up"
              fill
              unoptimized
              sizes="(max-width: 900px) 50vw, 20vw"
            />
          </div>
          <div className="photo-cell" data-cat="Commercial">
            <Image
              className="photo-fill"
              src="/demos/fotografia/commercial.png"
              alt="Commercial photography at restaurant table setup"
              fill
              unoptimized
              sizes="(max-width: 900px) 50vw, 20vw"
            />
          </div>
        </div>
      </section>

      <div className="strip">
        <div className="strip-inner">
          {[...STRIP_ITEMS, ...STRIP_ITEMS].map((t, i) => (
            <Fragment key={`${t}-${i}`}>
              <span>{t}</span>
              <span className="s-dot"> · </span>
            </Fragment>
          ))}
        </div>
      </div>

      <section className="portfolio" id="portfolio">
        <div className="port-head">
          <div>
            <div className="sec-num">Selected work</div>
            <div className="sec-title">
              The <em>portfolio</em>
            </div>
          </div>
          <p className="port-desc">
            A selection of recent work across weddings, portraits and commercial projects in Hamilton and across Ontario.
          </p>
        </div>
        <div className="port-grid">
          {PORT_ITEMS.map((p) => (
            <div key={p.title} className="port-item">
              <div className="port-img">
                <div className="port-photo">
                  {p.image ? (
                    <Image
                      className="port-photo-fill"
                      src={p.image}
                      alt={`${p.cat} photography sample`}
                      fill
                      unoptimized
                      sizes="(max-width: 900px) 50vw, 33vw"
                    />
                  ) : (
                    p.emoji
                  )}
                </div>
              </div>
              <div className="port-info">
                <div className="port-cat">{p.cat}</div>
                <div className="port-title">{p.title}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="packages" id="packages">
        <div className="sec-num">Investment</div>
        <div className="sec-title">
          Photography <em>packages</em>
        </div>
        <div className="pkg-grid">
          <div className="pkg">
            <div className="pkg-num">01</div>
            <div className="pkg-name">Portrait</div>
            <div className="pkg-price">$350</div>
            <div className="pkg-period">1-hour session</div>
            <ul className="pkg-items">
              <li>60-minute session</li>
              <li>1 location of your choice</li>
              <li>25 edited digital images</li>
              <li>Online private gallery</li>
              <li>Personal &amp; commercial use</li>
            </ul>
            <a href="tel:+19055550144" className="pkg-cta dark">
              Book Portrait
            </a>
          </div>
          <div className="pkg featured">
            <div className="pkg-num">02</div>
            <div className="pkg-name">Wedding</div>
            <div className="pkg-price">$2,200</div>
            <div className="pkg-period">Full day coverage</div>
            <ul className="pkg-items">
              <li>8 hours of coverage</li>
              <li>Engagement shoot included</li>
              <li>400+ edited images</li>
              <li>Two locations</li>
              <li>Private online gallery</li>
              <li>Print release included</li>
            </ul>
            <a href="tel:+19055550144" className="pkg-cta white">
              Book Wedding
            </a>
          </div>
          <div className="pkg">
            <div className="pkg-num">03</div>
            <div className="pkg-name">Commercial</div>
            <div className="pkg-price">
              $600
              <span style={{ fontSize: '1rem', fontWeight: 300 }}>+</span>
            </div>
            <div className="pkg-period">Half-day · from</div>
            <ul className="pkg-items">
              <li>4-hour on-site session</li>
              <li>Products, team or space</li>
              <li>50+ edited images</li>
              <li>Commercial license</li>
              <li>24-hr turnaround available</li>
            </ul>
            <a href="tel:+19055550144" className="pkg-cta dark">
              Book Commercial
            </a>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-left">
          <div className="sec-num">The photographer</div>
          <div className="sec-title">
            Capturing
            <br />
            Hamilton
            <br />
            <em>since 2018.</em>
          </div>
          <p className="about-desc">
            I&apos;m Julian, a bilingual documentary-style photographer based in Hamilton. I believe the best photographs
            happen when people forget the camera is there. I shoot weddings, portraits and commercial work across Ontario
            — in English and Spanish.
          </p>
          <div className="about-stats">
            <div>
              <div className="a-num">200+</div>
              <div className="a-label">Sessions</div>
            </div>
            <div>
              <div className="a-num">50+</div>
              <div className="a-label">Weddings</div>
            </div>
            <div>
              <div className="a-num">5★</div>
              <div className="a-label">Google</div>
            </div>
          </div>
        </div>
        <div className="about-right">
          <div className="hours-label">Availability</div>
          <div className="hours-title">Book Your Session</div>
          <div className="h-row">
            <span className="h-day">Weekdays</span>
            <span className="h-time">By appointment</span>
          </div>
          <div className="h-row">
            <span className="h-day">Weekends</span>
            <span className="h-time">Available · books fast</span>
          </div>
          <div className="h-row">
            <span className="h-day">Response time</span>
            <span className="h-time">Within 24 hours</span>
          </div>
          <div className="h-row">
            <span className="h-day">Coverage area</span>
            <span className="h-time">Hamilton &amp; Ontario</span>
          </div>
          <div className="h-row">
            <span className="h-day">Languages</span>
            <span className="h-time">English &amp; Spanish</span>
          </div>
          <a href="tel:+19055550144" className="book-link">
            📞 (905) 555-0144 — Call to Book →
          </a>
        </div>
      </section>

      <footer>
        <div>
          <a href="#" className="f-logo">
            Julian Cross
          </a>
          <div className="f-info" style={{ marginTop: '0.4rem' }}>
            Hamilton, Ontario · <a href="tel:+19055550144">(905) 555-0144</a>
            <br />
            Available across Ontario · English &amp; Spanish
          </div>
        </div>
        <div className="f-credit">
          Website by <a href="https://foundryai.live">Foundry AI</a>
        </div>
      </footer>

      <button id="chat-toggle" type="button" aria-label="Open chat">
        <svg className="ico ico-chat" viewBox="0 0 24 24" fill="white" aria-hidden="true">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
        </svg>
        <svg className="ico ico-close" viewBox="0 0 24 24" fill="white" aria-hidden="true">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </svg>
      </button>
      <div id="chat-window" role="dialog" aria-label="Julian Cross assistant">
        <div className="c-header">
          <div className="c-avatar">📷</div>
          <div>
            <div className="c-name">Julian&apos;s Assistant</div>
            <div className="c-status">
              <span className="sdot" />
              Online · Bookings open
            </div>
          </div>
        </div>
        <div id="c-msgs" />
        <div className="c-quick" id="qwrap">
          <button type="button" className="qb" data-q="What packages do you offer?">
            Packages
          </button>
          <button type="button" className="qb" data-q="How much is a wedding?">
            Wedding
          </button>
          <button type="button" className="qb" data-q="Are you available this summer?">
            Availability
          </button>
          <button type="button" className="qb" data-q="¿Hablas español?">
            Español
          </button>
        </div>
        <div className="c-bar">
          <input id="c-input" type="text" placeholder="Ask about packages, availability..." autoComplete="off" />
          <button id="c-send" type="button" aria-label="Send">
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
