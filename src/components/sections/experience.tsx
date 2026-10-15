import Link from "next/link";
import { ExperienceOutcomes, HospitalMark } from "@/components/experience-summary";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="page-shell scroll-mt-6 py-10 sm:py-14">
      <div className="mx-auto max-w-[48rem]">
        <h2 id="experience-heading" className="eyebrow">实习经历</h2>
        {experiences.map((experience) => (
          <Link
            key={experience.slug}
            href={`/experience/${experience.slug}`}
            className="group mt-5 block overflow-hidden rounded-[1.75rem] border border-[#dce4df] bg-linear-to-br from-white via-white to-[#f2f6f2] p-5 shadow-[0_8px_32px_-20px_rgba(40,70,60,0.22)] transition-[border-color,box-shadow] duration-300 hover:border-[#a2bfb5] hover:shadow-[0_16px_44px_-20px_rgba(40,70,60,0.3)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--cyan)] sm:p-8"
          >
            <div className="flex items-start gap-4 sm:items-center sm:gap-7">
              <HospitalMark className="h-24 w-24 shadow-sm sm:h-44 sm:w-44" />
              <div className="min-w-0">
                <p className="mb-2 text-[11px] font-medium tracking-wider text-[var(--cyan)]">{experience.department} · 驻院科研</p>
                <h3 className="text-xl font-bold tracking-[-.04em] text-[var(--ink-strong)] sm:text-[28px]">{experience.organization}</h3>
                <p className="mt-2 text-xs leading-6 text-[var(--ink)] sm:text-[15px]">{experience.role}</p>
                <p className="mt-2 text-xs tabular-nums text-[var(--muted)]">{experience.period}</p>
                <ul className="mt-4 hidden flex-wrap gap-2 text-[11px] font-medium text-[#507269] sm:flex" aria-label="技术方向">
                  {experience.tags.map((tag) => <li key={tag} className="rounded-md bg-[#edf3ef] px-2.5 py-1">{tag}</li>)}
                </ul>
              </div>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2 text-[11px] font-medium text-[#507269] sm:hidden" aria-label="技术方向">
              {experience.tags.map((tag) => <li key={tag} className="rounded-md bg-[#edf3ef] px-2.5 py-1">{tag}</li>)}
            </ul>
            <p className="mt-5 text-sm leading-7 text-[var(--muted)] sm:text-[15px]">{experience.summary}</p>
            <ExperienceOutcomes />
            <div className="mt-5 flex items-center justify-between gap-3 text-xs">
              <span className="text-[var(--muted)]">从临床问题，到 AI 实践</span>
              <span className="flex shrink-0 items-center gap-2 font-semibold text-[#27685f]">查看完整经历 <span aria-hidden="true" className="grid h-8 w-8 place-items-center rounded-full bg-[#e6eee8] text-base transition-colors group-hover:bg-[#d5e6db]">↗</span></span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
