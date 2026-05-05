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

export interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

export interface MetadataProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
}
