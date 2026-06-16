'use client'

import { useEffect, useRef, useState } from 'react'
import CtaMillion from '@/components/CtaMillion'
import dynamic from 'next/dynamic'
const Ballpit = dynamic(() => import('@/components/Ballpit'), { ssr: false })
const GridMotion = dynamic(() => import('@/components/GridMotion'), { ssr: false })
const Orb = dynamic(() => import('@/components/Orb'), { ssr: false })

// 28 identical Unsplash tiles for the GridMotion background in the product section
const GRIDMOTION_IMAGES = Array.from({ length: 28 }, () =>
  'https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
)

// Trusted partner logos — all pre-colorized to iBnk orange with transparent bg
const PARTNER_LOGOS = [
  { src: '/logos/circle.png',   alt: 'Circle' },
  { src: '/logos/kraken.png',   alt: 'Kraken' },
  { src: '/logos/cobo.svg',     alt: 'Cobo' },
  { src: '/logos/mhc.png',      alt: 'MHC Digital Group' },
  { src: '/logos/macropod.png', alt: 'Macropod' },
  { src: '/logos/sgb.png',      alt: 'SGB' },
]
import { useI18n } from '@/lib/i18n'

const CURRENCIES = [
  { code: 'USD', symbol: '$',  amount: 20233 },
  { code: 'AUD', symbol: 'A$', amount: 30821 },
  { code: 'CNY', symbol: '¥',  amount: 146870 },
  { code: 'HKD', symbol: 'HK$',amount: 158204 },
];

const TX_FEED = [
  { kind: 'inbound', name: 'Received · Claire',       time: 'Today, 12:20pm', amt: '+USD $640',  credit: true  },
  { kind: 'bank',    name: 'Sent · Bank transfer',  time: 'Today, 10:30am', amt: '-AUD $334',  credit: false },
  { kind: 'base',    name: 'Received · Base API',   time: 'Today, 09:14am', amt: '+USDC $53',  credit: true  },
  { kind: 'fx',      name: 'Sent · FX AUD → USD',   time: 'Today, 08:02am', amt: '-AUD $200',  credit: false },
];

const CHAT_MSGS = [
  { id: 'q1',    type: 'user', text: 'Send 25 USDC to Claire in Paris' },
  { id: 'quote', type: 'ai',
    lead: 'Locking quote:',
    card: {
      rows: [
        ['You send',    '25.00 USDC'],
        ['Claire gets', '€23.04 EUR'],
      ],
      note: 'Mid-market rate · settles in ~3s',
    },
    trail: 'Confirm?' },
  { id: 'conf',  type: 'user', text: '✓ Confirm' },
  { id: 'done',  type: 'ai', success: true, text: 'Sent. Claire received €23.04 in 2.8s' },
];

const FX_CURRENCIES = [
  { code: 'USD', name: 'US Dollar',    color: '#477EE9' },
  { code: 'AUD', name: 'AUD Dollar',   color: '#ff751f' },
  { code: 'CNY', name: 'Chinese CNY',  color: '#c23030' },
  { code: 'HKD', name: 'HK Dollar',    color: '#7b5ed0' },
  { code: 'EUR', name: 'Euro',         color: '#2a6fdb' },
  { code: 'JPY', name: 'Japanese Yen', color: '#34C771' },
  { code: 'GBP', name: 'British GBP',  color: '#0b3b8c' },
  { code: 'SGD', name: 'SG Dollar',    color: '#e2514a' },
];

