"use client";
import { usePathname } from "next/navigation";
import { getLocale } from "@/lib/i18n";

const SERVICES = [
  {
    fr: "Négoce",
    en: "Trading",
    icon: (
      <img src="/icons/negociation.svg" alt="" className="h-full w-full object-contain" />
    ),
  },
  {
    fr: "Stockage",
    en: "Storage",
    icon: (
      <img src="/icons/stock.svg" alt="" className="h-full w-full object-contain" />
    ),
  },
  {
    fr: "Manutention",
    en: "Handling",
    icon: (
      <img src="/icons/forklift.svg" alt="" className="h-full w-full object-contain" />
    ),
  },
  {
    fr: "Expéditions",
    en: "Shipping",
    icon: (
      <img src="/icons/cargo.svg" alt="" className="h-full w-full object-contain" />
    ),
  },
];

export default function Services() {
  const pathname = usePathname();
  const locale = getLocale(pathname);
  return (
    <section className="container-x pb-12 md:pb-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
        {SERVICES.map((s) => (
          <div key={s.fr} className="text-center">
            <div className="mx-auto h-[80px] w-[80px] md:h-[100px] md:w-[100px] flex items-center justify-center">
              {s.icon}
            </div>
            <h3 className="mt-4 text-[20px] md:text-[24px] font-medium text-gray-800">
              {locale === "en" ? s.en : s.fr}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
