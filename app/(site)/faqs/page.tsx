import { Metadata } from 'next'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Frequently Asked Questions - Happyland Ranch Meat Co.',
  description: 'Get answers to common questions about our ranch-raised meat, shipping, storage, and more.',
  keywords: ['meat shipping FAQ', 'ranch meat questions', 'meat storage tips', 'grass-fed beef FAQ']
})

const faqs = [
  {
    category: 'Shipping & Delivery',
    items: [
      {
        question: 'How is the meat shipped?',
        answer: 'All our meat is shipped frozen via FedEx in insulated packaging with dry ice to ensure it arrives fresh and safe.'
      },
      {
        question: 'What areas do you ship to?',
        answer: 'We currently ship to all 48 contiguous United States. Alaska and Hawaii shipping available upon request.'
      },
      {
        question: 'How long does shipping take?',
        answer: 'Most orders are processed within 1-2 business days and arrive within 2-3 business days via FedEx.'
      },
      {
        question: 'Is there free shipping?',
        answer: 'Yes! We offer free shipping on all orders over $149.'
      }
    ]
  },
  {
    category: 'Product & Quality',
    items: [
      {
        question: 'Are your animals grass-fed and pasture-raised?',
        answer: 'Yes, all our cattle are 100% grass-fed and pasture-raised. Our pork and chicken are also pasture-raised with access to outdoor areas.'
      },
      {
        question: 'Do you use hormones or antibiotics?',
        answer: 'Never. We raise all our animals without the use of hormones, antibiotics, or other artificial growth promoters.'
      },
      {
        question: 'How should I store the meat when it arrives?',
        answer: 'Keep frozen until ready to use. Our vacuum-sealed packages can be stored in the freezer for up to 12 months. Thaw in refrigerator 24-48 hours before cooking.'
      }
    ]
  },
  {
    category: 'Orders & Returns',
    items: [
      {
        question: 'What if I\'m not satisfied with my order?',
        answer: 'We stand behind the quality of our meat. If you\'re not completely satisfied, contact us within 7 days of delivery for a full refund or replacement.'
      },
      {
        question: 'Can I modify or cancel my order?',
        answer: 'Orders can be modified or cancelled within 24 hours of placing. After that, we may have already begun processing your order.'
      },
      {
        question: 'Do you offer subscriptions?',
        answer: 'Yes! We offer monthly and quarterly subscription boxes with our most popular cuts. Save 10% on all subscription orders.'
      }
    ]
  }
]

export default function FAQsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-brand-forest text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">Frequently Asked Questions</h1>
            <p className="body-large text-brand-cream">
              Everything you need to know about our ranch-raised meat, shipping, and more.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="heading-3 mb-8 text-brand-forest border-b border-gray-200 pb-4">
                  {category.category}
                </h2>
                
                <div className="space-y-8">
                  {category.items.map((faq, faqIndex) => (
                    <div key={faqIndex} className="border-l-4 border-accent-clay pl-6">
                      <h3 className="text-xl font-semibold text-ink mb-3">
                        {faq.question}
                      </h3>
                      <p className="body-base text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 text-center bg-gray-50 rounded-lg p-12">
            <h2 className="heading-3 mb-4">Still have questions?</h2>
            <p className="body-large text-gray-600 mb-6">
              We're here to help! Reach out to us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:hello@happylandranchmeatco.com"
                className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-brand-forest text-white hover:bg-opacity-90 focus:ring-brand-forest h-12 px-6 text-base"
              >
                Email Us
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
