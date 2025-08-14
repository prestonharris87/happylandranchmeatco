import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { Cart, CartLine, CartInput } from '@/types/shopify'
import { 
  createCart, 
  getCart, 
  addToCart as shopifyAddToCart, 
  updateCartLines, 
  removeFromCart as shopifyRemoveFromCart 
} from '@/lib/shopify'

interface CartStore {
  // State
  cart: Cart | null
  isLoading: boolean
  error: string | null
  
  // Actions
  initializeCart: () => Promise<void>
  addToCart: (merchandiseId: string, quantity: number) => Promise<void>
  updateQuantity: (lineId: string, quantity: number) => Promise<void>
  removeFromCart: (lineId: string) => Promise<void>
  clearCart: () => void
  refreshCart: () => Promise<void>
  
  // Getters
  getTotalQuantity: () => number
  getTotalAmount: () => number
  getLineById: (lineId: string) => CartLine | undefined
  getLineByMerchandiseId: (merchandiseId: string) => CartLine | undefined
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      // Initial state
      cart: null,
      isLoading: false,
      error: null,

      // Initialize cart - create if doesn't exist
      initializeCart: async () => {
        // Check if Shopify credentials are available
        const hasShopifyCredentials = 
          process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN && 
          process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN

        if (!hasShopifyCredentials) {
          console.warn('Shopify credentials not configured - cart functionality disabled')
          set({ 
            cart: null, 
            isLoading: false, 
            error: 'Cart functionality requires Shopify configuration' 
          })
          return
        }

        const state = get()
        
        if (state.cart) {
          // Refresh existing cart
          await get().refreshCart()
          return
        }

        set({ isLoading: true, error: null })
        
        try {
          const newCart = await createCart()
          if (newCart) {
            set({ cart: newCart, isLoading: false })
          } else {
            set({ error: 'Failed to create cart', isLoading: false })
          }
        } catch (error) {
          console.error('Error initializing cart:', error)
          set({ error: 'Failed to initialize cart', isLoading: false })
        }
      },

      // Add item to cart
      addToCart: async (merchandiseId: string, quantity: number) => {
        const state = get()
        
        if (!state.cart) {
          await get().initializeCart()
          const newState = get()
          if (!newState.cart) return
        }

        set({ isLoading: true, error: null })

        try {
          const cartInput: CartInput[] = [{ merchandiseId, quantity }]
          const updatedCart = await shopifyAddToCart(state.cart!.id, cartInput)
          
          if (updatedCart) {
            set({ cart: updatedCart, isLoading: false })
            
            // Fire analytics event
            if (typeof window !== 'undefined' && window.gtag) {
              const line = updatedCart.lines.find(line => 
                line.merchandise.id === merchandiseId
              )
              
              if (line) {
                window.gtag('event', 'add_to_cart', {
                  currency: line.cost.totalAmount.currencyCode,
                  value: parseFloat(line.cost.totalAmount.amount),
                  items: [{
                    item_id: line.merchandise.id,
                    item_name: line.merchandise.title,
                    quantity: line.quantity,
                    price: parseFloat(line.merchandise.price.amount),
                  }],
                })
              }
            }
          } else {
            set({ error: 'Failed to add item to cart', isLoading: false })
          }
        } catch (error) {
          console.error('Error adding to cart:', error)
          set({ error: 'Failed to add item to cart', isLoading: false })
        }
      },

      // Update line quantity
      updateQuantity: async (lineId: string, quantity: number) => {
        const state = get()
        if (!state.cart) return

        set({ isLoading: true, error: null })

        try {
          if (quantity <= 0) {
            await get().removeFromCart(lineId)
            return
          }

          const updatedCart = await updateCartLines(state.cart.id, [
            { id: lineId, quantity }
          ])
          
          if (updatedCart) {
            set({ cart: updatedCart, isLoading: false })
          } else {
            set({ error: 'Failed to update cart', isLoading: false })
          }
        } catch (error) {
          console.error('Error updating cart:', error)
          set({ error: 'Failed to update cart', isLoading: false })
        }
      },

      // Remove item from cart
      removeFromCart: async (lineId: string) => {
        const state = get()
        if (!state.cart) return

        set({ isLoading: true, error: null })

        try {
          const updatedCart = await shopifyRemoveFromCart(state.cart.id, [lineId])
          
          if (updatedCart) {
            set({ cart: updatedCart, isLoading: false })
          } else {
            set({ error: 'Failed to remove item from cart', isLoading: false })
          }
        } catch (error) {
          console.error('Error removing from cart:', error)
          set({ error: 'Failed to remove item from cart', isLoading: false })
        }
      },

