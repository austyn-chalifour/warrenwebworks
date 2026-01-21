import type { Metadata } from 'next'
import { Inter, Open_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const openSans = Open_Sans({ 
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Warren Web Works - Local Web Design & Development Agency',
  description: 'Hyper-local web craftsmanship. We build fast, beautiful, and effective websites that help Warren, MI businesses grow.',
  keywords: 'web design warren mi, web development, local seo, website design michigan',
  authors: [{ name: 'Warren Web Works' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://warrenwebworks.com',
    siteName: 'Warren Web Works',
    title: 'Warren Web Works - Local Web Design & Development',
    description: 'Fast, beautiful, and effective websites for Warren businesses',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Warren Web Works',
    description: 'Local web design & development in Warren, MI',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${openSans.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

