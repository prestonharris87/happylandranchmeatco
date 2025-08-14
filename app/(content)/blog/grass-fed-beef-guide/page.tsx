import { Metadata } from 'next'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'
import { placeholderImage } from '@/lib/images'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = generateSEOMetadata({
  title: 'The Art of Grass-Fed Beef: Why It Matters - Happyland Ranch Meat Co.',
  description: 'Discover the difference between grass-fed and grain-fed beef, and why we choose to raise our cattle on pasture for superior flavor and nutrition.',
  keywords: ['grass-fed beef', 'sustainable farming', 'beef nutrition', 'pasture-raised cattle', 'ranch life']
})

const blogPost = {
  title: 'The Art of Grass-Fed Beef: Why It Matters',
  excerpt: 'Discover the difference between grass-fed and grain-fed beef, and why we choose to raise our cattle on pasture.',
  image: placeholderImage('Black Angus cattle grazing in green pasture at sunset', 800, 500),
  date: '2024-01-15',
  category: 'Sustainability',
  readTime: '5 min read',
  author: 'The Happyland Ranch Team'
}

export default function GrassFedBeefGuidePage() {
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
              When you bite into a perfectly cooked steak from Happyland Ranch, you're experiencing 
              the culmination of generations of careful cattle raising, sustainable farming practices, 
              and a deep commitment to quality that you can taste in every bite.
            </p>

            <h2 className="heading-3 text-brand-forest mb-6">What Makes Grass-Fed Different?</h2>
            
            <p className="text-gray-700 mb-6">
              The difference between grass-fed and grain-fed beef goes far beyond just what the cattle eat. 
              It's a fundamental approach to raising livestock that impacts everything from the flavor 
              profile of the meat to the environmental footprint of the farm.
            </p>

            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <h3 className="text-xl font-semibold text-brand-forest mb-4">Grass-Fed vs. Grain-Fed: The Key Differences</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-ink mb-3">🌱 Grass-Fed Beef</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Cattle graze on pasture their entire lives</li>
                    <li>• Natural diet of grasses and forbs</li>
                    <li>• Higher in omega-3 fatty acids</li>
                    <li>• Leaner with distinct, robust flavor</li>
                    <li>• Environmentally sustainable</li>
                    <li>• No routine antibiotics or hormones</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-ink mb-3">🌾 Grain-Fed Beef</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Finished in feedlots on grain</li>
                    <li>• Diet of corn, soy, and supplements</li>
                    <li>• Higher in omega-6 fatty acids</li>
                    <li>• More marbling, milder flavor</li>
                    <li>• Higher environmental impact</li>
                    <li>• May include growth promotants</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="heading-3 text-brand-forest mb-6">The Nutritional Advantage</h2>
            
            <p className="text-gray-700 mb-6">
              Grass-fed beef isn't just better for the environment—it's better for you too. 
              Studies have consistently shown that grass-fed beef contains:
            </p>

            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
              <li><strong>2-4 times more omega-3 fatty acids</strong> than grain-fed beef</li>
              <li><strong>Higher levels of CLA</strong> (conjugated linoleic acid), a beneficial fat</li>
              <li><strong>More vitamin E</strong> and beta-carotene</li>
              <li><strong>Better omega-6 to omega-3 ratio</strong> for optimal health</li>
              <li><strong>Higher levels of antioxidants</strong> from the diverse plant diet</li>
            </ul>

            <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
              <Image
                src={placeholderImage('Cattle grazing in diverse oak savanna with wildflowers', 800, 450).src}
                alt="Cattle grazing in diverse oak savanna"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            <h2 className="heading-3 text-brand-forest mb-6">Our Approach at Happyland Ranch</h2>
            
            <p className="text-gray-700 mb-6">
              At Happyland Ranch, we've taken grass-fed beef to the next level. Our cattle don't just 
              graze on any pasture—they roam freely across restored oak savanna, dining on a diverse 
              buffet of native grasses, forbs, and browse that creates complexity in flavor you simply 
              can't find anywhere else.
            </p>

            <blockquote className="border-l-4 border-accent-clay pl-6 italic text-xl text-gray-600 my-8">
              "When cattle have access to diverse plant species, they become natural nutritionists, 
              selecting the plants that provide optimal nutrition. This translates directly into 
              better-tasting, more nutritious beef."
            </blockquote>

            <h3 className="text-xl font-semibold text-brand-forest mb-4">Our Rotational Grazing System</h3>
            
            <p className="text-gray-700 mb-6">
              We practice intensive rotational grazing, moving our cattle to fresh paddocks regularly. 
              This system:
            </p>

            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
              <li>Allows pastures to fully recover and regrow</li>
              <li>Prevents overgrazing and soil compaction</li>
              <li>Increases plant diversity and soil health</li>
              <li>Mimics natural grazing patterns of wild herds</li>
              <li>Reduces parasite loads naturally</li>
            </ul>

            <h2 className="heading-3 text-brand-forest mb-6">The Flavor Difference</h2>
            
            <p className="text-gray-700 mb-6">
              Many people are surprised by the distinct flavor of truly grass-fed beef. Unlike the 
              mild, uniform taste of grain-fed beef, grass-fed beef has character. It's often described 
              as having a more "beefy" flavor—earthier, more complex, with subtle variations that 
              reflect the terroir of the land.
            </p>

            <div className="bg-accent-clay text-white rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Cooking Tips for Grass-Fed Beef</h3>
              <ul className="space-y-2 text-white opacity-90">
                <li>• Cook 30% less time than grain-fed beef</li>
                <li>• Use lower temperatures to prevent overcooking</li>
                <li>• Let meat come to room temperature before cooking</li>
                <li>• Don't pierce or press the meat while cooking</li>
                <li>• Always let it rest after cooking</li>
              </ul>
            </div>

            <h2 className="heading-3 text-brand-forest mb-6">Environmental Impact</h2>
            
            <p className="text-gray-700 mb-6">
              Choosing grass-fed beef isn't just a personal health decision—it's an environmental one. 
              Well-managed grazing actually helps combat climate change by:
            </p>

            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
              <li>Sequestering carbon in soil through root growth</li>
              <li>Improving soil structure and water retention</li>
              <li>Supporting biodiversity in grassland ecosystems</li>
              <li>Reducing the need for grain production and transport</li>
              <li>Eliminating the environmental costs of feedlots</li>
            </ul>

            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <h3 className="text-xl font-semibold text-brand-forest mb-4">By the Numbers</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-accent-clay mb-2">500+</div>
                  <div className="text-sm text-gray-600">Acres of restored oak savanna</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent-clay mb-2">50+</div>
                  <div className="text-sm text-gray-600">Native plant species in our pastures</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent-clay mb-2">0</div>
                  <div className="text-sm text-gray-600">Antibiotics or growth hormones used</div>
                </div>
              </div>
            </div>

            <h2 className="heading-3 text-brand-forest mb-6">Making the Switch</h2>
            
            <p className="text-gray-700 mb-6">
              If you're new to grass-fed beef, start with ground beef or try our popular cuts like 
              ribeye or strip steaks. Many customers find that once they taste the difference, 
              they never go back to conventional beef.
            </p>

            <p className="text-gray-700 mb-8">
              At Happyland Ranch, we're not just raising cattle—we're stewarding the land, 
              supporting our local ecosystem, and providing our community with the healthiest, 
              most flavorful beef possible. Every bite is a testament to our commitment to 
              doing things the right way.
            </p>

            <div className="bg-brand-forest text-white rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Taste the Difference?</h3>
              <p className="text-brand-cream mb-6">
                Experience the superior flavor and nutrition of our grass-fed beef. 
                Order online and taste what real beef should be.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/shop/collections/beef"
                  className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-accent-clay text-white hover:bg-opacity-90 focus:ring-accent-clay h-12 px-8 text-base"
                >
                  Shop Grass-Fed Beef
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-transparent text-white border-2 border-white hover:bg-white hover:text-brand-forest focus:ring-white h-12 px-8 text-base"
                >
                  Learn About Our Ranch
                </Link>
              </div>
            </div>

          </article>
        </div>
      </div>

      {/* Related Posts */}
      <div className="bg-gray-50 section-padding">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-12">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image
                  src={placeholderImage('Rancher working with cattle at sunrise', 400, 300).src}
                  alt="Behind the Scenes: Ranch Life"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="text-accent-clay text-sm font-medium mb-2">Ranch Life</div>
                <h3 className="text-lg font-semibold text-brand-forest mb-3">Behind the Scenes: A Day in Ranch Life</h3>
                <p className="text-gray-600 text-sm mb-4">Follow along as we take you through a typical day caring for our animals...</p>
                <Link href="/blog/ranch-life-behind-scenes" className="text-accent-clay hover:text-accent-gold font-medium">
                  Read More →
                </Link>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image
                  src={placeholderImage('Perfect medium-rare steak on cutting board', 400, 300).src}
                  alt="Perfect Steak Temperature Guide"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="text-accent-clay text-sm font-medium mb-2">Cooking</div>
                <h3 className="text-lg font-semibold text-brand-forest mb-3">The Perfect Steak: Temperature Guide</h3>
                <p className="text-gray-600 text-sm mb-4">Master the art of cooking steak with our comprehensive guide...</p>
                <Link href="/blog/perfect-steak-temperature-guide" className="text-accent-clay hover:text-accent-gold font-medium">
                  Read More →
                </Link>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image
                  src={placeholderImage('Healthy grassland with diverse plants', 400, 300).src}
                  alt="Regenerative Agriculture"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="text-accent-clay text-sm font-medium mb-2">Sustainability</div>
                <h3 className="text-lg font-semibold text-brand-forest mb-3">Regenerative Agriculture: Healing the Land</h3>
                <p className="text-gray-600 text-sm mb-4">Learn about our regenerative farming practices and how we're restoring...</p>
                <Link href="/blog/regenerative-agriculture" className="text-accent-clay hover:text-accent-gold font-medium">
                  Read More →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}
