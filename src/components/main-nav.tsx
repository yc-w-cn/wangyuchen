import Link from 'next/link';

import { cn } from '@/lib/utils';

import { siteConfig } from '@/config/site';

interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
}

interface MainNavProps {
  items?: NavItem[];
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="w-full gap-6 sm:flex md:gap-10">
      <Link href="/" className="hidden items-center space-x-2 sm:flex">
        <span className="inline-block font-bold px-10">{siteConfig.name}</span>
      </Link>
      {items?.length ? (
        <nav className="flex items-center justify-center gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    'flex items-center text-sm font-medium text-muted-foreground',
                    item.disabled && 'cursor-not-allowed opacity-80',
                  )}
                >
                  {item.title}
                </Link>
              ),
          )}
        </nav>
      ) : null}
    </div>
  );
}
