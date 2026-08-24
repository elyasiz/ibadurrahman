import Image from 'next/image';
import Link from 'next/link';
import type { Program } from '@/content/programs';

export function ProgramCard({ program, index }: { program: Program; index: number }) {
  return (
    <article className={`program-card card-${program.accent}`}>
      <div className="program-card-image">
        <Image src={program.image} alt="" fill sizes="(max-width: 760px) 100vw, 33vw" />
        <span>{String(index + 1).padStart(2, '0')}</span>
      </div>
      <div className="program-card-body">
        <p className="card-eyebrow">{program.eyebrow}</p>
        <h3>{program.title}</h3>
        <p>{program.description}</p>
        <Link className="text-link" href={`/programs/${program.slug}`}>Pelajari Program <span aria-hidden="true">↗</span></Link>
      </div>
    </article>
  );
}
