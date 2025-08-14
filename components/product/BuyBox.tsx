'use client'

import { useState } from 'react'
import { Star, Truck, Shield, Award, Heart } from 'lucide-react'
import { Product, ProductVariant } from '@/types/shopify'
import { formatMoney } from '@/lib/utils'
import { siteConfig } from '@/config/site'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { AddToCartButton } from '@/components/AddToCartButton'
import { VariantSelector } from '@/components/product/VariantSelector'
import { InventoryBadge } from '@/components/InventoryBadge'

interface BuyBoxProps {
  product: Product
  selectedVariant: ProductVariant
  onVariantChange: (variant: ProductVariant) => void
}

export function BuyBox({ product, selectedVariant, onVariantChange }: BuyBoxProps) {
  const [isFavorited, setIsFavorited] = useState(false)

  const hasMultipleVariants = product.variants.length > 1
  const hasCompareAtPrice = selectedVariant.compareAtPrice
  const savingsAmount = hasCompareAtPrice && selectedVariant.compareAtPrice
    ? parseFloat(selectedVariant.compareAtPrice.amount) - parseFloat(selectedVariant.price.amount)
    : 0

  const trustBadges = [
    {
      icon: <Truck className="h-4 w-4" />,
      title: 'Free Shipping',
      subtitle: `Orders over $${siteConfig.shipping.freeShipping}`
    },
    {
      icon: <Shield className="h-4 w-4" />,
      title: 'Ranch Direct',
      subtitle: 'No middleman guarantee'
    },
    {
      icon: <Award className="h-4 w-4" />,
      title: 'Premium Quality',
      subtitle: 'Pasture-raised & hormone-free'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Product Title & Rating */}
      <div>
        <div className="flex items-start justify-between mb-2">
          <h1 className="text-3xl font-serif font-bold text-brand-forest leading-tight">
            {product.title}
          </h1>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsFavorited(!isFavorited)}
            className="p-2"
            aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
          >
            <Heart className={`h-5 w-5 ${isFavorited ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
          </Button>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-2 mb-4">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">(127 reviews)</span>
        </div>

        {/* Product Type & Tags */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
          <span>{product.productType}</span>
          {product.metafields.species && (
            <>
              <span>•</span>
              <span className="capitalize">{product.metafields.species}</span>
            </>
          )}
          {product.metafields.cut && (
            <>
              <span>•</span>
              <span className="capitalize">{product.metafields.cut}</span>
            </>
          )}
        </div>
      </div>

      {/* Price */}
      <div className="space-y-2">
        <div className="flex items-center space-x-3">
          <span className="text-3xl font-bold text-brand-forest">
            {formatMoney(selectedVariant.price.amount, selectedVariant.price.currencyCode)}
          </span>
                        {hasCompareAtPrice && selectedVariant.compareAtPrice && (
                <>
                  <span className="text-xl text-gray-500 line-through">
                    {formatMoney(selectedVariant.compareAtPrice.amount, selectedVariant.compareAtPrice.currencyCode)}
                  </span>
              <Badge variant="error">
                Save ${savingsAmount.toFixed(2)}
              </Badge>
            </>
          )}
        </div>
        
        {/* Price per unit */}
        <p className="text-sm text-gray-600">
          Price includes shipping & handling
        </p>
      </div>

      {/* Inventory Status */}
      <div className="flex items-center space-x-3">
        <InventoryBadge
          availableForSale={selectedVariant.availableForSale}
          quantityAvailable={selectedVariant.quantityAvailable}
        />
        {selectedVariant.quantityAvailable !== undefined && selectedVariant.quantityAvailable > 0 && (
          <span className="text-sm text-gray-600">
            {selectedVariant.quantityAvailable} available
          </span>
        )}
      </div>

      {/* Variant Selector */}
      {hasMultipleVariants && (
        <VariantSelector
          product={product}
          selectedVariant={selectedVariant}
          onVariantChange={onVariantChange}
        />
      )}

      {/* Add to Cart */}
      <div className="space-y-4">
        <AddToCartButton
          product={product}
          variant={selectedVariant}
          showQuantitySelector={true}
          size="lg"
          className="w-full"
        />

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <Button variant="secondary" size="md" className="w-full">
            Add to Wishlist
          </Button>
          <Button variant="outline" size="md" className="w-full">
            Share
          </Button>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="space-y-3 pt-6 border-t border-gray-200">
        {trustBadges.map((badge, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="flex-shrink-0 p-2 bg-brand-cream rounded-full text-brand-forest">
              {badge.icon}
            </div>
            <div>
              <div className="text-sm font-medium text-ink">{badge.title}</div>
              <div className="text-xs text-gray-600">{badge.subtitle}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Shipping Info */}
      <div className="bg-brand-cream rounded-lg p-4 space-y-2">
        <div className="flex items-center space-x-2">
          <Truck className="h-4 w-4 text-brand-forest" />
          <span className="font-medium text-brand-forest">Shipping Information</span>
        </div>
        <ul className="text-sm text-gray-700 space-y-1 ml-6">
          <li>• Ships frozen via FedEx cold-pack</li>
          <li>• Arrives fresh within 2-3 business days</li>
          <li>• Free shipping on orders over $149</li>
          <li>• Next shipping date: Tuesday, Dec 12</li>
        </ul>
      </div>

      {/* Product Features */}
      {(product.metafields.practice || product.tags.length > 0) && (
        <div className="space-y-3">
          <h3 className="font-medium text-ink">Product Features</h3>
          <div className="flex flex-wrap gap-2">
            {product.metafields.practice && (
              <Badge variant="secondary">{product.metafields.practice}</Badge>
            )}
            {product.tags.slice(0, 4).map(tag => (
              <Badge key={tag} variant="outline" className="capitalize">
                {tag.replace('-', ' ')}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
