import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { notes } from "@/data/notes";

export function LatestNotes() {
  return (
    <section id="notes" className="page-shell section-space">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"><div><p className="eyebrow">写下来的学习</p><h2 className="mt-5 text-[clamp(2.45rem,4.3vw,4.15rem)] font-semibold leading-[1.03] tracking-[-.075em] text-[var(--ink-strong)]">一些正在生长的笔记。</h2><p className="mt-5 max-w-xl leading-8 text-[var(--muted)]">关于 RAG、Agent、模型服务与构建 AI 产品时的思考，会慢慢留在这里。</p></div><Link href="/notes" className="text-link shrink-0">全部笔记 <ArrowUpRight className="h-4 w-4" /></Link></div>
      <div className="mt-10 divide-y divide-[var(--line)]">{notes.map((note) => <article key={note.slug} className="group py-5 first:pt-0 sm:flex sm:items-start sm:justify-between sm:gap-10"><div><p className="text-xs font-bold text-[var(--coral)]">{note.topic} <span className="font-medium text-[var(--faint)]">· {note.state}</span></p><h3 className="mt-2 text-xl font-semibold tracking-[-.04em] text-[var(--ink-strong)]">{note.title}</h3><p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--muted)]">{note.description}</p></div><Link href={`/notes/${note.slug}`} className="text-link mt-4 shrink-0 sm:mt-1">打开 <ArrowUpRight className="h-4 w-4" /></Link></article>)}</div>
    </section>
  );
}
