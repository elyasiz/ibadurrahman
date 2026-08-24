import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { InnerHero } from '@/components/layout/InnerHero';
import { campuses, getCampus } from '@/content/campuses';

export function generateStaticParams() { return campuses.filter((item) => item.active).map((item) => ({ slug: item.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const campus = getCampus(slug); if (!campus) return {}; return { title: `${campus.name} | Ibadurrahman`, description: campus.description, openGraph: { title: campus.name, description: campus.description, images: [{ url: campus.image }] }, twitter: { card: 'summary_large_image', title: campus.name, description: campus.description, images: [campus.image] } }; }
export default async function CampusDetailPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const campus = getCampus(slug); if (!campus) notFound(); return <main id="main-content" className="inner-page"><InnerHero eyebrow={campus.location} title={campus.name} description={campus.description} /><section className="section"><div className="container detail-intro"><div><p className="section-eyebrow">Fasilitas</p><h2>Ruang belajar yang mendukung keseharian santri.</h2><ul className="feature-list">{campus.facilities.map((item) => <li key={item}>{item}</li>)}</ul></div><div><p><strong>Alamat</strong><br />{campus.address}</p><p><strong>Kontak</strong><br />{campus.phone}<br />{campus.email}</p><Link className="button" href={campus.mapUrl}>Buka Peta ↗</Link></div></div></section><section className="section values-section"><div className="container detail-image"><Image src={campus.image} alt={`Lingkungan ${campus.name}`} fill sizes="100vw" /></div></section></main>; }
