import Image from 'next/image';
import Link from 'next/link';
import { footerContent } from '@/content/footer';
import { siteConfig } from '@/content/site.config';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand"><Image src={siteConfig.brand.logo} alt="" width={78} height={78} /><h2>{siteConfig.brand.name}</h2><p>{footerContent.description}</p></div>
        {footerContent.groups.map((group) => <div className="footer-links" key={group.title}><h3>{group.title}</h3>{group.links.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}</div>)}
      </div>
      <div className="container footer-contact"><div><span>Email</span><a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a></div><div><span>Telepon</span><a href={`tel:${siteConfig.contact.phone}`}>{siteConfig.contact.phone}</a></div><div><span>Lokasi</span><strong>{siteConfig.contact.address}</strong></div></div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} {siteConfig.brand.shortName}</span><div>{Object.entries(siteConfig.social).map(([platform, href]) => <a href={href} key={platform} aria-label={platform}>{platform}</a>)}</div></div>
    </footer>
  );
}
