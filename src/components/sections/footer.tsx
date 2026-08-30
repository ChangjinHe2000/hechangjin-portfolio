import { GithubIcon, MailIcon } from "@/components/icons";
import { profile } from "@/data/profile";

export function Footer() {
  const githubHref = profile.links.github ?? "#contact";
  const emailHref = profile.links.email ? `mailto:${profile.links.email}` : "#contact";

  return (
    <footer id="contact" className="page-shell py-14 sm:py-20">
      <div className="flex flex-col justify-between gap-12 border-t border-[var(--line)] pt-10 lg:flex-row lg:items-end">
        <div><p className="eyebrow">07 / Contact</p><h2 className="mt-5 max-w-xl text-3xl font-semibold tracking-[-.055em] text-white sm:text-5xl">Let&apos;s build useful AI, end to end.</h2><p className="mt-5 max-w-md leading-7 text-[var(--muted)]">GitHub 和邮箱链接将在确认后补充到这里。欢迎通过简历或其他已知渠道与我联系。</p></div>
        <div className="flex gap-3"><a href={githubHref} title={profile.links.github ? "GitHub" : "GitHub link to be added"} className="inline-flex h-10 items-center gap-2 border border-[var(--line)] px-4 text-sm text-[var(--faint)] transition-colors hover:border-[var(--blue)] hover:text-white"><GithubIcon className="h-4 w-4" />GitHub</a><a href={emailHref} title={profile.links.email ? "Email" : "Email address to be added"} className="inline-flex h-10 items-center gap-2 border border-[var(--line)] px-4 text-sm text-[var(--faint)] transition-colors hover:border-[var(--blue)] hover:text-white"><MailIcon className="h-4 w-4" />Email</a></div>
      </div>
      <div className="mt-14 flex flex-col justify-between gap-3 text-xs text-[var(--faint)] sm:flex-row"><p>© {new Date().getFullYear()} {profile.englishName}</p><p>Built with Next.js · Deployed on Vercel</p></div>
    </footer>
  );
}
