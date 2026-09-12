import { skillGroups } from "@/data/skills";

const accents = ["bg-[#92c8e8]", "bg-[#f2bd62]", "bg-[#e99a82]", "bg-[#9fcfb0]"];

export function TechStack() {
  return (
    <section className="bg-[#fffdf9]">
      <div className="page-shell section-space grid gap-12 lg:grid-cols-[.76fr_1.24fr] lg:gap-20">
        <div><p className="eyebrow">我常用的工具</p><h2 className="mt-5 max-w-md text-[clamp(2.45rem,4.3vw,4.15rem)] font-semibold leading-[1.03] tracking-[-.075em] text-[var(--ink-strong)]">技术只是让想法落地的方式。</h2><p className="mt-6 max-w-sm leading-8 text-[var(--muted)]">我选择工具时，更在意它如何支持一个可靠、清楚、可迭代的 AI 应用。</p></div>
        <div className="space-y-7 pt-1">{skillGroups.map((group, index) => <div key={group.name}><div className="flex items-baseline gap-3"><span className={`h-3 w-3 rounded-full ${accents[index]}`} /><h3 className="text-lg font-semibold tracking-[-.04em] text-[var(--ink-strong)]">{group.name}</h3><span className="text-xs text-[var(--faint)]">{group.description}</span></div><div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 pl-6">{group.skills.map((skill) => <span key={skill} className="text-sm font-medium text-[#657278]">{skill}</span>)}</div></div>)}</div>
      </div>
    </section>
  );
}
