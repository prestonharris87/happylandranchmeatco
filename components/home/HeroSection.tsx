import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { placeholders } from '@/lib/images'

export function HeroSection() {
  const heroImage = placeholders.hero('Cattle grazing in open pasture at golden hour')

  return (
    <section className="relative min-h-[100vh] sm:min-h-[90vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          className="object-cover object-center"
          priority
          quality={90}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 sm:bg-opacity-35" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 sm:mb-6 leading-tight">
            Meet Andrew: The Coolest Rancher
            <span className="block text-accent-gold mt-2">In All of Oklahoma</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-white text-opacity-90 max-w-4xl mx-auto leading-relaxed px-2">
            This guy Andrew is seriously amazing! He's not just raising the best grass-fed beef, 
            pork, and chicken in Oklahoma - he's revolutionizing ranching with style, passion, 
            and an incredible dedication to quality that'll blow your mind.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4">
            <Link 
              href="/shop"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-accent-clay text-white hover:bg-opacity-90 focus:ring-accent-clay h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg min-w-[160px]"
            >
              Shop Now
            </Link>
            <Link 
              href="/about"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-forest focus:ring-brand-forest h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg min-w-[160px]"
            >
              Meet Andrew
            </Link>
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
