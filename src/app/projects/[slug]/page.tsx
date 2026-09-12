import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className="page-shell min-h-screen py-16 sm:py-24">
      <Link href="/#projects" className="text-link">← 回到作品</Link>
      <p className="eyebrow mt-16">{project.eyebrow}</p>
      <h1 className="mt-5 text-[clamp(3.7rem,8vw,7rem)] font-semibold tracking-[-.09em] text-[var(--ink-strong)]">{project.name}</h1>
      <p className="mt-7 max-w-2xl text-lg leading-9 text-[var(--muted)]">{project.description}</p>
      <div className="mt-16 grid gap-14 lg:grid-cols-2"><section><p className="text-sm font-bold text-[var(--coral)]">这个系统做什么</p><ul className="mt-6 space-y-4">{project.features.map((feature) => <li key={feature} className="flex gap-3 text-sm leading-7 text-[#56646a]"><span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#efaf54]" />{feature}</li>)}</ul></section><section><p className="text-sm font-bold text-[var(--blue)]">我使用的技术</p><div className="mt-6 flex flex-wrap gap-2">{project.stack.map((skill) => <span key={skill} className="rounded-full bg-[#edf3f4] px-3 py-1.5 text-sm font-medium text-[#56646a]">{skill}</span>)}</div><p className="mt-8 text-sm leading-7 text-[var(--faint)]">更多架构、界面与实现细节将在项目材料整理完成后补充。</p></section></div>
    </main>
  );
}
