import { researchItems } from "@/data/research";

export function Research() {
  return (
    <section id="research" className="bg-[#fdf5ea]">
      <div className="page-shell section-space grid gap-12 lg:grid-cols-[.78fr_1.22fr] lg:gap-20">
        <div><p className="eyebrow">研究与一些收获</p><h2 className="mt-5 max-w-md text-[clamp(2.45rem,4.3vw,4.15rem)] font-semibold leading-[1.03] tracking-[-.075em] text-[var(--ink-strong)]">把研究能力，带进工程实践。</h2><p className="mt-6 max-w-sm leading-8 text-[var(--muted)]">这些不是首页的中心，但它们让我习惯以更细致的方式理解复杂问题。</p></div>
        <div className="divide-y divide-[#eadbc5]">{researchItems.map((item) => <article key={item.title} className="py-6 first:pt-1"><p className="text-xs font-bold tracking-[.08em] text-[#af7b3d]">{item.type}</p><h3 className="mt-2 text-lg font-semibold leading-7 tracking-[-.025em] text-[var(--ink-strong)]">{item.title}</h3><p className="mt-2 text-sm text-[var(--muted)]">{item.detail}</p></article>)}</div>
      </div>
    </section>
  );
}
