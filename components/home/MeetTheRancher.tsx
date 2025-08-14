import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { placeholders } from '@/lib/images'

export function MeetTheRancher() {
  const rancherImage = placeholders.ranch('Preston Harris standing in pasture with cattle')

  return (
    <section className="section-padding bg-brand-cream">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src={rancherImage.src}
              alt={rancherImage.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="heading-2 mb-4 text-brand-forest">
                From Our Family to Yours
              </h2>
              <div className="w-16 h-1 bg-accent-clay mb-6"></div>
            </div>

            <div className="space-y-4 text-gray-700">
              <p className="body-large">
                I'm Preston Harris, and Happyland Ranch is more than a place — it's a promise. 
                Every steak, chop, and drumstick we ship comes from animals raised with respect 
                for the land and care for the customer.
              </p>
              
              <p>
                Our cattle graze on native Oklahoma grasslands, our pigs root in wooded pastures, 
                and our chickens roam free under the big sky. We believe that happy, healthy animals 
                produce the best-tasting meat.
              </p>
              
              <p>
                When you buy from us, you're not just getting premium meat — you're becoming 
                part of the Happyland family and supporting sustainable ranching practices 
                that have been passed down for generations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild>
                <Link href="/about">Read Our Story</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/about/meet-the-rancher">Meet the Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
