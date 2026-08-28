'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { gallery } from '@/content/gallery';
import { homeContent } from '@/content/home';
import { programs } from '@/content/programs';
import { testimonials } from '@/content/testimonials';
import { educationUnits } from '@/content/units';
import { UnitCard } from '@/components/cards/UnitCard';
import { ProgramCard } from '@/components/cards/ProgramCard';
import { Section, SectionHeader } from '@/components/ui/Section';

function AboutSection() {
  const { about } = homeContent;
  return (
    <Section id="tentang" className="about-section">
      <div className="container about-grid">
        <div className="about-image-wrap">
          <Image src={about.image} alt="Peserta didik Ibadurrahman membaca bersama" fill sizes="(max-width: 760px) 100vw, 48vw" />
          <div className="about-stat"><strong>Berjenjang</strong><span>RA, SDI, SMP Plus, dan SMA</span></div>
        </div>
        <div className="about-copy">
          <SectionHeader eyebrow={about.eyebrow} title={about.title} description={about.description} />
          <div className="about-principles">
            <span>Keteladanan</span><span>Kedekatan</span><span>Kebermanfaatan</span>
          </div>
          <Link className="text-link" href={about.button.href}>{about.button.label} <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </Section>
  );
}

function UnitsSection() {
  return (
    <Section id="unit-pendidikan" className="units-section">
      <div className="container">
        <div className="section-heading-row">
          <SectionHeader eyebrow="Unit Pendidikan" title="Pendampingan yang sesuai di setiap tahap pertumbuhan." description="Empat jenjang pendidikan dalam satu nilai yang sama: keislaman, keilmuan, adab, dan pengembangan potensi." />
          <Link className="text-link" href="/units">Semua Unit <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="units-grid">{educationUnits.filter((item) => item.active).map((unit, index) => <UnitCard key={unit.id} unit={unit} index={index} />)}</div>
      </div>
    </Section>
  );
}

