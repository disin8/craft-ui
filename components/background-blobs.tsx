'use client'
import { useEffect, useState } from 'react'

function generateInitialPoints() {
  return Array.from({ length: 16 }).fill(0).map(() => [Math.random(), Math.random()])
}

export function BackgroundBlobs({ color = 'red', delay = 2000 }: { color?: string, delay?: number }) {
  const [points, setPoints] = useState(() =>
    generateInitialPoints(),
  )
  const poly = points.map(([x, y]) => `${x * 100}% ${y * 100}%`).join(', ')

  const jumpVal = (val: number) => {
    const random = Math.random()
    return random > 0.5
      ? val + (random - 0.5) / 2
      : random
  }

  const jumpPoints = () => {
    setPoints(prevPoints => prevPoints.map(([x, y]) => [jumpVal(x), jumpVal(y)]))
  }

  useEffect(() => {
    const intervalId = setInterval(jumpPoints, Math.random() * 1000 + delay)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div
      style={
        {
          '--color': color,
        } as React.CSSProperties
      }
      className="blobsbg absolute inset-0 transform-gpu blur-3xl overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="aspect-[1.7] w-full h-full bg-gradient-to-r from-[var(--color)] to-white/10 lg:opacity-50"
        style={{ clipPath: `polygon(${poly})` }}
      />
    </div>
  )
}
