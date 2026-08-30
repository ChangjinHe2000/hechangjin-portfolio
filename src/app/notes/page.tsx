import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { notes } from "@/data/notes";

export const metadata = { title: "Notes | 何畅金" };

export default function NotesPage() {
  return <main className="page-shell min-h-screen py-16 sm:py-24"><Link href="/" className="text-link">← Home</Link><p className="eyebrow mt-16">Notes / archive</p><h1 className="section-title">Notes in progress.</h1><p className="section-intro">这里已为 Markdown / MDX 内容准备好路由与数据结构。下面的主题仍是草稿，文章发布后会以独立页面呈现。</p><div className="mt-14 divide-y divide-[var(--line)] border-y border-[var(--line)]">{notes.map((note, index) => <article key={note.slug} className="grid gap-4 py-7 sm:grid-cols-[3rem_1fr_auto] sm:items-center"><span className="font-mono text-xs text-[var(--faint)]">0{index + 1}</span><div><p className="font-mono text-[10px] tracking-[.12em] text-[var(--cyan)]">{note.topic} / {note.state}</p><h2 className="mt-2 text-xl font-medium text-white">{note.title}</h2><p className="mt-2 text-sm leading-6 text-[var(--muted)]">{note.description}</p></div><span className="text-link text-[var(--faint)]">Coming soon <ArrowUpRight className="h-4 w-4" /></span></article>)}</div></main>;
}
