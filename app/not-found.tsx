import Link from 'next/link';
import { pagesContent } from '@/content/pages';

export default function NotFound() { const content = pagesContent.notFound; return <main id="main-content" className="inner-page"><section className="inner-hero"><div className="container"><p className="section-eyebrow">{content.eyebrow}</p><h1>{content.title}</h1><p>{content.description}</p><Link className="button" href="/">{content.buttonLabel}</Link></div></section></main>; }
