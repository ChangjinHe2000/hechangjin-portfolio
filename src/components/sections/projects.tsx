import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { projects } from "@/data/projects";

function ProjectArtwork() {
  return (
    <div className="relative isolate aspect-[1.28/1] overflow-hidden rounded-[2.8rem_1.4rem_2.8rem_1.4rem] bg-[#dceef7] p-7 sm:p-10">
      <div className="absolute -left-[8%] top-[16%] h-[52%] w-[49%] rounded-full bg-[#b8d6e7]" />
      <div className="absolute bottom-[-16%] right-[2%] h-[56%] w-[52%] rounded-[44%_56%_51%_49%/58%_44%_56%_42%] bg-[#f7c875]" />
      <div className="absolute right-[15%] top-[8%] h-[15%] w-[15%] rounded-full bg-[#b6a9df]" />
      <div className="absolute bottom-[17%] left-[21%] h-[12%] w-[12%] rounded-full bg-[#e98d70]" />
      <div className="absolute inset-[23%] flex rotate-[-4deg] flex-col justify-center rounded-[48%_52%_45%_55%/45%_48%_52%_55%] bg-[#fffefa] px-8 py-6 text-center shadow-[0_18px_40px_rgba(52,98,123,.12)] sm:px-12">
        <p className="text-xs font-bold tracking-[.11em] text-[var(--blue)]">FULL-STACK MEDICAL AI</p>
        <p className="mt-3 text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-none tracking-[-.08em] text-[var(--ink-strong)]">PPGL<br />Assist</p>
        <p className="mt-4 text-xs leading-5 text-[var(--muted)]">from scan → understanding → report</p>
      </div>
      <p className="absolute left-7 top-7 text-xs font-bold text-[#377aa8] sm:left-10 sm:top-10">a product case study</p>
      <p className="absolute bottom-7 right-7 text-xs font-bold text-[#796aa8] sm:bottom-10 sm:right-10">medical AI, with care</p>
    </div>
  );
}

export function Projects() {
  const project = projects[0];

  return (
    <section id="projects" className="page-shell section-space">
      <p className="eyebrow">我做过的作品</p>
      <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><h2 className="max-w-2xl text-[clamp(2.7rem,4.8vw,4.65rem)] font-semibold leading-[.98] tracking-[-.08em] text-[var(--ink-strong)]">一个值得被认真讲述的项目。</h2><p className="max-w-xs pb-1 text-sm leading-7 text-[var(--muted)]">我想展示的不是功能清单，而是如何把技术拼成一条完整的使用路径。</p></div>
      <article className="mt-12 grid items-center gap-10 lg:grid-cols-[.95fr_1.05fr] lg:gap-16">
        <ProjectArtwork />
        <div className="max-w-xl"><p className="text-sm font-bold text-[var(--coral)]">{project.eyebrow}</p><h3 className="mt-4 text-4xl font-semibold tracking-[-.07em] text-[var(--ink-strong)] sm:text-5xl">{project.name}</h3><p className="mt-5 leading-8 text-[var(--muted)]">{project.description}</p><ul className="mt-7 space-y-3 text-sm leading-6 text-[#536168]">{project.features.slice(0, 3).map((feature) => <li key={feature} className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#efaf54]" />{feature}</li>)}</ul><div className="mt-7 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full bg-[#eef3f4] px-3 py-1.5 text-xs font-semibold text-[#59686e]">{tag}</span>)}</div><Link href={`/projects/${project.slug}`} className="text-link mt-8">读这个项目的故事 <ArrowUpRight className="h-4 w-4" /></Link></div>
      </article>
    </section>
  );
}