function ValuesSection() {
  return (
    <Section className="values-section">
      <div className="container">
        <SectionHeader eyebrow="Nilai yang Dihidupkan" title="Bukan hanya diajarkan. Dibiasakan setiap hari." align="center" />
        <div className="values-grid">
          {homeContent.values.map((value) => (
            <article key={value.title} className="value-card">
              <span>{value.number}</span><h3>{value.title}</h3><p>{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

function CtaSection() {
  const { cta } = homeContent;
  return (
    <Section className="large-cta">
      <div className="container cta-inner">
        <p className="section-eyebrow">{cta.eyebrow}</p>
        <h2>{cta.title}</h2><p>{cta.description}</p>
        <Link className="button" href={cta.button.href}>{cta.button.label}<span aria-hidden="true">↗</span></Link>
      </div>
    </Section>
  );
}

function ProgramsSection() {
  return (
    <Section className="programs-section">
      <div className="container">
        <div className="section-heading-row">
          <SectionHeader eyebrow="Program Pendidikan" title="Setiap hari adalah ruang untuk bertumbuh." description="Program dirancang saling menguatkan: ilmu agama yang kokoh, pembelajaran yang hidup, dan kecakapan untuk masa depan." />
          <Link className="text-link" href="/programs">Semua Program <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="programs-grid">{programs.filter((item) => item.active).map((program, index) => <ProgramCard key={program.id} program={program} index={index} />)}</div>
      </div>
    </Section>
  );
}

function TestimonialsSection() {
  const activeTestimonials = testimonials.filter((item) => item.active);
  const [index, setIndex] = useState(0);
  const item = activeTestimonials[index];
  if (!item) return null;
  return (
    <Section className="testimonials-section">
      <div className="container testimonial-shell">
        <div className="testimonial-label"><span>Suara Keluarga</span><b>{String(index + 1).padStart(2, '0')} / {String(activeTestimonials.length).padStart(2, '0')}</b></div>
        <blockquote>“{item.quote}”</blockquote>
        <div className="testimonial-footer"><div><strong>{item.name}</strong><span>{item.role}</span></div><div className="slider-buttons"><button type="button" aria-label="Testimoni sebelumnya" onClick={() => setIndex((index - 1 + activeTestimonials.length) % activeTestimonials.length)}>←</button><button type="button" aria-label="Testimoni berikutnya" onClick={() => setIndex((index + 1) % activeTestimonials.length)}>→</button></div></div>
      </div>
    </Section>
  );
}

function VideoSection() {
  const [open, setOpen] = useState(false);
  const { video } = homeContent;
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey); return () => window.removeEventListener('keydown', onKey);
  }, []);
  return (
    <Section className="video-section">
      <div className="container video-grid">
        <div className="video-copy"><SectionHeader eyebrow={video.eyebrow} title={video.title} description={video.description} /><button className="play-link" type="button" onClick={() => setOpen(true)}><span>▶</span> Putar Cerita Ibadurrahman</button></div>
        <button className="video-poster" type="button" aria-label="Putar video kegiatan pendidikan" onClick={() => setOpen(true)}><Image src={video.thumbnail} alt="" fill sizes="(max-width: 760px) 100vw, 48vw" /><span>▶</span></button>
      </div>
      {open ? <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Video kegiatan pendidikan" onClick={() => setOpen(false)}><div className="video-modal" onClick={(event) => event.stopPropagation()}><button className="modal-close" type="button" aria-label="Tutup video" onClick={() => setOpen(false)}>×</button>{video.videoUrl ? <iframe src={video.videoUrl} title="Kegiatan Pendidikan Ibadurrahman" allow="autoplay; fullscreen" /> : <div className="video-empty"><strong>Video siap ditambahkan</strong><p>Isi <code>videoUrl</code> di <code>content/home.ts</code> dengan YouTube, Vimeo, atau MP4.</p></div>}</div></div> : null}
    </Section>
  );
}

function GallerySection() {
  const [selected, setSelected] = useState<number | null>(null);
  const items = [...gallery].sort((a, b) => a.order - b.order);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (selected === null) return;
      if (event.key === 'Escape') setSelected(null);
      if (event.key === 'ArrowRight') setSelected((selected + 1) % items.length);
      if (event.key === 'ArrowLeft') setSelected((selected - 1 + items.length) % items.length);
    };
    window.addEventListener('keydown', onKey); return () => window.removeEventListener('keydown', onKey);
  }, [selected, items.length]);
  return (
    <Section className="gallery-section">
      <div className="container">
        <div className="section-heading-row"><SectionHeader eyebrow="Cerita Visual" title="Momen belajar dan bertumbuh bersama Ibadurrahman." /><Link className="text-link" href="/gallery">Buka Galeri <span aria-hidden="true">↗</span></Link></div>
        <div className="gallery-grid">{items.slice(0, 5).map((item, index) => <button type="button" className={`gallery-item gallery-item-${index + 1}`} key={item.id} onClick={() => setSelected(index)}><Image src={item.image} alt={item.alt} fill sizes="(max-width: 760px) 100vw, 40vw" /><span>{item.category}<strong>{item.title}</strong></span></button>)}</div>
      </div>
      {selected !== null ? <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Pratinjau galeri" onClick={() => setSelected(null)}><div className="gallery-modal" onClick={(event) => event.stopPropagation()}><Image src={items[selected].image} alt={items[selected].alt} fill sizes="90vw" /><div className="gallery-caption"><strong>{items[selected].title}</strong><span>{items[selected].category}</span></div><button className="modal-close" type="button" aria-label="Tutup galeri" onClick={() => setSelected(null)}>×</button><button className="gallery-prev" type="button" aria-label="Foto sebelumnya" onClick={() => setSelected((selected - 1 + items.length) % items.length)}>←</button><button className="gallery-next" type="button" aria-label="Foto berikutnya" onClick={() => setSelected((selected + 1) % items.length)}>→</button></div></div> : null}
    </Section>
  );
}

function ContactSection() {
  return (
    <Section className="contact-strip"><div className="container contact-strip-inner"><div><p className="section-eyebrow">Mari Berkenalan</p><h2>Temukan jenjang yang tepat untuk putra-putri Anda.</h2></div><div><p>Tim kami siap membantu keluarga memahami unit pendidikan dan proses pendaftaran.</p><Link className="button" href="/admissions#kontak-whatsapp">Hubungi Admin <span aria-hidden="true">↗</span></Link></div></div></Section>
  );
}

const sectionMap = { about: AboutSection, units: UnitsSection, values: ValuesSection, cta: CtaSection, programs: ProgramsSection, testimonials: TestimonialsSection, video: VideoSection, gallery: GallerySection, contact: ContactSection };

export function HomeSections() {
  return <>{homeContent.sectionOrder.map((id) => { const Component = sectionMap[id]; return homeContent.visibility[id] ? <Component key={id} /> : null; })}</>;
}
