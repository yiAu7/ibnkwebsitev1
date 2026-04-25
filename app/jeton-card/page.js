'use client'

import { useEffect, useRef } from 'react'
import Script from 'next/script'

export default function JetonCardPage() {
  const sectionRef = useRef(null)
  const canvasRef = useRef(null)
  const bundleRef = useRef(null)
  const riveLoaded = useRef(false)

  useEffect(() => {
    if (!riveLoaded.current) return
    initRive()
  }, [])

  function initRive() {
    const section = sectionRef.current
    const canvas = canvasRef.current
    if (!section || !canvas || typeof window === 'undefined' || !window.rive) return

    const riveInstance = new window.rive.Rive({
      src: '/home_cards.riv',
      canvas: canvas,
      autoplay: false,
      animations: 'app-card 2',
      onLoad: function () {
        riveInstance.resizeDrawingSurfaceToCanvas()
        riveInstance.play('app-card 2')
        requestAnimationFrame(function () {
          riveInstance.pause('app-card 2')
          riveInstance.scrub('app-card 2', 0)
          setupScroll()
        })
      }
    })

    function setupScroll() {
      let ticking = false
      const animZone = section.querySelector('.intro-main')
      const durationSeconds = 523 / 60

      function updateScroll() {
        const rect = animZone.getBoundingClientRect()
        const scrollRange = animZone.offsetHeight - window.innerHeight
        const scrolled = Math.max(0, -rect.top)
        const progress = Math.min(1, Math.max(0, scrolled / scrollRange))
        riveInstance.scrub('app-card 2', progress * durationSeconds)
      }

      window.addEventListener('scroll', function () {
        if (!ticking) {
          requestAnimationFrame(function () {
            updateScroll()
            ticking = false
          })
          ticking = true
        }
      }, { passive: true })

      window.addEventListener('resize', function () {
        riveInstance.resizeDrawingSurfaceToCanvas()
      })

      updateScroll()
    }
  }

  useEffect(() => {
    const bundle = bundleRef.current
    if (!bundle) return

    const items = Array.prototype.slice.call(bundle.querySelectorAll('ul li'))
    const positions = items.map(function (li) { return li.querySelector('.position') })
    const titleEl = bundle.querySelector('.bundle-center')
    let fired = false
    const parallaxSpeeds = [0.01, -0.015, 0.015, 0.02, -0.006]

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !fired) {
          fired = true
          observer.disconnect()
          runAnimation()
        }
      })
    }, { threshold: 0.5 })
    observer.observe(titleEl)

    function runAnimation() {
      const cw = bundle.offsetWidth
      const ch = bundle.offsetHeight
      const cx = cw * 0.5
      const cy = ch * 0.5

      const offsets = items.map(function (li) {
        return {
          x: cx - li.offsetLeft,
          y: cy - li.offsetTop
        }
      })

      positions.forEach(function (pos, i) {
        pos.style.transition = 'none'
        pos.style.opacity = '1'
        pos.style.transform = 'translate(' + offsets[i].x + 'px,' + offsets[i].y + 'px) scale(0) rotate(0deg)'
      })

      bundle.offsetHeight

      const staggerDelay = 100
      const randomRotations = items.map(function () {
        return (Math.random() - 0.5) * 6
      })

      positions.forEach(function (pos, i) {
        setTimeout(function () {
          pos.style.transition = 'transform 1s cubic-bezier(0.16, 1, 0.3, 1)'
          pos.style.transform = 'translate(' + offsets[i].x + 'px,' + offsets[i].y + 'px) scale(0.8) rotate(' + randomRotations[i] + 'deg)'
        }, i * staggerDelay)
      })

      titleEl.style.transition = 'color 0.4s ease'
      titleEl.style.color = '#fff'

      const phase2Delay = staggerDelay * items.length + 600
      setTimeout(function () {
        positions.forEach(function (pos) {
          pos.style.transition = 'transform 0.9s cubic-bezier(0.87, 0, 0.13, 1)'
          pos.style.transform = 'translate(0,0) scale(1) rotate(0deg)'
        })
      }, phase2Delay)
    }

    let ticking = false
    const handleScroll = function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          const rect = bundle.getBoundingClientRect()
          const viewH = window.innerHeight
          const progress = 1 - (rect.top + rect.height) / (viewH + rect.height)
          if (progress < -0.3 || progress > 1.3) { ticking = false; return }

          items.forEach(function (li, i) {
            const px = li.querySelector('.parallax')
            const speed = parallaxSpeeds[i] || 0.01
            const offset = (progress - 0.5) * viewH * speed
            px.style.transform = 'translateY(' + offset + 'px)'
          })
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <Script
        src="https://unpkg.com/@rive-app/canvas@2.21.6"
        strategy="afterInteractive"
        onLoad={() => {
          riveLoaded.current = true
          initRive()
        }}
      />

      {/* ===== HERO SECTION ===== */}
      <header className="_common-header" data-layout="full">
        {/* Background Video */}
        <div className="background absolute inset-0 overflow-hidden" style={{ backgroundColor: '#f73b20' }}>
          <video className="_video-asset h-full w-full object-cover"
                 src="https://jetonbucket.fra1.cdn.digitaloceanspaces.com/jeton/2024-08-12T14-00-29.886Z-jeton-jetoncard-fhd.mp4"
                 type="video/mp4"
                 width="3840" height="2160"
                 loop muted playsInline
                 preload="metadata"
                 data-media="video">
          </video>
        </div>

        {/* Hero Content */}
        <div className="g-row main-row color-white relative">
          {/* Heading */}
          <div className="g-col xxl-8 md-9 sm-12 xs-16 hero-heading-col">
            <h1 className="title-2 -medium">Ready to use<br />right away</h1>
          </div>

          {/* Subtitle + CTA Button */}
          <div className="g-col xxl-4 xxl-offset-3 md-6 md-offset-1 sm-8 sm-offset-0 xs-16 hero-subtitle-col">
            <p className="subhead-2 -medium">No hidden fees, no surprises.</p>
            <div className="flex flex-wrap gap-24 mt-32">
              <a href="https://portal.jeton.com/signup" target="_blank" className="_button no-tap-highlight" data-button data-label="true" data-tone="neutral" data-variant="primary">
                <div data-button-background></div>
                <span className="label relative body -book">
                  <span data-split-text className="whitespace-nowrap"><span className="c">G</span><span className="c">e</span><span className="c">t</span><span className="c -space"> </span><span className="c">i</span><span className="c">B</span><span className="c">n</span><span className="c">k</span><span className="c -space"> </span><span className="c">C</span><span className="c">a</span><span className="c">r</span><span className="c">d</span></span>
                  <span data-split-text className="clone whitespace-nowrap" aria-hidden="true"><span className="c">G</span><span className="c">e</span><span className="c">t</span><span className="c -space"> </span><span className="c">i</span><span className="c">B</span><span className="c">n</span><span className="c">k</span><span className="c -space"> </span><span className="c">C</span><span className="c">a</span><span className="c">r</span><span className="c">d</span></span>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Hint */}
        <button className="_scroll-hint caption">
          <div className="hint-inner">
            <span className="_coin-drop">
              <span></span><span></span><span></span><span></span><span></span><span></span>
            </span>
            <span>Scroll</span>
          </div>
        </button>
      </header>

      {/* ===== JETON CARD HERO INTRODUCTION (Rive scroll-driven) ===== */}
      <section className="_jeton-card-hero-introduction text-center color-white" id="card-hero-intro" ref={sectionRef}>
        {/* Title */}
        <div className="intro-title">
          <h2 className="title-3 -medium">Access your money<br />anywhere, hassle-free</h2>
        </div>

        {/* Animation scroll zone */}
        <div className="intro-main" id="anim-zone">
          <div className="animation-container">
            <canvas id="rive-card-canvas" className="rive-canvas" width="3999" height="1998" ref={canvasRef}></canvas>
            <div className="intro-closing">
              <h3 className="title-3 -medium">Pay on-the-go</h3>
              <p className="subhead-2 -medium mt-24-16" style={{ opacity: 0.85 }}>Simply add iBnk Card to Apple or Google Wallet for quick<br className="hide-mobile" /> and convenient access whenever you need it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== UNIQUELY YOURS — Parallax Feature Showcase ===== */}
      <section className="_parallax-feature-showcase" id="uniquely-yours">
        {/* Sticky center content */}
        <div className="showcase-center">
          <h2 className="title-3 -medium color-orange">Uniquely Yours</h2>
          <div className="flex gap-8">
            <a href="https://portal.jeton.com/signup" target="_blank" className="_button no-tap-highlight" data-button data-label="true" data-tone="orange" data-variant="primary">
              <div data-button-background></div>
              <span className="label relative body -book">
                <span data-split-text className="whitespace-nowrap"><span className="c">G</span><span className="c">e</span><span className="c">t</span><span className="c -space"> </span><span className="c">i</span><span className="c">B</span><span className="c">n</span><span className="c">k</span><span className="c -space"> </span><span className="c">C</span><span className="c">a</span><span className="c">r</span><span className="c">d</span></span>
                <span data-split-text className="clone whitespace-nowrap" aria-hidden="true"><span className="c">G</span><span className="c">e</span><span className="c">t</span><span className="c -space"> </span><span className="c">i</span><span className="c">B</span><span className="c">n</span><span className="c">k</span><span className="c -space"> </span><span className="c">C</span><span className="c">a</span><span className="c">r</span><span className="c">d</span></span>
              </span>
            </a>
          </div>
        </div>

        {/* Scrolling card list */}
        <ul className="showcase-cards">
          {/* Card 1: Total control (right) */}
          <li className="v-0">
            <div className="_media-card color-orange">
              <div className="media">
                <img src="/card-feature-1.jpg" width="1428" height="1440" alt="iBnk mobile app" loading="lazy" />
              </div>
              <div className="media-card-text">
                <p className="subhead-2 -medium">Total control over your card</p>
                <p className="body -book opacity-65">Freeze, unfreeze both your physical and virtual cards anytime. Your transactions are safe and under your control.</p>
              </div>
            </div>
          </li>

          {/* Card 2: Tap in (left) */}
          <li className="v-1">
            <div className="_media-card color-orange">
              <div className="media">
                <img src="/card-feature-2.jpg" width="1428" height="1440" alt="contactless card payment" loading="lazy" />
              </div>
              <div className="media-card-text">
                <p className="subhead-2 -medium">Tap in on easier and faster payments</p>
                <p className="body -book opacity-65">Make contactless payments with your iBnk Card for faster checkouts!</p>
              </div>
            </div>
          </li>

          {/* Card 3: Spending (right) */}
          <li className="v-2">
            <div className="_media-card color-orange">
              <div className="media">
                <img src="/card-feature-3.png" width="1071" height="1080" alt="iBnk mobile app" loading="lazy" />
              </div>
              <div className="media-card-text">
                <p className="subhead-2 -medium">Keep your spending in check</p>
                <p className="body -book opacity-65">Easily manage your expenses by setting and following spending limits.</p>
              </div>
            </div>
          </li>

          {/* Card 4: International (left) */}
          <li className="v-3">
            <div className="_media-card color-orange">
              <div className="media">
                <img src="/card-feature-4.jpg" width="1428" height="1440" alt="iBnk mobile app" loading="lazy" />
              </div>
              <div className="media-card-text">
                <p className="subhead-2 -medium">Expand your international reach</p>
                <p className="body -book opacity-65">With worldwide acceptance either at online shops or in-store payments, iBnk Card supports VISA, Mastercard and UnionPay, opening doors to faster transactions.</p>
              </div>
            </div>
          </li>
        </ul>
      </section>

      {/* ===== JETON CARD FEATURES (text + video) ===== */}
      <section className="_jeton-card-features">
        <div className="g-row color-orange">
          <div className="g-col xxl-7 xxl-offset-1 md-8 sm-10 xs-16 xs-offset-0 flex flex-col">
            <span className="_tag relative body-small inline-block" data-tone="orange">
              <div className="outline absolute inset-0"></div>
              iBnk Card
            </span>
            <h2 className="title-3 -medium mt-16">iBnk Card, all your spendings under control.</h2>
            <p className="subhead-2 -medium mt-32-24">Safely shop online, buy in stores, or tap into the power of virtual cards with iBnk. Freeze and unfreeze your card anytime within the iBnk app, and enjoy better payments today.</p>
          </div>
        </div>
        <div className="media-container w-full">
          <video className="_video-asset w-full"
                 src="https://jetonbucket.fra1.cdn.digitaloceanspaces.com/jeton/2024-08-07T15-39-49.268Z-jeton-3dshop-hd.mp4#t=0.01"
                 type="video/mp4"
                 width="3840" height="2160"
                 loop muted playsInline
                 preload="metadata"
                 data-media="video">
          </video>
        </div>
      </section>

      {/* ===== IMAGE BUNDLE SHOWCASE ("In Stores or Online") ===== */}
      <section className="_image-bundle-showcase" id="image-bundle" ref={bundleRef}>
        <ul className="absolute inset-0">
          <li>
            <div className="parallax" data-speed="0.12">
              <div className="position">
                <img src="/bundle-1.png" width="2334" height="1557" alt="Paying at store" loading="lazy" />
              </div>
            </div>
          </li>
          <li>
            <div className="parallax" data-speed="0.08">
              <div className="position">
                <img src="/bundle-2.png" width="1800" height="1200" alt="Working on laptop" loading="lazy" />
              </div>
            </div>
          </li>
          <li>
            <div className="parallax" data-speed="0.15">
              <div className="position">
                <img src="/bundle-3.png" width="1434" height="954" alt="Using smartphone" loading="lazy" />
              </div>
            </div>
          </li>
          <li>
            <div className="parallax" data-speed="0.1">
              <div className="position">
                <img src="/bundle-4.png" width="1131" height="1518" alt="Buying shirt" loading="lazy" />
              </div>
            </div>
          </li>
          <li>
            <div className="parallax" data-speed="0.06">
              <div className="position">
                <img src="/bundle-5.png" width="1005" height="1479" alt="Contactless payment" loading="lazy" />
              </div>
            </div>
          </li>
        </ul>
        {/* Center text overlay */}
        <div className="bundle-center relative g-row-full h-full flex flex-col place-center color-orange" style={{ gap: '8px' }}>
          <h2 className="title-3 -medium">In Stores or Online</h2>
          <p className="subhead-2 -medium">iBnk Card has you covered.</p>
        </div>
      </section>

      {/* ===== JETON CARD WALLETS ===== */}
      <section className="_jeton-card-wallets mt-186-64 mb-60">
        <div className="g-row">
          <div className="g-col xxl-9 md-12 sm-14 xs-16 flex flex-col gap-16">
            <span className="_tag relative body-small inline-block" data-tone="orange">
              <div className="outline absolute inset-0"></div>
              Wallets
            </span>
            <h2 className="title-3 -medium">Pay on-the-go</h2>
          </div>
        </div>
        <div className="g-row">
          <p className="g-col xxl-6 md-8 sm-10 xs-16 subhead-2 -medium mt-32">Make contactless payments in stores with iBnk Card. Easily link your card with your digital wallet. Tap, pay and speed through checkouts!</p>
        </div>
        <div className="w-full mt-96-32 overflow-hidden">
          <img src="/wallets-hero.jpg" width="4000" height="2495" alt="Contactless payment" style={{ width: '100%', height: 'auto', display: 'block' }} loading="lazy" />
        </div>
        <article className="g-row mt-64-24">
          <div className="g-col xxl-7 md-8 sm-10 xs-16">
            <h3 className="title-5 -medium">Faster, smoother payments: iBnk Card integrates Apple Pay and Google Pay</h3>
            <div className="wallet-logotypes mt-32-24 flex gap-44 items-center">
              {/* Apple Pay */}
              <svg width="56" height="24" viewBox="0 0 56 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.6218 4.49023C10.0378 5.19775 9.04956 5.72559 8.26343 5.72559C8.17358 5.72559 8.08374 5.71436 8.02759 5.70312C8.01636 5.6582 7.9939 5.52344 7.9939 5.38867C7.9939 4.49023 8.45435 3.5918 8.94849 3.03027C9.57739 2.28906 10.6331 1.73877 11.509 1.70508C11.5315 1.80615 11.5427 1.92969 11.5427 2.05322C11.5427 2.95166 11.1609 3.83887 10.6218 4.49023ZM11.2395 5.9165C11.7336 5.9165 13.5193 5.96143 14.6873 7.646C14.5862 7.72461 12.8118 8.72412 12.8118 10.959C12.8118 13.542 15.0691 14.4629 15.1365 14.4854C15.1252 14.5415 14.7771 15.7319 13.946 16.9561C13.2048 18.0229 12.4187 19.1011 11.2395 19.1011C10.0491 19.1011 9.74585 18.4048 8.38696 18.4048C7.05054 18.4048 6.57886 19.1235 5.50073 19.1235C4.41138 19.1235 3.65894 18.124 2.79419 16.9111C1.78345 15.4736 0.974854 13.25 0.974854 11.1387C0.974854 7.7583 3.17603 5.96143 5.34351 5.96143C6.48901 5.96143 7.4436 6.71387 8.17358 6.71387C8.85864 6.71387 9.92554 5.9165 11.2395 5.9165Z" fill="#F73B20" />
                <path d="M16.6985 19V2.79443H23.1672C26.4578 2.79443 28.6814 4.96191 28.6814 8.20752V8.22998C28.6814 11.4644 26.4578 13.6431 23.1672 13.6431H19.5959V19H16.6985ZM22.4597 5.16406H19.5959V11.3071H22.4597C24.5374 11.3071 25.7502 10.1841 25.7502 8.24121V8.21875C25.7502 6.27588 24.5374 5.16406 22.4597 5.16406Z" fill="#F73B20" />
                <path d="M33.2644 19.2021C30.9285 19.2021 29.2327 17.7646 29.2327 15.5298V15.5073C29.2327 13.3174 30.906 12.0371 33.8933 11.8574L37.0491 11.6665V10.6108C37.0491 9.38672 36.2517 8.71289 34.7468 8.71289C33.4666 8.71289 32.6355 9.17334 32.3547 9.98193L32.3435 10.0269H29.7043L29.7156 9.92578C29.9851 7.85938 31.9617 6.48926 34.8816 6.48926C38.0374 6.48926 39.8118 8.0166 39.8118 10.6108V19H37.0491V17.3154H36.8582C36.1843 18.5059 34.8816 19.2021 33.2644 19.2021ZM31.9954 15.395C31.9954 16.4395 32.8826 17.0571 34.1179 17.0571C35.8025 17.0571 37.0491 15.9565 37.0491 14.4966V13.5083L34.2864 13.688C32.7253 13.7891 31.9954 14.3618 31.9954 15.3726V15.395Z" fill="#F73B20" />
                <path d="M42.8787 23.3125C42.5417 23.3125 42.1487 23.3013 41.8118 23.2676V21.1226C42.0364 21.145 42.3508 21.1562 42.6428 21.1562C43.7883 21.1562 44.4734 20.6846 44.7766 19.5728L44.9226 19.0112L40.5315 6.7251H43.5862L46.45 16.3159H46.6633L49.5159 6.7251H52.4583L48.0559 19.2583C47.0002 22.3354 45.5964 23.3125 42.8787 23.3125Z" fill="#F73B20" />
              </svg>
              {/* Google Pay */}
              <svg width="62" height="24" viewBox="0 0 62 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.743 11.6726V18.7486H26.4822V1.2749H32.4757C33.9947 1.2749 35.2899 1.77783 36.3497 2.78368C37.433 3.78952 37.9746 5.01759 37.9746 6.46788C37.9746 7.95326 37.433 9.18133 36.3497 10.1755C35.3017 11.1696 34.0064 11.6609 32.4757 11.6609H28.743V11.6726ZM28.743 3.42695V9.52051H32.5228C33.4177 9.52051 34.1713 9.21642 34.7601 8.61993C35.3606 8.02343 35.6667 7.29829 35.6667 6.47957C35.6667 5.67256 35.3606 4.95911 34.7601 4.36262C34.1713 3.74274 33.4295 3.43864 32.5228 3.43864H28.743V3.42695Z" fill="#F73B20" />
                <path d="M43.8857 6.39746C45.5578 6.39746 46.8766 6.8419 47.8422 7.73079C48.8077 8.61968 49.2905 9.83606 49.2905 11.3799V18.7483H47.1356V17.0875H47.0415C46.1112 18.4559 44.8631 19.1343 43.3087 19.1343C41.9782 19.1343 40.8713 18.7483 39.9764 17.9647C39.0815 17.1811 38.634 16.2103 38.634 15.0407C38.634 13.801 39.105 12.8185 40.047 12.0934C40.9891 11.3565 42.249 10.9939 43.8151 10.9939C45.1574 10.9939 46.2643 11.2396 47.1239 11.7308V11.2162C47.1239 10.4325 46.8177 9.77757 46.1936 9.22787C45.5696 8.67816 44.8395 8.40915 44.0035 8.40915C42.7435 8.40915 41.7427 8.93547 41.0126 9.9998L39.0226 8.76003C40.1177 7.18108 41.7427 6.39746 43.8857 6.39746ZM40.9655 15.0758C40.9655 15.6606 41.2128 16.1518 41.7191 16.5378C42.2137 16.9238 42.8024 17.1226 43.4736 17.1226C44.4274 17.1226 45.2752 16.7717 46.017 16.07C46.7588 15.3682 47.1356 14.5495 47.1356 13.6021C46.4291 13.0524 45.4518 12.7717 44.1919 12.7717C43.2734 12.7717 42.508 12.9939 41.8957 13.4267C41.2717 13.8828 40.9655 14.4325 40.9655 15.0758Z" fill="#F73B20" />
                <path d="M61.5837 6.78369L54.0476 24.0001H51.7162L54.5186 17.9767L49.5496 6.78369H52.0106L55.5902 15.3685H55.6373L59.1227 6.78369H61.5837Z" fill="#F73B20" />
                <path d="M19.7504 10.2456C19.7504 9.51343 19.6845 8.81284 19.562 8.13916H10.0854V11.9988L15.5432 12C15.3218 13.2842 14.6094 14.3789 13.5179 15.1087V17.6128H16.7666C18.6636 15.869 19.7504 13.2912 19.7504 10.2456Z" fill="#F73B20" />
                <path d="M13.519 15.1085C12.6147 15.7144 11.4501 16.0688 10.0877 16.0688C7.45602 16.0688 5.22347 14.3074 4.42394 11.9331H1.07275V14.5156C2.73304 17.7881 6.14545 20.0337 10.0877 20.0337C12.8125 20.0337 15.1016 19.1436 16.7677 17.6115L13.519 15.1085Z" fill="#F73B20" />
                <path d="M4.10832 10.0175C4.10832 9.35081 4.22018 8.70637 4.42389 8.10052V5.51807H1.07271C0.386221 6.87128 0 8.39877 0 10.0175C0 11.6362 0.387398 13.1637 1.07271 14.5169L4.42389 11.9344C4.22018 11.3286 4.10832 10.6841 4.10832 10.0175Z" fill="#F73B20" />
                <path d="M10.0877 3.96491C11.5749 3.96491 12.9067 4.47368 13.9582 5.46783L16.8372 2.61052C15.0886 0.992982 12.809 0 10.0877 0C6.14663 0 2.73304 2.24561 1.07275 5.51812L4.42394 8.10058C5.22347 5.72631 7.45602 3.96491 10.0877 3.96491Z" fill="#F73B20" />
              </svg>
            </div>
          </div>
          <div className="g-col xxl-6 xxl-offset-2 md-offset-1 md-7 sm-10 sm-offset-0 xs-16">
            <div className="text-block body -book mb-32">
              <p>By integrating with Apple Pay and Google Pay, iBnk users can now enjoy a quicker and more straightforward payment process. With just a few taps on their smartphones, users can make payments at a wide range of online and offline merchants, eliminating the need for cash or card transactions.</p>
              <p>Experience a seamless checkout process with a single tap. Save time and effort as your iBnk card details are conveniently filled in for you during checkout.</p>
            </div>
            <a href="https://portal.jeton.com/login" target="_blank" className="_button no-tap-highlight" data-button data-label="true" data-tone="orange" data-variant="secondary">
              <div data-button-background></div>
              <span className="label relative body -book">
                <span data-split-text className="whitespace-nowrap"><span className="c">G</span><span className="c">e</span><span className="c">t</span><span className="c -space"> </span><span className="c">i</span><span className="c">B</span><span className="c">n</span><span className="c">k</span><span className="c -space"> </span><span className="c">C</span><span className="c">a</span><span className="c">r</span><span className="c">d</span></span>
                <span data-split-text className="clone whitespace-nowrap" aria-hidden="true"><span className="c">G</span><span className="c">e</span><span className="c">t</span><span className="c -space"> </span><span className="c">i</span><span className="c">B</span><span className="c">n</span><span className="c">k</span><span className="c -space"> </span><span className="c">C</span><span className="c">a</span><span className="c">r</span><span className="c">d</span></span>
              </span>
            </a>
            <div className="mt-120-96 overflow-hidden">
              <img src="/wallets-door.jpg" width="2712" height="1696" alt="Contactless payment at door" style={{ width: '100%', height: 'auto', display: 'block' }} loading="lazy" />
            </div>
          </div>
        </article>
      </section>

      {/* ===== TABBED ACCORDION LIST ===== */}
      <section className="_tabbed-accordion-list mt-120-96 mb-144-48">
        <div className="g-row mb-48-32">
          <div className="g-col xxl-7 xxl-offset-9 md-8 md-offset-8 sm-9 sm-offset-7 xs-12 xs-offset-4">
            <h2 className="title-5 -medium">Paying made effortless with the devices you carry daily</h2>
          </div>
        </div>
        <article>
          <div className="_accordion g-table subhead-1 -medium relative" data-motion="true">
            <button className="w-full" aria-expanded="false">
              <div className="flex gap-grid-gap items-center">
                <div className="icon-container">
                  <span className="_icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 4V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" transformOrigin="12 12"></path>
                      <path d="M20 12L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" transformOrigin="12 12"></path>
                      <path d="M20 12L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" transformOrigin="12 12"></path>
                    </svg>
                  </span>
                </div>
                <span>Smart Phone</span>
              </div>
            </button>
            <div className="accordion-content">
              <span className="subhead-2">iPhone:</span>
              <div className="text body -book">
                <p>Open Apple Wallet on your iPhone, then tap the plus sign (+) to get started.</p>
              </div>
              <span className="subhead-2">Smartphone:</span>
              <div className="text body -book">
                <p>Open Google Pay on your smartphone, then tap the profile picture or account at the top right. Select &quot;Payment methods&quot; and tap &quot;Add payment method.&quot; Follow the instructions to add a credit or debit card.</p>
              </div>
            </div>
          </div>
          <div className="_accordion g-table subhead-1 -medium relative" data-motion="true">
            <button className="w-full" aria-expanded="false">
              <div className="flex gap-grid-gap items-center">
                <div className="icon-container">
                  <span className="_icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 4V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" transformOrigin="12 12"></path>
                      <path d="M20 12L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" transformOrigin="12 12"></path>
                      <path d="M20 12L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" transformOrigin="12 12"></path>
                    </svg>
                  </span>
                </div>
                <span>Smart Watch</span>
              </div>
            </button>
            <div className="accordion-content">
              <span className="subhead-2">Apple Watch:</span>
              <div className="text body -book">
                <p>Open Apple Wallet on your Apple Watch, then tap Add Card to get started.</p>
              </div>
              <span className="subhead-2">Watch:</span>
              <div className="text body -book">
                <p>On your watch, open the Google Pay app, then tap Get started. If you haven&apos;t already, set up a screen lock. Meanwhile, on your phone, follow the instructions to add a credit or debit card.</p>
              </div>
            </div>
          </div>
          <div className="_accordion g-table subhead-1 -medium relative" data-motion="true">
            <button className="w-full" aria-expanded="false">
              <div className="flex gap-grid-gap items-center">
                <div className="icon-container">
                  <span className="_icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 4V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" transformOrigin="12 12"></path>
                      <path d="M20 12L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" transformOrigin="12 12"></path>
                      <path d="M20 12L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" transformOrigin="12 12"></path>
                    </svg>
                  </span>
                </div>
                <span>Tablet / Computer</span>
              </div>
            </button>
            <div className="accordion-content">
              <span className="subhead-2">iPad/Macbook:</span>
              <div className="text body -book">
                <p>On your iPad or Mac, open System Preferences and select Wallet & Apple Pay to get started.</p>
              </div>
              <span className="subhead-2">Tablet/Computer:</span>
              <div className="text body -book">
                <p>On the website, click the &quot;Payment methods&quot; tab, then click &quot;Add payment method&quot; to enter a payment method. Select your desired option and fill out the necessary information. Click the Save button and then select Done.</p>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  )
}
