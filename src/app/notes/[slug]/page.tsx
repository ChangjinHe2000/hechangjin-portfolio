import Link from "next/link";
import { notFound } from "next/navigation";
import { notes } from "@/data/notes";

type NotePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return notes.map(({ slug }) => ({ slug }));
}

export default async function NotePage({ params }: NotePageProps) {
  const { slug } = await params;
  const note = notes.find((item) => item.slug === slug);
  if (!note) notFound();

  return (
    <main className="page-shell min-h-screen py-16 sm:py-24">
      <Link href="/notes" className="text-link">← 全部笔记</Link>
      <p className="eyebrow mt-16">{note.topic} / {note.state}</p>
      <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-.06em] text-[var(--ink-strong)] sm:text-6xl">{note.title}</h1>
      <p className="mt-7 max-w-2xl text-lg leading-9 text-[var(--muted)]">{note.description}</p>
      <div className="mt-14 border-t border-[var(--line)] pt-8 text-sm leading-7 text-[var(--faint)]">这是一篇待发布的笔记占位页。后续接入 Markdown / MDX 后，可将文章正文、发布时间、标签与目录放在这里。</div>
    </main>
  );
}
