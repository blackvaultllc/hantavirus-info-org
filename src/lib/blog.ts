import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src', 'content', 'blog');

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  content: string;
  featured?: boolean;
}

export function getAllBlogPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || '',
        description: data.description || '',
        date: data.date || '',
        author: data.author || 'HantavirusInfo.org',
        category: data.category || 'General',
        tags: data.tags || [],
        content,
        featured: data.featured || false,
      } as BlogPost;
    });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      date: data.date || '',
      author: data.author || 'HantavirusInfo.org',
      category: data.category || 'General',
      tags: data.tags || [],
      content,
      featured: data.featured || false,
    } as BlogPost;
  } catch (error) {
    return null;
  }
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  const allPosts = getAllBlogPosts();
  return allPosts.filter((post) => post.category === category);
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  const allPosts = getAllBlogPosts();
  return allPosts.filter((post) => post.tags.includes(tag));
}

export function getFeaturedBlogPosts(): BlogPost[] {
  const allPosts = getAllBlogPosts();
  return allPosts.filter((post) => post.featured);
}

export function getBlogCategories(): string[] {
  const allPosts = getAllBlogPosts();
  const categories = Array.from(new Set(allPosts.map((post) => post.category)));
  return categories.sort();
}

export function getBlogTags(): string[] {
  const allPosts = getAllBlogPosts();
  const tags = allPosts.flatMap((post) => post.tags);
  return Array.from(new Set(tags)).sort();
}
