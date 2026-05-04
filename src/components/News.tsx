"use client";
import { usePathname } from "next/navigation";
import { getLocale, localePath } from "@/lib/i18n";

const NEWS = [
  {
    fr: "Augmentation de notre capacité de stockage !",
    en: "Increase of our storage capacity!",
    dateFr: "28 Déc 2025",
    dateEn: "Dec 28, 2025",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80",
    href: "/augmentation-de-notre-capacite-de-stockage",
  },
  {
    fr: "CAPEX participe au SIAL 2026 !",
    en: "CAPEX is taking part in SIAL 2026!",
    dateFr: "19 Déc 2025",
    dateEn: "Dec 19, 2025",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80",
    href: "/capex-participe-au-sial-2026",
  },
  {
    fr: "CAPEX participe au Gulfood Dubaï 2026 !",
    en: "CAPEX is taking part in Gulfood Dubai 2026!",
    dateFr: "10 Nov 2025",
    dateEn: "Nov 10, 2025",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
    href: "/capex-participe-au-gulfood-dubai-2026",
  },
];

export default function News() {
  const locale = getLocale(usePathname());
  const isEN = locale === "en";
  return (
    <section className="container-x py-12 md:py-16">
      <h2 className="text-center text-[28px] md:text-[38px] leading-[1.2] md:leading-[45px] text-gray-800 mb-12">
        {isEN ? (
          <><strong className="font-bold">Capex</strong> news</>
        ) : (
          <>L&apos;actualité <strong className="font-bold">Capex</strong></>
        )}
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {NEWS.map((n) => (
          <article key={n.href} className="text-center">
            <a href={n.href} className="block group overflow-hidden">
              <div className="aspect-[8/5] overflow-hidden bg-gray-200">
                <div
                  className="h-full w-full bg-cover bg-center transition duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${n.image})` }}
                />
              </div>
            </a>
            <h3 className="mt-5 text-[18px] md:text-[20px] font-medium text-gray-800">
              <a href={n.href} className="hover:text-brand transition">
                {isEN ? n.en : n.fr}
              </a>
            </h3>
            <div className="mt-2 text-sm text-gray-500">{isEN ? n.dateEn : n.dateFr}</div>
          </article>
        ))}
      </div>
      <div className="mt-12 text-center">
        <a
          href={localePath(locale, "/actualites")}
          className="inline-block rounded-md bg-brand px-6 py-3 text-sm font-medium text-white hover:bg-brand-dark transition"
        >
          {isEN ? "View all news" : "Voir toute l’actualité"}
        </a>
      </div>
    </section>
  );
}
