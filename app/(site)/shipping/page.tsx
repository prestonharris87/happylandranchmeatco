import { Metadata } from 'next'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Shipping Information - Happyland Ranch Meat Co.',
  description: 'Learn about our nationwide shipping, packaging, and delivery process for fresh, frozen ranch-raised meat.',
  keywords: ['meat shipping', 'frozen meat delivery', 'FedEx shipping', 'nationwide delivery']
})

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-brand-forest text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">Shipping Information</h1>
            <p className="body-large text-brand-cream">
              Fresh, frozen ranch-raised meat delivered safely to your door nationwide.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="section-padding">
        <div className="container-custom max-w-4xl">
          
          {/* Shipping Overview */}
          <div className="mb-12">
            <h2 className="heading-2 mb-6 text-brand-forest">How We Ship</h2>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="w-16 h-16 bg-accent-clay rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📦</span>
                  </div>
                  <h3 className="text-lg font-semibold text-ink mb-2">Frozen Packaging</h3>
                  <p className="text-gray-600">Vacuum-sealed and flash-frozen for maximum freshness</p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-accent-clay rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🧊</span>
                  </div>
                  <h3 className="text-lg font-semibold text-ink mb-2">Insulated Shipping</h3>
                  <p className="text-gray-600">Dry ice and insulated packaging keeps meat frozen</p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-accent-clay rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚚</span>
                  </div>
                  <h3 className="text-lg font-semibold text-ink mb-2">FedEx Delivery</h3>
                  <p className="text-gray-600">Fast, reliable delivery within 2-3 business days</p>
                </div>
              </div>
            </div>
          </div>

          {/* Shipping Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-semibold text-ink mb-4">Shipping Areas</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-accent-clay mt-1">✓</span>
                  <span>All 48 contiguous United States</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-clay mt-1">✓</span>
                  <span>Alaska and Hawaii (additional shipping charges apply)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-clay mt-1">•</span>
                  <span>Currently no international shipping</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-ink mb-4">Shipping Costs</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-accent-clay mt-1">✓</span>
                  <span><strong>FREE shipping</strong> on orders over $149</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-clay mt-1">•</span>
                  <span>Orders under $149: $25 shipping fee</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-clay mt-1">•</span>
                  <span>Alaska/Hawaii: Additional $50 shipping charge</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Processing & Delivery */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-ink mb-6">Processing & Delivery Timeline</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-accent-clay rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">1</div>
                <div>
                  <h4 className="font-semibold text-ink mb-2">Order Processing (1-2 business days)</h4>
                  <p className="text-gray-600">Orders are carefully packed and prepared for shipment</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-accent-clay rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">2</div>
                <div>
                  <h4 className="font-semibold text-ink mb-2">Shipping (2-3 business days)</h4>
                  <p className="text-gray-600">FedEx overnight or 2-day delivery depending on location</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-accent-clay rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">3</div>
                <div>
                  <h4 className="font-semibold text-ink mb-2">Delivery</h4>
                  <p className="text-gray-600">Signature required for delivery to ensure freshness</p>
                </div>
              </div>
            </div>
          </div>

          {/* Packaging Details */}
          <div className="bg-brand-forest text-white rounded-lg p-8 mb-12">
            <h3 className="text-xl font-semibold mb-6">Our Packaging Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Individual Packaging</h4>
                <ul className="space-y-2 text-brand-cream">
                  <li>• Vacuum-sealed for freshness</li>
                  <li>• Clearly labeled with cut and weight</li>
                  <li>• Flash-frozen to preserve quality</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Shipping Container</h4>
                <ul className="space-y-2 text-brand-cream">
                  <li>• Insulated styrofoam cooler</li>
                  <li>• Dry ice for temperature control</li>
                  <li>• Secure packaging to prevent damage</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-ink mb-6">Important Shipping Notes</h3>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 mt-1">⚠️</span>
                  <span><strong>Signature Required:</strong> Someone must be available to receive the package</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 mt-1">⚠️</span>
                  <span><strong>Immediate Storage:</strong> Refrigerate or freeze immediately upon delivery</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 mt-1">⚠️</span>
                  <span><strong>Dry Ice Safety:</strong> Handle dry ice with gloves and ensure proper ventilation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 mt-1">⚠️</span>
                  <span><strong>Order Modifications:</strong> Changes must be made within 24 hours of ordering</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-ink mb-4">Questions About Shipping?</h3>
            <p className="text-gray-600 mb-6">
              Our team is here to help with any shipping questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:shipping@happylandranchmeatco.com"
                className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-brand-forest text-white hover:bg-opacity-90 focus:ring-brand-forest h-12 px-6 text-base"
              >
                Email Shipping Team
              </a>
              <a 
                href="/contact"
                className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-transparent text-brand-forest border-2 border-brand-forest hover:bg-brand-forest hover:text-white focus:ring-brand-forest h-12 px-6 text-base"
              >
                Contact Form
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
