"use client";
import { usePathname } from "next/navigation";
import { getLocale } from "@/lib/i18n";

const PICTOS = [
  {
    fr: (
      <>
        Nous traitons
        <br />
        votre commande <strong className="font-bold">en express</strong>
      </>
    ),
    en: (
      <>
        We process
        <br />
        your order <strong className="font-bold">in express</strong>
      </>
    ),
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="#008dd2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 38h18l4-8h26l4 8h8" />
        <circle cx="22" cy="50" r="6" />
        <circle cx="48" cy="50" r="6" />
        <path d="M14 22h12M10 30h16" />
      </svg>
    ),
  },
  {
    fr: (
      <>
        Expédition <strong className="font-bold">Maritime</strong>
        <br />
        ou Aérienne
      </>
    ),
    en: (
      <>
        <strong className="font-bold">Sea</strong> or <strong className="font-bold">Air</strong>
        <br />
        shipping
      </>
    ),
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="#008dd2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 46c4 4 8 4 12 0s8-4 12 0 8 4 12 0 8-4 12 0 8 4 12 0" />
        <path d="M10 40l8-22h28l8 22" />
        <path d="M32 18V8" />
        <path d="M22 14h20" />
      </svg>
    ),
  },
  {
    fr: (
      <>
        Capex vous assure
        <br />
        <strong className="font-bold">une couverture mondiale</strong>
      </>
    ),
    en: (
      <>
        Capex provides you with
        <br />
        <strong className="font-bold">worldwide coverage</strong>
      </>
    ),
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="#008dd2" strokeWidth="2.2">
        <circle cx="32" cy="32" r="26" />
        <ellipse cx="32" cy="32" rx="14" ry="26" />
        <path d="M6 32h52" strokeLinecap="round" />
        <path d="M32 6c-6 8-6 44 0 52" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function InfoPictos() {
  const isEN = getLocale(usePathname()) === "en";
  return (
    <section className="bg-bgblue py-10 md:py-12">
      <div className="container-x">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PICTOS.map((p, i) => (
            <div key={i} className="text-center">
              <div className="mx-auto h-[80px] w-[80px] md:h-[100px] md:w-[100px] flex items-center justify-center">
                {p.icon}
              </div>
              <h3 className="mt-4 text-[18px] md:text-[22px] font-medium text-gray-800 leading-snug">
                {isEN ? p.en : p.fr}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
