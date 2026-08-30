import { GithubIcon, MailIcon } from "@/components/icons";
import { profile } from "@/data/profile";

function AbstractSystem() {
  return (
    <div className="relative mx-auto hidden aspect-square w-full max-w-[28rem] lg:block" aria-hidden="true">
      <div className="absolute inset-[4%] border border-[rgba(121,173,255,.22)]" />
      <div className="absolute inset-[13%] border border-[rgba(87,212,209,.18)]" />
      <div className="absolute inset-[22%] border border-[rgba(121,173,255,.25)]" />
      <div className="absolute inset-[31%] border border-[rgba(87,212,209,.22)]" />
      <div className="absolute inset-[39%] bg-[var(--surface-raised)] shadow-[0_0_0_1px_rgba(121,173,255,.34),0_25px_70px_rgba(43,93,169,.18)]" />
      <div className="absolute left-[48%] top-[48%] h-[5%] w-[5%] rounded-full bg-[var(--cyan)] shadow-[0_0_30px_rgba(87,212,209,.85)]" />
      <div className="absolute right-[4%] top-[20%] flex items-center gap-2 bg-[var(--canvas)] px-3 py-2 font-mono text-[10px] tracking-[.12em] text-[var(--muted)]"><span className="h-1.5 w-1.5 rounded-full bg-[var(--cyan)]" />SYSTEMS</div>
      <div className="absolute bottom-[12%] left-[0%] bg-[var(--canvas)] px-3 py-2 font-mono text-[10px] tracking-[.12em] text-[var(--muted)]">MODEL × PRODUCT</div>
    </div>
  );
}

export function Hero() {
  const githubHref = profile.links.github ?? "#contact";
  const emailHref = profile.links.email ? `mailto:${profile.links.email}` : "#contact";

  return (
    <section id="home" className="relative overflow-hidden border-b border-[var(--line)]">
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(157,181,214,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(157,181,214,.06)_1px,transparent_1px)] [background-size:44px_44px]" aria-hidden="true" />
      <div className="page-shell relative grid min-h-[calc(100svh-4rem)] items-center gap-12 py-20 lg:grid-cols-[1.15fr_.85fr] lg:py-24">
        <div className="max-w-3xl">
          <p className="eyebrow">Available for AI application roles</p>
          <p className="mt-8 text-[clamp(1rem,1.4vw,1.25rem)] font-medium tracking-[-.03em] text-[var(--muted)]">Hi, I&apos;m</p>
          <h1 className="mt-2 text-[clamp(4rem,9vw,7.5rem)] font-bold leading-[.84] tracking-[-.085em] text-white">{profile.name}</h1>
          <p className="mt-5 text-[clamp(1.45rem,3vw,2.25rem)] font-medium tracking-[-.055em] text-[var(--blue)]">{profile.englishName}</p>
          <div className="mt-9 flex items-center gap-3">
            <span className="h-px w-9 bg-[var(--cyan)]" />
            <p className="font-mono text-sm font-semibold tracking-[.08em] text-[var(--cyan)]">{profile.role}</p>
          </div>
          <p className="mt-6 max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg">{profile.heroDescription}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex h-11 items-center justify-center bg-[var(--blue)] px-5 text-sm font-bold text-[#08101e] transition-colors hover:bg-[#a0c4ff]">View Projects <span className="ml-2">↗</span></a>
            <a href="#about" className="inline-flex h-11 items-center justify-center border border-[var(--line)] px-5 text-sm font-semibold text-white transition-colors hover:border-[var(--blue)] hover:bg-[rgba(121,173,255,.08)]">About Me</a>
          </div>
          <div className="mt-11 flex items-center gap-4 text-xs text-[var(--faint)]">
            <a href={githubHref} title={profile.links.github ? "GitHub" : "GitHub link to be added"} className="inline-flex items-center gap-2 transition-colors hover:text-white"><GithubIcon className="h-4 w-4" />GitHub {!profile.links.github ? <span className="text-[var(--faint)]">/ coming soon</span> : null}</a>
            <span className="h-3 w-px bg-[var(--line)]" />
            <a href={emailHref} title={profile.links.email ? "Email" : "Email address to be added"} className="inline-flex items-center gap-2 transition-colors hover:text-white"><MailIcon className="h-4 w-4" />Email {!profile.links.email ? <span className="text-[var(--faint)]">/ coming soon</span> : null}</a>
          </div>
        </div>
        <AbstractSystem />
      </div>
      <a href="#about" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[10px] font-mono tracking-[.15em] text-[var(--faint)] transition-colors hover:text-white lg:flex">SCROLL <span>↓</span></a>
    </section>
  );
}
