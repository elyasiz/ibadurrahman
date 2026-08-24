import Image from 'next/image';
import Link from 'next/link';
import type { Campus } from '@/content/campuses';

export function CampusCard({ campus }: { campus: Campus }) {
  return (
    <article className="campus-card">
      <Image src={campus.image} alt={`Lingkungan ${campus.name}`} fill sizes="(max-width: 760px) 100vw, 50vw" />
      <div className="campus-card-overlay" />
      <div className="campus-card-content">
        <span>{campus.location}</span>
        <h3>{campus.name}</h3>
        <p>{campus.description}</p>
        <Link href={`/campuses/${campus.slug}`} aria-label={`Lihat ${campus.name}`}>Lihat Kampus <b aria-hidden="true">↗</b></Link>
      </div>
    </article>
  );
}
