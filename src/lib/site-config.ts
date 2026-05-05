export const siteConfig = {
  name: 'HantavirusInfo.org',
  description: 'Comprehensive information about Hantavirus symptoms, prevention, treatment, and safety guidelines.',
  url: 'https://hantavirusinfo.org',
  ogImage: '/og-image.png',
  links: {
    twitter: 'https://twitter.com/hantavirusinfo',
    github: 'https://github.com/hantavirusinfo',
  },
  navLinks: [
    { name: 'Home', href: '/' },
    { name: 'What Is Hantavirus', href: '/what-is-hantavirus' },
    { name: 'Symptoms', href: '/symptoms' },
    { name: 'How It Spreads', href: '/how-it-spreads' },
    { name: 'Prevention', href: '/prevention' },
    { name: 'Treatment', href: '/treatment' },
    { name: 'Cleaning Guide', href: '/cleaning-guide' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Blog', href: '/blog' },
  ],
  footerLinks: {
    quickLinks: [
      { name: 'Home', href: '/' },
      { name: 'What Is Hantavirus', href: '/what-is-hantavirus' },
      { name: 'Symptoms', href: '/symptoms' },
      { name: 'Prevention', href: '/prevention' },
      { name: 'Cleaning Guide', href: '/cleaning-guide' },
      { name: 'FAQ', href: '/faq' },
    ],
    resources: [
      { name: 'CDC Hantavirus', href: 'https://www.cdc.gov/hantavirus/' },
      { name: 'WHO Hantavirus', href: 'https://www.who.int/news-room/fact-sheets/detail/hantavirus' },
      { name: 'NIH Hantavirus', href: 'https://www.nih.gov/' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Use', href: '/terms' },
      { name: 'Contact', href: '/contact' },
    ],
  },
};

export type NavLink = typeof siteConfig.navLinks[number];
