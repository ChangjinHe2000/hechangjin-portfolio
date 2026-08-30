import { SectionHeading } from "@/components/section-heading";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="border-y border-[var(--line)] bg-[var(--surface)]">
      <div className="page-shell section-space">
        <SectionHeading eyebrow="04 / Experience" title="Grounded in real medical AI workflows." />
        <div className="mt-12 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {experiences.map((experience) => (
            <article key={experience.organization} className="grid gap-8 py-8 md:grid-cols-[.8fr_1.2fr] md:py-10">
              <div><p className="font-mono text-xs tracking-[.1em] text-[var(--cyan)]">{experience.period}</p><h3 className="mt-3 text-2xl font-semibold tracking-[-.045em] text-white">{experience.organization}</h3><p className="mt-2 text-sm text-[var(--muted)]">{experience.role}</p></div>
              <div><p className="max-w-xl leading-8 text-[var(--muted)]">{experience.summary}</p><div className="mt-6 flex flex-wrap gap-2">{experience.areas.map((area) => <span key={area} className="border border-[var(--line)] px-2.5 py-1 text-xs text-[#b6c5d9]">{area}</span>)}</div></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
