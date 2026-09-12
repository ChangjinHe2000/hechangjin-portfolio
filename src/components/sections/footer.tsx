import { ArrowUpRight, GithubIcon, MailIcon } from "@/components/icons";
import { profile } from "@/data/profile";

export function Footer() {
  const githubHref = profile.links.github ?? "#contact";
  const emailHref = profile.links.email ? `mailto:${profile.links.email}` : "#contact";

  return (
    <footer id="contact" className="bg-[#d7ebf6]">
      <div className="page-shell py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end"><div><p className="inline-flex rounded-full bg-[#fffaf2] px-3 py-1.5 text-xs font-bold text-[var(--blue)]">一起做点有用的东西吧</p><h2 className="mt-6 max-w-2xl text-[clamp(3rem,5.3vw,5.4rem)] font-semibold leading-[.93] tracking-[-.09em] text-[var(--ink-strong)]">Let&apos;s build<br />something useful.</h2><p className="mt-6 max-w-xl leading-8 text-[#50656e]">如果你也相信 AI 的价值来自真实的产品体验，欢迎来聊聊。</p></div><div className="flex flex-wrap gap-3 lg:justify-end"><a href={githubHref} title={profile.links.github ? "GitHub" : "GitHub link to be added"} className="inline-flex h-11 items-center gap-2 rounded-full bg-[#fffaf2] px-5 text-sm font-bold text-[var(--ink-strong)] transition-transform hover:-translate-y-0.5"><GithubIcon className="h-4 w-4" />GitHub <ArrowUpRight className="h-4 w-4 text-[var(--blue)]" /></a><a href={emailHref} title={profile.links.email ? "Email" : "Email address to be added"} className="inline-flex h-11 items-center gap-2 rounded-full bg-[#fffaf2] px-5 text-sm font-bold text-[var(--ink-strong)] transition-transform hover:-translate-y-0.5"><MailIcon className="h-4 w-4" />Email <ArrowUpRight className="h-4 w-4 text-[var(--blue)]" /></a></div></div>
        <div className="mt-16 flex flex-col justify-between gap-2 text-xs text-[#6d8088] sm:flex-row"><p>© {new Date().getFullYear()} {profile.englishName}</p><p>Made with curiosity · Static & Cloudflare Pages ready</p></div>
      </div>
    </footer>
  );
}
