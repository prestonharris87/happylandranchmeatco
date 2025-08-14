export const siteConfig = {
  name: 'Happyland Ranch Meat Co.',
  description: 'Premium ranch-raised beef, pork, and chicken delivered to your door. Pasture-raised, hormone-free, and ranch-direct from our family farm in Ada, Oklahoma.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://happylandranchmeatco.com',
  ogImage: '/og-image.jpg',
  tagline: 'From Our Pasture to Your Plate',
  keywords: [
    'grass-fed beef',
    'pasture-raised meat',
    'ranch direct',
    'hormone-free beef',
    'heritage pork',
    'pasture-raised chicken',
    'Oklahoma ranch',
    'farm to table',
    'premium meat delivery',
    'ranch-to-table'
  ],
  social: {
    instagram: 'https://instagram.com/happylandranchmeatco',
    facebook: 'https://facebook.com/happylandranchmeatco',
    youtube: 'https://youtube.com/@happylandranchmeatco',
    tiktok: 'https://tiktok.com/@happylandranchmeatco',
  },
  contact: {
    email: 'hello@happylandranchmeatco.com',
    phone: '(405) 555-0123',
    address: {
      street: '123 Ranch Road',
      city: 'Ada',
      state: 'Oklahoma',
      zip: '74820',
    }
  },
  shipping: {
    freeShipping: 149,
    freeThreshold: 149,
    perishableThreshold: 149,
    perishableFee: 15,
  },
  analytics: {
    ga4: process.env.NEXT_PUBLIC_GA4_ID,
  }
}
