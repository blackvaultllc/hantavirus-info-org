import Link from 'next/link';
import { Shield, AlertTriangle, BookOpen, Clock, Activity, CheckCircle, ArrowRight } from 'lucide-react';
import { Disclaimer } from '@/components/layout/disclaimer';
import { AdBanner } from '@/components/layout/ad-banner';
import { Newsletter } from '@/components/layout/newsletter';
import { generatePageMetadata } from '@/components/seo/metadata';
import { generateMedicalWebPageSchema, SchemaMarkup } from '@/components/seo/schema-markup';

export const metadata = generatePageMetadata({
  title: 'Hantavirus: Symptoms, Prevention, and Treatment',
  description: 'Comprehensive guide to Hantavirus: Learn about symptoms, causes, how it spreads, incubation period, diagnosis, treatment, and prevention methods. Trusted medical information.',
  canonical: 'https://hantavirusinfo.org',
});

const schema = generateMedicalWebPageSchema({
  name: 'Hantavirus: Symptoms, Prevention, and Treatment',
  description: 'Comprehensive guide to Hantavirus symptoms, prevention, and treatment',
  url: 'https://hantavirusinfo.org',
  medicalAudience: 'Patient',
});

export default function Home() {
  const topicCards = [
    {
      title: 'Symptoms',
      description: 'Learn about early and severe symptoms of Hantavirus infection',
      href: '/symptoms',
      icon: Activity,
    },
    {
      title: 'Causes & Spread',
      description: 'Understand how Hantavirus spreads through rodents',
      href: '/how-it-spreads',
      icon: AlertTriangle,
    },
    {
      title: 'Prevention',
      description: 'Essential tips to prevent Hantavirus exposure',
      href: '/prevention',
      icon: Shield,
    },
    {
      title: 'Treatment',
      description: 'Medical care and treatment options for Hantavirus',
      href: '/treatment',
      icon: BookOpen,
    },
    {
      title: 'Incubation Period',
      description: 'Timeline of Hantavirus development',
      href: '/incubation-period',
      icon: Clock,
    },
    {
      title: 'Cleaning Guide',
      description: 'Safe methods for cleaning rodent droppings',
      href: '/cleaning-guide',
      icon: CheckCircle,
    },
  ];

  const featuredFAQs = [
    {
      question: 'Can you survive hantavirus?',
      answer: 'Yes, with early medical intervention, survival rates can be improved. However, Hantavirus Pulmonary Syndrome (HPS) is a serious condition that requires immediate hospital care.',
    },
    {
      question: 'What are the first symptoms?',
      answer: 'Early symptoms include fever, muscle aches (especially in thighs, hips, back, and shoulders), fatigue, and headaches. These typically appear 1-8 weeks after exposure.',
    },
    {
      question: 'Is hantavirus contagious?',
      answer: 'Hantavirus is rarely spread person-to-person. The primary transmission is through contact with infected rodents or their droppings, urine, or saliva.',
    },
  ];

  const latestArticles = [
    {
      title: 'Hantavirus vs. Flu: How to Tell the Difference',
      excerpt: 'Understanding the key differences between Hantavirus symptoms and seasonal flu can help you seek appropriate medical care.',
      category: 'Symptoms',
      date: '2024-01-15',
      href: '/blog/hantavirus-vs-flu',
    },
    {
      title: 'Safe Rodent Cleanup: A Complete Guide',
      excerpt: 'Learn the CDC-recommended steps for safely cleaning areas contaminated by rodents to prevent Hantavirus exposure.',
      category: 'Prevention',
      date: '2024-01-10',
      href: '/blog/safe-rodent-cleanup-guide',
    },
    {
      title: 'Hantavirus in the United States: What You Need to Know',
      excerpt: 'A comprehensive overview of Hantavirus cases, geographic distribution, and risk factors across the United States.',
      category: 'General',
      date: '2024-01-05',
      href: '/blog/hantavirus-united-states',
    },
  ];

  return (
    <>
      <SchemaMarkup schema={schema} />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Hantavirus: Symptoms, Prevention, and Treatment
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Comprehensive, medically-reviewed information about Hantavirus Pulmonary Syndrome (HPS). 
                Learn to recognize symptoms, understand transmission risks, and protect yourself and your family.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/symptoms"
                  className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Learn the Warning Signs
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/prevention"
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
                >
                  Read Prevention Guide
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Disclaimer />
          </div>
        </section>

        {/* Topics Grid */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Essential Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topicCards.map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                      <card.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {card.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Ad Banner */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AdBanner className="max-w-4xl mx-auto" />
          </div>
        </section>

        {/* About Hantavirus */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What Is Hantavirus?
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Hantavirus is a family of viruses spread mainly by rodents and can cause varied disease syndromes in people worldwide. 
                In the United States, Hantavirus Pulmonary Syndrome (HPS) is the most common form, a severe respiratory disease.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                The virus is transmitted to humans through contact with infected rodents or their urine, droppings, or saliva. 
                Understanding the risks and taking proper precautions can significantly reduce your chances of infection.
              </p>
              <Link
                href="/what-is-hantavirus"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                Learn more about Hantavirus
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {featuredFAQs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
              <Link
                href="/faq"
                className="inline-flex items-center mt-8 text-blue-600 hover:text-blue-700 font-medium"
              >
                View all FAQs
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Latest Articles */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Latest Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {latestArticles.map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="group"
                >
                  <article className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                          {article.category}
                        </span>
                        <span className="text-xs text-gray-500">
                          {new Date(article.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {article.excerpt}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/blog"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                View All Articles
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mx-auto">
              <Newsletter />
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Trusted Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a
                href="https://www.cdc.gov/hantavirus/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">CDC Hantavirus</h3>
                <p className="text-gray-600 text-sm">
                  Official information from the Centers for Disease Control and Prevention
                </p>
              </a>
              <a
                href="https://www.who.int/news-room/fact-sheets/detail/hantavirus"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">WHO Fact Sheet</h3>
                <p className="text-gray-600 text-sm">
                  World Health Organization's comprehensive Hantavirus information
                </p>
              </a>
              <a
                href="https://www.nih.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">NIH Resources</h3>
                <p className="text-gray-600 text-sm">
                  National Institutes of Health research and publications
                </p>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
