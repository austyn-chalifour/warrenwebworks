# Warren Web Works - Setup Guide

## 🚀 Quick Start

Follow these steps to get your Warren Web Works website up and running.

### Step 1: Install Dependencies

```bash
cd warren-web-works
npm install
```

### Step 2: Environment Configuration

Create `.env.local` file:

```bash
cp .env.example .env.local
```

### Step 3: Run Development Server

```bash
npm run dev
```

Visit http://localhost:3000 to see your site!

## 🎨 Customization Guide

### 1. Update Brand Information

**File**: `lib/seo.ts`

```typescript
export const siteConfig = {
  name: 'Your Business Name',
  description: 'Your description',
  url: 'https://yourdomain.com',
  business: {
    name: 'Your Business Name',
    address: {
      streetAddress: 'Your Address',
      addressLocality: 'Your City',
      addressRegion: 'MI',
      postalCode: '48089',
      addressCountry: 'US',
    },
    phone: '+15551234567',
    email: 'your@email.com',
  },
}
```

### 2. Customize Colors

**File**: `tailwind.config.ts`

```typescript
colors: {
  primary: {
    DEFAULT: '#0A2463',  // Change to your primary color
    dark: '#061640',
    light: '#0D2F7D',
  },
  accent: {
    DEFAULT: '#FFD700',  // Change to your accent color
    dark: '#E6C200',
    light: '#FFDF33',
  },
}
```

### 3. Update Contact Information

**Files to update**:
- `components/Header.tsx` - Phone number in navigation
- `components/Footer.tsx` - All contact details
- `app/contact/page.tsx` - Contact form details

### 4. Replace Portfolio Projects

**File**: `app/portfolio/page.tsx`

Replace the `projects` array with your actual projects or connect to Sanity CMS.

### 5. Update Team Members

**File**: `app/about/page.tsx`

Replace the `team` array with your actual team members.

## 📊 Sanity CMS Setup (Optional but Recommended)

### 1. Create Sanity Account

Visit [sanity.io](https://www.sanity.io/) and create a free account.

### 2. Create New Project

```bash
npm create sanity@latest -- --project-name "warren-web-works" --dataset production
```

### 3. Get Your Project ID

After creating the project, you'll get a project ID. Add it to `.env.local`:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
```

### 4. Deploy Sanity Studio

Option A: Deploy to Sanity's hosting (recommended):

```bash
npx sanity deploy
```

Option B: Run locally:

```bash
npx sanity dev
```

### 5. Add Content

1. Visit your Sanity Studio (e.g., https://yourproject.sanity.studio)
2. Add portfolio projects
3. Write blog posts
4. Add team members
5. Collect testimonials

### 6. Connect to Website

The Sanity client is already configured in `lib/sanity.ts`. Your content will automatically appear on the site!

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin your-repo-url
git push -u origin main
```

2. **Import to Vercel**

- Go to [vercel.com](https://vercel.com)
- Click "New Project"
- Import your GitHub repository
- Add environment variables from `.env.local`
- Click "Deploy"

Your site will be live at `https://your-project.vercel.app`

3. **Custom Domain**

- In Vercel dashboard, go to Settings > Domains
- Add your custom domain (e.g., warrenwebworks.com)
- Follow DNS configuration instructions

### Environment Variables for Production

Add these in Vercel dashboard:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_token (if using private datasets)
```

## 📧 Contact Form Setup

The contact form is currently set up with client-side validation only. To make it functional:

### Option 1: Use Vercel Forms (Free)

1. No additional setup needed
2. Form submissions appear in Vercel dashboard
3. Free tier includes 100 submissions/month

### Option 2: Resend (Recommended)

```bash
npm install resend
```

Create API route at `app/api/contact/route.ts`:

```typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const body = await request.json()
  
  await resend.emails.send({
    from: 'contact@yourdomain.com',
    to: 'hello@yourdomain.com',
    subject: 'New Contact Form Submission',
    html: `<p>New message from ${body.name}</p>...`
  })
  
  return Response.json({ success: true })
}
```

Add to `.env.local`:
```
RESEND_API_KEY=your_resend_api_key
```

### Option 3: Supabase (Database + Auth)

```bash
npm install @supabase/supabase-js
```

Create a Supabase project and add credentials to `.env.local`.

## 📈 Analytics Setup

### Option 1: Umami (Privacy-friendly)

1. Self-host or use [Umami Cloud](https://umami.is)
2. Add tracking script to `app/layout.tsx`
3. Free and GDPR compliant

### Option 2: Google Analytics

Add to `app/layout.tsx`:

```tsx
<Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_ID}');
  `}
</Script>
```

### Option 3: PostHog

```bash
npm install posthog-js
```

Initialize in your app.

## 🎯 SEO Checklist

- ✅ Update meta tags in `app/layout.tsx`
- ✅ Verify Schema.org markup in `lib/seo.ts`
- ✅ Submit sitemap to Google Search Console
- ✅ Set up Google My Business
- ✅ Create and submit robots.txt
- ✅ Optimize images (use WebP format)
- ✅ Add alt text to all images
- ✅ Test Core Web Vitals

## 🔐 Security

- ✅ Never commit `.env.local` to Git
- ✅ Use environment variables for all secrets
- ✅ Enable HTTPS (automatic on Vercel)
- ✅ Implement rate limiting for forms
- ✅ Sanitize user inputs
- ✅ Keep dependencies updated

## 📞 Support

If you need help:

1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Read [Sanity documentation](https://www.sanity.io/docs)
3. Contact Warren Web Works team

## 🎉 Launch Checklist

Before going live:

- [ ] Test all pages on mobile devices
- [ ] Verify all links work
- [ ] Test contact form submissions
- [ ] Check page load speeds
- [ ] Verify SEO meta tags
- [ ] Test in multiple browsers
- [ ] Set up analytics
- [ ] Configure error tracking (Sentry)
- [ ] Set up uptime monitoring
- [ ] Create backups
- [ ] Update Google My Business
- [ ] Submit sitemap to search engines

---

**Congratulations! Your Warren Web Works site is ready to launch! 🚀**

