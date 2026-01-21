'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Filter, ExternalLink, ChevronRight } from 'lucide-react'

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'automotive', label: 'Automotive' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'industrial', label: 'Industrial' },
    { id: 'retail', label: 'Retail' },
    { id: 'professional', label: 'Professional Services' },
  ]

  const projects = [
    {
      id: 1,
      title: 'Warren Auto Repair',
      category: 'automotive',
      categoryLabel: 'Automotive',
      description: 'Complete website redesign with online booking system, customer portal, and service tracking.',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop',
      tags: ['Web Design', 'Development', 'SEO', 'Booking System'],
      challenge: 'Outdated website with no online booking, losing customers to competitors.',
      solution: 'Modern responsive design with integrated booking, automated reminders, and local SEO.',
      results: {
        bookings: '+300%',
        traffic: '+180%',
        ranking: 'Top 3 for "auto repair warren mi"',
      },
      techStack: ['Next.js', 'Tailwind CSS', 'Supabase', 'Calendly API'],
      liveUrl: '#',
    },
    {
      id: 2,
      title: 'Great Lakes Manufacturing',
      category: 'industrial',
      categoryLabel: 'Industrial',
      description: 'Modern B2B platform with product catalog, lead generation, and client portal.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      tags: ['Web Development', 'CMS', 'Lead Gen', 'Portal'],
      challenge: 'Poor lead quality and difficulty showcasing complex manufacturing capabilities.',
      solution: 'Custom CMS for product catalog, interactive quote system, and comprehensive lead qualification.',
      results: {
        leads: '+150%',
        quality: '+85% qualified leads',
        time: '60% faster quote process',
      },
      techStack: ['Next.js', 'Sanity.io', 'PostgreSQL', 'AWS'],
      liveUrl: '#',
    },
    {
      id: 3,
      title: 'Torres Medical Clinic',
      category: 'healthcare',
      categoryLabel: 'Healthcare',
      description: 'HIPAA-compliant patient portal with appointment scheduling and telehealth.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
      tags: ['Web Design', 'Portal', 'Integration', 'HIPAA'],
      challenge: 'Paper-based processes and difficulty managing patient appointments and records.',
      solution: 'Secure patient portal with telehealth, appointment management, and EHR integration.',
      results: {
        engagement: '+200%',
        noShows: '-40% missed appointments',
        satisfaction: '95% patient satisfaction',
      },
      techStack: ['Next.js', 'Firebase', 'Twilio', 'Stripe'],
      liveUrl: '#',
    },
    {
      id: 4,
      title: 'Warren Realty Group',
      category: 'professional',
      categoryLabel: 'Professional Services',
      description: 'Real estate platform with property listings, virtual tours, and lead capture.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
      tags: ['Web Design', 'IDX Integration', 'Virtual Tours'],
      challenge: 'Generic template site that didn\'t showcase properties effectively.',
      solution: 'Custom property showcase with 3D tours, advanced search, and automated lead nurturing.',
      results: {
        inquiries: '+220%',
        timeOnSite: '+165%',
        closings: '+45% lead-to-close rate',
      },
      techStack: ['Next.js', 'Matterport', 'CRM Integration'],
      liveUrl: '#',
    },
    {
      id: 5,
      title: 'Midwest Dental Associates',
      category: 'healthcare',
      categoryLabel: 'Healthcare',
      description: 'Patient-friendly website with online scheduling, forms, and patient education.',
      image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=600&fit=crop',
      tags: ['Web Design', 'Patient Portal', 'SEO'],
      challenge: 'Low online visibility and time-consuming manual appointment scheduling.',
      solution: 'SEO-optimized site with online booking, digital forms, and patient education library.',
      results: {
        appointments: '+175%',
        calls: '-50% phone volume',
        ranking: '#1 for "dentist warren mi"',
      },
      techStack: ['Next.js', 'Dentrix Integration', 'Umami'],
      liveUrl: '#',
    },
    {
      id: 6,
      title: 'Tech Solutions Warren',
      category: 'professional',
      categoryLabel: 'Professional Services',
      description: 'IT services website with support portal, knowledge base, and client dashboard.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
      tags: ['Web Development', 'Portal', 'Knowledge Base'],
      challenge: 'Inefficient support process and difficulty demonstrating technical expertise.',
      solution: 'Comprehensive support portal with ticket system, knowledge base, and service dashboard.',
      results: {
        tickets: '-35% support tickets',
        satisfaction: '92% satisfaction score',
        revenue: '+120% service revenue',
      },
      techStack: ['Next.js', 'Supabase', 'Algolia'],
      liveUrl: '#',
    },
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

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
              <span className="text-accent">Portfolio</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Real projects, real results. Explore how we've helped Warren businesses transform their online presence and achieve measurable growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-2 overflow-x-auto">
            <Filter className="w-5 h-5 text-gray-400 flex-shrink-0" />
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                  activeFilter === filter.id
                    ? 'bg-accent text-primary'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card group"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-accent text-primary text-xs font-semibold px-3 py-1 rounded-full">
                    {project.categoryLabel}
                  </span>
                </div>
                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <ExternalLink className="w-12 h-12 mx-auto mb-3" />
                    <div className="font-semibold text-lg mb-2">View Case Study</div>
                    <div className="text-sm text-gray-200">See full details & results</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Key Results */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="text-sm text-gray-500 mb-2">Key Results</div>
                  <div className="space-y-1">
                    {Object.entries(project.results).slice(0, 2).map(([key, value], idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <span className="text-xs text-gray-600 capitalize">{key}</span>
                        <span className="text-sm font-bold text-green-600">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={`/portfolio/${project.id}`}
                  className="mt-6 inline-flex items-center text-accent hover:text-accent-dark font-semibold text-sm group"
                >
                  View Full Case Study
                  <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can help your Warren business achieve similar results.
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center">
            Start Your Project
            <ChevronRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default PortfolioPage

