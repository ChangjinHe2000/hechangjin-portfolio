import { SectionHeading } from "@/components/section-heading";
import { skillGroups } from "@/data/skills";

export function TechStack() {
  return (
    <section className="page-shell section-space grid-rule">
      <SectionHeading eyebrow="03 / Toolkit" title="A focused stack for shipping AI products." description="不追求 Logo 墙；这里呈现的是我在 AI 应用构建中最常使用、持续深入的工具与技术。" />
      <div className="mt-12 grid gap-px border border-[var(--line)] bg-[var(--line)] md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <article key={group.name} className="group bg-[var(--canvas)] p-6 transition-colors hover:bg-[var(--surface-raised)] sm:p-8">
            <div className="flex items-start justify-between gap-6"><h3 className="text-xl font-semibold tracking-[-.04em] text-white">{group.name}</h3><span className="font-mono text-xs text-[var(--faint)]">0{index + 1}</span></div>
            <p className="mt-3 min-h-12 text-sm leading-6 text-[var(--muted)]">{group.description}</p>
            <div className="mt-7 flex flex-wrap gap-x-4 gap-y-3">{group.skills.map((skill) => <span key={skill} className="border-b border-[var(--line)] pb-1 text-sm text-[#c6d4e7]">{skill}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
