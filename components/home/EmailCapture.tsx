'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { isValidEmail } from '@/lib/utils'
import { placeholders } from '@/lib/images'
import toast from 'react-hot-toast'

export function EmailCapture() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const backgroundImage = placeholders.ranch('Sunset over rolling pastures with cattle silhouettes')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      toast.error('Please enter your email address')
      return
    }

    if (!isValidEmail(email)) {
      toast.error('Please enter a valid email address')
      return
    }

    setIsLoading(true)

    try {
      // In a real implementation, you would send this to your email service
      // For now, we'll simulate a successful signup
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      toast.success('Welcome to the Happyland Herd! Check your email for a special offer.')
      setEmail('')
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage.src}
          alt={backgroundImage.alt}
          fill
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-brand-forest bg-opacity-80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Join the Happyland Herd
          </h2>
          
          <p className="text-xl mb-8 text-white text-opacity-90">
            Get exclusive ranch updates, seasonal specials, and mouthwatering recipes 
            delivered straight to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white border-white text-ink placeholder-gray-500"
                disabled={isLoading}
              />
              <Button
                type="submit"
                loading={isLoading}
                className="bg-accent-clay hover:bg-opacity-90 whitespace-nowrap"
                size="lg"
              >
                Sign Me Up
              </Button>
            </div>
          </form>

          <div className="mt-6 text-sm text-white text-opacity-80">
            <p>
              Join 2,000+ ranch families. Unsubscribe anytime.
            </p>
          </div>

          {/* Benefits */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="font-semibold mb-2">Weekly Recipes</h3>
              <p className="text-sm text-white text-opacity-80">
                New cooking tips and ranch-inspired recipes every week
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold mb-2">Exclusive Offers</h3>
              <p className="text-sm text-white text-opacity-80">
                First access to sales, new products, and member-only discounts
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏡</span>
              </div>
              <h3 className="font-semibold mb-2">Ranch Updates</h3>
              <p className="text-sm text-white text-opacity-80">
                Behind-the-scenes stories from life on the ranch
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
