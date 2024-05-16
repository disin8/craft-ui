import './global.css'
import { RootProvider } from 'fumadocs-ui/provider'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({
  subsets: ['latin'],
})

export const metadata = {
  title: {
    template: '%s | craft-ui',
    default: 'craft-ui',
  },
  description: 'Stunning landing pages with ui components',
} satisfies Metadata

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="antialiased">
        <RootProvider>{children}</RootProvider>
        <Analytics mode="production" />
      </body>
    </html>
  )
}
