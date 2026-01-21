import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Warren Web Works',
    short_name: 'WWW',
    description: 'Hyper-local web craftsmanship in Warren, MI',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A2463',
    theme_color: '#FFD700',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}

