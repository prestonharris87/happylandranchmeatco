import { Product } from '@/types/shopify'
import { ProductGrid } from '@/components/ProductCard'

interface BestSellersProps {
  products: Product[]
}

export function BestSellers({ products }: BestSellersProps) {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Customer Favorites</h2>
          <p className="body-large text-gray-600 max-w-2xl mx-auto">
            Not sure where to start? These customer favorites sell out fast — order while they're in stock.
          </p>
        </div>
        <ProductGrid products={products} showQuickAdd={true} />
      </div>
    </section>
  )
}
