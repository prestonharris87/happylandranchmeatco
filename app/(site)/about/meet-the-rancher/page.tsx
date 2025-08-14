import { Metadata } from 'next'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'
import { placeholderImage } from '@/lib/images'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Meet the Rancher - Preston Harris | Happyland Ranch Meat Co.',
  description: 'Meet Preston Harris, the rancher behind Happyland Ranch Meat Co. Learn about his passion for raising premium grass-fed cattle and sustainable farming.',
  keywords: ['Preston Harris', 'rancher', 'grass-fed beef', 'sustainable farming', 'Oklahoma ranch']
})

export default function MeetTheRancherPage() {
  const rancherImage = placeholderImage('Preston Harris standing with cattle in pasture', 600, 800)
  const ranchImages = [
    placeholderImage('Cattle grazing in oak savanna', 400, 300),
    placeholderImage('Rancher checking cattle health', 400, 300),
    placeholderImage('Sunset over ranch pasture', 400, 300),
    placeholderImage('Ranch family working together', 400, 300)
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-brand-forest text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">Meet the Rancher</h1>
            <p className="body-large text-brand-cream">
              Get to know Preston Harris and the story behind Happyland Ranch Meat Co.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Rancher Image */}
            <div className="relative">
              <div className="aspect-[3/4] relative overflow-hidden rounded-lg">
                <Image
                  src={rancherImage.src}
                  alt={rancherImage.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent-clay text-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm">Years Ranching</div>
                </div>
              </div>
            </div>

            {/* Story Content */}
            <div className="space-y-6">
              <div>
                <h2 className="heading-2 mb-6 text-brand-forest">Preston Harris</h2>
                <p className="body-large text-gray-700 mb-6">
                  I'm Preston Harris, and Happyland Ranch is more than a place — it's a promise. 
                  Every steak, chop, and drumstick we ship comes from animals raised with respect 
                  for the land and care for the customer.
                </p>
                <p className="body-base text-gray-600 mb-6">
                  I've walked these pastures my whole life. Every morning starts with the same routine — 
                  tending to the herd, checking the land, and making sure our animals are healthy and happy. 
                  That's the Happyland way.
                </p>
                <p className="body-base text-gray-600 mb-6">
                  Growing up in Ada, Oklahoma, I learned early that good meat comes from good care. 
                  My grandfather taught me that if you take care of the land and the animals, 
                  they'll take care of you. That philosophy guides everything we do here at Happyland Ranch.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-ink mb-4">My Commitment to You</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-accent-clay mt-1">•</span>
                    <span className="text-gray-700">Every animal is raised on pasture with room to roam</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-clay mt-1">•</span>
                    <span className="text-gray-700">No hormones, antibiotics, or artificial additives ever</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-clay mt-1">•</span>
                    <span className="text-gray-700">Sustainable practices that regenerate our oak savanna</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-clay mt-1">•</span>
                    <span className="text-gray-700">Personal attention to every order that leaves our ranch</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Ranch Life Gallery */}
          <div className="mb-16">
            <h2 className="heading-3 text-center mb-12">Life on the Ranch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ranchImages.map((image, index) => (
                <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="bg-brand-forest text-white rounded-lg p-12 mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-3 mb-6">Our Ranch Philosophy</h2>
              <blockquote className="text-xl italic text-brand-cream mb-6">
                "Good meat starts with good land, good animals, and good people. 
                When you buy from us, you're not just getting premium cuts — 
                you're supporting a way of life that respects the land and the animals we raise."
              </blockquote>
              <cite className="text-accent-clay font-medium">— Preston Harris, Rancher</cite>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-clay rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-ink mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We practice regenerative agriculture that improves our land year after year.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-clay rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-ink mb-3">Transparency</h3>
              <p className="text-gray-600">
                You know exactly where your meat comes from and how it was raised.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-clay rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-semibold text-ink mb-3">Care</h3>
              <p className="text-gray-600">
                Every animal is treated with respect and given the best life possible.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="heading-3 mb-6">Ready to taste the difference?</h2>
            <p className="body-large text-gray-600 mb-8 max-w-2xl mx-auto">
              Experience the quality that comes from a lifetime of caring for the land and animals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-brand-forest text-white hover:bg-opacity-90 focus:ring-brand-forest h-12 px-8 text-base"
              >
                Shop Our Meat
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-transparent text-brand-forest border-2 border-brand-forest hover:bg-brand-forest hover:text-white focus:ring-brand-forest h-12 px-8 text-base"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
