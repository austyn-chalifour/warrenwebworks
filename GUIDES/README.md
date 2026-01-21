# Warren Web Works - Agency Website

> Hyper-local web craftsmanship. We build fast, beautiful, and effective websites that help Warren, MI businesses grow.

## 🚀 Features

- ✅ **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS
- ✅ **Performance Optimized**: Core Web Vitals optimized, < 2s page load
- ✅ **SEO Ready**: Built-in sitemap, robots.txt, Schema.org markup
- ✅ **Responsive Design**: Mobile-first, works beautifully on all devices
- ✅ **CMS Integration**: Sanity.io for easy content management
- ✅ **Animations**: Smooth Framer Motion animations
- ✅ **Lead Generation**: Contact forms, CTAs, lead magnets
- ✅ **Accessibility**: WCAG 2.1 AA compliant

## 📦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Sanity.io account (for CMS features)

### Installation

1. **Clone and install dependencies:**

```bash
cd warren-web-works
npm install
```

2. **Set up environment variables:**

```bash
cp .env.example .env.local
```

Edit `.env.local` with your Sanity.io credentials and other API keys.

3. **Run the development server:**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## 🏗️ Project Structure

```
warren-web-works/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── portfolio/         # Portfolio pages
│   ├── services/          # Services & pricing
│   ├── about/            # About page
│   ├── blog/             # Blog
│   ├── contact/          # Contact page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/            # React components
│   ├── home/             # Homepage sections
│   ├── Header.tsx        # Navigation
│   └── Footer.tsx        # Footer
├── lib/                   # Utilities
│   ├── sanity.ts         # Sanity client
│   ├── seo.ts            # SEO utilities
│   └── utils.ts          # Helper functions
├── sanity/               # Sanity CMS config
│   └── schemas/          # Content schemas
└── public/               # Static assets
```

## 🎨 Customization

### Brand Colors

Edit `tailwind.config.ts` to change brand colors:

```typescript
colors: {
  primary: {
    DEFAULT: '#0A2463',  // Navy blue
    dark: '#061640',
    light: '#0D2F7D',
  },
  accent: {
    DEFAULT: '#FFD700',  // Gold
    dark: '#E6C200',
    light: '#FFDF33',
  },
}
```

### Content

All content can be managed through:
- **Sanity Studio**: For blog posts, portfolio, team members
- **Direct editing**: For static content in page files

## 📊 SEO & Analytics

### Built-in SEO Features

- ✅ Meta tags and Open Graph
- ✅ Sitemap generation
- ✅ Robots.txt
- ✅ Schema.org markup (LocalBusiness, Organization)
- ✅ Local SEO optimized

### Analytics Integration

Add your analytics ID to `.env.local`:

```bash
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```

Supports: Google Analytics, Umami, PostHog, Plausible

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Other Platforms

- **Netlify**: Works great with similar setup
- **AWS Amplify**: Full support
- **Self-hosted**: Use `npm run build && npm start`

## 🔧 Development

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📝 Sanity CMS Setup

1. **Create Sanity project:**

```bash
npm create sanity@latest
```

2. **Configure schemas** in `sanity/schemas/`

3. **Deploy Sanity Studio:**

```bash
cd sanity-studio
npm run deploy
```

4. **Add project ID** to `.env.local`

## 🤝 Contributing

This is a proprietary project for Warren Web Works. If you're a team member, please follow our internal contribution guidelines.

## 📄 License

© 2024 Warren Web Works. All rights reserved.

## 📞 Support

- **Email**: hello@warrenwebworks.com
- **Phone**: (555) 123-4567
- **Address**: 123 Main Street, Warren, MI 48089

---

Built with ❤️ in Warren, MI

