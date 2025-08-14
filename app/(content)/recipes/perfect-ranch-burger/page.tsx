import { Metadata } from 'next'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'
import { placeholderImage } from '@/lib/images'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Perfect Ranch Burger Recipe - Happyland Ranch Meat Co.',
  description: 'Make the ultimate burger with our grass-fed ground beef. Simple ingredients, perfect technique, maximum flavor.',
  keywords: ['burger recipe', 'grass-fed ground beef', 'hamburger', 'grilling recipe', 'beef burger']
})

const recipe = {
  title: 'Perfect Ranch Burger',
  description: 'Our signature burger recipe featuring premium grass-fed ground beef, simple seasonings, and the perfect cooking technique for juicy, flavorful burgers every time.',
  image: placeholderImage('Perfect grilled beef burger with lettuce and tomato', 800, 600),
  prepTime: '10 minutes',
  cookTime: '8 minutes',
  totalTime: '18 minutes',
  servings: 4,
  difficulty: 'Easy',
  category: 'Beef'
}

const ingredients = [
  {
    category: 'For the Burgers',
    items: [
      '1.5 lbs Happyland Ranch grass-fed ground beef (80/20 blend)',
      '1 teaspoon kosher salt',
      '1/2 teaspoon black pepper',
      '1/2 teaspoon garlic powder',
      '1 tablespoon Worcestershire sauce',
      '4 brioche burger buns'
    ]
  },
  {
    category: 'Toppings & Fixings',
    items: [
      '4 slices sharp cheddar cheese',
      '4 leaves butter lettuce',
      '1 large tomato, sliced',
      '1/2 red onion, sliced',
      '4 pickle spears',
      'Ranch burger sauce (recipe below)'
    ]
  },
  {
    category: 'Ranch Burger Sauce',
    items: [
      '1/2 cup mayonnaise',
      '2 tablespoons ketchup',
      '1 tablespoon yellow mustard',
      '1 tablespoon pickle juice',
      '1 teaspoon garlic powder',
      '1/2 teaspoon smoked paprika'
    ]
  }
]

const instructions = [
  {
    step: 1,
    title: 'Make the Sauce',
    instruction: 'In a small bowl, whisk together mayonnaise, ketchup, mustard, pickle juice, garlic powder, and smoked paprika. Refrigerate until ready to use.',
    time: '3 minutes'
  },
  {
    step: 2,
    title: 'Form the Patties',
    instruction: 'Gently mix ground beef with salt, pepper, garlic powder, and Worcestershire sauce. Form into 4 patties slightly larger than your buns (they\'ll shrink while cooking). Make a small indent in the center of each patty.',
    time: '5 minutes'
  },
  {
    step: 3,
    title: 'Preheat the Grill',
    instruction: 'Preheat grill to medium-high heat (400-450°F). Clean and oil the grates. If using a cast iron pan, heat over medium-high heat.',
    time: '5 minutes'
  },
  {
    step: 4,
    title: 'Cook the Burgers',
    instruction: 'Place patties on grill and cook for 3-4 minutes without pressing or moving them. Flip once and cook for another 3-4 minutes for medium doneness.',
    time: '6-8 minutes'
  },
  {
    step: 5,
    title: 'Add Cheese',
    instruction: 'In the last minute of cooking, place cheese slices on patties and close grill lid to melt. Remove burgers and let rest for 2 minutes.',
    time: '1 minute'
  },
  {
    step: 6,
    title: 'Toast the Buns',
    instruction: 'Lightly toast the brioche buns on the grill for 30-60 seconds until golden brown.',
    time: '1 minute'
  },
  {
    step: 7,
    title: 'Assemble',
    instruction: 'Spread ranch burger sauce on both halves of each bun. Layer bottom bun with lettuce, burger patty, tomato, onion, and pickles. Top and serve immediately.',
    time: '2 minutes'
  }
]

const tips = [
  {
    title: 'Don\'t Overwork the Meat',
    tip: 'Mix ingredients just until combined. Overworking the meat creates dense, tough burgers.'
  },
  {
    title: 'The Dimple Trick',
    tip: 'Press a small indent in the center of each raw patty. This prevents the burger from puffing up during cooking.'
  },
  {
    title: 'No Pressing!',
    tip: 'Resist the urge to press down on burgers with a spatula. This squeezes out all the delicious juices.'
  },
  {
    title: 'Perfect Temperature',
    tip: 'Use a thermometer: 130°F for medium-rare, 140°F for medium, 160°F for well-done.'
  }
]

export default function PerfectRanchBurgerPage() {
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

      {/* Recipe Content */}
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

              {/* Why This Recipe Works */}
              <div className="bg-accent-clay text-white rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Why This Recipe Works</h3>
                <ul className="space-y-2 text-white opacity-90">
                  <li>• Grass-fed beef provides superior flavor and nutrition</li>
                  <li>• 80/20 fat ratio ensures juicy, flavorful burgers</li>
                  <li>• Simple seasonings let the beef flavor shine</li>
                  <li>• Proper technique prevents dry, overcooked patties</li>
                  <li>• Ranch burger sauce adds the perfect tangy finish</li>
                </ul>
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

              {/* Shop Ground Beef */}
              <div className="bg-brand-forest text-white rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Premium Ground Beef</h3>
                <p className="text-brand-cream mb-4">
                  Our grass-fed ground beef is the secret to exceptional burgers. 
                  Fresh ground from our finest cuts.
                </p>
                <Link
                  href="/shop/products/grass-fed-ground-beef"
                  className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-accent-clay text-white hover:bg-opacity-90 focus:ring-accent-clay h-10 px-4 text-sm w-full"
                >
                  Shop Ground Beef
                </Link>
              </div>

              {/* Variations */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-brand-forest mb-4">Try These Variations</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-semibold text-ink">BBQ Ranch Burger</h4>
                    <p className="text-gray-600">Add BBQ sauce and crispy onions</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink">Mushroom Swiss</h4>
                    <p className="text-gray-600">Top with sautéed mushrooms and Swiss cheese</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink">Bacon Cheeseburger</h4>
                    <p className="text-gray-600">Add crispy bacon and your favorite cheese</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
