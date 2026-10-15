import Image from "next/image";

const partners = [
  { name: "江门市中心医院", image: "/jiangmen-hospital-emblem.png", width: 110, height: 69 },
  { name: "东莞东华医院", image: "/donghua-hospital-emblem.png", width: 65, height: 49 },
];

export function MriPartners() {
  return (
    <div className="mt-6 border-y border-[#e5dfee] py-4">
      <p className="mb-3 text-[10px] font-medium tracking-widest text-[#8a7b9b]">合作单位</p>
      <ul aria-label="MRI 项目合作单位" className="grid grid-cols-2 gap-3 sm:gap-6">
        {partners.map((partner) => (
          <li key={partner.name} className="flex min-w-0 flex-col items-center gap-2 sm:flex-row sm:gap-3">
            <div className="grid h-12 w-16 shrink-0 place-items-center rounded-lg bg-white p-1.5">
              <Image src={partner.image} alt="" width={partner.width} height={partner.height} unoptimized className="max-h-10 w-auto max-w-full object-contain" />
            </div>
            <span className="text-center text-[11px] font-medium leading-5 text-[#76618d] sm:text-left sm:text-xs">{partner.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
