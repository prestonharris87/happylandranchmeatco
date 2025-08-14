import { Metadata } from 'next'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'
import { placeholderImage } from '@/lib/images'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Smoky Garlic Ribeye Recipe - Happyland Ranch Meat Co.',
  description: 'Learn to cook the perfect smoky garlic ribeye steak with our premium grass-fed beef. A restaurant-quality recipe made simple.',
  keywords: ['ribeye recipe', 'garlic steak', 'grass-fed beef', 'grilling recipe', 'steak cooking']
})

const recipe = {
  title: 'Smoky Garlic Ribeye',
  description: 'Our signature ribeye recipe featuring a smoky garlic rub and perfect searing technique. This restaurant-quality steak is easier to make than you think!',
  image: placeholderImage('Perfectly grilled ribeye steak with garlic and herbs', 800, 600),
  prepTime: '15 minutes',
  cookTime: '10 minutes',
  totalTime: '25 minutes',
  servings: 2,
  difficulty: 'Intermediate',
  category: 'Beef'
}

const ingredients = [
  {
    category: 'For the Steaks',
    items: [
      '2 Happyland Ranch grass-fed ribeye steaks (1-1.5 inches thick)',
      '2 tablespoons olive oil',
      '1 teaspoon kosher salt',
      '1/2 teaspoon black pepper'
    ]
  },
  {
    category: 'For the Smoky Garlic Rub',
    items: [
      '4 cloves garlic, minced',
      '2 tablespoons smoked paprika',
      '1 tablespoon brown sugar',
      '1 teaspoon garlic powder',
      '1 teaspoon onion powder',
      '1/2 teaspoon chipotle chili powder',
      '1/2 teaspoon dried thyme',
      '1/4 teaspoon cayenne pepper'
    ]
  },
  {
    category: 'For Finishing',
    items: [
      '2 tablespoons butter',
      '2 sprigs fresh thyme',
      '2 cloves garlic, crushed',
      'Flaky sea salt for serving'
    ]
  }
]

const instructions = [
  {
    step: 1,
    title: 'Prepare the Rub',
    instruction: 'In a small bowl, combine minced garlic, smoked paprika, brown sugar, garlic powder, onion powder, chipotle chili powder, dried thyme, and cayenne pepper. Mix well to create an even rub.',
    time: '5 minutes'
  },
  {
    step: 2,
    title: 'Season the Steaks',
    instruction: 'Remove steaks from refrigerator 30 minutes before cooking to bring to room temperature. Pat steaks dry with paper towels. Brush both sides with olive oil, then season generously with salt and pepper.',
    time: '2 minutes'
  },
  {
    step: 3,
    title: 'Apply the Rub',
    instruction: 'Generously coat both sides of the steaks with the smoky garlic rub, pressing gently to help it adhere. Let steaks rest for 10 minutes to absorb the flavors.',
    time: '10 minutes'
  },
  {
    step: 4,
    title: 'Preheat the Grill',
    instruction: 'Preheat your grill to high heat (450-500°F). If using a cast iron pan, heat it over medium-high heat until smoking. Clean and oil the grates.',
    time: '5 minutes'
  },
  {
    step: 5,
    title: 'Sear the Steaks',
    instruction: 'Place steaks on the hottest part of the grill. Sear for 3-4 minutes without moving them to develop a beautiful crust. Flip and sear the other side for 3-4 minutes.',
    time: '6-8 minutes'
  },
  {
    step: 6,
    title: 'Finish with Butter',
    instruction: 'Move steaks to a cooler part of the grill or reduce heat. Add butter, thyme, and crushed garlic to the pan. Tilt pan and baste steaks with the aromatic butter for 1-2 minutes.',
    time: '2 minutes'
  },
  {
    step: 7,
    title: 'Rest and Serve',
    instruction: 'Remove steaks from heat and let rest for 5 minutes. This allows juices to redistribute. Finish with flaky sea salt and serve immediately.',
    time: '5 minutes'
  }
]

const tips = [
  {
    title: 'Choose the Right Cut',
    tip: 'Look for ribeye steaks that are at least 1 inch thick with good marbling. Our grass-fed ribeyes have excellent flavor and tenderness.'
  },
  {
    title: 'Temperature Guide',
    tip: 'Use a meat thermometer: 125°F for rare, 135°F for medium-rare, 145°F for medium. Remember, the steak will continue cooking while resting.'
  },
  {
    title: 'Don\'t Skip the Rest',
    tip: 'Resting is crucial! It allows the muscle fibers to relax and juices to redistribute, resulting in a more tender, juicy steak.'
  },
  {
    title: 'Make it Your Own',
    tip: 'Try different wood chips for smoking flavor, or substitute the chipotle with regular chili powder for less heat.'
  }
]

export default function SmokyGarlicRibeyePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <Image
          src={recipe.image.src}
          alt={recipe.image.alt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="heading-1 mb-4">{recipe.title}</h1>
            <p className="body-large text-brand-cream max-w-2xl">
              {recipe.description}
            </p>
          </div>
        </div>
      </div>

      {/* Recipe Info */}
      <div className="section-padding">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Recipe Details */}
            <div className="lg:col-span-2">
              {/* Quick Info */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-brand-forest">{recipe.prepTime}</div>
                    <div className="text-sm text-gray-600">Prep Time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-brand-forest">{recipe.cookTime}</div>
                    <div className="text-sm text-gray-600">Cook Time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-brand-forest">{recipe.servings}</div>
                    <div className="text-sm text-gray-600">Servings</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-brand-forest">{recipe.difficulty}</div>
                    <div className="text-sm text-gray-600">Difficulty</div>
                  </div>
                </div>
              </div>

              {/* Ingredients */}
              <div className="mb-12">
                <h2 className="heading-2 mb-6">Ingredients</h2>
                <div className="space-y-6">
                  {ingredients.map((category, index) => (
                    <div key={index}>
                      <h3 className="text-xl font-semibold text-brand-forest mb-3">{category.category}</h3>
                      <ul className="space-y-2">
                        {category.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3">
                            <span className="text-accent-clay mt-1">•</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Instructions */}
              <div className="mb-12">
                <h2 className="heading-2 mb-6">Instructions</h2>
                <div className="space-y-6">
                  {instructions.map((instruction, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-10 h-10 bg-brand-forest rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                        {instruction.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-brand-forest mb-2">
                          {instruction.title}
                          <span className="text-sm text-gray-500 ml-2">({instruction.time})</span>
                        </h3>
                        <p className="text-gray-700 leading-relaxed">{instruction.instruction}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Pro Tips */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-brand-forest mb-4">Pro Tips</h3>
                <div className="space-y-4">
                  {tips.map((tip, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-ink mb-1">{tip.title}</h4>
                      <p className="text-gray-600 text-sm">{tip.tip}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shop Ingredients */}
              <div className="bg-brand-forest text-white rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Get the Best Ingredients</h3>
                <p className="text-brand-cream mb-4">
                  This recipe is designed for our premium grass-fed ribeye steaks. 
                  The superior marbling and flavor make all the difference.
                </p>
                <Link
                  href="/shop/products/grass-fed-ribeye"
                  className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-accent-clay text-white hover:bg-opacity-90 focus:ring-accent-clay h-10 px-4 text-sm w-full"
                >
                  Shop Ribeye Steaks
                </Link>
              </div>

              {/* Nutritional Info */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-brand-forest mb-4">Nutritional Benefits</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• High in protein (35g per serving)</li>
                  <li>• Rich in iron and B-vitamins</li>
                  <li>• Grass-fed beef contains omega-3s</li>
                  <li>• No antibiotics or hormones</li>
                  <li>• Sustainably raised on pasture</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Related Recipes */}
          <div className="mt-16">
            <h2 className="heading-2 mb-8 text-center">More Beef Recipes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={placeholderImage('Perfect grilled beef burger', 400, 300).src}
                    alt="Perfect Ranch Burger"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-brand-forest mb-2">Perfect Ranch Burger</h3>
                  <p className="text-gray-600 text-sm mb-4">Our signature burger with grass-fed ground beef</p>
                  <Link href="/recipes/perfect-ranch-burger" className="text-accent-clay hover:text-accent-gold font-medium">
                    View Recipe →
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={placeholderImage('Slow-braised beef roast', 400, 300).src}
                    alt="Sunday Pot Roast"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-brand-forest mb-2">Sunday Pot Roast</h3>
                  <p className="text-gray-600 text-sm mb-4">Classic comfort food with our tender chuck roast</p>
                  <Link href="/recipes/sunday-pot-roast" className="text-accent-clay hover:text-accent-gold font-medium">
                    View Recipe →
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={placeholderImage('Beef stir-fry with vegetables', 400, 300).src}
                    alt="Quick Beef Stir-Fry"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-brand-forest mb-2">Quick Beef Stir-Fry</h3>
                  <p className="text-gray-600 text-sm mb-4">Weeknight dinner with sirloin strips</p>
                  <Link href="/recipes/quick-beef-stir-fry" className="text-accent-clay hover:text-accent-gold font-medium">
                    View Recipe →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
