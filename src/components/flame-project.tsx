import Link from "next/link";
import Image from "next/image";
import { flameProject as project } from "@/data/flame-detection";

export function GasCompanyLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`grid place-items-center rounded-2xl border border-[#eee5d7] bg-[#fffdf8] p-2 sm:p-4 ${className}`}>
      <Image src="/cr-gas-logo.png" alt="华润燃气 CR GAS 企业标志" width={805} height={334} unoptimized className="h-auto w-full object-contain" />
    </div>
  );
}

export function FlameProjectCard() {
  return (
    <Link id="flame-project" href="/projects/gas-flame-detection" className="group mt-6 block scroll-mt-8 rounded-[1.75rem] border border-[#e5dfd4] bg-linear-to-br from-white via-white to-[#faf4ea] p-5 shadow-[0_8px_32px_-20px_rgba(70,55,40,0.22)] transition-[border-color,box-shadow] hover:border-[#cbb48f] hover:shadow-[0_16px_44px_-20px_rgba(70,55,40,0.3)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9a6531] sm:p-8">
      <div className="flex items-start gap-4 sm:items-center sm:gap-7">
        <GasCompanyLogo className="h-24 w-24 shrink-0 sm:h-44 sm:w-44" />
        <div className="min-w-0">
          <p className="mb-2 text-[11px] font-medium tracking-wider text-[#946330]">{project.type} · 工业视觉</p>
          <h3 className="text-lg font-bold leading-snug tracking-[-.04em] text-[var(--ink-strong)] sm:text-[26px]">{project.title}</h3>
          <p className="mt-2 text-xs leading-6 text-[var(--muted)] sm:text-sm">合作企业 · {project.organization}</p>
          <p className="mt-2 text-xs tabular-nums text-[var(--muted)]">{project.period}</p>
        </div>
      </div>
      <ul aria-label="技术栈" className="mt-5 flex flex-wrap gap-2 text-[11px] font-medium text-[#88643d]">
        {project.stack.map((skill) => <li key={skill} className="rounded-md bg-[#f5eee3] px-2.5 py-1">{skill}</li>)}
      </ul>
      <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-[15px]">{project.summary}</p>
      <ol aria-label="技术工作流程" className="mt-6 grid grid-cols-3 divide-x divide-[#e6dfd2] border-y border-[#e6dfd2] py-5">
        {project.contributions.map((item, index) => <li key={item.title} className="px-1 text-center"><span className="block text-xs tabular-nums text-[#a77c4b]">0{index + 1}</span><span className="mt-2 block text-[11px] font-medium text-[#725536] sm:text-sm">{item.label}</span></li>)}
      </ol>
      <div className="mt-5 flex items-center justify-between gap-3 text-xs">
        <span className="text-[var(--muted)]">让视觉算法走进工业场景</span>
        <span className="flex shrink-0 items-center gap-2 font-semibold text-[#88643d]">查看项目详情 <span aria-hidden="true" className="grid h-8 w-8 place-items-center rounded-full bg-[#f0e7d8] text-base">↗</span></span>
      </div>
    </Link>
  );
}
