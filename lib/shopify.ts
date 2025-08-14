import { GraphQLClient } from 'graphql-request'
import { 
  ShopifyProduct, 
  ShopifyCollection, 
  ShopifyCart, 
  Product, 
  Collection, 
  Cart, 
  CartInput,
  ProductFilters,
  SortKey,
  SortDirection 
} from '@/types/shopify'

// Initialize GraphQL client with environment variable checks
const getShopifyConfig = () => {
  const storeDomain = process.env.SHOPIFY_STORE_DOMAIN || process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN
  const apiVersion = process.env.SHOPIFY_API_VERSION || process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION || '2024-07'
  const accessToken = process.env.SHOPIFY_STOREFRONT_API_TOKEN || process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN

  if (!storeDomain || !accessToken) {
    throw new Error('Missing Shopify configuration. Please check your environment variables.')
  }

  return { storeDomain, apiVersion, accessToken }
}

let client: GraphQLClient | null = null

const getClient = () => {
  if (!client) {
    try {
      const { storeDomain, apiVersion, accessToken } = getShopifyConfig()
      const endpoint = `https://${storeDomain}/api/${apiVersion}/graphql.json`
      
      client = new GraphQLClient(endpoint, {
        headers: {
          'X-Shopify-Storefront-Access-Token': accessToken,
          'Content-Type': 'application/json',
        },
      })
    } catch (error) {
      console.error('Shopify client initialization failed:', error)
      throw error
    }
  }
  return client
}

// GraphQL Fragments
const PRODUCT_FRAGMENT = `
  fragment ProductFragment on Product {
    id
    handle
    title
    description
    descriptionHtml
    availableForSale
    tags
    productType
    vendor
    createdAt
    updatedAt
    publishedAt
    images(first: 10) {
      edges {
        node {
          id
          url
          altText
          width
          height
        }
      }
    }
    variants(first: 100) {
      edges {
        node {
          id
          title
          availableForSale
          selectedOptions {
            name
            value
          }
          price {
            amount
            currencyCode
          }
          compareAtPrice {
            amount
            currencyCode
          }
          image {
            id
            url
            altText
            width
            height
          }
          quantityAvailable
        }
      }
    }
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
      maxVariantPrice {
        amount
        currencyCode
      }
    }
    compareAtPriceRange {
      minVariantPrice {
        amount
        currencyCode
      }
      maxVariantPrice {
        amount
        currencyCode
      }
    }
    seo {
      title
      description
    }
    metafields(identifiers: [
      {namespace: "custom", key: "species"},
      {namespace: "custom", key: "cut"},
      {namespace: "custom", key: "practice"},
      {namespace: "custom", key: "thawing_notes"},
      {namespace: "custom", key: "cooking_notes"}
    ]) {
      edges {
        node {
          id
          key
          value
          namespace
        }
      }
    }
  }
`

const COLLECTION_FRAGMENT = `
  fragment CollectionFragment on Collection {
    id
    handle
    title
    description
    descriptionHtml
    image {
      id
      url
      altText
      width
      height
    }
    seo {
      title
      description
    }
  }
`

const CART_FRAGMENT = `
  fragment CartFragment on Cart {
    id
    checkoutUrl
    cost {
      totalAmount {
        amount
        currencyCode
      }
      subtotalAmount {
        amount
        currencyCode
      }
      totalTaxAmount {
        amount
        currencyCode
      }
      totalDutyAmount {
        amount
        currencyCode
      }
    }
    lines(first: 100) {
      edges {
        node {
          id
          quantity
          cost {
            totalAmount {
              amount
              currencyCode
            }
          }
          merchandise {
            ... on ProductVariant {
              id
              title
              availableForSale
              selectedOptions {
                name
                value
              }
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
              image {
                id
                url
                altText
                width
                height
              }
              product {
                id
                handle
                title
              }
            }
          }
        }
      }
    }
    totalQuantity
  }
`

