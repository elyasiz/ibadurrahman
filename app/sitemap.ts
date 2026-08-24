import type { MetadataRoute } from 'next';
import { campuses } from '@/content/campuses';
import { programs } from '@/content/programs';
import { siteConfig } from '@/content/site.config';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url;
  const routes = ['', '/about', '/programs', '/campuses', '/admissions', '/gallery', '/testimonials', '/contact', '/career'];
  return [
    ...routes.map((route) => ({ url: `${base}${route}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: route === '' ? 1 : .7 })),
    ...programs.filter((item) => item.active).map((item) => ({ url: `${base}/programs/${item.slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: .8 })),
    ...campuses.filter((item) => item.active).map((item) => ({ url: `${base}/campuses/${item.slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: .8 })),
  ];
}
