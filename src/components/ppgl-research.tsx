import Link from "next/link";
import { ResearchPartners } from "@/components/research-partners";
import { ppglResearch as project } from "@/data/ppgl-segmentation";

export function VolumeMark({ className = "" }: { className?: string }) {
  return (
    <div role="img" aria-label="三维影像层叠图标，仅为示意，非真实 CT 或实验结果" className={`relative grid place-items-center overflow-hidden rounded-2xl bg-[#eaf0f7] ${className}`}>
      <svg viewBox="0 0 160 160" fill="none" aria-hidden="true" className="h-full w-full">
        <path d="m28 99 52-28 52 28-52 28-52-28Z" fill="#c2d0e6" stroke="#819abf" />
        <path d="m28 82 52-28 52 28-52 28-52-28Z" fill="#d6e0ef" stroke="#819abf" />
        <path d="m28 65 52-28 52 28-52 28-52-28Z" fill="#edf3fb" stroke="#819abf" />
        <path d="m61 65 19-10 19 10-19 10-19-10Z" fill="#6984b3" />
        <path d="M80 75v40" stroke="#526f9f" strokeDasharray="3 4" />
        <path d="M18 48V28h20m84 0h20v20M18 112v20h20m84 0h20v-20" stroke="#8a9db7" strokeWidth="2" />
      </svg>
      <span className="absolute bottom-1.5 text-[9px] tracking-wide text-[#577092] sm:bottom-3 sm:text-[11px]">3D CT · 示意</span>
    </div>
  );
}

export function ResearchMetrics() {
  return (
    <dl className="mt-6 grid grid-cols-3 divide-x divide-[#dce3ed] border-y border-[#dce3ed] py-5 sm:py-6">
      {project.metrics.map((metric) => <div key={metric.label} className="flex min-w-0 flex-col gap-2 px-1 text-center"><dt className="text-[10px] leading-5 text-[var(--muted)] sm:text-xs">{metric.label}</dt><dd className="order-first whitespace-nowrap text-[clamp(1.1rem,4.5vw,2rem)] font-semibold leading-none tracking-[-.04em] text-[#4b6596] tabular-nums">{metric.value}</dd></div>)}
    </dl>
  );
}

export function PpglResearchCard() {
  return (
    <Link id="ppgl-research" href="/projects/ppgl-segmentation" className="group mt-6 block scroll-mt-8 rounded-[1.75rem] border border-[#dce2eb] bg-linear-to-br from-white via-white to-[#edf1f8] p-5 shadow-[0_8px_32px_-20px_rgba(40,55,80,0.22)] transition-[border-color,box-shadow] hover:border-[#a0afc8] hover:shadow-[0_16px_44px_-20px_rgba(40,55,80,0.3)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4b6596] sm:p-8">
      <div className="text-left">
        <p className="mb-2 text-[11px] font-medium tracking-wider text-[#4b6596]">科研项目 · 三维医学影像</p>
        <h3 className="text-xl font-bold leading-snug tracking-[-.04em] sm:text-[26px]">{project.title}</h3>
        <p className="mt-3 text-xs tabular-nums text-[var(--muted)]">{project.period}</p>
      </div>
      <ResearchPartners />
      <ul aria-label="技术栈" className="mt-5 flex flex-wrap gap-2 text-[11px] font-medium text-[#4b6596]">{project.stack.map((skill) => <li key={skill} className="rounded-md bg-[#edf1f8] px-2.5 py-1">{skill}</li>)}</ul>
      <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-[15px]">{project.summary}</p>
      <ResearchMetrics />
      <p className="mt-3 text-xs leading-6 text-[var(--muted)]">误检抑制后，保留测试集全部 248 个真实病灶。</p>
      <div className="mt-4 flex items-center justify-between gap-3 text-xs"><span className="text-[var(--muted)]">从数据治理，到跨中心验证</span><span className="flex shrink-0 items-center gap-2 font-semibold text-[#4b6596]">查看研究详情 <span aria-hidden="true" className="grid h-8 w-8 place-items-center rounded-full bg-[#e3eaf4] text-base">↗</span></span></div>
    </Link>
  );
}
