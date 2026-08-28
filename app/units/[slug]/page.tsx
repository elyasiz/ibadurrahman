import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { InnerHero } from '@/components/layout/InnerHero';
import { WhatsAppContacts } from '@/components/sections/WhatsAppContacts';
import { educationUnits, getEducationUnit } from '@/content/units';

export function generateStaticParams() {
  return educationUnits.filter((unit) => unit.active).map((unit) => ({ slug: unit.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const unit = getEducationUnit(slug);
  if (!unit) return {};
  return {
    title: `${unit.name} | Yayasan Ibadurrahman`,
    description: unit.description,
    openGraph: { title: unit.name, description: unit.description, images: [{ url: unit.image }] },
    twitter: { card: 'summary_large_image', title: unit.name, description: unit.description, images: [unit.image] },
  };
}

export default async function UnitDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const unit = getEducationUnit(slug);
  if (!unit) notFound();

  return (
    <main id="main-content" className="inner-page">
      <InnerHero eyebrow={unit.level} title={unit.name} description={unit.description} />
      <section className="section">
        <div className="container detail-intro">
          <div>
            <p className="section-eyebrow">Fokus Pendidikan</p>
            <h2>Mendampingi setiap tahap dengan pendekatan yang tepat.</h2>
            <ul className="feature-list">{unit.focus.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div>
            <p>{unit.longDescription}</p>
            <p><strong>Program pembelajaran</strong></p>
            <ul className="simple-list">{unit.programs.map((program) => <li key={program}>{program}</li>)}</ul>
          </div>
        </div>
      </section>
      <section className="section values-section"><div className="container detail-image"><Image src={unit.image} alt={`Kegiatan belajar ${unit.name}`} fill sizes="100vw" style={{ objectPosition: unit.imagePosition }} /></div></section>
      <section className="section"><div className="container"><WhatsAppContacts compact /></div></section>
    </main>
  );
}
