import { Metadata } from 'next'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'
import { placeholderImage } from '@/lib/images'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Sustainability & Animal Care - Happyland Ranch Meat Co.',
  description: 'Learn about our regenerative agriculture practices, animal welfare standards, and commitment to environmental stewardship.',
  keywords: ['regenerative agriculture', 'sustainable farming', 'animal welfare', 'environmental stewardship', 'grass-fed cattle']
})

export default function SustainabilityPage() {
  const sustainabilityImages = [
    placeholderImage('Cattle grazing in restored oak savanna', 500, 400),
    placeholderImage('Diverse grassland ecosystem', 500, 400),
    placeholderImage('Rotational grazing system', 500, 400),
    placeholderImage('Wildlife habitat on ranch', 500, 400)
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-brand-forest text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">Sustainability & Animal Care</h1>
            <p className="body-large text-brand-cream">
              Our commitment to regenerative agriculture and ethical animal husbandry 
              creates healthier land, happier animals, and better meat.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="section-padding">
        <div className="container-custom">
          {/* Introduction */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="heading-2 mb-6 text-brand-forest">Regenerative Ranch Management</h2>
            <p className="body-large text-gray-700 mb-6">
              At Happyland Ranch, we practice regenerative agriculture that improves our land 
              year after year. Our approach mimics natural ecosystems, supporting biodiversity 
              while producing the highest quality meat.
            </p>
            <p className="body-base text-gray-600">
              Every decision we make considers the long-term health of our soil, water, plants, 
              animals, and community. This holistic approach creates a sustainable cycle that 
              benefits everyone involved.
            </p>
          </div>

          {/* Practices Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            {/* Oak Savanna Restoration */}
            <div>
              <div className="relative aspect-[5/4] overflow-hidden rounded-lg mb-6">
                <Image
                  src={sustainabilityImages[0].src}
                  alt={sustainabilityImages[0].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <h3 className="text-2xl font-semibold text-ink mb-4">Oak Savanna Restoration</h3>
              <p className="text-gray-600 mb-4">
                Our land is managed as a native oak savanna ecosystem, providing shade and 
                forage diversity for our animals while supporting native wildlife.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-accent-clay mt-1">•</span>
                  <span>Native grass and wildflower restoration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-clay mt-1">•</span>
                  <span>Strategic tree management for optimal pasture health</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-clay mt-1">•</span>
                  <span>Wildlife habitat corridors and water sources</span>
                </li>
              </ul>
            </div>

            {/* Rotational Grazing */}
            <div>
              <div className="relative aspect-[5/4] overflow-hidden rounded-lg mb-6">
                <Image
                  src={sustainabilityImages[2].src}
                  alt={sustainabilityImages[2].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <h3 className="text-2xl font-semibold text-ink mb-4">Rotational Grazing</h3>
              <p className="text-gray-600 mb-4">
                Our cattle are moved regularly between paddocks, allowing grasses to recover 
                and preventing overgrazing while building soil health.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-accent-clay mt-1">•</span>
                  <span>Planned grazing rotations based on grass growth</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-clay mt-1">•</span>
                  <span>Extended rest periods for pasture recovery</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-clay mt-1">•</span>
                  <span>Natural fertilization through managed grazing</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Animal Welfare Section */}
          <div className="bg-gray-50 rounded-lg p-12 mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-2 mb-6 text-brand-forest">Animal Welfare Standards</h2>
              <p className="body-large text-gray-700 mb-8">
                Our animals live as nature intended - on pasture with room to roam, 
                express natural behaviors, and thrive in a stress-free environment.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="text-lg font-semibold text-ink mb-3">Daily Care</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Daily health and welfare checks</li>
                    <li>• Access to fresh water and shelter</li>
                    <li>• Low-stress handling techniques</li>
                    <li>• Preventive health management</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-ink mb-3">Natural Living</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 100% pasture-raised environment</li>
                    <li>• Social herding with family groups</li>
                    <li>• Natural foraging and grazing behaviors</li>
                    <li>• Minimal intervention philosophy</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Environmental Impact */}
          <div className="mb-16">
            <h2 className="heading-2 mb-8 text-center text-brand-forest">Environmental Impact</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-accent-clay rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌱</span>
                </div>
                <h3 className="text-xl font-semibold text-ink mb-3">Soil Health</h3>
                <p className="text-gray-600">
                  Regenerative grazing increases soil organic matter, water retention, and carbon sequestration.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-accent-clay rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💧</span>
                </div>
                <h3 className="text-xl font-semibold text-ink mb-3">Water Quality</h3>
                <p className="text-gray-600">
                  Improved ground cover and root systems prevent erosion and protect water sources.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-accent-clay rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🦋</span>
                </div>
                <h3 className="text-xl font-semibold text-ink mb-3">Biodiversity</h3>
                <p className="text-gray-600">
                  Native plant restoration and wildlife habitat support diverse ecosystems.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-brand-forest text-white rounded-lg p-12">
            <h2 className="heading-3 mb-6">Taste the Difference Sustainability Makes</h2>
            <p className="body-large text-brand-cream mb-8 max-w-2xl mx-auto">
              When you choose Happyland Ranch, you're supporting regenerative agriculture 
              and ethical animal husbandry that benefits the land, animals, and community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-accent-clay text-white hover:bg-opacity-90 focus:ring-accent-clay h-12 px-8 text-base"
              >
                Shop Our Meat
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-transparent text-white border-2 border-white hover:bg-white hover:text-brand-forest focus:ring-white h-12 px-8 text-base"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
