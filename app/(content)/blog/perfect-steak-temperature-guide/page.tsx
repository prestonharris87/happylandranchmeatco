import { Metadata } from 'next'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'
import { placeholderImage } from '@/lib/images'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = generateSEOMetadata({
  title: 'The Perfect Steak: Temperature Guide - Happyland Ranch Meat Co.',
  description: 'Master the art of cooking steak with our comprehensive guide to temperatures, timing, and techniques for perfect results every time.',
  keywords: ['steak temperature', 'cooking steak', 'steak doneness', 'meat thermometer', 'perfect steak']
})

const blogPost = {
  title: 'The Perfect Steak: Temperature Guide',
  excerpt: 'Master the art of cooking steak with our comprehensive guide to temperatures, timing, and techniques.',
  image: placeholderImage('Perfect medium-rare steak on cutting board with thermometer', 800, 500),
  date: '2023-12-28',
  category: 'Cooking',
  readTime: '6 min read',
  author: 'Chef Maria Rodriguez'
}

const temperatureLevels = [
  {
    level: 'Rare',
    temp: '120-125°F',
    internal: '52-54°C',
    description: 'Cool red center',
    appearance: 'Deep red throughout with a cool center',
    texture: 'Very soft and squishy',
    notes: 'Only recommended for high-quality cuts from trusted sources'
  },
  {
    level: 'Medium-Rare',
    temp: '130-135°F',
    internal: '54-57°C',
    description: 'Warm red center',
    appearance: 'Red center with pink edges',
    texture: 'Soft with slight resistance',
    notes: 'The gold standard - maximum flavor and juiciness'
  },
  {
    level: 'Medium',
    temp: '140-145°F',
    internal: '60-63°C',
    description: 'Warm pink center',
    appearance: 'Pink center with brown edges',
    texture: 'Firm but still tender',
    notes: 'Good balance of safety and flavor'
  },
  {
    level: 'Medium-Well',
    temp: '145-155°F',
    internal: '63-68°C',
    description: 'Slightly pink center',
    appearance: 'Light pink center, mostly brown',
    texture: 'Firm with less juiciness',
    notes: 'Still acceptable but drier than medium'
  },
  {
    level: 'Well-Done',
    temp: '155°F+',
    internal: '68°C+',
    description: 'No pink',
    appearance: 'Brown throughout',
    texture: 'Very firm and dry',
    notes: 'Not recommended for premium cuts'
  }
]

const cookingMethods = [
  {
    method: 'Pan-Searing',
    bestFor: 'Ribeye, New York Strip, Filet Mignon',
    technique: 'High heat, cast iron pan, finish in oven for thick cuts',
    tips: 'Don\'t move the steak while searing for best crust'
  },
  {
    method: 'Grilling',
    bestFor: 'All cuts, especially T-bone and Porterhouse',
    technique: 'Direct high heat for searing, indirect for finishing',
    tips: 'Clean grates and oil them to prevent sticking'
  },
  {
    method: 'Reverse Sear',
    bestFor: 'Thick cuts (1.5+ inches)',
    technique: 'Low oven first, then high-heat sear',
    tips: 'Perfect for achieving even doneness throughout'
  },
  {
    method: 'Sous Vide',
    bestFor: 'Any cut, perfect precision',
    technique: 'Water bath at exact temperature, then sear',
    tips: 'Foolproof method but requires special equipment'
  }
]

export default function PerfectSteakTemperatureGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <Image
          src={blogPost.image.src}
          alt={blogPost.image.alt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <div className="inline-flex items-center gap-2 bg-accent-clay text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              <span>{blogPost.category}</span>
              <span>•</span>
              <span>{blogPost.readTime}</span>
            </div>
            <h1 className="heading-1 mb-4">{blogPost.title}</h1>
            <p className="body-large text-brand-cream">
              {blogPost.excerpt}
            </p>
            <div className="flex items-center justify-center gap-4 mt-6 text-sm text-brand-cream">
              <span>By {blogPost.author}</span>
              <span>•</span>
              <span>{new Date(blogPost.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="section-padding">
        <div className="container-custom max-w-4xl">
          <article className="prose prose-lg max-w-none">
            
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              There's nothing quite like a perfectly cooked steak. The difference between a good steak 
              and a great one often comes down to temperature—knowing exactly when to pull it from 
              the heat to achieve your desired doneness. Whether you prefer a ruby-red rare or a 
              warm pink medium, this guide will help you nail it every time.
            </p>

            <h2 className="heading-3 text-brand-forest mb-6">Why Temperature Matters</h2>
            
            <p className="text-gray-700 mb-6">
              Steak doneness isn't just about personal preference—it's about understanding how heat 
              transforms the proteins and fats in meat. As the internal temperature rises, the muscle 
              fibers contract and moisture is expelled. The key is finding that sweet spot where the 
              meat is safe to eat but hasn't lost its juiciness and tenderness.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">🌡️ Essential Tool: Meat Thermometer</h3>
              <p className="text-yellow-700">
                A good instant-read thermometer is the most important tool for cooking perfect steak. 
                Don't rely on timing alone—internal temperature is the only reliable indicator of doneness. 
                Insert the thermometer into the thickest part of the steak for an accurate reading.
              </p>
            </div>

            <h2 className="heading-3 text-brand-forest mb-6">The Complete Temperature Guide</h2>
            
            <div className="space-y-6 mb-12">
              {temperatureLevels.map((level, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-brand-forest mb-2 md:mb-0">{level.level}</h3>
                    <div className="text-right">
                      <div className="text-xl font-bold text-accent-clay">{level.temp}</div>
                      <div className="text-sm text-gray-500">({level.internal})</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold text-ink mb-1">Appearance</h4>
                      <p className="text-gray-600">{level.appearance}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-ink mb-1">Texture</h4>
                      <p className="text-gray-600">{level.texture}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-ink mb-1">Notes</h4>
                      <p className="text-gray-600">{level.notes}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-accent-clay text-white rounded-lg p-8 mb-8">
              <h3 className="text-xl font-bold mb-4">Our Recommendation: Medium-Rare</h3>
              <p className="text-white opacity-90 mb-4">
                For grass-fed beef, we recommend medium-rare (130-135°F). This temperature allows 
                you to experience the full flavor and tenderness of our premium beef while ensuring 
                food safety. The meat will be warm throughout with a beautiful red center.
              </p>
              <p className="text-white opacity-90">
                Remember: grass-fed beef cooks about 30% faster than grain-fed beef due to its 
                lower fat content, so watch your temperatures closely!
              </p>
            </div>

            <h2 className="heading-3 text-brand-forest mb-6">Cooking Methods & Techniques</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {cookingMethods.map((method, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-brand-forest mb-3">{method.method}</h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-semibold text-ink">Best for:</span>
                      <span className="text-gray-600 ml-2">{method.bestFor}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-ink">Technique:</span>
                      <span className="text-gray-600 ml-2">{method.technique}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-ink">Pro Tip:</span>
                      <span className="text-gray-600 ml-2">{method.tips}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="heading-3 text-brand-forest mb-6">The Resting Rule</h2>
            
            <p className="text-gray-700 mb-6">
              Here's a crucial step many home cooks skip: resting your steak. After cooking, let your 
              steak rest for 5-10 minutes before cutting. During cooking, the muscle fibers contract 
              and push juices toward the center. Resting allows these fibers to relax and the juices 
              to redistribute throughout the meat.
            </p>

            <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
              <Image
                src={placeholderImage('Steak resting on cutting board with herbs', 800, 450).src}
                alt="Steak resting on cutting board"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            <h2 className="heading-3 text-brand-forest mb-6">Common Mistakes to Avoid</h2>
            
            <ul className="list-disc list-inside text-gray-700 space-y-3 mb-8">
              <li><strong>Not preheating your pan or grill:</strong> A hot surface is essential for a good sear</li>
              <li><strong>Moving the steak too much:</strong> Let it sear undisturbed for the best crust</li>
              <li><strong>Not using a thermometer:</strong> Guessing leads to overcooked or undercooked steaks</li>
              <li><strong>Cooking straight from the fridge:</strong> Let steaks come to room temperature first</li>
              <li><strong>Cutting immediately:</strong> Always let the steak rest before slicing</li>
              <li><strong>Overcooking grass-fed beef:</strong> It cooks faster than grain-fed, so adjust timing</li>
            </ul>

            <h2 className="heading-3 text-brand-forest mb-6">Troubleshooting</h2>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-brand-forest mb-4">What if I overcooked my steak?</h3>
              <p className="text-gray-700 mb-4">
                It happens to the best of us! While you can't undo overcooking, you can salvage an 
                overcooked steak by slicing it thin against the grain and serving it with a flavorful 
                sauce like chimichurri or compound butter.
              </p>
              
              <h3 className="text-lg font-semibold text-brand-forest mb-4">My steak is tough—what went wrong?</h3>
              <p className="text-gray-700">
                Toughness can result from overcooking, not resting the meat, or choosing the wrong 
                cooking method for the cut. Some cuts (like chuck or round) require slow, moist cooking 
                methods rather than quick, high-heat methods.
              </p>
            </div>

            <blockquote className="border-l-4 border-accent-clay pl-6 italic text-xl text-gray-600 my-8">
              "The perfect steak is not about following a recipe—it's about understanding your 
              ingredients and using the right technique for the cut you're cooking."
            </blockquote>

            <h2 className="heading-3 text-brand-forest mb-6">Practice Makes Perfect</h2>
            
            <p className="text-gray-700 mb-8">
              Mastering steak cookery takes practice, but with these guidelines and a good thermometer, 
              you'll be cooking restaurant-quality steaks at home in no time. Start with our premium 
              grass-fed cuts—their superior flavor and quality make them more forgiving and rewarding 
              to cook with.
            </p>

            <div className="bg-brand-forest text-white rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Practice?</h3>
              <p className="text-brand-cream mb-6">
                Put these techniques to the test with our premium grass-fed steaks. 
                Each cut is carefully selected for optimal flavor and tenderness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/shop/collections/beef"
                  className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-accent-clay text-white hover:bg-opacity-90 focus:ring-accent-clay h-12 px-8 text-base"
                >
                  Shop Premium Steaks
                </Link>
                <Link
                  href="/recipes/perfect-grass-fed-ribeye"
                  className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-transparent text-white border-2 border-white hover:bg-white hover:text-brand-forest focus:ring-white h-12 px-8 text-base"
                >
                  Try Our Ribeye Recipe
                </Link>
              </div>
            </div>

          </article>
        </div>
      </div>
    </div>
  )
}
