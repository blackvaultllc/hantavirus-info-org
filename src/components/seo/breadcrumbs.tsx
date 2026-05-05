import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const allItems = [{ name: 'Home', href: '/' }, ...items];

  return (
    <nav aria-label="Breadcrumb" className={cn('flex items-center space-x-2 text-sm text-gray-600', className)}>
      <ol className="flex items-center space-x-2">
        {allItems.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index === 0 && <Home className="w-4 h-4 mr-1" />}
            {index > 0 && <ChevronRight className="w-4 h-4 mx-2" />}
            {index === allItems.length - 1 ? (
              <span className="font-medium text-gray-900" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link
                href={item.href}
                className="hover:text-blue-600 transition-colors"
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
