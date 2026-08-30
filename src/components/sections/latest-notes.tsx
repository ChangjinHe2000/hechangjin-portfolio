import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { notes } from "@/data/notes";

export function LatestNotes() {
  return (
    <section id="notes" className="border-y border-[var(--line)] bg-[var(--surface)]">
      <div className="page-shell section-space">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><SectionHeading eyebrow="06 / Notes" title="Learning in public, soon." description="AI 应用开发中的思考、踩坑与可复用的实践笔记，将逐步沉淀在这里。" /><Link href="/notes" className="text-link shrink-0">All notes <ArrowUpRight className="h-4 w-4" /></Link></div>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {notes.map((note) => (
            <article key={note.slug} className="surface-card flex min-h-60 flex-col p-6 sm:p-7"><div className="flex items-center justify-between"><span className="font-mono text-[10px] tracking-[.12em] text-[var(--cyan)]">{note.topic}</span><span className="border border-[var(--line)] px-2 py-1 text-[10px] font-medium text-[var(--faint)]">{note.state}</span></div><h3 className="mt-8 text-xl font-semibold leading-7 tracking-[-.04em] text-white">{note.title}</h3><p className="mt-3 text-sm leading-6 text-[var(--muted)]">{note.description}</p><Link href="/notes" className="text-link mt-auto pt-7">Preview <ArrowUpRight className="h-4 w-4" /></Link></article>
          ))}
        </div>
      </div>
    </section>
  );
}
