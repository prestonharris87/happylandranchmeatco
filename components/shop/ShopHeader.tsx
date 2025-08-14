import Image from 'next/image'
import { placeholders } from '@/lib/images'

export function ShopHeader() {
  const headerImage = placeholders.collection('Premium ranch meat selection')

  return (
    <section className="relative py-16 bg-brand-forest overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={headerImage.src}
          alt={headerImage.alt}
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
          Premium Ranch-Raised Meat
        </h1>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-xl mb-8 text-white text-opacity-90 leading-relaxed">
            Welcome to our online ranch store, where premium cuts meet pasture-raised care. 
            Our beef, pork, and chicken are raised without hormones or antibiotics, and shipped 
            fresh from our ranch in Ada, Oklahoma. Whether you're looking for grass-fed ribeyes, 
            heritage pork chops, or pasture-raised chicken breasts, you'll find it here — 
            ready to ship to your door.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <div className="text-2xl font-bold mb-1">500+</div>
              <div className="text-sm text-white text-opacity-80">Premium Products</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <div className="text-2xl font-bold mb-1">48 Hours</div>
              <div className="text-sm text-white text-opacity-80">Fresh Delivery</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <div className="text-2xl font-bold mb-1">100%</div>
              <div className="text-sm text-white text-opacity-80">Satisfaction Guaranteed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
