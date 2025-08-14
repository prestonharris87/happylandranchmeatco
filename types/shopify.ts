// Shopify Storefront API Types

export interface ShopifyImage {
  id: string
  url: string
  altText: string | null
  width: number
  height: number
}

export interface ShopifyMoney {
  amount: string
  currencyCode: string
}

export interface ShopifyProductVariant {
  id: string
  title: string
  availableForSale: boolean
  selectedOptions: {
    name: string
    value: string
  }[]
  price: ShopifyMoney
  compareAtPrice?: ShopifyMoney
  image?: ShopifyImage
  quantityAvailable?: number
  product?: {
    id: string
    handle: string
    title: string
  }
}

export interface ShopifyProduct {
  id: string
  handle: string
  title: string
  description: string
  descriptionHtml: string
  availableForSale: boolean
  tags: string[]
  productType: string
  vendor: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  images: {
    edges: {
      node: ShopifyImage
    }[]
  }
  variants: {
    edges: {
      node: ShopifyProductVariant
    }[]
  }
  priceRange: {
    minVariantPrice: ShopifyMoney
    maxVariantPrice: ShopifyMoney
  }
  compareAtPriceRange: {
    minVariantPrice: ShopifyMoney
    maxVariantPrice: ShopifyMoney
  }
  seo: {
    title: string | null
    description: string | null
  }
  metafields: {
    edges: {
      node: {
        id: string
        key: string
        value: string
        namespace: string
      }
    }[]
  }
}

export interface ShopifyCollection {
  id: string
  handle: string
  title: string
  description: string
  descriptionHtml: string
  image?: ShopifyImage
  products: {
    edges: {
      node: ShopifyProduct
    }[]
  }
  seo: {
    title: string | null
    description: string | null
  }
}

export interface ShopifyCart {
  id: string
  checkoutUrl: string
  cost: {
    totalAmount: ShopifyMoney
    subtotalAmount: ShopifyMoney
    totalTaxAmount?: ShopifyMoney
    totalDutyAmount?: ShopifyMoney
  }
  lines: {
    edges: {
      node: ShopifyCartLine
    }[]
  }
  totalQuantity: number
}

export interface ShopifyCartLine {
  id: string
  quantity: number
  cost: {
    totalAmount: ShopifyMoney
  }
  merchandise: ShopifyProductVariant
}

export interface ShopifyCartInput {
  merchandiseId: string
  quantity: number
}

// Local types for easier handling
export interface Product {
  id: string
  handle: string
  title: string
  description: string
  descriptionHtml: string
  availableForSale: boolean
  tags: string[]
  productType: string
  vendor: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  images: ShopifyImage[]
  variants: ProductVariant[]
  priceRange: {
    minVariantPrice: ShopifyMoney
    maxVariantPrice: ShopifyMoney
  }
  compareAtPriceRange: {
    minVariantPrice: ShopifyMoney
    maxVariantPrice: ShopifyMoney
  }
  seo: {
    title: string | null
    description: string | null
  }
  metafields: Record<string, string>
}

export interface ProductVariant {
  id: string
  title: string
  availableForSale: boolean
  selectedOptions: {
    name: string
    value: string
  }[]
  price: ShopifyMoney
  compareAtPrice?: ShopifyMoney
  image?: ShopifyImage
  quantityAvailable?: number
  product?: {
    id: string
    handle: string
    title: string
  }
}

export interface Collection {
  id: string
  handle: string
  title: string
  description: string
  descriptionHtml: string
  image?: ShopifyImage
  products: Product[]
  seo: {
    title: string | null
    description: string | null
  }
}

export interface Cart {
  id: string
  checkoutUrl: string
  cost: {
    totalAmount: ShopifyMoney
    subtotalAmount: ShopifyMoney
    totalTaxAmount?: ShopifyMoney
    totalDutyAmount?: ShopifyMoney
  }
  lines: CartLine[]
  totalQuantity: number
}

export interface CartLine {
  id: string
  quantity: number
  cost: {
    totalAmount: ShopifyMoney
  }
  merchandise: ProductVariant
}

export interface CartInput {
  merchandiseId: string
  quantity: number
}

// Filter and sorting types
export interface ProductFilters {
  available?: boolean
  productType?: string
  vendor?: string
  tag?: string
  priceMin?: number
  priceMax?: number
}

export interface ProductSortKeys {
  BEST_SELLING: 'BEST_SELLING'
  CREATED_AT: 'CREATED_AT'
  ID: 'ID'
  PRICE: 'PRICE'
  PRODUCT_TYPE: 'PRODUCT_TYPE'
  RELEVANCE: 'RELEVANCE'
  TITLE: 'TITLE'
  UPDATED_AT: 'UPDATED_AT'
  VENDOR: 'VENDOR'
}

export type SortKey = keyof ProductSortKeys
export type SortDirection = 'ASC' | 'DESC'
