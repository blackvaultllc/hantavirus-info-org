import { siteConfig } from '@/lib/site-config';

export interface MedicalWebPageSchema {
  name: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
  medicalAudience?: string;
}

export interface FAQPageSchema {
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

export interface ArticleSchema {
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified: string;
  author: string;
  url: string;
}

export function generateMedicalWebPageSchema(data: MedicalWebPageSchema) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: data.name,
    description: data.description,
    url: data.url,
    datePublished: data.datePublished,
    dateModified: data.dateModified,
    author: data.author ? {
      '@type': 'Organization',
      name: data.author,
    } : undefined,
    medicalAudience: data.medicalAudience || 'Patient',
    about: {
      '@type': 'MedicalCondition',
      name: 'Hantavirus',
      medicalCategory: 'Infectious Disease',
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`,
      },
    },
  };
}

export function generateFAQPageSchema(data: FAQPageSchema) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  };
}

export function generateArticleSchema(data: ArticleSchema) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.headline,
    description: data.description,
    image: data.image,
    datePublished: data.datePublished,
    dateModified: data.dateModified,
    author: {
      '@type': 'Person',
      name: data.author,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': data.url,
    },
  };
}

export function SchemaMarkup({ schema }: { schema: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
