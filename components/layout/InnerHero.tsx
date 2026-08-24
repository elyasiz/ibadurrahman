export function InnerHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="inner-hero">
      <div className="container">
        <p className="section-eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
