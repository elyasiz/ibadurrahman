import type { Metadata } from 'next';
import { InnerHero } from '@/components/layout/InnerHero';
import { ProgramCard } from '@/components/cards/ProgramCard';
import { programs } from '@/content/programs';
import { pagesContent } from '@/content/pages';

export const metadata: Metadata = { title: 'Program | Pondok Pesantren Ibadurrahman', description: 'Jelajahi program Tahfiz Al-Qur’an, Madrasah Diniyah, dan pengembangan santri.' };

export default function ProgramsPage() {
  const active = programs.filter((item) => item.active);
  return <main id="main-content" className="inner-page"><InnerHero {...pagesContent.programs.hero} /><section className="section listing-section"><div className="container">{active.length ? <div className="listing-grid">{active.map((program, index) => <ProgramCard key={program.id} program={program} index={index} />)}</div> : <div className="empty-state"><h2>Program segera hadir</h2><p>Tambahkan program melalui content/programs.ts.</p></div>}</div></section></main>;
}
