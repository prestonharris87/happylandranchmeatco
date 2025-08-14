import Link from 'next/link'
import Image from 'next/image'
import { Collection } from '@/types/shopify'
import { Button } from '@/components/ui/Button'
import { getImageProps } from '@/lib/images'

interface FeaturedCollectionsProps {
  collections: Collection[]
}

const collectionDescriptions = {
  beef: 'From grass-fed ribeyes to hearty roasts, our Black Angus cattle deliver bold, rich flavor.',
  pork: 'Heritage-breed pork with deep marbling and juicy tenderness in every bite.',
  chicken: 'Pasture-raised, air-chilled chicken with unbeatable flavor and texture.'
}

const fallbackCollections = [
  {
    id: 'beef',
    handle: 'beef',
    title: 'Beef',
    description: collectionDescriptions.beef,
    image: null,
  },
  {
    id: 'pork',
    handle: 'pork', 
    title: 'Pork',
    description: collectionDescriptions.pork,
    image: null,
  },
  {
    id: 'chicken',
    handle: 'chicken',
    title: 'Chicken',
    description: collectionDescriptions.chicken,
    image: null,
  }
]

export function FeaturedCollections({ collections }: FeaturedCollectionsProps) {
  // Use provided collections or fallback to placeholder data
  const displayCollections = collections.length > 0 ? collections : fallbackCollections

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="heading-2 mb-3 sm:mb-4 px-4">Choose Your Premium Cut</h2>
          <p className="body-large text-gray-600 max-w-3xl mx-auto px-4">
            Choose from our premium beef, pork, and chicken — each raised with care 
            for unmatched flavor and tenderness.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {displayCollections.map((collection) => {
            const image = getImageProps(collection.image, collection.title)
            const description = collectionDescriptions[collection.handle as keyof typeof collectionDescriptions] || collection.description

            return (
              <div key={collection.id} className="group cursor-pointer">
                <Link href={`/shop/collections/${collection.handle}`}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-md sm:rounded-lg bg-gray-100 mb-3 sm:mb-4">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-25 group-hover:bg-opacity-35 transition-all duration-300" />
                    
                    {/* Overlay Content */}
                    <div className="absolute inset-0 flex items-end p-4 sm:p-6">
                      <div className="text-white">
                        <h3 className="text-xl sm:text-2xl font-serif font-bold mb-2 sm:mb-3">
                          {collection.title}
                        </h3>
                        <Button 
                          variant="secondary" 
                          className="bg-white text-brand-forest hover:bg-opacity-90 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
                        >
                          Shop {collection.title}
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
                
                <div className="text-center">
                  <p className="text-gray-600">
                    {description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
