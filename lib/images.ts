// Placeholder image system for development and fallbacks
import { ShopifyImage } from '@/types/shopify'

// Helper function to get image properties from either Shopify or placeholder images
export function getImageProps(shopifyImage: ShopifyImage | null | undefined, fallbackAlt: string) {
  if (shopifyImage) {
    return {
      src: shopifyImage.url,
      alt: shopifyImage.altText || fallbackAlt,
      width: shopifyImage.width,
      height: shopifyImage.height,
    }
  }
  
  const placeholder = placeholderImage(fallbackAlt)
  return {
    src: placeholder.src,
    alt: placeholder.alt,
    width: placeholder.width,
    height: placeholder.height,
  }
}

export interface PlaceholderOptions {
  width?: number
  height?: number
  text?: string
  backgroundColor?: string
  textColor?: string
  format?: 'svg' | 'url'
}

export function placeholderImage(
  alt: string,
  width: number = 400,
  height: number = 300,
  options: PlaceholderOptions = {}
): { src: string; alt: string; width: number; height: number } {
  const {
    text = alt,
    backgroundColor = '#F3F4F6',
    textColor = '#6B7280',
    format = 'svg'
  } = options

  let src: string

  if (format === 'svg') {
    // Generate SVG data URI
    const svg = `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="${backgroundColor}"/>
        <text x="50%" y="50%" font-family="system-ui, sans-serif" font-size="16" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">
          ${text.length > 30 ? text.substring(0, 30) + '...' : text}
        </text>
        <text x="50%" y="60%" font-family="system-ui, sans-serif" font-size="12" fill="${textColor}" text-anchor="middle" dominant-baseline="middle" opacity="0.7">
          ${width} × ${height}
        </text>
      </svg>
    `
    src = `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`
  } else {
    // Use placeholder.com service as fallback
    const encodedText = encodeURIComponent(text.length > 20 ? text.substring(0, 20) + '...' : text)
    src = `https://via.placeholder.com/${width}x${height}/${backgroundColor.replace('#', '')}/${textColor.replace('#', '')}?text=${encodedText}`
  }

  return {
    src,
    alt,
    width,
    height,
  }
}

// Predefined placeholder images for common use cases
export const placeholders = {
  hero: (alt: string = 'Hero Image') => 
    placeholderImage(alt, 1920, 1080, { 
      text: 'Hero Banner',
      backgroundColor: '#2F4F3E',
      textColor: '#F8F3EC'
    }),

  product: (alt: string = 'Product Image') => 
    placeholderImage(alt, 600, 600, { 
      text: 'Product Photo',
      backgroundColor: '#F8F3EC',
      textColor: '#5A3E2B'
    }),

  productGrid: (alt: string = 'Product Image') => 
    placeholderImage(alt, 400, 400, { 
      text: 'Product',
      backgroundColor: '#F8F3EC',
      textColor: '#5A3E2B'
    }),

  collection: (alt: string = 'Collection Image') => 
    placeholderImage(alt, 800, 600, { 
      text: 'Collection Hero',
      backgroundColor: '#5A3E2B',
      textColor: '#F8F3EC'
    }),

  blog: (alt: string = 'Blog Image') => 
    placeholderImage(alt, 800, 400, { 
      text: 'Blog Post',
      backgroundColor: '#C97B5A',
      textColor: '#FFFFFF'
    }),

  recipe: (alt: string = 'Recipe Image') => 
    placeholderImage(alt, 600, 400, { 
      text: 'Recipe Photo',
      backgroundColor: '#D1A15E',
      textColor: '#2F4F3E'
    }),

  ranch: (alt: string = 'Ranch Image') => 
    placeholderImage(alt, 1200, 800, { 
      text: 'Ranch Life',
      backgroundColor: '#2F4F3E',
      textColor: '#F8F3EC'
    }),

  avatar: (alt: string = 'Profile Image') => 
    placeholderImage(alt, 200, 200, { 
      text: 'Profile',
      backgroundColor: '#5A3E2B',
      textColor: '#F8F3EC'
    }),

  thumbnail: (alt: string = 'Thumbnail') => 
    placeholderImage(alt, 150, 150, { 
      text: 'Thumb',
      backgroundColor: '#F3F4F6',
      textColor: '#6B7280'
    }),

  social: (alt: string = 'Social Image') => 
    placeholderImage(alt, 1200, 630, { 
      text: 'Social Share',
      backgroundColor: '#2F4F3E',
      textColor: '#F8F3EC'
    }),

  icon: (alt: string = 'Icon') => 
    placeholderImage(alt, 64, 64, { 
      text: '⭐',
      backgroundColor: '#F8F3EC',
      textColor: '#D1A15E'
    }),
}

// Image optimization utilities
export function getOptimizedImageUrl(
  originalUrl: string,
  width?: number,
  height?: number,
  quality: number = 80
): string {
  if (!originalUrl) {
    return placeholderImage('Image not found', width, height).src
  }

  // If it's already a placeholder, return as-is
  if (originalUrl.startsWith('data:') || originalUrl.includes('placeholder')) {
    return originalUrl
  }

  // For Shopify CDN images, add transformation parameters
  if (originalUrl.includes('cdn.shopify.com')) {
    const url = new URL(originalUrl)
    
    if (width) url.searchParams.set('width', width.toString())
    if (height) url.searchParams.set('height', height.toString())
    url.searchParams.set('quality', quality.toString())
    
    return url.toString()
  }

  // For other images, return original (could add more CDN logic here)
  return originalUrl
}

// Generate responsive image srcSet
export function generateSrcSet(
  originalUrl: string,
  widths: number[] = [320, 640, 768, 1024, 1280, 1920]
): string {
  return widths
    .map(width => `${getOptimizedImageUrl(originalUrl, width)} ${width}w`)
    .join(', ')
}

// Generate sizes attribute for responsive images
export function generateSizes(breakpoints: { [key: string]: string } = {
  '(max-width: 640px)': '100vw',
  '(max-width: 1024px)': '50vw',
  default: '33vw'
}): string {
  const entries = Object.entries(breakpoints)
  const mediaQueries = entries
    .filter(([key]) => key !== 'default')
    .map(([query, size]) => `${query} ${size}`)
  
  const defaultSize = breakpoints.default || '100vw'
  
  return [...mediaQueries, defaultSize].join(', ')
}

// Image aspect ratio utilities
export const aspectRatios = {
  square: '1:1',
  landscape: '4:3',
  portrait: '3:4',
  wide: '16:9',
  ultraWide: '21:9',
  hero: '2:1',
}

export function getAspectRatioClass(ratio: keyof typeof aspectRatios): string {
  const ratioMap = {
    square: 'aspect-square',
    landscape: 'aspect-[4/3]',
    portrait: 'aspect-[3/4]',
    wide: 'aspect-video',
    ultraWide: 'aspect-[21/9]',
    hero: 'aspect-[2/1]',
  }
  
  return ratioMap[ratio] || 'aspect-square'
}

// Lazy loading utilities
export function createIntersectionObserver(
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = {}
): IntersectionObserver {
  const defaultOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
    ...options,
  }
  
  return new IntersectionObserver(callback, defaultOptions)
}