// Utility functions to transform Shopify data
function transformProduct(shopifyProduct: ShopifyProduct): Product {
  const metafields: Record<string, string> = {}
  shopifyProduct.metafields.edges.forEach(({ node }) => {
    metafields[node.key] = node.value
  })

  return {
    id: shopifyProduct.id,
    handle: shopifyProduct.handle,
    title: shopifyProduct.title,
    description: shopifyProduct.description,
    descriptionHtml: shopifyProduct.descriptionHtml,
    availableForSale: shopifyProduct.availableForSale,
    tags: shopifyProduct.tags,
    productType: shopifyProduct.productType,
    vendor: shopifyProduct.vendor,
    createdAt: shopifyProduct.createdAt,
    updatedAt: shopifyProduct.updatedAt,
    publishedAt: shopifyProduct.publishedAt,
    images: shopifyProduct.images.edges.map(({ node }) => node),
    variants: shopifyProduct.variants.edges.map(({ node }) => node),
    priceRange: shopifyProduct.priceRange,
    compareAtPriceRange: shopifyProduct.compareAtPriceRange,
    seo: shopifyProduct.seo,
    metafields,
  }
}

function transformCollection(shopifyCollection: ShopifyCollection): Collection {
  return {
    id: shopifyCollection.id,
    handle: shopifyCollection.handle,
    title: shopifyCollection.title,
    description: shopifyCollection.description,
    descriptionHtml: shopifyCollection.descriptionHtml,
    image: shopifyCollection.image,
    products: shopifyCollection.products.edges.map(({ node }) => transformProduct(node)),
    seo: shopifyCollection.seo,
  }
}

function transformCart(shopifyCart: ShopifyCart): Cart {
  return {
    id: shopifyCart.id,
    checkoutUrl: shopifyCart.checkoutUrl,
    cost: shopifyCart.cost,
    lines: shopifyCart.lines.edges.map(({ node }) => ({
      id: node.id,
      quantity: node.quantity,
      cost: node.cost,
      merchandise: node.merchandise,
    })),
    totalQuantity: shopifyCart.totalQuantity,
  }
}

// API Functions

export async function getProduct(handle: string): Promise<Product | null> {
  const query = `
    query getProduct($handle: String!) {
      product(handle: $handle) {
        ...ProductFragment
      }
    }
    ${PRODUCT_FRAGMENT}
  `

  try {
    const shopifyClient = getClient()
    const data = await shopifyClient.request<{ product: ShopifyProduct | null }>(query, { handle })
    return data.product ? transformProduct(data.product) : null
  } catch (error) {
    console.error('Error fetching product:', error)
    return null
  }
}

