'use client'
import { useEffect, useRef } from 'react'

// 36 country flags (cycled through — each ball gets one as a texture)
const FLAGS = [
  'us', 'cn', 'gb', 'au', 'ca', 'jp', 'sg', 'hk', 'kr', 'in',
  'eu', 'mx', 'br', 'ae', 'de', 'fr', 'ph', 'id', 'th', 'vn',
  'my', 'za', 'ng', 'tr', 'se', 'no', 'dk', 'ch', 'it', 'es',
  'ar', 'cl', 'co', 'pl', 'nl', 'il',
]

/**
 * DOM-based ball pit — each ball is a circular national flag (circle-flags SVG).
 * Physics: gravity + friction + wall bounce + sphere–sphere elastic collisions.
 * API mirrors reactbits' Ballpit for drop-in usage.
 */
export default function Ballpit({
  count = 100,
  gravity = 0.01,
  friction = 0.9975,
  wallBounce = 0.95,
  followCursor = false,
  minRadius = 20,
  maxRadius = 42,
}) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let w = container.offsetWidth
    let h = container.offsetHeight
    let cleanup = () => {}
    let started = false

    // Wait for the section to scroll into view before dropping balls.
    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting && !started) {
          started = true
          io.disconnect()
          ensureSizedAndStart()
          break
        }
      }
    }, { threshold: 0.25 })
    io.observe(container)

    return () => {
      io.disconnect()
      cleanup()
    }

    function ensureSizedAndStart() {
      w = container.offsetWidth
      h = container.offsetHeight
      if (w === 0 || h === 0) {
        const ro = new ResizeObserver(() => {
          w = container.offsetWidth
          h = container.offsetHeight
          if (w > 0 && h > 0) {
            ro.disconnect()
            start()
          }
        })
        ro.observe(container)
        const prev = cleanup
        cleanup = () => { ro.disconnect(); prev() }
        return
      }
      start()
    }

    function start() {
      const balls = []
      const createdImgs = []
      // Poisson-ish initial drop: random x, staggered y from top so they fall in
      for (let i = 0; i < count; i++) {
        const radius = minRadius + Math.random() * (maxRadius - minRadius)
        const img = document.createElement('img')
        img.src = `https://hatscripts.github.io/circle-flags/flags/${FLAGS[i % FLAGS.length]}.svg`
        img.alt = ''
        img.draggable = false
        img.style.cssText = [
          'position:absolute',
          'top:0', 'left:0',
          `width:${radius * 2}px`,
          `height:${radius * 2}px`,
          'pointer-events:none',
          'user-select:none',
          'will-change:transform',
          'filter:drop-shadow(0 6px 16px rgba(0,0,0,0.18))',
          'border-radius:50%',
        ].join(';')
        container.appendChild(img)
        createdImgs.push(img)

        balls.push({
          img,
          r: radius,
          x: radius + Math.random() * Math.max(1, w - radius * 2),
          // Start above visible area so they drop in
          y: -radius - Math.random() * h * 0.6,
          vx: (Math.random() - 0.5) * 3,
          vy: Math.random() * 0.5,
        })
      }

      const mouse = { x: w / 2, y: h / 2, active: false }
      const onMouseMove = (e) => {
        const rect = container.getBoundingClientRect()
        mouse.x = e.clientX - rect.left
        mouse.y = e.clientY - rect.top
        mouse.active = true
      }
      const onMouseLeave = () => { mouse.active = false }
      if (followCursor) {
        container.addEventListener('mousemove', onMouseMove)
        container.addEventListener('mouseleave', onMouseLeave)
      }

      const onResize = () => {
        w = container.offsetWidth
        h = container.offsetHeight
      }
      window.addEventListener('resize', onResize)

      // Scale gravity to a reasonable pixel-based acceleration
      const G = gravity * 60

      let raf = 0
      let settledFrames = 0
      const tick = () => {
        let totalKE = 0
        // Integrate
        for (const b of balls) {
          // Don't add gravity if ball is resting on floor with zero vertical velocity
          // (prevents perpetual "fall + clamp" cycle that spawns micro-motion)
          const atFloor = b.y + b.r >= h - 0.5
          if (!(atFloor && b.vy === 0)) b.vy += G
          b.vx *= friction
          b.vy *= friction

          // Optional cursor pull
          if (followCursor && mouse.active) {
            const dx = mouse.x - b.x
            const dy = mouse.y - b.y
            const d2 = dx * dx + dy * dy
            if (d2 > 1) {
              const f = 0.00015
              b.vx += dx * f
              b.vy += dy * f
            }
          }

          b.x += b.vx
          b.y += b.vy

          // Walls
          if (b.x - b.r < 0) { b.x = b.r; b.vx *= -wallBounce }
          if (b.x + b.r > w) { b.x = w - b.r; b.vx *= -wallBounce }
          if (b.y + b.r > h) {
            b.y = h - b.r
            b.vy *= -wallBounce
            b.vx *= 0.9 // stronger ground rolling friction
            // Sleep thresholds kill sub-pixel jitter when settled
            if (Math.abs(b.vy) < 0.6) b.vy = 0
            if (Math.abs(b.vx) < 0.15) b.vx = 0
          }
          if (b.y - b.r < -h) {
            b.y = -h + b.r
            b.vy *= -wallBounce
          }
          // Global low-velocity cutoff — eliminates micro-oscillations in stacks
          if (Math.abs(b.vx) < 0.08) b.vx = 0
          if (Math.abs(b.vy) < 0.08) b.vy = 0
          totalKE += b.vx * b.vx + b.vy * b.vy
        }

        // Pairwise collision resolution (O(n²))
        for (let i = 0; i < balls.length; i++) {
          const a = balls[i]
          for (let j = i + 1; j < balls.length; j++) {
            const b = balls[j]
            const dx = b.x - a.x
            const dy = b.y - a.y
            const minD = a.r + b.r
            const d2 = dx * dx + dy * dy
            if (d2 < minD * minD && d2 > 0) {
              const d = Math.sqrt(d2)
              const nx = dx / d
              const ny = dy / d
              const overlap = (minD - d) * 0.5
              a.x -= nx * overlap; a.y -= ny * overlap
              b.x += nx * overlap; b.y += ny * overlap
              // Elastic swap with damping — only when approaching (diff < 0 means b moves toward a)
              const avn = a.vx * nx + a.vy * ny
              const bvn = b.vx * nx + b.vy * ny
              const diff = bvn - avn
              if (diff < -0.01) {
                const damp = wallBounce * 0.78
                a.vx += diff * nx * damp
                a.vy += diff * ny * damp
                b.vx -= diff * nx * damp
                b.vy -= diff * ny * damp
              }
            }
          }
        }

        // Apply transforms
        for (const b of balls) {
          b.img.style.transform = `translate3d(${b.x - b.r}px, ${b.y - b.r}px, 0)`
        }

        // Sleep the entire system when kinetic energy has been negligible for ~30 frames (~0.5s)
        // This guarantees everything truly stops — no CPU cost, no micro-movement.
        if (totalKE < 0.5) {
          settledFrames++
          if (settledFrames > 30) {
            // Hard-stop: zero everything and exit the RAF loop
            for (const b of balls) { b.vx = 0; b.vy = 0 }
            raf = 0
            return
          }
        } else {
          settledFrames = 0
        }

        raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)

      cleanup = () => {
        cancelAnimationFrame(raf)
        window.removeEventListener('resize', onResize)
        if (followCursor) {
          container.removeEventListener('mousemove', onMouseMove)
          container.removeEventListener('mouseleave', onMouseLeave)
        }
        for (const img of createdImgs) img.remove()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div ref={containerRef} style={{ position: 'absolute', inset: 0, overflow: 'hidden' }} aria-hidden="true" />
}
