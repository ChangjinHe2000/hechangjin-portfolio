import Image from "next/image";

const partners = [
  { name: "江门市中心医院", image: "/jiangmen-hospital-emblem.png", width: 110, height: 69 },
  { name: "北京协和医院", image: "/pumch-emblem.png", width: 156, height: 133 },
  { name: "中国医科大学", image: "/cmu-emblem.png", width: 80, height: 82 },
] as const;

export function ResearchPartners() {
  return (
    <div className="mt-6 border-y border-[#e0e6ef] py-4">
      <p className="mb-3 text-[10px] font-medium tracking-widest text-[#748299]">合作单位</p>
      <ul aria-label="科研项目合作单位" className="grid grid-cols-3 gap-2 sm:gap-4">
        {partners.map((partner) => (
          <li key={partner.name} className="flex min-w-0 flex-col items-center gap-2 sm:flex-row sm:gap-3">
            <div className="grid h-12 w-14 shrink-0 place-items-center rounded-lg bg-white p-1.5">
              <Image src={partner.image} alt="" width={partner.width} height={partner.height} unoptimized className="max-h-10 w-auto max-w-full object-contain" />
            </div>
            <span className="text-center text-[10px] font-medium leading-5 text-[#53627b] sm:text-left sm:text-xs">{partner.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
