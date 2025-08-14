import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'
import { placeholders } from '@/lib/images'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Our Story – Family Ranch Since 1952',
  description: 'Learn about Happyland Ranch, our commitment to sustainable ranching, and how we raise premium beef, pork, and chicken in Ada, Oklahoma.',
  canonical: '/about',
  keywords: [
    'happyland ranch story',
    'oklahoma ranch',
    'sustainable ranching',
    'family ranch',
    'grass-fed beef ranch',
    'pasture-raised meat',
    'ada oklahoma ranch',
    'ranch history'
  ],
})

export default function AboutPage() {
  const heroImage = placeholders.ranch('Happyland Ranch panoramic view with cattle')
  const familyImage = placeholders.ranch('Harris family at the ranch')
  const cattleImage = placeholders.ranch('Cattle grazing in oak savanna')

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-brand-forest overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>

        <div className="relative z-10 container-custom text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl text-white text-opacity-90 max-w-3xl mx-auto">
            Three generations of ranching excellence in the heart of Oklahoma
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="text-center mb-16">
              <h2 className="heading-2 mb-6 text-brand-forest">
                From Our Family to Yours
              </h2>
              <div className="w-16 h-1 bg-accent-clay mx-auto mb-8"></div>
              <p className="body-large text-gray-700 leading-relaxed">
                At Happyland Ranch, meat isn't just what we sell — it's a reflection of how we live. 
                We raise our animals with respect for the land, the herd, and the customer. By buying 
                direct, you know exactly where your food comes from and the care that went into raising it.
              </p>
            </div>

            {/* Family Story */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="space-y-6">
                <h3 className="text-2xl font-serif font-bold text-brand-forest">
                  A Legacy Built on the Land
                </h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Happyland Ranch was established in 1952 by my grandfather, William Harris, 
                    on 2,400 acres of rolling Oklahoma prairie. What started as a small cattle 
                    operation has grown into a three-generation commitment to sustainable ranching 
                    and premium meat production.
                  </p>
                  <p>
                    I'm Preston Harris, the third generation to call this land home. I grew up 
                    walking these pastures, learning from my father and grandfather about the 
                    delicate balance between land stewardship and livestock management. Every 
                    morning starts the same way — checking on the herd, monitoring the grasslands, 
                    and ensuring our animals are healthy and content.
                  </p>
                  <p>
                    Our mission is simple: raise the best meat possible while caring for the land 
                    that sustains us. We believe that happy, healthy animals produce the most 
                    flavorful meat, and that sustainable practices today ensure the ranch will 
                    thrive for generations to come.
                  </p>
                </div>
              </div>
              
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={familyImage.src}
                  alt={familyImage.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Values Section */}
            <div className="bg-brand-cream rounded-2xl p-8 md:p-12 mb-20">
              <h3 className="text-2xl font-serif font-bold text-brand-forest text-center mb-8">
                Our Values
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-forest rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white">🌱</span>
                  </div>
                  <h4 className="font-semibold text-ink mb-2">Sustainability</h4>
                  <p className="text-sm text-gray-600">
                    We practice rotational grazing, restore native grasslands, and ensure 
                    every decision supports long-term land health.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-forest rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white">🐄</span>
                  </div>
                  <h4 className="font-semibold text-ink mb-2">Animal Welfare</h4>
                  <p className="text-sm text-gray-600">
                    Our animals roam freely on open pastures with access to shade, 
                    fresh water, and veterinary care when needed.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-forest rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white">🤝</span>
                  </div>
                  <h4 className="font-semibold text-ink mb-2">Transparency</h4>
                  <p className="text-sm text-gray-600">
                    You know exactly where your meat comes from, how it was raised, 
                    and the family behind every cut.
                  </p>
                </div>
              </div>
            </div>

            {/* Land Management */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden lg:order-1">
                <Image
                  src={cattleImage.src}
                  alt={cattleImage.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              
              <div className="space-y-6 lg:order-2">
                <h3 className="text-2xl font-serif font-bold text-brand-forest">
                  Restoring the Prairie
                </h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Our ranch is managed as an oak savanna ecosystem, combining native 
                    grasslands with scattered oak groves that provide natural shade and 
                    windbreaks for our cattle. This diverse landscape supports not only 
                    our livestock but also native wildlife, birds, and beneficial insects.
                  </p>
                  <p>
                    We practice intensive rotational grazing, moving our cattle through 
                    different paddocks to allow grasslands time to recover and regrow. 
                    This mimics the natural patterns of wild buffalo herds and helps 
                    build soil health, sequester carbon, and increase biodiversity.
                  </p>
                  <p>
                    Every year, we plant native wildflowers and grasses, remove invasive 
                    species, and monitor soil health. The result is a thriving ecosystem 
                    that produces healthier animals and more nutritious meat.
                  </p>
                </div>
              </div>
            </div>

            {/* Quality Promise */}
            <div className="text-center mb-16">
              <h3 className="text-2xl font-serif font-bold text-brand-forest mb-6">
                Our Promise to You
              </h3>
              <div className="max-w-3xl mx-auto space-y-4 text-gray-700">
                <p>
                  When you choose Happyland Ranch, you're not just buying meat — you're 
                  supporting a way of life that values quality over quantity, sustainability 
                  over shortcuts, and relationships over transactions.
                </p>
                <p>
                  Every steak, chop, and roast we ship carries with it the story of our 
                  land, our animals, and our commitment to doing things the right way. 
                  We're proud to share that story with your family.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  href="/shop"
                  className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-brand-forest text-white hover:bg-opacity-90 focus:ring-brand-forest h-12 px-6 text-base"
                >
                  Shop Our Meat
                </Link>
                <Link 
                  href="/about/meet-the-rancher"
                  className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-transparent text-brand-forest border-2 border-brand-forest hover:bg-brand-forest hover:text-white focus:ring-brand-forest h-12 px-6 text-base"
                >
                  Meet the Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
