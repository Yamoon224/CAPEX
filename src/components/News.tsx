"use client";
import { usePathname } from "next/navigation";
import { getLocale, localePath } from "@/lib/i18n";

const NEWS = [
  {
    fr: "Augmentation de notre capacité de stockage !",
    en: "Increase of our storage capacity!",
    dateFr: "28 Déc 2025",
    dateEn: "Dec 28, 2025",
    image: "/news/stockage-2026.png",
    href: "/augmentation-de-notre-capacite-de-stockage",
  },
  {
    fr: "CAPEX participe au SIAL 2026 !",
    en: "CAPEX is taking part in SIAL 2026!",
    dateFr: "19 Déc 2025",
    dateEn: "Dec 19, 2025",
    image: "/news/sial-2026.png",
    href: "/capex-participe-au-sial-2026",
  },
  {
    fr: "CAPEX participe au Gulfood Dubaï 2026 !",
    en: "CAPEX is taking part in Gulfood Dubai 2026!",
    dateFr: "10 Nov 2025",
    dateEn: "Nov 10, 2025",
    image: "/news/gulfood-2026.png",
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
          <div key={n.href} className="blog-post-column">
            <div className="blog-post-entry post type-post status-publish format-standard has-post-thumbnail hentry category-non-classifiee">
              <div className="blog-post-image">
                <a href={n.href} className="">
                  <span
                    className="image-placeholder"
                    style={{ paddingBottom: "62.5%", backgroundColor: "#eeeeee" }}
                  >
                    <img
                      className="img-responsive img-2 lazyloaded"
                      width={400}
                      height={250}
                      alt={isEN ? n.en : n.fr}
                      title={isEN ? n.en : n.fr}
                      src={n.image}
                    />
                  </span>
                  <span className="hover-display">
                    <i className="icon-basic-link" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                      </svg>
                    </i>
                  </span>
                </a>
              </div>
              <div className="blog-post-content-container">
                <h3 className="blog-post-title">
                  <a href={n.href} className="">
                    {isEN ? n.en : n.fr}
                  </a>
                </h3>
                <div className="blog-post-date">{isEN ? n.dateEn : n.dateFr}</div>
              </div>
            </div>
          </div>
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
