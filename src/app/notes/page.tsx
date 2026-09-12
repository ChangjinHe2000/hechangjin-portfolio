import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { notes } from "@/data/notes";

export const metadata = { title: "Notes | 何畅金" };

export default function NotesPage() {
  return (
    <main className="page-shell min-h-screen py-16 sm:py-24">
      <Link href="/" className="text-link">← 首页</Link>
      <p className="eyebrow mt-16">笔记本</p>
      <h1 className="section-title">学习，还在发生。</h1>
      <p className="section-intro">这里已经为 Markdown / MDX 内容准备好路由与数据结构。以下主题仍是草稿，文章发布后会以独立页面呈现。</p>
      <div className="mt-14 divide-y divide-[var(--line)]">{notes.map((note) => <article key={note.slug} className="group py-6 first:pt-0 sm:flex sm:items-start sm:justify-between sm:gap-8"><div><p className="text-xs font-bold text-[var(--coral)]">{note.topic} <span className="font-medium text-[var(--faint)]">· {note.state}</span></p><h2 className="mt-2 text-xl font-semibold tracking-[-.035em] text-[var(--ink-strong)]">{note.title}</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--muted)]">{note.description}</p></div><Link href={`/notes/${note.slug}`} className="text-link mt-4 shrink-0 sm:mt-1">打开 <ArrowUpRight className="h-4 w-4" /></Link></article>)}</div>
    </main>
  );
}
