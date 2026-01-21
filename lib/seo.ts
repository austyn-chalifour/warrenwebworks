export const siteConfig = {
  name: 'Warren Web Works',
  description: 'Hyper-local web craftsmanship. We build fast, beautiful, and effective websites that help Warren, MI businesses grow.',
  url: 'https://warrenwebworks.com',
  ogImage: 'https://warrenwebworks.com/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/warrenwebworks',
    facebook: 'https://facebook.com/warrenwebworks',
    linkedin: 'https://linkedin.com/company/warrenwebworks',
  },
  creator: {
    name: 'Warren Web Works',
    twitter: '@warrenwebworks',
  },
  business: {
    name: 'Warren Web Works',
    address: {
      streetAddress: '123 Main Street',
      addressLocality: 'Warren',
      addressRegion: 'MI',
      postalCode: '48089',
      addressCountry: 'US',
    },
    phone: '+15869432756',
    email: 'hello@warrenwebworks.com',
    geo: {
      latitude: '42.5144',
      longitude: '-83.0148',
    },
  },
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.business.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.business.phone,
    email: siteConfig.business.email,
    address: {
      '@type': 'PostalAddress',
      ...siteConfig.business.address,
    },
    geo: {
      '@type': 'GeoCoordinates',
      ...siteConfig.business.geo,
    },
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
  }
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
  }
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.business.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.business.phone,
      contactType: 'customer service',
      email: siteConfig.business.email,
    },
    address: {
      '@type': 'PostalAddress',
      ...siteConfig.business.address,
    },
  }
}

