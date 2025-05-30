'use client';
import { usePathname } from 'next/navigation';
import Script from 'next/script';

export default function SchemaBreadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter((seg) => seg !== '');

  const itemListElement = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.esimfacil.com',
    },
    ...segments.map((segment, index) => {
      const url = `https://www.esimfacil.com/${segments.slice(0, index + 1).join('/')}`;

      return {
        '@type': 'ListItem',
        position: index + 2,
        name: decodeURIComponent(segment.replace(/-/g, ' ')).replace(/\b\w/g, (l) =>
          l.toUpperCase(),
        ),
        item: url,
      };
    }),
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement,
  };

  return (
    <Script
      id="schema-breadcrumb"
      type="application/ld+json"
      strategy="lazyOnload"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
