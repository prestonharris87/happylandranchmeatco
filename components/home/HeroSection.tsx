import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { placeholders } from '@/lib/images'

export function HeroSection() {
  const heroImage = placeholders.hero('Cattle grazing in open pasture at golden hour')

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
            Premium Ranch-Raised Beef, Pork & Chicken
            <span className="block text-accent-gold">Delivered to Your Door</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white text-opacity-90 max-w-3xl mx-auto leading-relaxed">
            Taste the difference of pasture-raised, ranch-direct meat. No hormones. 
            No antibiotics. Just honest flavor from our family ranch in Ada, Oklahoma.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button asChild size="xl" className="bg-accent-clay hover:bg-opacity-90">
              <Link href="/shop">Shop Now</Link>
            </Button>
            <Button asChild variant="secondary" size="xl" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-forest">
              <Link href="/about">Learn Our Story</Link>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 mx-auto text-white text-opacity-60"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-5" />
    </section>
  )
}
