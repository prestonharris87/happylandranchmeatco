import { Metadata } from 'next'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'
import { placeholderImage } from '@/lib/images'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Herb-Crusted Pork Tenderloin Recipe - Happyland Ranch Meat Co.',
  description: 'Elegant herb-crusted pork tenderloin with our pasture-raised pork. Perfect for dinner parties or special occasions.',
  keywords: ['pork tenderloin recipe', 'herb crusted pork', 'pasture-raised pork', 'dinner recipe', 'elegant pork']
})

const recipe = {
  title: 'Herb-Crusted Pork Tenderloin',
  description: 'An elegant dinner featuring our tender, pasture-raised pork tenderloin with a flavorful herb crust. This restaurant-quality dish is surprisingly simple to make at home.',
  image: placeholderImage('Herb-crusted pork tenderloin sliced on platter', 800, 600),
  prepTime: '20 minutes',
  cookTime: '25 minutes',
  totalTime: '45 minutes',
  servings: 4,
  difficulty: 'Medium',
  category: 'Pork'
}

const ingredients = [
  {
    category: 'For the Pork',
    items: [
      '2 Happyland Ranch pork tenderloins (about 1 lb each)',
      '2 tablespoons olive oil',
      '1 teaspoon kosher salt',
      '1/2 teaspoon black pepper'
    ]
  },
  {
    category: 'For the Herb Crust',
    items: [
      '1/2 cup panko breadcrumbs',
      '2 tablespoons fresh rosemary, minced',
      '2 tablespoons fresh thyme, minced',
      '3 cloves garlic, minced',
      '2 tablespoons Dijon mustard',
      '2 tablespoons olive oil',
      '1/4 cup grated Parmesan cheese',
      '1 teaspoon lemon zest'
    ]
  },
  {
    category: 'For the Pan Sauce',
    items: [
      '1/2 cup white wine or chicken broth',
      '2 tablespoons butter',
      '1 tablespoon fresh lemon juice',
      '1 tablespoon honey',
      'Salt and pepper to taste'
    ]
  }
]

const instructions = [
  {
    step: 1,
    title: 'Prepare the Oven',
    instruction: 'Preheat oven to 425°F (220°C). Line a baking sheet with parchment paper or lightly grease a roasting pan.',
    time: '5 minutes'
  },
  {
    step: 2,
    title: 'Prep the Pork',
    instruction: 'Remove tenderloins from refrigerator 15 minutes before cooking. Pat dry with paper towels and trim any excess fat or silver skin. Season all sides with salt and pepper.',
    time: '5 minutes'
  },
  {
    step: 3,
    title: 'Make the Herb Crust',
    instruction: 'In a bowl, combine panko breadcrumbs, minced rosemary, thyme, garlic, Parmesan cheese, and lemon zest. Drizzle with 2 tablespoons olive oil and mix until evenly moistened.',
    time: '5 minutes'
  },
  {
    step: 4,
    title: 'Sear the Pork',
    instruction: 'Heat 2 tablespoons olive oil in an oven-safe skillet over medium-high heat. Sear tenderloins on all sides until golden brown, about 6-8 minutes total.',
    time: '8 minutes'
  },
  {
    step: 5,
    title: 'Apply Mustard and Crust',
    instruction: 'Remove skillet from heat. Brush the top and sides of each tenderloin with Dijon mustard, then press the herb mixture firmly onto the mustard-coated surfaces.',
    time: '3 minutes'
  },
  {
    step: 6,
    title: 'Roast in Oven',
    instruction: 'Transfer skillet to preheated oven. Roast for 12-15 minutes, or until internal temperature reaches 145°F (63°C). The crust should be golden brown.',
    time: '12-15 minutes'
  },
  {
    step: 7,
    title: 'Rest and Make Sauce',
    instruction: 'Remove pork to a cutting board and tent with foil. Let rest for 5 minutes. Meanwhile, place the skillet over medium heat, add wine and honey, scraping up browned bits. Whisk in butter and lemon juice.',
    time: '5 minutes'
  },
  {
    step: 8,
    title: 'Slice and Serve',
    instruction: 'Slice tenderloin into 1/2-inch thick medallions. Arrange on serving platter and drizzle with pan sauce. Serve immediately.',
    time: '2 minutes'
  }
]

const tips = [
  {
    title: 'Don\'t Overcook',
    tip: 'Pork tenderloin can go from perfect to dry quickly. Use a meat thermometer and remove at exactly 145°F for juicy, slightly pink meat.'
  },
  {
    title: 'Fresh Herbs Matter',
    tip: 'Fresh herbs make a huge difference in this recipe. If you must use dried herbs, use 1/3 the amount and add a bit more lemon zest.'
  },
  {
    title: 'Even Cooking',
    tip: 'If your tenderloins are different sizes, start the larger one a few minutes earlier to ensure they finish at the same time.'
  },
  {
    title: 'Make-Ahead Tip',
    tip: 'You can prepare the herb crust mixture up to a day ahead and store it covered in the refrigerator.'
  }
]

const sideDishes = [
  'Roasted root vegetables',
  'Garlic mashed potatoes',
  'Sautéed green beans',
  'Wild rice pilaf',
  'Roasted Brussels sprouts',
  'Creamy polenta'
]

export default function HerbCrustedPorkTenderloinPage() {
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

              {/* About This Recipe */}
              <div className="bg-accent-clay text-white rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Why You'll Love This Recipe</h3>
                <ul className="space-y-2 text-white opacity-90">
                  <li>• Impressive presentation perfect for entertaining</li>
                  <li>• Pasture-raised pork is naturally tender and flavorful</li>
                  <li>• Herb crust adds texture and aromatic flavor</li>
                  <li>• Quick pan sauce elevates the entire dish</li>
                  <li>• Pairs beautifully with many side dishes</li>
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

              {/* Shop Pork */}
              <div className="bg-brand-forest text-white rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Premium Pork Tenderloin</h3>
                <p className="text-brand-cream mb-4">
                  Our pasture-raised pork tenderloins are incredibly tender and 
                  flavorful. Raised without antibiotics or hormones.
                </p>
                <Link
                  href="/shop/products/pork-tenderloin"
                  className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-accent-clay text-white hover:bg-opacity-90 focus:ring-accent-clay h-10 px-4 text-sm w-full"
                >
                  Shop Pork Tenderloin
                </Link>
              </div>

              {/* Perfect Side Dishes */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-brand-forest mb-4">Perfect Side Dishes</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {sideDishes.map((side, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-accent-clay">•</span>
                      <span>{side}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
