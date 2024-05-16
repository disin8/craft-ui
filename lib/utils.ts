import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { format } from 'date-fns'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function numberFormatter(value: number) {
  const formatter = Intl.NumberFormat('en', { notation: 'compact' })
  return formatter.format(value)
}

export function formatDate(date: Date) {
  return format(date, 'LLL dd, y')
}

export const origin
   = typeof window !== 'undefined' && window.location.origin
     ? window.location.origin
     : ''
