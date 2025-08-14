import { cn } from '@/lib/utils'

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'circular' | 'rectangular'
}

export function Skeleton({ 
  className, 
  variant = 'rectangular',
  ...props 
}: SkeletonProps) {
  const baseStyles = 'animate-pulse bg-gray-200'
  
  const variants = {
    text: 'h-4 rounded',
    circular: 'rounded-full',
    rectangular: 'rounded',
  }

  return (
    <div
      className={cn(
        baseStyles,
        variants[variant],
        className
      )}
      {...props}
    />
  )
}

// Common skeleton components
export function ProductCardSkeleton() {
  return (
    <div className="space-y-3">
      <Skeleton className="aspect-square w-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-3/4" variant="text" />
        <Skeleton className="h-4 w-1/2" variant="text" />
        <Skeleton className="h-6 w-1/4" variant="text" />
      </div>
    </div>
  )
}

export function BlogCardSkeleton() {
  return (
    <div className="space-y-3">
      <Skeleton className="aspect-video w-full" />
      <div className="space-y-2">
        <Skeleton className="h-6 w-full" variant="text" />
        <Skeleton className="h-4 w-full" variant="text" />
        <Skeleton className="h-4 w-3/4" variant="text" />
        <div className="flex items-center space-x-2 pt-2">
          <Skeleton className="h-8 w-8" variant="circular" />
          <Skeleton className="h-4 w-24" variant="text" />
        </div>
      </div>
    </div>
  )
}

export function HeaderSkeleton() {
  return (
    <div className="flex items-center justify-between p-4">
      <Skeleton className="h-8 w-32" />
      <div className="hidden md:flex space-x-8">
        <Skeleton className="h-4 w-16" variant="text" />
        <Skeleton className="h-4 w-16" variant="text" />
        <Skeleton className="h-4 w-16" variant="text" />
        <Skeleton className="h-4 w-16" variant="text" />
      </div>
      <div className="flex items-center space-x-4">
        <Skeleton className="h-8 w-8" variant="circular" />
        <Skeleton className="h-8 w-8" variant="circular" />
        <Skeleton className="h-8 w-16" />
      </div>
    </div>
  )
}
