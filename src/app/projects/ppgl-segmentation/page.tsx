import type { Metadata } from "next";
import Link from "next/link";
import { ResearchPartners } from "@/components/research-partners";
import { ResearchMetrics, VolumeMark } from "@/components/ppgl-research";
import { ppglResearch as project } from "@/data/ppgl-segmentation";

export const metadata: Metadata = { title: `${project.title} | 何畅金`, description: project.summary };

export default function PpglResearchPage() {
  return (
    <main className="page-shell py-8 sm:py-12">
      <article className="mx-auto max-w-[52rem]">
        <Link href="/#ppgl-research" className="text-link">← 返回项目经历</Link>
        <header className="mt-10 sm:mt-14">
          <p className="text-xs font-semibold tracking-wider text-[#4b6596]">{project.type} · 三维医学影像</p>
          <h1 className="mt-3 max-w-2xl text-[clamp(1.8rem,5vw,2.6rem)] font-bold leading-tight tracking-[-.04em]">{project.title}</h1>
          <dl className="mt-5 space-y-2 text-sm leading-6 text-[var(--muted)]">
            <div className="flex gap-3"><dt className="shrink-0">项目时间</dt><dd>{project.period}</dd></div>
          </dl>
          <ul aria-label="技术栈" className="mt-5 flex flex-wrap gap-2">{project.stack.map((skill) => <li key={skill} className="rounded-md bg-[#edf1f8] px-3 py-1 text-xs text-[#4b6596]">{skill}</li>)}</ul>
          <ResearchPartners />
          <ResearchMetrics />
        </header>
        <section aria-labelledby="background" className="mt-10 grid items-center gap-6 sm:grid-cols-[1fr_160px]">
          <div><h2 id="background" className="text-xl font-bold">项目背景</h2><p className="mt-4 text-[15px] leading-7 text-[var(--muted)]">{project.background}</p></div>
          <VolumeMark className="mx-auto h-40 w-40" />
        </section>
        <section aria-labelledby="contributions" className="mt-10 border-t border-[var(--line)] pt-7">
          <h2 id="contributions" className="text-xl font-bold">个人贡献</h2>
          <div className="mt-2 divide-y divide-[var(--line)]">{project.contributions.map((item, index) => (
            <section key={item.title} className="grid gap-3 py-6 sm:grid-cols-[2.5rem_1fr] sm:gap-4">
              <span aria-hidden="true" className="text-2xl text-[#8094b5]">0{index + 1}</span>
              <div><h3 className="text-lg font-bold">{item.title}</h3><p className="mt-3 text-[15px] leading-7 text-[var(--muted)]">{item.description}</p><ul aria-label="技术要点" className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-[#4b6596]">{item.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></div>
            </section>
          ))}</div>
        </section>
        <section aria-labelledby="results" className="mt-4 rounded-2xl bg-[#edf1f8] p-5 sm:p-6">
          <h2 id="results" className="text-lg font-bold text-[#4b6596]">实验结果与评估范围</h2>
          <dl className="mt-4 divide-y divide-[#dce3ed] text-sm leading-7">
            <div className="py-3"><dt className="font-semibold">训练策略 · PUMCH 验证集</dt><dd className="mt-1 text-[var(--muted)]">LD-PGPS 将 Dice 从 0.916 提升至 0.948。</dd></div>
            <div className="py-3"><dt className="font-semibold">误检抑制 · 239 例测试 CT</dt><dd className="mt-1 text-[var(--muted)]">MA-ACV 将假阳性数量从 398 降至 13，同时保留全部 248 个真实病灶。</dd></div>
            <div className="py-3"><dt className="font-semibold">三中心 PPGL 分割</dt><dd className="mt-1 text-[var(--muted)]">三个中心的 Dice 分别为 0.9506、0.9301 和 0.9186。</dd></div>
          </dl>
        </section>
        <p className="mt-5 text-xs leading-6 text-[var(--muted)]">以上指标分别对应所述验证或测试范围，不代表临床部署效果。图标为三维影像概念示意，不对应真实患者影像或实验预测结果。</p>
        <footer className="mt-10 flex justify-between gap-3 border-t border-[var(--line)] py-6 text-xs text-[var(--muted)]"><span>何畅金 · 科研项目</span><Link href="/#ppgl-research" className="font-semibold text-[#4b6596]">返回个人主页 ↗</Link></footer>
      </article>
    </main>
  );
}
