import { Suspense } from 'react'
import { Metadata } from 'next'
import { getProducts, getCollections } from '@/lib/shopify'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'
import { ProductGrid } from '@/components/ProductCard'
import { ProductCardSkeleton } from '@/components/ui/Skeleton'
import { ShopFilters } from '@/components/shop/ShopFilters'
import { ShopHeader } from '@/components/shop/ShopHeader'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Shop Premium Ranch-Raised Meat Online – Beef, Pork & Chicken',
  description: 'Shop our premium selection of grass-fed beef, heritage pork, and pasture-raised chicken. Raised without hormones or antibiotics, shipped fresh from our ranch in Ada, Oklahoma.',
  keywords: [
    'buy grass-fed beef online',
    'pasture-raised pork delivery',
    'hormone-free meat online',
    'ranch direct meat',
    'Oklahoma beef delivery',
    'premium meat online',
    'grass-fed meat delivery',
    'pasture-raised chicken',
    'heritage pork online',
    'ranch-to-table meat'
  ],
  canonical: '/shop',
})

interface ShopPageProps {
  searchParams: {
    category?: string
    sort?: string
    priceMin?: string
    priceMax?: string
    available?: string
  }
}

async function ShopProducts({ searchParams }: { searchParams: ShopPageProps['searchParams'] }) {
  const filters = {
    available: searchParams.available === 'true',
    productType: searchParams.category,
  }

  const sortKey = searchParams.sort === 'price-low' ? 'PRICE' : 
                  searchParams.sort === 'price-high' ? 'PRICE' :
                  searchParams.sort === 'newest' ? 'CREATED_AT' :
                  searchParams.sort === 'title' ? 'TITLE' : 'BEST_SELLING'
  
  const reverse = searchParams.sort === 'price-high' || searchParams.sort === 'newest'

  const products = await getProducts(24, filters, sortKey, reverse)

  return <ProductGrid products={products} showQuickAdd={true} />
}

function ProductsLoading() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {Array.from({ length: 12 }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  )
}

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const collections = await getCollections(10)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Shop Header */}
      <ShopHeader />

      <div className="container-custom py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Suspense fallback={<div className="animate-pulse bg-gray-200 h-96 rounded-lg" />}>
                <ShopFilters collections={collections} />
              </Suspense>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <Suspense fallback={<ProductsLoading />}>
              <ShopProducts searchParams={searchParams} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}
