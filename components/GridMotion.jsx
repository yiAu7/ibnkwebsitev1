'use client'
import { useEffect, useRef } from 'react'

/**
 * GridMotion — 4 rows × 7 columns, rotated -15°, drifts horizontally with mouse.
 * Adapted for Next.js App Router. Vanilla JS (no GSAP) with lerp-based inertia.
 * Class names prefixed `gm-` to avoid global collisions.
 */
const INERTIA = [0.085, 0.065, 0.05, 0.038] // lower = more lag

export default function GridMotion({ items = [], gradientColor = 'transparent' }) {
  const gridRef = useRef(null)
  const rowRefs = useRef([])

  const totalItems = 28
  const defaultItems = Array.from({ length: totalItems }, () => '')
  const combinedItems = items.length > 0 ? items.slice(0, totalItems) : defaultItems

  useEffect(() => {
    let mouseX = window.innerWidth / 2
    const targets = rowRefs.current.map(() => 0)
    const current = rowRefs.current.map(() => 0)

    const onMouseMove = (e) => { mouseX = e.clientX }
    window.addEventListener('mousemove', onMouseMove)

    const maxMove = 300
    let raf = 0
    const tick = () => {
      rowRefs.current.forEach((row, i) => {
        if (!row) return
        const dir = i % 2 === 0 ? 1 : -1
        targets[i] = ((mouseX / window.innerWidth) * maxMove - maxMove / 2) * dir
        current[i] += (targets[i] - current[i]) * INERTIA[i % INERTIA.length]
        row.style.transform = `translate3d(${current[i]}px, 0, 0)`
      })
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMouseMove)
    }
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
