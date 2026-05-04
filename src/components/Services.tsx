"use client";
import { usePathname } from "next/navigation";
import { getLocale } from "@/lib/i18n";

const SERVICES = [
  {
    fr: "Négoce",
    en: "Trading",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="#008dd2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 26h36l-3 28H17z" />
        <path d="M24 26V16a8 8 0 0116 0v10" />
        <circle cx="24" cy="36" r="1.5" fill="#008dd2" />
        <circle cx="40" cy="36" r="1.5" fill="#008dd2" />
      </svg>
    ),
  },
  {
    fr: "Stockage",
    en: "Storage",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="#008dd2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 28L32 12l24 16v26H8z" />
        <rect x="22" y="36" width="20" height="18" />
        <path d="M22 44h20" />
      </svg>
    ),
  },
  {
    fr: "Manutention",
    en: "Handling",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="#008dd2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="32" width="22" height="18" />
        <path d="M30 22h14l10 14v14H30" />
        <circle cx="18" cy="54" r="4" />
        <circle cx="44" cy="54" r="4" />
        <path d="M14 38h10M14 44h10" />
      </svg>
    ),
  },
  {
    fr: "Expéditions",
    en: "Shipping",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="#008dd2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 46c4 4 8 4 12 0s8-4 12 0 8 4 12 0 8-4 12 0 8 4 12 0" />
        <path d="M10 40l8-22h28l8 22" />
        <path d="M32 18V6" />
      </svg>
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
