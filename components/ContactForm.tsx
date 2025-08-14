'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { isValidEmail } from '@/lib/utils'
import toast from 'react-hot-toast'

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  inquiryType: string
}

const inquiryTypes = [
  { value: 'general', label: 'General Question' },
  { value: 'order', label: 'Order Support' },
  { value: 'product', label: 'Product Information' },
  { value: 'shipping', label: 'Shipping & Delivery' },
  { value: 'cooking', label: 'Cooking Tips' },
  { value: 'wholesale', label: 'Wholesale Inquiry' },
  { value: 'ranch-tour', label: 'Ranch Tour Request' },
  { value: 'other', label: 'Other' },
]

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error('Please enter your name')
      return false
    }
    if (!formData.email.trim()) {
      toast.error('Please enter your email address')
      return false
    }
    if (!isValidEmail(formData.email)) {
      toast.error('Please enter a valid email address')
      return false
    }
    if (!formData.subject.trim()) {
      toast.error('Please enter a subject')
      return false
    }
    if (!formData.message.trim()) {
      toast.error('Please enter your message')
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // In a real implementation, you would send this to your contact form handler
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      toast.success('Thank you for your message! We\'ll get back to you within 24 hours.')
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        inquiryType: 'general',
      })
    } catch (error) {
      toast.error('Something went wrong. Please try again or call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name and Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Full Name *"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
          required
        />
        <Input
          label="Email Address *"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
          required
        />
      </div>

      {/* Phone and Inquiry Type */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Phone Number"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="(555) 123-4567"
        />
        <div>
          <label className="block text-sm font-medium text-ink mb-2">
            Inquiry Type *
          </label>
          <select
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleChange}
            className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-forest focus:border-brand-forest"
            required
          >
            {inquiryTypes.map(type => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Subject */}
      <Input
        label="Subject *"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="Brief description of your inquiry"
        required
      />

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-ink mb-2">
          Message *
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-forest focus:border-brand-forest resize-vertical"
          placeholder="Please provide details about your question or request..."
          required
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        loading={isSubmitting}
        size="lg"
        className="w-full md:w-auto"
      >
        Send Message
      </Button>

      {/* Contact Info */}
      <div className="text-sm text-gray-600 pt-4 border-t border-gray-200">
        <p className="mb-2">
          <strong>Prefer to call or email directly?</strong>
        </p>
        <p>
          Phone: (405) 555-0123<br />
          Email: hello@happylandranchmeatco.com
        </p>
        <p className="mt-2 text-gray-500">
          We typically respond to messages within 24 hours during business days.
        </p>
      </div>
    </form>
  )
}
