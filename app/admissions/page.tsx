import type { Metadata } from 'next';
import Link from 'next/link';
import { InnerHero } from '@/components/layout/InnerHero';
import { WhatsAppContacts } from '@/components/sections/WhatsAppContacts';
import { pagesContent } from '@/content/pages';
import { educationUnits } from '@/content/units';

export const metadata: Metadata = { title: 'Pendaftaran | Yayasan Ibadurrahman', description: 'Informasi pendaftaran RA, SDI, SMP Plus, dan SMA Ibadurrahman.' };

export default function AdmissionsPage() {
  const content = pagesContent.admissions;
  return (
    <main id="main-content" className="inner-page">
      <InnerHero {...content.hero} />
      <section className="section values-section">
        <div className="container">
          <div className="admission-units">
            <div><p className="section-eyebrow">Pilih Jenjang</p><h2>Empat unit pendidikan, satu semangat untuk bertumbuh.</h2></div>
            <div className="admission-unit-links">{educationUnits.map((unit) => <Link href={`/units/${unit.slug}`} key={unit.id}>{unit.name}<span aria-hidden="true">↗</span></Link>)}</div>
          </div>
          <div className="values-grid admission-steps">{content.steps.map((step) => <article className="value-card" key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
        </div>
      </section>
      <section className="section"><div className="container"><WhatsAppContacts /></div></section>
    </main>
  );
}
