import { Metadata } from 'next'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'
import { placeholderImage } from '@/lib/images'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Cooking Guides - Happyland Ranch Meat Co.',
  description: 'Expert cooking guides and techniques for preparing our premium ranch-raised beef, pork, and chicken.',
  keywords: ['cooking guides', 'beef cooking', 'grilling tips', 'meat preparation', 'cooking techniques']
})

const cookingGuides = [
  {
    id: 'perfect-steak',
    title: 'The Perfect Steak: Temperature & Timing Guide',
    description: 'Master the art of cooking the perfect steak every time with our comprehensive temperature and timing guide.',
    image: placeholderImage('Perfect grilled steak with grill marks', 400, 300),
    readTime: '5 min read',
    difficulty: 'Beginner',
    tags: ['Beef', 'Grilling', 'Steak']
  },
  {
    id: 'slow-roast-beef',
    title: 'Slow-Roasted Beef: Low & Slow Perfection',
    description: 'Learn how to achieve tender, flavorful roasts using the low and slow method.',
    image: placeholderImage('Slow-roasted beef roast sliced', 400, 300),
    readTime: '8 min read',
    difficulty: 'Intermediate',
    tags: ['Beef', 'Roasting', 'Oven']
  },
  {
    id: 'pork-chops',
    title: 'Juicy Pork Chops: Pan-Seared to Perfection',
    description: 'Discover the secrets to cooking juicy, flavorful pork chops that never dry out.',
    image: placeholderImage('Golden pan-seared pork chops', 400, 300),
    readTime: '6 min read',
    difficulty: 'Beginner',
    tags: ['Pork', 'Pan-Searing', 'Stovetop']
  },
  {
    id: 'whole-chicken',
    title: 'Roasting a Whole Chicken: Crispy Skin, Juicy Meat',
    description: 'Step-by-step guide to roasting a whole chicken with perfectly crispy skin.',
    image: placeholderImage('Golden roasted whole chicken', 400, 300),
    readTime: '10 min read',
    difficulty: 'Intermediate',
    tags: ['Chicken', 'Roasting', 'Whole Bird']
  },
  {
    id: 'ground-beef',
    title: 'Ground Beef Basics: Burgers, Meatballs & More',
    description: 'Essential techniques for cooking with ground beef, from burgers to meatballs.',
    image: placeholderImage('Homemade beef burgers on grill', 400, 300),
    readTime: '7 min read',
    difficulty: 'Beginner',
    tags: ['Beef', 'Ground Meat', 'Versatile']
  },
  {
    id: 'smoking-basics',
    title: 'Smoking Meat: A Beginner\'s Guide',
    description: 'Get started with smoking meat using our beginner-friendly guide and tips.',
    image: placeholderImage('Meat smoking on outdoor smoker', 400, 300),
    readTime: '12 min read',
    difficulty: 'Advanced',
    tags: ['Smoking', 'BBQ', 'Outdoor Cooking']
  }
]

export default function CookingGuidesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-brand-forest text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">Cooking Guides</h1>
            <p className="body-large text-brand-cream">
              Master the art of cooking our premium ranch-raised meats with expert guides, 
              techniques, and tips from our kitchen to yours.
            </p>
          </div>
        </div>
      </div>

      {/* Cooking Tips Banner */}
      <div className="bg-accent-clay text-white py-8">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">🔥 Pro Tip</h2>
            <p className="text-lg">
              Always let your meat rest at room temperature for 30 minutes before cooking for even results!
            </p>
          </div>
        </div>
      </div>

      {/* Guides Grid */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cookingGuides.map((guide) => (
              <article key={guide.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={guide.image.src}
                    alt={guide.image.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full px-3 py-1 text-sm font-medium text-ink">
                    {guide.difficulty}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span>{guide.readTime}</span>
                    <span>•</span>
                    <div className="flex gap-2">
                      {guide.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="bg-gray-100 px-2 py-1 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-brand-forest mb-3 line-clamp-2">
                    {guide.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {guide.description}
                  </p>
                  
                  <Link
                    href={`/blog/cooking-guides/${guide.id}`}
                    className="inline-flex items-center text-accent-clay font-medium hover:text-accent-gold transition-colors duration-200"
                  >
                    Read Guide
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Recipe Section */}
      <div className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-2 mb-6">Featured Recipe</h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 relative aspect-[4/3]">
                  <Image
                    src={placeholderImage('Smoky garlic ribeye steak', 500, 400).src}
                    alt="Featured recipe: Smoky Garlic Ribeye"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <h3 className="text-2xl font-bold text-brand-forest mb-4">
                    Smoky Garlic Ribeye
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Our signature ribeye recipe featuring a smoky garlic rub and perfect 
                    searing technique. This restaurant-quality steak is easier to make 
                    than you think!
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <span>⏱️ 25 min</span>
                    <span>👨‍🍳 Intermediate</span>
                    <span>🔥 Grilling</span>
                  </div>
                  <Link
                    href="/recipes/smoky-garlic-ribeye"
                    className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-accent-clay text-white hover:bg-opacity-90 focus:ring-accent-clay h-12 px-6 text-base"
                  >
                    View Recipe
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-brand-forest text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="heading-3 mb-6">Ready to Start Cooking?</h2>
          <p className="body-large text-brand-cream mb-8 max-w-2xl mx-auto">
            Get the premium ingredients you need to make these recipes shine. 
            Shop our selection of ranch-raised meats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-accent-clay text-white hover:bg-opacity-90 focus:ring-accent-clay h-12 px-8 text-base"
            >
              Shop Premium Meats
            </Link>
            <Link
              href="/recipes"
              className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-transparent text-white border-2 border-white hover:bg-white hover:text-brand-forest focus:ring-white h-12 px-8 text-base"
            >
              Browse All Recipes
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
