import Image from 'next/image'
import { placeholders } from '@/lib/images'

const trustPoints = [
  {
    icon: placeholders.icon('Pasture-raised cattle icon'),
    title: 'Pasture-Raised',
    description: 'Our animals roam wide-open pastures'
  },
  {
    icon: placeholders.icon('Ranch direct icon'),
    title: 'Ranch Direct',
    description: 'No middleman. No mystery. Just meat you can trust.'
  },
  {
    icon: placeholders.icon('FedEx cold shipping icon'),
    title: 'FedEx Cold-Ship Nationwide',
    description: 'Arrives fresh, stays fresh'
  },
  {
    icon: placeholders.icon('No hormones or antibiotics icon'),
    title: 'No Hormones or Antibiotics',
    description: 'Pure, clean protein'
  }
]

export function TrustBar() {
  return (
    <section className="section-padding bg-brand-cream">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {trustPoints.map((point, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md">
                  <Image
                    src={point.icon.src}
                    alt={point.icon.alt}
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
              </div>
              <h3 className="font-semibold text-brand-forest mb-2 text-sm md:text-base">
                {point.title}
              </h3>
              <p className="text-xs md:text-sm text-brand-brown text-opacity-80">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
