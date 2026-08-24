import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { InnerHero } from '@/components/layout/InnerHero';
import { getProgram, programs } from '@/content/programs';

export function generateStaticParams() { return programs.filter((item) => item.active).map((item) => ({ slug: item.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const program = getProgram(slug); if (!program) return {}; return { title: `${program.title} | Ibadurrahman`, description: program.description, openGraph: { title: program.title, description: program.description, images: [{ url: program.image }] }, twitter: { card: 'summary_large_image', title: program.title, description: program.description, images: [program.image] } }; }

export default async function ProgramDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const program = getProgram(slug); if (!program) notFound();
  return <main id="main-content" className="inner-page"><InnerHero eyebrow={program.eyebrow} title={program.title} description={program.description} /><section className="section"><div className="container detail-intro"><div><p className="section-eyebrow">Gambaran Program</p><h2>Belajar bertahap dengan pendampingan yang dekat.</h2><ul className="feature-list">{program.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></div><div><p>{program.longDescription}</p><p><strong>Ritme program:</strong> {program.schedule}</p></div></div></section><section className="section values-section"><div className="container detail-image"><Image src={program.image} alt={`Kegiatan ${program.title}`} fill sizes="100vw" /></div></section></main>;
}
