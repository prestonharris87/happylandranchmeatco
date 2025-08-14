import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { placeholders } from '@/lib/images'

export function SeasonalPromo() {
  const promoImage = placeholders.hero('Summer grill box with assorted meats')

  return (
    <section className="section-padding bg-gradient-to-r from-accent-clay to-accent-gold">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <Badge variant="warning" className="w-fit mb-4">
                Limited Time Offer
              </Badge>
              
              <h2 className="heading-2 mb-4">
                Fire Up the Grill
              </h2>
              
              <p className="body-large text-gray-600 mb-6">
                Save 15% on our Summer Grill Box. Includes ribeyes, pork chops, 
                and chicken breasts — all pasture-raised, ready for your backyard feast.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-clay rounded-full"></div>
                  <span className="text-gray-700">2 Grass-Fed Ribeye Steaks (14oz each)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-clay rounded-full"></div>
                  <span className="text-gray-700">4 Heritage Pork Chops (8oz each)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-clay rounded-full"></div>
                  <span className="text-gray-700">2 Pasture-Raised Chicken Breasts</span>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-8">
                <div className="text-3xl font-bold text-brand-forest">
                  $89.99
                </div>
                <div className="text-xl text-gray-500 line-through">
                  $105.99
                </div>
                <Badge variant="success">
                  Save $16
                </Badge>
              </div>

              <Button asChild size="lg" className="w-fit">
                <Link href="/shop/collections/grill-box">
                  Shop the Grill Box
                </Link>
              </Button>
            </div>

            {/* Image */}
            <div className="relative h-64 lg:h-auto">
              <Image
                src={promoImage.src}
                alt={promoImage.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
