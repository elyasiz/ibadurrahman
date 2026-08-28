import type { Metadata } from 'next';
import { InnerHero } from '@/components/layout/InnerHero';
import { testimonials } from '@/content/testimonials';
import { pagesContent } from '@/content/pages';

export const metadata: Metadata = { title: 'Testimoni | Yayasan Ibadurrahman', description: 'Cerita keluarga, peserta didik, dan alumni Ibadurrahman.' };
export default function TestimonialsPage() { const items = testimonials.filter((item) => item.active); return <main id="main-content" className="inner-page"><InnerHero {...pagesContent.testimonials.hero} /><section className="section testimonials-section"><div className="container values-grid">{items.map((item) => <article className="value-card" key={item.id}><span>{item.role}</span><h3>“</h3><p>{item.quote}</p><strong>{item.name}</strong></article>)}</div></section></main>; }
