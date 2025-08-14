'use client'

import { useState } from 'react'
import { Product, ProductVariant } from '@/types/shopify'
import { useCart } from '@/lib/cart'
import { Button } from '@/components/ui/Button'
import { ShoppingBag, Plus, Minus } from 'lucide-react'
import toast from 'react-hot-toast'

interface AddToCartButtonProps {
  product: Product
  variant: ProductVariant
  quantity?: number
  showQuantitySelector?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  children?: React.ReactNode
}

export function AddToCartButton({
  product,
  variant,
  quantity: initialQuantity = 1,
  showQuantitySelector = false,
  size = 'md',
  className = '',
  children = 'Add to Cart',
}: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(initialQuantity)
  const { addToCart, isLoading, getLineByMerchandiseId } = useCart()
  
  const existingLine = getLineByMerchandiseId(variant.id)
  const isInCart = !!existingLine
  const currentQuantity = existingLine?.quantity || 0

  const handleAddToCart = async () => {
    if (!variant.availableForSale) {
      toast.error('This item is currently out of stock')
      return
    }

    try {
      await addToCart(variant.id, quantity)
      toast.success(
        `Added ${quantity} ${quantity === 1 ? 'item' : 'items'} to cart`,
        {
          icon: '🛒',
          duration: 3000,
        }
      )
    } catch (error) {
      console.error('Error adding to cart:', error)
      toast.error('Failed to add item to cart. Please try again.')
    }
  }

  const incrementQuantity = () => {
    const maxQuantity = variant.quantityAvailable || 99
    if (quantity < maxQuantity) {
      setQuantity(quantity + 1)
    }
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const isDisabled = !variant.availableForSale || isLoading

  return (
    <div className="space-y-3">
      {/* Quantity Selector */}
      {showQuantitySelector && (
        <div className="flex items-center space-x-3">
          <span className="text-sm font-medium">Quantity:</span>
          <div className="flex items-center border border-gray-300 rounded-md">
            <Button
              variant="ghost"
              size="sm"
              onClick={decrementQuantity}
              disabled={quantity <= 1}
              className="p-2 rounded-none border-none"
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="px-4 py-2 text-sm font-medium min-w-[3rem] text-center">
              {quantity}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={incrementQuantity}
              disabled={quantity >= (variant.quantityAvailable || 99)}
              className="p-2 rounded-none border-none"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {/* Add to Cart Button */}
      <Button
        onClick={handleAddToCart}
        disabled={isDisabled}
        loading={isLoading}
        size={size}
        className={className}
        leftIcon={<ShoppingBag className="h-4 w-4" />}
      >
        {children}
      </Button>

      {/* Cart Status */}
      {isInCart && (
        <p className="text-sm text-green-600">
          {currentQuantity} {currentQuantity === 1 ? 'item' : 'items'} in cart
        </p>
      )}

      {/* Stock Warning */}
      {variant.quantityAvailable !== undefined && variant.quantityAvailable <= 5 && variant.quantityAvailable > 0 && (
        <p className="text-sm text-orange-600">
          Only {variant.quantityAvailable} left in stock
        </p>
      )}
    </div>
  )
}
