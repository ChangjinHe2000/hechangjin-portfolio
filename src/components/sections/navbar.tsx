import { GithubIcon, MailIcon } from "@/components/icons";
import { profile } from "@/data/profile";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Notes", href: "#notes" },
  { label: "Experience", href: "#experience" },
  { label: "Research", href: "#research" },
];

export function Navbar() {
  const githubHref = profile.links.github ?? "#contact";
  const emailHref = profile.links.email ? `mailto:${profile.links.email}` : "#contact";

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[rgba(7,11,18,.86)] backdrop-blur-md">
      <div className="page-shell flex h-16 items-center justify-between gap-5">
        <a href="#home" className="shrink-0 text-sm font-bold tracking-[-.04em] text-white" aria-label="Back to home">
          CJ<span className="text-[var(--cyan)]">.</span>
        </a>
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="text-xs font-medium text-[var(--muted)] transition-colors hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={githubHref} title={profile.links.github ? "GitHub" : "GitHub link to be added"} className="grid h-8 w-8 place-items-center rounded-full border border-[var(--line)] text-[var(--muted)] transition-colors hover:border-[var(--blue)] hover:text-white" aria-label="GitHub">
            <GithubIcon className="h-3.5 w-3.5" />
          </a>
          <a href={emailHref} title={profile.links.email ? "Email" : "Email address to be added"} className="grid h-8 w-8 place-items-center rounded-full border border-[var(--line)] text-[var(--muted)] transition-colors hover:border-[var(--blue)] hover:text-white" aria-label="Email">
            <MailIcon className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
