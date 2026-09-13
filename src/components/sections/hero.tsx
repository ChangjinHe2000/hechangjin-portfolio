import Image from "next/image";

import { RotatingWorkbench } from "@/components/hero/rotating-workbench";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section id="home" className="pb-8 sm:pb-12">
      <div className="page-shell">
        <div className="mx-auto w-full max-w-[15rem] pt-0 min-[375px]:max-w-[16rem] sm:max-w-[18rem] sm:pt-2">
          <RotatingWorkbench />
        </div>

        <article id="about" className="mx-auto max-w-[48rem] scroll-mt-6">
          <p className="inline-flex items-center rounded-full bg-[#f3eee7] px-3 py-1.5 text-xs font-medium tracking-[-.025em] text-[#4f555b]">
            你好，欢迎来到我的小角落 <span aria-hidden="true">👋</span>
          </p>

          <div className="mt-2 flex flex-col gap-3 lg:mt-3 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            <div className="flex w-fit min-w-0 items-start gap-2.5 sm:gap-4">
              <div className="min-w-0">
                <p className="whitespace-nowrap text-[10px] font-bold tracking-[.06em] text-[var(--cyan)] min-[375px]:text-xs min-[375px]:tracking-[.08em]">AI APPLICATION DEVELOPER</p>
                <h1 className="mt-1 text-[clamp(2.3rem,9.5vw,3.75rem)] font-semibold leading-none tracking-[-.08em] text-[var(--ink-strong)]">
                  {profile.name}
                </h1>
                <p className="mt-1 break-words text-[13px] leading-5 text-[var(--muted)] min-[375px]:text-sm sm:text-[15px]">计算机视觉与 AI 方向研究生</p>
              </div>
              <Image
                src="/avatar.jpg"
                alt="何畅金"
                width={1794}
                height={1876}
                unoptimized
                sizes="(min-width: 640px) 6rem, (min-width: 375px) 5rem, 4rem"
                className="mt-1 h-[4.5rem] w-[4.5rem] shrink-0 rotate-[-3deg] rounded-[48%_52%_45%_55%/46%_48%_52%_54%] object-cover shadow-[0_10px_20px_rgba(50,67,75,.12)] min-[375px]:h-20 min-[375px]:w-20 sm:h-24 sm:w-24"
              />
            </div>

            <p className="max-w-[24rem] text-[clamp(1.8rem,8vw,3.15rem)] font-semibold leading-[1.02] tracking-[-.075em] text-[var(--ink-strong)]">
              我把 AI，<span className="block whitespace-nowrap text-[var(--blue)] max-[359px]:whitespace-normal">做成好用的软件。</span>
            </p>
          </div>

          <section className="mt-4 sm:mt-5" aria-label="个人简介">
            <div className="space-y-2.5 text-[15px] leading-6 text-[var(--muted)] sm:text-[15px] sm:leading-7">
              {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </section>
        </article>
      </div>
    </section>
  );
}
