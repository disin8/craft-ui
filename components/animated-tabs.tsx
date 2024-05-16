'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

const tabs = [
  { id: 'craft', label: 'craft' },
  { id: 'design', label: 'design' },
  { id: 'code', label: 'code' },
  { id: 'docs', label: 'docs' },
]

export function AnimatedTabs() {
  const [focused, setFocused] = useState(tabs[0].id)
  const [activeTab, setActiveTab] = useState(tabs[0].id)

  return (
    <div className="flex space-x-1">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className="relative rounded-md px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2"
          style={{
            WebkitTapHighlightColor: 'transparent',
          }}
          onFocus={() => setFocused(tab.id)}
          onMouseEnter={() => setFocused(tab.id)}
        >
          {focused === tab.id
            && (
              <motion.span
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                className="absolute inset-0 top-0 left-0 w-full h-full bg-[#232323] -z-10 rounded-md"
                layoutId="highlight"
              />
            )}
          {activeTab === tab.id && (
            <motion.span
              layoutId="active"
              className="absolute inset-0 z-10 h-1 left-0 top-8 bg-white rounded-md"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
          {tab.label}
        </button>
      ))}
    </div>
  )
}
