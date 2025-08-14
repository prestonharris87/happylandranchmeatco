import { MetadataRoute } from 'next'
import { getProducts, getCollections } from '@/lib/shopify'
import { siteConfig } from '@/config/site'
import { generateSitemapEntries } from '@/lib/seo'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Get static pages
  const staticPages = generateSitemapEntries()

  // Get dynamic product pages
  const products = await getProducts(1000) // Get all products
  const productPages = products.map(product => ({
    url: `${siteConfig.url}/shop/products/${product.handle}`,
    lastModified: new Date(product.updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Get dynamic collection pages
  const collections = await getCollections(50)
  const collectionPages = collections.map(collection => ({
    url: `${siteConfig.url}/shop/collections/${collection.handle}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }))

  // Combine all pages
  return [
    ...staticPages,
    ...productPages,
    ...collectionPages,
  ]
}
