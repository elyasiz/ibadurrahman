import Link from 'next/link';
import Image from 'next/image';
import { homeContent } from '@/content/home';

export function Hero() {
  const { hero } = homeContent;

  return (
    <section className="hero" style={{ '--hero-position': hero.imagePosition } as React.CSSProperties}>
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1>{hero.title}</h1>
          <p className="hero-description">{hero.description}</p>
          <div className="hero-actions">
            <Link className="button" href={hero.primaryCTA.href}>{hero.primaryCTA.label}</Link>
            <Link className="button button-secondary" href={hero.secondaryCTA.href}>{hero.secondaryCTA.label}<span aria-hidden="true">↘</span></Link>
          </div>
        </div>
        <div className="hero-visual" aria-label="Kegiatan belajar peserta didik Ibadurrahman">
          <div className="hero-image-placeholder">
            <Image src={hero.image} alt="Peserta didik Ibadurrahman belajar bersama pendamping" fill priority sizes="(max-width: 760px) 90vw, 42vw" />
            <div className="hero-image-shade" />
            <p>Belajar · Bertumbuh · Berkarya</p>
          </div>
          <div className="floating-note">
            <strong>RA hingga SMA</strong>
            <span>Satu perjalanan pendidikan</span>
          </div>
        </div>
      </div>
      <div className="hero-marquee" aria-hidden="true">
        <div>RA · SDI · SMP PLUS · SMA · ILMU · ADAB · KEMANDIRIAN · RA · SDI · SMP PLUS · SMA ·</div>
      </div>
    </section>
  );
}
