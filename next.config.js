/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'cdn.sanity.io'],
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

