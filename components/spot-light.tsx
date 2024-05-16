'use client'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import type { CSSProperties, MouseEvent } from 'react'

interface SpotLightProps {
  size?: string
  color?: string
  transparent?: string
  children?: React.ReactNode
}

export function SpotLight({ children, size = '330px', color = '#7AA2E333', transparent = '60%' }: SpotLightProps) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()

    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      className="group relative max-w-md rounded-xl border border-white/10 bg-gray-900 shadow-2xl"
      onMouseMove={handleMouseMove}
      style={
        {
          '--size': size,
          '--color': color,
          '--transparent': transparent,
        } as CSSProperties
      }
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              var(--size) circle at ${mouseX}px ${mouseY}px,
              var(--color),
              transparent var(--transparent)
            )
          `,
        }}
      />
      {children}
    </div>
  )
}
