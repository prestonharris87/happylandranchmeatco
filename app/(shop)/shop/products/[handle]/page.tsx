import { Suspense } from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getProduct, getProducts } from '@/lib/shopify'
import { generateProductMetadata, generateProductJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo'
import { ProductDetails } from '@/components/product/ProductDetails'
import { ProductTabs } from '@/components/product/ProductTabs'
import { CrossSell } from '@/components/product/CrossSell'
import { ProductReviews } from '@/components/product/ProductReviews'
import { ProductCardSkeleton } from '@/components/ui/Skeleton'

interface ProductPageProps {
  params: {
    handle: string
  }
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = await getProduct(params.handle)
  
  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The product you are looking for could not be found.',
    }
  }

  return generateProductMetadata(product)
}

async function RelatedProducts({ productType, currentProductId }: { 
  productType: string
  currentProductId: string 
}) {
  const relatedProducts = await getProducts(4, { productType, available: true })
  const filteredProducts = relatedProducts.filter(p => p.id !== currentProductId)
  
  return <CrossSell products={filteredProducts.slice(0, 3)} />
}

function RelatedProductsLoading() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="heading-3 text-center mb-8">Pairs Well With</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.handle)

  if (!product) {
    notFound()
  }

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Shop', url: '/shop' },
    { name: product.productType, url: `/shop/collections/${product.productType.toLowerCase()}` },
    { name: product.title, url: `/shop/products/${product.handle}` },
  ]

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateProductJsonLd(product)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbJsonLd(breadcrumbs)),
        }}
      />

      <div className="min-h-screen bg-white">
        {/* Breadcrumbs */}
        <nav className="bg-gray-50 py-4">
          <div className="container-custom">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.url} className="flex items-center">
                  {index > 0 && <span className="mx-2 text-gray-400">/</span>}
                  <span className={
                    index === breadcrumbs.length - 1 
                      ? 'text-brand-forest font-medium' 
                      : 'hover:text-brand-forest'
                  }>
                    {crumb.name}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        {/* Product Details */}
        <ProductDetails product={product} />

        {/* Product Tabs */}
        <ProductTabs product={product} />

        {/* Related Products */}
        <Suspense fallback={<RelatedProductsLoading />}>
          <RelatedProducts 
            productType={product.productType} 
            currentProductId={product.id}
          />
        </Suspense>

        {/* Reviews */}
        <ProductReviews product={product} />
      </div>
    </>
  )
}
