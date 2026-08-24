import type { Metadata } from 'next';
import Image from 'next/image';
import { InnerHero } from '@/components/layout/InnerHero';
import { gallery } from '@/content/gallery';
import { pagesContent } from '@/content/pages';

export const metadata: Metadata = { title: 'Galeri | Pondok Pesantren Ibadurrahman', description: 'Lihat momen pembelajaran dan kehidupan santri Ibadurrahman.' };
export default function GalleryPage() { const items = [...gallery].sort((a, b) => a.order - b.order); return <main id="main-content" className="inner-page"><InnerHero {...pagesContent.gallery.hero} /><section className="section gallery-section"><div className="container">{items.length ? <div className="gallery-grid">{items.map((item, index) => <div className={`gallery-item gallery-item-${index + 1}`} key={item.id}><Image src={item.image} alt={item.alt} fill sizes="(max-width: 760px) 100vw, 40vw" /><span>{item.category}<strong>{item.title}</strong></span></div>)}</div> : <div className="empty-state"><h2>Galeri belum tersedia</h2><p>Tambahkan foto melalui content/gallery.ts.</p></div>}</div></section></main>; }
