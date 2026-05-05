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
      <img src="/icons/fast-delivery.svg" alt="" className="h-full w-full object-contain" />
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
      <img src="/icons/plane-boat.svg" alt="" className="h-full w-full object-contain" />
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
      <img src="/icons/earth.svg" alt="" className="h-full w-full object-contain" />
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
