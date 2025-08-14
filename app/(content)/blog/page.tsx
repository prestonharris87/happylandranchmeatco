import { Metadata } from 'next'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'
import { placeholderImage } from '@/lib/images'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Ranch Life Blog - Happyland Ranch Meat Co.',
  description: 'Stories from the ranch, cooking tips, sustainability practices, and everything about raising premium grass-fed beef.',
  keywords: ['ranch blog', 'grass-fed beef', 'sustainable farming', 'ranch life', 'meat cooking tips']
})

const blogPosts = [
  {
    title: 'The Art of Grass-Fed Beef: Why It Matters',
    excerpt: 'Discover the difference between grass-fed and grain-fed beef, and why we choose to raise our cattle on pasture.',
    image: placeholderImage('Cattle grazing in green pasture', 400, 250),
    date: '2024-01-15',
    category: 'Sustainability',
    readTime: '5 min read'
  },
  {
    title: 'Seasonal Cooking: Winter Comfort Foods',
    excerpt: 'Warm up your winter with hearty stews, braised roasts, and slow-cooked meals using our premium cuts.',
    image: placeholderImage('Winter beef stew in pot', 400, 250),
    date: '2024-01-10',
    category: 'Cooking',
    readTime: '7 min read'
  },
  {
    title: 'Behind the Scenes: A Day in Ranch Life',
    excerpt: 'Follow along as we take you through a typical day caring for our animals and maintaining our oak savanna.',
    image: placeholderImage('Rancher working with cattle at sunrise', 400, 250),
    date: '2024-01-05',
    category: 'Ranch Life',
    readTime: '4 min read'
  },
  {
    title: 'The Perfect Steak: Temperature Guide',
    excerpt: 'Master the art of cooking steak with our comprehensive guide to temperatures, timing, and techniques.',
    image: placeholderImage('Perfect medium-rare steak on cutting board', 400, 250),
    date: '2023-12-28',
    category: 'Cooking',
    readTime: '6 min read'
  },
  {
    title: 'Regenerative Agriculture: Healing the Land',
    excerpt: 'Learn about our regenerative farming practices and how we\'re working to restore our oak savanna ecosystem.',
    image: placeholderImage('Healthy grassland with diverse plants', 400, 250),
    date: '2023-12-20',
    category: 'Sustainability',
    readTime: '8 min read'
  },
  {
    title: 'Holiday Feast Planning Guide',
    excerpt: 'Plan the perfect holiday meal with our guide to cuts, quantities, and cooking times for your celebration.',
    image: placeholderImage('Holiday table with roast and sides', 400, 250),
    date: '2023-12-15',
    category: 'Cooking',
    readTime: '5 min read'
  }
]

const categories = ['All', 'Cooking', 'Ranch Life', 'Sustainability']

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-brand-forest text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">Ranch Life Blog</h1>
            <p className="body-large text-brand-cream">
              Stories from the ranch, cooking wisdom, and insights into sustainable farming. 
              Join us as we share our journey of raising premium, pasture-raised meat.
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="section-padding border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  category === 'All'
                    ? 'bg-brand-forest text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Post */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="bg-gray-50 rounded-lg overflow-hidden mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative aspect-[4/3] lg:aspect-auto">
                <Image
                  src={blogPosts[0].image.src}
                  alt={blogPosts[0].image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="bg-accent-clay text-white px-3 py-1 rounded-full text-xs font-medium">
                    FEATURED
                  </span>
                  <span>{blogPosts[0].category}</span>
                  <span>•</span>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                
                <h2 className="heading-2 mb-4 text-ink">
                  {blogPosts[0].title}
                </h2>
                <p className="body-large text-gray-600 mb-6">
                  {blogPosts[0].excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {new Date(blogPosts[0].date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <button className="text-brand-forest font-medium hover:text-accent-clay transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={post.image.src}
                    alt={post.image.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="text-accent-clay font-medium">{post.category}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-ink mb-3 hover:text-brand-forest transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                    <button className="text-brand-forest font-medium hover:text-accent-clay transition-colors">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-transparent text-brand-forest border-2 border-brand-forest hover:bg-brand-forest hover:text-white focus:ring-brand-forest h-12 px-8 text-base">
              Load More Posts
            </button>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="heading-3 mb-4">Stay Connected</h2>
            <p className="body-large text-gray-600 mb-8">
              Get the latest ranch updates, recipes, and cooking tips delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-forest focus:border-transparent"
              />
              <button className="h-12 px-6 bg-brand-forest text-white rounded-md hover:bg-opacity-90 transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
