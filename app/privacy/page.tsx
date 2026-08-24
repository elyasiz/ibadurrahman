import type { Metadata } from 'next';
import { InnerHero } from '@/components/layout/InnerHero';
import { pagesContent } from '@/content/pages';

export const metadata: Metadata = { title: 'Kebijakan Privasi | Ibadurrahman' };
export default function PrivacyPage() { const content = pagesContent.privacy; return <main id="main-content" className="inner-page"><InnerHero {...content.hero} /><section className="section"><div className="container detail-intro"><h2>{content.title}</h2><p>{content.description}</p></div></section></main>; }
