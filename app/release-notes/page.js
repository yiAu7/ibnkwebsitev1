'use client'

import { useState, useRef, useCallback } from 'react'
import CtaMillion from '@/components/CtaMillion'

const cards = [
  {
    href: '#',
    category: 'improvements',
    tag: 'Improvements',
    img: 'https://www.jeton.com/_ipx/q_90&w_850/cms/28886b1a9f623a6a8486f58bbd9ab0b1db6f285b-1200x627.png',
    alt: 'iBnk Card Available in the European Zone',
    title: 'iBnk Card Available in the European Zone',
    desc: 'The iBnk Physical Card can now be ordered from EU countries. Use it in-store or add it to Apple or Google Wallet for instant contactless transactions.',
    date: 'May 08, 2025',
  },
  {
    href: '#',
    category: 'feature',
    tag: 'New Feature',
    img: 'https://www.jeton.com/_ipx/q_90&w_850/cms/971b1227418ce809380cc1397bc71315ef5a63ab-1200x627.png',
    alt: 'Manage Over 20 Currencies with the iBnk App',
    title: 'Manage Over 20 Currencies with the iBnk App',
    desc: 'Manage, exchange, and spend 20 currencies in one secure app. iBnk gives you full control of your global finances.',
    date: 'May 27, 2025',
  },
  {
    href: '#',
    category: 'security',
    tag: 'Security & Compliance',
    img: 'https://www.jeton.com/_ipx/q_90&w_850/cms/2f9ca734a3991afc72a6f20ea0cd8b8593d33c48-1200x627.png',
    alt: 'Introducing the iBnk Virtual Card',
    title: 'Introducing the iBnk Virtual Card',
    desc: 'Discover the new iBnk Virtual Card – shop online safely without sharing your sensitive information. Order your card today through the iBnk app or website.',
    date: 'May 08, 2025',
  },
]

const filters = [
  { key: 'all', label: 'All' },
  { key: 'security', label: 'Security & Compliance' },
  { key: 'feature', label: 'New Feature' },
  { key: 'improvements', label: 'Improvements' },
]

export default function ReleaseNotesPage() {
  const [currentFilter, setCurrentFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredCards = cards.filter((card) => {
    const matchFilter = currentFilter === 'all' || card.category === currentFilter
    const query = searchQuery.toLowerCase().trim()
    const matchSearch = !query || card.title.toLowerCase().includes(query) || card.desc.toLowerCase().includes(query)
    return matchFilter && matchSearch
  })

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <header className="_release-hero">
        <div className="g-row hero-content color-white">
          {/* Heading */}
          <div className="hero-heading">
            <h1 className="title-2 -medium">Product Updates</h1>
          </div>

          {/* Description */}
          <div className="hero-description">
            <p className="subhead-2 -medium">Here, you&apos;ll find everything we&apos;re building to make your experience faster, safer, and more powerful.</p>
            <a href="#" className="_question-btn mt-32">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M9 9a3 3 0 1 1 4 2.83V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="12" cy="17" r="1" fill="currentColor" />
              </svg>
              Any questions?
            </a>
          </div>
        </div>
      </header>

      {/* ===== FEATURED CARDS (on orange bg) ===== */}
      <section className="_featured-updates">
        <div className="g-row">
          <div className="g-col" style={{ flex: '0 0 100%', maxWidth: '100%' }}>
            <div className="_featured-grid">

              {/* Featured Card 1 */}
              <a href="#" className="_featured-card">
                <div className="card-image">
                  <span className="card-tag">Security & Compliance</span>
                  <img src="https://www.jeton.com/_ipx/q_90&w_850/cms/2f9ca734a3991afc72a6f20ea0cd8b8593d33c48-1200x627.png"
                       alt="Introducing the iBnk Virtual Card" loading="lazy" />
                </div>
                <div className="card-body">
                  <h3 className="card-title">Introducing the iBnk Virtual Card</h3>
                  <p className="card-desc">Discover the new iBnk Virtual Card – shop online safely without sharing your sensitive information. Order your card today throug...</p>
                  <time className="card-date">May 08, 2025</time>
                </div>
              </a>

              {/* Featured Card 2 */}
              <a href="#" className="_featured-card">
                <div className="card-image">
                  <span className="card-tag">Improvements</span>
                  <img src="https://www.jeton.com/_ipx/q_90&w_850/cms/28886b1a9f623a6a8486f58bbd9ab0b1db6f285b-1200x627.png"
                       alt="iBnk Card Available in the European Zone" loading="lazy" />
                </div>
                <div className="card-body">
                  <h3 className="card-title">iBnk Card Available in the European Zone</h3>
                  <p className="card-desc">The iBnk Physical Card can now be ordered from EU countries. Use it in-store or add it to Apple or Google Wallet for instant...</p>
                  <time className="card-date">May 08, 2025</time>
                </div>
              </a>

              {/* Featured Card 3 (large) */}
              <a href="#" className="_featured-card">
                <div className="card-image">
                  <span className="card-tag">New Feature</span>
                  <img src="https://www.jeton.com/_ipx/q_90&w_850/cms/971b1227418ce809380cc1397bc71315ef5a63ab-1200x627.png"
                       alt="Manage Over 20 Currencies with the iBnk App" loading="lazy" />
                </div>
                <div className="card-body">
                  <h3 className="card-title">Manage Over 20 Currencies with the iBnk App</h3>
                  <p className="card-desc">Manage, exchange, and spend 20 currencies in one secure app. iBnk gives you full control of your global finances.</p>
                  <time className="card-date">May 27, 2025</time>
                </div>
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* ===== LATEST UPDATES ===== */}
      <section className="_updates-section">
        <div className="section-bg"></div>
        <div className="section-inner py-136-64">
          <div className="g-row">
            <div className="g-col" style={{ flex: '0 0 100%', maxWidth: '100%' }}>

              {/* Section Header */}
              <h2 className="title-4 -medium color-black mb-48-32">Latest Updates</h2>

              {/* Filter Bar */}
              <div className="_filter-bar">
                <div className="_filter-tabs" id="filter-tabs">
                  {filters.map((f) => (
                    <button
                      key={f.key}
                      data-filter={f.key}
                      data-active={currentFilter === f.key ? 'true' : undefined}
                      onClick={() => setCurrentFilter(f.key)}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
                <div className="_search-input">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="7.25" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search"
                    id="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Results Count */}
              <p className="_results-count" id="results-count">Results: <strong>{filteredCards.length}</strong> of <strong>{cards.length}</strong></p>

              {/* Updates Grid */}
              <div className="_updates-grid" id="updates-grid">
                {cards.map((card, i) => {
                  const matchFilter = currentFilter === 'all' || card.category === currentFilter
                  const query = searchQuery.toLowerCase().trim()
                  const matchSearch = !query || card.title.toLowerCase().includes(query) || card.desc.toLowerCase().includes(query)
                  const visible = matchFilter && matchSearch

                  return (
                    <a
                      key={i}
                      href={card.href}
                      className="_update-card"
                      data-category={card.category}
                      style={{ display: visible ? '' : 'none' }}
                    >
                      <div className="card-image">
                        <span className="card-tag">{card.tag}</span>
                        <img src={card.img} alt={card.alt} loading="lazy" />
                      </div>
                      <div className="card-body">
                        <h3 className="card-title">{card.title}</h3>
                        <p className="card-desc">{card.desc}</p>
                        <time className="card-date">{card.date}</time>
                      </div>
                    </a>
                  )
                })}
              </div>

            </div>
          </div>
        </div>
      </section>

      <CtaMillion />
    </>
  )
}
