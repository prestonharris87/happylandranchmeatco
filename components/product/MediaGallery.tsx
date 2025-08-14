'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Expand } from 'lucide-react'
import { Product, ProductVariant } from '@/types/shopify'
import { getImageProps } from '@/lib/images'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

interface MediaGalleryProps {
  product: Product
  selectedVariant: ProductVariant
}

export function MediaGallery({ product, selectedVariant }: MediaGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  // Get images - prioritize variant image, then product images
  const images = product.images.length > 0 ? product.images : []

  // If variant has a specific image, show it first
  const variantImage = selectedVariant.image
  const displayImages = variantImage 
    ? [variantImage, ...images.filter(img => img.url !== variantImage.url)]
    : images

  // Add fallback if no images
  const finalImages = displayImages.length > 0 ? displayImages : [null]
  const currentShopifyImage = finalImages[currentImageIndex]
  const currentImage = getImageProps(currentShopifyImage, product.title)

  const goToPrevious = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? finalImages.length - 1 : currentImageIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentImageIndex(
      currentImageIndex === finalImages.length - 1 ? 0 : currentImageIndex + 1
    )
  }

  const goToImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden group">
        <Image
          src={currentImage.src}
          alt={currentImage.alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 space-y-2">
          {!product.availableForSale && (
            <Badge variant="error">Sold Out</Badge>
          )}
          {product.tags.includes('new') && (
            <Badge variant="success">New</Badge>
          )}
          {product.tags.includes('bestseller') && (
            <Badge variant="warning">Bestseller</Badge>
          )}
          {selectedVariant.compareAtPrice && (
            <Badge variant="error">Sale</Badge>
          )}
        </div>

        {/* Expand Button */}
        <button
          onClick={() => setIsLightboxOpen(true)}
          className="absolute top-4 right-4 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-opacity duration-200"
          aria-label="Expand image"
        >
          <Expand className="h-4 w-4" />
        </button>

        {/* Navigation Arrows */}
        {finalImages.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="sm"
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white hover:bg-opacity-70 rounded-full"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white hover:bg-opacity-70 rounded-full"
              aria-label="Next image"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}

        {/* Image Counter */}
        {finalImages.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-black bg-opacity-50 text-white text-sm rounded-full">
            {currentImageIndex + 1} / {finalImages.length}
          </div>
        )}
      </div>

      {/* Thumbnail Gallery */}
      {finalImages.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {finalImages.slice(0, 4).map((shopifyImage, index) => {
            const thumbImage = getImageProps(shopifyImage, product.title)
            return (
              <button
                key={shopifyImage?.url || index}
                onClick={() => goToImage(index)}
                className={`relative aspect-square bg-gray-100 rounded-md overflow-hidden transition-all duration-200 ${
                  index === currentImageIndex
                    ? 'ring-2 ring-brand-forest ring-offset-2'
                    : 'hover:opacity-80'
                }`}
              >
                <Image
                  src={thumbImage.src}
                  alt={thumbImage.alt}
                  fill
                  className="object-cover"
                  sizes="150px"
                />
              </button>
            )
          })}
        </div>
      )}

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div className="relative max-w-4xl max-h-full">
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              width={800}
              height={800}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Close Button */}
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70"
              aria-label="Close lightbox"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation in Lightbox */}
            {finalImages.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    goToPrevious()
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    goToNext()
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
