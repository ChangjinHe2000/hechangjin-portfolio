import { GithubIcon, MailIcon } from "@/components/icons";
import { profile } from "@/data/profile";

const navigation = [
  { label: "作品", href: "#projects" },
  { label: "关于我", href: "#about" },
  { label: "经历", href: "#experience" },
  { label: "笔记", href: "#notes" },
];

export function Navbar() {
  const githubHref = profile.links.github ?? "#contact";
  const emailHref = profile.links.email ? `mailto:${profile.links.email}` : "#contact";

  return (
    <header className="relative z-40 bg-[var(--canvas)]">
      <div className="page-shell flex h-[4.65rem] items-center justify-between gap-5">
        <a href="#home" className="inline-flex items-center gap-2 text-sm font-bold tracking-[-.045em] text-[var(--ink-strong)]" aria-label="Back to home">
          <span className="grid h-7 w-7 place-items-center rounded-[.65rem] bg-[var(--ink)] text-xs text-white">C</span>
          Changjin He
        </a>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
          {navigation.map((item) => <a key={item.href} href={item.href} className="text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--blue)]">{item.label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <a href={githubHref} title={profile.links.github ? "GitHub" : "GitHub link to be added"} className="grid h-8 w-8 place-items-center rounded-full bg-[#eef2f3] text-[var(--muted)] transition-transform hover:-translate-y-0.5 hover:text-[var(--blue)]" aria-label="GitHub"><GithubIcon className="h-3.5 w-3.5" /></a>
          <a href={emailHref} title={profile.links.email ? "Email" : "Email address to be added"} className="grid h-8 w-8 place-items-center rounded-full bg-[#eef2f3] text-[var(--muted)] transition-transform hover:-translate-y-0.5 hover:text-[var(--blue)]" aria-label="Email"><MailIcon className="h-3.5 w-3.5" /></a>
        </div>
      </div>
    </header>
  );
}
