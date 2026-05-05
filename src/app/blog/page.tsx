import Link from 'next/link';
import { Disclaimer } from '@/components/layout/disclaimer';
import { Breadcrumbs } from '@/components/seo/breadcrumbs';
import { generatePageMetadata } from '@/components/seo/metadata';
import { generateMedicalWebPageSchema, SchemaMarkup } from '@/components/seo/schema-markup';
import { getAllBlogPosts, getBlogCategories } from '@/lib/blog';
import { Calendar, Folder, Tag } from 'lucide-react';

export const metadata = generatePageMetadata({
  title: 'Hantavirus Blog - Articles and Resources',
  description: 'Expert articles about Hantavirus prevention, symptoms, treatment, and safety. Stay informed with our comprehensive Hantavirus resources.',
  canonical: 'https://hantavirusinfo.org/blog',
});

const schema = generateMedicalWebPageSchema({
  name: 'Hantavirus Blog',
  description: 'Expert articles and resources about Hantavirus',
  url: 'https://hantavirusinfo.org/blog',
  medicalAudience: 'Patient',
});

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const categories = getBlogCategories();
  const featuredPosts = posts.filter(post => post.featured);

  return (
    <>
      <SchemaMarkup schema={schema} />
      <div className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={[{ name: 'Blog', href: '/blog' }]} className="mb-8" />
          
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Hantavirus Blog
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Expert articles and resources about Hantavirus prevention, symptoms, treatment, and safety. 
              Stay informed with our comprehensive guides.
            </p>

            <div className="mb-12">
              <Disclaimer />
            </div>

            {/* Featured Posts */}
            {featuredPosts.length > 0 && (
              <section className="mb-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {featuredPosts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group"
                    >
                      <article className="bg-blue-50 border-2 border-blue-200 rounded-lg overflow-hidden hover:shadow-lg transition-all">
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-medium text-blue-700 bg-blue-100 px-2 py-1 rounded">
                              Featured
                            </span>
                            <span className="text-xs text-gray-500 flex items-center">
                              <Calendar className="w-3 h-3 mr-1" />
                              {new Date(post.date).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric',
                              })}
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4">{post.description}</p>
                          <div className="flex items-center space-x-4 text-xs text-gray-500">
                            <span className="flex items-center">
                              <Folder className="w-3 h-3 mr-1" />
                              {post.category}
                            </span>
                            {post.tags.length > 0 && (
                              <span className="flex items-center">
                                <Tag className="w-3 h-3 mr-1" />
                                {post.tags[0]}
                                {post.tags.length > 1 && ` +${post.tags.length - 1}`}
                              </span>
                            )}
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* All Posts */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">All Articles</h2>
              <div className="space-y-6">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group block"
                  >
                    <article className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-md transition-all">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                          {post.category}
                        </span>
                        <span className="text-xs text-gray-500 flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {new Date(post.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">{post.description}</p>
                      {post.tags.length > 0 && (
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          <Tag className="w-3 h-3" />
                          <span>{post.tags.join(', ')}</span>
                        </div>
                      )}
                    </article>
                  </Link>
                ))}
              </div>
            </section>

            {/* Categories */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h2>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/blog"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  All Articles
                </Link>
                {categories.map((category) => (
                  <Link
                    key={category}
                    href={`/blog?category=${encodeURIComponent(category)}`}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </section>

            {/* Newsletter */}
            <section className="mt-16">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3">Stay Informed</h2>
                <p className="text-gray-700 mb-4">
                  Get the latest Hantavirus information and safety tips delivered to your inbox.
                </p>
                <form className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
