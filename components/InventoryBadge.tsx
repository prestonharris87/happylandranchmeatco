import { Badge } from '@/components/ui/Badge'

interface InventoryBadgeProps {
  availableForSale: boolean
  quantityAvailable?: number
  className?: string
}

export function InventoryBadge({ 
  availableForSale, 
  quantityAvailable, 
  className = '' 
}: InventoryBadgeProps) {
  if (!availableForSale) {
    return (
      <Badge variant="error" size="sm" className={className}>
        Sold Out
      </Badge>
    )
  }

  if (quantityAvailable !== undefined) {
    if (quantityAvailable === 0) {
      return (
        <Badge variant="error" size="sm" className={className}>
          Sold Out
        </Badge>
      )
    }
    
    if (quantityAvailable <= 5) {
      return (
        <Badge variant="warning" size="sm" className={className}>
          Low Stock
        </Badge>
      )
    }
  }

  return (
    <Badge variant="success" size="sm" className={className}>
      In Stock
    </Badge>
  )
}