export default function HomePage() {
  const { t } = useI18n();
  const testimonialsRef = useRef(null);
  const heroIntroRef = useRef(null);
  const [currencyIdx, setCurrencyIdx] = useState(0);
  const [feedStart, setFeedStart] = useState(0);

  // Auto-cycle currency every 2.6s
  useEffect(() => {
    const id = setInterval(() => setCurrencyIdx((i) => (i + 1) % CURRENCIES.length), 2600);
    return () => clearInterval(id);
  }, []);

  // Auto-rotate transaction feed every 2.4s (one card at a time)
  useEffect(() => {
    const id = setInterval(() => setFeedStart((i) => (i + 1) % TX_FEED.length), 2400);
    return () => clearInterval(id);
  }, []);

  // Section page switcher: 0 = Universal Account, 1 = FX Swap, 2 = Chat (Pay in messages)
  const [pageIdx, setPageIdx] = useState(0);
  const PAGE_COUNT = 3;
  // Pause auto-cycling when user hovers or clicks — signals "I want to interact here"
  const [isPaused, setIsPaused] = useState(false);
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => setPageIdx(p => (p + 1) % PAGE_COUNT), 6000);
    return () => clearInterval(id);
  }, [isPaused]);

  // Page 3 — chat platform auto-cycles WhatsApp → X → chat every 1s (also pauses on hover)
  const [chatTabIdx, setChatTabIdx] = useState(0);
  const CHAT_WORDS = ['WhatsApp', 'X', 'chat'];
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => setChatTabIdx(i => (i + 1) % 3), 1000);
    return () => clearInterval(id);
  }, [isPaused]);

  // Page 3 — messages appear one-by-one when page is active; resets when leaving
  const [chatMsgIdx, setChatMsgIdx] = useState(0);
  useEffect(() => {
    if (pageIdx !== 2) { setChatMsgIdx(0); return; }
    const schedule = [500, 1700, 3000, 4000]; // ms per message reveal
    const timers = schedule.map((ms, i) => setTimeout(() => setChatMsgIdx(i + 1), ms));
    return () => timers.forEach(clearTimeout);
  }, [pageIdx]);

  // FX calculator state — uses frankfurter.app (ECB reference rates, same basis as Google)
  const [fxFromIdx, setFxFromIdx] = useState(0); // USD
  const [fxToIdx, setFxToIdx]     = useState(1); // AUD
  const [fxAmount, setFxAmount]   = useState(10000);
  const [fxRate, setFxRate]       = useState(null);
  const [fxSecs, setFxSecs]       = useState(25);
  const [fxRefresh, setFxRefresh] = useState(0);

  const fxFromCcy = FX_CURRENCIES[fxFromIdx];
  const fxToCcy   = FX_CURRENCIES[fxToIdx];

  // Fetch rate when currencies or refresh token change
  useEffect(() => {
    const from = fxFromCcy.code;
    const to   = fxToCcy.code;
    if (from === to) { setFxRate(1); return; }
    let cancelled = false;
    fetch(`https://api.frankfurter.dev/v1/latest?base=${from}&symbols=${to}`)
      .then(r => r.ok ? r.json() : Promise.reject())
      .then(d => { if (!cancelled && d?.rates?.[to]) setFxRate(d.rates[to]); })
      .catch(() => { if (!cancelled) setFxRate(null); });
    return () => { cancelled = true; };
  }, [fxFromCcy.code, fxToCcy.code, fxRefresh]);

  // Quote countdown — triggers refetch every 25s
  useEffect(() => {
    const id = setInterval(() => {
      setFxSecs(s => {
        if (s <= 1) { setFxRefresh(n => n + 1); return 25; }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const fxResult = fxRate != null ? fxAmount * fxRate : null;

  // Quote countdown + slight rate fluctuation
  const [quoteSecs, setQuoteSecs] = useState(12);
  const [quoteRate, setQuoteRate] = useState(1.400679);
  useEffect(() => {
    const id = setInterval(() => {
      setQuoteSecs((s) => {
        if (s <= 1) {
          setQuoteRate(1.400679 + (Math.random() - 0.5) * 0.0006);
          return 12;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const currency = CURRENCIES[currencyIdx];
  const currentTx = TX_FEED[feedStart];

  // Hero Introduction: scroll-driven snippet convergence to center
  useEffect(() => {
    const heroIntro = heroIntroRef.current;
    if (!heroIntro) return;

    const header = heroIntro.querySelector('header');
    const snippetsContainer = heroIntro.querySelector('.snippets');
    const snippetItems = heroIntro.querySelectorAll('.snippets li');
    const titleEl = heroIntro.querySelector('.sticky-slot h2');
    if (!header || !snippetsContainer || !snippetItems.length) return;

    let restPositions = [];

    function cachePositions() {
      const containerRect = snippetsContainer.getBoundingClientRect();
      restPositions = [];
      snippetItems.forEach((item) => {
        item.style.transform = 'none';
        item.style.opacity = '';
        const r = item.getBoundingClientRect();
        restPositions.push({
          cx: (r.left - containerRect.left) + r.width / 2,
          cy: (r.top - containerRect.top) + r.height / 2,
        });
      });
    }
    cachePositions();
    window.addEventListener('resize', cachePositions);

    function updateSnippets() {
      const rect = header.getBoundingClientRect();
      const headerH = header.offsetHeight;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / (headerH - window.innerHeight)));

      // Ease out cubic for smooth convergence
      const eased = 1 - Math.pow(1 - progress, 3);

      // Fade in quickly, stay visible
      const opacity = Math.min(1, progress / 0.1);

      // Target: center of container
      const centerX = snippetsContainer.offsetWidth / 2;
      const centerY = snippetsContainer.offsetHeight / 2;

      snippetItems.forEach((item, i) => {
        const rest = restPositions[i];
        if (!rest) return;
        const tx = (centerX - rest.cx) * eased;
        const ty = (centerY - rest.cy) * eased;
        item.style.opacity = opacity;
        item.style.transform = `translate(${tx}px, ${ty}px)`;
      });

      // Title: scale down + fade as snippets converge
      if (titleEl) {
        const titleScale = 1 - eased * 0.25; // 1.0 → 0.75
        const titleOpacity = 1 - eased * 0.8; // 1.0 → 0.2
        titleEl.style.transform = `scale(${titleScale})`;
        titleEl.style.opacity = titleOpacity;
      }
    }

    let ticking = false;
    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => { updateSnippets(); ticking = false; });
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    updateSnippets();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', cachePositions);
    };
  }, []);

  // One ID: count-up numbers when section enters viewport
  useEffect(() => {
    const targets = document.querySelectorAll('.oneid [data-count-to]');
    if (!targets.length) return;

    function fmt(n, decimals) {
      return n.toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      });
    }

    function animate(el) {
      const raw = el.getAttribute('data-count-to') || '0';
      const decimals = (raw.split('.')[1] || '').length;
      const end = parseFloat(raw);
      const duration = 1500;
      const startTime = performance.now();
      function tick(now) {
        const t = Math.min(1, (now - startTime) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = fmt(end * eased, decimals);
        if (t < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }

    const seen = new WeakSet();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !seen.has(entry.target)) {
          seen.add(entry.target);
          animate(entry.target);
        }
      });
    }, { threshold: 0.4 });

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Testimonials: card stacking + background parallax
  useEffect(() => {
    const section = testimonialsRef.current;
    if (!section) return;

    const cardEls = section.querySelectorAll('.testimonial-cards li .testimonial-card');
    const bgImg = section.querySelector('.background img');
    if (!cardEls.length) return;

    // Measure each card's full height
    const heights = Array.from(cardEls).map(c => c.offsetHeight);

    function update() {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;

      // Background image parallax
      if (bgImg) {
        const p = (vh - rect.top) * 0.06;
        bgImg.style.transform = `translate3d(0, ${-p}px, 0)`;
      }

      // How far the section has scrolled: 0 = bottom edge at viewport bottom, 1 = top edge at viewport top
      const scrollRange = rect.height - vh;
      if (scrollRange <= 0) return;
      const rawProgress = -rect.top / scrollRange;

      cardEls.forEach((card, i) => {
        if (i === 0) {
          // First card: no transform
          card.style.transform = '';
          card.style.clipPath = 'none';
          return;
        }

        // Each subsequent card stacks more aggressively
        // progress per card: how much this card should be "stacked"
        const cardProgress = Math.max(0, Math.min(1,
          (rawProgress - 0.15 * i) / 1.2
        ));

        // translateY: move up to overlap previous cards
        // Max translate = sum of previous card heights minus a small peek amount
        const peekHeight = 52; // avatar row height to peek
        let maxTranslateY = 0;
        for (let j = 0; j < i; j++) {
          maxTranslateY += heights[j] - peekHeight / i;
        }
        const ty = -cardProgress * maxTranslateY;

        // scale: shrink slightly as it stacks (1.0 → ~0.88)
        const scale = 1 - cardProgress * (0.03 * i);

        // clip-path: clip from top to hide content, only show bottom portion
        const clipTop = cardProgress * (heights[i] - peekHeight);

        card.style.transform = `translate3d(0, ${ty}px, 0) scale(${scale})`;
        card.style.clipPath = clipTop > 1
          ? `inset(${clipTop}px 0 0)`
          : 'none';
      });
    }

    let ticking = false;
    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => { update(); ticking = false; });
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    update();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .ibnk-section { padding: var(--120-64) 0; }
        .ibnk-tag {
          display: inline-block;
          border: 1.5px solid rgba(0,0,0,0.2);
          border-radius: 999px;
          padding: 6px 16px;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.04em;
        }
        .ibnk-rail-card {
          border: 1.5px solid rgba(0,0,0,0.1);
          border-radius: 20px;
          padding: 32px;
        }
        .ibnk-rail-card.fiat {
          border-color: rgba(71,126,233,0.3);
        }
        .ibnk-stat {
          border-top: 1.5px solid rgba(0,0,0,0.1);
          padding-top: 24px;
        }
        .ibnk-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255,117,31,0.08);
          border-radius: 999px;
          padding: 10px 20px;
          font-size: 14px;
        }
        .ibnk-pill .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ff751f;
          flex-shrink: 0;
        }
        .ibnk-feature-card {
          border: 1.5px solid rgba(0,0,0,0.1);
          border-radius: 20px;
          padding: 32px;
        }
        .segment-card {
          border-radius: 20px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .segment-card.s1 { background: rgba(71,126,233,0.06); }
        .segment-card.s2 { background: rgba(52,199,113,0.06); }
        .segment-card.s3 { background: #1a1a1a; color: #fff; }
        .hide-xs {}
        @media (max-width: 640px) {
          .hide-xs { display: none !important; }
        }
      `}} />

      {/* ===== HERO SECTION ===== */}
      <header className="_common-header" data-layout="full">
        <div className="background absolute inset-0 overflow-hidden" style={{ backgroundColor: '#000' }}>
          <Orb
            hoverIntensity={2}
            rotateOnHover
            hue={0}
            forceHoverState={false}
            backgroundColor="#000000"
          />
        </div>

        <div className="g-row main-row color-white relative" style={{ pointerEvents: 'none' }}>
          <div className="g-col xxl-9 md-10 sm-14 xs-16 hero-heading-col">
            <h1 className="title-2 -medium">{t('hero.title.prefix')}<br /><span className="rotating-words" aria-live="polite">
                <span className="rotating-word">{t('hero.rotate.1')}</span>
                <span className="rotating-word">{t('hero.rotate.2')}</span>
                <span className="rotating-word">{t('hero.rotate.3')}</span>
              </span></h1>

            <div
              style={{
                marginTop: 'clamp(28px, 3vw, 48px)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 18,
                width: 'fit-content',
                pointerEvents: 'auto',
              }}
            >
              <span style={{
                fontSize: 16,
                color: 'rgba(255,255,255,0.65)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontWeight: 500,
              }}>
                Backed by
              </span>
              <img
                src="/images/startmate-logo.png"
                alt="Startmate"
                style={{
                  height: 36,
                  width: 'auto',
                  display: 'block',
                  filter: 'brightness(0) invert(1)',
                  opacity: 0.95,
                }}
              />
            </div>
          </div>

        </div>

        <button className="_scroll-hint caption">
          <div className="hint-inner">
            <span className="_coin-drop">
              <span></span><span></span><span></span><span></span><span></span><span></span>
            </span>
            <span>Scroll</span>
          </div>
        </button>
      </header>

      {/* ===== HERO INTRODUCTION (Three Pillars) ===== */}
      <section className="_hero-introduction" ref={heroIntroRef}>
        <header className="relative">
          <div className="sticky-slot">
            <div className="title h-full flex place-center text-center overflow-hidden">
              <h2 className="-medium relative whitespace-pre-line">{t('pillars.title')}</h2>
            </div>
            <ul className="snippets absolute inset-0">
              <li><div className="snippet"><img src="/images/snippet-deposit.png" width="600" height="500" alt="Deposit snippet" /></div></li>
              <li><div className="snippet"><img src="/images/snippet-send1.png" width="660" height="684" alt="Send snippet" /></div></li>
              <li><div className="snippet"><img src="/images/snippet-pay.png" width="720" height="720" alt="Pay snippet" /></div></li>
              <li><div className="snippet"><img src="/images/snippet-send2.png" width="660" height="627" alt="Send snippet" /></div></li>
              <li><div className="snippet"><img src="/images/snippet-exchange.png" width="660" height="627" alt="Exchange snippet" /></div></li>
            </ul>
          </div>
        </header>

        <ul className="taglines flex flex-col items-center title-2 no-select" style={{ '--items': 3 }}>
          <li style={{ '--color': '#477EE9', '--index': 0 }}>
            <div className="flex gap-20 items-center">
              <div className="icon-card grid place-center" style={{ backgroundColor: 'var(--color)', borderRadius: 'clamp(12px, 10.791px + 100vw * 0.0031, 24px)' }}>
                <span className="_icon" style={{ '--color': '#fff', '--size': 'var(--48-24)' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 'clamp(24px, 16.863px + 100vw * 0.0183, 48px)', height: 'clamp(24px, 16.863px + 100vw * 0.0183, 48px)' }}><circle cx="4.5" cy="12" r="2.5" fill="#fff" /><circle cx="19.5" cy="12" r="2.5" fill="#fff" /><path d="M7 12h10" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" /><path d="M14 8l3 4-3 4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
                </span>
              </div>
              <h3 className="-medium" style={{ color: 'var(--color)' }}>{t('pillars.direct')}</h3>
            </div>
          </li>
          <li style={{ '--color': '#34C771', '--index': 1 }}>
            <div className="flex gap-20 items-center">
              <div className="icon-card grid place-center" style={{ backgroundColor: 'var(--color)', borderRadius: 'clamp(12px, 10.791px + 100vw * 0.0031, 24px)' }}>
                <span className="_icon" style={{ '--color': '#fff', '--size': 'var(--48-24)' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 'clamp(24px, 16.863px + 100vw * 0.0183, 48px)', height: 'clamp(24px, 16.863px + 100vw * 0.0183, 48px)' }}><path d="M3 18C3 11.5 7 7.5 12 7.5S21 11.5 21 18" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" fill="none" /><path d="M3 18h18" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" /><path d="M5 18v3M9 14v7M15 14v7M19 18v3" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" /></svg>
                </span>
              </div>
              <h3 className="-medium" style={{ color: 'var(--color)' }}>{t('pillars.bridge')}</h3>
            </div>
          </li>
          <li style={{ '--color': '#ff751f', '--index': 2 }}>
            <div className="flex gap-20 items-center">
              <div className="icon-card grid place-center" style={{ backgroundColor: 'var(--color)', borderRadius: 'clamp(12px, 10.791px + 100vw * 0.0031, 24px)' }}>
                <span className="_icon" style={{ '--color': '#fff', '--size': 'var(--48-24)' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 'clamp(24px, 16.863px + 100vw * 0.0183, 48px)', height: 'clamp(24px, 16.863px + 100vw * 0.0183, 48px)' }}><circle cx="5" cy="12" r="2.5" stroke="#fff" strokeWidth="1.8" fill="none" /><circle cx="19" cy="5" r="2" stroke="#fff" strokeWidth="1.8" fill="none" /><circle cx="19" cy="12" r="2" stroke="#fff" strokeWidth="1.8" fill="none" /><circle cx="19" cy="19" r="2" stroke="#fff" strokeWidth="1.8" fill="none" /><path d="M7.3 11L17 5.8M7.5 12H17M7.3 13L17 18.2" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" /></svg>
                </span>
              </div>
              <h3 className="-medium" style={{ color: 'var(--color)' }}>{t('pillars.route')}</h3>
            </div>
          </li>
        </ul>
      </section>

      {/* ===== ONE ID — phone showcase + FX quote switcher ===== */}
      <section
        className={`oneid oneid--page-${pageIdx}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setIsPaused(false); }}
      >
        <div className="oneid-bg" aria-hidden="true" />
        <div className="oneid-top">
          <h2 className="oneid-title"><br aria-hidden="true" />All currencies</h2>
          {/* Page 2 headline — overlays the same slot for identical spacing */}
          <div className="oneid-fx-intro">
            <h2 className="oneid-fx-head">Ultra-low-cost FX, live 24/7</h2>
            <p className="oneid-fx-sub">One call for live quotes and instant global settlement.</p>
          </div>
          {/* Page 3 headline — chat */}
          <div className="oneid-chat-intro">
            <h2 className="oneid-fx-head">
              Send money via{' '}
              <span key={chatTabIdx} className="oneid-chat-word">{CHAT_WORDS[chatTabIdx]}</span>
            </h2>
          </div>
        </div>
        <div className="oneid-stage">
          <div className="oneid-phone">
            <div className="oneid-phone-inner">
              <div className="oneid-phone-head">
                <div className="oneid-avatar" aria-hidden="true">
                  <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=160&h=160&fit=crop&crop=faces&q=80" alt="" />
                </div>
                <span className="oneid-id">ID: XXXXX</span>
              </div>

              <div className="oneid-page is-active">
                <div className="oneid-balance">
                  <p className="oneid-balance-label">Universal Account</p>
                  <div className="oneid-balance-row">
                    <h3 className="oneid-amount" key={currency.code}>
                      <span className="oneid-amount-symbol">{currency.symbol}</span>
                      <span className="oneid-amount-num">{currency.amount.toLocaleString('en-US')}</span>
                    </h3>
                    <ul className="oneid-currency-list">
                      {CURRENCIES.map((c, idx) => (
                        <li
                          key={c.code}
                          className={idx === currencyIdx ? 'active' : ''}
                          onClick={() => setCurrencyIdx(idx)}
                        >
                          {idx === currencyIdx ? '≈ ' : ''}{c.code}
                          {idx === currencyIdx ? <span className="chev">▾</span> : null}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <ul className="oneid-tx">
                  <li key={feedStart} className="oneid-tx-item">
                    <span className={`oneid-tx-icon oneid-tx-icon-${currentTx.kind}`} aria-hidden="true">
                      {currentTx.kind === 'base' && <svg width="14" height="2" viewBox="0 0 14 2" fill="none"><rect width="14" height="2" rx="1" fill="#fff"/></svg>}
                      {currentTx.kind === 'bank' && <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M3 8l4-4M3 8l4 4M3 8h14M21 16l-4 4M21 16l-4-4M21 16H7" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                      {currentTx.kind === 'fx' && <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M7 7h12l-3-3M17 17H5l3 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                      {currentTx.kind === 'inbound' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 5v14m0 0l6-6m-6 6l-6-6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                    </span>
                    <div className="oneid-tx-meta">
                      <p className="oneid-tx-name">{currentTx.name}</p>
                      <p className="oneid-tx-time">{currentTx.time}</p>
                    </div>
                    <span className={`oneid-tx-amt ${currentTx.credit ? 'is-credit' : ''}`}>{currentTx.amt}</span>
                  </li>
                </ul>
              </div>

              <div className="oneid-orb-wrap" aria-hidden="true">
                <button type="button" className="oneid-orb" aria-label="AI assistant">
                  <span className="oneid-orb-ring oneid-orb-ring-1" />
                  <span className="oneid-orb-ring oneid-orb-ring-2" />
                  <span className="oneid-orb-core" />
                </button>
              </div>
            </div>
          </div>

          {/* Page 2 — FX panel (standalone, centered in stage) */}
          <div className="oneid-fx-panel" role="region" aria-label="FX quote">
            <div className="fx-side">
              <span className="fx-label">FROM</span>
              <div className="fx-row">
                <div className="fx-amt-wrap">
                  <input
                    type="text"
                    inputMode="numeric"
                    className="fx-amt-input"
                    value={fxAmount.toLocaleString('en-US')}
                    onChange={(e) => {
                      const n = Number(e.target.value.replace(/[^0-9.]/g, ''));
                      if (!Number.isNaN(n)) setFxAmount(n);
                    }}
                    aria-label="From amount"
                  />
                  <p className="fx-sub">Bonding</p>
                </div>
                <button type="button" className="fx-pill" onClick={() => setFxFromIdx((i) => (i + 1) % FX_CURRENCIES.length)}>
                  <span className="fx-dot" style={{ background: fxFromCcy.color }} />
                  {fxFromCcy.name}
                </button>
              </div>
            </div>

            <div className="fx-divider">
              <span className="fx-divider-line" />
              <button
                type="button"
                className="fx-swap-btn"
                onClick={() => { const a = fxFromIdx; setFxFromIdx(fxToIdx); setFxToIdx(a); }}
                aria-label="Swap currencies"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 4v14m0 0l-3-3m3 3l3-3M16 20V6m0 0l-3 3m3-3l3 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <span className="fx-divider-line" />
            </div>

            <div className="fx-side">
              <span className="fx-label">TO</span>
              <div className="fx-row">
                <h3 className="fx-amt fx-amt--to" key={fxResult ?? 'loading'}>
                  {fxResult != null
                    ? fxResult.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                    : '—'}
                </h3>
                <button type="button" className="fx-pill" onClick={() => setFxToIdx((i) => (i + 1) % FX_CURRENCIES.length)}>
                  <span className="fx-dot" style={{ background: fxToCcy.color }} />
                  {fxToCcy.name}
                </button>
              </div>
            </div>

            <div className="fx-footer">
              <span className="fx-rate-label">
                1 {fxFromCcy.code} = <strong>{fxRate != null ? fxRate.toFixed(4) : '—'} {fxToCcy.code}</strong>
              </span>
              <span className="fx-exp">Quote expires in {fxSecs}s</span>
            </div>
          </div>

          {/* Page 3 — Chat with iBby (pay in a message) */}
          <div className="oneid-chat-panel" role="region" aria-label="Chat with iBby">
            <div className={`oneid-chat-tabs platform-${['whatsapp','x','ibnk'][chatTabIdx]}`} role="tablist" aria-label="Chat platforms">
              <button type="button" className={`oneid-chat-tab ${chatTabIdx === 0 ? 'is-active' : ''}`} role="tab" aria-selected={chatTabIdx === 0} onClick={() => setChatTabIdx(0)}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M12 2a10 10 0 0 0-8.5 15.26L2 22l4.86-1.47A10 10 0 1 0 12 2Zm0 18.3a8.3 8.3 0 0 1-4.22-1.15l-.3-.18-2.88.87.88-2.8-.2-.3A8.3 8.3 0 1 1 12 20.3Zm4.78-6.23c-.26-.13-1.55-.77-1.79-.85-.24-.09-.42-.13-.6.13-.17.26-.68.85-.83 1.02-.15.17-.31.2-.57.07a6.8 6.8 0 0 1-2-1.24 7.54 7.54 0 0 1-1.4-1.74c-.14-.26-.01-.4.11-.53l.4-.46c.12-.14.17-.24.26-.4a.47.47 0 0 0 0-.44c-.07-.13-.6-1.44-.83-1.97-.22-.52-.44-.45-.6-.46h-.51a1 1 0 0 0-.71.33 3 3 0 0 0-.94 2.24c0 1.32.96 2.6 1.1 2.78.13.17 1.9 2.9 4.6 4.07.64.28 1.14.44 1.53.57.64.2 1.22.17 1.68.1.51-.07 1.55-.63 1.77-1.24.22-.61.22-1.13.15-1.24-.07-.11-.24-.17-.5-.3Z"/>
                </svg>
                WhatsApp
              </button>
              <button type="button" className={`oneid-chat-tab ${chatTabIdx === 1 ? 'is-active' : ''}`} role="tab" aria-selected={chatTabIdx === 1} onClick={() => setChatTabIdx(1)}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                X
              </button>
              <button type="button" className={`oneid-chat-tab ${chatTabIdx === 2 ? 'is-active' : ''}`} role="tab" aria-selected={chatTabIdx === 2} onClick={() => setChatTabIdx(2)}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M21 12a9 9 0 1 0-3.35 7l3.35.85-.85-3.35A9 9 0 0 0 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                iBnk App
              </button>
            </div>

            <div className="oneid-chat-header">
              <span className="oneid-chat-avatar oneid-chat-avatar--orb" aria-hidden="true">
                <span className="oneid-chat-orb-ring oneid-chat-orb-ring-1" />
                <span className="oneid-chat-orb-ring oneid-chat-orb-ring-2" />
                <span className="oneid-chat-orb-core" />
              </span>
              <div className="oneid-chat-meta">
                <strong>iBby</strong>
                <span>iBnk AI · online</span>
              </div>
            </div>

            <div className="oneid-chat-feed">
              {CHAT_MSGS.slice(0, chatMsgIdx).map((msg) => (
                <div key={msg.id} className={`oneid-chat-msg is-${msg.type}${msg.success ? ' is-success' : ''}`}>
                  {msg.success && <span className="oneid-chat-check" aria-hidden="true">✓</span>}
                  {msg.lead && <span className="oneid-chat-line">{msg.lead}</span>}
                  {msg.card && (
                    <div className="oneid-chat-card">
                      {msg.card.rows.map(([label, value]) => (
                        <div className="oneid-chat-card-row" key={label}>
                          <span>{label}</span><strong>{value}</strong>
                        </div>
                      ))}
                      <div className="oneid-chat-card-note">{msg.card.note}</div>
                    </div>
                  )}
                  {msg.trail && <span className="oneid-chat-line">{msg.trail}</span>}
                  {msg.text && <span>{msg.text}</span>}
                </div>
              ))}
            </div>

            <div className="oneid-chat-input" aria-hidden="true">
              <span className="oneid-chat-placeholder">Message iBby…</span>
              <button type="button" className="oneid-chat-send" aria-label="Send">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 19V5m0 0l-6 6m6-6l6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>

          <div className="oneid-voice" aria-hidden="true">
            <div className="oneid-wave-strip">
              {Array.from({ length: 22 }).map((_, i) => (
                <span key={i} className="oneid-wave-bar" style={{ '--i': i }} />
              ))}
            </div>
            <p className="oneid-voice-text">Hi iBby, send $100 USDC to Claire.</p>
            <div className="oneid-quote">
              <div className="oneid-rate-block">
                <p className="oneid-rate-row"><span className="oneid-rate-amt">$1</span> <span className="oneid-rate-ccy">USD</span></p>
                <span className="oneid-rate-swap" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 4v12m0 0l-4-4m4 4l4-4M17 20V8m0 0l-4 4m4-4l4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <p className="oneid-rate-row" key={quoteRate}>
                  <span className="oneid-rate-amt">${quoteRate.toFixed(6)}</span> <span className="oneid-rate-ccy">AUD</span>
                </p>
              </div>
              <p className="oneid-meta"><span className="oneid-countdown" key={quoteSecs}>quote expires in {quoteSecs}s</span></p>
              <p className="oneid-meta">receive in ~ 1min</p>
            </div>
          </div>

        </div>

        {/* Page indicator dots — bottom-left of section */}
        <div className="oneid-dots" role="tablist" aria-label="Section page navigation">
          {Array.from({ length: PAGE_COUNT }).map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={pageIdx === i}
              aria-label={`Go to page ${i + 1}`}
              className={`oneid-dot ${pageIdx === i ? 'active' : ''}`}
              onClick={() => setPageIdx(i)}
            />
          ))}
        </div>
      </section>

      {/* ===== DUAL RAIL EXPLAINER (country-flag ball pit filling the whole section) ===== */}
      <section className="ibnk-section" id="cross-border" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {/* Flag-textured physics ball pit — covers the entire section */}
        <Ballpit
          count={50}
          gravity={0.005}
          friction={0.9975}
          wallBounce={0.95}
          followCursor={false}
        />
        <div className="g-row" style={{ position: 'relative', zIndex: 2 }}>
          <div className="g-col xxl-16 sm-16 xs-16" style={{ textAlign: 'center' }}>
            <h2 className="title-3 -medium" style={{ maxWidth: 800, marginLeft: 'auto', marginRight: 'auto' }}>{t('how.title')}</h2>
            <p className="subhead-2 -book mt-32" style={{ maxWidth: 680, opacity: 0.65, marginLeft: 'auto', marginRight: 'auto' }}>{t('how.subhead')}</p>
          </div>
        </div>
        <div className="g-row mt-64-24" style={{ position: 'relative', zIndex: 2 }}>
          <div className="g-col xxl-7 md-7 sm-16 xs-16">
            <div className="ibnk-rail-card fiat" style={{ height: '100%' }}>
              <span className="caption -medium uppercase" style={{ opacity: 0.5, letterSpacing: '0.1em' }}>{t('how.bank.label')}</span>
              <h3 className="title-4 -medium mt-16">{t('how.bank.title')}</h3>
              <p className="body -book mt-16" style={{ opacity: 0.7 }}>{t('how.bank.desc')}</p>
              <ul style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <li className="body-small" style={{ display: 'flex', gap: 10, alignItems: 'center' }}><span style={{ color: '#477EE9' }}>●</span> {t('how.bank.li1')}</li>
                <li className="body-small" style={{ display: 'flex', gap: 10, alignItems: 'center' }}><span style={{ color: '#477EE9' }}>●</span> {t('how.bank.li2')}</li>
                <li className="body-small" style={{ display: 'flex', gap: 10, alignItems: 'center' }}><span style={{ color: '#477EE9' }}>●</span> {t('how.bank.li3')}</li>
                <li className="body-small" style={{ display: 'flex', gap: 10, alignItems: 'center' }}><span style={{ color: '#477EE9' }}>●</span> KYC/KYB</li>
              </ul>
            </div>
          </div>
          <div className="g-col xxl-2 md-2 sm-16 xs-16 flex items-center justify-center hide-xs">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{ opacity: 0.3 }}><path d="M5 12h14M12 5l7 7-7 7" stroke="#ff751f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
          <div className="g-col xxl-7 md-7 sm-16 xs-16">
            <div className="ibnk-rail-card" style={{ height: '100%' }}>
              <span className="caption -medium uppercase" style={{ opacity: 0.7, letterSpacing: '0.1em' }}>{t('how.chain.label')}</span>
              <h3 className="title-4 -medium mt-16">{t('how.chain.title')}</h3>
              <p className="body -book mt-16" style={{ opacity: 0.85 }}>{t('how.chain.desc')}</p>
              <ul style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <li className="body-small" style={{ display: 'flex', gap: 10, alignItems: 'center' }}><span style={{ opacity: 0.6 }}>●</span> {t('how.chain.li1')}</li>
                <li className="body-small" style={{ display: 'flex', gap: 10, alignItems: 'center' }}><span style={{ opacity: 0.6 }}>●</span> {t('how.chain.li2')}</li>
                <li className="body-small" style={{ display: 'flex', gap: 10, alignItems: 'center' }}><span style={{ opacity: 0.6 }}>●</span> {t('how.chain.li3')}</li>
                <li className="body-small" style={{ display: 'flex', gap: 10, alignItems: 'center' }}><span style={{ opacity: 0.6 }}>●</span> {t('how.chain.li4')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHO WE SERVE — minimalist CardSwap ("Who we serve" tag removed) ===== */}
      {/* ===== PRODUCT SECTION — three audiences with GridMotion background ===== */}
      <section className="ibnk-section product-section" id="agentic">
        <div className="product-section__bg" aria-hidden="true">
          <GridMotion items={GRIDMOTION_IMAGES} gradientColor="black" />
        </div>
        <div className="product-section__overlay" aria-hidden="true" />
        <div className="g-row" style={{ position: 'relative', zIndex: 2, justifyContent: 'center' }}>
          <div className="g-col xxl-12 md-14 sm-16 xs-16" style={{ textAlign: 'center' }}>
            <h2 className="title-3 -medium">Moving Money, Optimized.</h2>
            <p className="subhead-2 -book mt-24" style={{ opacity: 0.6, maxWidth: 620, margin: '24px auto 0' }}>Whether you&apos;re sending money home, scaling a business, or deploying AI agents — iBnk gives you the rails.</p>
          </div>
        </div>

        <div className="g-row mt-64-24 product-grid" style={{ position: 'relative', zIndex: 2 }}>
          {/* For You */}
          <div className="g-col xxl-5 md-5 sm-16 xs-16">
            <article className="product-card" data-accent="you">
              <div className="product-card__icon" aria-hidden="true">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8" /><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
              </div>
              <span className="product-card__eyebrow">For You</span>
              <h3 className="product-card__title">Money, without borders.</h3>
              <p className="product-card__body">Hold any currency, send anywhere, pay from any chat. One universal account across borders.</p>
              <ul className="product-card__list">
                <li>Universal Hybrid Wallet</li>
                <li>T+0 cross-border remittance</li>
                <li>Voice-Driven Transfers to your friends</li>
                <li>Optimized FX Conversions</li>
              </ul>
              <a href="/signup" className="product-card__cta">Open an account <span aria-hidden="true">→</span></a>
            </article>
          </div>

          {/* For Your Business */}
          <div className="g-col xxl-5 md-5 sm-16 xs-16">
            <article className="product-card" data-accent="business">
              <div className="product-card__icon" aria-hidden="true">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M3 21V10l9-6 9 6v11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 21v-6h6v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <span className="product-card__eyebrow">For Your Business</span>
              <h3 className="product-card__title">Universal business account</h3>
              <p className="product-card__body">Hold modern digital dollars and traditional fiat side-by-side. Pay anyone, anywhere, in seconds—without the usual bank delays.</p>
              <ul className="product-card__list">
                <li>Hybrid Cash Balance (Stablecoin &amp; Fiat)</li>
                <li>Institutional FX &amp; Locking</li>
                <li>Programmable On/Off-Ramps</li>
                <li>T+0 Cross-Rail Settlement</li>
              </ul>
              <a href="/signup" className="product-card__cta">Open an account <span aria-hidden="true">→</span></a>
            </article>
          </div>

          {/* For Your Agent */}
          <div className="g-col xxl-6 md-6 sm-16 xs-16">
            <article className="product-card product-card--featured" data-accent="agent">
              <div className="product-card__badge">COMING</div>
              <div className="product-card__icon" aria-hidden="true">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><rect x="4" y="6" width="16" height="12" rx="3" stroke="currentColor" strokeWidth="1.8" /><circle cx="9" cy="12" r="1.2" fill="currentColor" /><circle cx="15" cy="12" r="1.2" fill="currentColor" /><path d="M12 2v4M8 18l-1 3M16 18l1 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
              </div>
              <span className="product-card__eyebrow">For Your Agent</span>
              <h3 className="product-card__title">One account, agent-accessible.</h3>
              <p className="product-card__body">Give your AI agent its own scoped key into your iBnk account — with the spending limits and audit trail you set. Same wallet, same rails, programmatic access.</p>
              <a href="https://cal.com/yi-zhang-avxwyp/15min" target="_blank" rel="noreferrer" className="product-card__cta">Talk to us <span aria-hidden="true">→</span></a>
            </article>
          </div>
        </div>
      </section>

      {/* ===== LOGO MARQUEE — Trusted partners / integrations (solid orange bg) ===== */}
      <section className="ibnk-section logo-section">
        <div className="g-row" style={{ justifyContent: 'center' }}>
          <div className="g-col xxl-14 md-14 sm-16 xs-16" style={{ textAlign: 'center' }}>
            <h2 className="title-3 -medium" style={{ color: '#fff' }}>Trusted by the Best. Connected to All.</h2>
          </div>
        </div>
        <div className="logo-marquee mt-64-24" aria-label="Partners and integrations">
          <div className="logo-marquee__track">
            {/* Row is duplicated for a seamless loop */}
            {[0, 1].map((dup) => (
              <ul key={dup} className="logo-marquee__row" aria-hidden={dup === 1}>
                {PARTNER_LOGOS.map((logo, i) => (
                  <li key={`${dup}-${i}`} className="logo-item">
                    <img src={logo.src} alt={dup === 0 ? logo.alt : ''} className="logo-item__img" />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EARLY CIRCLE — invite-only ===== */}
      <section className="_client-testimonials relative" ref={testimonialsRef}>
        <div className="background absolute inset-0">
          <img src="/images/testimonials-bg.jpg" width="4000" height="2667" alt="Our Early Circle" className="absolute inset-0 object-cover" />
        </div>

        <div className="g-row justify-center text-center color-white">
          <div className="g-col xxl-12 md-14 xs-16 testimonials-title">
            <h2 className="title-3 -medium" style={{ margin: 0 }}>
              Our Early Circle
            </h2>
            <p
              className="subhead-1 -medium"
              style={{
                opacity: 0.85,
                marginTop: 'clamp(16px, 1.5vw, 24px)',
                lineHeight: 1.3,
                maxWidth: '720px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              iBnk is invite-only during beta. Every member is here because someone vouched for them.
            </p>
          </div>
        </div>

        <ul className="testimonial-cards relative">
          <li>
            <div className="testimonial-card">
              <p className="-medium">Got pulled in by a friend</p>
              <p className="opacity-70">Was on the waitlist for weeks. Finally got the code from someone in the early cohort. Already moved my payroll over.</p>
              <div className="flex gap-8 items-center mt-16">
                <span className="_avatar inline-flex place-center" style={{ '--color': '#360802', '--background-color': '#BCFFBB' }}>VK</span>
                <span>Vamsi K. · Founder</span>
              </div>
            </div>
          </li>
          <li>
            <div className="testimonial-card">
              <p className="-medium">Quietly the best thing in my stack</p>
              <p className="opacity-70">A friend slipped me a code with a &ldquo;don&apos;t share it widely yet&rdquo; note. Now I get why.</p>
              <div className="flex gap-8 items-center mt-16">
                <span className="_avatar inline-flex place-center" style={{ '--color': '#360802', '--background-color': '#BBD2FF' }}>LA</span>
                <span>Leonie A. · Operator</span>
              </div>
            </div>
          </li>
          <li>
            <div className="testimonial-card">
              <p className="-medium">Three contractors asked me for an invite</p>
              <p className="opacity-70">I only have two codes left. People are starting to figure out what this is.</p>
              <div className="flex gap-8 items-center mt-16">
                <span className="_avatar inline-flex place-center" style={{ '--color': '#360802', '--background-color': '#F5FFBB' }}>KR</span>
                <span>Karl R. · Independent</span>
              </div>
            </div>
          </li>
          <li>
            <div className="testimonial-card">
              <p className="-medium">Worth the wait</p>
              <p className="opacity-70">Two months on the waitlist, one referral, and suddenly cross-border just works. I get why they&apos;re gating it.</p>
              <div className="flex gap-8 items-center mt-16">
                <span className="_avatar inline-flex place-center" style={{ '--color': '#360802', '--background-color': '#FFBBF0' }}>DP</span>
                <span>Dennis P. · CFO</span>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <CtaMillion />

      {/* Operating status — fixed bottom-right, above the support button */}
      <div className="op-status" role="status" aria-label="Operating status: 24/7/365">
        <span className="op-status__dot" aria-hidden="true" />
        <span className="op-status__text">
          <span className="op-status__label">Operating Status</span>
          <span className="op-status__value">24 / 7 / 365</span>
        </span>
      </div>
    </>
  )
}
