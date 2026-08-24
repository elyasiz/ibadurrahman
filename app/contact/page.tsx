import type { Metadata } from 'next';
import { InnerHero } from '@/components/layout/InnerHero';
import { ContactForm } from '@/components/sections/ContactForm';
import { siteConfig } from '@/content/site.config';
import { pagesContent } from '@/content/pages';

export const metadata: Metadata = { title: 'Kontak | Pondok Pesantren Ibadurrahman', description: 'Hubungi Pondok Pesantren Ibadurrahman di Kota Tangerang.' };
export default function ContactPage() { const content = pagesContent.contact; return <main id="main-content" className="inner-page"><InnerHero {...content.hero} /><section className="section"><div className="container contact-page-grid"><div className="contact-details"><div><span>Alamat</span><strong>{siteConfig.contact.address}</strong></div><div><span>Telepon</span><a href={`tel:${siteConfig.contact.phone}`}>{siteConfig.contact.phone}</a></div><div><span>Email</span><a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a></div><div><span>WhatsApp</span><a href={`https://wa.me/${siteConfig.contact.whatsapp}`}>Mulai percakapan ↗</a></div><div><span>Jam layanan</span><strong>{content.officeHours}</strong></div></div><ContactForm /></div></section></main>; }
