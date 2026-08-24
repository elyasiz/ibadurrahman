import type { Metadata } from 'next';
import Link from 'next/link';
import { InnerHero } from '@/components/layout/InnerHero';
import { pagesContent } from '@/content/pages';

export const metadata: Metadata = { title: 'Pendaftaran | Pondok Pesantren Ibadurrahman', description: 'Informasi alur penerimaan santri baru Ibadurrahman.' };
export default function AdmissionsPage() { const content = pagesContent.admissions; return <main id="main-content" className="inner-page"><InnerHero {...content.hero} /><section className="section values-section"><div className="container"><div className="values-grid">{content.steps.map((step) => <article className="value-card" key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div><div style={{ textAlign: 'center', marginTop: 42 }}><Link className="button" href={content.button.href}>{content.button.label}</Link></div></div></section></main>; }