export async function getProducts(
  first: number = 20,
  filters?: ProductFilters,
  sortKey: SortKey = 'BEST_SELLING',
  reverse: boolean = false
): Promise<Product[]> {
  let filterQuery = ''
  if (filters) {
    const filterParts = []
    if (filters.available !== undefined) {
      filterParts.push(`available:${filters.available}`)
    }
    if (filters.productType) {
      filterParts.push(`product_type:${filters.productType}`)
    }
    if (filters.vendor) {
      filterParts.push(`vendor:${filters.vendor}`)
    }
    if (filters.tag) {
      filterParts.push(`tag:${filters.tag}`)
    }
    if (filterParts.length > 0) {
      filterQuery = filterParts.join(' AND ')
    }
  }

  const query = `
    query getProducts($first: Int!, $query: String, $sortKey: ProductSortKeys!, $reverse: Boolean!) {
      products(first: $first, query: $query, sortKey: $sortKey, reverse: $reverse) {
        edges {
          node {
            ...ProductFragment
          }
        }
      }
    }
    ${PRODUCT_FRAGMENT}
  `

  try {
    const shopifyClient = getClient()
    const data = await shopifyClient.request<{ products: { edges: { node: ShopifyProduct }[] } }>(query, {
      first,
      query: filterQuery || null,
      sortKey,
      reverse,
    })
    return data.products.edges.map(({ node }) => transformProduct(node))
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}

export async function getCollection(handle: string): Promise<Collection | null> {
  const query = `
    query getCollection($handle: String!) {
      collection(handle: $handle) {
        ...CollectionFragment
        products(first: 100) {
          edges {
            node {
              ...ProductFragment
            }
          }
        }
      }
    }
    ${COLLECTION_FRAGMENT}
    ${PRODUCT_FRAGMENT}
  `

  try {
    const shopifyClient = getClient()
    const data = await shopifyClient.request<{ collection: ShopifyCollection | null }>(query, { handle })
    return data.collection ? transformCollection(data.collection) : null
  } catch (error) {
    console.error('Error fetching collection:', error)
    return null
  }
}

export async function getCollections(first: number = 20): Promise<Collection[]> {
  const query = `
    query getCollections($first: Int!) {
      collections(first: $first) {
        edges {
          node {
            ...CollectionFragment
          }
        }
      }
    }
    ${COLLECTION_FRAGMENT}
  `

  try {
    const shopifyClient = getClient()
    const data = await shopifyClient.request<{ collections: { edges: { node: ShopifyCollection }[] } }>(query, { first })
    return data.collections.edges.map(({ node }) => transformCollection(node))
  } catch (error) {
    console.error('Error fetching collections:', error)
    return []
  }
}

export async function createCart(): Promise<Cart | null> {
  const mutation = `
    mutation cartCreate {
      cartCreate {
        cart {
          ...CartFragment
        }
        userErrors {
          field
          message
        }
      }
    }
    ${CART_FRAGMENT}
  `

  try {
    const shopifyClient = getClient()
    const data = await shopifyClient.request<{ cartCreate: { cart: ShopifyCart | null, userErrors: any[] } }>(mutation)
    return data.cartCreate.cart ? transformCart(data.cartCreate.cart) : null
  } catch (error) {
    console.error('Error creating cart:', error)
    return null
  }
}

export async function getCart(cartId: string): Promise<Cart | null> {
  const query = `
    query getCart($cartId: ID!) {
      cart(id: $cartId) {
        ...CartFragment
      }
    }
    ${CART_FRAGMENT}
  `

  try {
    const shopifyClient = getClient()
    const data = await shopifyClient.request<{ cart: ShopifyCart | null }>(query, { cartId })
    return data.cart ? transformCart(data.cart) : null
  } catch (error) {
    console.error('Error fetching cart:', error)
    return null
  }
}

export async function addToCart(cartId: string, lines: CartInput[]): Promise<Cart | null> {
  const mutation = `
    mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart {
          ...CartFragment
        }
        userErrors {
          field
          message
        }
      }
    }
    ${CART_FRAGMENT}
  `

  try {
    const shopifyClient = getClient()
    const data = await shopifyClient.request<{ cartLinesAdd: { cart: ShopifyCart | null, userErrors: any[] } }>(mutation, {
      cartId,
      lines,
    })
    return data.cartLinesAdd.cart ? transformCart(data.cartLinesAdd.cart) : null
  } catch (error) {
    console.error('Error adding to cart:', error)
    return null
  }
}

export async function updateCartLines(cartId: string, lines: { id: string; quantity: number }[]): Promise<Cart | null> {
  const mutation = `
    mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
      cartLinesUpdate(cartId: $cartId, lines: $lines) {
        cart {
          ...CartFragment
        }
        userErrors {
          field
          message
        }
      }
    }
    ${CART_FRAGMENT}
  `

  try {
    const shopifyClient = getClient()
    const data = await shopifyClient.request<{ cartLinesUpdate: { cart: ShopifyCart | null, userErrors: any[] } }>(mutation, {
      cartId,
      lines,
    })
    return data.cartLinesUpdate.cart ? transformCart(data.cartLinesUpdate.cart) : null
  } catch (error) {
    console.error('Error updating cart:', error)
    return null
  }
}

export async function removeFromCart(cartId: string, lineIds: string[]): Promise<Cart | null> {
  const mutation = `
    mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
      cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
        cart {
          ...CartFragment
        }
        userErrors {
          field
          message
        }
      }
    }
    ${CART_FRAGMENT}
  `

  try {
    const shopifyClient = getClient()
    const data = await shopifyClient.request<{ cartLinesRemove: { cart: ShopifyCart | null, userErrors: any[] } }>(mutation, {
      cartId,
      lineIds,
    })
    return data.cartLinesRemove.cart ? transformCart(data.cartLinesRemove.cart) : null
  } catch (error) {
    console.error('Error removing from cart:', error)
    return null
  }
}
