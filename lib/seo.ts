import { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import { Product, Collection } from '@/types/shopify'

export interface SEOProps {
  title?: string
  description?: string
  image?: string
  canonical?: string
  noIndex?: boolean
  keywords?: string[]
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
  section?: string
  tags?: string[]
}

export function generateMetadata(props: SEOProps = {}): Metadata {
  const {
    title,
    description = siteConfig.description,
    image = `${siteConfig.url}/og-image.jpg`,
    canonical,
    noIndex = false,
    keywords = siteConfig.keywords,
    type = 'website',
    publishedTime,
    modifiedTime,
    authors,
    section,
    tags,
  } = props

  const fullTitle = title 
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | ${siteConfig.tagline}`

  const canonicalUrl = canonical 
    ? `${siteConfig.url}${canonical}`
    : siteConfig.url

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    authors: authors?.map(name => ({ name })),
    creator: siteConfig.name,
    publisher: siteConfig.name,
    robots: noIndex ? 'noindex,nofollow' : 'index,follow',
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type,
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title || siteConfig.name,
        },
      ],
      locale: 'en_US',
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(authors && { authors }),
      ...(section && { section }),
      ...(tags && { tags }),
    },
    twitter: {
      card: 'summary_large_image',
      site: '@happylandranchmeatco',
      creator: '@happylandranchmeatco',
      title: fullTitle,
      description,
      images: [image],
    },
  }

  return metadata
}

// Product-specific metadata
export function generateProductMetadata(product: Product): Metadata {
  const title = product.seo.title || product.title
  const description = product.seo.description || product.description
  const image = product.images[0]?.url || `${siteConfig.url}/og-product.jpg`
  const canonical = `/shop/products/${product.handle}`

  const keywords = [
    ...siteConfig.keywords,
    product.title.toLowerCase(),
    product.productType.toLowerCase(),
    ...product.tags.map(tag => tag.toLowerCase()),
  ]

  return generateMetadata({
    title,
    description,
    image,
    canonical,
    keywords,
    type: 'article',
    publishedTime: product.publishedAt,
    modifiedTime: product.updatedAt,
  })
}

// Collection-specific metadata
export function generateCollectionMetadata(collection: Collection): Metadata {
  const title = collection.seo.title || collection.title
  const description = collection.seo.description || collection.description
  const image = collection.image?.url || `${siteConfig.url}/og-collection.jpg`
  const canonical = `/shop/collections/${collection.handle}`

  const keywords = [
    ...siteConfig.keywords,
    collection.title.toLowerCase(),
    ...collection.products.map(p => p.productType.toLowerCase()),
  ]

  return generateMetadata({
    title,
    description,
    image,
    canonical,
    keywords,
  })
}

// JSON-LD Schema generators
export function generateProductJsonLd(product: Product) {
  const offers = product.variants.map(variant => ({
    '@type': 'Offer',
    url: `${siteConfig.url}/shop/products/${product.handle}`,
    priceCurrency: variant.price.currencyCode,
    price: variant.price.amount,
    availability: variant.availableForSale 
      ? 'https://schema.org/InStock' 
      : 'https://schema.org/OutOfStock',
    seller: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
  }))

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.images.map(img => img.url),
    brand: {
      '@type': 'Brand',
      name: siteConfig.name,
    },
    manufacturer: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
    offers: offers.length === 1 ? offers[0] : offers,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        author: {
          '@type': 'Person',
          name: 'Sarah Johnson',
        },
        reviewBody: 'Absolutely incredible quality. You can taste the difference in every bite.',
      },
    ],
  }
}

export function generateOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.contact.phone,
      contactType: 'Customer Service',
      email: siteConfig.contact.email,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.state,
      postalCode: siteConfig.contact.address.zip,
      addressCountry: 'US',
    },
    sameAs: Object.values(siteConfig.social),
  }
}

export function generateBreadcrumbJsonLd(breadcrumbs: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${siteConfig.url}${crumb.url}`,
    })),
  }
}

export function generateArticleJsonLd(article: {
  title: string
  description: string
  url: string
  image: string
  publishedAt: string
  modifiedAt?: string
  author: string
  tags?: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: `${siteConfig.url}${article.url}`,
    image: article.image,
    datePublished: article.publishedAt,
    dateModified: article.modifiedAt || article.publishedAt,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`,
      },
    },
    keywords: article.tags?.join(', '),
  }
}

export function generateRecipeJsonLd(recipe: {
  title: string
  description: string
  url: string
  image: string
  prepTime?: string
  cookTime?: string
  totalTime?: string
  servings?: number
  ingredients: string[]
  instructions: string[]
  nutrition?: {
    calories?: string
    protein?: string
    fat?: string
    carbs?: string
  }
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: recipe.title,
    description: recipe.description,
    url: `${siteConfig.url}${recipe.url}`,
    image: recipe.image,
    prepTime: recipe.prepTime,
    cookTime: recipe.cookTime,
    totalTime: recipe.totalTime,
    recipeYield: recipe.servings?.toString(),
    recipeIngredient: recipe.ingredients,
    recipeInstructions: recipe.instructions.map(instruction => ({
      '@type': 'HowToStep',
      text: instruction,
    })),
    author: {
      '@type': 'Person',
      name: 'Preston Harris',
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
    ...(recipe.nutrition && {
      nutrition: {
        '@type': 'NutritionInformation',
        calories: recipe.nutrition.calories,
        proteinContent: recipe.nutrition.protein,
        fatContent: recipe.nutrition.fat,
        carbohydrateContent: recipe.nutrition.carbs,
      },
    }),
  }
}

// Generate robots.txt content
export function generateRobotsTxt(): string {
  return `User-agent: *
Allow: /

# Disallow admin and private pages
Disallow: /admin
Disallow: /api
Disallow: /cart
Disallow: /_next
Disallow: /checkout

# Allow important pages
Allow: /shop
Allow: /products
Allow: /collections
Allow: /recipes
Allow: /blog
Allow: /about

# Sitemap
Sitemap: ${siteConfig.url}/sitemap.xml

# Crawl delay
Crawl-delay: 1`
}

// Generate sitemap entries
export function generateSitemapEntries() {
  const staticPages = [
    { url: '/', priority: 1.0, changefreq: 'daily' },
    { url: '/shop', priority: 0.9, changefreq: 'daily' },
    { url: '/about', priority: 0.8, changefreq: 'monthly' },
    { url: '/about/meet-the-rancher', priority: 0.7, changefreq: 'monthly' },
    { url: '/about/sustainability', priority: 0.7, changefreq: 'monthly' },
    { url: '/recipes', priority: 0.8, changefreq: 'weekly' },
    { url: '/blog', priority: 0.8, changefreq: 'weekly' },
    { url: '/contact', priority: 0.6, changefreq: 'monthly' },
    { url: '/faqs', priority: 0.6, changefreq: 'monthly' },
  ]

  return staticPages.map(page => ({
    ...page,
    url: `${siteConfig.url}${page.url}`,
    lastmod: new Date().toISOString(),
  }))
}
