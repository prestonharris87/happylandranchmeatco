import { Product } from '@/types/shopify'
import { ProductGrid } from '@/components/ProductCard'

interface CrossSellProps {
  products: Product[]
}

export function CrossSell({ products }: CrossSellProps) {
  if (products.length === 0) {
    return null
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-3 mb-4">Pairs Well With</h2>
          <p className="body-large text-gray-600 max-w-2xl mx-auto">
            Complete your order with these complementary cuts from our ranch.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <ProductGrid products={products} showQuickAdd={true} />
        </div>
      </div>
    </section>
  )
}
