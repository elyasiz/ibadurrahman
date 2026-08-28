'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { siteConfig } from '@/content/site.config';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="Beranda Yayasan Ibadurrahman">
          <Image src={siteConfig.brand.logo} alt="Logo Yayasan Ibadurrahman" width={62} height={62} priority />
          <span>
            <strong>{siteConfig.brand.shortName}</strong>
            <small>Yayasan Pendidikan</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Navigasi utama">
          {siteConfig.navigation.map((item) => (
            <div className="nav-item" key={item.href}>
              <Link href={item.href}>{item.label}</Link>
              {'children' in item && item.children ? (
                <div className="dropdown">
                  {item.children.map((child) => (
                    <Link href={child.href} key={child.href}>{child.label}</Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="language-switcher" aria-label="Pilihan bahasa">
          {siteConfig.locales.map((locale, index) => <button key={locale.code} type="button" aria-pressed={index === 0}>{locale.label}</button>)}
        </div>

        <Link className="button button-small header-cta" href="/admissions">Pendaftaran</Link>
        <button className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Tutup menu' : 'Buka menu'} onClick={() => setOpen((value) => !value)}>
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${open ? 'is-open' : ''}`}>
        <nav aria-label="Navigasi seluler">
          {siteConfig.navigation.map((item) => 'children' in item && item.children ? (
            <details key={item.href}><summary>{item.label}</summary>{item.children.map((child) => <Link href={child.href} key={child.href} onClick={() => setOpen(false)}>{child.label}</Link>)}</details>
          ) : <Link href={item.href} key={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
          <Link className="button" href="/admissions" onClick={() => setOpen(false)}>Daftar Sekarang</Link>
        </nav>
      </div>
    </header>
  );
}
