import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="page-shell section-space">
      <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
        <div><p className="eyebrow">一路走来</p><h2 className="mt-5 max-w-sm text-[clamp(2.45rem,4.3vw,4.15rem)] font-semibold leading-[1.03] tracking-[-.075em] text-[var(--ink-strong)]">我的医学 AI 背景，给了我另一种视角。</h2><p className="mt-6 max-w-sm leading-8 text-[var(--muted)]">它让我更在意数据、验证与实际场景，也构成了我进入 AI 应用开发的独特起点。</p></div>
        <div className="pt-2">{experiences.map((experience) => <article key={experience.organization} className="relative pl-8 before:absolute before:bottom-0 before:left-1 before:top-1 before:w-px before:bg-[#d6dfdd]"><span className="absolute left-0 top-1 h-3 w-3 rounded-full bg-[#80b9da] ring-4 ring-[#e7f1f3]" /><p className="text-sm font-bold text-[var(--blue)]">{experience.period}</p><h3 className="mt-4 text-2xl font-semibold tracking-[-.05em] text-[var(--ink-strong)]">{experience.organization}</h3><p className="mt-1 text-sm font-medium text-[var(--coral)]">{experience.role}</p><p className="mt-5 max-w-2xl leading-8 text-[var(--muted)]">{experience.summary}</p><div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 pb-2">{experience.areas.map((area) => <span key={area} className="text-sm font-medium text-[#5c6a70]">{area}</span>)}</div></article>)}</div>
      </div>
    </section>
  );
}
