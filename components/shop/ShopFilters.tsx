'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Collection } from '@/types/shopify'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { ChevronDown, ChevronUp, X } from 'lucide-react'

interface ShopFiltersProps {
  collections: Collection[]
}

const sortOptions = [
  { value: 'best-selling', label: 'Best Selling' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest First' },
  { value: 'title', label: 'Alphabetical' },
]

const animalTypes = [
  { value: 'beef', label: 'Beef', count: 45 },
  { value: 'pork', label: 'Pork', count: 28 },
  { value: 'chicken', label: 'Chicken', count: 22 },
  { value: 'bundles', label: 'Bundles & Boxes', count: 12 },
]

const cutTypes = [
  { value: 'steaks', label: 'Steaks', count: 24 },
  { value: 'roasts', label: 'Roasts', count: 18 },
  { value: 'ground', label: 'Ground Meat', count: 15 },
  { value: 'chops', label: 'Chops', count: 12 },
  { value: 'whole', label: 'Whole Cuts', count: 8 },
  { value: 'sausages', label: 'Sausages', count: 6 },
]

const priceRanges = [
  { value: '0-25', label: 'Under $25', min: 0, max: 25 },
  { value: '25-50', label: '$25 - $50', min: 25, max: 50 },
  { value: '50-100', label: '$50 - $100', min: 50, max: 100 },
  { value: '100-200', label: '$100 - $200', min: 100, max: 200 },
  { value: '200+', label: '$200+', min: 200, max: 9999 },
]

const badges = [
  { value: 'bestseller', label: 'Bestseller' },
  { value: 'new', label: 'New' },
  { value: 'sale', label: 'On Sale' },
  { value: 'limited', label: 'Limited Edition' },
]

export function ShopFilters({ collections }: ShopFiltersProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(['sort', 'animals', 'cuts'])
  )

  const [activeFilters, setActiveFilters] = useState({
    sort: searchParams.get('sort') || 'best-selling',
    category: searchParams.get('category') || '',
    cut: searchParams.get('cut') || '',
    priceRange: searchParams.get('priceRange') || '',
    badges: searchParams.getAll('badge') || [],
    available: searchParams.get('available') === 'true',
  })

  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(section)) {
      newExpanded.delete(section)
    } else {
      newExpanded.add(section)
    }
    setExpandedSections(newExpanded)
  }

  const updateFilters = (key: string, value: string | boolean | string[]) => {
    const newFilters = { ...activeFilters, [key]: value }
    setActiveFilters(newFilters)
    
    // Update URL
    const params = new URLSearchParams()
    
    Object.entries(newFilters).forEach(([filterKey, filterValue]) => {
      if (filterValue) {
        if (Array.isArray(filterValue)) {
          filterValue.forEach(v => params.append(filterKey, v))
        } else if (filterValue !== '' && typeof filterValue !== 'boolean') {
          params.set(filterKey, filterValue.toString())
        }
      }
    })

    router.push(`/shop?${params.toString()}`, { scroll: false })
  }

  const clearAllFilters = () => {
    setActiveFilters({
      sort: 'best-selling',
      category: '',
      cut: '',
      priceRange: '',
      badges: [],
      available: false,
    })
    router.push('/shop', { scroll: false })
  }

  const removeFilter = (key: string, value?: string) => {
    if (key === 'badges' && value) {
      const newBadges = activeFilters.badges.filter(b => b !== value)
      updateFilters('badges', newBadges)
    } else {
      updateFilters(key, key === 'available' ? false : '')
    }
  }

  const hasActiveFilters = Object.entries(activeFilters).some(([key, value]) => {
    if (key === 'sort') return value !== 'best-selling'
    if (key === 'available') return value === true
    if (Array.isArray(value)) return value.length > 0
    return value !== ''
  })

  const FilterSection = ({ 
    id, 
    title, 
    children 
  }: { 
    id: string
    title: string
    children: React.ReactNode 
  }) => (
    <div className="border-b border-gray-200 pb-4">
      <button
        onClick={() => toggleSection(id)}
        className="flex items-center justify-between w-full py-2 text-left"
      >
        <h3 className="font-medium text-ink">{title}</h3>
        {expandedSections.has(id) ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </button>
      {expandedSections.has(id) && (
        <div className="mt-3 space-y-2">
          {children}
        </div>
      )}
    </div>
  )

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-ink">Filters</h2>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            className="text-sm text-gray-500 hover:text-brand-forest"
          >
            Clear All
          </Button>
        )}
      </div>

      {/* Active Filters */}
      {hasActiveFilters && (
        <div className="mb-6">
          <h4 className="text-sm font-medium text-ink mb-2">Active Filters:</h4>
          <div className="flex flex-wrap gap-2">
            {activeFilters.sort !== 'best-selling' && (
              <Badge 
                variant="outline" 
                className="flex items-center gap-1"
              >
                Sort: {sortOptions.find(o => o.value === activeFilters.sort)?.label}
                <button onClick={() => removeFilter('sort')}>
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            {activeFilters.category && (
              <Badge variant="outline" className="flex items-center gap-1">
                {activeFilters.category}
                <button onClick={() => removeFilter('category')}>
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            {activeFilters.cut && (
              <Badge variant="outline" className="flex items-center gap-1">
                {activeFilters.cut}
                <button onClick={() => removeFilter('cut')}>
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            {activeFilters.priceRange && (
              <Badge variant="outline" className="flex items-center gap-1">
                {priceRanges.find(r => r.value === activeFilters.priceRange)?.label}
                <button onClick={() => removeFilter('priceRange')}>
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            {activeFilters.badges.map(badge => (
              <Badge key={badge} variant="outline" className="flex items-center gap-1">
                {badge}
                <button onClick={() => removeFilter('badges', badge)}>
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
            {activeFilters.available && (
              <Badge variant="outline" className="flex items-center gap-1">
                In Stock Only
                <button onClick={() => removeFilter('available')}>
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
          </div>
        </div>
      )}

      <div className="space-y-6">
        {/* Sort */}
        <FilterSection id="sort" title="Sort By">
          <div className="space-y-2">
            {sortOptions.map(option => (
              <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="sort"
                  value={option.value}
                  checked={activeFilters.sort === option.value}
                  onChange={(e) => updateFilters('sort', e.target.value)}
                  className="text-brand-forest focus:ring-brand-forest"
                />
                <span className="text-sm">{option.label}</span>
              </label>
            ))}
          </div>
        </FilterSection>

        {/* Animal Types */}
        <FilterSection id="animals" title="Animal Type">
          <div className="space-y-2">
            {animalTypes.map(type => (
              <label key={type.value} className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="category"
                    value={type.value}
                    checked={activeFilters.category === type.value}
                    onChange={(e) => updateFilters('category', e.target.value)}
                    className="text-brand-forest focus:ring-brand-forest"
                  />
                  <span className="text-sm">{type.label}</span>
                </div>
                <span className="text-xs text-gray-500">({type.count})</span>
              </label>
            ))}
          </div>
        </FilterSection>

        {/* Cut Types */}
        <FilterSection id="cuts" title="Cut Type">
          <div className="space-y-2">
            {cutTypes.map(cut => (
              <label key={cut.value} className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="cut"
                    value={cut.value}
                    checked={activeFilters.cut === cut.value}
                    onChange={(e) => updateFilters('cut', e.target.value)}
                    className="text-brand-forest focus:ring-brand-forest"
                  />
                  <span className="text-sm">{cut.label}</span>
                </div>
                <span className="text-xs text-gray-500">({cut.count})</span>
              </label>
            ))}
          </div>
        </FilterSection>

        {/* Price Range */}
        <FilterSection id="price" title="Price Range">
          <div className="space-y-2">
            {priceRanges.map(range => (
              <label key={range.value} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="priceRange"
                  value={range.value}
                  checked={activeFilters.priceRange === range.value}
                  onChange={(e) => updateFilters('priceRange', e.target.value)}
                  className="text-brand-forest focus:ring-brand-forest"
                />
                <span className="text-sm">{range.label}</span>
              </label>
            ))}
          </div>
        </FilterSection>

        {/* Badges */}
        <FilterSection id="badges" title="Special Features">
          <div className="space-y-2">
            {badges.map(badge => (
              <label key={badge.value} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={activeFilters.badges.includes(badge.value)}
                  onChange={(e) => {
                    const newBadges = e.target.checked
                      ? [...activeFilters.badges, badge.value]
                      : activeFilters.badges.filter(b => b !== badge.value)
                    updateFilters('badges', newBadges)
                  }}
                  className="text-brand-forest focus:ring-brand-forest"
                />
                <span className="text-sm">{badge.label}</span>
              </label>
            ))}
          </div>
        </FilterSection>

        {/* Availability */}
        <FilterSection id="availability" title="Availability">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={activeFilters.available}
              onChange={(e) => updateFilters('available', e.target.checked)}
              className="text-brand-forest focus:ring-brand-forest"
            />
            <span className="text-sm">In Stock Only</span>
          </label>
        </FilterSection>
      </div>
    </div>
  )
}
