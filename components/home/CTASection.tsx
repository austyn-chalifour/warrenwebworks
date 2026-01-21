'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Download } from 'lucide-react'

const CTASection = () => {
  return (
    <section className="section-container bg-gradient-to-br from-primary via-primary-dark to-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Ready to Grow Your Warren Business Online?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Get a <strong className="text-accent">free website audit</strong> and discover exactly how to increase your online conversions, improve performance, and outrank your competitors.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact" className="btn-primary inline-flex items-center justify-center group">
              Get Your Free Audit
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 border border-white/30 inline-flex items-center justify-center">
              <Download className="w-5 h-5 mr-2" />
              Download Website Checklist
            </button>
          </div>

          <p className="text-sm text-gray-300">
            🔒 No credit card required • 📞 Free 30-minute consultation • ⚡ Get results in 48 hours
          </p>
        </motion.div>

        {/* Trust Elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 pt-8 border-t border-white/20"
        >
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl mb-2">⚡</div>
              <div className="font-semibold mb-1">Fast Turnaround</div>
              <div className="text-sm text-gray-300">Most projects completed in 4-6 weeks</div>
            </div>
            <div>
              <div className="text-2xl mb-2">💰</div>
              <div className="font-semibold mb-1">Transparent Pricing</div>
              <div className="text-sm text-gray-300">No hidden fees, clear packages</div>
            </div>
            <div>
              <div className="text-2xl mb-2">🤝</div>
              <div className="font-semibold mb-1">Local Support</div>
              <div className="text-sm text-gray-300">Right here in Warren when you need us</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection

