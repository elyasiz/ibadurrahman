import type { Metadata } from 'next';
import Link from 'next/link';
import { InnerHero } from '@/components/layout/InnerHero';
import { pagesContent } from '@/content/pages';
import { siteConfig } from '@/content/site.config';

export const metadata: Metadata = { title: 'Karier | Pondok Pesantren Ibadurrahman', description: 'Bergabung menjadi pendidik dan penggerak di Ibadurrahman.' };
export default function CareerPage() { const content = pagesContent.career; return <main id="main-content" className="inner-page"><InnerHero {...content.hero} /><section className="section"><div className="container empty-state"><h2>{content.emptyTitle}</h2><p>{content.emptyDescription}</p><Link className="button" href={`mailto:${siteConfig.contact.email}`}>{content.buttonLabel}</Link></div></section></main>; }
