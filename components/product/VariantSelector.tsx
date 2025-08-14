'use client'

import { Product, ProductVariant } from '@/types/shopify'
import { formatMoney } from '@/lib/utils'
import { cn } from '@/lib/utils'

interface VariantSelectorProps {
  product: Product
  selectedVariant: ProductVariant
  onVariantChange: (variant: ProductVariant) => void
}

export function VariantSelector({ product, selectedVariant, onVariantChange }: VariantSelectorProps) {
  // Group options by name (e.g., Size, Color, Weight)
  const optionGroups = product.variants.reduce((groups, variant) => {
    variant.selectedOptions.forEach((option) => {
      if (!groups[option.name]) {
        groups[option.name] = new Set()
      }
      groups[option.name].add(option.value)
    })
    return groups
  }, {} as Record<string, Set<string>>)

  // Convert sets to arrays and sort
  const sortedOptionGroups = Object.entries(optionGroups).map(([name, values]) => ({
    name,
    values: Array.from(values).sort((a, b) => {
      // Try to sort numerically if possible, otherwise alphabetically
      const aNum = parseFloat(a)
      const bNum = parseFloat(b)
      if (!isNaN(aNum) && !isNaN(bNum)) {
        return aNum - bNum
      }
      return a.localeCompare(b)
    })
  }))

  const handleOptionChange = (optionName: string, optionValue: string) => {
    // Find the variant that matches the selected options
    const newSelectedOptions = selectedVariant.selectedOptions.map(option => 
      option.name === optionName ? { ...option, value: optionValue } : option
    )

    const matchingVariant = product.variants.find(variant =>
      variant.selectedOptions.every(option => 
        newSelectedOptions.some(selected => 
          selected.name === option.name && selected.value === option.value
        )
      )
    )

    if (matchingVariant) {
      onVariantChange(matchingVariant)
    }
  }

  if (sortedOptionGroups.length === 0) {
    return null
  }

  return (
    <div className="space-y-6">
      {sortedOptionGroups.map(({ name, values }) => {
        const selectedValue = selectedVariant.selectedOptions.find(
          option => option.name === name
        )?.value

        return (
          <div key={name}>
            <label className="block text-sm font-medium text-ink mb-3">
              {name}
              {selectedValue && selectedValue !== 'Default Title' && (
                <span className="text-gray-600 font-normal">: {selectedValue}</span>
              )}
            </label>

            <div className="grid grid-cols-3 gap-2">
              {values.map(value => {
                // Find the variant for this option combination
                const variantForOption = product.variants.find(variant =>
                  variant.selectedOptions.some(option => 
                    option.name === name && option.value === value
                  )
                )

                const isSelected = selectedValue === value
                const isAvailable = variantForOption?.availableForSale ?? true
                const price = variantForOption?.price
                
                return (
                  <button
                    key={value}
                    onClick={() => handleOptionChange(name, value)}
                    disabled={!isAvailable}
                    className={cn(
                      'relative p-3 text-sm border rounded-md transition-all duration-200 text-left',
                      isSelected
                        ? 'border-brand-forest bg-brand-forest text-white'
                        : isAvailable
                        ? 'border-gray-300 bg-white text-gray-900 hover:border-brand-forest hover:bg-gray-50'
                        : 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed',
                      !isAvailable && 'relative'
                    )}
                  >
                    <div className="font-medium">{value}</div>
                    {price && (
                      <div className={cn(
                        'text-xs mt-1',
                        isSelected ? 'text-white text-opacity-80' : 'text-gray-600'
                      )}>
                        {formatMoney(price.amount, price.currencyCode)}
                      </div>
                    )}
                    
                    {/* Sold out overlay */}
                    {!isAvailable && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="bg-white text-gray-500 text-xs px-2 py-1 rounded transform rotate-12 font-medium">
                          Sold Out
                        </span>
                      </div>
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        )
      })}

      {/* Variant-specific information */}
      {selectedVariant && (
        <div className="text-sm text-gray-600 space-y-1">
          {selectedVariant.quantityAvailable !== undefined && selectedVariant.quantityAvailable <= 5 && selectedVariant.quantityAvailable > 0 && (
            <p className="text-orange-600">
              Only {selectedVariant.quantityAvailable} left in stock
            </p>
          )}
          
          {/* SKU or other variant-specific info */}
          <p>
            SKU: {selectedVariant.id.split('/').pop()?.toUpperCase() || 'N/A'}
          </p>
        </div>
      )}
    </div>
  )
}
