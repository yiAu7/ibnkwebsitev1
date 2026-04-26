'use client'
import { useEffect, useRef } from 'react'

/**
 * GridMotion — 4 rows × 7 columns, rotated -15°, auto-loops horizontally.
 * Adapted for Next.js App Router. Vanilla JS (no GSAP) with lerp-based inertia.
 * Class names prefixed `gm-` to avoid global collisions.
 */
const INERTIA = [0.085, 0.065, 0.05, 0.038] // lower = more lag
const SPEEDS = [0.18, 0.14, 0.22, 0.16]      // per-row sine frequency
const PHASES = [0, 1.3, 0.6, 2.1]            // per-row phase offset for variety

export default function GridMotion({ items = [], gradientColor = 'transparent' }) {
  const gridRef = useRef(null)
  const rowRefs = useRef([])

  const totalItems = 28
  const defaultItems = Array.from({ length: totalItems }, () => '')
  const combinedItems = items.length > 0 ? items.slice(0, totalItems) : defaultItems

  useEffect(() => {
    const targets = rowRefs.current.map(() => 0)
    const current = rowRefs.current.map(() => 0)

    const maxMove = 300
    const start = performance.now()
    let raf = 0
    const tick = () => {
      const t = (performance.now() - start) / 1000
      rowRefs.current.forEach((row, i) => {
        if (!row) return
        const dir = i % 2 === 0 ? 1 : -1
        const phase = (Math.sin(t * SPEEDS[i % SPEEDS.length] + PHASES[i % PHASES.length]) + 1) / 2
        targets[i] = (phase * maxMove - maxMove / 2) * dir
        current[i] += (targets[i] - current[i]) * INERTIA[i % INERTIA.length]
        row.style.transform = `translate3d(${current[i]}px, 0, 0)`
      })
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div className="gm-noscroll" ref={gridRef}>
      <section
        className="gm-intro"
        style={{ background: `radial-gradient(circle, ${gradientColor} 0%, transparent 100%)` }}
      >
        <div className="gm-grid">
          {[...Array(4)].map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="gm-row"
              ref={(el) => (rowRefs.current[rowIndex] = el)}
            >
              {[...Array(7)].map((_, itemIndex) => {
                const content = combinedItems[rowIndex * 7 + itemIndex]
                return (
                  <div key={itemIndex} className="gm-item">
                    <div className="gm-item-inner">
                      {typeof content === 'string' && content.startsWith('http') ? (
                        <div
                          className="gm-item-img"
                          style={{ backgroundImage: `url(${content})` }}
                        />
                      ) : content ? (
                        <div className="gm-item-content">{content}</div>
                      ) : null}
                    </div>
                  </div>
                )
              })}
            </div>
          ))}
        </div>
        <div className="gm-fullview" />
      </section>
    </div>
  )
}
