import Image from 'next/image';
import Link from 'next/link';
import type { EducationUnit } from '@/content/units';

export function UnitCard({ unit, index }: { unit: EducationUnit; index: number }) {
  return (
    <article className="unit-card">
      <div className="unit-card-image">
        <Image src={unit.image} alt={`Kegiatan belajar ${unit.name}`} fill sizes="(max-width: 760px) 100vw, 50vw" style={{ objectPosition: unit.imagePosition }} />
        <span>{String(index + 1).padStart(2, '0')}</span>
      </div>
      <div className="unit-card-body">
        <p className="card-eyebrow">{unit.level}</p>
        <h3>{unit.name}</h3>
        <p>{unit.description}</p>
        <Link className="text-link" href={`/units/${unit.slug}`}>Lihat Unit Pendidikan <span aria-hidden="true">↗</span></Link>
      </div>
    </article>
  );
}
