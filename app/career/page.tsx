import type { Metadata } from 'next';
import Link from 'next/link';
import { InnerHero } from '@/components/layout/InnerHero';
import { pagesContent } from '@/content/pages';
import { siteConfig } from '@/content/site.config';

export const metadata: Metadata = { title: 'Karier | Yayasan Ibadurrahman', description: 'Bergabung menjadi pendidik dan penggerak di Yayasan Ibadurrahman.' };
export default function CareerPage() { const content = pagesContent.career; const [contact] = siteConfig.admissionsContacts; return <main id="main-content" className="inner-page"><InnerHero {...content.hero} /><section className="section"><div className="container empty-state"><h2>{content.emptyTitle}</h2><p>{content.emptyDescription}</p><Link className="button" href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer">{content.buttonLabel}</Link></div></section></main>; }
