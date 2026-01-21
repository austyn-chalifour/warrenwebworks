'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Palette, Code, Search, Settings, Zap, Shield, 
  Check, ChevronRight, ArrowRight 
} from 'lucide-react'

const ServicesPage = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')

  const services = [
    {
      icon: Palette,
      id: 'web-design',
      title: 'Web Design',
      description: 'Beautiful, modern designs that capture your brand identity and convert visitors into customers.',
      features: [
        'Custom UI/UX design',
        'Mobile-first approach',
        'Brand identity integration',
        'Interactive prototypes',
        'Unlimited revisions',
        'Design system creation',
      ],
      process: [
        'Discovery & Research',
        'Wireframing',
        'Visual Design',
        'Prototype & Testing',
        'Final Delivery',
      ],
    },
    {
      icon: Code,
      id: 'development',
      title: 'Web Development',
      description: 'Lightning-fast, secure websites built with cutting-edge technology and industry best practices.',
      features: [
        'React/Next.js development',
        'Performance optimization',
        'Scalable architecture',
        'API integrations',
        'Database design',
        'Quality assurance testing',
      ],
      process: [
        'Technical Planning',
        'Development',
        'Testing & QA',
        'Deployment',
        'Performance Optimization',
      ],
    },
    {
      icon: Search,
      id: 'seo',
      title: 'Local SEO',
      description: 'Dominate local search results and get found by Warren customers actively looking for your services.',
      features: [
        'Google My Business optimization',
        'Local keyword research',
        'Schema markup implementation',
        'Citation building',
        'Review management',
        'Monthly reporting',
      ],
      process: [
        'SEO Audit',
        'Keyword Strategy',
        'On-Page Optimization',
        'Local Listings',
        'Ongoing Monitoring',
      ],
    },
    {
      icon: Settings,
      id: 'maintenance',
      title: 'Website Maintenance',
      description: 'Keep your website secure, fast, and up-to-date with our proactive maintenance plans.',
      features: [
        '24/7 uptime monitoring',
        'Regular security updates',
        'Performance optimization',
        'Content updates',
        'Backup & recovery',
        'Priority support',
      ],
      process: [
        'Initial Audit',
        'Monthly Updates',
        'Security Patches',
        'Performance Monitoring',
        'Reporting',
      ],
    },
  ]

  const packages = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses getting started online',
      monthlyPrice: 997,
      yearlyPrice: 9970,
      features: [
        'Up to 5 pages',
        'Mobile-responsive design',
        'Basic SEO setup',
        'Contact form',
        'Google Maps integration',
        '30-day support',
        '2 rounds of revisions',
      ],
      popular: false,
    },
    {
      name: 'Business',
      description: 'Ideal for growing businesses that need more features',
      monthlyPrice: 1997,
      yearlyPrice: 19970,
      features: [
        'Up to 15 pages',
        'Custom design & animations',
        'Advanced SEO optimization',
        'Blog/CMS integration',
        'Lead generation forms',
        '90-day support',
        'Unlimited revisions',
        'Analytics setup',
        'Social media integration',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      description: 'For businesses requiring custom solutions',
      monthlyPrice: null,
      yearlyPrice: null,
      features: [
        'Unlimited pages',
        'Custom web application',
        'Advanced integrations',
        'E-commerce functionality',
        'Custom CMS',
        '1-year support',
        'Dedicated project manager',
        'Training included',
        'Priority support',
        'Custom features',
      ],
      popular: false,
    },
  ]

  const addOns = [
    { name: 'E-commerce Integration', price: 500 },
    { name: 'Custom CMS Setup', price: 750 },
    { name: 'API Integration (per service)', price: 300 },
    { name: 'Advanced Analytics Dashboard', price: 400 },
    { name: 'Multi-language Support', price: 600 },
    { name: 'Custom Illustrations (set of 10)', price: 500 },
  ]

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center space-x-2 mb-4">
              <Link href="/" className="text-gray-300 hover:text-accent transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-accent">Services & Pricing</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Services & Pricing
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Transparent pricing, exceptional value. Everything you need to succeed online, with no hidden fees.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">What We Do</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Full-service web solutions designed to help your Warren business thrive online.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-3">What's Included</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-700">
                          <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Our Process</h4>
                    <ol className="space-y-2">
                      {service.process.map((step, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-700">
                          <span className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mr-2 text-xs font-bold text-accent">
                            {idx + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Choose Your Package</h2>
            <p className="text-xl text-gray-600 mb-8">
              Fixed pricing with no surprises. All packages include hosting setup and launch support.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-white rounded-full p-1 shadow-md">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-accent text-primary'
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                One-Time
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  billingCycle === 'yearly'
                    ? 'bg-accent text-primary'
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                + Maintenance (Save 17%)
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-2xl p-8 shadow-lg relative ${
                  pkg.popular ? 'ring-2 ring-accent scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-accent text-primary text-sm font-bold px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
                  
                  {pkg.monthlyPrice ? (
                    <div>
                      <div className="text-4xl font-bold text-primary">
                        ${billingCycle === 'monthly' ? pkg.monthlyPrice : pkg.yearlyPrice}
                      </div>
                      <div className="text-sm text-gray-500">
                        {billingCycle === 'monthly' ? 'one-time payment' : '+ $99/mo maintenance'}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="text-3xl font-bold text-primary">Custom</div>
                      <div className="text-sm text-gray-500">Contact for quote</div>
                    </div>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mr-2 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all ${
                    pkg.popular
                      ? 'btn-primary'
                      : 'bg-gray-100 text-primary hover:bg-gray-200'
                  }`}
                >
                  {pkg.monthlyPrice ? 'Get Started' : 'Contact Us'}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Add-On Services</h2>
          <p className="text-xl text-gray-600">
            Enhance your website with these optional features
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {addOns.map((addon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-lg p-6 shadow-md border border-gray-200 hover:border-accent transition-colors"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="font-semibold text-primary mb-1">{addon.name}</h4>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-accent">${addon.price}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Not Sure Which Package Is Right?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Get a free consultation and custom quote tailored to your specific needs.
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center">
            Schedule Free Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage

