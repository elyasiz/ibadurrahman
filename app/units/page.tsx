import type { Metadata } from 'next';
import { InnerHero } from '@/components/layout/InnerHero';
import { UnitCard } from '@/components/cards/UnitCard';
import { WhatsAppContacts } from '@/components/sections/WhatsAppContacts';
import { educationUnits } from '@/content/units';

export const metadata: Metadata = {
  title: 'Unit Pendidikan | Yayasan Ibadurrahman',
  description: 'Kenali RA, SDI, SMP Plus, dan SMA Ibadurrahman di Kota Tangerang.',
};

export default function UnitsPage() {
  const units = educationUnits.filter((unit) => unit.active);
  return (
    <main id="main-content" className="inner-page">
      <InnerHero eyebrow="Unit Pendidikan" title="Satu nilai, empat tahap pertumbuhan." description="Pilih jenjang yang sesuai untuk mengenal pendekatan pendidikan di RA, SDI, SMP Plus, dan SMA Ibadurrahman." />
      <section className="section units-section">
        <div className="container units-grid">{units.map((unit, index) => <UnitCard key={unit.id} unit={unit} index={index} />)}</div>
      </section>
      <section className="section"><div className="container"><WhatsAppContacts compact /></div></section>
    </main>
  );
}
