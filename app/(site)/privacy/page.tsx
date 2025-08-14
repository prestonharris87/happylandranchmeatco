import { Metadata } from 'next'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Privacy Policy - Happyland Ranch Meat Co.',
  description: 'Privacy policy explaining how we collect, use, and protect your personal information.',
  keywords: ['privacy policy', 'data protection', 'personal information', 'cookies']
})

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-brand-forest text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">Privacy Policy</h1>
            <p className="body-large text-brand-cream">
              We respect your privacy and are committed to protecting your personal information.
            </p>
          </div>
        </div>
      </div>

      {/* Privacy Content */}
      <div className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-brand-forest mb-4">1. Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support.
              </p>
              
              <h3 className="text-xl font-semibold text-brand-forest mb-3">Personal Information</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Name and contact information (email, phone, address)</li>
                <li>Payment information (processed securely through our payment providers)</li>
                <li>Order history and preferences</li>
                <li>Account credentials and profile information</li>
              </ul>

              <h3 className="text-xl font-semibold text-brand-forest mb-3">Automatically Collected Information</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website information</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-brand-forest mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use the information we collect to provide, maintain, and improve our services:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Process and fulfill your orders</li>
                <li>Send order confirmations and shipping updates</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Prevent fraud and ensure security</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-brand-forest mb-4">3. Information Sharing</h2>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties except as described in this policy:
              </p>
              
              <h3 className="text-xl font-semibold text-brand-forest mb-3">Service Providers</h3>
              <p className="text-gray-700 mb-4">
                We may share information with trusted third-party service providers who assist us in operating our website and conducting our business:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Payment processors (Stripe, PayPal)</li>
                <li>Shipping carriers (FedEx, UPS)</li>
                <li>Email service providers</li>
                <li>Analytics providers (Google Analytics)</li>
                <li>Customer support platforms</li>
              </ul>

              <h3 className="text-xl font-semibold text-brand-forest mb-3">Legal Requirements</h3>
              <p className="text-gray-700 mb-4">
                We may disclose your information when required by law or to protect our rights, property, or safety.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-brand-forest mb-4">4. Cookies and Tracking</h2>
              <p className="text-gray-700 mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our website:
              </p>
              
              <h3 className="text-xl font-semibold text-brand-forest mb-3">Types of Cookies We Use</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
              </ul>

              <p className="text-gray-700 mb-4">
                You can control cookies through your browser settings, but disabling certain cookies may affect website functionality.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-brand-forest mb-4">5. Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate security measures to protect your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>SSL encryption for data transmission</li>
                <li>Secure payment processing</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and employee training</li>
                <li>Data backup and recovery procedures</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-brand-forest mb-4">6. Your Rights</h2>
              <p className="text-gray-700 mb-4">
                You have certain rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li><strong>Access:</strong> Request a copy of your personal information</li>
                <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
              </ul>
              <p className="text-gray-700 mb-4">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-brand-forest mb-4">7. Data Retention</h2>
              <p className="text-gray-700 mb-4">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Account information: Until account deletion</li>
                <li>Order information: 7 years for tax and legal purposes</li>
                <li>Marketing preferences: Until you unsubscribe</li>
                <li>Website analytics: Up to 26 months</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-brand-forest mb-4">8. Children's Privacy</h2>
              <p className="text-gray-700 mb-4">
                Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-brand-forest mb-4">9. Changes to This Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. Your continued use of our services after any modifications constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-brand-forest mb-4">10. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Happyland Ranch Meat Co.</strong>
                </p>
                <p className="text-gray-700 mb-2">
                  Email: <a href="mailto:privacy@happylandranchmeatco.com" className="text-accent-clay hover:text-accent-gold">privacy@happylandranchmeatco.com</a>
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
