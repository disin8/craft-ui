'use client'
import type { MotionValue } from 'framer-motion'
import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import { cn } from '@/lib/utils'

interface ISplitString {
  children: string
  progress: MotionValue<number>
  range: number[]
}

export function TextReveal({ paragraph, byChars, className }: { paragraph: string, className?: string, byChars?: boolean }) {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.9', 'start 0.25'],
  })

  const words = paragraph.split(' ')
  return (
    <p
      ref={container}
      className={cn('relative text-6xl p-10 flex text-black dark:text-white flex-wrap', className)}
    >
      {
        words.map((word, i) => {
          const start = i / words.length
          const end = start + (1 / words.length)
          return <Word key={i} progress={scrollYProgress} range={[start, end]} byChars={byChars}>{word}</Word>
        })
      }
    </p>
  )
}

function Word({ children, progress, range, byChars }: ISplitString & { byChars?: boolean }) {
  const opacity = useTransform(progress, range, [0, 1])
  if (!byChars) {
    return (
      <span className="relative mr-3 mt-3">
        <span className="absolute opacity-20">{children}</span>
        <motion.span style={{ opacity }}>{children}</motion.span>
      </span>
    )
  }

  const amount = range[1] - range[0]
  const step = amount / children.length
  return (
    <span className="relative mr-3 mt-3">
      {
        children.split('').map((char, i) => {
          const start = range[0] + (i * step)
          const end = range[0] + ((i + 1) * step)
          return <Char key={`c_${i}`} progress={progress} range={[start, end]}>{char}</Char>
        })
      }
    </span>
  )
}

function Char({ children, progress, range }: ISplitString) {
  const opacity = useTransform(progress, range, [0, 1])
  return (
    <span>
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  )
}
