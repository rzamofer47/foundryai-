import Image from 'next/image'

/** Markup from html-originals/vera-noir-boutique.html */
export default function VeraNoirMarkup() {
  return (
    <>
      <nav>
        <a href="#" className="nav-logo">
          <span className="nav-logo-name">VERA NOIR</span>
          <span className="nav-logo-sub">Fashion Boutique · Hamilton</span>
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
          <a href="#collection">Collection</a>
          <a href="#about">About</a>
          <a href="tel:+19055550199" className="nav-book">
            Book Styling
          </a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-left">
          <div className="hero-bg-word">MODE</div>
          <div className="hero-top">
            <div className="hero-season">Spring · Summer 2026</div>
            <div className="hero-issue">Hamilton Boutique</div>
          </div>
          <div className="hero-main">
            <h1>
              Wear
              <br />
              <em>who you</em>
              <br />
              are.
            </h1>
            <p className="hero-sub">
              Curated women&apos;s fashion for the modern Hamilton woman. Timeless pieces, sustainable fabrics, and a free
              personal styling session with every purchase.
            </p>
            <div className="hero-btns">
              <a href="#collection" className="btn-sand">
                Shop Collection →
              </a>
              <a href="tel:+19055550199" className="btn-white">
                Book Styling
              </a>
            </div>
          </div>
          <div className="hero-tags">
            <span className="htag">Sustainable</span>
            <span className="htag">Free Styling</span>
            <span className="htag">English · Español</span>
            <span className="htag">Hamilton, ON</span>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-visual-wrap">
            <div className="hero-model-glow">
              <Image
                className="hero-model-img"
                src="/demos/boutique-ropa/hero/hero-dress.png"
                alt="Evening pink dress couture look"
                fill
                sizes="(max-width: 900px) 62vw, 24vw"
                priority
              />
            </div>
            <div className="hero-tag-float">New Arrivals Weekly</div>
          </div>
          <div className="price-float price-float-1">
            <div className="pf-label">Starting from</div>
            <div className="pf-val">$89 CAD</div>
          </div>
          <div className="price-float price-float-2">
            <div className="pf-label">Free styling</div>
            <div className="pf-val">Every purchase</div>
          </div>
        </div>
      </section>

      <div className="ticker">
        <div className="ticker-inner">
          <span>Linen &amp; Silk</span>
          <span className="t-dot">✦</span>
          <span>Sustainable Fashion</span>
          <span className="t-dot">✦</span>
          <span>Personal Styling</span>
          <span className="t-dot">✦</span>
          <span>New Arrivals Weekly</span>
          <span className="t-dot">✦</span>
          <span>Hamilton Boutique</span>
          <span className="t-dot">✦</span>
          <span>English &amp; Español</span>
          <span className="t-dot">✦</span>
          <span>Linen &amp; Silk</span>
          <span className="t-dot">✦</span>
          <span>Sustainable Fashion</span>
          <span className="t-dot">✦</span>
          <span>Personal Styling</span>
          <span className="t-dot">✦</span>
          <span>New Arrivals Weekly</span>
          <span className="t-dot">✦</span>
          <span>Hamilton Boutique</span>
          <span className="t-dot">✦</span>
          <span>English &amp; Español</span>
          <span className="t-dot">✦</span>
        </div>
      </div>

      <section className="collection" id="collection">
        <div className="coll-head">
          <div>
            <div className="sec-tag">Current season</div>
            <div className="sec-title">
              The <em>Spring</em> Edit
            </div>
          </div>
          <a href="#" className="view-all">
            View all pieces →
          </a>
        </div>
        <div className="prod-grid">
          <div className="prod">
            <div className="prod-img">
              <div className="prod-photo-slot">
                <Image
                  className="prod-photo-img"
                  src="/demos/boutique-ropa/spring-edit/linen-wrap-dress.png"
                  alt="Linen wrap dress in mustard linen, studio look"
                  fill
                  sizes="(max-width: 900px) 45vw, 32vw"
                />
              </div>
              <div className="prod-badge new">New</div>
            </div>
            <div className="prod-info">
              <div className="prod-name">Linen Wrap Dress</div>
              <div className="prod-mat">100% Belgian Linen</div>
              <div className="prod-price">$189 CAD</div>
            </div>
          </div>
          <div className="prod">
            <div className="prod-img">
              <div className="prod-photo-slot">
                <Image
                  className="prod-photo-img"
                  src="/demos/boutique-ropa/spring-edit/structured-blazer.png"
                  alt="Structured grey blazer styled for the city"
                  fill
                  sizes="(max-width: 900px) 45vw, 27vw"
                />
              </div>
              <div className="prod-badge sale">Sale</div>
            </div>
            <div className="prod-info">
              <div className="prod-name">Structured Blazer</div>
              <div className="prod-mat">Wool Blend</div>
              <div className="prod-price">
                $149 CAD<span className="prod-price-old">$210</span>
              </div>
            </div>
          </div>
          <div className="prod">
            <div className="prod-img">
              <div className="prod-photo-slot">
                <Image
                  className="prod-photo-img"
                  src="/demos/boutique-ropa/spring-edit/silk-cami-set.png"
                  alt="Silk cami and shorts loungewear set"
                  fill
                  sizes="(max-width: 900px) 45vw, 27vw"
                />
              </div>
              <div className="prod-badge new">New</div>
            </div>
            <div className="prod-info">
              <div className="prod-name">Silk Cami Set</div>
              <div className="prod-mat">Mulberry Silk</div>
              <div className="prod-price">$245 CAD</div>
            </div>
          </div>
          <div className="prod">
            <div className="prod-img">
              <div className="prod-photo-slot">
                <Image
                  className="prod-photo-img"
                  src="/demos/boutique-ropa/spring-edit/wide-leg-trousers.png"
                  alt="Eyelet crop top with wide-leg trousers"
                  fill
                  sizes="(max-width: 900px) 45vw, 32vw"
                />
              </div>
            </div>
            <div className="prod-info">
              <div className="prod-name">Wide Leg Trousers</div>
              <div className="prod-mat">Italian Cotton</div>
              <div className="prod-price">$165 CAD</div>
            </div>
          </div>
          <div className="prod">
            <div className="prod-img">
              <div className="prod-photo-slot">
                <Image
                  className="prod-photo-img"
                  src="/demos/boutique-ropa/spring-edit/cashmere-scarf.png"
                  alt="Camel coat with chunky knit scarf"
                  fill
                  sizes="(max-width: 900px) 45vw, 27vw"
                />
              </div>
              <div className="prod-badge sale">Sale</div>
            </div>
            <div className="prod-info">
              <div className="prod-name">Cashmere Scarf</div>
              <div className="prod-mat">Pure Cashmere</div>
              <div className="prod-price">
                $89 CAD<span className="prod-price-old">$120</span>
              </div>
            </div>
          </div>
          <div className="prod">
            <div className="prod-img">
              <div className="prod-photo-slot">
                <Image
                  className="prod-photo-img"
                  src="/demos/boutique-ropa/spring-edit/woven-tote.png"
                  alt="Woven tote bag with black platform sandals"
                  fill
                  sizes="(max-width: 900px) 45vw, 27vw"
                />
              </div>
            </div>
            <div className="prod-info">
              <div className="prod-name">Woven Tote</div>
              <div className="prod-mat">Raffia &amp; Leather</div>
              <div className="prod-price">$135 CAD</div>
            </div>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-left">
          <div className="sec-tag">Our story</div>
          <div className="sec-title">
            Fashion that
            <br />
            <em>respects</em>
            <br />
            the planet.
          </div>
          <p className="about-desc">
            Vera Noir was founded in Hamilton in 2021 with one belief: you shouldn&apos;t have to choose between looking
            beautiful and doing good. Every piece is sourced ethically, every fabric chosen with intention. We serve our
            community in English and Spanish.
          </p>
          <div className="about-stats">
            <div>
              <div className="astat-n">300+</div>
              <div className="astat-l">Happy clients</div>
            </div>
            <div>
              <div className="astat-n">100%</div>
              <div className="astat-l">Ethical sourcing</div>
            </div>
            <div>
              <div className="astat-n">5★</div>
              <div className="astat-l">Google</div>
            </div>
          </div>
        </div>
        <div className="about-right">
          <div className="hours-title">Visit the Boutique</div>
          <div className="hours-sub">Walk-ins welcome · Styling by appointment</div>
          <div className="h-row">
            <span className="h-day">Monday</span>
            <span className="h-time closed">Closed</span>
          </div>
          <div className="h-row">
            <span className="h-day">Tue – Sat</span>
            <span className="h-time">10:00 am – 6:00 pm</span>
          </div>
          <div className="h-row">
            <span className="h-day">Sunday</span>
            <span className="h-time">12:00 pm – 5:00 pm</span>
          </div>
          <div
            className="h-row"
            style={{ marginTop: '0.5rem', paddingTop: '0.7rem', borderTop: '1px solid rgba(250,250,248,.05)' }}
          >
            <span className="h-day">📍</span>
            <span className="h-time" style={{ fontSize: '0.75rem' }}>
              210 Locke St S, Hamilton ON
            </span>
          </div>
          <a href="tel:+19055550199" className="visit-btn">
            📞 (905) 555-0199 — Call or WhatsApp
          </a>
        </div>
      </section>

      <section className="features">
        <div className="sec-tag">Why Vera Noir</div>
        <div className="sec-title">
          More than a store.
          <br />
          <em>An experience.</em>
        </div>
        <div className="feat-grid">
          <div className="feat">
            <span className="feat-icon">🌿</span>
            <div className="feat-name">Ethically Sourced</div>
            <div className="feat-desc">
              Every piece is sourced from suppliers who meet our standards for fair wages and sustainable practices.
            </div>
          </div>
          <div className="feat">
            <span className="feat-icon">✨</span>
            <div className="feat-name">Free Personal Styling</div>
            <div className="feat-desc">
              Book a free 30-minute styling session in-store or by video call. We find pieces that work for your body and
              lifestyle.
            </div>
          </div>
          <div className="feat">
            <span className="feat-icon">🗣️</span>
            <div className="feat-name">Bilingual Team</div>
            <div className="feat-desc">
              Our team serves clients in English and Spanish. Find your perfect look in the language you&apos;re most
              comfortable with.
            </div>
          </div>
          <div className="feat">
            <span className="feat-icon">📦</span>
            <div className="feat-name">New Arrivals Weekly</div>
            <div className="feat-desc">
              Fresh pieces every week. Follow us on Instagram or join our email list to never miss a new collection drop.
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div>
          <a href="#" className="f-logo">
            VERA NOIR
          </a>
          <div className="f-info" style={{ marginTop: '0.4rem' }}>
            210 Locke St S, Hamilton ON · <a href="tel:+19055550199">(905) 555-0199</a>
            <br />
            Tue–Sat 10am–6pm · Sun 12pm–5pm
          </div>
        </div>
        <div className="f-credit">
          Website by{' '}
          <a href="https://foundryai.live">Foundry AI</a>
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
      <div id="chat-window" role="dialog" aria-label="Vera Noir style assistant">
        <div className="c-header">
          <div className="c-avatar">👗</div>
          <div>
            <div className="c-name">Vera — Style Assistant</div>
            <div className="c-status">
              <span className="sdot" />
              Online · Free styling available
            </div>
          </div>
        </div>
        <div id="c-msgs" />
        <div className="c-quick" id="qwrap">
          <button type="button" className="qb" data-q="What new pieces do you have?">
            New Arrivals
          </button>
          <button type="button" className="qb" data-q="How do I book a styling session?">
            Styling
          </button>
          <button type="button" className="qb" data-q="What are your hours?">
            Hours
          </button>
          <button type="button" className="qb" data-q="¿Hablan español?">
            Español
          </button>
        </div>
        <div className="c-bar">
          <input
            id="c-input"
            type="text"
            placeholder="Ask about styles, sizing, booking..."
            autoComplete="off"
          />
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
