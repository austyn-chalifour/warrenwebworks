'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, ChevronRight, Search } from 'lucide-react'
import { useState } from 'react'

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const posts = [
    {
      id: 1,
      title: '10 Signs Your Warren Business Needs a Website Redesign',
      excerpt: 'Is your website hurting your business? Learn the top 10 warning signs that indicate it\'s time for a refresh.',
      category: 'Web Design',
      author: 'Sarah Mitchell',
      date: '2024-01-15',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      slug: 'website-redesign-signs',
    },
    {
      id: 2,
      title: 'Local SEO Guide for Warren, MI Small Businesses',
      excerpt: 'Master local SEO and dominate Google search results in Warren. Complete guide with actionable strategies.',
      category: 'SEO',
      author: 'Marcus Johnson',
      date: '2024-01-10',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=500&fit=crop',
      slug: 'local-seo-guide-warren',
    },
    {
      id: 3,
      title: 'How to Choose the Right Web Design Agency in Michigan',
      excerpt: 'Not all web agencies are created equal. Here\'s what to look for when selecting your web partner.',
      category: 'Business Tips',
      author: 'Alex Warren',
      date: '2024-01-05',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop',
      slug: 'choosing-web-design-agency',
    },
    {
      id: 4,
      title: 'Website Speed Optimization: Why It Matters for Your Business',
      excerpt: 'Slow websites lose customers. Learn how page speed impacts your bottom line and what to do about it.',
      category: 'Performance',
      author: 'Alex Warren',
      date: '2023-12-28',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      slug: 'website-speed-optimization',
    },
    {
      id: 5,
      title: 'Mobile-First Design: Essential for Warren Businesses in 2024',
      excerpt: 'Over 60% of web traffic is mobile. Is your website optimized? Here\'s what you need to know.',
      category: 'Web Design',
      author: 'Sarah Mitchell',
      date: '2023-12-20',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop',
      slug: 'mobile-first-design-2024',
    },
    {
      id: 6,
      title: 'Converting Website Visitors into Customers: A Complete Guide',
      excerpt: 'Traffic is great, but conversions pay the bills. Learn proven strategies to turn visitors into customers.',
      category: 'Marketing',
      author: 'Emily Chen',
      date: '2023-12-15',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&h=500&fit=crop',
      slug: 'converting-visitors-to-customers',
    },
  ]

  const categories = ['All', 'Web Design', 'SEO', 'Performance', 'Business Tips', 'Marketing']
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPost = posts[0]

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
              <span className="text-accent">Blog</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Web Design & Development Insights
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Expert tips, local insights, and actionable strategies to help your Warren business succeed online.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-primary mb-6">Featured Article</h2>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-2">
            <div className="aspect-video lg:aspect-auto">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-accent text-primary text-sm font-semibold px-3 py-1 rounded-full">
                  {featuredPost.category}
                </span>
                <span className="text-gray-500 text-sm flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(featuredPost.date).toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </span>
              </div>
              <h3 className="text-3xl font-bold text-primary mb-4 leading-tight">
                {featuredPost.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                    {featuredPost.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-primary text-sm">{featuredPost.author}</div>
                    <div className="text-gray-500 text-xs flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                </div>
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="btn-primary text-sm px-6 py-3 inline-flex items-center"
                >
                  Read Article
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Search & Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-accent text-primary'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(1).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card group"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-primary text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-3 text-sm text-gray-500 mb-3">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors leading-tight">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-xs font-semibold">
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-sm text-gray-700">{post.author}</span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-accent hover:text-accent-dark font-semibold text-sm inline-flex items-center group"
                  >
                    Read
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No articles found matching your search.</p>
          </div>
        )}
      </div>

      {/* Newsletter CTA */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Get Weekly Web Tips
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join 500+ Warren business owners receiving actionable web tips every Tuesday.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe Free
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  )
}

export default BlogPage

