# HantavirusInfo.org

A comprehensive SEO-optimized informational website about Hantavirus built with Next.js 14+, TypeScript, and Tailwind CSS.

## Features

- **SEO-First Architecture**: Optimized meta tags, Open Graph tags, canonical URLs, and JSON-LD schema markup
- **Mobile-First Design**: Fully responsive design optimized for all devices
- **MDX Blog System**: 17+ SEO-optimized blog articles with MDX support
- **Schema Markup**: MedicalWebPage, FAQPage, and Article schemas for search engines
- **Performance Optimized**: Fast loading with Next.js 14 App Router
- **Monetization Ready**: AdSense placements, affiliate blocks, and newsletter signup

## Pages

- Homepage with hero, topic cards, FAQ preview, and articles
- What Is Hantavirus
- Symptoms
- How It Spreads
- Incubation Period
- Treatment
- Prevention
- Safe Cleaning Guide
- FAQ (20+ questions)
- Blog listing and individual blog posts
- Printable Cleaning Checklist

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: MDX with next-mdx-remote
- **Icons**: Lucide React
- **SEO**: Custom metadata and schema components

## Getting Started

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── blog/
│   │   ├── [slug]/          # Dynamic blog post pages
│   │   └── page.tsx          # Blog listing
│   ├── cleaning-guide/      # Safe cleaning guide
│   ├── faq/                 # FAQ page
│   ├── how-it-spreads/      # Transmission information
│   ├── incubation-period/   # Timeline information
│   ├── prevention/          # Prevention strategies
│   ├── printable-checklist/ # Printable checklist
│   ├── symptoms/            # Symptom information
│   ├── treatment/           # Treatment options
│   ├── what-is-hantavirus/  # Overview
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   ├── robots.ts            # Robots.txt
│   └── sitemap.ts           # Sitemap.xml
├── components/
│   ├── layout/
│   │   ├── header.tsx       # Navigation header
│   │   ├── footer.tsx       # Site footer
│   │   ├── disclaimer.tsx   # Medical disclaimer
│   │   ├── ad-banner.tsx    # AdSense placeholder
│   │   └── newsletter.tsx   # Newsletter signup
│   └── seo/
│       ├── metadata.tsx     # SEO metadata generator
│       ├── schema-markup.tsx # JSON-LD schema
│       └── breadcrumbs.tsx  # Breadcrumb navigation
├── content/
│   └── blog/               # MDX blog articles
├── lib/
│   ├── blog.ts             # Blog utilities
│   ├── site-config.ts      # Site configuration
│   └── utils.ts            # Utility functions
└── types/
    └── index.ts            # TypeScript types
```

## SEO Features

### Metadata
- Dynamic title and description generation
- Open Graph tags for social sharing
- Twitter Card support
- Canonical URLs
- Robots meta tags

### Schema Markup
- MedicalWebPage schema
- FAQPage schema
- Article schema
- BreadcrumbList schema

### Technical SEO
- Automatic sitemap generation
- robots.txt configuration
- Optimized URL structure
- Mobile-friendly design

## Blog System

The blog uses MDX files stored in `src/content/blog/`. Each article includes frontmatter with:

- title
- description
- date
- author
- category
- tags
- featured (optional)

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Environment Variables

No environment variables required for basic deployment. For production, update the site URL in `src/lib/site-config.ts`.

## Performance

The site is optimized for:
- Fast initial load
- Efficient bundle size
- Optimized images (using next/image)
- Minimal JavaScript
- Lighthouse scores

## Monetization

The site includes placeholders for:
- Google AdSense (AdBanner component)
- Affiliate product blocks
- Email newsletter signup (Newsletter component)

## Medical Disclaimer

All pages include a medical disclaimer stating that the website is for informational purposes only and not a substitute for professional medical advice.

## References

Content references authoritative sources:
- CDC (Centers for Disease Control and Prevention)
- WHO (World Health Organization)
- NIH (National Institutes of Health)

## License

This project is provided as-is for educational and informational purposes.
