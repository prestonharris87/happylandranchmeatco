'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Star, ThumbsUp, ThumbsDown } from 'lucide-react'
import { Product } from '@/types/shopify'
import { formatDate } from '@/lib/utils'
import { placeholders } from '@/lib/images'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

interface ProductReviewsProps {
  product: Product
}

// Mock reviews data - in a real app, this would come from your review system
const mockReviews = [
  {
    id: '1',
    author: 'Sarah M.',
    rating: 5,
    title: 'Absolutely incredible quality',
    content: 'This ribeye exceeded all expectations. The marbling was perfect, and you can really taste the difference that grass-feeding makes. Cooked to a perfect medium-rare and it was incredibly tender.',
    date: '2024-01-15',
    verified: true,
    helpful: 12,
    images: [placeholders.product('Cooked ribeye steak')],
  },
  {
    id: '2',
    author: 'Mike R.',
    rating: 5,
    title: 'Best steak I\'ve ever had',
    content: 'I\'ve ordered from several online meat companies, but Happyland Ranch is in a league of its own. The packaging was excellent, arrived perfectly frozen, and the flavor is outstanding.',
    date: '2024-01-10',
    verified: true,
    helpful: 8,
    images: [],
  },
  {
    id: '3',
    author: 'Jennifer L.',
    rating: 4,
    title: 'Great quality, worth the price',
    content: 'Yes, it\'s more expensive than grocery store beef, but the quality difference is night and day. This is what beef is supposed to taste like. Will definitely order again.',
    date: '2024-01-08',
    verified: true,
    helpful: 15,
    images: [],
  },
  {
    id: '4',
    author: 'David T.',
    rating: 5,
    title: 'Perfect for special occasions',
    content: 'Ordered this for our anniversary dinner and it was perfect. Easy to cook, incredibly flavorful, and my wife was impressed. The ranch-to-table story makes it even better.',
    date: '2024-01-05',
    verified: true,
    helpful: 6,
    images: [placeholders.product('Plated steak dinner')],
  },
  {
    id: '5',
    author: 'Lisa K.',
    rating: 5,
    title: 'Supporting sustainable ranching',
    content: 'Love that I can support sustainable ranching practices while getting incredible meat. The shipping was fast and everything arrived in perfect condition.',
    date: '2024-01-02',
    verified: true,
    helpful: 9,
    images: [],
  },
]

export function ProductReviews({ product }: ProductReviewsProps) {
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'highest' | 'lowest' | 'helpful'>('newest')
  const [filterRating, setFilterRating] = useState<number | null>(null)
  const [showAll, setShowAll] = useState(false)

  const averageRating = 4.8
  const totalReviews = mockReviews.length
  const ratingDistribution = [
    { stars: 5, count: 127, percentage: 85 },
    { stars: 4, count: 18, percentage: 12 },
    { stars: 3, count: 3, percentage: 2 },
    { stars: 2, count: 1, percentage: 1 },
    { stars: 1, count: 0, percentage: 0 },
  ]

  const sortedReviews = [...mockReviews].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      case 'oldest':
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      case 'highest':
        return b.rating - a.rating
      case 'lowest':
        return a.rating - b.rating
      case 'helpful':
        return b.helpful - a.helpful
      default:
        return 0
    }
  })

  const filteredReviews = filterRating 
    ? sortedReviews.filter(review => review.rating === filterRating)
    : sortedReviews

  const displayedReviews = showAll ? filteredReviews : filteredReviews.slice(0, 3)

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Rating Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h2 className="heading-3 mb-6">Customer Reviews</h2>
                
                {/* Overall Rating */}
                <div className="text-center mb-8">
                  <div className="text-5xl font-bold text-brand-forest mb-2">
                    {averageRating}
                  </div>
                  <div className="flex items-center justify-center mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-6 w-6 ${
                          i < Math.floor(averageRating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600">Based on {totalReviews} reviews</p>
                </div>

                {/* Rating Distribution */}
                <div className="space-y-2 mb-8">
                  {ratingDistribution.map(({ stars, count, percentage }) => (
                    <button
                      key={stars}
                      onClick={() => setFilterRating(filterRating === stars ? null : stars)}
                      className={`w-full flex items-center space-x-3 p-2 rounded-md hover:bg-gray-50 transition-colors duration-200 ${
                        filterRating === stars ? 'bg-brand-cream' : ''
                      }`}
                    >
                      <span className="text-sm font-medium w-6">{stars}</span>
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-yellow-400 h-2 rounded-full" 
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-600 w-8">{count}</span>
                    </button>
                  ))}
                </div>

                {/* Sort Options */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-ink mb-2">
                    Sort by:
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-forest focus:border-brand-forest"
                  >
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="highest">Highest Rating</option>
                    <option value="lowest">Lowest Rating</option>
                    <option value="helpful">Most Helpful</option>
                  </select>
                </div>

                {/* Write Review Button */}
                <Button className="w-full">
                  Write a Review
                </Button>
              </div>
            </div>

            {/* Reviews List */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {displayedReviews.map(review => (
                  <div key={review.id} className="border-b border-gray-200 pb-8 last:border-b-0">
                    {/* Review Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-brand-forest text-white rounded-full flex items-center justify-center font-medium">
                          {review.author.charAt(0)}
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="font-medium text-ink">{review.author}</span>
                            {review.verified && (
                              <Badge variant="success" size="sm">
                                Verified
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center space-x-2 mt-1">
                            <div className="flex items-center">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < review.rating
                                      ? 'text-yellow-400 fill-current'
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-500">
                              {formatDate(review.date)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Review Content */}
                    <div className="mb-4">
                      <h4 className="font-medium text-ink mb-2">{review.title}</h4>
                      <p className="text-gray-700 leading-relaxed">{review.content}</p>
                    </div>

                    {/* Review Images */}
                    {review.images.length > 0 && (
                      <div className="flex space-x-3 mb-4">
                        {review.images.map((image, index) => (
                          <div key={index} className="relative w-20 h-20 rounded-lg overflow-hidden">
                            <Image
                              src={image.src}
                              alt={image.alt}
                              fill
                              className="object-cover"
                              sizes="80px"
                            />
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Review Actions */}
                    <div className="flex items-center space-x-4 text-sm">
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 transition-colors duration-200">
                        <ThumbsUp className="h-4 w-4" />
                        <span>Helpful ({review.helpful})</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 transition-colors duration-200">
                        <ThumbsDown className="h-4 w-4" />
                        <span>Not Helpful</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Show More/Less Button */}
              {filteredReviews.length > 3 && (
                <div className="text-center mt-8">
                  <Button
                    variant="outline"
                    onClick={() => setShowAll(!showAll)}
                  >
                    {showAll 
                      ? 'Show Less Reviews' 
                      : `Show All ${filteredReviews.length} Reviews`
                    }
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
