'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function JetonBankPage() {
  const carouselRef = useRef(null)
  const menuRef = useRef(null)

  // Hide shared Navbar, Footer, and BottomMenu since this page has its own
  useEffect(() => {
    const sharedNav = document.querySelector('nav._navbar')
    const sharedFooter = document.querySelector('footer._footer')
    const sharedBottomMenu = document.querySelector('nav._menu')
    if (sharedNav) sharedNav.style.display = 'none'
    if (sharedFooter) sharedFooter.style.display = 'none'
    if (sharedBottomMenu) sharedBottomMenu.style.display = 'none'
    return () => {
      if (sharedNav) sharedNav.style.display = ''
      if (sharedFooter) sharedFooter.style.display = ''
      if (sharedBottomMenu) sharedBottomMenu.style.display = ''
    }
  }, [])

  // Solutions tab/carousel sync
  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const tabs = document.querySelectorAll('.jb-solutions-tab')
    const cards = carousel.querySelectorAll('.jb-solution-card')

    const handleTabClick = (tab) => () => {
      const target = tab.getAttribute('data-target')
      const card = carousel.querySelector('[data-tab="' + target + '"]')
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
      }
      tabs.forEach((t) => { t.setAttribute('data-active', 'false') })
      tab.setAttribute('data-active', 'true')
    }

    const handlers = []
    tabs.forEach((tab) => {
      const handler = handleTabClick(tab)
      tab.addEventListener('click', handler)
      handlers.push({ tab, handler })
    })

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const tabName = entry.target.getAttribute('data-tab')
          tabs.forEach((t) => {
            t.setAttribute('data-active', t.getAttribute('data-target') === tabName ? 'true' : 'false')
          })
        }
      })
    }, { root: carousel, threshold: 0.6 })

    cards.forEach((card) => { observer.observe(card) })

    return () => {
      handlers.forEach(({ tab, handler }) => tab.removeEventListener('click', handler))
      observer.disconnect()
    }
  }, [])

  // Merchant draggable text scroll
  useEffect(() => {
    const menu = menuRef.current
    if (!menu) return
    const items = menu.querySelectorAll('.jb-drag-item')
    const itemCount = items.length
    const itemH = 97
    const totalH = itemCount * itemH
    let scrollY = 0
    let autoSpeed = 0.6
    let wheelBoost = 0
    let dragging = false
    let dragStartY = 0
    let dragStartScroll = 0
    let raf

    function positionItems() {
      items.forEach((item, i) => {
        const y = ((i * itemH - scrollY) % totalH + totalH) % totalH
        const norm = y / totalH
        const xOffset = Math.sin(norm * Math.PI * 2) * 120 + 50
        item.style.transform = 'translate(' + xOffset + 'px, ' + y + 'px)'
      })
    }

    function loop() {
      if (!dragging) {
        scrollY += autoSpeed + wheelBoost
        wheelBoost *= 0.95
        if (Math.abs(wheelBoost) < 0.01) wheelBoost = 0
      }
      positionItems()
      raf = requestAnimationFrame(loop)
    }

    const onWheel = (e) => {
      e.preventDefault()
      wheelBoost += e.deltaY * 0.15
    }
    menu.addEventListener('wheel', onWheel, { passive: false })

    const onMouseDown = (e) => {
      dragging = true
      dragStartY = e.clientY
      dragStartScroll = scrollY
      menu.classList.add('is-dragging')
    }
    menu.addEventListener('mousedown', onMouseDown)

    const onMouseMove = (e) => {
      if (!dragging) return
      scrollY = dragStartScroll - (e.clientY - dragStartY)
    }
    window.addEventListener('mousemove', onMouseMove)

    const onMouseUp = () => {
      if (dragging) {
        dragging = false
        menu.classList.remove('is-dragging')
      }
    }
    window.addEventListener('mouseup', onMouseUp)

    const onTouchStart = (e) => {
      dragging = true
      dragStartY = e.touches[0].clientY
      dragStartScroll = scrollY
    }
    menu.addEventListener('touchstart', onTouchStart, { passive: true })

    const onTouchMove = (e) => {
      if (!dragging) return
      scrollY = dragStartScroll - (e.touches[0].clientY - dragStartY)
    }
    menu.addEventListener('touchmove', onTouchMove, { passive: true })

    const onTouchEnd = () => { dragging = false }
    menu.addEventListener('touchend', onTouchEnd)

    loop()

    return () => {
      cancelAnimationFrame(raf)
      menu.removeEventListener('wheel', onWheel)
      menu.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
      menu.removeEventListener('touchstart', onTouchStart)
      menu.removeEventListener('touchmove', onTouchMove)
      menu.removeEventListener('touchend', onTouchEnd)
    }
  }, [])

  // Section entrance animation
  useEffect(() => {
    const sections = document.querySelectorAll('.jb-section-anim')
    if (!sections.length) return
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('anim-enter')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.15 })
    sections.forEach((s) => { observer.observe(s) })
    return () => observer.disconnect()
  }, [])

  // Navbar scroll hide/show
  useEffect(() => {
    const navbar = document.querySelector('.jb-navbar')
    if (!navbar) return
    let prevScrollY = 0
    let ticking = false

    const onScroll = () => {
      const lastScrollY = window.scrollY
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (lastScrollY > 120 && lastScrollY > prevScrollY) {
            navbar.style.top = '-10.31rem'
          } else {
            navbar.style.top = '2.31rem'
          }
          prevScrollY = lastScrollY
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const AwardLeafSvg = () => (
    <svg className="jb-award-leaf" width="32" height="40" viewBox="0 0 32 40" fill="none"><path d="M4 38C2 30 1 22 4 16C7 10 12 8 16 6C12 8 9 12 8 18C7 24 8 30 12 38" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" fill="none" /><path d="M28 38C30 30 31 22 28 16C25 10 20 8 16 6C20 8 23 12 24 18C25 24 24 30 20 38" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" fill="none" /><path d="M6 34C5 28 5 22 7 17" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" fill="none" /><path d="M26 34C27 28 27 22 25 17" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" fill="none" /><path d="M8 30C8 26 9 22 11 18" stroke="rgba(255,255,255,0.3)" strokeWidth="0.7" fill="none" /><path d="M24 30C24 26 23 22 21 18" stroke="rgba(255,255,255,0.3)" strokeWidth="0.7" fill="none" /></svg>
  )

  const awards = [
    { source: 'International Business Magazine', title: 'Best B2B Banking Company\nEurope 2024 Award' },
    { source: 'World Business Outlook', title: 'Most Secure Digital Bank\nEurope 2023 Award' },
    { source: 'Global Business & Finance Magazine', title: 'Best Payment Service Provider\nEurope 2023 Award' },
    { source: 'UF Awards', title: 'Most Outstanding Innovator\nIn Payments Global 2023 Award' },
    { source: 'World Business Outlook', title: 'Best B2B Banking Provider\nEurope 2024 Award' },
  ]

  const ArrowSvg = () => (
    <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.5 12.5L12.5 1.5M12.5 1.5H4.5M12.5 1.5V9.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )

  const SmallArrowSvg = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
      <path d="M1 1H9.8M9.8 1V10M9.8 1L1 9.8" stroke="#F6F6F6" strokeWidth="1.5"></path>
    </svg>
  )

  const currencies1 = ['aud','bgn','bhd','brl','cad','chf','clp','czk','dkk','eur','gbp','hkd','huf','jpy','mxn','nok','nzd','pen','pln','ron','sar','sek','usd','aed']
  const currencies2 = ['aed','usd','sek','sar','ron','pln','pen','nzd','nok','mxn','jpy','huf','hkd','gbp','eur','dkk','czk','clp','chf','cad','brl','bhd','bgn','aud']

  const CurrencyItem = ({ code }) => (
    <div className="jb-currency-item">
      <img src={`https://www.jetonbank.com/img/currencies/${code}.webp`} alt={code.toUpperCase()} width="35" height="35" />
      {code.toUpperCase()}
    </div>
  )

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav className="jb-navbar">
        <div className="jb-navbar-inner">
          <Link href="/ibnk" className="jb-logo">iBnk</Link>

          <div className="jb-nav-links">
            <a href="#" className="jb-nav-item">
              <span className="jb-nav-item-main">What we offer</span>
              <span className="jb-nav-item-sub">Our services</span>
            </a>
            <a href="#" className="jb-nav-item">
              <span className="jb-nav-item-main">Who we are</span>
              <span className="jb-nav-item-sub">Our legacy</span>
            </a>
          </div>

          <div className="jb-nav-actions">
            <a href="https://portal.ibnk.com/login" className="jb-btn-login">Login</a>
            <a href="https://portal.ibnk.com/signup" className="jb-btn-create">Create an Account</a>
            <button className="jb-nav-toggle" aria-label="Menu">
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="jb-hero">
        <video className="jb-hero-video" autoPlay muted loop playsInline>
          <source src="https://www.jetonbank.com/img/home/header-bg.mp4" type="video/mp4" />
        </video>
        <div className="jb-hero-top">
          <div className="jb-hero-content">
            <h1 className="jb-hero-heading">The Bank for<br />All Businesses</h1>
            <p className="jb-hero-subtitle">Experience business banking without borders. Scale your business with secure, efficient, and global financial solutions.</p>
            <div className="jb-hero-ctas">
              <a href="https://calendly.com/ibnk/meettheteam" className="jb-cta jb-cta-book">
                Book a Meeting
                <span className="jb-cta-arrow"><ArrowSvg /></span>
              </a>
              <a href="https://portal.ibnk.com/signup" className="jb-cta jb-cta-create">
                Create an Account
                <span className="jb-cta-arrow"><ArrowSvg /></span>
              </a>
            </div>
          </div>

          {/* Awards Bar */}
          <div className="jb-awards-bar">
            <div className="jb-awards-inner">
              {/* Rotating badge */}
              <svg className="jb-awards-badge" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="46" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" />
                <circle cx="50" cy="50" r="38" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
                <path d="M50 12L53 20H61L55 25L57 33L50 28L43 33L45 25L39 20H47L50 12Z" fill="rgba(255,255,255,0.85)" />
                <text x="50" y="48" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="6" fontWeight="700" letterSpacing="0.5">AWARDS AND</text>
                <text x="50" y="56" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="5.5" fontWeight="700" letterSpacing="0.5">RECOGNITIONS</text>
              </svg>

              {/* Marquee track */}
              <div className="jb-awards-track">
                <div className="jb-awards-scroll">
                  {/* Set 1 */}
                  {awards.map((award, i) => (
                    <div className="jb-award-item" key={`a1-${i}`}>
                      <AwardLeafSvg />
                      <div className="jb-award-text">
                        <span className="jb-award-source">{award.source}</span>
                        <span className="jb-award-title" dangerouslySetInnerHTML={{ __html: award.title.replace('\n', '<br/>') }} />
                      </div>
                    </div>
                  ))}
                  {/* Set 2 (duplicate for seamless loop) */}
                  {awards.map((award, i) => (
                    <div className="jb-award-item" key={`a2-${i}`}>
                      <AwardLeafSvg />
                      <div className="jb-award-text">
                        <span className="jb-award-source">{award.source}</span>
                        <span className="jb-award-title" dangerouslySetInnerHTML={{ __html: award.title.replace('\n', '<br/>') }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BANKING SOLUTIONS ===== */}
      <section className="jb-solutions">
        <h2 className="jb-solutions-heading">All-in-one<br />Banking Solutions</h2>

        <div className="jb-solutions-carousel" id="solutionsCarousel" ref={carouselRef}>

          {/* Card 1: Dedicated IBAN */}
          <div className="jb-solution-card jb-card-vertical" data-tab="iban">
            <div className="jb-solution-card-inner">
              <div className="jb-solution-card-text">
                <h3 className="jb-solution-card-title">Dedicated IBAN</h3>
                <p className="jb-solution-card-desc">Receive and make payments in your company&apos;s name, enjoy fast transactions with unique account details, and leverage a secure platform designed to meet your specific business needs.</p>
                <a href="https://portal.ibnk.com/signup" className="jb-solution-card-link">Create Your Bank Account Now</a>
              </div>
              <div className="jb-solution-card-media">
                <div><img src="https://www.jetonbank.com/img/home/dedicated-iban.webp" alt="Dedicated IBAN" loading="lazy" width="700" height="300" /></div>
              </div>
            </div>
          </div>

          {/* Card 2: Multi Currency Account */}
          <div className="jb-solution-card jb-card-right" data-tab="multi">
            <div className="jb-solution-card-inner">
              <div className="jb-solution-card-text">
                <h3 className="jb-solution-card-title">Multi Currency Account</h3>
                <p className="jb-solution-card-desc">Manage over 30 currencies effortlessly, streamline international transactions, and save on conversion costs—all from a single platform.</p>
                <a href="https://portal.ibnk.com/signup" className="jb-solution-card-link">Get Started</a>
              </div>
              <div className="jb-solution-card-media">
                <div><img src="https://www.jetonbank.com/img/home/multi-currency.webp" alt="Multi Currency Account" loading="lazy" width="700" height="300" /></div>
              </div>
            </div>
          </div>

          {/* Card 3: Savings Accounts */}
          <div className="jb-solution-card jb-card-right" data-tab="savings">
            <div className="jb-solution-card-inner">
              <div className="jb-solution-card-text">
                <h3 className="jb-solution-card-title">Savings Accounts</h3>
                <p className="jb-solution-card-desc">Boost your savings with competitive interest rates and instant access to your funds. Watch your money grow faster, effortlessly.</p>
                <a href="https://portal.ibnk.com/signup" className="jb-solution-card-link">Open an Account</a>
              </div>
              <div className="jb-solution-card-media">
                <div><img src="https://www.jetonbank.com/img/home/savings.webp" alt="Savings Accounts" loading="lazy" width="700" height="300" /></div>
              </div>
            </div>
          </div>

          {/* Card 4: Cross-Border Payments */}
          <div className="jb-solution-card jb-card-vertical" data-tab="cross-border">
            <div className="jb-solution-card-inner">
              <div className="jb-solution-card-text">
                <h3 className="jb-solution-card-title">Cross-Border<br />Payments</h3>
                <p className="jb-solution-card-desc">Fast and cost-effective payments across the globe. Enjoy quick and effortless transactions.</p>
                <a href="https://portal.ibnk.com/signup" className="jb-solution-card-link">Get Started</a>
              </div>
              <div className="jb-solution-card-media">
                <div><img src="https://www.jetonbank.com/img/home/cross-border.webp" alt="Cross-Border Payments" loading="lazy" width="700" height="300" /></div>
              </div>
            </div>
          </div>

          {/* Card 5: Virtual and Physical Cards */}
          <div className="jb-solution-card jb-card-vertical" data-tab="cards">
            <div className="jb-solution-card-inner">
              <div className="jb-solution-card-text">
                <h3 className="jb-solution-card-title">Virtual and<br />Physical Cards</h3>
                <p className="jb-solution-card-desc">Get a iBnk Card, designed exclusively for businesses. Experience the freedom to make secure, efficient online payments anytime, anywhere.</p>
                <a href="https://portal.ibnk.com/signup" className="jb-solution-card-link">Get Started</a>
              </div>
              <div className="jb-solution-card-media">
                <div><img src="https://www.jetonbank.com/img/home/virtual-and-physical.webp" alt="Virtual and Physical Cards" loading="lazy" width="700" height="300" /></div>
              </div>
            </div>
          </div>

        </div>

        {/* Tab navigation */}
        <div className="jb-solutions-tabs">
          <button className="jb-solutions-tab" data-active="true" data-target="iban">Dedicated IBAN</button>
          <button className="jb-solutions-tab" data-target="multi">Multi Currency Account</button>
          <button className="jb-solutions-tab" data-target="savings">Savings Accounts</button>
          <button className="jb-solutions-tab" data-target="cross-border">Cross-Border Payments</button>
          <button className="jb-solutions-tab" data-target="cards">Virtual and Physical Cards</button>
        </div>
      </section>

      {/* ===== CUSTOMER SUPPORT ===== */}
      <section className="jb-support jb-section-anim" id="supportSection">
        <div className="jb-support-backgrounds">
          <div className="jb-support-left"></div>
          <div className="jb-support-right">
            <video autoPlay muted loop playsInline>
              <source src="https://www.jetonbank.com/img/home/customer-support-right-bg.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="jb-support-content">
          <h2 className="jb-support-label">Customer Support</h2>
          <h1 className="jb-support-heading">Dedicated<br />account manager</h1>
          <p className="jb-support-desc">Enjoy direct access to a dedicated account manager and personalised business guidance tailored to your needs—just a few of the exclusive benefits iBnk offers.</p>
          <div className="jb-support-btn-group">
            <a href="https://calendly.com/ibnk/meettheteam" className="jb-support-btn" target="_blank">
              <span>Connect with a dedicated expert</span>
              <svg className="jb-support-btn-arrow" viewBox="0 0 97 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" width="96" height="96" rx="20" fill="#d0331c" />
                <path d="M35 61L61 35M61 35H43M61 35V53" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <div className="jb-support-btn-desc">Contact your dedicated account manager during and after integration. We are here to help you get started with iBnk and offer assistance via chat or email whenever required.</div>
          </div>
        </div>
      </section>

      {/* ===== CURRENCIES / TAILORED BANKING ===== */}
      <section className="jb-currencies">
        <div className="jb-currencies-video-bg">
          <video src="https://www.jetonbank.com/img/home/currencies-video-bg.mp4" autoPlay muted loop playsInline></video>
        </div>
        <div className="jb-currencies-top">
          <div className="jb-currencies-content">
            <div className="jb-currencies-left">
              <h2>Tailored Banking<br /> with Advanced<br /> Security</h2>
            </div>
            <div className="jb-currencies-right">
              <p className="jb-currencies-desc">iBnk offers tailored banking solutions paired with strong security features to protect your business and support its growth. Manage your finances confidently and securely.</p>
              <div style={{ marginTop: '4.69rem' }}>
                <a href="https://calendly.com/ibnk/meettheteam" target="_blank" className="jb-cta jb-cta-book" style={{ background: 'transparent', border: '1.5px solid rgba(255,255,255,0.5)' }}>
                  <span>Book a Meeting</span>
                  <span className="jb-cta-arrow" style={{ background: 'rgba(255,255,255,0.16)' }}>
                    <svg viewBox="0 0 14 14" fill="none"><path d="M1.5 12.5L12.5 1.5M12.5 1.5H4.5M12.5 1.5V9.5" stroke="#F6F6F6" strokeWidth="1.5" /></svg>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="jb-currencies-numbers">
            <div className="jb-currencies-num-item">
              <div className="jb-currencies-number"><span className="jb-num">40</span><span className="jb-plus">+</span></div>
              <span className="jb-currencies-label">Currencies</span>
            </div>
            <div className="jb-currencies-num-item">
              <div className="jb-currencies-number"><span className="jb-num">25</span><span className="jb-plus">+</span></div>
              <span className="jb-currencies-label">Payment Methods</span>
            </div>
            <div className="jb-currencies-num-item">
              <div className="jb-currencies-number"><span className="jb-num">80</span><span className="jb-plus">+</span></div>
              <span className="jb-currencies-label">Countries</span>
            </div>
          </div>

          {/* Currency marquee row 1 */}
          <div className="jb-currency-marquee-wrap">
            <div className="jb-currency-marquee">
              <div className="jb-currency-marquee-content">
                {currencies1.map((c) => <CurrencyItem key={`r1-${c}`} code={c} />)}
              </div>
              <div className="jb-currency-marquee-content" aria-hidden="true">
                {currencies1.map((c) => <CurrencyItem key={`r1d-${c}`} code={c} />)}
              </div>
            </div>
          </div>

          {/* Currency marquee row 2 (reverse) */}
          <div className="jb-currency-marquee-wrap">
            <div className="jb-currency-marquee jb-marquee-reverse">
              <div className="jb-currency-marquee-content">
                {currencies2.map((c) => <CurrencyItem key={`r2-${c}`} code={c} />)}
              </div>
              <div className="jb-currency-marquee-content" aria-hidden="true">
                {currencies2.map((c) => <CurrencyItem key={`r2d-${c}`} code={c} />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MERCHANT SOLUTIONS ===== */}
      <section className="jb-merchant">
        <div className="jb-merchant-container">
          <div className="jb-merchant-solutions">
            <div className="jb-merchant-left">
              <h3 className="jb-merchant-title">Merchant Solutions</h3>
              <div className="jb-merchant-desc">Together, let&apos;s grow<br /> your business through innovation</div>
              <div className="jb-merchant-actions">
                <a href="https://calendly.com/ibnk/meettheteam" target="_blank" className="jb-merchant-btn">
                  <span>Book a Meeting</span>
                  <span className="jb-merchant-btn-icon"><SmallArrowSvg /></span>
                </a>
              </div>
            </div>
            <div className="jb-merchant-right">
              <div className="jb-draggable-wrap">
                <div className="jb-gradient-top"></div>
                <div className="jb-gradient-bottom"></div>
                <div className="jb-draggable-texts">
                  <div className="jb-drag-menu" ref={menuRef}>
                    <ul className="jb-drag-menu-list">
                      <li className="jb-drag-item"><button>Accept Payments</button></li>
                      <li className="jb-drag-item"><button>Quick Transfer</button></li>
                      <li className="jb-drag-item"><button>SEPA & SWIFT IBANs</button></li>
                      <li className="jb-drag-item"><button>Send payments</button></li>
                      <li className="jb-drag-item"><button>Currency Exchange</button></li>
                      <li className="jb-drag-item"><button>International Money Transfers</button></li>
                      <li className="jb-drag-item"><button>Competitive Savings</button></li>
                      <li className="jb-drag-item"><button>Global Payment Solutions</button></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="jb-merchant-mobile-actions">
                <a href="https://calendly.com/ibnk/meettheteam" target="_blank" className="jb-merchant-btn">
                  <span>Book a Meeting</span>
                  <span className="jb-merchant-btn-icon"><SmallArrowSvg /></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STORE LINKS / APP ===== */}
      <section className="jb-store">
        <div className="jb-store-container">
          <div className="jb-store-name">iBnk App</div>
          <h2 className="jb-store-heading">Driving the next<br /> generation of wealth.</h2>
          <div className="jb-store-desc">Download iBnk app to your devices and<br /> unlock financial freedom.</div>
          <div className="jb-store-links">
            <a href="/"><img alt="App Store" loading="lazy" width="219" height="64" src="https://www.jetonbank.com/img/home/app-store.svg" /></a>
            <a href="/"><img alt="Google Play" loading="lazy" width="219" height="64" src="https://www.jetonbank.com/img/home/google-play-store.svg" /></a>
          </div>
        </div>
        <video src="https://www.jetonbank.com/img/home/store-video.mp4" autoPlay muted playsInline loop></video>
      </section>

      {/* ===== GROW YOUR BUSINESS CTA ===== */}
      <section className="jb-grow">
        <div className="jb-grow-container">
          <div className="jb-grow-hero">
            <h2>Looking for a true<br /> partner to help <span>grow your business?</span></h2>
            <div className="jb-grow-actions">
              <a href="https://calendly.com/ibnk/meettheteam" target="_blank" className="jb-grow-btn">
                <span>Book a Meeting</span>
                <span className="jb-grow-btn-icon"><SmallArrowSvg /></span>
              </a>
            </div>
            <div className="jb-grow-desc">
              If you have any questions or need assistance,<br />
              feel free to reach out to us at <a href="mailto:team@ibnk.com">team@ibnk.com</a><br />
              or click the button above to book a meeting with our team.<br />
              We&apos;re here to support you every step of the way.
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="jb-footer">
        <div className="jb-footer-container">
          {/* Info bar */}
          <div className="jb-footer-anim">
            <div className="jb-info-bar">
              <div className="jb-info-inner">
                <div className="jb-info-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path d="M16.9289 16.929L9.85786 9.85791M9.85786 38.1422L16.929 31.0711M31.0711 31.071L38.1421 38.1421M38.1421 9.85782L31.071 16.9289M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24ZM34 24C34 29.5228 29.5228 34 24 34C18.4772 34 14 29.5228 14 24C14 18.4772 18.4772 14 24 14C29.5228 14 34 18.4772 34 24Z" stroke="white" strokeOpacity="0.69" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                  24/7 client care
                </div>
                <div className="jb-info-separator"></div>
                <div className="jb-info-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none"><path d="M10.3359 17.9981V33.9981M19.3359 17.9981V33.9981M29.3359 17.9981V33.9981M38.3359 17.9981V33.9981M6.33594 37.1981V38.7981C6.33594 39.9182 6.33594 40.4782 6.55392 40.9061C6.74567 41.2824 7.05163 41.5884 7.42796 41.7801C7.85578 41.9981 8.41583 41.9981 9.53594 41.9981H39.1359C40.256 41.9981 40.8161 41.9981 41.2439 41.7801C41.6202 41.5884 41.9262 41.2824 42.118 40.9061C42.3359 40.4782 42.3359 39.9182 42.3359 38.7981V37.1981C42.3359 36.078 42.3359 35.5179 42.118 35.0901C41.9262 34.7138 41.6202 34.4078 41.2439 34.2161C40.8161 33.9981 40.256 33.9981 39.1359 33.9981H9.53594C8.41583 33.9981 7.85578 33.9981 7.42796 34.2161C7.05163 34.4078 6.74567 34.7138 6.55392 35.0901C6.33594 35.5179 6.33594 36.078 6.33594 37.1981ZM23.6418 6.15235L8.84176 9.44124C7.94764 9.63993 7.50058 9.73928 7.16687 9.97969C6.87252 10.1918 6.64139 10.4799 6.49824 10.8132C6.33594 11.1911 6.33594 11.6491 6.33594 12.565V14.7981C6.33594 15.9182 6.33594 16.4782 6.55392 16.9061C6.74567 17.2824 7.05163 17.5884 7.42796 17.7801C7.85578 17.9981 8.41583 17.9981 9.53594 17.9981H39.1359C40.256 17.9981 40.8161 17.9981 41.2439 17.7801C41.6202 17.5884 41.9262 17.2824 42.118 16.9061C42.3359 16.4782 42.3359 15.9182 42.3359 14.7981V12.565C42.3359 11.6491 42.3359 11.1911 42.1736 10.8132C42.0305 10.4799 41.7994 10.1918 41.505 9.97969C41.1713 9.73928 40.7242 9.63993 39.8301 9.44124L25.0301 6.15235C24.7711 6.09478 24.6415 6.066 24.5106 6.05452C24.3944 6.04433 24.2775 6.04433 24.1612 6.05452C24.0303 6.066 23.9008 6.09478 23.6418 6.15235Z" stroke="white" strokeOpacity="0.69" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                  Operating since 2018
                </div>
                <div className="jb-info-separator"></div>
                <div className="jb-info-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="34" height="42" viewBox="0 0 34 42" fill="none"><path d="M24.9665 24.9806L31.4954 17.518C33.4344 15.3016 33.9182 12.2277 32.7585 9.49521C31.6608 6.90914 29.2994 5.21057 26.5588 5.00721V1.59744C26.5588 1.26736 26.2933 1 25.9656 1H8.4252C8.09742 1 7.83193 1.26736 7.83193 1.59744V5.00657C5.08751 5.20629 2.72167 6.90593 1.6225 9.49521C0.462329 12.2275 0.94655 15.3016 2.88535 17.518L9.4606 25.0334C10.3121 26.2881 11.4566 27.3254 12.7938 28.0459V30.7962C12.7938 33.3595 10.8608 35.476 8.38587 35.7467H7.8483C7.52052 35.7467 7.25503 36.0141 7.25503 36.3442V40.4028C7.25503 40.7329 7.52052 41.0002 7.8483 41.0002H26.5425C26.8702 41.0002 27.1357 40.7329 27.1357 40.4028V36.3742C27.1357 36.0441 26.8702 35.7767 26.5425 35.7767C23.8153 35.7767 21.5967 33.5426 21.5967 30.7962V28.0461C22.9529 27.3155 24.1112 26.2594 24.9665 24.9808V24.9806Z" fill="white" fillOpacity="0.69"></path><path d="M17.195 17.7239L14.9436 18.9156L15.6274 16.7511L15.8566 15.4053C15.9005 15.1473 15.8157 14.8836 15.629 14.7001L14.6568 13.7459L15.999 13.5495C16.2579 13.5117 16.4811 13.348 16.5964 13.1128L17.1952 11.8907L17.7941 13.1128C17.9094 13.3477 18.1325 13.5117 18.3915 13.5495L19.7337 13.7459L18.7616 14.7001C18.5749 14.8835 18.4897 15.1472 18.5339 15.4055L18.7631 16.7509L17.195 17.7239Z" fill="white" fillOpacity="0.69"></path></svg>
                  Award-winning Banking
                </div>
              </div>
            </div>

            {/* Footer inner */}
            <div className="jb-footer-inner">
              <div className="jb-footer-flex">
                <div className="jb-footer-logo-area">
                  <a href="/" aria-label="iBnk Logo" style={{ textDecoration: 'none' }}>
                    <span style={{ fontFamily: "'Sequel Sans',arial,sans-serif", fontSize: '32px', fontWeight: 600, color: '#fff', lineHeight: 1 }}>iBnk</span>
                  </a>
                </div>
                <div className="jb-footer-menus">
                  <div className="jb-footer-menu">
                    <div className="jb-footer-menu-title">What we offer</div>
                    <ul>
                      <li><a href="/business-banking">Business Banking</a></li>
                      <li><a href="/multi-currency-account">Multi Currency Account</a></li>
                      <li><a href="/your-banking-manager">Your Banking Manager</a></li>
                      <li><a href="/dedicated-iban">Dedicated IBAN</a></li>
                      <li><a href="/virtual-card">Virtual Card</a></li>
                      <li><a href="/refer-and-earn">Refer and Earn</a></li>
                    </ul>
                  </div>
                  <div className="jb-footer-menu">
                    <div className="jb-footer-menu-title">Who we are</div>
                    <ul>
                      <li><a href="/general-terms">General Terms</a></li>
                      <li><a href="/terms-conditions">Terms of Use</a></li>
                      <li><a href="/privacy-policy">Privacy Policy</a></li>
                      <li><a href="/cookies-policy">Cookies Policy</a></li>
                      <li><a href="/information-security-policy">Information Security Policy</a></li>
                      <li><a href="/blog">Blog</a></li>
                    </ul>
                  </div>
                  <div className="jb-footer-menu">
                    <div className="jb-footer-menu-title">Where we are</div>
                    <div className="jb-footer-address">
                      1st Floor, 43 Great George<br />
                      Street, Roseau,<br />
                      Commonwealth of Dominica.<br /><br />
                      <a href="mailto:team@ibnk.com">team@ibnk.com</a>
                    </div>
                    <div className="jb-footer-social">
                      <a href="https://www.facebook.com/ibnkcom" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="18" fill="none"><path fill="#D0331C" fillRule="evenodd" d="M7.563 3.184a4.65 4.65 0 0 0-1.4-.24c-.567 0-1.791.407-1.791 1.197v1.89h2.907v3.184H4.372V18h-2.93V9.215H0V6.032h1.443V4.428C1.443 2.011 2.448 0 4.874 0 5.704 0 7.191.048 8 .359l-.437 2.825Z" clipRule="evenodd"></path></svg>
                      </a>
                      <a href="https://www.instagram.com/ibnkcom/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill="#D0331C" d="M19.95 5.842c-.047-1.056-.218-1.782-.462-2.41a4.848 4.848 0 0 0-1.15-1.763A4.889 4.889 0 0 0 16.58.524c-.632-.245-1.354-.415-2.41-.462C13.107.012 12.77 0 10.071 0 7.374 0 7.036.012 5.976.058 4.921.105 4.195.276 3.566.52A4.848 4.848 0 0 0 1.804 1.67 4.892 4.892 0 0 0 .659 3.427C.414 4.06.243 4.782.197 5.837.147 6.902.135 7.24.135 9.938c0 2.697.011 3.035.058 4.095.047 1.055.217 1.781.462 2.41a4.9 4.9 0 0 0 1.149 1.762 4.889 4.889 0 0 0 1.758 1.145c.633.245 1.355.415 2.41.462 1.06.047 1.398.058 4.096.058 2.697 0 3.035-.011 4.095-.058 1.055-.047 1.781-.217 2.41-.462a5.082 5.082 0 0 0 2.907-2.907c.244-.633.415-1.355.462-2.41.046-1.06.058-1.398.058-4.095 0-2.698-.004-3.036-.05-4.095Zm-1.79 8.112c-.042.97-.205 1.494-.341 1.844a3.296 3.296 0 0 1-1.887 1.886c-.349.136-.877.299-1.843.341-1.048.047-1.363.059-4.014.059-2.65 0-2.97-.012-4.013-.058-.97-.043-1.495-.206-1.844-.342a3.058 3.058 0 0 1-1.141-.741 3.089 3.089 0 0 1-.741-1.142c-.136-.349-.3-.877-.342-1.843-.047-1.048-.058-1.363-.058-4.014 0-2.65.011-2.969.058-4.013.043-.97.206-1.494.342-1.844.159-.43.411-.823.745-1.141.322-.33.71-.582 1.141-.741.35-.136.877-.3 1.844-.342 1.048-.046 1.362-.058 4.013-.058 2.655 0 2.97.012 4.014.058.97.043 1.494.206 1.843.342.431.159.823.411 1.141.741.33.322.583.71.742 1.141.136.35.299.877.341 1.844.047 1.048.059 1.362.059 4.013s-.012 2.962-.059 4.01Z"></path><path fill="#D0331C" d="M10.07 4.832a5.105 5.105 0 0 0 0 10.209 5.105 5.105 0 0 0 0-10.208Zm0 8.415a3.311 3.311 0 1 1 .002-6.622 3.311 3.311 0 0 1-.001 6.622ZM16.569 4.63a1.192 1.192 0 1 1-2.384 0 1.192 1.192 0 0 1 2.384 0Z"></path></svg>
                      </a>
                      <a href="https://twitter.com/ibnkcom" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill="#D0331C" d="M11.97 8.94 18.959.82h-1.656L11.235 7.87 6.39.819H.8l7.328 10.664L.801 20h1.656l6.406-7.447L13.981 20h5.589l-7.6-11.06Zm-2.267 2.637-.743-1.062-5.907-8.45h2.543l4.768 6.82.742 1.061 6.197 8.864H14.76l-5.057-7.233Z"></path></svg>
                      </a>
                      <a href="https://www.linkedin.com/company/ibnk/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path fill="#D0331C" d="M18 18v-6.593c0-3.24-.698-5.715-4.478-5.715-1.822 0-3.037.99-3.532 1.935h-.045V5.985H6.367V18h3.735v-5.963c0-1.575.293-3.082 2.228-3.082 1.912 0 1.935 1.777 1.935 3.172v5.85H18V18ZM.293 5.985h3.735V18H.293V5.985ZM2.16 0A2.16 2.16 0 0 0 0 2.16c0 1.193.968 2.183 2.16 2.183 1.193 0 2.16-.99 2.16-2.183A2.16 2.16 0 0 0 2.16 0Z"></path></svg>
                      </a>
                      <a href="https://t.me/ibnk_bot" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" fill="none"><path fill="#D0331C" d="M.931 6.193 18.668.075c.823-.266 1.542.18 1.276 1.293l.001-.001-3.02 12.727c-.224.903-.823 1.122-1.662.697l-4.599-3.032-2.218 1.912c-.245.22-.452.404-.927.404l.326-4.187L16.37 3c.37-.292-.083-.457-.572-.166L5.263 8.767.723 7.499c-.986-.28-1.007-.881.208-1.306Z"></path></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="jb-footer-desc">
                iBnk Bank Limited is licensed and authorised by the Financial Services Unit, Ministry of Finance of the Commonwealth of Dominica, licensed as a banking institution under the International Banking Act, fully authorised to provide services to clients worldwide, under the prudential supervision of the Financial Services Unit. iBnk Bank Limited is registered in the Commonwealth of Dominica, Company Number 2022/C0175, with its registered address at 1st Floor, 43 Great George Street, Roseau, Commonwealth of Dominica, Post Code: 00109-8000. iBnk Bank Limited is a member of Swift™, Swift Code: JETODMD2 LEI Code: 894500XGIX3R4HCIOC29.
                <p className="jb-copyright">Copyright, iBnk 2026. All rights reserved.</p>
              </div>
            </div>
          </div>

          <img src="https://www.jetonbank.com/img/footer-logo.png" width="0" height="0" alt="" className="jb-footer-bg-logo" />
        </div>
      </footer>
    </>
  )
}
