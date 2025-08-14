import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Clock, Users, ChefHat } from 'lucide-react'
import { placeholders } from '@/lib/images'

export function RecipeSpotlight() {
  const recipeImage = placeholders.recipe('Smoky garlic ribeye steak on cutting board')

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Cook Like a Rancher</h2>
          <p className="body-large text-gray-600 max-w-2xl mx-auto">
            Master the art of cooking premium meat with our expert recipes and techniques.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Recipe Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={recipeImage.src}
                alt={recipeImage.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute top-4 left-4">
                <Badge variant="warning">
                  Featured Recipe
                </Badge>
              </div>
            </div>

            {/* Recipe Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-brand-forest mb-3">
                  Smoky Garlic Ribeye
                </h3>
                <p className="text-gray-600 mb-4">
                  A customer favorite that brings ranch flavor to your home. This recipe 
                  highlights the natural marbling and rich taste of our grass-fed ribeye 
                  with a perfect blend of smoky spices and fresh garlic.
                </p>
              </div>

              {/* Recipe Stats */}
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>25 mins</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>Serves 2</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ChefHat className="h-4 w-4" />
                  <span>Easy</span>
                </div>
              </div>

              {/* Ingredients Preview */}
              <div>
                <h4 className="font-semibold text-brand-forest mb-2">Key Ingredients:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 2 Grass-Fed Ribeye Steaks (14oz each)</li>
                  <li>• Fresh garlic and herbs</li>
                  <li>• Smoked paprika blend</li>
                  <li>• Sea salt and black pepper</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link href="/recipes/smoky-garlic-ribeye">
                    View Recipe
                  </Link>
                </Button>
                <Button asChild variant="secondary">
                  <Link href="/shop/products/grass-fed-ribeye-14oz">
                    Order This Cut
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* More Recipes Link */}
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/recipes">
                Browse All Recipes
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
