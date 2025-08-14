'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { placeholders } from '@/lib/images'

const reviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'Dallas, TX',
    rating: 5,
    title: 'Absolutely incredible quality',
    content: 'You can taste the difference in every bite. The ribeye was perfectly marbled and so tender. This is now our go-to for special occasions.',
    product: 'Grass-Fed Ribeye',
    avatar: placeholders.avatar('Sarah Johnson'),
    verified: true,
  },
  {
    id: 2,
    name: 'Mike Rodriguez',
    location: 'Austin, TX',
    rating: 5,
    title: 'Best pork chops ever',
    content: 'The heritage pork chops were amazing. Juicy, flavorful, and you can tell these pigs were raised right. Fast shipping too!',
    product: 'Heritage Pork Chops',
    avatar: placeholders.avatar('Mike Rodriguez'),
    verified: true,
  },
  {
    id: 3,
    name: 'Jennifer Chen',
    location: 'Oklahoma City, OK',
    rating: 5,
    title: 'Supporting local ranchers',
    content: 'Love supporting a local Oklahoma ranch! The chicken is so much better than store-bought. You can taste the difference that pasture-raising makes.',
    product: 'Pasture-Raised Chicken',
    avatar: placeholders.avatar('Jennifer Chen'),
    verified: true,
  },
  {
    id: 4,
    name: 'David Thompson',
    location: 'Tulsa, OK',
    rating: 5,
    title: 'Outstanding service and quality',
    content: 'From ordering to delivery, everything was perfect. The meat arrived perfectly frozen and the quality exceeded my expectations. Will definitely order again.',
    product: 'Family Bundle',
    avatar: placeholders.avatar('David Thompson'),
    verified: true,
  },
  {
    id: 5,
    name: 'Lisa Martinez',
    location: 'Kansas City, MO',
    rating: 5,
    title: 'Worth every penny',
    content: 'Yes, it costs more than grocery store meat, but the quality is incomparable. This is what beef is supposed to taste like. My family is hooked!',
    product: 'Ground Beef Bundle',
    avatar: placeholders.avatar('Lisa Martinez'),
    verified: true,
  },
]

export function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex(currentIndex === 0 ? reviews.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex(currentIndex === reviews.length - 1 ? 0 : currentIndex + 1)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">What Our Customers Say</h2>
          <p className="body-large text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it — hear from families across the country 
            who've experienced the Happyland difference.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Review Display */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 min-h-[300px] flex items-center">
            <div className="w-full">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <Image
                    src={reviews[currentIndex].avatar.src}
                    alt={reviews[currentIndex].avatar.alt}
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>

                {/* Review Content */}
                <div className="flex-1">
                  {/* Rating */}
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex items-center space-x-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < reviews[currentIndex].rating
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    {reviews[currentIndex].verified && (
                      <Badge variant="success" size="sm">
                        Verified Purchase
                      </Badge>
                    )}
                  </div>

                  {/* Review Title */}
                  <h3 className="text-xl font-semibold text-brand-forest mb-2">
                    {reviews[currentIndex].title}
                  </h3>

                  {/* Review Content */}
                  <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                    "{reviews[currentIndex].content}"
                  </p>

                  {/* Reviewer Info */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-ink">
                        {reviews[currentIndex].name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {reviews[currentIndex].location} • {reviews[currentIndex].product}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="sm"
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white shadow-md hover:shadow-lg rounded-full"
            aria-label="Previous review"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white shadow-md hover:shadow-lg rounded-full"
            aria-label="Next review"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center space-x-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex
                    ? 'bg-brand-forest'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Overall Stats */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-6 bg-white rounded-lg px-8 py-4 shadow-md">
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-forest">4.9</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-forest">500+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-forest">98%</div>
              <div className="text-sm text-gray-600">Would Recommend</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
