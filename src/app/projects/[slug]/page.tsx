import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return <main className="page-shell min-h-screen py-16 sm:py-24"><Link href="/#projects" className="text-link">← Selected work</Link><p className="eyebrow mt-16">{project.eyebrow}</p><h1 className="mt-5 text-5xl font-bold tracking-[-.07em] text-white sm:text-7xl">{project.name}</h1><p className="mt-7 max-w-2xl text-lg leading-9 text-[var(--muted)]">{project.description}</p><div className="mt-14 grid gap-12 border-t border-[var(--line)] pt-10 lg:grid-cols-2"><section><h2 className="text-xl font-semibold text-white">Core capabilities</h2><ul className="mt-5 space-y-4">{project.features.map((feature) => <li key={feature} className="flex gap-3 text-sm leading-6 text-[var(--muted)]"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--cyan)]" />{feature}</li>)}</ul></section><section><h2 className="text-xl font-semibold text-white">Technology</h2><div className="mt-5 flex flex-wrap gap-2">{project.stack.map((skill) => <span key={skill} className="border border-[var(--line)] px-3 py-1.5 text-sm text-[#c6d4e7]">{skill}</span>)}</div><p className="mt-8 text-sm leading-6 text-[var(--faint)]">更多架构、界面与实现细节将在项目材料整理完成后补充。</p></section></div></main>;
}
