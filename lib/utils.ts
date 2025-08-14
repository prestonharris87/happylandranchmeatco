import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatMoney(amount: string, currencyCode: string = 'USD'): string {
  const numericAmount = parseFloat(amount)
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
    minimumFractionDigits: 2,
  }).format(numericAmount)
}

export function formatMoneyRange(minAmount: string, maxAmount: string, currencyCode: string = 'USD'): string {
  const min = parseFloat(minAmount)
  const max = parseFloat(maxAmount)
  
  if (min === max) {
    return formatMoney(minAmount, currencyCode)
  }
  
  return `${formatMoney(minAmount, currencyCode)} - ${formatMoney(maxAmount, currencyCode)}`
}

export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '')
}

export function capitalizeFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function formatDate(date: string | Date): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(dateObj)
}

export function formatRelativeTime(date: string | Date): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  const now = new Date()
  const diffInSeconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000)
  
  if (diffInSeconds < 60) return 'just now'
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`
  if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)} days ago`
  
  return formatDate(dateObj)
}

export function generateSKU(title: string, variant?: string): string {
  const base = slugify(title).toUpperCase().replace(/-/g, '')
  const variantSuffix = variant ? `-${slugify(variant).toUpperCase().replace(/-/g, '')}` : ''
  return `${base}${variantSuffix}`.slice(0, 20)
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/
  return phoneRegex.test(phone)
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export function randomBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function shuffle<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export function chunk<T>(array: T[], size: number): T[][] {
  const chunks: T[][] = []
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size))
  }
  return chunks
}

export function unique<T>(array: T[]): T[] {
  return Array.from(new Set(array))
}

export function groupBy<T, K extends string | number | symbol>(
  array: T[],
  keyFn: (item: T) => K
): Record<K, T[]> {
  return array.reduce((groups, item) => {
    const key = keyFn(item)
    if (!groups[key]) {
      groups[key] = []
    }
    groups[key].push(item)
    return groups
  }, {} as Record<K, T[]>)
}

export function sortBy<T>(
  array: T[],
  keyFn: (item: T) => string | number,
  direction: 'asc' | 'desc' = 'asc'
): T[] {
  return [...array].sort((a, b) => {
    const aVal = keyFn(a)
    const bVal = keyFn(b)
    
    if (aVal < bVal) return direction === 'asc' ? -1 : 1
    if (aVal > bVal) return direction === 'asc' ? 1 : -1
    return 0
  })
}

export function calculateShipping(subtotal: number): { 
  freeShipping: boolean
  shippingCost: number 
  amountForFreeShipping: number 
} {
  const FREE_SHIPPING_THRESHOLD = 149
  const PERISHABLE_SHIPPING_FEE = 15
  
  const freeShipping = subtotal >= FREE_SHIPPING_THRESHOLD
  const shippingCost = freeShipping ? 0 : PERISHABLE_SHIPPING_FEE
  const amountForFreeShipping = freeShipping ? 0 : FREE_SHIPPING_THRESHOLD - subtotal
  
  return {
    freeShipping,
    shippingCost,
    amountForFreeShipping,
  }
}

export function getNextShippingDate(): string {
  const today = new Date()
  const dayOfWeek = today.getDay() // 0 = Sunday, 1 = Monday, etc.
  
  // Ship on Mondays and Thursdays
  let daysToAdd = 0
  
  if (dayOfWeek === 0 || dayOfWeek === 6) { // Sunday or Saturday
    daysToAdd = dayOfWeek === 0 ? 1 : 2 // Monday
  } else if (dayOfWeek === 1) { // Monday
    daysToAdd = 3 // Thursday
  } else if (dayOfWeek >= 2 && dayOfWeek <= 4) { // Tuesday to Thursday
    daysToAdd = dayOfWeek === 4 ? 4 : 4 - dayOfWeek // Next Monday
  } else if (dayOfWeek === 5) { // Friday
    daysToAdd = 3 // Monday
  }
  
  const nextShipDate = new Date(today)
  nextShipDate.setDate(today.getDate() + daysToAdd)
  
  return formatDate(nextShipDate)
}
