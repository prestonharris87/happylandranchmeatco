import { Metadata } from 'next'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'
import { placeholderImage } from '@/lib/images'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Perfect Grass-Fed Ribeye Recipe - Happyland Ranch Meat Co.',
  description: 'Learn the secrets to cooking the perfect ribeye steak with our grass-fed beef. Simple technique for restaurant-quality results.',
  keywords: ['ribeye steak recipe', 'grass-fed ribeye', 'perfect steak', 'steak cooking', 'beef recipe']
})

const recipe = {
  title: 'Perfect Grass-Fed Ribeye',
  description: 'Learn the secrets to cooking the perfect ribeye steak with our grass-fed beef. This simple technique delivers restaurant-quality results every time.',
  image: placeholderImage('Perfectly cooked grass-fed ribeye steak on plate', 800, 600),
  prepTime: '5 minutes',
  cookTime: '10 minutes',
  totalTime: '15 minutes',
  servings: 2,
  difficulty: 'Easy',
  category: 'Beef'
}

const ingredients = [
  {
    category: 'Main Ingredients',
    items: [
      '2 Happyland Ranch grass-fed ribeye steaks (1-1.5 inches thick)',
      '2 tablespoons high-heat oil (avocado or grapeseed)',
      '1 teaspoon coarse sea salt',
      '1/2 teaspoon freshly ground black pepper',
      '2 tablespoons butter',
      '2 sprigs fresh thyme (optional)',
      '2 cloves garlic, crushed (optional)'
    ]
  }
]

const instructions = [
  {
    step: 1,
    title: 'Bring to Room Temperature',
    instruction: 'Remove steaks from refrigerator 30-45 minutes before cooking. This ensures even cooking throughout. Pat completely dry with paper towels.',
    time: '30-45 minutes'
  },
  {
    step: 2,
    title: 'Season Generously',
    instruction: 'Season both sides of steaks generously with salt and pepper. Press seasoning into the meat gently. The salt will help create a beautiful crust.',
    time: '2 minutes'
  },
  {
    step: 3,
    title: 'Preheat Your Pan',
    instruction: 'Heat a cast iron skillet or heavy-bottomed pan over medium-high heat until it\'s smoking hot. Add oil and swirl to coat.',
    time: '3-4 minutes'
  },
  {
    step: 4,
    title: 'Sear the First Side',
    instruction: 'Carefully place steaks in the hot pan. Don\'t move them! Let them sear undisturbed for 3-4 minutes to develop a golden-brown crust.',
    time: '3-4 minutes'
  },
  {
    step: 5,
    title: 'Flip and Sear',
    instruction: 'Flip steaks once and sear the other side for 3-4 minutes. For thicker steaks, you may need an extra minute per side.',
    time: '3-4 minutes'
  },
  {
    step: 6,
    title: 'Add Butter (Optional)',
    instruction: 'In the last minute, add butter, thyme, and garlic to the pan. Tilt pan and baste steaks with the aromatic butter using a spoon.',
    time: '1 minute'
  },
  {
    step: 7,
    title: 'Check Temperature',
    instruction: 'Use a meat thermometer: 125°F for rare, 135°F for medium-rare, 145°F for medium. Remember, grass-fed beef cooks faster than grain-fed.',
    time: '30 seconds'
  },
  {
    step: 8,
    title: 'Rest and Serve',
    instruction: 'Remove from heat and let steaks rest for 5 minutes. This allows juices to redistribute. Serve immediately with your favorite sides.',
    time: '5 minutes'
  }
]

const tips = [
  {
    title: 'Why Grass-Fed is Different',
    tip: 'Grass-fed beef is leaner than grain-fed, so it cooks about 30% faster. Watch your timing closely to avoid overcooking.'
  },
  {
    title: 'The Perfect Pan',
    tip: 'Cast iron is ideal because it retains heat well and creates an excellent sear. Make sure it\'s properly preheated before adding the steak.'
  },
  {
    title: 'Don\'t Skip the Rest',
    tip: 'Resting is crucial! It allows the muscle fibers to relax and juices to redistribute, resulting in a more tender, juicy steak.'
  },
  {
    title: 'Temperature is Key',
    tip: 'Invest in a good instant-read thermometer. It takes the guesswork out of cooking the perfect steak every time.'
  }
]

const temperatureGuide = [
  { doneness: 'Rare', temp: '120-125°F', description: 'Cool red center' },
  { doneness: 'Medium-Rare', temp: '130-135°F', description: 'Warm red center' },
  { doneness: 'Medium', temp: '140-145°F', description: 'Warm pink center' },
  { doneness: 'Medium-Well', temp: '145-155°F', description: 'Slightly pink center' },
  { doneness: 'Well-Done', temp: '155°F+', description: 'No pink (not recommended)' }
]

export default function PerfectGrassFedRibeyePage() {
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
                <h3 className="text-xl font-bold mb-4">The Secret to Perfect Ribeye</h3>
                <ul className="space-y-2 text-white opacity-90">
                  <li>• High heat creates the perfect sear and crust</li>
                  <li>• Room temperature steak cooks evenly throughout</li>
                  <li>• Grass-fed beef has incredible natural flavor</li>
                  <li>• Simple seasonings let the meat shine</li>
                  <li>• Proper resting ensures maximum juiciness</li>
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

              {/* Temperature Guide */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-brand-forest mb-4">Temperature Guide</h3>
                <div className="space-y-3">
                  {temperatureGuide.map((temp, index) => (
                    <div key={index} className="flex justify-between items-center text-sm">
                      <div>
                        <div className="font-semibold text-ink">{temp.doneness}</div>
                        <div className="text-gray-500">{temp.description}</div>
                      </div>
                      <div className="font-bold text-accent-clay">{temp.temp}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shop Ribeye */}
              <div className="bg-brand-forest text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Premium Ribeye Steaks</h3>
                <p className="text-brand-cream mb-4">
                  Our grass-fed ribeye steaks are cut thick and aged to perfection. 
                  The marbling and flavor are exceptional.
                </p>
                <Link
                  href="/shop/products/grass-fed-ribeye"
                  className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-accent-clay text-white hover:bg-opacity-90 focus:ring-accent-clay h-10 px-4 text-sm w-full"
                >
                  Shop Ribeye Steaks
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
