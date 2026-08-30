type SectionHeadingProps = { eyebrow: string; title: string; description?: string; };
export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) { return <div><p className="eyebrow">{eyebrow}</p><h2 className="section-title">{title}</h2>{description ? <p className="section-intro">{description}</p> : null}</div>; }
