'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, Phone, Briefcase, DollarSign, Calendar, 
  CheckCircle, XCircle, Clock, RefreshCw, LogOut, Eye
} from 'lucide-react'

interface Submission {
  _id: string
  _createdAt: string
  name: string
  email: string
  phone?: string
  businessType: string
  budgetRange: string
  projectDetails: string
  status: string
  notes?: string
  submittedAt: string
}

const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    const savedAuth = sessionStorage.getItem('adminAuth')
    if (savedAuth) {
      setIsAuthenticated(true)
      fetchSubmissions(savedAuth)
    }
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    sessionStorage.setItem('adminAuth', password)
    setIsAuthenticated(true)
    fetchSubmissions(password)
  }

  const handleLogout = () => {
    sessionStorage.removeItem('adminAuth')
    setIsAuthenticated(false)
    setPassword('')
    setSubmissions([])
  }

  const fetchSubmissions = async (authPassword: string) => {
    setLoading(true)
    setError('')
    
    try {
      const response = await fetch('/api/admin/submissions', {
        headers: {
          'Authorization': `Bearer ${authPassword}`,
        },
      })

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Invalid password')
        }
        throw new Error('Failed to fetch submissions')
      }

      const data = await response.json()
      setSubmissions(data.submissions)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch submissions')
      if (err instanceof Error && err.message === 'Invalid password') {
        handleLogout()
      }
    } finally {
      setLoading(false)
    }
  }

  const updateSubmissionStatus = async (id: string, status: string) => {
    const authPassword = sessionStorage.getItem('adminAuth')
    if (!authPassword) return

    try {
      const response = await fetch('/api/admin/submissions', {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${authPassword}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, status }),
      })

      if (!response.ok) throw new Error('Failed to update status')

      // Refresh submissions
      fetchSubmissions(authPassword)
    } catch (err) {
      setError('Failed to update status')
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'new':
        return <Clock className="w-5 h-5 text-blue-500" />
      case 'contacted':
        return <Mail className="w-5 h-5 text-yellow-500" />
      case 'in_progress':
        return <RefreshCw className="w-5 h-5 text-purple-500" />
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case 'declined':
        return <XCircle className="w-5 h-5 text-red-500" />
      default:
        return <Clock className="w-5 h-5 text-gray-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-blue-100 text-blue-800'
      case 'contacted':
        return 'bg-yellow-100 text-yellow-800'
      case 'in_progress':
        return 'bg-purple-100 text-purple-800'
      case 'completed':
        return 'bg-green-100 text-green-800'
      case 'declined':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const filteredSubmissions = submissions.filter(sub => 
    filter === 'all' || sub.status === filter
  )

  const stats = {
    total: submissions.length,
    new: submissions.filter(s => s.status === 'new').length,
    contacted: submissions.filter(s => s.status === 'contacted').length,
    in_progress: submissions.filter(s => s.status === 'in_progress').length,
    completed: submissions.filter(s => s.status === 'completed').length,
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-primary mb-2">Admin Login</h1>
            <p className="text-gray-600">Enter your password to access the dashboard</p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="Enter admin password"
                required
              />
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="btn-primary w-full"
            >
              Login
            </button>
          </form>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-primary mb-2">Admin Dashboard</h1>
            <p className="text-gray-600">Manage contact form submissions</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-5 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <div className="text-3xl font-bold text-primary mb-1">{stats.total}</div>
            <div className="text-sm text-gray-600">Total Submissions</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl p-6 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
            onClick={() => setFilter('new')}
          >
            <div className="text-3xl font-bold text-blue-500 mb-1">{stats.new}</div>
            <div className="text-sm text-gray-600">New</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl p-6 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
            onClick={() => setFilter('contacted')}
          >
            <div className="text-3xl font-bold text-yellow-500 mb-1">{stats.contacted}</div>
            <div className="text-sm text-gray-600">Contacted</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl p-6 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
            onClick={() => setFilter('in_progress')}
          >
            <div className="text-3xl font-bold text-purple-500 mb-1">{stats.in_progress}</div>
            <div className="text-sm text-gray-600">In Progress</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl p-6 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
            onClick={() => setFilter('completed')}
          >
            <div className="text-3xl font-bold text-green-500 mb-1">{stats.completed}</div>
            <div className="text-sm text-gray-600">Completed</div>
          </motion.div>
        </div>

        {/* Filter Bar */}
        <div className="bg-white rounded-xl p-4 shadow-lg mb-6 flex items-center justify-between">
          <div className="flex space-x-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === 'all' ? 'bg-accent text-primary' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('new')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === 'new' ? 'bg-accent text-primary' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              New
            </button>
            <button
              onClick={() => setFilter('contacted')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === 'contacted' ? 'bg-accent text-primary' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Contacted
            </button>
            <button
              onClick={() => setFilter('in_progress')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === 'in_progress' ? 'bg-accent text-primary' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              In Progress
            </button>
          </div>

          <button
            onClick={() => fetchSubmissions(sessionStorage.getItem('adminAuth') || '')}
            disabled={loading}
            className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </button>
        </div>

        {/* Submissions List */}
        {error && (
          <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        {loading && !submissions.length ? (
          <div className="text-center py-12">
            <RefreshCw className="w-12 h-12 text-accent animate-spin mx-auto mb-4" />
            <p className="text-gray-600">Loading submissions...</p>
          </div>
        ) : filteredSubmissions.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl shadow-lg">
            <p className="text-gray-600">No submissions found</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredSubmissions.map((submission, index) => (
              <motion.div
                key={submission._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      {getStatusIcon(submission.status)}
                      <h3 className="text-xl font-bold text-primary">{submission.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(submission.status)}`}>
                        {submission.status.replace('_', ' ').toUpperCase()}
                      </span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Mail className="w-4 h-4" />
                        <a href={`mailto:${submission.email}`} className="hover:text-accent">{submission.email}</a>
                      </div>
                      {submission.phone && (
                        <div className="flex items-center space-x-2 text-gray-600">
                          <Phone className="w-4 h-4" />
                          <a href={`tel:${submission.phone}`} className="hover:text-accent">{submission.phone}</a>
                        </div>
                      )}
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Briefcase className="w-4 h-4" />
                        <span>{submission.businessType}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <DollarSign className="w-4 h-4" />
                        <span>{submission.budgetRange}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(submission.submittedAt).toLocaleDateString()}</span>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Project Details:</h4>
                      <p className="text-gray-600 text-sm whitespace-pre-wrap">{submission.projectDetails}</p>
                    </div>
                  </div>
                </div>

                {/* Status Actions */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => updateSubmissionStatus(submission._id, 'new')}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors"
                  >
                    Mark New
                  </button>
                  <button
                    onClick={() => updateSubmissionStatus(submission._id, 'contacted')}
                    className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-lg text-sm font-medium hover:bg-yellow-200 transition-colors"
                  >
                    Mark Contacted
                  </button>
                  <button
                    onClick={() => updateSubmissionStatus(submission._id, 'in_progress')}
                    className="px-3 py-1 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-200 transition-colors"
                  >
                    In Progress
                  </button>
                  <button
                    onClick={() => updateSubmissionStatus(submission._id, 'completed')}
                    className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm font-medium hover:bg-green-200 transition-colors"
                  >
                    Complete
                  </button>
                  <button
                    onClick={() => updateSubmissionStatus(submission._id, 'declined')}
                    className="px-3 py-1 bg-red-100 text-red-700 rounded-lg text-sm font-medium hover:bg-red-200 transition-colors"
                  >
                    Decline
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminPage

