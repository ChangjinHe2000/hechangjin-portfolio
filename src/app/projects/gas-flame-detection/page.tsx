import type { Metadata } from "next";
import Link from "next/link";
import { GasCompanyLogo } from "@/components/flame-project";
import { flameProject as project } from "@/data/flame-detection";

export const metadata: Metadata = {
  title: `${project.title} | 何畅金`,
  description: project.summary,
};

export default function FlameProjectPage() {
  return (
    <main className="page-shell py-8 sm:py-12">
      <article className="mx-auto max-w-[52rem]">
        <Link href="/#flame-project" className="text-link">← 返回项目经历</Link>
        <header className="mt-10 sm:mt-14">
          <p className="text-xs font-semibold tracking-wider text-[#946330]">{project.type} · {project.focus.join(" / ")}</p>
          <h1 className="mt-3 max-w-2xl text-[clamp(1.8rem,5vw,2.6rem)] font-bold leading-tight tracking-[-.04em]">{project.title}</h1>
          <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-2 text-sm text-[var(--muted)]">
            <div className="flex gap-3"><dt>合作企业</dt><dd>{project.organization}</dd></div>
            <div className="flex gap-3"><dt>项目时间</dt><dd>{project.period}</dd></div>
          </dl>
          <ul aria-label="技术栈" className="mt-5 flex flex-wrap gap-2">{project.stack.map((skill) => <li key={skill} className="rounded-md bg-[#f5eee3] px-3 py-1 text-xs text-[#88643d]">{skill}</li>)}</ul>
        </header>
        <section aria-labelledby="background" className="mt-10 grid items-start gap-6 sm:grid-cols-[1fr_200px]">
          <div>
            <h2 id="background" className="text-xl font-bold">项目背景</h2>
            <div className="mt-4 space-y-3 text-[15px] leading-7 text-[var(--muted)]">{project.background.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          </div>
          <GasCompanyLogo className="mx-auto h-48 w-48 sm:h-[200px] sm:w-[200px]" />
        </section>
        <section aria-labelledby="work" className="mt-10 border-t border-[var(--line)] pt-7">
          <h2 id="work" className="text-xl font-bold">个人职责与技术工作</h2>
          <div className="mt-2 divide-y divide-[var(--line)]">{project.contributions.map((item, index) => (
            <section key={item.title} className="grid gap-3 py-6 sm:grid-cols-[2.5rem_1fr] sm:gap-4">
              <span aria-hidden="true" className="text-2xl text-[#ad8960]">0{index + 1}</span>
              <div><h3 className="text-lg font-bold">{item.title}</h3><p className="mt-3 text-[15px] leading-7 text-[var(--muted)]">{item.description}</p></div>
            </section>
          ))}</div>
        </section>
        <section aria-labelledby="result" className="mt-4 rounded-2xl bg-[#f5eee3] p-6">
          <h2 id="result" className="text-lg font-bold text-[#88643d]">项目成果</h2>
          <p className="mt-3 text-[15px] leading-7 text-[var(--muted)]">{project.result}</p>
        </section>
        <p className="mt-5 text-xs leading-6 text-[var(--muted)]">企业标志仅用于标识项目合作企业。项目面向可见火焰检测，不等同于燃气泄漏检测。</p>
        <footer className="mt-10 flex justify-between gap-3 border-t border-[var(--line)] py-6 text-xs text-[var(--muted)]"><span>何畅金 · 项目经历</span><Link href="/#flame-project" className="font-semibold text-[#88643d]">返回个人主页 ↗</Link></footer>
      </article>
    </main>
  );
}
