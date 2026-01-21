'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Heart, Target, Award, Users, ChevronRight } from 'lucide-react'

const AboutPage = () => {
  const team = [
    {
      name: 'Alex Warren',
      role: 'Founder & Lead Developer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      bio: '10+ years building web applications. Passionate about clean code and user experience.',
    },
    {
      name: 'Sarah Mitchell',
      role: 'UI/UX Designer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      bio: 'Award-winning designer focused on creating beautiful, intuitive interfaces.',
    },
    {
      name: 'Marcus Johnson',
      role: 'SEO Specialist',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      bio: 'Local SEO expert helping Warren businesses dominate search rankings.',
    },
    {
      name: 'Emily Chen',
      role: 'Project Manager',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      bio: 'Ensures every project is delivered on time and exceeds expectations.',
    },
  ]

  const values = [
    {
      icon: Heart,
      title: 'Local First',
      description: 'We live and work in Warren. Your success is our community&apos;s success.',
    },
    {
      icon: Target,
      title: 'Results Driven',
      description: 'Every decision is made to maximize your ROI and business growth.',
    },
    {
      icon: Award,
      title: 'Quality Obsessed',
      description: 'We don&apos;t cut corners. Every line of code, every pixel matters.',
    },
    {
      icon: Users,
      title: 'Partnership Mentality',
      description: 'We&apos;re not just vendors—we&apos;re your long-term web partners.',
    },
  ]

  const milestones = [
    { year: '2019', title: 'Founded', description: 'Started with a mission to help local businesses' },
    { year: '2020', title: '10 Clients', description: 'Reached first major milestone' },
    { year: '2021', title: 'Team Expansion', description: 'Grew to 4-person team' },
    { year: '2022', title: '50 Projects', description: 'Launched our 50th website' },
    { year: '2023', title: 'Industry Recognition', description: 'Named Best Web Agency in Warren' },
    { year: '2024', title: '100+ Clients', description: 'Serving over 100 local businesses' },
  ]

  const involvement = [
    { title: 'Warren Chamber of Commerce', role: 'Active Member' },
    { title: 'Local Tech Meetups', role: 'Monthly Sponsor' },
    { title: 'Warren Small Business Week', role: 'Annual Presenter' },
    { title: 'Youth Coding Workshops', role: 'Volunteer Instructor' },
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
              <span className="text-accent">About Us</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              We&apos;re Warren&apos;s Web Partner
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Born and raised in Warren, MI. We&apos;re not just building websites—we&apos;re building our community&apos;s digital future, one business at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Warren Web Works started in 2019 with a simple observation: too many local businesses were being underserved by generic web agencies that didn&apos;t understand our community.
              </p>
              <p>
                As Warren natives, we saw incredible businesses with outdated websites, losing customers to competitors simply because they couldn&apos;t be found online or their sites didn&apos;t work on mobile.
              </p>
              <p>
                We started with one mission: <strong className="text-primary">bring world-class web design and development to Warren businesses at fair, transparent prices.</strong>
              </p>
              <p>
                Today, we&apos;ve helped over 100 local businesses transform their online presence. We&apos;re proud to be part of Warren&apos;s small business community, and we&apos;re just getting started.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-primary p-6 rounded-xl shadow-xl">
              <div className="text-4xl font-bold">100+</div>
              <div className="text-sm font-semibold">Happy Clients</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-lg mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg text-center"
                >
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg mb-4">Meet the Team</h2>
          <p className="text-xl text-gray-600">
            The talented people behind Warren Web Works
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
                <p className="text-accent font-semibold text-sm mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-gray-200">Growing alongside Warren's business community</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-4xl font-bold text-accent mb-2">{milestone.year}</div>
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-gray-200">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg mb-4">Community Involvement</h2>
          <p className="text-xl text-gray-600">
            Giving back to the Warren community that supports us
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {involvement.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-accent"
            >
              <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
              <p className="text-accent font-semibold text-sm">{item.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let&apos;s talk about how we can help your Warren business grow online.
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center">
            Get Started Today
            <ChevronRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default AboutPage

