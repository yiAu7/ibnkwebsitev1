'use client'
import { Children, useEffect, useState } from 'react'

export const Card = ({ children, className = '', ...rest }) => (
  <div className={`cardswap-card ${className}`} {...rest}>
    {children}
  </div>
)

export default function CardSwap({
  children,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
}) {
  const cards = Children.toArray(children)
  const count = cards.length
  const [front, setFront] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (count <= 1 || paused) return
    const id = setInterval(() => setFront((f) => (f + 1) % count), delay)
    return () => clearInterval(id)
  }, [count, delay, paused])

  return (
    <div
      className="cardswap-container"
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
    >
      {cards.map((card, i) => {
        const depth = (i - front + count) % count
        const isFront = depth === 0
        return (
          <div
            key={i}
            className={`cardswap-slot${isFront ? ' is-front' : ''}`}
            style={{
              transform: `translate(${depth * cardDistance}px, ${depth * verticalDistance}px) scale(${1 - depth * 0.05})`,
              zIndex: count - depth,
              opacity: depth >= count - 1 && count > 2 ? 0.55 : 1,
              pointerEvents: isFront ? 'auto' : 'none',
            }}
          >
            {card}
          </div>
        )
      })}
    </div>
  )
}
