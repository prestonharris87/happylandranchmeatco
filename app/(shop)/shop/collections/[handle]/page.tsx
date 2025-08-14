import { Suspense } from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { getCollection } from '@/lib/shopify'
import { generateCollectionMetadata, generateBreadcrumbJsonLd } from '@/lib/seo'
import { ProductGrid, ProductCardSkeleton } from '@/components/ProductCard'
import { placeholders } from '@/lib/images'
import { ShopFilters } from '@/components/shop/ShopFilters'

interface CollectionPageProps {
  params: {
    handle: string
  }
  searchParams: {
    sort?: string
    priceMin?: string
    priceMax?: string
  }
}

export async function generateMetadata({ params }: CollectionPageProps): Promise<Metadata> {
  const collection = await getCollection(params.handle)
  
  if (!collection) {
    return {
      title: 'Collection Not Found',
      description: 'The collection you are looking for could not be found.',
    }
  }

  return generateCollectionMetadata(collection)
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

export default async function CollectionPage({ params, searchParams }: CollectionPageProps) {
  const collection = await getCollection(params.handle)

  if (!collection) {
    notFound()
  }

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Shop', url: '/shop' },
    { name: collection.title, url: `/shop/collections/${collection.handle}` },
  ]

  const headerImage = collection.image || placeholders.collection(collection.title)

  return (
    <>
      {/* JSON-LD Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbJsonLd(breadcrumbs)),
        }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Collection Header */}
        <section className="relative py-20 bg-brand-forest overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={headerImage.src}
              alt={headerImage.alt}
              fill
              className="object-cover opacity-30"
              priority
            />
          </div>

          {/* Content */}
          <div className="relative z-10 container-custom text-center text-white">
            <nav className="text-sm mb-6">
              <ol className="flex items-center justify-center space-x-2 text-white text-opacity-80">
                {breadcrumbs.map((crumb, index) => (
                  <li key={crumb.url} className="flex items-center">
                    {index > 0 && <span className="mx-2">/</span>}
                    <span className={index === breadcrumbs.length - 1 ? 'text-white' : 'hover:text-white'}>
                      {crumb.name}
                    </span>
                  </li>
                ))}
              </ol>
            </nav>

            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              {collection.title}
            </h1>
            
            {collection.description && (
              <div className="max-w-3xl mx-auto">
                <div 
                  className="text-xl text-white text-opacity-90 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: collection.descriptionHtml }}
                />
              </div>
            )}

            <div className="mt-8 flex items-center justify-center space-x-8 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold">{collection.products.length}</div>
                <div className="text-white text-opacity-80">Products</div>
              </div>
              <div className="w-px h-12 bg-white bg-opacity-30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold">48hrs</div>
                <div className="text-white text-opacity-80">Fresh Delivery</div>
              </div>
              <div className="w-px h-12 bg-white bg-opacity-30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-white text-opacity-80">Ranch-Raised</div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <div className="container-custom py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <ShopFilters collections={[collection]} />
              </div>
            </div>

            {/* Products */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-semibold text-ink">
                    {collection.title} Products
                  </h2>
                  <p className="text-gray-600 mt-1">
                    {collection.products.length} products available
                  </p>
                </div>
              </div>

              <Suspense fallback={<ProductsLoading />}>
                <ProductGrid products={collection.products} showQuickAdd={true} />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
