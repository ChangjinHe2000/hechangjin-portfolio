import Image from "next/image";

import { profile } from "@/data/profile";

const focusColors = ["bg-[#dcedf7] text-[#2c6e9f]", "bg-[#fbe4b7] text-[#9b681b]", "bg-[#d9eedf] text-[#2f7868]"];

export function About() {
  return (
    <section id="about" className="bg-[#f1f6f7]">
      <div className="page-shell section-space grid gap-12 lg:grid-cols-[.78fr_1.22fr] lg:gap-20">
        <div><p className="eyebrow">一点关于我</p><h2 className="mt-5 max-w-sm text-[clamp(2.45rem,4.3vw,4.15rem)] font-semibold leading-[1.04] tracking-[-.07em] text-[var(--ink-strong)]">我在意 AI 被人真正使用的那一刻。</h2><div className="mt-9 w-40 rotate-[-3deg] overflow-hidden rounded-[45%_55%_47%_53%/48%_45%_55%_52%] bg-[#fffefb] shadow-[0_18px_35px_rgba(50,67,75,.13)]"><Image src="/avatar.jpg" alt="何畅金" width={1794} height={1876} unoptimized sizes="10rem" className="h-auto w-full" /></div></div>
        <div className="max-w-2xl"><p className="text-lg leading-9 tracking-[-.02em] text-[#4f5b61] sm:text-xl sm:leading-10">{profile.about}</p><p className="mt-7 text-sm leading-7 text-[var(--muted)]">相比只展示一个模型结果，我更喜欢把它放进真实使用路径：看数据如何流动、服务如何稳定、界面是否让人愿意使用。</p><div className="mt-10 flex flex-wrap gap-2.5">{profile.focus.map((item, index) => <span key={item} className={`rounded-full px-4 py-2 text-sm font-semibold ${focusColors[index % focusColors.length]}`}>{item}</span>)}</div></div>
      </div>
    </section>
  );
}
