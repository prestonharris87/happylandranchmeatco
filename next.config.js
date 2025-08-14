/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.shopify.com', 'via.placeholder.com'],
    formats: ['image/webp', 'image/avif'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/beef',
        destination: '/shop/collections/beef',
        permanent: true,
      },
      {
        source: '/pork',
        destination: '/shop/collections/pork',
        permanent: true,
      },
      {
        source: '/chicken',
        destination: '/shop/collections/chicken',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
