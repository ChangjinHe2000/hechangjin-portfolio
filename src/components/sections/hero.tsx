import { GithubIcon, MailIcon } from "@/components/icons";
import { RotatingWorkbench } from "@/components/hero/rotating-workbench";
import { profile } from "@/data/profile";

export function Hero() {
  const githubHref = profile.links.github ?? "#contact";
  const emailHref = profile.links.email ? `mailto:${profile.links.email}` : "#contact";

  return (
    <section id="home" className="overflow-hidden">
      <div className="page-shell grid min-h-[calc(100svh-4.65rem)] items-center gap-7 py-12 lg:grid-cols-[1.08fr_.92fr] lg:gap-12 lg:py-16">
        <div className="max-w-3xl">
          <p className="inline-flex -rotate-1 items-center rounded-full bg-[#fde7d7] px-3 py-1.5 text-xs font-bold text-[#a25741]">你好，欢迎来到我的小角落 <span className="ml-1">👋</span></p>
          <p className="mt-7 text-lg font-medium tracking-[-.03em] text-[var(--muted)]">我是 <span className="text-[var(--ink)]">{profile.name}</span>，也叫 {profile.englishName}</p>
          <h1 className="mt-3 text-[clamp(3.55rem,6.3vw,5.85rem)] font-semibold leading-[.9] tracking-[-.09em] text-[var(--ink-strong)]">我把 AI，<br /><span className="text-[var(--blue)]">做成好用的<br />软件。</span></h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg">{profile.heroDescription}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3"><a href="#projects" className="inline-flex h-11 items-center rounded-full bg-[var(--ink)] px-5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5">看看我在做什么 <span className="ml-2 text-[var(--amber)]">→</span></a><a href="#about" className="inline-flex h-11 items-center rounded-full bg-[#e9f1f5] px-5 text-sm font-bold text-[var(--blue)] transition-transform hover:-translate-y-0.5">关于我</a></div>
          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-[var(--faint)]"><span className="font-semibold text-[var(--cyan)]">AI Application Developer</span><span className="hidden h-3 w-px bg-[var(--line)] sm:block" /><a href={githubHref} title={profile.links.github ? "GitHub" : "GitHub link to be added"} className="inline-flex items-center gap-1.5 hover:text-[var(--blue)]"><GithubIcon className="h-4 w-4" />GitHub</a><a href={emailHref} title={profile.links.email ? "Email" : "Email address to be added"} className="inline-flex items-center gap-1.5 hover:text-[var(--blue)]"><MailIcon className="h-4 w-4" />Email</a></div>
        </div>
        <RotatingWorkbench />
      </div>
    </section>
  );
}
