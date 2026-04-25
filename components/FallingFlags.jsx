'use client'
import { useEffect, useRef, useState } from 'react'

// Base flag set — iBnk's main payment corridors
const BASE_FLAGS = [
  'us', 'cn', 'gb', 'au', 'ca', 'jp',
  'sg', 'hk', 'kr', 'in', 'eu', 'mx',
  'br', 'ae', 'de', 'fr', 'ph', 'id',
  'th', 'vn', 'my', 'za', 'ng', 'tr',
  'se', 'no', 'dk', 'ch', 'it', 'es',
  'ar', 'cl', 'co', 'pl', 'nl', 'il',
]

export default function FallingFlags({ multiplier = 1 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [items, setItems] = useState([])

  // Generate genuinely random layout on client mount (Math.random stays client-only to avoid SSR hydration mismatch)
  useEffect(() => {
    const out = []
    for (let m = 0; m < multiplier; m++) {
      for (const code of BASE_FLAGS) {
        const size = 50 + Math.random() * 44 // 50..94px
        // After landing, roll horizontally to a natural settled position
        const rollPx = (Math.random() - 0.5) * 130 // -65..65 px roll distance
        // Rotation proportional to roll distance (rolls like a ball: dist / (π × diameter) × 360°)
        const rollRot = (rollPx / (Math.PI * size)) * 360
        out.push({
          code,
          x: Math.random() * 98,
          depth: Math.pow(Math.random(), 1.7) * 220, // pile clusters near floor
          rotate: (Math.random() - 0.5) * 120,       // -60..60 final tilt
          spin: (Math.random() - 0.5) * 1080,        // -540..540 tumble during fall
          size,
          rollPx,
          rollRot,
          delay: Math.random() * 4,                  // 0..4s
          duration: 1.6 + Math.random() * 1.6,       // 1.6..3.2s (slightly longer for smoother fall + roll)
        })
      }
    }
    setItems(out)
  }, [multiplier])

  // Trigger drop when section enters viewport
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.1 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`falling-flags${visible ? ' is-active' : ''}`}
      aria-hidden="true"
    >
      {items.map((item, i) => (
        <img
          key={i}
          src={`https://hatscripts.github.io/circle-flags/flags/${item.code}.svg`}
          alt=""
          className="falling-flag"
          loading="lazy"
          style={{
            left: `${item.x}%`,
            bottom: `${item.depth}px`,
            width: `${item.size}px`,
            height: `${item.size}px`,
            animationDelay: `${item.delay.toFixed(2)}s`,
            animationDuration: `${item.duration.toFixed(2)}s`,
            '--rotate-final': `${item.rotate.toFixed(1)}deg`,
            '--spin': `${item.spin.toFixed(0)}deg`,
            '--roll-x': `${item.rollPx.toFixed(0)}px`,
            '--roll-rot': `${item.rollRot.toFixed(0)}deg`,
          }}
        />
      ))}
    </div>
  )
}
