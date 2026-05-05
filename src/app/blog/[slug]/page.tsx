import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Disclaimer } from '@/components/layout/disclaimer';
import { Breadcrumbs } from '@/components/seo/breadcrumbs';
import { generatePageMetadata } from '@/components/seo/metadata';
import { generateArticleSchema, SchemaMarkup } from '@/components/seo/schema-markup';
import { getBlogPostBySlug, getAllBlogPosts } from '@/lib/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Calendar, Folder, Tag, ArrowLeft } from 'lucide-react';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const post = getBlogPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Article Not Found',
    };
  }

  return generatePageMetadata({
    title: post.title,
    description: post.description,
    canonical: `https://hantavirusinfo.org/blog/${post.slug}`,
  });
}

export default function BlogPost({ params }: PageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const schema = generateArticleSchema({
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: post.author,
    url: `https://hantavirusinfo.org/blog/${post.slug}`,
  });

  return (
    <>
      <SchemaMarkup schema={schema} />
      <div className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs 
            items={[
              { name: 'Blog', href: '/blog' },
              { name: post.title, href: `/blog/${post.slug}` }
            ]} 
            className="mb-8" 
          />
          
          <article className="max-w-3xl mx-auto">
            {/* Back Link */}
            <Link
              href="/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>

            {/* Header */}
            <header className="mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-sm text-gray-500 flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {post.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-4">
                {post.description}
              </p>
              
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>By {post.author}</span>
                {post.tags.length > 0 && (
                  <span className="flex items-center">
                    <Tag className="w-4 h-4 mr-1" />
                    {post.tags.join(', ')}
                  </span>
                )}
              </div>
            </header>

            <div className="mb-8">
              <Disclaimer />
            </div>

            {/* Content */}
            <div className="prose prose-lg prose-blue max-w-none">
              <MDXRemote source={post.content} />
            </div>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Related Articles */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {getAllBlogPosts()
                  .filter((p) => p.slug !== post.slug && p.category === post.category)
                  .slice(0, 2)
                  .map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
                      href={`/blog/${relatedPost.slug}`}
                      className="block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
                    >
                      <h4 className="font-semibold text-gray-900 mb-2">{relatedPost.title}</h4>
                      <p className="text-sm text-gray-600">{relatedPost.description}</p>
                    </Link>
                  ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-12">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Stay Informed</h3>
                <p className="text-gray-700 mb-4">
                  Get more articles like this delivered to your inbox.
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
            </div>

            {/* References */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">References</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="https://www.cdc.gov/hantavirus/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Centers for Disease Control and Prevention (CDC) - Hantavirus
                  </a>
                </li>
                <li>
                  <a href="https://www.who.int/news-room/fact-sheets/detail/hantavirus" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    World Health Organization (WHO) - Hantavirus
                  </a>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
