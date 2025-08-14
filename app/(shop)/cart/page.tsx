'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Plus, Minus, Trash2, ArrowLeft } from 'lucide-react'
import { useCart, formatCartTotal, getCartShippingInfo } from '@/lib/cart'
import { formatMoney } from '@/lib/utils'
import { placeholders } from '@/lib/images'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

export default function CartPage() {
  const {
    cart,
    isLoading,
    updateQuantity,
    removeFromCart,
    initializeCart,
    isEmpty,
    totalQuantity,
  } = useCart()

  // Initialize cart when component mounts
  useEffect(() => {
    if (!cart) {
      initializeCart()
    }
  }, [cart, initializeCart])

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-custom py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-serif font-bold text-brand-forest">
                Shopping Cart
              </h1>
              <p className="text-gray-600 mt-2">
                {totalQuantity} {totalQuantity === 1 ? 'item' : 'items'} in your cart
              </p>
            </div>
            <Link
              href="/shop"
              className="flex items-center space-x-2 text-brand-forest hover:text-opacity-80 transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Continue Shopping</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="container-custom py-8">
        {isEmpty ? (
          /* Empty Cart */
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl text-gray-400">🛒</span>
              </div>
              <h2 className="text-2xl font-semibold text-ink mb-4">
                Your cart is empty
              </h2>
              <p className="text-gray-600 mb-8">
                Looks like you haven't added any delicious ranch-raised meat to your cart yet.
              </p>
              <Link 
                href="/shop"
                className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-brand-forest text-white hover:bg-opacity-90 focus:ring-brand-forest h-12 px-8 text-lg"
              >
                Start Shopping
              </Link>
            </div>
          </div>
        ) : (
          /* Cart with Items */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-ink">Cart Items</h2>
                </div>
                
                <div className="divide-y divide-gray-200">
                  {cart?.lines.map((line) => {
                    const image = line.merchandise.image || placeholders.product(line.merchandise.title)
                    const lineTotal = parseFloat(line.cost.totalAmount.amount)

                    return (
                      <div key={line.id} className="p-6">
                        <div className="flex items-start space-x-4">
                          {/* Product Image */}
                          <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                            <Image
                              src={image.src}
                              alt={image.alt}
                              fill
                              className="object-cover"
                              sizes="96px"
                            />
                          </div>

                          {/* Product Details */}
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-medium text-ink">
                              <Link 
                                href={`/shop/products/${line.merchandise.product?.handle || ''}`}
                                className="hover:text-brand-forest transition-colors duration-200"
                              >
                                {line.merchandise.title}
                              </Link>
                            </h3>
                            
                            {/* Variant Options */}
                            {line.merchandise.selectedOptions.length > 0 && (
                              <div className="mt-1 text-sm text-gray-500">
                                {line.merchandise.selectedOptions
                                  .filter(option => option.value !== 'Default Title')
                                  .map(option => option.value)
                                  .join(', ')
                                }
                              </div>
                            )}

                            {/* Price */}
                            <div className="mt-2 flex items-center space-x-2">
                              <span className="text-lg font-semibold text-brand-forest">
                                {formatMoney(line.merchandise.price.amount, line.merchandise.price.currencyCode)}
                              </span>
                              {line.merchandise.compareAtPrice && (
                                <span className="text-sm text-gray-500 line-through">
                                  {formatMoney(line.merchandise.compareAtPrice.amount, line.merchandise.compareAtPrice.currencyCode)}
                                </span>
                              )}
                            </div>

                            {/* Quantity Controls */}
                            <div className="mt-4 flex items-center space-x-3">
                              <div className="flex items-center border border-gray-300 rounded-md">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => updateQuantity(line.id, line.quantity - 1)}
                                  disabled={isLoading}
                                  className="p-2 rounded-none border-none hover:bg-gray-100"
                                >
                                  <Minus className="h-4 w-4" />
                                </Button>
                                <span className="px-4 py-2 text-sm font-medium min-w-[3rem] text-center">
                                  {line.quantity}
                                </span>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => updateQuantity(line.id, line.quantity + 1)}
                                  disabled={isLoading}
                                  className="p-2 rounded-none border-none hover:bg-gray-100"
                                >
                                  <Plus className="h-4 w-4" />
                                </Button>
                              </div>

                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => removeFromCart(line.id)}
                                disabled={isLoading}
                                className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>

                          {/* Line Total */}
                          <div className="text-right">
                            <div className="text-lg font-semibold text-ink">
                              {formatMoney(line.cost.totalAmount.amount, line.cost.totalAmount.currencyCode)}
                            </div>
                            {line.quantity > 1 && (
                              <div className="text-sm text-gray-500">
                                {formatMoney(line.merchandise.price.amount, line.merchandise.price.currencyCode)} each
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm sticky top-24">
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-ink mb-6">
                    Order Summary
                  </h2>

                  {/* Subtotal */}
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span>Subtotal ({totalQuantity} items)</span>
                      <span>{formatCartTotal(cart)}</span>
                    </div>

                    {/* Shipping */}
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>
                        {shippingInfo.freeShipping ? (
                          <span className="text-green-600 font-medium">Free</span>
                        ) : (
                          `$${shippingInfo.shippingCost}`
                        )}
                      </span>
                    </div>

                    {/* Free Shipping Progress */}
                    {!shippingInfo.freeShipping && (
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-700">
                          Add <strong>${shippingInfo.amountForFreeShipping.toFixed(2)}</strong> more for free shipping!
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Total */}
                  <div className="border-t border-gray-200 pt-6 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">Total</span>
                      <span className="text-2xl font-bold text-brand-forest">
                        {formatCartTotal(cart)}
                      </span>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <Button
                    onClick={handleCheckout}
                    disabled={isLoading || isEmpty}
                    loading={isLoading}
                    size="lg"
                    className="w-full mb-4"
                  >
                    Proceed to Checkout
                  </Button>

                  {/* Trust Badges */}
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <span className="text-green-500">✓</span>
                      <span>Secure checkout</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-500">✓</span>
                      <span>Ships frozen via FedEx</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-500">✓</span>
                      <span>100% satisfaction guarantee</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
