import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Facebook, Youtube, Twitter } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { footerNav } from '@/config/navigation'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

export function Footer() {
  return (
    <footer className="bg-brand-forest text-white">
      {/* Email Signup Section */}
      <div className="border-b border-white border-opacity-20">
        <div className="container-custom section-padding">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="heading-2 text-white mb-4">
              Join the Happyland Herd
            </h2>
            <p className="body-large text-white text-opacity-90 mb-8">
              Get ranch updates, recipes, and exclusive offers straight from the pasture.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white border-white"
                required
              />
              <Button variant="accent" type="submit">
                Sign Me Up
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <Image
                src="/logo.png"
                alt={siteConfig.name}
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <div>
                <div className="text-xl font-serif font-bold">
                  {siteConfig.name}
                </div>
                <div className="text-sm text-white text-opacity-80">
                  {siteConfig.tagline}
                </div>
              </div>
            </Link>
            <p className="text-white text-opacity-80 mb-6 max-w-md">
              Premium ranch-raised beef, pork, and chicken delivered fresh from our 
              family ranch in Ada, Oklahoma. Pasture-raised, hormone-free, and full of flavor.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-opacity-60 hover:text-opacity-100 transition-opacity duration-200"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-opacity-60 hover:text-opacity-100 transition-opacity duration-200"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-opacity-60 hover:text-opacity-100 transition-opacity duration-200"
                aria-label="Subscribe to our YouTube channel"
              >
                <Youtube className="h-6 w-6" />
              </a>
              <a
                href={siteConfig.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-opacity-60 hover:text-opacity-100 transition-opacity duration-200"
                aria-label="Follow us on TikTok"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Shop</h3>
            <ul className="space-y-2">
              {footerNav.shop.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-white text-opacity-80 hover:text-opacity-100 transition-opacity duration-200"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {footerNav.company.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-white text-opacity-80 hover:text-opacity-100 transition-opacity duration-200"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerNav.resources.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-white text-opacity-80 hover:text-opacity-100 transition-opacity duration-200"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white border-opacity-20">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-white text-opacity-80 text-sm">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              {footerNav.legal.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="text-white text-opacity-80 hover:text-opacity-100 transition-opacity duration-200"
                >
                  {link.title}
                </Link>
              ))}
            </div>

            {/* Contact Info */}
            <div className="text-white text-opacity-80 text-sm text-center md:text-right">
              <div>{siteConfig.contact.phone}</div>
              <div>{siteConfig.contact.email}</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
