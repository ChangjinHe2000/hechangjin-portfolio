import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="page-shell section-space grid-rule grid gap-12 lg:grid-cols-[.78fr_1.22fr] lg:gap-24">
      <SectionHeading eyebrow="01 / About" title="Engineering AI systems people can actually use." />
      <div className="pt-1">
        <p className="text-lg leading-9 text-[var(--muted)] sm:text-xl">{profile.about}</p>
        <div className="mt-9 grid grid-cols-2 gap-px border border-[var(--line)] bg-[var(--line)] sm:grid-cols-4">
          {profile.focus.map((item) => <div key={item} className="bg-[var(--canvas)] px-4 py-4 text-sm font-medium text-[#cad7e9]">{item}</div>)}
        </div>
      </div>
    </section>
  );
}
