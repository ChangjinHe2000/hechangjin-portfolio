import { SectionHeading } from "@/components/section-heading";
import { researchItems } from "@/data/research";

export function Research() {
  return (
    <section id="research" className="page-shell section-space grid-rule">
      <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-24"><SectionHeading eyebrow="05 / Research & achievements" title="Research as an engineering advantage." description="医学 AI 研究训练带来对数据、验证与实际场景更细致的理解；它是应用开发能力的延伸，而不是另一个中心。" />
        <div className="border-t border-[var(--line)]">
          {researchItems.map((item, index) => (
            <article key={item.title} className="grid gap-4 border-b border-[var(--line)] py-6 sm:grid-cols-[3rem_1fr] sm:gap-6"><span className="font-mono text-xs text-[var(--faint)]">0{index + 1}</span><div><p className="text-[10px] font-bold uppercase tracking-[.13em] text-[var(--cyan)]">{item.type}</p><h3 className="mt-2 text-base font-medium leading-7 text-[#dbe7f6]">{item.title}</h3><p className="mt-2 text-sm text-[var(--muted)]">{item.detail}</p></div></article>
          ))}
        </div>
      </div>
    </section>
  );
}
