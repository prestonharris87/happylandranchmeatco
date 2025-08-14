'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Search, User, ShoppingBag } from 'lucide-react'
import { useCart } from '@/lib/cart'
import { getNextShippingDate } from '@/lib/utils'
import { siteConfig } from '@/config/site'
import { mainNav } from '@/config/navigation'
import { Button } from '@/components/ui/Button'
import { MainNav } from '@/components/MainNav'
import { MobileNav } from '@/components/MobileNav'
import { CartSheet } from '@/components/cart/CartSheet'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { totalQuantity, totalAmount } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const nextShippingDate = getNextShippingDate()

  return (
    <>
      {/* Top Bar */}
      <div className="bg-brand-forest text-white text-sm">
        <div className="container-custom">
          <div className="flex items-center justify-center py-2 text-center">
            <p className="flex items-center space-x-4">
              <span>
                Free shipping on orders over ${siteConfig.shipping.freeShipping}
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">
                Next shipping date: {nextShippingDate}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`sticky top-0 z-50 w-full border-b bg-white transition-all duration-200 ${
          isScrolled ? 'shadow-md' : ''
        }`}
      >
        <div className="container-custom">
          <div className="flex h-16 items-center justify-between">
            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>

            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/logo.png"
                  alt={siteConfig.name}
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
                <div className="hidden sm:block">
                  <span className="text-xl font-serif font-bold text-brand-forest">
                    {siteConfig.name}
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex">
              <MainNav items={mainNav} />
            </nav>

            {/* Right Actions */}
            <div className="flex items-center space-x-2">
              {/* Search */}
              <Button
                variant="ghost"
                size="sm"
                className="p-2"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </Button>

              {/* Account */}
              <Button
                variant="ghost"
                size="sm"
                className="p-2"
                aria-label="Account"
              >
                <User className="h-5 w-5" />
              </Button>

              {/* Cart */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsCartOpen(true)}
                className="relative p-2"
                aria-label={`Cart with ${totalQuantity} items`}
              >
                <ShoppingBag className="h-5 w-5" />
                {totalQuantity > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent-clay text-xs font-medium text-white">
                    {totalQuantity > 9 ? '9+' : totalQuantity}
                  </span>
                )}
              </Button>

              {/* Cart Summary (Desktop) */}
              {totalQuantity > 0 && (
                <div className="hidden lg:flex items-center space-x-2 text-sm">
                  <span className="text-gray-600">
                    {totalQuantity} {totalQuantity === 1 ? 'item' : 'items'}
                  </span>
                  <span className="font-medium text-brand-forest">
                    ${totalAmount.toFixed(2)}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNav
        items={mainNav}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Cart Sheet */}
      <CartSheet
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </>
  )
}
