import type { Metadata } from 'next';
import Image from 'next/image';
import { InnerHero } from '@/components/layout/InnerHero';
import { pagesContent } from '@/content/pages';

export const metadata: Metadata = { title: 'Tentang Kami | Pondok Pesantren Ibadurrahman', description: 'Mengenal visi pendidikan dan nilai Pondok Pesantren Ibadurrahman.' };
export default function AboutPage() { const content = pagesContent.about; return <main id="main-content" className="inner-page"><InnerHero {...content.hero} /><section className="section"><div className="container detail-intro"><div><p className="section-eyebrow">{content.eyebrow}</p><h2>{content.title}</h2></div><div>{content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div></section><section className="section values-section"><div className="container detail-image"><Image src="/assets/gallery/literasi-santri-ibadurrahman.jpeg" alt="Santri Ibadurrahman membaca buku bersama" fill sizes="100vw" /></div></section></main>; }
