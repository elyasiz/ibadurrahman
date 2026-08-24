import type { Metadata } from 'next';
import { InnerHero } from '@/components/layout/InnerHero';
import { CampusCard } from '@/components/cards/CampusCard';
import { campuses } from '@/content/campuses';
import { pagesContent } from '@/content/pages';

export const metadata: Metadata = { title: 'Kampus | Pondok Pesantren Ibadurrahman', description: 'Kenali lingkungan belajar dan asrama santri Ibadurrahman.' };
export default function CampusesPage() { const active = campuses.filter((item) => item.active); return <main id="main-content" className="inner-page"><InnerHero {...pagesContent.campuses.hero} /><section className="section campuses-section"><div className="container">{active.length ? <div className="listing-grid listing-grid-campuses">{active.map((campus) => <CampusCard key={campus.id} campus={campus} />)}</div> : <div className="empty-state"><h2>Data kampus belum tersedia</h2></div>}</div></section></main>; }
