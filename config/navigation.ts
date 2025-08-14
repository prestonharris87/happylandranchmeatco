export interface NavItem {
  title: string
  href: string
  description?: string
  items?: NavItem[]
}

export const mainNav: NavItem[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Shop',
    href: '/shop',
    items: [
      {
        title: 'All Products',
        href: '/shop',
        description: 'Browse our full selection of premium meats'
      },
      {
        title: 'Beef',
        href: '/shop/collections/beef',
        description: 'Grass-fed steaks, roasts, and ground beef'
      },
      {
        title: 'Pork',
        href: '/shop/collections/pork',
        description: 'Heritage pork chops, bacon, and sausages'
      },
      {
        title: 'Chicken',
        href: '/shop/collections/chicken',
        description: 'Pasture-raised chicken and poultry'
      },
      {
        title: 'Bundles & Boxes',
        href: '/shop/collections/bundles',
        description: 'Curated meat boxes and family packs'
      },
      {
        title: 'Subscriptions',
        href: '/shop/collections/subscriptions',
        description: 'Monthly meat delivery subscriptions'
      }
    ]
  },
  {
    title: 'Recipes & Tips',
    href: '/recipes',
    items: [
      {
        title: 'Recipes',
        href: '/recipes',
        description: 'Delicious recipes for our premium cuts'
      },
      {
        title: 'Blog',
        href: '/blog',
        description: 'Ranch life, cooking tips, and sustainability stories'
      },
      {
        title: 'Meat Storage Tips',
        href: '/blog/storage-tips',
        description: 'How to properly store and thaw your meat'
      }
    ]
  },
  {
    title: 'About',
    href: '/about',
    items: [
      {
        title: 'Our Story',
        href: '/about',
        description: 'Learn about Happyland Ranch and our mission'
      },
      {
        title: 'Meet the Rancher',
        href: '/about/meet-the-rancher',
        description: 'Get to know Preston and the ranch family'
      },
      {
        title: 'Sustainability',
        href: '/about/sustainability',
        description: 'Our commitment to land and animal stewardship'
      }
    ]
  },
  {
    title: 'Contact & FAQs',
    href: '/contact',
  }
]

export const footerNav = {
  shop: [
    { title: 'All Products', href: '/shop' },
    { title: 'Beef', href: '/shop/collections/beef' },
    { title: 'Pork', href: '/shop/collections/pork' },
    { title: 'Chicken', href: '/shop/collections/chicken' },
    { title: 'Bundles', href: '/shop/collections/bundles' },
  ],
  company: [
    { title: 'About Us', href: '/about' },
    { title: 'Meet the Rancher', href: '/about/meet-the-rancher' },
    { title: 'Sustainability', href: '/about/sustainability' },
    { title: 'Contact', href: '/contact' },
    { title: 'FAQs', href: '/faqs' },
  ],
  resources: [
    { title: 'Recipes', href: '/recipes' },
    { title: 'Blog', href: '/blog' },
    { title: 'Grass-Fed Guide', href: '/blog/grass-fed-beef-guide' },
    { title: 'Storage Tips', href: '/blog/storage-tips' },
  ],
  legal: [
    { title: 'Shipping & Returns', href: '/shipping' },
    { title: 'Terms of Service', href: '/terms' },
    { title: 'Privacy Policy', href: '/privacy' },
    { title: 'Refund Policy', href: '/refunds' },
  ]
}
