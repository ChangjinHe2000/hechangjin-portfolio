import Image from "next/image";
import Link from "next/link";
import { MriPartners } from "@/components/mri-partners";
import { mriProject as project } from "@/data/mri-classification";

export function MriMetrics() {
  return (
    <dl className="mt-6 grid grid-cols-3 divide-x divide-[#e5dfee] border-y border-[#e5dfee] py-5 sm:py-6">
      {project.metrics.map((metric) => (
        <div key={metric.label} className="flex min-w-0 flex-col gap-2 px-2 text-center">
          <dt className="text-[10px] leading-5 text-[var(--muted)] sm:text-xs">{metric.label}</dt>
          <dd className="order-first text-[clamp(1.4rem,5vw,2rem)] font-semibold leading-none tracking-[-.04em] text-[#76618d] tabular-nums">{metric.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function MriProjectCard() {
  return (
    <Link id="mri-project" href="/projects/mri-classification" className="group mt-6 block scroll-mt-8 rounded-[1.75rem] border border-[#e5dfee] bg-linear-to-br from-white via-white to-[#f3eff8] p-5 shadow-[0_8px_32px_-20px_rgba(80,55,100,0.22)] transition-[border-color,box-shadow] hover:border-[#b7a6cb] hover:shadow-[0_16px_44px_-20px_rgba(80,55,100,0.3)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#76618d] sm:p-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
        <figure className="w-40 shrink-0 sm:w-44">
          <Image src="/mri-sequences-illustration.png" alt="不同 MRI 序列的影像示意，非本项目患者数据" width={685} height={488} unoptimized className="h-auto w-full rounded-xl bg-black object-contain" />
          <figcaption className="mt-2 text-[10px] leading-4 text-[var(--muted)]">MRI 示意图，非本项目数据</figcaption>
        </figure>
        <div className="min-w-0">
          <p className="mb-2 text-[11px] font-medium tracking-wider text-[#76618d]">{project.type} · 多模态医学影像</p>
          <h3 className="text-xl font-bold leading-snug tracking-[-.04em] sm:text-[25px]">{project.title}</h3>
          <p className="mt-3 text-xs tabular-nums text-[var(--muted)]">{project.period}</p>
        </div>
      </div>
      <MriPartners />
      <ul aria-label="技术栈" className="mt-5 flex flex-wrap gap-2 text-[11px] font-medium text-[#76618d]">{project.stack.map((skill) => <li key={skill} className="rounded-md bg-[#f0ebf6] px-2.5 py-1">{skill}</li>)}</ul>
      <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-[15px]">{project.summary}</p>
      <MriMetrics />
      <div className="mt-5 flex items-center justify-between gap-3 text-xs"><span className="text-[var(--muted)]">从标注质量，到特征融合</span><span className="flex shrink-0 items-center gap-2 font-semibold text-[#76618d]">查看项目详情 <span aria-hidden="true" className="grid h-8 w-8 place-items-center rounded-full bg-[#eae3f2] text-base">↗</span></span></div>
    </Link>
  );
}
