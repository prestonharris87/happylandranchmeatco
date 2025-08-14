import { Metadata } from 'next'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'
import { placeholderImage } from '@/lib/images'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Classic Roast Chicken Recipe - Happyland Ranch Meat Co.',
  description: 'Simple, wholesome roast chicken recipe that brings out the natural flavors of our pasture-raised birds. Perfect for family dinners.',
  keywords: ['roast chicken recipe', 'whole chicken', 'pasture-raised chicken', 'family dinner', 'roasted chicken']
})

const recipe = {
  title: 'Classic Roast Chicken',
  description: 'Simple, wholesome roast chicken that brings out the natural flavors of our pasture-raised birds. This foolproof method delivers crispy skin and juicy meat every time.',
  image: placeholderImage('Golden roasted whole chicken with herbs and vegetables', 800, 600),
  prepTime: '15 minutes',
  cookTime: '1 hour',
  totalTime: '1 hour 15 minutes',
  servings: 4,
  difficulty: 'Easy',
  category: 'Chicken'
}

const ingredients = [
  {
    category: 'For the Chicken',
    items: [
      '1 whole Happyland Ranch pasture-raised chicken (3-4 lbs)',
      '2 tablespoons olive oil or melted butter',
      '1 teaspoon kosher salt',
      '1/2 teaspoon black pepper',
      '1 teaspoon garlic powder',
      '1 teaspoon dried thyme (or 2 tsp fresh)',
      '1/2 teaspoon paprika',
      '1 lemon, halved',
      '4 sprigs fresh thyme or rosemary'
    ]
  },
  {
    category: 'For Roasting (Optional)',
    items: [
      '1 onion, quartered',
      '2 carrots, cut into chunks',
      '2 celery stalks, cut into chunks',
      '4 small potatoes, halved',
      '2 tablespoons olive oil',
      'Salt and pepper for vegetables'
    ]
  }
]

const instructions = [
  {
    step: 1,
    title: 'Prepare the Oven',
    instruction: 'Preheat your oven to 425°F (220°C). Remove chicken from refrigerator 30 minutes before cooking to bring to room temperature.',
    time: '5 minutes'
  },
  {
    step: 2,
    title: 'Prep the Chicken',
    instruction: 'Pat chicken completely dry inside and out with paper towels. Remove any giblets from the cavity. This step is crucial for crispy skin.',
    time: '5 minutes'
  },
  {
    step: 3,
    title: 'Season Inside and Out',
    instruction: 'Mix salt, pepper, garlic powder, thyme, and paprika in a small bowl. Rub olive oil all over the chicken, then season generously inside and out with the spice mixture.',
    time: '5 minutes'
  },
  {
    step: 4,
    title: 'Stuff the Cavity',
    instruction: 'Place lemon halves and fresh herb sprigs inside the chicken cavity. This adds flavor and helps keep the meat moist during cooking.',
    time: '2 minutes'
  },
  {
    step: 5,
    title: 'Prepare Vegetables (Optional)',
    instruction: 'If roasting vegetables, toss onion, carrots, celery, and potatoes with olive oil, salt, and pepper. Arrange around the chicken in the roasting pan.',
    time: '5 minutes'
  },
  {
    step: 6,
    title: 'Truss the Chicken',
    instruction: 'Tie the legs together with kitchen twine and tuck wing tips under the body. This helps the chicken cook evenly and look more presentable.',
    time: '3 minutes'
  },
  {
    step: 7,
    title: 'Roast the Chicken',
    instruction: 'Place chicken breast-side up in a roasting pan. Roast for 50-60 minutes, until internal temperature reaches 165°F (74°C) at the thickest part of the thigh.',
    time: '50-60 minutes'
  },
  {
    step: 8,
    title: 'Rest and Carve',
    instruction: 'Let chicken rest for 10 minutes before carving. This allows juices to redistribute throughout the meat. Carve and serve with the roasted vegetables.',
    time: '10 minutes'
  }
]

const tips = [
  {
    title: 'Crispy Skin Secret',
    tip: 'The key to crispy skin is starting with a completely dry chicken and using high heat. Don\'t skip the patting dry step!'
  },
  {
    title: 'Check for Doneness',
    tip: 'Use a meat thermometer inserted into the thickest part of the thigh. It should read 165°F. The juices should run clear when pierced.'
  },
  {
    title: 'Pasture-Raised Difference',
    tip: 'Our pasture-raised chickens have firmer texture and richer flavor than conventional birds. They may take slightly longer to cook.'
  },
  {
    title: 'Leftover Magic',
    tip: 'Save the carcass to make homemade chicken stock. Our pasture-raised bones make incredibly flavorful broth.'
  }
]

const sideDishes = [
  'Roasted root vegetables',
  'Mashed potatoes',
  'Green bean almondine',
  'Wild rice stuffing',
  'Honey glazed carrots',
  'Caesar salad'
]

export default function ClassicRoastChickenPage() {
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

              {/* Why Pasture-Raised */}
              <div className="bg-accent-clay text-white rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Why Pasture-Raised Matters</h3>
                <ul className="space-y-2 text-white opacity-90">
                  <li>• Chickens roam freely on pasture eating grass and bugs</li>
                  <li>• Higher in omega-3 fatty acids and vitamin E</li>
                  <li>• Firmer texture and richer, more complex flavor</li>
                  <li>• No antibiotics, hormones, or confinement</li>
                  <li>• Supports regenerative agriculture practices</li>
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

              {/* Carving Guide */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-brand-forest mb-4">How to Carve Your Chicken</h3>
                <ol className="space-y-2 text-gray-700">
                  <li>1. Remove legs by cutting through the skin between leg and body</li>
                  <li>2. Pop the thigh joint and cut through to separate leg and thigh</li>
                  <li>3. Slice breast meat by cutting parallel to the cutting board</li>
                  <li>4. Remove wings by cutting through the joint</li>
                  <li>5. Arrange on platter and serve immediately</li>
                </ol>
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

              {/* Shop Chicken */}
              <div className="bg-brand-forest text-white rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Pasture-Raised Chicken</h3>
                <p className="text-brand-cream mb-4">
                  Our chickens roam freely on pasture, resulting in superior flavor 
                  and nutrition. Fresh, never frozen.
                </p>
                <Link
                  href="/shop/products/whole-chicken"
                  className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-accent-clay text-white hover:bg-opacity-90 focus:ring-accent-clay h-10 px-4 text-sm w-full"
                >
                  Shop Whole Chicken
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
