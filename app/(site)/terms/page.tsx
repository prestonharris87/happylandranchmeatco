import { Metadata } from 'next'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Terms of Service - Happyland Ranch Meat Co.',
  description: 'Terms of service and conditions for using Happyland Ranch Meat Co. website and purchasing our products.',
  keywords: ['terms of service', 'terms and conditions', 'legal', 'policy']
})

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-brand-forest text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">Terms of Service</h1>
            <p className="body-large text-brand-cream">
              Please read these terms carefully before using our website or purchasing our products.
            </p>
          </div>
        </div>
      </div>

      {/* Terms Content */}
      <div className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-brand-forest mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using the Happyland Ranch Meat Co. website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-brand-forest mb-4">2. Product Information</h2>
              <p className="text-gray-700 mb-4">
                We strive to provide accurate product descriptions, weights, and pricing. However, we do not warrant that product descriptions or other content is accurate, complete, reliable, current, or error-free.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>All weights are approximate and may vary slightly</li>
                <li>Product availability is subject to change</li>
                <li>We reserve the right to correct any errors in pricing or product information</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-brand-forest mb-4">3. Orders and Payment</h2>
              <p className="text-gray-700 mb-4">
                By placing an order, you are making an offer to purchase products subject to these terms and conditions.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>We reserve the right to refuse or cancel any order</li>
                <li>Payment must be received before products are shipped</li>
                <li>All prices are subject to change without notice</li>
                <li>Orders may be modified or cancelled within 24 hours of placement</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-brand-forest mb-4">4. Shipping and Delivery</h2>
              <p className="text-gray-700 mb-4">
                We ship nationwide using insulated packaging and dry ice to ensure product quality and safety.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Delivery times are estimates and not guaranteed</li>
                <li>Signature is required upon delivery</li>
                <li>Risk of loss passes to buyer upon delivery</li>
                <li>We are not responsible for delays caused by shipping carriers</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-brand-forest mb-4">5. Returns and Refunds</h2>
              <p className="text-gray-700 mb-4">
                Due to the perishable nature of our products, we have specific policies regarding returns and refunds:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Products must be reported as damaged or defective within 24 hours of delivery</li>
                <li>Refunds will be issued for products that arrive spoiled or damaged</li>
                <li>Customer must provide photographic evidence of damaged products</li>
                <li>We reserve the right to request return of damaged products for inspection</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-brand-forest mb-4">6. Food Safety and Handling</h2>
              <p className="text-gray-700 mb-4">
                Customers are responsible for proper handling and storage of products upon receipt:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Products must be refrigerated or frozen immediately upon receipt</li>
                <li>Follow all food safety guidelines for handling raw meat</li>
                <li>We are not liable for illness resulting from improper handling or storage</li>
                <li>Cook all products to safe internal temperatures</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-brand-forest mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                In no event shall Happyland Ranch Meat Co. be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-brand-forest mb-4">8. Privacy Policy</h2>
              <p className="text-gray-700 mb-4">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services, to understand our practices.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-brand-forest mb-4">9. Modifications to Terms</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services constitutes acceptance of any modifications.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-brand-forest mb-4">10. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Happyland Ranch Meat Co.</strong>
                </p>
                <p className="text-gray-700 mb-2">
                  Email: <a href="mailto:legal@happylandranchmeatco.com" className="text-accent-clay hover:text-accent-gold">legal@happylandranchmeatco.com</a>
                </p>
                <p className="text-gray-700 mb-2">
                  Phone: <a href="tel:+1-555-RANCH-CO" className="text-accent-clay hover:text-accent-gold">(555) RANCH-CO</a>
                </p>
                <p className="text-gray-700">
                  Address: 123 Ranch Road, Oklahoma City, OK 73102
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
