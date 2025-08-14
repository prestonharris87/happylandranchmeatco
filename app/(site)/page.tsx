import { Suspense } from 'react'
import { Metadata } from 'next'
import { generateMetadata as generateSEOMetadata, generateOrganizationJsonLd } from '@/lib/seo'
import { getProducts, getCollections } from '@/lib/shopify'
import { HeroSection } from '@/components/home/HeroSection'
import { TrustBar } from '@/components/home/TrustBar'
import { FeaturedCollections } from '@/components/home/FeaturedCollections'
import { SeasonalPromo } from '@/components/home/SeasonalPromo'
import { BestSellers } from '@/components/home/BestSellers'
import { MeetTheRancher } from '@/components/home/MeetTheRancher'
import { RecipeSpotlight } from '@/components/home/RecipeSpotlight'
import { ReviewsCarousel } from '@/components/home/ReviewsCarousel'
import { EmailCapture } from '@/components/home/EmailCapture'
import { ProductGrid } from '@/components/ProductCard'
import { ProductCardSkeleton } from '@/components/ui/Skeleton'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Premium Ranch-Raised Beef, Pork & Chicken Delivered to Your Door',
  description: 'Taste the difference of pasture-raised, ranch-direct meat. No hormones. No antibiotics. Just honest flavor from our family ranch in Ada, Oklahoma.',
  keywords: [
    'grass-fed beef delivery',
    'pasture-raised meat',
    'ranch direct beef',
    'hormone-free meat',
    'Oklahoma ranch meat',
    'premium beef delivery',
    'heritage pork',
    'pasture-raised chicken',
    'farm to table meat',
    'ranch-to-table delivery'
  ],
})

// Best sellers loading component
function BestSellersLoading() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Customer Favorites</h2>
          <p className="body-large text-gray-600 max-w-2xl mx-auto">
            Not sure where to start? These customer favorites sell out fast — order while they're in stock.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Best sellers component with data fetching
async function BestSellersSection() {
  const bestSellers = await getProducts(6, { available: true }, 'BEST_SELLING')
  
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Customer Favorites</h2>
          <p className="body-large text-gray-600 max-w-2xl mx-auto">
            Not sure where to start? These customer favorites sell out fast — order while they're in stock.
          </p>
        </div>
        <ProductGrid products={bestSellers} showQuickAdd={true} />
      </div>
    </section>
  )
}

// Featured collections component with data fetching
async function FeaturedCollectionsSection() {
  const collections = await getCollections(3)
  const featuredCollections = collections.filter(collection => 
    ['beef', 'pork', 'chicken'].includes(collection.handle)
  ).slice(0, 3)
  
  return <FeaturedCollections collections={featuredCollections} />
}

export default async function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateOrganizationJsonLd()),
        }}
      />

      {/* Hero Section */}
      <HeroSection />

      {/* Trust Bar */}
      <TrustBar />

      {/* Featured Collections */}
      <Suspense fallback={<div className="section-padding bg-white"><div className="container-custom text-center">Loading collections...</div></div>}>
        <FeaturedCollectionsSection />
      </Suspense>

      {/* Seasonal Promo */}
      <SeasonalPromo />

      {/* Best Sellers */}
      <Suspense fallback={<BestSellersLoading />}>
        <BestSellersSection />
      </Suspense>

      {/* Meet the Rancher */}
      <MeetTheRancher />

      {/* Recipe Spotlight */}
      <RecipeSpotlight />

      {/* Reviews Carousel */}
      <ReviewsCarousel />

      {/* Email Capture */}
      <EmailCapture />
    </>
  )
}
