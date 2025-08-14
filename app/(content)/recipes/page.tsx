import { Metadata } from 'next'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'
import { placeholderImage } from '@/lib/images'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Ranch Recipes & Cooking Guides - Happyland Ranch Meat Co.',
  description: 'Discover delicious recipes and cooking tips for our premium grass-fed beef, pasture-raised pork, and free-range chicken.',
  keywords: ['beef recipes', 'pork recipes', 'chicken recipes', 'ranch cooking', 'grass-fed beef cooking']
})

const recipeCategories = [
  {
    id: 'beef',
    title: 'Beef Recipes',
    description: 'From perfectly grilled steaks to slow-braised roasts',
    image: placeholderImage('Grilled grass-fed beef steak', 400, 300),
    count: 12
  },
  {
    id: 'pork',
    title: 'Pork Recipes', 
    description: 'Heritage pork chops, ribs, and roasts',
    image: placeholderImage('Pork chops with herbs', 400, 300),
    count: 8
  },
  {
    id: 'chicken',
    title: 'Chicken Recipes',
    description: 'Pasture-raised chicken prepared to perfection',
    image: placeholderImage('Roasted chicken with vegetables', 400, 300),
    count: 10
  },
  {
    id: 'seasonal',
    title: 'Seasonal Favorites',
    description: 'Holiday and seasonal recipe collections',
    image: placeholderImage('Holiday feast with various meats', 400, 300),
    count: 6
  }
]

const featuredRecipes = [
  {
    title: 'Perfect Grass-Fed Ribeye',
    description: 'Learn the secrets to cooking the perfect ribeye steak with our grass-fed beef.',
    image: placeholderImage('Perfectly cooked ribeye steak', 300, 200),
    cookTime: '15 min',
    difficulty: 'Easy',
    category: 'beef'
  },
  {
    title: 'Herb-Crusted Pork Tenderloin',
    description: 'A elegant dinner featuring our tender, pasture-raised pork.',
    image: placeholderImage('Herb-crusted pork tenderloin', 300, 200),
    cookTime: '45 min',
    difficulty: 'Medium',
    category: 'pork'
  },
  {
    title: 'Classic Roast Chicken',
    description: 'Simple, wholesome roast chicken that brings out the natural flavors.',
    image: placeholderImage('Golden roast chicken', 300, 200),
    cookTime: '1 hour',
    difficulty: 'Easy',
    category: 'chicken'
  }
]

export default function RecipesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-brand-forest text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">Ranch Recipes & Cooking Guides</h1>
            <p className="body-large text-brand-cream">
              Cook like a rancher with our collection of pasture-raised meat recipes. 
              Each recipe is designed to highlight the natural flavor of our beef, pork, and chicken.
            </p>
          </div>
        </div>
      </div>

      {/* Recipe Categories */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Recipe Collections</h2>
            <p className="body-large text-gray-600">
              Browse our recipes by protein or discover seasonal favorites
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {recipeCategories.map((category) => (
              <div key={category.id} className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 mb-4">
                  <Image
                    src={category.image.src}
                    alt={category.image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300" />
                  
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="bg-accent-clay text-white text-sm px-2 py-1 rounded mb-2">
                      {category.count} recipes
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-ink mb-2 group-hover:text-brand-forest transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-600">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Recipes */}
      <div className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Featured Recipes</h2>
            <p className="body-large text-gray-600">
              Try these customer favorites to get started
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredRecipes.map((recipe, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={recipe.image.src}
                    alt={recipe.image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span>🕒 {recipe.cookTime}</span>
                    <span>👨‍🍳 {recipe.difficulty}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-ink mb-3">
                    {recipe.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {recipe.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-accent-clay font-medium uppercase tracking-wide">
                      {recipe.category}
                    </span>
                    <button className="text-brand-forest font-medium hover:text-accent-clay transition-colors">
                      View Recipe →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="text-center bg-brand-forest text-white rounded-lg p-12">
            <h2 className="heading-3 mb-4">Ready to Cook?</h2>
            <p className="body-large text-brand-cream mb-8 max-w-2xl mx-auto">
              Get the premium cuts you need for these recipes delivered fresh to your door.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-accent-clay text-white hover:bg-opacity-90 focus:ring-accent-clay h-14 px-8 text-lg"
            >
              Shop Our Meat
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
