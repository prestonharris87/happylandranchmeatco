import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath, revalidateTag } from 'next/cache'

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')
  
  // Validate the secret
  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { type, handle, tag } = body

    switch (type) {
      case 'product':
        if (handle) {
          revalidatePath(`/shop/products/${handle}`)
          revalidatePath('/shop')
          revalidatePath('/')
        }
        break
        
      case 'collection':
        if (handle) {
          revalidatePath(`/shop/collections/${handle}`)
          revalidatePath('/shop')
          revalidatePath('/')
        }
        break
        
      case 'shop':
        revalidatePath('/shop')
        revalidatePath('/')
        break
        
      case 'all':
        revalidatePath('/', 'layout')
        break
        
      case 'tag':
        if (tag) {
          revalidateTag(tag)
        }
        break
        
      default:
        return NextResponse.json(
          { message: 'Invalid revalidation type' },
          { status: 400 }
        )
    }

    return NextResponse.json({ 
      revalidated: true, 
      now: Date.now(),
      type,
      handle: handle || null,
      tag: tag || null
    })
    
  } catch (error) {
    console.error('Revalidation error:', error)
    return NextResponse.json(
      { message: 'Error revalidating' },
      { status: 500 }
    )
  }
}
