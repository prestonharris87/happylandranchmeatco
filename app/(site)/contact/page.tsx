import { Metadata } from 'next'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'
import { siteConfig } from '@/config/site'
import { ContactForm } from '@/components/ContactForm'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Contact Us – Questions About Our Ranch-Raised Meat',
  description: 'Have questions about our grass-fed beef, pasture-raised pork, or shipping? Contact Happyland Ranch directly. We\'re here to help with orders, cooking tips, and more.',
  canonical: '/contact',
  keywords: [
    'contact happyland ranch',
    'ranch meat questions',
    'beef delivery support',
    'oklahoma ranch contact',
    'meat order help',
    'grass-fed beef questions'
  ],
})

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-brand-forest text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-white text-opacity-90 max-w-2xl mx-auto">
            Questions about our meat? Need help with your order? Want to learn more 
            about our ranching practices? We're here to help.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="heading-3 mb-8 text-brand-forest">
                We're Here to Help
              </h2>
              
              <div className="space-y-8 mb-12">
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-brand-forest rounded-full">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink mb-1">Phone</h3>
                    <p className="text-gray-600 mb-2">{siteConfig.contact.phone}</p>
                    <p className="text-sm text-gray-500">
                      Monday - Friday, 8:00 AM - 6:00 PM CT<br />
                      Saturday, 9:00 AM - 4:00 PM CT
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-brand-forest rounded-full">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink mb-1">Email</h3>
                    <p className="text-gray-600 mb-2">{siteConfig.contact.email}</p>
                    <p className="text-sm text-gray-500">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-brand-forest rounded-full">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink mb-1">Ranch Location</h3>
                    <p className="text-gray-600 mb-2">
                      {siteConfig.contact.address.street}<br />
                      {siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.zip}
                    </p>
                    <p className="text-sm text-gray-500">
                      Ranch tours available by appointment
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-brand-forest rounded-full">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink mb-1">Business Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM CT</p>
                      <p>Saturday: 9:00 AM - 4:00 PM CT</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Link */}
              <div className="bg-brand-cream rounded-lg p-6">
                <h3 className="font-semibold text-brand-forest mb-3">
                  Need a Quick Answer?
                </h3>
                <p className="text-gray-700 mb-4">
                  Check out our frequently asked questions for information about 
                  shipping, storage, cooking tips, and more.
                </p>
                <a 
                  href="/faqs" 
                  className="text-brand-forest font-medium hover:underline"
                >
                  View FAQs →
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="heading-3 mb-6 text-brand-forest">
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Help Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-3 mb-4 text-brand-forest">
              How Can We Help?
            </h2>
            <p className="body-large text-gray-600 max-w-2xl mx-auto">
              Here are some common topics our customers ask about.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-brand-forest transition-colors duration-200">
              <div className="w-12 h-12 bg-brand-forest rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">📦</span>
              </div>
              <h3 className="font-semibold text-ink mb-2">Shipping & Delivery</h3>
              <p className="text-sm text-gray-600">
                Questions about shipping zones, delivery times, and packaging.
              </p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-brand-forest transition-colors duration-200">
              <div className="w-12 h-12 bg-brand-forest rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">🥩</span>
              </div>
              <h3 className="font-semibold text-ink mb-2">Product Questions</h3>
              <p className="text-sm text-gray-600">
                Learn about our cuts, sourcing, and ranching practices.
              </p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-brand-forest transition-colors duration-200">
              <div className="w-12 h-12 bg-brand-forest rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">👨‍🍳</span>
              </div>
              <h3 className="font-semibold text-ink mb-2">Cooking Tips</h3>
              <p className="text-sm text-gray-600">
                Get expert advice on preparing and cooking our premium cuts.
              </p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-brand-forest transition-colors duration-200">
              <div className="w-12 h-12 bg-brand-forest rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">🛒</span>
              </div>
              <h3 className="font-semibold text-ink mb-2">Order Support</h3>
              <p className="text-sm text-gray-600">
                Help with placing orders, account issues, and special requests.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
