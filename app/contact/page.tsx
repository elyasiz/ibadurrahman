import type { Metadata } from 'next';
import { InnerHero } from '@/components/layout/InnerHero';
import { WhatsAppContacts } from '@/components/sections/WhatsAppContacts';
import { siteConfig } from '@/content/site.config';
import { pagesContent } from '@/content/pages';

export const metadata: Metadata = { title: 'Kontak | Yayasan Ibadurrahman', description: 'Hubungi Yayasan Ibadurrahman di Kota Tangerang.' };

export default function ContactPage() {
  const content = pagesContent.contact;
  return <main id="main-content" className="inner-page"><InnerHero {...content.hero} /><section className="section"><div className="container contact-location"><p className="section-eyebrow">Lokasi</p><h2>{siteConfig.contact.address}</h2><p>{content.officeHours}</p></div></section><section className="section values-section"><div className="container"><WhatsAppContacts /></div></section></main>;
}
