'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ExternalLink, ArrowRight } from 'lucide-react'

const PortfolioPreview = () => {
  const projects = [
    {
      id: 1,
      title: 'Warren Auto Repair',
      category: 'Automotive',
      description: 'Complete website redesign with online booking system that increased appointments by 300%.',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=400&fit=crop',
      tags: ['Web Design', 'Development', 'SEO'],
      results: '+300% Online Bookings',
    },
    {
      id: 2,
      title: 'Great Lakes Manufacturing',
      category: 'Industrial',
      description: 'Modern B2B website with lead generation system and product catalog integration.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
      tags: ['Web Development', 'CMS', 'Lead Gen'],
      results: '+150% Qualified Leads',
    },
    {
      id: 3,
      title: 'Torres Medical Clinic',
      category: 'Healthcare',
      description: 'HIPAA-compliant patient portal with appointment scheduling and telehealth integration.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
      tags: ['Web Design', 'Portal', 'Integration'],
      results: '+200% Patient Engagement',
    },
  ]

  return (
    <section className="section-container bg-gray-50">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4"
        >
          Our Work
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="heading-lg mb-4"
        >
          Success Stories from Warren Businesses
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Real projects, real results. See how we've helped local businesses grow online.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="card group cursor-pointer"
          >
            {/* Image */}
            <div className="relative overflow-hidden aspect-video bg-gray-200">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-white text-center">
                  <ExternalLink className="w-12 h-12 mx-auto mb-2" />
                  <div className="font-semibold">View Case Study</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="text-sm text-accent font-semibold mb-2">{project.category}</div>
              <h3 className="text-2xl font-bold text-primary mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Results */}
              <div className="pt-4 border-t border-gray-200">
                <div className="text-sm text-gray-500">Key Result</div>
                <div className="text-lg font-bold text-green-600">{project.results}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Link href="/portfolio" className="btn-primary inline-flex items-center group">
          View Full Portfolio
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </section>
  )
}

export default PortfolioPreview

