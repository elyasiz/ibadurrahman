import type { MetadataRoute } from 'next';
import { programs } from '@/content/programs';
import { siteConfig } from '@/content/site.config';
import { educationUnits } from '@/content/units';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url;
  const routes = ['', '/about', '/units', '/programs', '/admissions', '/gallery', '/testimonials', '/contact', '/career'];
  return [
    ...routes.map((route) => ({ url: `${base}${route}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: route === '' ? 1 : .7 })),
    ...programs.filter((item) => item.active).map((item) => ({ url: `${base}/programs/${item.slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: .8 })),
    ...educationUnits.filter((item) => item.active).map((item) => ({ url: `${base}/units/${item.slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: .8 })),
  ];
}
