'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { X, ChevronDown, ChevronRight } from 'lucide-react'
import { NavItem } from '@/config/navigation'
import { siteConfig } from '@/config/site'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

interface MobileNavProps {
  items: NavItem[]
  isOpen: boolean
  onClose: () => void
}

export function MobileNav({ items, isOpen, onClose }: MobileNavProps) {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())

  // Close mobile menu on route change
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const toggleExpanded = (title: string) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(title)) {
      newExpanded.delete(title)
    } else {
      newExpanded.add(title)
    }
    setExpandedItems(newExpanded)
  }

  const handleLinkClick = () => {
    onClose()
    setExpandedItems(new Set())
  }

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-50 bg-black bg-opacity-50 lg:hidden"
        onClick={onClose}
      />

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-y-0 left-0 z-50 w-full max-w-sm bg-white shadow-xl transition-transform duration-300 lg:hidden',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-200 p-4">
            <Link href="/" onClick={handleLinkClick} className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt={siteConfig.name}
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <span className="text-lg font-serif font-bold text-brand-forest">
                {siteConfig.name}
              </span>
            </Link>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="p-2"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item.title}>
                  <div className="space-y-2">
                    {/* Main Item */}
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        onClick={handleLinkClick}
                        className="flex-1 text-base font-medium text-ink hover:text-brand-forest transition-colors duration-200"
                      >
                        {item.title}
                      </Link>
                      
                      {/* Expand Button */}
                      {item.items && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleExpanded(item.title)}
                          className="p-1"
                          aria-label={`Toggle ${item.title} submenu`}
                        >
                          {expandedItems.has(item.title) ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                        </Button>
                      )}
                    </div>

                    {/* Submenu */}
                    {item.items && expandedItems.has(item.title) && (
                      <ul className="ml-4 space-y-2 border-l border-gray-200 pl-4">
                        {item.items.map((subItem) => (
                          <li key={subItem.title}>
                            <Link
                              href={subItem.href}
                              onClick={handleLinkClick}
                              className="block py-2 text-sm text-gray-600 hover:text-brand-forest transition-colors duration-200"
                            >
                              <div className="font-medium">{subItem.title}</div>
                              {subItem.description && (
                                <div className="text-xs text-gray-500 mt-1">
                                  {subItem.description}
                                </div>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div className="border-t border-gray-200 p-4">
            <div className="space-y-4">
              {/* Contact Info */}
              <div className="text-sm text-gray-600">
                <p className="font-medium text-ink mb-1">Get in touch</p>
                <p>{siteConfig.contact.email}</p>
                <p>{siteConfig.contact.phone}</p>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {Object.entries(siteConfig.social).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-brand-forest transition-colors duration-200"
                    aria-label={`Follow us on ${platform}`}
                  >
                    <span className="capitalize text-sm">{platform}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
