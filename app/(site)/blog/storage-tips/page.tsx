import { Metadata } from 'next'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'
import { placeholderImage } from '@/lib/images'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Meat Storage Tips - Happyland Ranch Meat Co.',
  description: 'Learn proper meat storage techniques to maintain freshness, safety, and quality of your ranch-raised meats.',
  keywords: ['meat storage', 'food safety', 'freezing meat', 'refrigerator storage', 'meat preservation']
})

const storageTips = [
  {
    icon: '🧊',
    title: 'Freezer Storage',
    duration: '6-12 months',
    description: 'Proper freezing techniques for long-term storage',
    tips: [
      'Wrap meat tightly in freezer paper or vacuum seal',
      'Label with cut type and date',
      'Store at 0°F (-18°C) or below',
      'Use within recommended timeframes'
    ]
  },
  {
    icon: '❄️',
    title: 'Refrigerator Storage',
    duration: '3-5 days',
    description: 'Safe refrigeration for short-term storage',
    tips: [
      'Keep at 40°F (4°C) or below',
      'Store on bottom shelf to prevent drips',
      'Use within 3-5 days of thawing',
      'Keep original packaging when possible'
    ]
  },
  {
    icon: '🌡️',
    title: 'Thawing Methods',
    duration: '12-24 hours',
    description: 'Safe ways to thaw frozen meat',
    tips: [
      'Thaw in refrigerator (safest method)',
      'Cold water bath (change water every 30 min)',
      'Never thaw at room temperature',
      'Cook immediately after thawing'
    ]
  }
]

const meatTypes = [
  {
    type: 'Ground Beef',
    fridge: '1-2 days',
    freezer: '3-4 months',
    image: placeholderImage('Fresh ground beef package', 300, 200)
  },
  {
    type: 'Steaks & Roasts',
    fridge: '3-5 days',
    freezer: '6-12 months',
    image: placeholderImage('Fresh beef steaks', 300, 200)
  },
  {
    type: 'Pork Chops',
    fridge: '3-5 days',
    freezer: '4-6 months',
    image: placeholderImage('Fresh pork chops', 300, 200)
  },
  {
    type: 'Whole Chicken',
    fridge: '1-2 days',
    freezer: '12 months',
    image: placeholderImage('Fresh whole chicken', 300, 200)
  },
  {
    type: 'Chicken Parts',
    fridge: '1-2 days',
    freezer: '9 months',
    image: placeholderImage('Fresh chicken pieces', 300, 200)
  },
  {
    type: 'Sausages',
    fridge: '1-2 days',
    freezer: '1-2 months',
    image: placeholderImage('Fresh sausages', 300, 200)
  }
]

export default function StorageTipsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-brand-forest text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">Meat Storage Tips</h1>
            <p className="body-large text-brand-cream">
              Keep your premium ranch-raised meats fresh and safe with our expert 
              storage guidelines and food safety tips.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Safety Alert */}
      <div className="bg-red-50 border-l-4 border-red-400 py-6">
        <div className="container-custom">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-red-800">Food Safety First</h3>
              <p className="text-red-700">
                Always follow safe storage practices. When in doubt, throw it out! 
                Never consume meat that smells off, feels slimy, or has been stored improperly.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Storage Methods */}
      <div className="section-padding">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-12">Storage Methods</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {storageTips.map((tip, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="text-6xl mb-4">{tip.icon}</div>
                <h3 className="text-2xl font-bold text-brand-forest mb-2">{tip.title}</h3>
                <p className="text-accent-clay font-semibold text-lg mb-4">{tip.duration}</p>
                <p className="text-gray-600 mb-6">{tip.description}</p>
                <ul className="text-left space-y-2">
                  {tip.tips.map((tipItem, tipIndex) => (
                    <li key={tipIndex} className="flex items-start gap-2 text-gray-700">
                      <span className="text-accent-clay mt-1">•</span>
                      <span>{tipItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Storage Times by Meat Type */}
      <div className="bg-gray-50 section-padding">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-12">Storage Times by Meat Type</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {meatTypes.map((meat, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative aspect-[3/2]">
                  <Image
                    src={meat.image.src}
                    alt={meat.image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-forest mb-4">{meat.type}</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Refrigerator:</span>
                      <span className="font-semibold text-ink">{meat.fridge}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Freezer:</span>
                      <span className="font-semibold text-ink">{meat.freezer}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Temperature Guidelines */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 text-center mb-12">Temperature Guidelines</h2>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-brand-forest mb-6">Safe Storage Temperatures</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">❄️</span>
                        <span className="font-medium">Freezer</span>
                      </div>
                      <span className="font-bold text-blue-600">0°F (-18°C) or below</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">🧊</span>
                        <span className="font-medium">Refrigerator</span>
                      </div>
                      <span className="font-bold text-green-600">40°F (4°C) or below</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">🚨</span>
                        <span className="font-medium">Danger Zone</span>
                      </div>
                      <span className="font-bold text-red-600">40-140°F (4-60°C)</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-brand-forest mb-6">Signs of Spoilage</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-yellow-50 rounded-lg">
                      <h4 className="font-semibold text-yellow-800 mb-2">Visual Signs</h4>
                      <ul className="text-yellow-700 space-y-1">
                        <li>• Slimy or sticky texture</li>
                        <li>• Gray or greenish color</li>
                        <li>• Mold growth</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <h4 className="font-semibold text-orange-800 mb-2">Smell Test</h4>
                      <ul className="text-orange-700 space-y-1">
                        <li>• Sour or ammonia-like odor</li>
                        <li>• Strong, unpleasant smell</li>
                        <li>• Any off or unusual odor</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pro Tips */}
      <div className="bg-brand-forest text-white section-padding">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-12">Pro Storage Tips</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-clay rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Label Everything</h3>
              <p className="text-brand-cream text-sm">
                Always label with cut type, date, and weight for easy identification.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-clay rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">First In, First Out</h3>
              <p className="text-brand-cream text-sm">
                Use older items first to prevent waste and ensure freshness.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-clay rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Proper Packaging</h3>
              <p className="text-brand-cream text-sm">
                Remove excess air and use appropriate wrapping materials.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-clay rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧽</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Clean Storage</h3>
              <p className="text-brand-cream text-sm">
                Keep storage areas clean and sanitized to prevent contamination.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="section-padding">
        <div className="container-custom text-center">
          <h2 className="heading-3 mb-6 text-brand-forest">Questions About Storage?</h2>
          <p className="body-large text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team is here to help with any questions about storing and handling 
            your premium ranch-raised meats safely.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-brand-forest text-white hover:bg-opacity-90 focus:ring-brand-forest h-12 px-8 text-base"
            >
              Contact Us
            </Link>
            <Link
              href="/shop"
              className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-transparent text-brand-forest border-2 border-brand-forest hover:bg-brand-forest hover:text-white focus:ring-brand-forest h-12 px-8 text-base"
            >
              Shop Fresh Meats
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
