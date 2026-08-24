import { campuses } from '@/content/campuses';
import { gallery } from '@/content/gallery';
import { homeContent } from '@/content/home';
import { programs } from '@/content/programs';
import { siteConfig } from '@/content/site.config';
import { testimonials } from '@/content/testimonials';

// This adapter is the future CMS boundary. Replace these returns with Sanity,
// Strapi, Contentful, Supabase, Firebase, WordPress, or a custom API.
export const contentApi = {
  getSite: async () => siteConfig,
  getHome: async () => homeContent,
  getPrograms: async () => programs.filter((item) => item.active),
  getCampuses: async () => campuses.filter((item) => item.active),
  getTestimonials: async () => testimonials.filter((item) => item.active),
  getGallery: async () => [...gallery].sort((a, b) => a.order - b.order),
};
