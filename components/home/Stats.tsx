'use client'

import { motion } from 'framer-motion'
import { Users, Rocket, Award, TrendingUp } from 'lucide-react'

const Stats = () => {
  const stats = [
    {
      icon: Users,
      value: '50+',
      label: 'Happy Clients',
      description: 'Warren businesses trust us',
    },
    {
      icon: Rocket,
      value: '100+',
      label: 'Projects Launched',
      description: 'Delivered on time & budget',
    },
    {
      icon: Award,
      value: '98%',
      label: 'Satisfaction Rate',
      description: 'Client retention & referrals',
    },
    {
      icon: TrendingUp,
      value: '250%',
      label: 'Avg ROI Increase',
      description: 'Client conversion growth',
    },
  ]

  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Results That Speak for Themselves
          </h2>
          <p className="text-gray-200 text-lg">
            We measure success by the growth of our clients' businesses
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-xl mb-4">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-xl font-semibold mb-2">{stat.label}</div>
                <div className="text-sm text-gray-300">{stat.description}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Stats

