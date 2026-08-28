import Image from 'next/image';
import Link from 'next/link';
import { footerContent } from '@/content/footer';
import { siteConfig } from '@/content/site.config';

export function Footer() {
  const [primaryContact] = siteConfig.admissionsContacts;
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand"><Image src={siteConfig.brand.logo} alt="" width={78} height={78} /><h2>{siteConfig.brand.name}</h2><p>{footerContent.description}</p></div>
        {footerContent.groups.map((group) => <div className="footer-links" key={group.title}><h3>{group.title}</h3>{group.links.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}</div>)}
      </div>
      <div className="container footer-contact"><div><span>Unit Pendidikan</span><strong>RA · SDI · SMP Plus · SMA</strong></div><div><span>WhatsApp Pendaftaran</span><a href={`https://wa.me/${primaryContact.whatsapp}`} target="_blank" rel="noopener noreferrer">{primaryContact.phone}</a></div><div><span>Lokasi</span><strong>{siteConfig.contact.address}</strong></div></div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} {siteConfig.brand.shortName}</span><div>{Object.entries(siteConfig.social).map(([platform, href]) => <a href={href} key={platform} aria-label={platform}>{platform}</a>)}</div></div>
    </footer>
  );
}
