import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/types/shopify'
import { formatMoneyRange } from '@/lib/utils'
import { placeholders } from '@/lib/images'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { AddToCartButton } from '@/components/AddToCartButton'
import { InventoryBadge } from '@/components/InventoryBadge'

interface ProductCardProps {
  product: Product
  priority?: boolean
  showQuickAdd?: boolean
  className?: string
}

export function ProductCard({ 
  product, 
  priority = false, 
  showQuickAdd = false,
  className = '' 
}: ProductCardProps) {
  const primaryImage = product.images[0] || placeholders.product(product.title)
  const defaultVariant = product.variants[0]
  
  const priceDisplay = product.variants.length === 1 
    ? `$${product.priceRange.minVariantPrice.amount}`
    : formatMoneyRange(
        product.priceRange.minVariantPrice.amount,
        product.priceRange.maxVariantPrice.amount,
        product.priceRange.minVariantPrice.currencyCode
      )

  const hasCompareAtPrice = product.variants.some(v => v.compareAtPrice)
  const isOnSale = hasCompareAtPrice
  
  return (
    <div className={`product-card ${className}`}>
      <Link href={`/shop/products/${product.handle}`}>
        <div className="space-y-3">
          {/* Product Image */}
          <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={primaryImage.src}
              alt={primaryImage.alt}
              fill
              className="product-card-image object-cover"
              priority={priority}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            
            {/* Badges */}
            <div className="absolute top-2 left-2 space-y-1">
              {isOnSale && (
                <Badge variant="error" size="sm">
                  Sale
                </Badge>
              )}
              {product.tags.includes('new') && (
                <Badge variant="success" size="sm">
                  New
                </Badge>
              )}
              {product.tags.includes('bestseller') && (
                <Badge variant="warning" size="sm">
                  Bestseller
                </Badge>
              )}
            </div>
            
            {/* Inventory Badge */}
            <div className="absolute top-2 right-2">
              <InventoryBadge 
                availableForSale={product.availableForSale}
                quantityAvailable={defaultVariant?.quantityAvailable}
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-2">
            {/* Title */}
            <h3 className="font-medium text-ink line-clamp-2 group-hover:text-brand-forest transition-colors duration-200">
              {product.title}
            </h3>
            
            {/* Product Type & Tags */}
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>{product.productType}</span>
              {product.metafields.species && (
                <>
                  <span>•</span>
                  <span className="capitalize">{product.metafields.species}</span>
                </>
              )}
            </div>
            
            {/* Price */}
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-brand-forest">
                {priceDisplay}
              </span>
              {isOnSale && defaultVariant?.compareAtPrice && (
                <span className="text-sm text-gray-500 line-through">
                  ${defaultVariant.compareAtPrice.amount}
                </span>
              )}
            </div>
            
            {/* Description Preview */}
            <p className="text-sm text-gray-600 line-clamp-2">
              {product.description}
            </p>
          </div>
        </div>
      </Link>

      {/* Quick Add Button */}
      {showQuickAdd && defaultVariant && (
        <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <AddToCartButton
            variant={defaultVariant}
            product={product}
            size="sm"
            className="w-full"
          >
            Quick Add
          </AddToCartButton>
        </div>
      )}
    </div>
  )
}

// Grid container for product cards
export function ProductGrid({ 
  products, 
  showQuickAdd = false,
  className = '' 
}: {
  products: Product[]
  showQuickAdd?: boolean
  className?: string
}) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No products found.</p>
      </div>
    )
  }

  return (
    <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 ${className}`}>
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          priority={index < 4}
          showQuickAdd={showQuickAdd}
        />
      ))}
    </div>
  )
}
