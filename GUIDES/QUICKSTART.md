# 🚀 Warren Web Works - Quick Start

Get your website running in **under 5 minutes**!

---

## Step 1: Install Dependencies (1 min)

Open terminal in the `warren-web-works` folder and run:

```bash
npm install
```

---

## Step 2: Start Development Server (30 seconds)

```bash
npm run dev
```

Open your browser to: **http://localhost:3000**

**🎉 That's it! Your site is running!**

---

## What You'll See

✅ **Homepage** - Complete with hero, services, portfolio preview
✅ **Portfolio** - 6 sample projects with filtering
✅ **Services** - Pricing packages and service details
✅ **About** - Team, values, and company story
✅ **Blog** - Sample blog posts with search
✅ **Contact** - Working contact form (needs backend setup)

---

## Quick Customizations

### Change Contact Info (2 minutes)

1. **Header** - Edit `components/Header.tsx` line 62:
```tsx
<a href="tel:+15551234567">  // Change phone number
```

2. **Footer** - Edit `components/Footer.tsx` lines 81-96:
```tsx
123 Main Street, Warren, MI 48089  // Change address
(555) 123-4567                     // Change phone
hello@warrenwebworks.com           // Change email
```

### Change Brand Colors (1 minute)

Edit `tailwind.config.ts` lines 10-18:
```typescript
primary: {
  DEFAULT: '#0A2463',  // Your primary color
},
accent: {
  DEFAULT: '#FFD700',  // Your accent color
},
```

### Update Company Name (2 minutes)

Search and replace "Warren Web Works" in:
- `app/layout.tsx` (line 18)
- `lib/seo.ts` (line 1)
- `components/Header.tsx` (line 36)
- `components/Footer.tsx` (line 13)

---

## Ready to Deploy? (5 minutes)

### Option 1: Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

**Done!** Your site is live with a free SSL certificate and global CDN.

### Option 2: Netlify

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site"
4. Connect to GitHub
5. Deploy

---

## Common Questions

### Q: How do I add real images?
**A:** Replace the Unsplash URLs in portfolio/blog pages with your own images in the `public/` folder.

### Q: How do I make the contact form actually send emails?
**A:** See `SETUP.md` section "Contact Form Setup" for Resend integration guide.

### Q: Can I use my own CMS?
**A:** Yes! Sanity.io is pre-configured, or you can integrate any headless CMS. See `SETUP.md`.

### Q: How do I add Google Analytics?
**A:** Add your tracking ID to `app/layout.tsx`. See `SETUP.md` for details.

---

## Need Help?

- 📖 **Full Setup Guide**: Read `SETUP.md`
- 📋 **Project Details**: Read `PROJECT_SUMMARY.md`
- 📚 **Documentation**: Read `README.md`
- 🐛 **Issues**: Check Next.js docs at [nextjs.org](https://nextjs.org)

---

## Next Steps

1. ✅ Customize colors and branding
2. ✅ Replace sample content with your own
3. ✅ Add real portfolio projects
4. ✅ Set up contact form backend
5. ✅ Connect domain name
6. ✅ Submit to Google Search Console
7. ✅ Launch! 🚀

---

**Your Warren Web Works website is ready to launch!**

Built exactly to PRD specifications with:
- ✅ Next.js 14 + TypeScript + Tailwind
- ✅ Full SEO optimization
- ✅ Mobile-first responsive design
- ✅ Lead generation features
- ✅ CMS-ready with Sanity
- ✅ Production-ready code

**Time to go live and start getting leads!** 💪

