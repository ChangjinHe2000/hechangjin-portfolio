import Link from "next/link";
import { ArrowRight, ArrowUpRight, GithubIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="border-y border-[var(--line)] bg-[var(--surface)]">
      <div className="page-shell section-space">
        <SectionHeading eyebrow="02 / Selected work" title="From AI capability to complete application." description="围绕真实工作流设计：模型、知识、服务和界面不是彼此孤立的部分，而是一个完整系统。" />
        <div className="mt-12 grid gap-5">
          {projects.map((project, index) => (
            <article key={project.slug} className="surface-card group grid overflow-hidden lg:grid-cols-[1.35fr_.65fr]">
              <div className="p-7 sm:p-10">
                <div className="flex items-center justify-between gap-4"><p className="font-mono text-xs tracking-[.14em] text-[var(--cyan)]">0{index + 1} / {project.status}</p><span className="h-2 w-2 rounded-full bg-[var(--cyan)]" /></div>
                <p className="mt-10 text-xs font-semibold uppercase tracking-[.12em] text-[var(--blue)]">{project.eyebrow}</p>
                <h3 className="mt-3 text-3xl font-bold tracking-[-.055em] text-white sm:text-4xl">{project.name}</h3>
                <p className="mt-5 max-w-xl leading-8 text-[var(--muted)]">{project.description}</p>
                <div className="mt-7 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="border border-[var(--line)] px-2.5 py-1 text-xs text-[#b6c5d9]">{tag}</span>)}</div>
                <div className="mt-9 flex flex-wrap items-center gap-5"><Link href={`/projects/${project.slug}`} className="text-link">Project details <ArrowUpRight className="h-4 w-4" /></Link><span title="GitHub link to be added" className="inline-flex cursor-default items-center gap-2 text-sm font-medium text-[var(--faint)]"><GithubIcon className="h-4 w-4" />GitHub / coming soon</span></div>
              </div>
              <div className="relative min-h-52 border-t border-[var(--line)] bg-[#0b1321] p-7 lg:border-l lg:border-t-0 sm:p-10">
                <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(90deg,rgba(121,173,255,.08)_1px,transparent_1px),linear-gradient(rgba(121,173,255,.08)_1px,transparent_1px)] [background-size:32px_32px]" />
                <div className="relative flex h-full flex-col justify-between"><span className="w-fit border border-[rgba(87,212,209,.3)] bg-[rgba(87,212,209,.06)] px-2 py-1 font-mono text-[10px] tracking-[.12em] text-[var(--cyan)]">SYSTEM OVERVIEW</span><div><p className="font-mono text-xs leading-7 text-[var(--muted)]">IMAGING → AI → REPORTING<br />KNOWLEDGE → ANSWER</p><div className="mt-4 h-px w-full bg-[var(--line)]" /><div className="mt-4 flex justify-end"><ArrowRight className="h-6 w-6 text-[var(--blue)]" /></div></div></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
