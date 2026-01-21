'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Palette, Code, Search, Settings, Zap, Shield } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'Web Design',
      description: 'Beautiful, modern designs that capture your brand and convert visitors into customers.',
      features: ['Custom UI/UX', 'Mobile-First', 'Brand Identity'],
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Lightning-fast, secure websites built with cutting-edge technology and best practices.',
      features: ['React/Next.js', 'Performance Optimized', 'Scalable Architecture'],
    },
    {
      icon: Search,
      title: 'Local SEO',
      description: 'Dominate local search results and get found by Warren customers actively looking for you.',
      features: ['Google My Business', 'Local Keywords', 'Schema Markup'],
    },
    {
      icon: Settings,
      title: 'Maintenance',
      description: 'Keep your website secure, fast, and up-to-date with our proactive maintenance plans.',
      features: ['24/7 Monitoring', 'Regular Updates', 'Security Patches'],
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Blazing-fast load times that improve rankings, conversions, and user experience.',
      features: ['Core Web Vitals', 'CDN Setup', 'Image Optimization'],
    },
    {
      icon: Shield,
      title: 'Hosting & Support',
      description: 'Reliable hosting with 99.9% uptime and expert support whenever you need it.',
      features: ['Managed Hosting', 'SSL Certificates', 'Daily Backups'],
    },
  ]

  return (
    <section className="section-container bg-white">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4"
        >
          Our Services
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="heading-lg mb-4"
        >
          Everything You Need to Succeed Online
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          From design to development, SEO to support – we&apos;re your all-in-one web partner.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card p-8 group hover:border-accent border-2 border-transparent"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                <Icon className="w-8 h-8 text-accent group-hover:text-primary transition-colors" />
              </div>

              {/* Content */}
              <h3 className="heading-md text-2xl mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <Link 
                href="/services" 
                className="text-accent hover:text-accent-dark font-semibold text-sm inline-flex items-center group-hover:gap-2 transition-all"
              >
                Learn More
                <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </motion.div>
          )
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <Link href="/services" className="btn-primary inline-flex items-center">
          View All Services & Pricing
        </Link>
      </motion.div>
    </section>
  )
}

export default Services

