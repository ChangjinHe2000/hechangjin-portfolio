import type { Metadata } from "next";
import Link from "next/link";
import { ExperienceOutcomes, HospitalMark } from "@/components/experience-summary";
import { hospitalExperience as experience } from "@/data/experience";

export const metadata: Metadata = {
  title: "江门市中心医院 · 实习经历 | 何畅金",
  description: experience.summary,
  openGraph: {
    title: "江门市中心医院｜医学影像数据与 AI 研发实习",
    description: experience.summary,
    type: "article",
  },
};

export default function HospitalExperiencePage() {
  return (
    <main className="page-shell py-8 sm:py-12">
      <article className="mx-auto max-w-[52rem]">
        <Link href="/#experience" className="text-link rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4">← 返回实习经历</Link>
        <header className="mt-10 sm:mt-14">
          <div className="flex items-center gap-4 sm:gap-6">
            <HospitalMark />
            <div>
              <p className="text-xs font-semibold tracking-wider text-[var(--cyan)]">驻院科研 · 临床数据 · AI 研发</p>
              <h1 className="mt-2 text-[clamp(1.6rem,5vw,2.5rem)] font-bold tracking-[-.05em] text-[var(--ink-strong)]">{experience.organization}</h1>
            </div>
          </div>
          <p className="mt-5 text-lg font-medium text-[var(--ink)] sm:text-xl">{experience.role}</p>
          <dl className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-sm text-[var(--muted)]">
            <div className="flex gap-3"><dt>实习时间</dt><dd className="tabular-nums">{experience.period}</dd></div>
            <div className="flex gap-3"><dt>实习部门</dt><dd>{experience.organization} · {experience.department}</dd></div>
          </dl>
          <p className="mt-3 text-sm leading-6 text-[var(--blue)]">{experience.focus.join(" / ")}</p>
          <ExperienceOutcomes />
        </header>

        <section aria-labelledby="overview" className="mt-10">
          <h2 id="overview" className="text-xl font-bold tracking-[-.03em]">实习概述</h2>
          <div className="mt-4 space-y-3 text-[15px] leading-7 text-[var(--muted)]">
            {experience.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <ul aria-label="技术栈" className="mt-5 flex flex-wrap gap-2">
            {experience.stack.map((skill) => <li key={skill} className="rounded-full bg-[#edf2f3] px-3 py-1 text-xs font-medium text-[#536168]">{skill}</li>)}
          </ul>
        </section>

        <nav aria-label="个人贡献章节" className="mt-10 border-y border-[var(--line)] py-4">
          <ol className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {experience.contributions.map((item, index) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="flex items-center gap-2 rounded-md px-2 py-2 text-sm hover:bg-[#edf2f3] focus-visible:outline-2 focus-visible:outline-[var(--cyan)]">
                  <span className="text-xs font-bold text-[var(--cyan)]">0{index + 1}</span>{item.shortTitle}<span aria-hidden="true" className="ml-auto text-[var(--faint)]">↓</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <section aria-labelledby="contributions" className="mt-10">
          <h2 id="contributions" className="text-xl font-bold tracking-[-.03em]">主要工作与个人贡献</h2>
          <div className="mt-2 divide-y divide-[var(--line)]">
            {experience.contributions.map((item, index) => (
              <section key={item.id} id={item.id} className="grid scroll-mt-8 gap-3 py-7 sm:grid-cols-[2.5rem_1fr] sm:gap-4">
                <span aria-hidden="true" className="text-2xl font-medium text-[#8badab]">0{index + 1}</span>
                <div className="min-w-0">
                  <h3 className="text-lg font-bold tracking-[-.025em]">{item.title}</h3>
                  <div className="mt-3 space-y-3 text-[15px] leading-7 text-[var(--muted)]">
                    {item.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                  <ul aria-label="工作要点" className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-[var(--cyan)]">
                    {item.keywords.map((keyword) => <li key={keyword}>{keyword}</li>)}
                  </ul>
                </div>
              </section>
            ))}
          </div>
        </section>

        <section aria-labelledby="results" className="mt-4 border-t border-[var(--line)] pt-7">
          <h2 id="results" className="text-xl font-bold tracking-[-.03em]">项目成果</h2>
          <p className="mt-3 text-[15px] leading-7 text-[var(--muted)]">从约 34,000 例原始候选患者数据中，整理出 1400 余例有效研究病例，其中约 1000 例成功匹配有效临床指标，为后续影像分析与机器学习建模提供数据基础。</p>
          <div className="mt-6 border-l-2 border-[var(--cyan)] bg-[#f0f5f3] px-5 py-5">
            <h3 className="text-sm font-bold text-[var(--cyan)]">个人收获</h3>
            <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{experience.learning}</p>
          </div>
        </section>
        <footer className="mt-10 flex flex-wrap justify-between gap-3 border-t border-[var(--line)] py-6 text-xs text-[var(--muted)]">
          <span>何畅金 · 实习经历</span>
          <Link href="/#experience" className="font-semibold text-[var(--blue)]">返回个人主页 ↗</Link>
        </footer>
      </article>
    </main>
  );
}
