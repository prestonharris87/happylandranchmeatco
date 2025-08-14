'use client'

import { useState } from 'react'
import { Product, ProductVariant } from '@/types/shopify'
import { MediaGallery } from '@/components/product/MediaGallery'
import { BuyBox } from '@/components/product/BuyBox'

interface ProductDetailsProps {
  product: Product
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
    product.variants[0]
  )

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Media Gallery */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <MediaGallery 
              product={product}
              selectedVariant={selectedVariant}
            />
          </div>

          {/* Buy Box */}
          <div>
            <BuyBox
              product={product}
              selectedVariant={selectedVariant}
              onVariantChange={setSelectedVariant}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
