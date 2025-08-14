import { Metadata } from 'next'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'
import Link from 'next/link'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Refund Policy - Happyland Ranch Meat Co.',
  description: 'Our refund and return policy for fresh, frozen ranch-raised meat products.',
  keywords: ['refund policy', 'returns', 'satisfaction guarantee', 'meat quality']
})

export default function RefundsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-brand-forest text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">Refund Policy</h1>
            <p className="body-large text-brand-cream">
              We stand behind the quality of our ranch-raised meats with our satisfaction guarantee.
            </p>
          </div>
        </div>
      </div>

      {/* Satisfaction Guarantee */}
      <div className="bg-accent-clay text-white py-12">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">100% Satisfaction Guarantee</h2>
            <p className="text-xl text-white opacity-90">
              If you're not completely satisfied with your order, we'll make it right. 
              Your happiness is our priority.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="section-padding">
        <div className="container-custom max-w-4xl">
          
          {/* Quick Reference */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-brand-forest mb-6 text-center">Quick Reference</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✅</span>
                </div>
                <h3 className="font-semibold text-ink mb-2">Quality Issues</h3>
                <p className="text-gray-600">Full refund or replacement for damaged or spoiled products</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⏰</span>
                </div>
                <h3 className="font-semibold text-ink mb-2">24-Hour Window</h3>
                <p className="text-gray-600">Report issues within 24 hours of delivery for fastest resolution</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="font-semibold text-ink mb-2">Easy Process</h3>
                <p className="text-gray-600">Simple contact process with photo evidence</p>
              </div>
            </div>
          </div>

          {/* Detailed Policy */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-brand-forest mb-6">Refund Eligibility</h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-green-400 pl-6">
                <h3 className="text-xl font-semibold text-ink mb-3">✅ Eligible for Full Refund</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Products that arrive spoiled or damaged</li>
                  <li>• Incorrect items or missing products from your order</li>
                  <li>• Products that don't meet our quality standards</li>
                  <li>• Delivery issues (package left unattended, damaged packaging)</li>
                  <li>• Temperature abuse during shipping (thawed products)</li>
                </ul>
              </div>

              <div className="border-l-4 border-yellow-400 pl-6">
                <h3 className="text-xl font-semibold text-ink mb-3">⚠️ Case-by-Case Review</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Customer dissatisfaction with taste or texture (we'll work with you)</li>
                  <li>• Products that don't meet customer expectations</li>
                  <li>• Issues reported after 48 hours of delivery</li>
                  <li>• Requests for different cuts or substitutions</li>
                </ul>
              </div>

              <div className="border-l-4 border-red-400 pl-6">
                <h3 className="text-xl font-semibold text-ink mb-3">❌ Not Eligible for Refund</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Products that were improperly stored after delivery</li>
                  <li>• Change of mind after proper delivery</li>
                  <li>• Products consumed in full before reporting issues</li>
                  <li>• Issues caused by customer's cooking methods</li>
                  <li>• Requests made more than 7 days after delivery</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Refund Process */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-brand-forest mb-6">How to Request a Refund</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-brand-forest rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">1</div>
                <div>
                  <h3 className="font-semibold text-ink mb-2">Contact Us Immediately</h3>
                  <p className="text-gray-700 mb-2">
                    Report any issues within 24 hours of delivery for fastest resolution. 
                    Contact us via email, phone, or our contact form.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 mb-1">
                      📧 Email: <a href="mailto:support@happylandranchmeatco.com" className="text-accent-clay hover:text-accent-gold">support@happylandranchmeatco.com</a>
                    </p>
                    <p className="text-gray-700">
                      📞 Phone: <a href="tel:+1-555-RANCH-CO" className="text-accent-clay hover:text-accent-gold">(555) RANCH-CO</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-brand-forest rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">2</div>
                <div>
                  <h3 className="font-semibold text-ink mb-2">Provide Order Information</h3>
                  <p className="text-gray-700 mb-2">
                    Please have the following information ready:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Order number</li>
                    <li>Delivery date and time</li>
                    <li>Description of the issue</li>
                    <li>Photos of the affected products (if applicable)</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-brand-forest rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">3</div>
                <div>
                  <h3 className="font-semibold text-ink mb-2">Photo Documentation</h3>
                  <p className="text-gray-700 mb-2">
                    For quality issues, please provide clear photos showing:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>The affected product(s)</li>
                    <li>Product packaging and labels</li>
                    <li>Any visible damage or spoilage</li>
                    <li>The shipping box and insulation (if damaged)</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-brand-forest rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">4</div>
                <div>
                  <h3 className="font-semibold text-ink mb-2">Resolution</h3>
                  <p className="text-gray-700">
                    We'll review your case and respond within 24 hours with a resolution. 
                    Options may include full refund, partial refund, or replacement products.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Processing Times */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-brand-forest mb-6">Refund Processing</h2>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-ink mb-4">Processing Times</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex justify-between">
                      <span>Credit Card:</span>
                      <span className="font-medium">3-5 business days</span>
                    </li>
                    <li className="flex justify-between">
                      <span>PayPal:</span>
                      <span className="font-medium">1-2 business days</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Bank Transfer:</span>
                      <span className="font-medium">5-7 business days</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-ink mb-4">What to Expect</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Email confirmation when refund is processed</li>
                    <li>• Refund to original payment method</li>
                    <li>• Full amount including shipping (if applicable)</li>
                    <li>• Tracking information for replacement orders</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Special Circumstances */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-brand-forest mb-6">Special Circumstances</h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Weather-Related Delays</h3>
                <p className="text-blue-700">
                  If severe weather causes shipping delays that affect product quality, 
                  we'll provide a full refund or replacement at no additional cost.
                </p>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-orange-800 mb-3">Carrier Issues</h3>
                <p className="text-orange-700">
                  We're not responsible for carrier delays, but we'll work with you to 
                  resolve any issues that affect product quality due to extended transit times.
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Partial Orders</h3>
                <p className="text-green-700">
                  If only part of your order is affected, we can process a partial refund 
                  for the affected items while you keep the rest of your order.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <div className="text-center bg-brand-forest text-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Questions About Our Refund Policy?</h2>
            <p className="text-brand-cream mb-6">
              Our customer service team is here to help resolve any issues quickly and fairly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-accent-clay text-white hover:bg-opacity-90 focus:ring-accent-clay h-12 px-6 text-base"
              >
                Contact Support
              </Link>
              <a 
                href="mailto:support@happylandranchmeatco.com"
                className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-transparent text-white border-2 border-white hover:bg-white hover:text-brand-forest focus:ring-white h-12 px-6 text-base"
              >
                Email Us Directly
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
