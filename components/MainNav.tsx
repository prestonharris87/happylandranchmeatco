'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { NavItem } from '@/config/navigation'
import { cn } from '@/lib/utils'

interface MainNavProps {
  items: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const handleMouseEnter = (title: string) => {
    setActiveDropdown(title)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }

  return (
    <ul className="flex items-center space-x-8">
      {items.map((item) => (
        <li
          key={item.title}
          className="relative"
          onMouseEnter={() => item.items && handleMouseEnter(item.title)}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            href={item.href}
            className={cn(
              'flex items-center space-x-1 text-sm font-medium text-ink hover:text-brand-forest transition-colors duration-200',
              activeDropdown === item.title && 'text-brand-forest'
            )}
          >
            <span>{item.title}</span>
            {item.items && (
              <ChevronDown className="h-4 w-4" />
            )}
          </Link>

          {/* Dropdown Menu */}
          {item.items && (
            <div
              className={cn(
                'absolute left-0 top-full mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-200',
                activeDropdown === item.title
                  ? 'opacity-100 visible translate-y-0'
                  : 'opacity-0 invisible -translate-y-2'
              )}
            >
              <div className="p-2">
                {item.items.map((subItem) => (
                  <Link
                    key={subItem.title}
                    href={subItem.href}
                    className="block px-4 py-3 rounded-md text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-forest transition-colors duration-200"
                  >
                    <div className="font-medium">{subItem.title}</div>
                    {subItem.description && (
                      <div className="text-xs text-gray-500 mt-1">
                        {subItem.description}
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  )
}
