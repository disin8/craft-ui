'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { cn } from '@/lib/utils'

const links = [
  {
    path: '/components',
    name: 'Components',
  },
]

export function Header() {
  const pathname = usePathname()

  const lastPath = `/${pathname.split('/').pop()}`

  return (
    <ul className="space-x-2 font-medium text-sm mr-8 hidden md:flex">
      {links.map(({ path, name }) => {
        const isActive
          = path === '/updates'
            ? pathname.includes('updates')
            : path === lastPath

        return (
          <li key={path}>
            <Link
              href={path}
              className={cn(
                'items-center justify-center rounded-md text-sm font-medium transition-colors px-3 py-2 inline-flex text-secondary-foreground hover:bg-secondary',
                isActive && 'bg-secondary hover:bg-secondary',
              )}
            >
              {name}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
