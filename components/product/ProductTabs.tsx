'use client'

import { useState } from 'react'
import { Product } from '@/types/shopify'
import { cn } from '@/lib/utils'

interface ProductTabsProps {
  product: Product
}

export function ProductTabs({ product }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState('description')

  const tabs = [
    {
      id: 'description',
      label: 'Description',
      content: (
        <div className="prose prose-gray max-w-none">
          <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
        </div>
      )
    },
    {
      id: 'cooking',
      label: 'Cooking Tips',
      content: (
        <div className="space-y-4">
          {product.metafields.cooking_notes ? (
            <div className="prose prose-gray max-w-none">
              <div dangerouslySetInnerHTML={{ __html: product.metafields.cooking_notes }} />
            </div>
          ) : (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-brand-forest">Cooking Instructions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-ink mb-2">Grilling</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Preheat grill to medium-high heat</li>
                    <li>• Season 30 minutes before cooking</li>
                    <li>• Cook 4-6 minutes per side for medium-rare</li>
                    <li>• Let rest 5 minutes before serving</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-ink mb-2">Pan-Searing</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Heat cast iron skillet over medium-high heat</li>
                    <li>• Add a small amount of oil</li>
                    <li>• Sear 3-4 minutes per side</li>
                    <li>• Finish in 400°F oven if needed</li>
                  </ul>
                </div>
              </div>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
                <p className="text-sm text-amber-700">
                  <strong>Pro Tip:</strong> Use a meat thermometer for perfect doneness. 
                  Medium-rare: 130-135°F, Medium: 135-145°F
                </p>
              </div>
            </div>
          )}
        </div>
      )
    },
    {
      id: 'storage',
      label: 'Storage & Thawing',
      content: (
        <div className="space-y-4">
          {product.metafields.thawing_notes ? (
            <div className="prose prose-gray max-w-none">
              <div dangerouslySetInnerHTML={{ __html: product.metafields.thawing_notes }} />
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-brand-forest mb-3">Storage Instructions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-ink mb-2">Freezer Storage</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Keep frozen at 0°F or below</li>
                      <li>• Store up to 12 months for best quality</li>
                      <li>• Keep in original packaging</li>
                      <li>• Label with date received</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-ink mb-2">Refrigerator Storage</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Use within 3-5 days of thawing</li>
                      <li>• Store at 40°F or below</li>
                      <li>• Keep in coldest part of fridge</li>
                      <li>• Use a drip tray to prevent leaks</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-brand-forest mb-3">Thawing Instructions</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                    <h4 className="font-medium text-blue-900 mb-2">Recommended: Refrigerator Thawing</h4>
                    <p className="text-sm text-blue-700">
                      Place frozen meat in refrigerator 24-48 hours before cooking. 
                      This method preserves quality and ensures food safety.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 border-l-4 border-green-400 p-4">
                    <h4 className="font-medium text-green-900 mb-2">Quick Thaw: Cold Water</h4>
                    <p className="text-sm text-green-700">
                      Submerge sealed package in cold water, changing water every 30 minutes. 
                      Cook immediately after thawing.
                    </p>
                  </div>
                  
                  <div className="bg-red-50 border-l-4 border-red-400 p-4">
                    <h4 className="font-medium text-red-900 mb-2">Never Thaw</h4>
                    <p className="text-sm text-red-700">
                      Do not thaw at room temperature or in warm water. 
                      This can promote bacterial growth and compromise quality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )
    },
    {
      id: 'sourcing',
      label: 'Sourcing & Ranch Info',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-brand-forest mb-3">Ranch Information</h3>
            <div className="bg-brand-cream rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-ink mb-2">Location</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Happyland Ranch<br />
                    Ada, Oklahoma<br />
                    Family-owned since 1952
                  </p>
                  
                  <h4 className="font-medium text-ink mb-2">Practices</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Pasture-raised on native grasslands</li>
                    <li>• Rotational grazing methods</li>
                    <li>• No hormones or antibiotics</li>
                    <li>• Stress-free handling</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-ink mb-2">Feed & Environment</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 100% grass-fed and finished</li>
                    <li>• Access to fresh water daily</li>
                    <li>• Shelter and shade available</li>
                    <li>• Regular veterinary care</li>
                  </ul>
                  
                  <h4 className="font-medium text-ink mb-2 mt-4">Processing</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• USDA inspected facilities</li>
                    <li>• Dry-aged for optimal flavor</li>
                    <li>• Hand-cut by expert butchers</li>
                    <li>• Vacuum-sealed for freshness</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {product.metafields.species && (
            <div>
              <h3 className="text-lg font-semibold text-brand-forest mb-3">Product Details</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="font-medium text-ink">Species:</span>
                  <p className="text-gray-600 capitalize">{product.metafields.species}</p>
                </div>
                {product.metafields.cut && (
                  <div>
                    <span className="font-medium text-ink">Cut:</span>
                    <p className="text-gray-600 capitalize">{product.metafields.cut}</p>
                  </div>
                )}
                {product.metafields.practice && (
                  <div>
                    <span className="font-medium text-ink">Practice:</span>
                    <p className="text-gray-600">{product.metafields.practice}</p>
                  </div>
                )}
                <div>
                  <span className="font-medium text-ink">Origin:</span>
                  <p className="text-gray-600">Ada, Oklahoma</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200 mb-8">
            <nav className="flex space-x-8">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    'py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200',
                    activeTab === tab.id
                      ? 'border-brand-forest text-brand-forest'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {tabs.find(tab => tab.id === activeTab)?.content}
          </div>
        </div>
      </div>
    </section>
  )
}
