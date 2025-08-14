import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  
  const width = parseInt(searchParams.get('w') || '400')
  const height = parseInt(searchParams.get('h') || '300')
  const text = searchParams.get('text') || 'Placeholder'
  const bg = searchParams.get('bg') || 'F3F4F6'
  const color = searchParams.get('color') || '6B7280'

  // Validate dimensions
  if (width > 2000 || height > 2000 || width < 1 || height < 1) {
    return new NextResponse('Invalid dimensions', { status: 400 })
  }

  // Generate SVG
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#${bg}"/>
      <text x="50%" y="50%" font-family="system-ui, sans-serif" font-size="16" fill="#${color}" text-anchor="middle" dominant-baseline="middle">
        ${text.length > 30 ? text.substring(0, 30) + '...' : text}
      </text>
      <text x="50%" y="60%" font-family="system-ui, sans-serif" font-size="12" fill="#${color}" text-anchor="middle" dominant-baseline="middle" opacity="0.7">
        ${width} × ${height}
      </text>
    </svg>
  `

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}
