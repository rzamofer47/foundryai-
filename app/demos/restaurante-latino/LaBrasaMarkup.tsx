/** Static markup converted from html-originals/restaurante-latino.html (structure + copy unchanged). */
export default function LaBrasaMarkup() {
  return (
    <>
      <nav>
        <a href="#" className="nav-logo">
          La <span>Brasa</span>
        </a>
        <div className="nav-mid">
          <a href="/demos">View All Demos</a>
          <a href="/">Foundryai.live</a>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#experience">Our Story</a>
          </li>
          <li>
            <a href="#specials">Specials</a>
          </li>
          <li>
            <a href="tel:+19055550199" className="nav-reserve">
              Book
            </a>
          </li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-ring ring-1" />
        <div className="hero-ring ring-2" />
        <div className="hero-ring ring-3" />

        <div className="hero-dish">
          <span className="dish-emoji">🫕</span>
          <span className="dish-label">Chef&apos;s Special</span>
        </div>

        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="eyebrow-line" />
            Latin Kitchen · Hamilton, Ontario
          </div>
          <h1>
            Bold
            <br />
            <span className="gold">flavours,</span>
            <br />
            <span className="red">real</span> fire.
          </h1>
          <p className="hero-sub">
            Authentic Latin cuisine cooked from scratch daily. Tacos, arepas, ceviche and slow-braised meats — made the
            way your abuela would approve.
          </p>
          <div className="hero-btns">
            <a href="#menu" className="btn-red">
              View Menu →
            </a>
            <a href="tel:+19055550199" className="btn-ghost">
              📞 Reserve Now
            </a>
          </div>
          <div className="hero-trust">
            <div className="trust-item">
              <div>
                <div className="trust-num">4.9★</div>
                <div className="trust-label">
                  Google
                  <br />
                  Reviews
                </div>
              </div>
            </div>
            <div className="trust-item">
              <div>
                <div className="trust-num">8yr</div>
                <div className="trust-label">
                  Serving
                  <br />
                  Hamilton
                </div>
              </div>
            </div>
            <div className="trust-item">
              <div>
                <div className="trust-num">100%</div>
                <div className="trust-label">
                  Fresh
                  <br />
                  Daily
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-wrap">
        <div className="marquee-inner">
          <span>Tacos Al Pastor</span>
          <span className="marquee-dot">✦</span>
          <span>Ceviche</span>
          <span className="marquee-dot">✦</span>
          <span>Arepas</span>
          <span className="marquee-dot">✦</span>
          <span>Birria</span>
          <span className="marquee-dot">✦</span>
          <span>Empanadas</span>
          <span className="marquee-dot">✦</span>
          <span>Horchata</span>
          <span className="marquee-dot">✦</span>
          <span>Churros</span>
          <span className="marquee-dot">✦</span>
          <span>Lomo Saltado</span>
          <span className="marquee-dot">✦</span>
          <span>Tacos Al Pastor</span>
          <span className="marquee-dot">✦</span>
          <span>Ceviche</span>
          <span className="marquee-dot">✦</span>
          <span>Arepas</span>
          <span className="marquee-dot">✦</span>
          <span>Birria</span>
          <span className="marquee-dot">✦</span>
          <span>Empanadas</span>
          <span className="marquee-dot">✦</span>
          <span>Horchata</span>
          <span className="marquee-dot">✦</span>
          <span>Churros</span>
          <span className="marquee-dot">✦</span>
          <span>Lomo Saltado</span>
          <span className="marquee-dot">✦</span>
        </div>
      </div>

      <section className="menu" id="menu">
        <div className="section-eyebrow">What we serve</div>
        <div className="section-title">
          Made from scratch,
          <br />
          <em>every single day</em>
        </div>

        <div className="menu-tabs">
          <button type="button" className="menu-tab active" data-cat="all">
            All
          </button>
          <button type="button" className="menu-tab" data-cat="starters">
            Starters
          </button>
          <button type="button" className="menu-tab" data-cat="mains">
            Mains
          </button>
          <button type="button" className="menu-tab" data-cat="drinks">
            Drinks
          </button>
        </div>

        <div className="menu-grid" id="menu-grid">
          <div className="menu-item" data-cat="starters">
            <div className="menu-item-left">
              <span className="menu-emoji">🫙</span>
              <div className="menu-name">Guacamole & Totopos</div>
              <div className="menu-desc">
                House-made guacamole with fresh avocado, lime, jalapeño and cilantro. Served with crispy corn chips.
              </div>
              <div className="menu-spicy">● Mild</div>
            </div>
            <div className="menu-price">$12</div>
          </div>
          <div className="menu-item" data-cat="starters">
            <div className="menu-item-left">
              <span className="menu-emoji">🍤</span>
              <div className="menu-name">Ceviche de Camarón</div>
              <div className="menu-desc">
                Tiger shrimp marinated in lime juice, tomato, cucumber, red onion and fresh coriander.
              </div>
              <div className="menu-spicy">●● Medium</div>
            </div>
            <div className="menu-price">$16</div>
          </div>
          <div className="menu-item" data-cat="mains">
            <div className="menu-item-left">
              <span className="menu-emoji">🌮</span>
              <div className="menu-name">Tacos Al Pastor (3)</div>
              <div className="menu-desc">
                Achiote-marinated pork, grilled pineapple, white onion, cilantro on fresh corn tortillas.
              </div>
              <div className="menu-spicy">●● Medium</div>
            </div>
            <div className="menu-price">$18</div>
          </div>
          <div className="menu-item" data-cat="mains">
            <div className="menu-item-left">
              <span className="menu-emoji">🥩</span>
              <div className="menu-name">Birria de Res</div>
              <div className="menu-desc">
                Slow-braised beef in guajillo chile broth, served with consommé for dipping. Hamilton&apos;s favourite.
              </div>
              <div className="menu-spicy">●●● Hot</div>
            </div>
            <div className="menu-price">$24</div>
          </div>
          <div className="menu-item" data-cat="mains">
            <div className="menu-item-left">
              <span className="menu-emoji">🫓</span>
              <div className="menu-name">Arepas con Pollo</div>
              <div className="menu-desc">
                Venezuelan-style corn arepas filled with shredded chicken, black beans, avocado and fresh cheese.
              </div>
              <div className="menu-spicy">● Mild</div>
            </div>
            <div className="menu-price">$20</div>
          </div>
          <div className="menu-item" data-cat="drinks">
            <div className="menu-item-left">
              <span className="menu-emoji">🥤</span>
              <div className="menu-name">Horchata</div>
              <div className="menu-desc">
                Traditional rice milk with cinnamon, vanilla and a touch of condensed milk. Cold-pressed in-house.
              </div>
            </div>
            <div className="menu-price">$5</div>
          </div>
        </div>
      </section>

      <section className="experience" id="experience">
        <div className="exp-left">
          <div className="section-eyebrow">Our story</div>
          <div className="section-title">
            Family recipes.
            <br />
            <em>Hamilton heart.</em>
          </div>
          <p className="exp-desc">
            La Brasa started in a home kitchen in 2016. Today we serve the Hamilton community with the same recipes — no
            shortcuts, no compromises. We speak English and Spanish, and every plate tells a story from across Latin
            America.
          </p>
          <div className="exp-features">
            <div className="exp-feat">
              <div className="feat-icon">🌿</div> Fresh ingredients sourced daily from local markets
            </div>
            <div className="exp-feat">
              <div className="feat-icon">🗣️</div> Bilingual team — English & Spanish
            </div>
            <div className="exp-feat">
              <div className="feat-icon">🎉</div> Private dining for groups up to 40
            </div>
            <div className="exp-feat">
              <div className="feat-icon">🥡</div> Takeout & catering available
            </div>
          </div>
        </div>
        <div className="exp-right">
          <div className="hours-card">
            <div className="hours-title">Hours & Location</div>
            <div className="hours-sub">Walk-ins welcome</div>
            <div className="hours-row">
              <span className="hours-day">Monday – Tuesday</span>
              <span className="hours-time closed">Closed</span>
            </div>
            <div className="hours-row">
              <span className="hours-day">Wednesday – Thursday</span>
              <span className="hours-time">11am – 9pm</span>
            </div>
            <div className="hours-row">
              <span className="hours-day">Friday – Saturday</span>
              <span className="hours-time">11am – 11pm</span>
            </div>
            <div className="hours-row">
              <span className="hours-day">Sunday</span>
              <span className="hours-time">12pm – 8pm</span>
            </div>
            <div
              className="hours-row"
              style={{
                marginTop: '.5rem',
                paddingTop: '.7rem',
                borderTop: '1px solid rgba(245,237,216,0.05)',
              }}
            >
              <span className="hours-day">📍 Address</span>
              <span className="hours-time" style={{ fontSize: '.78rem' }}>
                456 Barton St E
                <br />
                Hamilton ON
              </span>
            </div>
            <a href="tel:+19055550199" className="hours-cta">
              📞 (905) 555-0199
            </a>
          </div>
        </div>
      </section>

      <section className="specials" id="specials">
        <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
          This week
        </div>
        <div className="section-title">
          Daily <em>Specials</em>
        </div>
        <div className="specials-grid">
          <div className="special-card">
            <div className="special-tag">Lunch Special</div>
            <div className="special-name">
              Taco Tuesday
              <br />
              Combo
            </div>
            <div className="special-desc">3 tacos of your choice + horchata + churros. Every Tuesday, all day.</div>
            <div className="special-price">
              <sup>$</sup>22
            </div>
            <div className="special-bg-num">1</div>
          </div>
          <div className="special-card">
            <div className="special-tag">Weekend Brunch</div>
            <div className="special-name">
              Brunch
              <br />
              Mexicano
            </div>
            <div className="special-desc">
              Chilaquiles, huevos rancheros, fresh juice and café de olla. Sat & Sun 12–3pm.
            </div>
            <div className="special-price">
              <sup>$</sup>28
            </div>
            <div className="special-bg-num">2</div>
          </div>
          <div className="special-card">
            <div className="special-tag">Group Dining</div>
            <div className="special-name">
              Family
              <br />
              Feast
            </div>
            <div className="special-desc">
              Feed 4–6 people. Includes 2 mains, 2 starters, drinks and dessert. Reserve 24h ahead.
            </div>
            <div className="special-price">
              <sup>$</sup>89
            </div>
            <div className="special-bg-num">3</div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <a href="#" className="nav-logo">
            La <span style={{ color: 'var(--gold)' }}>Brasa</span>
          </a>
          <p>Authentic Latin kitchen serving Hamilton since 2016. Made with fire, love and real ingredients.</p>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <a href="tel:+19055550199">(905) 555-0199</a>
          <a href="mailto:hello@labrasa.ca">hello@labrasa.ca</a>
          <p>456 Barton St E, Hamilton ON</p>
        </div>
        <div className="footer-col">
          <h4>Follow Us</h4>
          <a href="#">Instagram @labrasakitchen</a>
          <a href="#">Facebook /labrasakitchen</a>
          <p style={{ marginTop: '.8rem' }}>
            Website by{' '}
            <a href="https://foundryai.live" style={{ color: 'var(--gold)' }}>
              Foundry AI
            </a>
          </p>
        </div>
        <div className="footer-bottom">
          <span>© 2026 La Brasa Latin Kitchen. Hamilton, Ontario.</span>
          <span>
            Built by <a href="https://foundryai.live">Foundry AI</a>
          </span>
        </div>
      </footer>

      <button type="button" id="chat-toggle">
        <svg className="icon-chat-svg" viewBox="0 0 24 24" fill="white">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
        </svg>
        <svg className="icon-close-svg" viewBox="0 0 24 24" fill="white">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </svg>
      </button>

      <div id="chat-window">
        <div className="chat-header">
          <div className="chat-avatar">🌮</div>
          <div>
            <div className="chat-name">Rosa — La Brasa Assistant</div>
            <div className="chat-status">
              <span className="sdot" /> Online now
            </div>
          </div>
        </div>
        <div id="chat-messages" />
        <div className="chat-quick" id="quick-wrap">
          <button type="button" className="qbtn" data-q={`What's on the menu?`}>
            Menu
          </button>
          <button type="button" className="qbtn" data-q={`What are today's specials?`}>
            Specials
          </button>
          <button type="button" className="qbtn" data-q={'How do I make a reservation?'}>
            Reserve
          </button>
          <button type="button" className="qbtn" data-q={'Do you have vegetarian options?'}>
            Vegetarian
          </button>
        </div>
        <div className="chat-bar">
          <input
            id="chat-input"
            type="text"
            placeholder="Ask about our menu or reservations..."
            autoComplete="off"
          />
          <button type="button" id="chat-send">
            <svg viewBox="0 0 24 24">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}
