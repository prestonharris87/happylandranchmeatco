'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { X, ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react'
import { useCart, formatCartTotal, getCartShippingInfo } from '@/lib/cart'
import { formatMoney } from '@/lib/utils'
import { getImageProps } from '@/lib/images'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/utils'

interface CartSheetProps {
  isOpen: boolean
  onClose: () => void
}

export function CartSheet({ isOpen, onClose }: CartSheetProps) {
  const { 
    cart, 
    isLoading, 
    updateQuantity, 
    removeFromCart, 
    initializeCart,
    isEmpty,
    totalQuantity 
  } = useCart()

  // Initialize cart when component mounts
  useEffect(() => {
    if (!cart) {
      initializeCart()
    }
  }, [cart, initializeCart])

  // Prevent scroll when sheet is open
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

  const shippingInfo = getCartShippingInfo(cart)

  const handleCheckout = () => {
    if (cart?.checkoutUrl) {
      // Fire begin_checkout analytics event
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'begin_checkout', {
          currency: cart.cost.totalAmount.currencyCode,
          value: parseFloat(cart.cost.totalAmount.amount),
          items: cart.lines.map(line => ({
            item_id: line.merchandise.id,
            item_name: line.merchandise.title,
            quantity: line.quantity,
            price: parseFloat(line.merchandise.price.amount),
          })),
        })
      }

      // Redirect to Shopify checkout
      window.location.href = cart.checkoutUrl
    }
  }

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-50 bg-black bg-opacity-50"
        onClick={onClose}
      />

      {/* Cart Sheet */}
      <div
        className={cn(
          'fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white shadow-xl transition-transform duration-300',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-200 p-4">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-5 w-5 text-brand-forest" />
              <h2 className="text-lg font-semibold text-ink">
                Cart ({totalQuantity})
              </h2>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="p-2"
              aria-label="Close cart"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Content */}
          {isEmpty ? (
            <div className="flex-1 flex items-center justify-center p-8">
              <div className="text-center">
                <ShoppingBag className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-ink mb-2">
                  Your cart is empty
                </h3>
                <p className="text-gray-500 mb-6">
                  Add some delicious ranch-raised meat to get started!
                </p>
                <Button onClick={onClose}>
                  Continue Shopping
                </Button>
              </div>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-4">
                <div className="space-y-4">
                  {cart?.lines.map((line) => {
                    const image = getImageProps(line.merchandise.image, line.merchandise.title)
                    const lineTotal = parseFloat(line.cost.totalAmount.amount)

                    return (
                      <div key={line.id} className="cart-item">
                        {/* Product Image */}
                        <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md bg-gray-100">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                        </div>

                        {/* Product Info */}
                        <div className="flex-1 space-y-1">
                          <h4 className="text-sm font-medium text-ink line-clamp-2">
                            {line.merchandise.title}
                          </h4>
                          
                          {/* Variant Options */}
                          {line.merchandise.selectedOptions.length > 0 && (
                            <div className="text-xs text-gray-500">
                              {line.merchandise.selectedOptions
                                .filter(option => option.value !== 'Default Title')
                                .map(option => option.value)
                                .join(', ')
                              }
                            </div>
                          )}

                          {/* Price */}
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium text-brand-forest">
                              {formatMoney(line.merchandise.price.amount, line.merchandise.price.currencyCode)}
                            </span>
                            {line.merchandise.compareAtPrice && (
                              <span className="text-xs text-gray-500 line-through">
                                {formatMoney(line.merchandise.compareAtPrice.amount, line.merchandise.compareAtPrice.currencyCode)}
                              </span>
                            )}
                          </div>

                          {/* Quantity Controls */}
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => updateQuantity(line.id, line.quantity - 1)}
                              disabled={isLoading}
                              className="p-1 h-6 w-6"
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="text-sm font-medium min-w-[2rem] text-center">
                              {line.quantity}
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => updateQuantity(line.id, line.quantity + 1)}
                              disabled={isLoading}
                              className="p-1 h-6 w-6"
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeFromCart(line.id)}
                              disabled={isLoading}
                              className="p-1 h-6 w-6 text-red-500 hover:text-red-700"
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>

                        {/* Line Total */}
                        <div className="text-sm font-medium text-ink">
                          {formatMoney(line.cost.totalAmount.amount, line.cost.totalAmount.currencyCode)}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-gray-200 p-4 space-y-4">
                {/* Shipping Info */}
                <div className="space-y-2">
                  {shippingInfo.freeShipping ? (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-green-600 font-medium">
                        🚚 Free shipping included!
                      </span>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span>Shipping</span>
                        <span>${shippingInfo.shippingCost}</span>
                      </div>
                      <p className="text-xs text-gray-500">
                        Add ${shippingInfo.amountForFreeShipping.toFixed(2)} more for free shipping
                      </p>
                    </div>
                  )}
                </div>

                {/* Total */}
                <div className="flex items-center justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span className="text-brand-forest">
                    {formatCartTotal(cart)}
                  </span>
                </div>

                {/* Checkout Button */}
                <Button
                  onClick={handleCheckout}
                  disabled={isLoading || isEmpty}
                  loading={isLoading}
                  size="lg"
                  className="w-full"
                >
                  Checkout
                </Button>

                {/* Continue Shopping */}
                <Button
                  variant="secondary"
                  onClick={onClose}
                  size="lg"
                  className="w-full"
                >
                  Continue Shopping
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}
