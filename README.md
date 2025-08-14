# Happyland Ranch Meat Co. - E-Commerce Website

A premium, conversion-optimized e-commerce website built with Next.js 14, TypeScript, and Tailwind CSS, integrated with Shopify Storefront API for products and cart management.

## 🚀 Features

### Core Functionality
- **Next.js 14** with App Router and TypeScript
- **Shopify Integration** via Storefront API for products, collections, and cart
- **Responsive Design** optimized for mobile, tablet, and desktop
- **Server Components** for optimal performance and SEO
- **Cart Management** with persistent state using Zustand
- **Premium UI/UX** with ranch-to-table branding

### E-Commerce Features
- Product catalog with filtering and search
- Collection pages (Beef, Pork, Chicken, Bundles)
- Product detail pages with variant selection
- Shopping cart with Shopify Storefront Cart API
- Checkout redirect to Shopify-hosted checkout
- Inventory management and stock indicators

### Content & SEO
- **SEO Optimized** with metadata, JSON-LD, and structured data
- **Performance Optimized** with ISR, image optimization, and caching
- **Accessibility** compliant with WCAG guidelines
- Sitemaps and robots.txt generation
- OpenGraph and Twitter Card support
- Google Analytics 4 integration

### Content Management
- MDX + Contentlayer ready for blog and recipes
- Placeholder image system for development
- Revalidation API for on-demand content updates

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **E-Commerce:** Shopify Storefront API
- **State Management:** Zustand (cart)
- **Content:** MDX + Contentlayer (ready)
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Forms:** React Hook Form (ready)
- **Notifications:** React Hot Toast

## 📁 Project Structure

```
happylandranchmeatco/
├── app/                          # Next.js App Router
│   ├── (site)/                   # Site pages (home, about, contact)
│   ├── (shop)/                   # Shop pages (products, collections)
│   ├── api/                      # API routes
│   ├── layout.tsx                # Root layout
│   ├── sitemap.ts                # Dynamic sitemap
│   └── robots.ts                 # Robots.txt
├── components/                   # React components
│   ├── ui/                       # Base UI components
│   ├── home/                     # Homepage sections
│   ├── shop/                     # Shop-specific components
│   ├── product/                  # Product detail components
│   └── cart/                     # Cart components
├── lib/                          # Utilities and integrations
│   ├── shopify.ts               # Shopify API client
│   ├── cart.ts                  # Cart state management
│   ├── seo.ts                   # SEO utilities
│   ├── images.ts                # Image utilities
│   └── utils.ts                 # General utilities
├── config/                       # Configuration
│   ├── site.ts                  # Site configuration
│   └── navigation.ts            # Navigation structure
├── types/                        # TypeScript definitions
└── public/                       # Static assets
```

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn
- Shopify store with Storefront API access

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd happylandranchmeatco
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Setup**
Copy `env.example` to `.env.local` and configure:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://happylandranchmeatco.com
NEXT_PUBLIC_SITE_NAME="Happyland Ranch Meat Co."

# Shopify Configuration
SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
SHOPIFY_STOREFRONT_API_TOKEN=your_storefront_access_token
SHOPIFY_API_VERSION=2024-07

# Optional: Analytics
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX

# Optional: Revalidation
REVALIDATION_SECRET=your_webhook_secret
```

4. **Run the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🛒 Shopify Setup

### Required Shopify Configuration

1. **Enable Storefront API**
   - Go to your Shopify admin → Apps → Develop apps
   - Create a new app and configure Storefront API access
   - Generate a Storefront access token

2. **Required Permissions**
   - `unauthenticated_read_products`
   - `unauthenticated_read_collections`
   - `unauthenticated_read_product_listings`
   - `unauthenticated_write_checkouts`
   - `unauthenticated_read_checkouts`

3. **Recommended Metafields**
   Configure these custom metafields for enhanced product information:
   - `custom.species` (text)
   - `custom.cut` (text)
   - `custom.practice` (text)
   - `custom.cooking_notes` (rich text)
   - `custom.thawing_notes` (rich text)

### Domain Configuration

- **Primary Domain:** `happylandranchmeatco.com` (Vercel)
- **Checkout Domain:** `shop.happylandranchmeatco.com` (Shopify)

Set up a CNAME record pointing `shop.happylandranchmeatco.com` to your Shopify store.

## 📊 Analytics & Tracking

### Google Analytics 4
Set your GA4 measurement ID in the environment variables. The following events are tracked:
- `view_item` - Product page views
- `add_to_cart` - Items added to cart
- `begin_checkout` - Checkout initiated
- `purchase` - Completed purchases (via Shopify)

### Purchase Tracking
For complete purchase tracking, add this to your Shopify thank-you page:

```html
<script>
  gtag('event', 'purchase', {
    transaction_id: '{{ order.order_number }}',
    value: {{ order.total_price | divided_by: 100.0 }},
    currency: '{{ order.currency }}',
    items: [
      {% for line_item in order.line_items %}
      {
        item_id: '{{ line_item.variant.id }}',
        item_name: '{{ line_item.title | escape }}',
        quantity: {{ line_item.quantity }},
        price: {{ line_item.final_price | divided_by: 100.0 }}
      }{% unless forloop.last %},{% endunless %}
      {% endfor %}
    ]
  });
</script>
```

## 🔄 Content Management

### Revalidation Webhook
Set up a webhook in Shopify to automatically revalidate content:

**Webhook URL:** `https://your-domain.com/api/revalidate?secret=YOUR_SECRET`

**Events to subscribe to:**
- Product updates
- Collection updates
- Inventory updates

**Example payload:**
```json
{
  "type": "product",
  "handle": "grass-fed-ribeye-14oz"
}
```

### Adding Blog Content (Ready for Implementation)
The site is configured for MDX + Contentlayer. To add blog/recipe content:

1. Install Contentlayer dependencies
2. Configure `contentlayer.config.ts`
3. Add MDX files to `/content/blog/` and `/content/recipes/`

## 🎨 Customization

### Brand Colors
Update colors in `tailwind.config.ts`:
```typescript
colors: {
  brand: {
    forest: '#2F4F3E',  // Primary brand color
    brown: '#5A3E2B',   // Secondary brand color
    cream: '#F8F3EC',   // Background color
  },
  accent: {
    clay: '#C97B5A',    // Accent color 1
    gold: '#D1A15E',    // Accent color 2
  }
}
```

### Placeholder Images
The site uses a configurable placeholder system. Replace placeholders with real images by:
1. Adding images to `/public/images/`
2. Updating the `placeholders` object in `/lib/images.ts`

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy

### Custom Deployment
1. Build the application: `npm run build`
2. Start the production server: `npm start`

## 📈 Performance

The site is optimized for performance with:
- Server-side rendering (SSR)
- Incremental Static Regeneration (ISR)
- Image optimization
- Code splitting
- Prefetching

Expected Lighthouse scores:
- **Performance:** 90+
- **Accessibility:** 95+
- **Best Practices:** 95+
- **SEO:** 100

## 🛡️ Security

- Environment variables for sensitive data
- Input validation and sanitization
- CORS configuration
- Security headers
- Rate limiting on API routes

## 📝 License

This project is proprietary software developed for Happyland Ranch Meat Co.

## 🤝 Support

For technical support or questions about this implementation:
- Review this README
- Check the `/docs` folder for additional documentation
- Contact the development team

---

**Built with ❤️ for premium ranch-to-table experiences**