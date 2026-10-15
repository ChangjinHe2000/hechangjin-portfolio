import Image from "next/image";
import { hospitalExperience } from "@/data/experience";

export function HospitalMark({ className = "h-20 w-20 sm:h-28 sm:w-28" }: { className?: string }) {
  return (
    <Image
      src="/jiangmen-central-hospital.png"
      alt="江门市中心医院大楼"
      width={516}
      height={512}
      unoptimized
      className={`shrink-0 rounded-2xl object-cover ${className}`}
    />
  );
}

export function ExperienceOutcomes() {
  return (
    <dl className="mt-6 grid grid-cols-3 divide-x divide-[#dce6e2] border-y border-[#dce6e2] py-5 sm:py-6">
      {hospitalExperience.outcomes.map((outcome) => (
        <div key={outcome.label} className="flex min-w-0 flex-col gap-2 px-1 text-center">
          <dt className="text-[10px] leading-5 text-[var(--muted)] sm:text-xs">{outcome.label}</dt>
          <dd className="order-first text-[clamp(1.15rem,4.8vw,2rem)] font-semibold leading-none tracking-[-.045em] text-[#27685f] tabular-nums">{outcome.value}</dd>
        </div>
      ))}
    </dl>
  );
}