      // Clear cart (local only)
      clearCart: () => {
        set({ cart: null, error: null })
      },

      // Refresh cart from Shopify
      refreshCart: async () => {
        const state = get()
        if (!state.cart) return

        set({ isLoading: true, error: null })

        try {
          const refreshedCart = await getCart(state.cart.id)
          
          if (refreshedCart) {
            set({ cart: refreshedCart, isLoading: false })
          } else {
            // Cart might have expired, create new one
            await get().initializeCart()
          }
        } catch (error) {
          console.error('Error refreshing cart:', error)
          set({ error: 'Failed to refresh cart', isLoading: false })
        }
      },

      // Get total quantity of items in cart
      getTotalQuantity: () => {
        const state = get()
        return state.cart?.totalQuantity || 0
      },

      // Get total amount of cart
      getTotalAmount: () => {
        const state = get()
        return state.cart ? parseFloat(state.cart.cost.totalAmount.amount) : 0
      },

      // Get cart line by ID
      getLineById: (lineId: string) => {
        const state = get()
        return state.cart?.lines.find(line => line.id === lineId)
      },

      // Get cart line by merchandise ID
      getLineByMerchandiseId: (merchandiseId: string) => {
        const state = get()
        return state.cart?.lines.find(line => line.merchandise.id === merchandiseId)
      },
    }),
    {
      name: 'happyland-cart',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ cart: state.cart }),
    }
  )
)

// Hook for cart operations
export function useCart() {
  const store = useCartStore()
  
  return {
    // State
    cart: store.cart,
    isLoading: store.isLoading,
    error: store.error,
    totalQuantity: store.getTotalQuantity(),
    totalAmount: store.getTotalAmount(),
    
    // Actions
    initializeCart: store.initializeCart,
    addToCart: store.addToCart,
    updateQuantity: store.updateQuantity,
    removeFromCart: store.removeFromCart,
    clearCart: store.clearCart,
    refreshCart: store.refreshCart,
    
    // Utilities
    getLineById: store.getLineById,
    getLineByMerchandiseId: store.getLineByMerchandiseId,
    isEmpty: !store.cart || store.cart.lines.length === 0,
    hasItems: store.cart && store.cart.lines.length > 0,
  }
}

// Utility functions
export function formatCartTotal(cart: Cart | null): string {
  if (!cart) return '$0.00'
  
  const amount = parseFloat(cart.cost.totalAmount.amount)
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: cart.cost.totalAmount.currencyCode,
  }).format(amount)
}

export function calculateCartSavings(cart: Cart | null): number {
  if (!cart) return 0
  
  let totalSavings = 0
  
  cart.lines.forEach(line => {
    if (line.merchandise.compareAtPrice) {
      const compareAtPrice = parseFloat(line.merchandise.compareAtPrice.amount)
      const actualPrice = parseFloat(line.merchandise.price.amount)
      const savingsPerItem = compareAtPrice - actualPrice
      totalSavings += savingsPerItem * line.quantity
    }
  })
  
  return totalSavings
}

export function getCartShippingInfo(cart: Cart | null) {
  if (!cart) {
    return {
      freeShipping: false,
      shippingCost: 15,
      amountForFreeShipping: 149,
    }
  }
  
  const subtotal = parseFloat(cart.cost.subtotalAmount.amount)
  const freeShippingThreshold = 149
  const shippingCost = 15
  
  const freeShipping = subtotal >= freeShippingThreshold
  const amountForFreeShipping = freeShipping ? 0 : freeShippingThreshold - subtotal
  
  return {
    freeShipping,
    shippingCost: freeShipping ? 0 : shippingCost,
    amountForFreeShipping,
  }
}

// Analytics helper
export function trackCartEvent(eventName: string, cart: Cart | null, additionalData?: any) {
  if (typeof window === 'undefined' || !window.gtag || !cart) return
  
  const items = cart.lines.map(line => ({
    item_id: line.merchandise.id,
    item_name: line.merchandise.title,
    quantity: line.quantity,
    price: parseFloat(line.merchandise.price.amount),
  }))
  
  window.gtag('event', eventName, {
    currency: cart.cost.totalAmount.currencyCode,
    value: parseFloat(cart.cost.totalAmount.amount),
    items,
    ...additionalData,
  })
}

// Declare global gtag type
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}
