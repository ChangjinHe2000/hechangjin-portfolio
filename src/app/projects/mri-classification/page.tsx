import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MriMetrics } from "@/components/mri-project";
import { MriPartners } from "@/components/mri-partners";
import { mriProject as project } from "@/data/mri-classification";

export const metadata: Metadata = { title: `${project.title} | 何畅金`, description: project.summary };

export default function MriClassificationPage() {
  return (
    <main className="page-shell py-8 sm:py-12">
      <article className="mx-auto max-w-[52rem]">
        <Link href="/#mri-project" className="text-link">← 返回项目经历</Link>
        <header className="mt-10 sm:mt-14">
          <p className="text-xs font-semibold tracking-wider text-[#76618d]">{project.type} · 多模态医学影像</p>
          <h1 className="mt-3 max-w-2xl text-[clamp(1.8rem,5vw,2.6rem)] font-bold leading-tight tracking-[-.04em]">{project.title}</h1>
          <dl className="mt-5 space-y-2 text-sm leading-6 text-[var(--muted)]">
            {[["合作单位", project.partners], ["项目时间", project.period], ["研究方向", project.directions]].map(([label, value]) => <div key={label} className="flex gap-3"><dt className="shrink-0">{label}</dt><dd>{value}</dd></div>)}
          </dl>
          <ul aria-label="技术栈" className="mt-5 flex flex-wrap gap-2">{project.stack.map((skill) => <li key={skill} className="rounded-md bg-[#f0ebf6] px-3 py-1 text-xs text-[#76618d]">{skill}</li>)}</ul>
          <MriPartners />
          <MriMetrics />
        </header>
        <section aria-labelledby="background" className="mt-10">
          <h2 id="background" className="text-xl font-bold">项目背景</h2>
          <p className="mt-4 text-[15px] leading-7 text-[var(--muted)]">{project.background}</p>
          <figure className="mt-6 rounded-2xl bg-[#f3eff8] p-4 sm:p-5">
            <Image src="/mri-sequences-illustration.png" alt="多种 MRI 序列影像的示意对照，不对应本项目数据或实验结果" width={685} height={488} unoptimized className="mx-auto h-auto w-full max-w-[420px] rounded-xl" />
            <figcaption className="mx-auto mt-4 max-w-xl text-xs leading-6 text-[var(--muted)]">MRI 示意图，非本项目数据。图中序列仅用于展示不同 MRI 序列的视觉差异；本项目实际处理的序列为 DWI、T1WI-IP、T2WI，此图不代表本项目的肿瘤类型、病例或预测结果。</figcaption>
          </figure>
        </section>
        <section aria-labelledby="contributions" className="mt-10 border-t border-[var(--line)] pt-7">
          <h2 id="contributions" className="text-xl font-bold">个人贡献</h2>
          <div className="mt-2 divide-y divide-[var(--line)]">{project.contributions.map((item, index) => (
            <section key={item.title} className="grid gap-3 py-6 sm:grid-cols-[2.5rem_1fr] sm:gap-4">
              <span aria-hidden="true" className="text-2xl text-[#a190b5]">0{index + 1}</span>
              <div><h3 className="text-lg font-bold">{item.title}</h3>{item.paragraphs.map((text) => <p key={text} className="mt-3 text-[15px] leading-7 text-[var(--muted)]">{text}</p>)}<ul aria-label="技术要点" className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-[#76618d]">{item.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></div>
            </section>
          ))}</div>
        </section>
        <section aria-labelledby="results" className="mt-4 rounded-2xl bg-[#f3eff8] p-5 sm:p-6">
          <h2 id="results" className="text-lg font-bold text-[#76618d]">实验结果 · 内部与外部测试</h2>
          <table className="mt-5 w-full text-left text-xs leading-6 sm:text-sm">
            <caption className="sr-only">M3HAF-Net 与最终融合模型的内部、外部测试 AUC 对比</caption>
            <thead><tr className="border-b border-[#ddd3e8]"><th scope="col" className="pb-3 pr-2">模型</th><th scope="col" className="pb-3 pr-2">内部 AUC</th><th scope="col" className="pb-3">外部 AUC</th></tr></thead>
            <tbody className="tabular-nums"><tr className="border-b border-[#ddd3e8]"><th scope="row" className="py-3 pr-2 font-medium">M3HAF-Net</th><td className="py-3">0.860</td><td className="py-3">0.827</td></tr><tr className="text-[#76618d]"><th scope="row" className="py-3 pr-2 font-semibold">最终融合模型</th><td className="py-3 font-semibold">0.874</td><td className="py-3 font-semibold">0.845</td></tr></tbody>
          </table>
          <ul className="mt-4 list-disc space-y-2 pl-4 text-sm leading-7 text-[var(--muted)]">{project.results.map((result) => <li key={result}>{result}</li>)}</ul>
        </section>
        <p className="mt-5 text-xs leading-6 text-[var(--muted)]">以上指标对应项目所述内部、外部测试范围，不代表临床诊断或实际部署效果。个人网站不展示原始患者资料。</p>
        <footer className="mt-10 flex justify-between gap-3 border-t border-[var(--line)] py-6 text-xs text-[var(--muted)]"><span>何畅金 · 实验室横向项目</span><Link href="/#mri-project" className="font-semibold text-[#76618d]">返回个人主页 ↗</Link></footer>
      </article>
    </main>
  );
}
