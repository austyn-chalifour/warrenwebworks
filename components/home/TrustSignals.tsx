'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const TrustSignals = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      business: 'Warren Auto Repair',
      quote: 'Our online bookings increased 300% after Warren Web Works redesigned our site. Best investment we&apos;ve made!',
      rating: 5,
    },
    {
      name: 'David Chen',
      business: 'Great Lakes Manufacturing',
      quote: 'Professional, fast, and they truly understand both design and technology. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Michael Torres',
      business: 'Torres Medical Clinic',
      quote: 'They transformed our outdated website into a modern, patient-friendly platform. Couldn&apos;t be happier.',
      rating: 5,
    },
  ]

  const clientLogos = [
    'Warren Auto Repair',
    'Great Lakes Mfg',
    'Torres Medical',
    'Warren Realty',
    'Midwest Dental',
    'Tech Solutions',
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Client Logos */}
        <div className="mb-16">
          <p className="text-center text-sm text-gray-500 mb-8 uppercase tracking-wide font-semibold">
            Trusted by Leading Warren Businesses
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clientLogos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-gray-400 hover:text-primary transition-colors text-lg font-semibold"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="border-t border-gray-200 pt-4">
                <div className="font-semibold text-primary">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.business}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustSignals

